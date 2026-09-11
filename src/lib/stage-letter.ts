// Escalation Reply Letter (£9.99, product id "stage-reply-letter").
//
// The appeal flow always wrote first-stage appeal letters, yet 41% of search
// clicks land on debt-collector, Letter Before Claim and rejected-appeal
// content. Those readers need a different document: the POPLA or IAS
// submission after a rejection, the reply to a debt recovery firm, or the
// Pre-Action Protocol response to a solicitor's Letter Before Claim.
//
// Everything in this file is pure (no network, no env) so the webhook, the
// client-side /api/generate-letter route and the success page all build the
// same prompt and the same instant preview, and it can be unit tested with
// node:test without a runner. The Anthropic, PDF and Resend calls stay in the
// routes that own them.
//
// Legal positions here deliberately mirror the static Escalation Pack in
// src/data/escalation-pack.ts, which was checked when it shipped. Nothing new
// is asserted that the pack does not already assert.

import type { AppealStage } from "./types";

export const STAGE_REPLY_LETTER_ID = "stage-reply-letter";

// Metadata key the checkout route adds to the Stripe session so purchases can
// be split by stage without decoding the appeal JSON.
export const STAGE_METADATA_KEY = "stage";

// Stages the £9.99 letter is written for. Court claims go to the £19.99
// Escalation Pack instead (N1 defence checklist and witness statement
// skeleton), and "new" is the unchanged first-stage appeal path.
export const STAGE_REPLY_STAGES: readonly AppealStage[] = [
  "rejected",
  "popla-rejected",
  "collector",
  "letter-before-claim",
];

export function isStageReplyStage(stage: unknown): stage is AppealStage {
  return typeof stage === "string" && (STAGE_REPLY_STAGES as readonly string[]).includes(stage);
}

// Only the Premium Appeal Pack can be bundled with the reply letter. It is
// offered unticked at the later stages; the webhook generates its documents
// alongside the reply letter and attaches everything to the same email.
export const STAGE_ADD_ON_IDS: readonly string[] = ["premium-pack"];

export function sanitiseAddOns(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const out: string[] = [];
  for (const id of value) {
    if (typeof id === "string" && STAGE_ADD_ON_IDS.includes(id) && !out.includes(id)) out.push(id);
  }
  return out;
}

export interface StageLetterInput {
  stage: AppealStage;
  fineType: string;
  operatorName?: string;
  councilName?: string;
  // POPLA for BPA members, IAS for IPC members. Looked up from the operator
  // data where the operator is known; otherwise the letter uses a placeholder.
  appealBody?: "POPLA" | "IAS";
  pcnReference?: string;
  vehicleReg?: string;
  location?: string;
  fineDate?: string;
  parkingEventDate?: string;
  ntkReceivedDate?: string;
  fineAmount?: string;
  wasDriver?: string;
  circumstances?: string;
  whatHappened?: string;
  // The letter the reader is replying to: who sent it and the date on it.
  stageSenderName?: string;
  stageLetterDate?: string;
  senderName?: string;
  senderAddress?: string;
  grounds: { title: string; legalBasis: string }[];
}

// Grounds arrive as {title, legalBasis} from the assessment, or as a single
// "title (basis)" string from the client route, in which case legalBasis is "".
function groundLine(g: { title: string; legalBasis: string }): string {
  return g.legalBasis ? `${g.title} (${g.legalBasis})` : g.title;
}

function isPrivate(input: Pick<StageLetterInput, "fineType">): boolean {
  return input.fineType === "private";
}

function formatDate(iso?: string): string | undefined {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

// Short title used for the PDF header, the filename and the email subject.
export function stageLetterTitle(stage: AppealStage, fineType: string): string {
  const priv = fineType === "private";
  switch (stage) {
    case "rejected":
      return priv ? "POPLA or IAS Appeal Submission" : "Formal Representations to the Council";
    case "popla-rejected":
      return priv ? "Response to the POPLA or IAS Decision" : "Response to the Tribunal Decision";
    case "collector":
      return priv ? "Reply to Debt Recovery Letter" : "Reply to Enforcement Correspondence";
    case "letter-before-claim":
      return priv ? "Reply to Letter Before Claim" : "Reply to Pre-Court Correspondence";
    case "court-claim":
      return "Court Claim Response";
    default:
      return "Appeal Letter";
  }
}

// Who the letter is addressed to, for the email body and the preview.
export function stageRecipient(input: StageLetterInput): string {
  const operator = input.operatorName?.trim();
  const council = input.councilName?.trim();
  const sender = input.stageSenderName?.trim();
  if (isPrivate(input)) {
    switch (input.stage) {
      case "rejected":
        return input.appealBody === "IAS" ? "the IAS" : input.appealBody === "POPLA" ? "POPLA" : "POPLA or the IAS";
      case "popla-rejected":
        return operator || "the parking operator";
      case "collector":
        return sender || "the debt recovery company";
      case "letter-before-claim":
        return sender || "the solicitors";
      default:
        return operator || "the parking operator";
    }
  }
  if (input.stage === "popla-rejected") return council || "the council";
  return council || "the council";
}

// A filename-safe form of the recipient.
export function stageFilenameSlug(input: StageLetterInput): string {
  return stageRecipient(input).replace(/[^A-Za-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "reply";
}

/* ------------------------------------------------------------------ */
/*  Prompts                                                            */
/* ------------------------------------------------------------------ */

const BASE_SYSTEM_PROMPT = `You are an expert UK parking law consultant. You write reply letters for motorists whose parking charge is PAST the first appeal stage. You have extensive knowledge of:

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
- If service is late or wording is wrong, keeper liability does not transfer, and the operator cannot pursue the registered keeper.

AFTER THE FIRST APPEAL:
- POPLA hears appeals against BPA members and the IAS hears appeals against IPC members. The appeal must be lodged within 28 days of the operator's rejection using the code on the rejection letter. The operator must submit its evidence and the appellant is given the chance to comment on it.
- A POPLA or IAS decision against the motorist is not binding on the motorist, is not a court order and creates no debt. To enforce, the operator must issue and win a County Court claim.
- Debt recovery agents (DCBL, Debt Recovery Plus, Trace Debt Recovery, ZZPS and similar) act for the operator. Without a court judgment they have no enforcement powers, no bailiff may attend, and the alleged debt cannot be recorded on a credit file.
- "Debt recovery" sums added to the original charge (commonly £70) have been disallowed by the County Court as unrecoverable in numerous cases. Treat any sum above the original charge as disputed in full and require a breakdown. Presenting sums as legally due when they are not is capable of amounting to a misleading commercial practice under the Consumer Protection from Unfair Trading Regulations 2008, regulation 5.
- The Pre-Action Protocol for Debt Claims applies before a business sues an individual. A Letter Before Claim must give at least 30 days to respond and should enclose the Information Sheet and Reply Form prescribed by Annex 1 of the Protocol and a Financial Statement form. The recipient may dispute the debt and request the documents relied on; proceedings issued while that request is unanswered are premature and the court may reflect that in costs.
- Part payment acknowledges a debt. Never suggest paying part of a disputed charge.
- Never advise ignoring a Letter Before Claim or a court claim form.

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
- Formal but firm. Reference legislation by name and section. One ground per paragraph, numbered.
- The letter must state that nothing in it is an admission of liability or of any debt.
- If the motorist was not the driver or prefers not to say, never identify or imply who was driving.
- Never use em dashes. Use commas, semicolons or separate sentences.
- Never fabricate case law, statutes or paragraph numbers. Cite only what is set out above or in the grounds supplied.
- Where a fact is not supplied (their reference, their letter's date, the added amount), leave a [BRACKETED] placeholder rather than inventing it.
- British English spelling throughout.`;

const PRIVATE_STAGE_INSTRUCTIONS: Record<string, string> = {
  rejected: `TASK: The operator has rejected the first appeal. Write the appellant's submission to the independent appeals service (POPLA for a BPA member, the IAS for an IPC member). Address it to the appeals service named in the input, or use [POPLA / IAS] as a placeholder if the input does not say which. Open by quoting the appeal reference or verification code from the rejection letter as a placeholder if not supplied. Set out each ground in turn as a numbered point the assessor can rule on, in this order: keeper liability under POFA 2012 Schedule 4 (where the motorist was not the driver or the Notice to Keeper was late or defective), then landowner authority, then signage and contract formation, then the case-specific grounds supplied. State that the operator is required to produce its evidence on each point and that the appellant reserves the right to comment on it. Close by asking the assessor to allow the appeal and cancel the charge.`,
  "popla-rejected": `TASK: The independent appeals service (POPLA or the IAS) has rejected the appeal. Write a letter to the operator, not to the appeals service. It must state that the decision is not binding on the motorist, is not a court order and creates no debt; that the charge remains disputed in full on the grounds set out; that if the operator intends to pursue the matter it must comply with the Pre-Action Protocol for Debt Claims and produce the documents listed (landowner contract, signage photographs from the material date, the Notice to Keeper with evidence of its date of service, the photographs or ANPR records relied on, and a full breakdown of the sum claimed); and that any claim will be defended. Require all further contact in writing. Do not suggest that the motorist will pay.`,
  collector: `TASK: A debt recovery firm has written demanding payment on the operator's behalf. Write a single firm dispute letter to the debt recovery firm. It must: deny the debt in full and state that nothing in the letter is an admission; note any appeal that is open or was decided; require the firm's client to prove the debt with the landowner contract, signage photographs from the material date, the Notice to Keeper and evidence of its date of service showing compliance with POFA 2012 Schedule 4, evidence of BPA or IPC membership at the material time, and a full breakdown of the sum claimed; reject any sum above the original charge, citing the County Court's disallowance of add-on recovery costs and regulation 5 of the Consumer Protection from Unfair Trading Regulations 2008; state that no court judgment exists so there are no enforcement powers, no bailiff may attend and the matter cannot affect a credit file; require all contact in writing with no telephone calls or visits; and require written confirmation within 14 days that collection activity is suspended and the account referred back to the client. Weave the case-specific grounds supplied into the "prove the debt" section.`,
  "letter-before-claim": `TASK: A solicitor firm has sent a Letter Before Claim under the Pre-Action Protocol for Debt Claims. Write the response within the 30 days the Protocol provides. It must: acknowledge the letter by date; state that the alleged debt is disputed in full and that the Reply Form (if enclosed) is returned marked accordingly, or note its absence as a Protocol failure; set out each ground of dispute as a numbered paragraph, starting with keeper liability under POFA 2012 Schedule 4 where relevant, then contract formation and signage under ParkingEye v Beavis, then landowner authority, then the inflated sum, then the case-specific grounds supplied; request, in accordance with the Protocol and within 30 days, copies of the landowner contract, photographs of all signage at the location on the material date, the Notice to Keeper and evidence of its date of service, all photographs or ANPR records relied on, and a full breakdown of the sum claimed; state that proceedings issued before those documents are provided would be premature and in breach of the Protocol, which the court will be invited to reflect in costs; and require all correspondence in writing. Address it "Dear Sirs".`,
};

const COUNCIL_STAGE_INSTRUCTIONS: Record<string, string> = {
  rejected: `TASK: This is a council Penalty Charge Notice and the council has rejected the challenge. Do NOT cite POFA 2012 or the BPA or IPC codes; they apply only to private operators. Write formal representations to the council, suitable for submission on receipt of the Notice to Owner, or, if a Notice of Rejection of formal representations has already been received, a statement of appeal for the Traffic Penalty Tribunal (outside London) or London Tribunals (London). Cite the Traffic Management Act 2004 and the 2022 Regulations. Frame each ground in the statutory language where it fits (for example that the contravention did not occur, that there was a procedural impropriety, or that the penalty exceeded the amount applicable) and add the case-specific grounds supplied. Request the council's evidence including the Civil Enforcement Officer's notes and photographs, or the camera footage, and the relevant Traffic Regulation Order. Ask for the PCN to be cancelled.`,
  "popla-rejected": `TASK: This is a council Penalty Charge Notice and the independent adjudicator has rejected the appeal. Do NOT cite POFA 2012 or the BPA or IPC codes. Write a measured letter to the council's parking enforcement team: note the adjudicator's decision, set out the grounds on which the motorist maintains the contravention did not occur or the process was improper, ask the council to exercise its discretion to cancel or reduce the charge in light of them, and request copies of every notice served and evidence of service. Do not claim there is a further appeal right; state that the motorist is taking advice on any review.`,
  collector: `TASK: This is a council Penalty Charge Notice at the enforcement stage. Do NOT cite POFA 2012 or the BPA or IPC codes. A council PCN moves through the Notice to Owner, the Charge Certificate and an Order for Recovery from the Traffic Enforcement Centre before enforcement agents are instructed. Write a letter to the council's parking enforcement team (copied to any enforcement agent named) disputing the charge on the grounds supplied, requesting copies of every notice served together with evidence of service and dates, and stating that if the earlier notices were not received the motorist will file a witness statement on form TE9 with the Traffic Enforcement Centre, with an out-of-time application on form TE7 where required, and asking that enforcement be placed on hold while the request is dealt with. Require all contact in writing.`,
  "letter-before-claim": `TASK: This is a council Penalty Charge Notice. Solicitors' Letters Before Claim are not the normal route for council PCNs, which are enforced through the Traffic Enforcement Centre. Do NOT cite POFA 2012 or the BPA or IPC codes. Write a letter to the sender disputing the charge on the grounds supplied, requesting copies of every notice served with evidence of service, asking the sender to confirm the legal basis on which it is writing, and stating that if the statutory notices were not received the motorist will file a witness statement on form TE9 with the Traffic Enforcement Centre, with an out-of-time application on form TE7 where required. Require all contact in writing.`,
};

export function stageSystemPrompt(stage: AppealStage, fineType: string): string {
  const table = fineType === "private" ? PRIVATE_STAGE_INSTRUCTIONS : COUNCIL_STAGE_INSTRUCTIONS;
  const task = table[stage] || table["rejected"];
  return `${BASE_SYSTEM_PROMPT}\n\n${task}`;
}

export function stageUserPrompt(input: StageLetterInput): string {
  const priv = isPrivate(input);
  const lines: string[] = [];
  lines.push(`Write the ${stageLetterTitle(input.stage, input.fineType)} for the following case:`);
  lines.push("");
  lines.push(`Fine Type: ${priv ? "Private Parking Charge" : "Council PCN"}`);
  lines.push(`Stage: ${stageLabelForPrompt(input.stage)}`);
  if (priv) {
    if (input.operatorName) lines.push(`Operator: ${input.operatorName}`);
    if (input.appealBody) lines.push(`Independent appeals service: ${input.appealBody}`);
    if (input.ntkReceivedDate) lines.push(`Notice to Keeper received: ${input.ntkReceivedDate}`);
  } else if (input.councilName) {
    lines.push(`Council: ${input.councilName}`);
  }
  if (input.stageSenderName) lines.push(`Letter received from: ${input.stageSenderName}`);
  if (input.stageLetterDate) lines.push(`Date on their letter: ${input.stageLetterDate}`);
  if (input.vehicleReg) lines.push(`Vehicle Registration: ${input.vehicleReg}`);
  if (input.pcnReference) lines.push(`Parking charge / PCN reference: ${input.pcnReference}`);
  if (input.fineDate || input.parkingEventDate) {
    lines.push(`Date of Alleged Contravention: ${input.fineDate || input.parkingEventDate}`);
  }
  if (input.fineAmount) lines.push(`Original charge: £${input.fineAmount}`);
  if (input.location) lines.push(`Location: ${input.location}`);
  if (input.wasDriver === "no" || input.wasDriver === "prefer-not-to-say") {
    lines.push("Driver identification: NOT identified as driver. Do not identify the driver.");
  }
  lines.push("");
  lines.push("Circumstances:");
  lines.push(input.circumstances || input.whatHappened || "No circumstances provided.");
  lines.push("");
  lines.push("Grounds identified in the free assessment:");
  if (input.grounds.length === 0) {
    lines.push("1. Procedural compliance review (the sender must prove every element of the charge)");
  }
  input.grounds.forEach((g, i) => {
    lines.push(`${i + 1}. ${groundLine(g)}`);
  });
  lines.push("");
  lines.push(`Sender Name: ${input.senderName?.trim() || "[YOUR NAME]"}`);
  lines.push(`Sender Address: ${input.senderAddress?.trim() || "[YOUR ADDRESS]"}`);
  lines.push("");
  lines.push(`Today's Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`);
  return lines.join("\n");
}

function stageLabelForPrompt(stage: AppealStage): string {
  switch (stage) {
    case "rejected":
      return "First appeal rejected by the operator or council";
    case "popla-rejected":
      return "Independent appeal (POPLA, IAS or tribunal) rejected";
    case "collector":
      return "Debt recovery letter received";
    case "letter-before-claim":
      return "Letter Before Claim received";
    case "court-claim":
      return "County Court claim received";
    default:
      return "Charge just received";
  }
}

/* ------------------------------------------------------------------ */
/*  How to send it (email "Before You Send" and the success page)      */
/* ------------------------------------------------------------------ */

export function stageSendingSteps(stage: AppealStage, fineType: string): string[] {
  const priv = fineType === "private";
  switch (stage) {
    case "rejected":
      return priv
        ? [
            "Submit it through POPLA (popla.co.uk) or the IAS (theias.org), whichever your rejection letter names, using the code on that letter and within 28 days of the rejection",
            "Attach your evidence: photographs, receipts, bank statements, the Notice to Keeper and its envelope if you kept it",
          ]
        : [
            "Send it to the council as formal representations when the Notice to Owner arrives, or to the tribunal named on your Notice of Rejection, within 28 days",
            "Attach your evidence: photographs, receipts, permits and any correspondence",
          ];
    case "popla-rejected":
      return [
        "Send it to the operator, not to POPLA or the IAS",
        "If a Letter Before Claim from a solicitor follows, reply to that within 30 days",
      ];
    case "collector":
      return [
        "Send it once, to the debt recovery company, by email with a delivery receipt or by post with proof of postage",
        "If further template letters arrive, reply briefly referring to this letter. Never phone them and never make a part payment",
      ];
    case "letter-before-claim":
      return [
        "Send it within 30 days of the date on their letter, by a method you can prove",
        "If their letter enclosed a Reply Form, complete it, tick that you dispute the debt, and send it with this letter",
      ];
    default:
      return ["Send it in writing and keep a copy"];
  }
}

/* ------------------------------------------------------------------ */
/*  Instant preview                                                    */
/* ------------------------------------------------------------------ */

// Plain-text version shown on the success page while the AI letter is being
// generated, and emailed as the fallback if generation fails. Same role as
// generateLetterContent in SuccessContent.tsx, but for the later stages.
export function stageFallbackLetter(input: StageLetterInput): string {
  const priv = isPrivate(input);
  const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const senderName = input.senderName?.trim() || "[YOUR NAME]";
  const senderAddress = input.senderAddress?.trim() || "[YOUR ADDRESS]";
  const recipient = stageRecipient(input);
  const ref = input.pcnReference || "[PCN REFERENCE]";
  const reg = input.vehicleReg || "[YOUR REGISTRATION]";
  const theirDate = formatDate(input.stageLetterDate) || "[DATE OF THEIR LETTER]";
  const operator = input.operatorName || "the operator";
  const council = input.councilName || "the council";
  const groundsList = input.grounds.length
    ? input.grounds.map((g, i) => `${i + 1}. ${groundLine(g)}`).join("\n")
    : "1. Procedural compliance: the sender is required to prove every element of the charge.";
  const notDriver = input.wasDriver === "no" || input.wasDriver === "prefer-not-to-say";

  const head = `${senderName}
${senderAddress}

${today}

${recipient}

RE: ${priv ? "Parking charge" : "Penalty Charge Notice"} reference ${ref}
Vehicle Registration: ${reg}
Location: ${input.location || "[LOCATION]"}
Date of Alleged Contravention: ${input.fineDate || input.parkingEventDate || "[DATE]"}
`;

  let body = "";

  if (priv && input.stage === "rejected") {
    body = `Dear Sir/Madam,

I appeal against the above parking charge issued by ${operator}. The operator rejected my appeal on ${theirDate}. Nothing in this submission is an admission of liability or of any debt.

The charge is disputed on the following grounds, each of which the operator is required to answer with evidence:

${groundsList}
${notDriver ? "\nI was not the driver, and the operator can only pursue me as the registered keeper if it complied strictly with the Protection of Freedoms Act 2012, Schedule 4, including service of a compliant Notice to Keeper within the period required by paragraph 9. It is put to strict proof of that compliance.\n" : ""}
The operator is further required to produce the contract with the landowner authorising it to issue and pursue charges at this location, photographs of the signage on the date in question, and any ANPR or photographic evidence relied on. I reserve the right to comment on the operator's evidence.

For the reasons above I ask that the appeal be allowed and the charge cancelled.

Yours faithfully,

${senderName}`;
  } else if (priv && input.stage === "popla-rejected") {
    body = `Dear Sir/Madam,

I refer to the decision of the independent appeals service dated ${theirDate}. That decision is not binding on me, is not a court order and creates no debt. The charge remains disputed in full, and nothing in this letter is an admission of liability or of any debt.

My grounds of dispute are:

${groundsList}

If you intend to pursue this matter you must comply with the Pre-Action Protocol for Debt Claims. Before any claim is issued I require copies of: the contract between you and the landowner; photographs of all signage at the location on the date in question; the Notice to Keeper and evidence of its date of service; all photographs or ANPR records relied on; and a full breakdown of the sum claimed.

Any claim will be defended. All further contact must be in writing.

Yours faithfully,

${senderName}`;
  } else if (priv && input.stage === "collector") {
    body = `Dear Sir/Madam,

I write in response to your letter dated ${theirDate} demanding payment of £[AMOUNT] in respect of the above alleged parking charge on behalf of ${operator}. The alleged debt is disputed in full. This letter is my formal notice of that dispute, and nothing in it is an admission of liability, an admission that I was the driver, or an acknowledgment of any debt.

1. The debt is denied on the following grounds:
${groundsList}

2. Prove the debt. Before any further demand is made I require your client to provide: the contract between the operator and the landowner authorising it to issue and pursue charges at this location; photographs of the signage on the date of the alleged contravention; the Notice to Keeper together with evidence of its date of service, demonstrating compliance with the Protection of Freedoms Act 2012, Schedule 4; evidence of the operator's BPA or IPC membership at the material time; and a full breakdown of the sum claimed.

3. Any sum above the original charge is rejected. Add-on "debt recovery" costs have been repeatedly disallowed by the County Court as unrecoverable, and presenting them as sums legally due is capable of amounting to a misleading commercial practice under the Consumer Protection from Unfair Trading Regulations 2008, regulation 5.

4. No court judgment exists in this matter. You have no enforcement powers, no bailiff may attend, and this alleged debt cannot be recorded on my credit file. All further contact must be in writing; I do not consent to telephone contact or visits.

I require written confirmation within 14 days that collection activity has been suspended and the account referred back to your client.

Yours faithfully,

${senderName}`;
  } else if (priv && input.stage === "letter-before-claim") {
    body = `Dear Sirs,

I acknowledge your Letter Before Claim dated ${theirDate} on behalf of ${operator}. This is my response within the 30 days provided by the Pre-Action Protocol for Debt Claims. The alleged debt is disputed in full, and nothing in this letter is an admission of liability or of any debt. [I enclose your Reply Form completed accordingly. / No Reply Form or Information Sheet was enclosed with your letter; please now provide them.]

The claim is disputed on the following grounds:

${groundsList}
${notDriver ? "\nYour client has not established keeper liability under the Protection of Freedoms Act 2012, Schedule 4, and has not identified the driver.\n" : ""}
In accordance with the Protocol I request copies of the following within 30 days: the contract between your client and the landowner; photographs of all signage at the location on the date of the alleged contravention; the Notice to Keeper and evidence of its date of service; all photographs or ANPR records relied on; and a full breakdown of the sum claimed, including any amount added above the original charge, which is denied as unrecoverable.

Until these documents are provided and the matters above addressed, any proceedings issued would be premature and in breach of the Protocol, which the court will be invited to reflect in costs. All correspondence must be in writing.

Yours faithfully,

${senderName}`;
  } else if (!priv && input.stage === "rejected") {
    body = `Dear Sir/Madam,

I make formal representations against the above Penalty Charge Notice, which ${council} declined to cancel on ${theirDate}. Nothing in this letter is an admission of liability.

The contravention is disputed on the following grounds:

${groundsList}

I request copies of the Civil Enforcement Officer's notes and photographs or the camera footage relied on, and the relevant Traffic Regulation Order, so that the evidence can be checked against the grounds above.

For the reasons above I ask that the Penalty Charge Notice be cancelled. If these representations are rejected I intend to appeal to the independent tribunal.

Yours faithfully,

${senderName}`;
  } else {
    body = `Dear Sir/Madam,

I write in response to your correspondence dated ${theirDate} concerning the above Penalty Charge Notice issued by ${council}. The charge is disputed and nothing in this letter is an admission of liability.

The contravention is disputed on the following grounds:

${groundsList}

I request copies of every notice served in respect of this Penalty Charge Notice, together with evidence of service and the dates of service. If the statutory notices were not received I will file a witness statement on form TE9 with the Traffic Enforcement Centre, with an out-of-time application on form TE7 where required, and I ask that enforcement be placed on hold while this request is dealt with.

All further contact must be in writing.

Yours faithfully,

${senderName}`;
  }

  return `${head}\n${body}`;
}

/* ------------------------------------------------------------------ */
/*  Stripe session parsing (shared by the webhook and its test)        */
/* ------------------------------------------------------------------ */

export interface StageReplySavedAppeal {
  form: {
    fineType: string;
    councilName?: string;
    operatorName?: string;
    pcnReference?: string;
    location?: string;
    vehicleReg?: string;
    senderName?: string;
    senderAddress?: string;
    email?: string;
    fineAmount?: string;
    fineDate?: string;
    parkingEventDate?: string;
    ntkReceivedDate?: string;
    circumstances?: string;
    whatHappened?: string;
    contraventionDescription?: string;
    wasDriver?: string;
    stageSenderName?: string;
    stageLetterDate?: string;
  };
  assessment: {
    overallStrength: string;
    successProbability: number;
    letterArguments: string[];
    grounds: { title: string; legalBasis: string }[];
    nextSteps: string[];
  };
  productId: string;
  stage?: string;
  addOns?: string[];
}

// The checkout route chunks the appeal JSON into appeal_0 ... appeal_N with an
// appeal_chunks counter. Same decoding as the webhook's own decoder; kept here
// so the stage branch can be tested with a constructed session object.
export function decodeChunkedAppeal(meta: Record<string, string> | null | undefined): unknown {
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
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export type StageReplyParse =
  | { ok: true; appeal: StageReplySavedAppeal; stage: AppealStage; email: string; addOns: string[] }
  | { ok: false; reason: "not_stage_product" | "no_appeal_data" | "bad_stage" | "no_email" };

// Everything the webhook branch needs from a completed Checkout Session,
// validated. The stage is read from the appeal JSON first and the top-level
// metadata key second so a session whose JSON predates the key still works.
export function parseStageReplySession(session: {
  metadata?: Record<string, string> | null;
  customer_details?: { email?: string | null } | null;
  customer_email?: string | null;
}): StageReplyParse {
  const meta = session.metadata || null;
  if (meta?.productId !== STAGE_REPLY_LETTER_ID) return { ok: false, reason: "not_stage_product" };
  const decoded = decodeChunkedAppeal(meta) as StageReplySavedAppeal | null;
  if (!decoded || typeof decoded !== "object" || !decoded.form || !decoded.assessment) {
    return { ok: false, reason: "no_appeal_data" };
  }
  const stage = decoded.stage || meta?.[STAGE_METADATA_KEY];
  if (!isStageReplyStage(stage)) return { ok: false, reason: "bad_stage" };
  const email = decoded.form.email || session.customer_details?.email || session.customer_email || meta?.email;
  if (!email) return { ok: false, reason: "no_email" };
  return { ok: true, appeal: decoded, stage, email, addOns: sanitiseAddOns(decoded.addOns) };
}

export function stageLetterInputFromAppeal(
  appeal: StageReplySavedAppeal,
  stage: AppealStage,
  appealBody?: "POPLA" | "IAS"
): StageLetterInput {
  const f = appeal.form;
  return {
    stage,
    fineType: f.fineType,
    operatorName: f.operatorName,
    councilName: f.councilName,
    appealBody,
    pcnReference: f.pcnReference,
    vehicleReg: f.vehicleReg,
    location: f.location,
    fineDate: f.fineDate,
    parkingEventDate: f.parkingEventDate,
    ntkReceivedDate: f.ntkReceivedDate,
    fineAmount: f.fineAmount,
    wasDriver: f.wasDriver,
    circumstances: f.circumstances,
    whatHappened: f.whatHappened,
    stageSenderName: f.stageSenderName,
    stageLetterDate: f.stageLetterDate,
    senderName: f.senderName,
    senderAddress: f.senderAddress,
    grounds: Array.isArray(appeal.assessment.grounds) ? appeal.assessment.grounds : [],
  };
}
