// Fulfils a paid Escalation Reply Letter (£9.99, "stage-reply-letter").
//
// Called by the Stripe webhook's new branch. Same shape as the Standard and
// Premium fulfilment in the webhook: Claude writes the letter from the appeal
// encoded in the Checkout Session metadata, pdfkit renders it, Resend emails
// it. The differences are the stage-specific prompt (src/lib/stage-letter.ts)
// and the email copy, which tells the buyer where to send the reply and by
// when.
//
// The Anthropic and Resend calls are injected so scripts/tests can run the
// branch on a constructed session object with no network and no real email.

import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import { OPERATORS } from "@/data/operators";
import { PRODUCTS } from "@/data/products";
import { generatePDF, escapeHtml } from "@/lib/letter-pdf";
import {
  STAGE_REPLY_LETTER_ID,
  parseStageReplySession,
  stageLetterInputFromAppeal,
  stageSystemPrompt,
  stageUserPrompt,
  stageLetterTitle,
  stageRecipient,
  stageFilenameSlug,
  stageSendingSteps,
  type StageLetterInput,
  type StageReplySavedAppeal,
} from "@/lib/stage-letter";

export interface OutboundEmail {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments: { filename: string; content: Buffer }[];
}

export interface PremiumLetters {
  letter: string;
  escalationLetter?: string;
  evidenceChecklist?: string;
}

export interface StageReplyDeps {
  // (system prompt, user prompt, max tokens) -> letter text.
  generateText: (system: string, user: string, maxTokens: number) => Promise<string>;
  // First-stage Premium pipeline, used only when the buyer bundled the
  // Premium Appeal Pack. The webhook passes its own generateLetter.
  generatePremium?: (appeal: StageReplySavedAppeal) => Promise<PremiumLetters>;
  sendEmail: (message: OutboundEmail) => Promise<void>;
}

export type StageReplyOutcome =
  | { ok: true; sentTo: string; subject: string; attachments: string[]; letter: string }
  | { ok: false; reason: string };

// Same model and token budget as the webhook's first-stage letters.
export function defaultStageReplyDeps(): StageReplyDeps {
  return {
    generateText: async (system, user, maxTokens) => {
      if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY missing");
      const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
      const message = await anthropic.messages.create({
        model: "claude-sonnet-5",
        max_tokens: maxTokens,
        system,
        messages: [{ role: "user", content: user }],
      });
      const textBlock = message.content.find((b) => b.type === "text");
      if (!textBlock || textBlock.type !== "text") throw new Error("No letter content returned");
      return textBlock.text;
    },
    sendEmail: async (message) => {
      if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY missing");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send(message);
      if (error) throw new Error(`Resend error: ${JSON.stringify(error)}`);
    },
  };
}

// POPLA for BPA members, IAS for IPC members, from the operator data. The
// dropdown offers custom names, so an unknown operator returns undefined and
// the letter carries a [POPLA / IAS] placeholder instead of a guess.
export function appealBodyForOperator(name?: string): "POPLA" | "IAS" | undefined {
  if (!name) return undefined;
  const n = name.trim().toLowerCase();
  if (!n) return undefined;
  const op =
    OPERATORS.find((o) => o.name.toLowerCase() === n || o.fullName.toLowerCase() === n) ||
    OPERATORS.find((o) => n.includes(o.name.toLowerCase()));
  return op?.appealBody;
}

export function buildStageReplyEmail(
  input: StageLetterInput,
  to: string,
  letter: string,
  premium: PremiumLetters | undefined,
  attachments: { filename: string; content: Buffer }[]
): OutboundEmail {
  const title = stageLetterTitle(input.stage, input.fineType);
  const recipient = stageRecipient(input);
  const dateStr = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const productName = premium
    ? `${PRODUCTS[STAGE_REPLY_LETTER_ID].name} + ${PRODUCTS["premium-pack"].name}`
    : PRODUCTS[STAGE_REPLY_LETTER_ID].name;
  const issuer = input.operatorName || input.councilName || "the issuer";
  const hasSender = Boolean(input.senderName?.trim() && input.senderAddress?.trim());
  const steps = [
    hasSender
      ? "Check your name and address are correct at the top of the letter"
      : "Open the attached PDF and replace [YOUR NAME] and [YOUR ADDRESS] with your real details. If you cannot type into the PDF, copy the letter text into a document first",
    "Fill in any remaining [BRACKETED] items, such as their reference or the date on their letter, and delete any option you do not need",
    ...stageSendingSteps(input.stage, input.fineType),
    "Keep a copy of everything you send and receive",
  ];

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
      <div style="background: #0d9488; padding: 28px 24px; text-align: center; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 700;">Your ${escapeHtml(title)} is Ready</h1>
        <p style="color: #ccfbf1; margin: 8px 0 0; font-size: 14px;">Your personalised reply is attached as a PDF</p>
      </div>
      <div style="padding: 28px 24px; background: #ffffff; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
        <p style="margin-top: 0; font-size: 15px;">Hi,</p>
        <p style="font-size: 15px; line-height: 1.6;">Your personalised <strong>${escapeHtml(title.toLowerCase())}</strong> addressed to <strong>${escapeHtml(recipient)}</strong> is attached as a PDF.${premium ? " Your Premium Appeal Pack documents are attached to this email too." : ""}</p>
        <div style="background: #f0fdfa; border: 2px solid #99f6e4; border-radius: 10px; padding: 18px; margin: 24px 0;">
          <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
            <tr><td style="padding: 4px 0; color: #64748b; width: 120px;">Issued by</td><td style="padding: 4px 0; color: #1e293b; font-weight: 600;">${escapeHtml(issuer)}</td></tr>
            <tr><td style="padding: 4px 0; color: #64748b;">Reply to</td><td style="padding: 4px 0; color: #1e293b; font-weight: 600;">${escapeHtml(recipient)}</td></tr>
            ${input.vehicleReg ? `<tr><td style="padding: 4px 0; color: #64748b;">Vehicle</td><td style="padding: 4px 0; color: #1e293b; font-weight: 600;">${escapeHtml(input.vehicleReg)}</td></tr>` : ""}
            ${input.pcnReference ? `<tr><td style="padding: 4px 0; color: #64748b;">Reference</td><td style="padding: 4px 0; color: #1e293b;">${escapeHtml(input.pcnReference)}</td></tr>` : ""}
            ${input.stageLetterDate ? `<tr><td style="padding: 4px 0; color: #64748b;">Their letter</td><td style="padding: 4px 0; color: #1e293b;">${escapeHtml(input.stageLetterDate)}</td></tr>` : ""}
            <tr><td style="padding: 4px 0; color: #64748b;">Product</td><td style="padding: 4px 0; color: #1e293b;">${escapeHtml(productName)}</td></tr>
            <tr><td style="padding: 4px 0; color: #64748b;">Generated</td><td style="padding: 4px 0; color: #1e293b;">${dateStr}</td></tr>
          </table>
        </div>
        ${premium?.evidenceChecklist ? `
        <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; padding: 18px; margin: 24px 0;">
          <h3 style="margin: 0 0 10px; font-size: 14px; color: #92400e; text-transform: uppercase; letter-spacing: 0.05em;">Evidence Checklist</h3>
          <pre style="white-space: pre-wrap; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; line-height: 1.6; color: #78350f; margin: 0;">${escapeHtml(premium.evidenceChecklist)}</pre>
        </div>` : ""}
        <div style="background: #f0fdfa; border-left: 4px solid #0d9488; padding: 16px 18px; margin: 24px 0; border-radius: 0 8px 8px 0;">
          <h4 style="margin: 0 0 10px; color: #0f766e; font-size: 14px; font-weight: 700;">Before You Send</h4>
          <ol style="font-size: 13px; color: #115e59; padding-left: 18px; margin: 0; line-height: 1.8;">
            ${steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("\n            ")}
          </ol>
        </div>
        <div style="text-align: center; margin: 28px 0 16px;">
          <a href="https://www.appealafine.co.uk/escalation-pack" style="display: inline-block; background: #0d9488; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">What happens at the next stage</a>
        </div>
      </div>
      <div style="background: #1e293b; padding: 20px 24px; text-align: center; border-radius: 0 0 12px 12px;">
        <p style="color: #e2e8f0; font-size: 13px; margin: 0 0 6px; font-weight: 600;">AppealAFine</p>
        <p style="color: #94a3b8; font-size: 11px; margin: 0;"><a href="https://www.appealafine.co.uk" style="color: #5eead4; text-decoration: none;">appealafine.co.uk</a></p>
        <p style="color: #64748b; font-size: 10px; margin: 10px 0 0; line-height: 1.5;">Document preparation service, not a law firm. For legal advice consult a qualified solicitor.</p>
      </div>
    </div>`;

  return {
    from: "Appeal a Fine <appeals@appealafine.co.uk>",
    to,
    subject: `Your ${title}: ${recipient}`,
    html: htmlBody,
    attachments,
  };
}

export async function fulfilStageReplyLetter(
  session: {
    metadata?: Record<string, string> | null;
    customer_details?: { email?: string | null } | null;
    customer_email?: string | null;
  },
  deps: StageReplyDeps = defaultStageReplyDeps()
): Promise<StageReplyOutcome> {
  const parsed = parseStageReplySession(session);
  if (!parsed.ok) return { ok: false, reason: parsed.reason };
  const { appeal, stage, email, addOns } = parsed;

  const input = stageLetterInputFromAppeal(appeal, stage, appealBodyForOperator(appeal.form.operatorName));
  const letter = await deps.generateText(stageSystemPrompt(stage, input.fineType), stageUserPrompt(input), 3500);

  const title = stageLetterTitle(stage, input.fineType);
  const recipient = stageRecipient(input);
  const slug = stageFilenameSlug(input);
  const day = new Date().toISOString().slice(0, 10);
  const attachments: { filename: string; content: Buffer }[] = [
    {
      filename: `${title.replace(/\s+/g, "-")}-${slug}-${day}.pdf`,
      content: await generatePDF(letter, `${title}: ${recipient}`),
    },
  ];

  // Premium Appeal Pack add-on: the first-stage documents, generated by the
  // same pipeline a Premium purchase uses, attached with the same filenames.
  let premium: PremiumLetters | undefined;
  if (addOns.includes("premium-pack")) {
    if (!deps.generatePremium) throw new Error("Premium add-on purchased but no premium generator configured");
    premium = await deps.generatePremium({ ...appeal, productId: "premium-pack" });
    const issuer = (appeal.form.operatorName || appeal.form.councilName || "the parking operator").replace(/\s+/g, "-");
    attachments.push({
      filename: `Appeal-Letter-${issuer}-${day}.pdf`,
      content: await generatePDF(premium.letter, `Appeal Letter: ${issuer.replace(/-/g, " ")}`),
    });
    if (premium.escalationLetter) {
      attachments.push({
        filename: `Escalation-Letter-${issuer}.pdf`,
        content: await generatePDF(premium.escalationLetter, `Escalation Letter: ${issuer.replace(/-/g, " ")}`),
      });
    }
  }

  const message = buildStageReplyEmail(input, email, letter, premium, attachments);
  await deps.sendEmail(message);

  return {
    ok: true,
    sentTo: email,
    subject: message.subject,
    attachments: attachments.map((a) => a.filename),
    letter,
  };
}
