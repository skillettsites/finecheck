import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

interface GenerateLetterRequest {
  fineType: "council" | "private";
  // Council fields
  councilName?: string;
  contraventionCode?: string;
  // Private fields
  operatorName?: string;
  // Common fields
  vehicleReg: string;
  referenceNumber: string;
  fineDate: string;
  fineAmount: number;
  discountedAmount?: number;
  location: string;
  circumstances: string;
  // POFA specific (private only)
  ntkReceivedDate?: string;
  ntkHasCorrectWording?: boolean;
  driverIdentified?: boolean;
  // Appeal details
  appealGrounds: string[];
  senderName: string;
  senderAddress: string;
  // Product type
  product: "basic" | "premium" | "court";
  // Payment verification
  sessionId: string;
}

const SYSTEM_PROMPT = `You are an expert UK parking law consultant specialising in appeal letters. You have extensive knowledge of:

LEGAL FRAMEWORK:
- Council Penalty Charge Notices (PCNs) are governed by the Traffic Management Act 2004 (TMA 2004) and the Civil Enforcement of Road Traffic Contraventions (Approved Devices, Charging and Adjudication) (England) Regulations 2022.
- Private parking charges are governed by contract law and the Protection of Freedoms Act 2012 (POFA), specifically Schedule 4 which establishes "keeper liability."
- The Private Parking Code of Practice (effective October 2024) sets binding standards for private operators. Key provisions include:
  - Maximum parking charge of £100 (reduced to £60 if paid within 14 days)
  - Mandatory grace period of at least 10 minutes
  - Clear and prominent signage requirements
  - Fair debt recovery practices
  - A single appeals service for all operators
- The Consumer Rights Act 2015 means private parking charges must be fair and proportionate.
- Key case law: ParkingEye Ltd v Beavis [2015] UKSC 67 established that private parking charges can be enforceable, but only if they are not a penalty and serve a legitimate interest.

POFA 2012 SCHEDULE 4 REQUIREMENTS (private parking only):
- The operator must be a member of an accredited trade association (BPA or IPC)
- A Notice to Keeper (NtK) must be served within 14 days of the parking event (para 9)
- The NtK must contain specific information including the amount, how to pay, how to appeal, and the consequences of not paying
- If the NtK is late, contains incorrect wording, or was not served at all, keeper liability does not transfer
- The driver (not the keeper) is the primary liable party; keeper liability is secondary

COUNCIL PCN REQUIREMENTS:
- PCNs must comply with the Traffic Management Act 2004
- The contravention must be properly evidenced
- Signage and road markings must comply with the Traffic Signs Regulations and General Directions 2016
- Traffic Regulation Orders (TROs) must be in place and correctly published
- The PCN itself must contain all required information
- The Notice to Owner (NtO) must be served within specified timeframes

APPEAL BODIES:
- Council PCNs in London: London Tribunals (formerly PATAS)
- Council PCNs outside London: Traffic Penalty Tribunal (TPT)
- Private parking (BPA members): Parking on Private Land Appeals (POPLA)
- Private parking (IPC members): Independent Appeals Service (IAS)
- From October 2024 under the new Code: a single appeals service is being established

LETTER REQUIREMENTS:
- Formal tone throughout. Be assertive but polite, never aggressive or rude.
- Reference specific legislation, regulations, and case law by name and section number.
- Include the PCN or parking charge reference number prominently.
- State the grounds for appeal clearly and logically, one ground per paragraph where possible.
- Include all relevant dates (date of alleged contravention, date PCN received, date of NtK if applicable).
- End with a clear, specific request to cancel the charge.
- For private parking: address to the operator by name, reference POFA Schedule 4 if there are procedural issues, reference the Code of Practice if the charge exceeds caps or grace periods were not given.
- For council PCNs: address to the council enforcement department, reference the TMA 2004 and any relevant contravention code.

LETTER FORMAT:
[Sender Name]
[Sender Address]

[Date]

[Recipient Name/Department]
[Recipient Address if known, otherwise "To the Enforcement Department"]

RE: [PCN Reference Number / Parking Charge Notice Reference]
Vehicle Registration: [Registration]
Date of Alleged Contravention: [Date]
Location: [Location]

Dear Sir/Madam,

[Opening paragraph: state you are writing to formally challenge/appeal the above charge]

[Body paragraphs: one ground per paragraph, each referencing specific law/regulation]

[Closing paragraph: summarise your position and request cancellation]

[If private: note that you reserve the right to escalate to POPLA/IAS if the appeal is rejected]
[If council informal: note that you reserve the right to make formal representations if the challenge is rejected]

Yours faithfully,
[Sender Name]

IMPORTANT RULES:
- Never use em dashes. Use commas, semicolons, colons, or separate sentences instead.
- Never fabricate case law, legislation, or statutory references. Only cite real, verifiable sources.
- If the grounds for appeal are weak, still write the best possible letter but do not overstate the case or make claims that cannot be supported.
- Be specific to the circumstances described. Generic template language weakens appeals.
- Use British English spelling and conventions throughout.`;

const PREMIUM_ESCALATION_PROMPT = `Additionally, generate an escalation letter template. This is a follow-up letter to be sent if the initial appeal is rejected. It should:
- Reference the original appeal and its reference number
- Note that the appeal was rejected and the date of rejection
- State that the motorist is now escalating to [POPLA/IAS/tribunal as appropriate]
- Reiterate the strongest grounds from the original appeal
- Include any new evidence or arguments
- Reference the right to escalate under the relevant Code of Practice or legislation
- Maintain the same formal tone

Also generate an evidence checklist specific to this case, listing exactly what photos, documents, and records the appellant should gather and submit.

Format the escalation letter with the same formal structure as the main letter. Format the evidence checklist as a numbered list with brief explanations of why each item is important.`;

const COURT_DEFENCE_PROMPT = `Additionally, generate a witness statement suitable for use in County Court proceedings. This should:
- Follow the standard witness statement format used in the County Court
- Begin with "I, [name], of [address], state as follows:"
- Number each paragraph
- Set out the facts chronologically
- Reference any procedural failures by the operator
- Reference relevant legislation and case law
- Include a statement of truth: "I believe that the facts stated in this witness statement are true. I understand that proceedings for contempt of court may be brought against anyone who makes, or causes to be made, a false statement in a document verified by a statement of truth without an honest belief in its truth."
- Be signed and dated

Also generate a legal defence summary covering:
- The key legal arguments for the defence
- Relevant case law with brief summaries of each case
- Procedural defences (POFA compliance, limitation periods, etc.)
- Potential weaknesses the claimant may exploit
- Recommended next steps

Format the witness statement and defence summary as separate, clearly labelled documents.`;

function validateRequest(body: GenerateLetterRequest): string | null {
  if (!body.fineType || !["council", "private"].includes(body.fineType)) {
    return "fineType must be 'council' or 'private'";
  }
  if (!body.vehicleReg || body.vehicleReg.trim().length === 0) {
    return "Vehicle registration is required";
  }
  if (!body.referenceNumber || body.referenceNumber.trim().length === 0) {
    return "PCN reference number is required";
  }
  if (!body.fineDate) {
    return "Fine date is required";
  }
  if (!body.fineAmount || body.fineAmount <= 0) {
    return "Fine amount must be a positive number";
  }
  if (!body.location || body.location.trim().length === 0) {
    return "Location is required";
  }
  if (!body.circumstances || body.circumstances.trim().length < 10) {
    return "Please provide more detail about the circumstances (at least 10 characters)";
  }
  if (!body.appealGrounds || body.appealGrounds.length === 0) {
    return "At least one appeal ground is required";
  }
  if (!body.senderName || body.senderName.trim().length === 0) {
    return "Your name is required";
  }
  if (!body.senderAddress || body.senderAddress.trim().length === 0) {
    return "Your address is required";
  }
  if (!body.product || !["basic", "premium", "court"].includes(body.product)) {
    return "Product must be 'basic', 'premium', or 'court'";
  }
  if (!body.sessionId || body.sessionId.trim().length === 0) {
    return "Payment session ID is required";
  }
  if (body.fineType === "council" && !body.councilName) {
    return "Council name is required for council PCNs";
  }
  if (body.fineType === "private" && !body.operatorName) {
    return "Operator name is required for private parking charges";
  }
  return null;
}

function buildUserPrompt(body: GenerateLetterRequest): string {
  const lines: string[] = [];

  lines.push("Generate a formal appeal letter for the following parking fine:");
  lines.push("");
  lines.push(`Fine Type: ${body.fineType === "council" ? "Council PCN" : "Private Parking Charge"}`);

  if (body.fineType === "council") {
    lines.push(`Council: ${body.councilName}`);
    if (body.contraventionCode) {
      lines.push(`Contravention Code: ${body.contraventionCode}`);
    }
  } else {
    lines.push(`Operator: ${body.operatorName}`);
    if (body.ntkReceivedDate) {
      lines.push(`Notice to Keeper received: ${body.ntkReceivedDate}`);
    }
    if (body.ntkHasCorrectWording !== undefined) {
      lines.push(`NtK has correct wording: ${body.ntkHasCorrectWording ? "Yes" : "No / Unsure"}`);
    }
    if (body.driverIdentified !== undefined) {
      lines.push(`Driver identified: ${body.driverIdentified ? "Yes" : "No"}`);
    }
  }

  lines.push(`Vehicle Registration: ${body.vehicleReg}`);
  lines.push(`Reference Number: ${body.referenceNumber}`);
  lines.push(`Date of Alleged Contravention: ${body.fineDate}`);
  lines.push(`Fine Amount: £${(body.fineAmount / 100).toFixed(2)}`);
  if (body.discountedAmount) {
    lines.push(`Discounted Amount: £${(body.discountedAmount / 100).toFixed(2)}`);
  }
  lines.push(`Location: ${body.location}`);
  lines.push("");
  lines.push("Circumstances:");
  lines.push(body.circumstances);
  lines.push("");
  lines.push("Grounds for Appeal:");
  body.appealGrounds.forEach((ground, i) => {
    lines.push(`${i + 1}. ${ground}`);
  });
  lines.push("");
  lines.push(`Sender Name: ${body.senderName}`);
  lines.push(`Sender Address: ${body.senderAddress}`);
  lines.push("");
  lines.push(`Today's Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`);

  if (body.product === "premium") {
    lines.push("");
    lines.push(PREMIUM_ESCALATION_PROMPT);
  } else if (body.product === "court") {
    lines.push("");
    lines.push(PREMIUM_ESCALATION_PROMPT);
    lines.push("");
    lines.push(COURT_DEFENCE_PROMPT);
  }

  return lines.join("\n");
}

export async function POST(request: Request) {
  try {
    const body: GenerateLetterRequest = await request.json();

    // Validate input
    const validationError = validateRequest(body);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    // TODO: Verify payment session with Stripe
    // In production, verify body.sessionId against Stripe to confirm payment
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    // const session = await stripe.checkout.sessions.retrieve(body.sessionId);
    // if (session.payment_status !== 'paid') {
    //   return NextResponse.json({ error: 'Payment not confirmed' }, { status: 402 });
    // }

    const userPrompt = buildUserPrompt(body);

    // Determine max tokens based on product
    const maxTokens = body.product === "court" ? 8000 : body.product === "premium" ? 5000 : 3000;

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: maxTokens,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

    // Extract text content from the response
    const textContent = message.content.find((block) => block.type === "text");
    if (!textContent || textContent.type !== "text") {
      return NextResponse.json(
        { error: "Failed to generate letter content" },
        { status: 500 }
      );
    }

    const letterContent = textContent.text;

    // For premium and court products, split the response into sections
    const response: {
      letter: string;
      escalationLetter?: string;
      evidenceChecklist?: string;
      witnessStatement?: string;
      legalDefenceSummary?: string;
    } = {
      letter: letterContent,
    };

    if (body.product === "premium" || body.product === "court") {
      // Try to extract sections from the response
      const escalationMatch = letterContent.match(
        /(?:ESCALATION LETTER|FOLLOW-UP LETTER|ESCALATION TEMPLATE)[:\s]*\n([\s\S]*?)(?=(?:EVIDENCE CHECKLIST|$))/i
      );
      const checklistMatch = letterContent.match(
        /EVIDENCE CHECKLIST[:\s]*\n([\s\S]*?)(?=(?:WITNESS STATEMENT|LEGAL DEFENCE|$))/i
      );

      if (escalationMatch) {
        response.escalationLetter = escalationMatch[1].trim();
      }
      if (checklistMatch) {
        response.evidenceChecklist = checklistMatch[1].trim();
      }

      if (body.product === "court") {
        const witnessMatch = letterContent.match(
          /WITNESS STATEMENT[:\s]*\n([\s\S]*?)(?=(?:LEGAL DEFENCE SUMMARY|DEFENCE SUMMARY|$))/i
        );
        const defenceMatch = letterContent.match(
          /(?:LEGAL DEFENCE SUMMARY|DEFENCE SUMMARY)[:\s]*\n([\s\S]*?)$/i
        );

        if (witnessMatch) {
          response.witnessStatement = witnessMatch[1].trim();
        }
        if (defenceMatch) {
          response.legalDefenceSummary = defenceMatch[1].trim();
        }
      }

      // If we found sections, extract just the main letter
      if (escalationMatch) {
        const mainLetterEnd = letterContent.indexOf(escalationMatch[0]);
        if (mainLetterEnd > 0) {
          response.letter = letterContent.substring(0, mainLetterEnd).trim();
        }
      }
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error generating letter:", error);

    if (error instanceof Anthropic.APIError) {
      return NextResponse.json(
        {
          error: "Our letter generation service is temporarily unavailable. Please try again in a few minutes.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again or contact support@finecheck.co.uk.",
      },
      { status: 500 }
    );
  }
}
