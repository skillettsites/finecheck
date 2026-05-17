import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import PDFDocument from "pdfkit";

// pdfkit reads .afm font files from disk and the Edge runtime cannot load
// these. outputFileTracingIncludes in next.config.ts ships them with the
// bundle for this route too (the config also covers /api/webhooks/stripe).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ============== Stripe ==============

function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY missing");
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

// ============== Appeal decoding ==============

interface SavedAppeal {
  form: {
    fineType: string;
    councilName?: string;
    operatorName?: string;
    pcnReference?: string;
    location?: string;
    vehicleReg?: string;
    email?: string;
    fineAmount?: string;
    fineDate?: string;
    parkingEventDate?: string;
    ntkReceivedDate?: string;
    circumstances?: string;
    whatHappened?: string;
    contraventionDescription?: string;
    wasDriver?: string;
  };
  assessment: {
    overallStrength: string;
    successProbability: number;
    letterArguments: string[];
    grounds: { title: string; legalBasis: string }[];
    nextSteps: string[];
  };
  productId: string;
}

function decodeAppealFromMetadata(meta: Record<string, string> | null): SavedAppeal | null {
  if (!meta) return null;
  const chunks = parseInt(meta.appeal_chunks || "0", 10);
  if (!chunks || chunks < 1) return null;
  let json = "";
  for (let i = 0; i < chunks; i++) {
    const part = meta[`appeal_${i}`];
    if (!part) return null;
    json += part;
  }
  try {
    return JSON.parse(json) as SavedAppeal;
  } catch {
    return null;
  }
}

// ============== Letter generation (Claude) ==============

const SYSTEM_PROMPT = `You are an expert UK parking law consultant specialising in appeal letters. You have extensive knowledge of:

LEGAL FRAMEWORK:
- Council Penalty Charge Notices (PCNs) are governed by the Traffic Management Act 2004 (TMA 2004) and the Civil Enforcement of Road Traffic Contraventions (Approved Devices, Charging and Adjudication) (England) Regulations 2022.
- Private parking charges are governed by contract law and the Protection of Freedoms Act 2012 (POFA), specifically Schedule 4 which establishes "keeper liability."
- The Private Parking Code of Practice (effective October 2024) sets binding standards for private operators including a £100 cap (£60 within 14 days), a mandatory 10 minute grace period, clear signage and fair debt recovery.
- The Consumer Rights Act 2015 means private parking charges must be fair and proportionate.
- Key case law: ParkingEye Ltd v Beavis [2015] UKSC 67.

POFA 2012 SCHEDULE 4 (private parking):
- Operator must be a BPA or IPC member.
- Notice to Keeper must be served within 14 days of the parking event (para 9).
- The NtK must contain specified information.
- If service is late or wording is wrong, keeper liability does not transfer.

APPEAL BODIES:
- Council PCNs in London: London Tribunals.
- Council PCNs outside London: Traffic Penalty Tribunal.
- Private parking (BPA members): POPLA.
- Private parking (IPC members): IAS.

LETTER REQUIREMENTS:
- Formal but firm. Reference legislation by name and section. State grounds clearly, one per paragraph.
- Include PCN reference, vehicle registration, location, dates.
- End with a specific request to cancel.

LETTER FORMAT:
[Sender Name]
[Sender Address]

[Date]

[Recipient]

RE: [Reference]
Vehicle Registration: [Reg]
Date of Alleged Contravention: [Date]
Location: [Location]

Dear Sir/Madam,

[Body]

Yours faithfully,
[Sender Name]

IMPORTANT RULES:
- Never use em dashes. Use commas, semicolons or separate sentences.
- Never fabricate case law or statutes.
- British English spelling throughout.`;

const PREMIUM_PROMPT = `Additionally, generate an escalation letter template AND an evidence checklist.

Use these EXACT section markers on their own line so the response can be parsed:

=== APPEAL LETTER ===
(the main appeal letter)

=== ESCALATION LETTER ===
(a follow up letter, referencing the original appeal, escalating to POPLA, IAS or the tribunal as appropriate)

=== EVIDENCE CHECKLIST ===
(a numbered list of every photo, document and record the appellant should gather, with a one line explanation of why each matters)

Do not add other top-level headings. Do not number the sections.`;

function buildUserPrompt(appeal: SavedAppeal): string {
  const f = appeal.form;
  const isPremium = appeal.productId === "premium-pack";
  const lines: string[] = [];
  lines.push("Generate a formal appeal letter for the following parking fine:");
  lines.push("");
  lines.push(`Fine Type: ${f.fineType === "private" ? "Private Parking Charge" : "Council PCN"}`);
  if (f.fineType === "private") {
    if (f.operatorName) lines.push(`Operator: ${f.operatorName}`);
    if (f.ntkReceivedDate) lines.push(`Notice to Keeper received: ${f.ntkReceivedDate}`);
  } else {
    if (f.councilName) lines.push(`Council: ${f.councilName}`);
  }
  if (f.vehicleReg) lines.push(`Vehicle Registration: ${f.vehicleReg}`);
  if (f.pcnReference) lines.push(`Reference Number: ${f.pcnReference}`);
  if (f.fineDate || f.parkingEventDate) {
    lines.push(`Date of Alleged Contravention: ${f.fineDate || f.parkingEventDate}`);
  }
  if (f.fineAmount) lines.push(`Fine Amount: £${f.fineAmount}`);
  if (f.location) lines.push(`Location: ${f.location}`);
  if (f.wasDriver === "no" || f.wasDriver === "prefer-not-to-say") {
    lines.push("Driver identification: NOT identified as driver");
  }
  lines.push("");
  lines.push("Circumstances:");
  lines.push(f.circumstances || f.whatHappened || "No circumstances provided.");
  lines.push("");
  lines.push("Grounds for Appeal:");
  appeal.assessment.grounds.forEach((g, i) => {
    lines.push(`${i + 1}. ${g.title} (${g.legalBasis})`);
  });
  lines.push("");
  lines.push("Sender Name: [YOUR NAME]");
  lines.push("Sender Address: [YOUR ADDRESS]");
  lines.push("");
  lines.push(`Today's Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`);
  if (isPremium) {
    lines.push("");
    lines.push(PREMIUM_PROMPT);
  }
  return lines.join("\n");
}

interface LetterResult {
  letter: string;
  escalationLetter?: string;
  evidenceChecklist?: string;
}

async function generateLetter(appeal: SavedAppeal): Promise<LetterResult> {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY missing");
  }
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const isPremium = appeal.productId === "premium-pack";
  const message = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: isPremium ? 5000 : 3000,
    system: SYSTEM_PROMPT,
    messages: [{ role: "user", content: buildUserPrompt(appeal) }],
  });
  const textBlock = message.content.find((b) => b.type === "text");
  if (!textBlock || textBlock.type !== "text") throw new Error("No letter content returned");
  const text = textBlock.text;

  if (!isPremium) return { letter: text };

  // Split premium response into sections
  const headingRe = /^[#*\s]*=*\s*(APPEAL LETTER|ESCALATION LETTER(?: TEMPLATE)?|FOLLOW-UP LETTER|EVIDENCE CHECKLIST)\s*=*\s*$/gim;
  const sections: { name: string; start: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = headingRe.exec(text)) !== null) {
    sections.push({ name: m[1].toUpperCase(), start: m.index + m[0].length, end: text.length });
  }
  for (let i = 0; i < sections.length - 1; i++) {
    sections[i].end = sections[i + 1].start - sections[i + 1].name.length;
  }
  const grab = (label: string) => {
    const s = sections.find((x) => x.name.startsWith(label));
    if (!s) return undefined;
    return text.substring(s.start, s.end).replace(/^[#*\s=]+/, "").replace(/[#*\s=]+$/, "").trim();
  };
  const main = grab("APPEAL LETTER") || text;
  const escalation = grab("ESCALATION LETTER") || grab("FOLLOW-UP LETTER");
  const checklist = grab("EVIDENCE CHECKLIST");
  return { letter: main, escalationLetter: escalation, evidenceChecklist: checklist };
}

// ============== PDF generation ==============

function generatePDF(content: string, title: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: 60, bottom: 60, left: 65, right: 65 },
    });
    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc.moveTo(65, 45).lineTo(530, 45).strokeColor("#0d9488").lineWidth(2).stroke();
    doc.fontSize(9).fillColor("#64748b").text(title, 65, 52, { align: "right" });
    doc.moveDown(1);

    const lines = content.split("\n");
    let y = doc.y;
    for (const line of lines) {
      if (y > 750) {
        doc.addPage();
        y = 60;
        doc.y = y;
      }
      const trimmed = line.trim();
      if (trimmed.startsWith("RE:") || trimmed.startsWith("Dear ") || trimmed.startsWith("Yours ")) {
        doc.fontSize(11).fillColor("#1e293b").font("Helvetica-Bold");
        doc.text(trimmed, { lineGap: 4 });
        doc.font("Helvetica");
      } else if (trimmed === "") {
        doc.moveDown(0.4);
      } else if (trimmed.match(/^\d+\.\s/) || trimmed.startsWith("- ")) {
        doc.fontSize(10.5).fillColor("#334155").font("Helvetica");
        doc.text(trimmed, { lineGap: 3, indent: 15 });
      } else {
        doc.fontSize(10.5).fillColor("#334155").font("Helvetica");
        doc.text(trimmed, { lineGap: 3 });
      }
      y = doc.y;
    }

    doc.moveDown(2);
    doc.moveTo(65, doc.y).lineTo(530, doc.y).strokeColor("#e2e8f0").lineWidth(0.5).stroke();
    doc.moveDown(0.5);
    doc.fontSize(8).fillColor("#94a3b8").text(
      "Generated by AppealAFine (appealafine.co.uk). Document preparation service, not legal advice.",
      { align: "center" }
    );
    doc.end();
  });
}

// ============== Email ==============

function escapeHtml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

async function sendLetterEmail(appeal: SavedAppeal, result: LetterResult): Promise<void> {
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY missing");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const recipient = appeal.form.operatorName || appeal.form.councilName || "the parking operator";
  const fineLabel = appeal.form.fineType === "private" ? "parking charge" : "Penalty Charge Notice";
  const subject = `Your Appeal Letter: ${recipient}`;
  const dateStr = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const productName = appeal.productId === "premium-pack" ? "Premium Appeal Pack" : "Standard Appeal Letter";

  const attachments: { filename: string; content: Buffer }[] = [];
  const mainPdf = await generatePDF(result.letter, `Appeal Letter: ${recipient}`);
  attachments.push({
    filename: `Appeal-Letter-${recipient.replace(/\s+/g, "-")}-${new Date().toISOString().slice(0, 10)}.pdf`,
    content: mainPdf,
  });
  if (result.escalationLetter) {
    const escalationPdf = await generatePDF(result.escalationLetter, `Escalation Letter: ${recipient}`);
    attachments.push({
      filename: `Escalation-Letter-${recipient.replace(/\s+/g, "-")}.pdf`,
      content: escalationPdf,
    });
  }

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
      <div style="background: #0d9488; padding: 28px 24px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 700;">Your Appeal Letter is Ready</h1>
        <p style="color: #ccfbf1; margin: 8px 0 0; font-size: 14px;">Your personalised letter is attached as a PDF</p>
      </div>
      <div style="padding: 28px 24px; background: #ffffff; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
        <p style="margin-top: 0; font-size: 15px;">Hi,</p>
        <p style="font-size: 15px; line-height: 1.6;">Your personalised appeal letter for the <strong>${escapeHtml(fineLabel)}</strong> from <strong>${escapeHtml(recipient)}</strong> is attached as a PDF.</p>
        <div style="background: #f0fdfa; border: 2px solid #99f6e4; border-radius: 10px; padding: 18px; margin: 24px 0;">
          <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
            <tr><td style="padding: 4px 0; color: #64748b; width: 120px;">Issued by</td><td style="padding: 4px 0; color: #1e293b; font-weight: 600;">${escapeHtml(recipient)}</td></tr>
            ${appeal.form.vehicleReg ? `<tr><td style="padding: 4px 0; color: #64748b;">Vehicle</td><td style="padding: 4px 0; color: #1e293b; font-weight: 600;">${escapeHtml(appeal.form.vehicleReg)}</td></tr>` : ""}
            ${appeal.form.location ? `<tr><td style="padding: 4px 0; color: #64748b;">Location</td><td style="padding: 4px 0; color: #1e293b;">${escapeHtml(appeal.form.location)}</td></tr>` : ""}
            ${appeal.form.fineDate ? `<tr><td style="padding: 4px 0; color: #64748b;">Date</td><td style="padding: 4px 0; color: #1e293b;">${escapeHtml(appeal.form.fineDate)}</td></tr>` : ""}
            <tr><td style="padding: 4px 0; color: #64748b;">Product</td><td style="padding: 4px 0; color: #1e293b;">${escapeHtml(productName)}</td></tr>
            <tr><td style="padding: 4px 0; color: #64748b;">Generated</td><td style="padding: 4px 0; color: #1e293b;">${dateStr}</td></tr>
          </table>
        </div>
        ${result.evidenceChecklist ? `
        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; padding: 18px; margin: 24px 0;">
          <h3 style="margin: 0 0 10px; font-size: 14px; color: #92400e; text-transform: uppercase; letter-spacing: 0.05em;">Evidence Checklist</h3>
          <pre style="white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; line-height: 1.6; color: #78350f; margin: 0;">${escapeHtml(result.evidenceChecklist)}</pre>
        </div>` : ""}
        <div style="background: #f0fdfa; border-left: 4px solid #0d9488; padding: 16px 18px; margin: 24px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin: 0 0 10px; color: #0f766e; font-size: 14px; font-weight: 700;">Before You Send</h4>
          <ol style="font-size: 13px; color: #115e59; padding-left: 18px; margin: 0; line-height: 1.8;">
            <li>Open the attached PDF and replace <strong>[YOUR NAME]</strong> and <strong>[YOUR ADDRESS]</strong> with your real details</li>
            <li>Review the letter carefully and adjust any specifics</li>
            <li>Print or email it to ${escapeHtml(recipient)}'s appeals department</li>
            <li>Attach supporting evidence (photos, receipts, bank statements)</li>
            <li>Keep a copy of everything you send</li>
            <li>Submit before your appeal deadline expires</li>
          </ol>
        </div>
        <div style="text-align: center; margin: 28px 0 16px;">
          <a href="https://www.appealafine.co.uk/guides" style="display: inline-block; background: #0d9488; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">Read Our Appeal Guides</a>
        </div>
      </div>
      <div style="background: #1e293b; padding: 20px 24px; text-align: center; border-radius: 0 0 12px 12px;">
        <p style="color: #e2e8f0; font-size: 13px; margin: 0 0 6px; font-weight: 600;">AppealAFine</p>
        <p style="color: #94a3b8; font-size: 11px; margin: 0;"><a href="https://www.appealafine.co.uk" style="color: #5eead4; text-decoration: none;">appealafine.co.uk</a></p>
        <p style="color: #64748b; font-size: 10px; margin: 10px 0 0; line-height: 1.5;">Document preparation service, not a law firm. For legal advice consult a qualified solicitor.</p>
      </div>
    </div>`;

  const { error } = await resend.emails.send({
    from: "Appeal a Fine <appeals@appealafine.co.uk>",
    to: appeal.form.email!,
    subject,
    html: htmlBody,
    attachments,
  });
  if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
}

// ============== Webhook handler ==============

export async function POST(request: NextRequest) {
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("STRIPE_WEBHOOK_SECRET not set");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const rawBody = await request.text();
  const stripe = getStripe();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true, ignored: event.type });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  // Idempotency lock: mark the payment_intent metadata.fulfilled='true'
  // BEFORE generating, so retries and races see the lock and skip.
  const piId = typeof session.payment_intent === "string"
    ? session.payment_intent
    : session.payment_intent?.id;

  try {
    if (piId) {
      const pi = await stripe.paymentIntents.retrieve(piId);
      if (pi.metadata?.fulfilled === "true") {
        return NextResponse.json({ ok: true, skipped: "already_fulfilled" });
      }
      // claim the lock
      await stripe.paymentIntents.update(piId, {
        metadata: { ...pi.metadata, fulfilled: "true", fulfilled_at: new Date().toISOString() },
      });
    }

    const appeal = decodeAppealFromMetadata(session.metadata || null);
    if (!appeal) {
      // Legacy GET-flow session: no appeal data encoded. Client-side flow
      // remains responsible for delivery. Stripe receipt still sent by Stripe.
      console.warn(`Webhook: session ${session.id} has no appeal metadata, skipping server-side send`);
      return NextResponse.json({ ok: true, skipped: "no_appeal_data" });
    }
    if (!appeal.form?.email) {
      console.warn(`Webhook: session ${session.id} appeal has no email`);
      return NextResponse.json({ ok: true, skipped: "no_email" });
    }

    const result = await generateLetter(appeal);
    await sendLetterEmail(appeal, result);

    if (piId) {
      const pi = await stripe.paymentIntents.retrieve(piId);
      await stripe.paymentIntents.update(piId, {
        metadata: { ...pi.metadata, letter_sent_at: new Date().toISOString() },
      });
    }

    return NextResponse.json({ ok: true, sent_to: appeal.form.email });
  } catch (err) {
    // Release the lock so Stripe can retry by clearing fulfilled flag.
    if (piId) {
      try {
        const pi = await stripe.paymentIntents.retrieve(piId);
        const next: Record<string, string> = { ...pi.metadata };
        delete next.fulfilled;
        delete next.fulfilled_at;
        next.last_error = (err as Error).message?.slice(0, 480) || "unknown";
        next.last_error_at = new Date().toISOString();
        await stripe.paymentIntents.update(piId, { metadata: next });
      } catch (clearErr) {
        console.error("Failed to release webhook lock:", clearErr);
      }
    }
    console.error("Webhook processing error:", err);
    // Return 500 so Stripe retries
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}
