// The Escalation Pack is a fixed set of documents for people PAST the
// initial-appeal stage: debt collector letters, rejected POPLA/IAS appeals,
// Letters Before Claim, and County Court claims. Unlike the Standard and
// Premium products (AI-personalised via the appeal flow), the pack contents
// are static and fulfilled directly by the Stripe webhook: each document
// below is rendered to PDF and emailed to the buyer.

export interface EscalationDocument {
  id: string;
  title: string;
  filename: string; // PDF filename sent to the buyer
  summary: string; // one-liner used on the landing page and in the email
  content: string; // plain text rendered to PDF by the webhook
}

export const ESCALATION_PACK_ID = "escalation-pack";

export const ESCALATION_DOCUMENTS: EscalationDocument[] = [
  {
    id: "decision-guide",
    title: "Start Here: Escalation Decision Guide",
    filename: "Start-Here-Escalation-Decision-Guide.pdf",
    summary:
      "A stage-by-stage map of the private parking escalation process, with a clear ignore / respond / pay decision at every stage.",
    content: `START HERE: ESCALATION DECISION GUIDE
Private parking charges only. Council PCNs follow a different statutory process.

Read this first. It tells you exactly where you are in the escalation chain, what the letter in front of you actually means, and which document in this pack to use. At every stage the decision is the same three options: ignore, respond, or pay. This guide tells you which one is right, and why.

THE ESCALATION CHAIN AT A GLANCE

Stage 1: Parking Charge Notice (windscreen ticket or ANPR letter)
Stage 2: Notice to Keeper (posted to the registered keeper)
Stage 3: Operator rejects your appeal
Stage 4: POPLA or IAS appeal (free, independent)
Stage 5: Debt recovery letters (DCBL, Debt Recovery Plus, Trace, ZZPS and others)
Stage 6: Letter Before Claim (the formal pre-court step)
Stage 7: County Court claim form
Stage 8: Judgment (CCJ) and enforcement

Most cases never get past Stage 5. The operators rely on volume: frightening letters are cheap, court claims are not. But the minority of cases that do escalate are exactly the ones where doing nothing is dangerous. The rule of thumb: before a Letter Before Claim, silence mostly costs you nothing legally; from the Letter Before Claim onwards, silence is how a £100 charge becomes a CCJ.

STAGE 1 TO 2: THE CHARGE ARRIVES

Respond. Appeal to the operator first, then to POPLA (BPA operators) or the IAS (IPC operators) if rejected. This is the cheapest point to kill a charge. Check the Notice to Keeper against POFA 2012 Schedule 4: for ANPR-only cases the notice must arrive within 14 days of the parking event, and it must contain the information prescribed by paragraph 9. A non-compliant notice means the operator cannot hold the registered keeper liable at all.

Decision: RESPOND (appeal). Do not ignore. Do not pay yet.

STAGE 3 TO 4: OPERATOR REJECTS YOUR APPEAL

Respond. Use your free independent appeal. BPA members must offer POPLA; IPC members offer the IAS. The decision is free to you and binding on the operator if you win. If you lose, it is not binding on you; see Stage 4a.

Decision: RESPOND (escalate to POPLA or IAS).

STAGE 4a: POPLA OR IAS REJECTS YOUR APPEAL

This is where most people wrongly assume it is over. A POPLA or IAS decision against you does not create a debt, does not touch your credit file, and does not bind you. It simply ends the free appeal route. The operator still has to win in court to force payment. Use the "POPLA or IAS Rejected" letter in this pack if you want to put the operator on notice that you will defend, or hold your position and wait: many operators quietly drop cases at this point.

Decision: RESPOND if you receive further demands; otherwise hold. Only pay if you have concluded your case is genuinely weak and you want certainty (paying at this stage usually means paying the full amount, so weigh it honestly).

STAGE 5: DEBT RECOVERY LETTERS

DCBL, Debt Recovery Plus, Trace Debt Recovery, ZZPS and similar firms are collection agents. They have no court powers, no bailiff powers for a parking charge, and cannot affect your credit file. The added "recovery costs" of £60 to £70 are routinely struck out by courts. Their letters are designed to look like the step before enforcement; legally they are just letters.

Decision: RESPOND once, in writing, with the Debt Recovery Response Letter in this pack. It disputes the debt, demands the evidence, rejects the added costs, and requires them to refer the account back to the operator. Then stop engaging with repeat template letters. Never phone them. Never partially pay (a part payment acknowledges the debt and restarts the Limitation Act 1980 six-year clock).

STAGE 6: LETTER BEFORE CLAIM

This letter, usually from a solicitor firm such as DCB Legal, BW Legal or Gladstones, is the formal pre-court step required by the Pre-Action Protocol for Debt Claims. From here, deadlines have teeth: you have 30 days to reply before they are entitled to issue a claim.

Decision: RESPOND, within 30 days, using the Letter Before Claim Response in this pack together with the protocol checklist. A protocol-compliant reply that requests documents and sets out your defence often ends the matter, because the operator's solicitors must weigh the cost of litigating a defended claim against a modest commission. Do NOT ignore this letter.

STAGE 7: COUNTY COURT CLAIM FORM

A claim form from the County Court Business Centre (Northampton) with a claim number is real litigation. You have 14 days from deemed service to respond, or 28 days if you file an Acknowledgment of Service within the first 14.

Decision: RESPOND. Acknowledge service immediately (this alone buys you the extra 14 days), then file a defence using the Court Defence Preparation Pack in this pack. Never ignore a claim form: ignoring it is the single biggest cause of parking CCJs, because the claimant wins by default without any judge examining the case.

STAGE 8: JUDGMENT

If a default judgment was entered because you never received or never answered the claim (common after moving house), you can apply on form N244 to set the judgment aside, particularly where the claim went to an old address. Act fast: delay counts against you. If you pay a CCJ in full within one month of the judgment date, it is removed from the register entirely.

Decision: RESPOND (set-aside application) if the judgment was obtained without your knowledge and you have a defence. Pay within one month if you accept the judgment and want it off the register.

WHEN PAYING IS THE RIGHT CALL

None of this means every charge should be fought. Pay if all of the following are true: the signage was clear, the notice was POFA-compliant and on time, you (or the driver) genuinely breached the terms, and no discount or goodwill route remains. A weak defence pursued to a hearing can add court fees and, in limited cases, costs. This pack helps you fight the chargeable errors operators make; it is not a way to avoid debts that are genuinely owed.

This guide is legal information based on established UK parking law, not legal advice for your individual case. For complex situations, particularly once court proceedings have been issued, consider advice from a solicitor alongside these documents.`,
  },
  {
    id: "debt-recovery-response",
    title: "Debt Recovery Response Letter",
    filename: "Debt-Recovery-Response-Letter.pdf",
    summary:
      "A firm dispute and prove-it letter for DCBL, Debt Recovery Plus, Trace, ZZPS and similar collection agents.",
    content: `DEBT RECOVERY RESPONSE LETTER
Use this when a debt recovery firm (DCBL, Debt Recovery Plus, Trace Debt Recovery, ZZPS or similar) writes to you about a private parking charge. Replace every item in [square brackets], delete the guidance notes in (round brackets), and send by email or post. Keep a copy and proof of sending. Send it once; if further template demands arrive, reply briefly referring to this letter.

[YOUR NAME]
[YOUR ADDRESS]

[DATE]

[DEBT RECOVERY COMPANY NAME]
[THEIR ADDRESS]

BY [EMAIL / POST]

RE: Your reference [THEIR REFERENCE]
Parking charge reference: [PCN REFERENCE]
Vehicle registration: [REGISTRATION]

Dear Sir or Madam,

I write in response to your letter dated [DATE OF THEIR LETTER] demanding payment of £[AMOUNT] in respect of the above alleged parking charge. The alleged debt is disputed in full. This letter is my formal notice of that dispute.

1. The debt is denied. I do not accept that any sum is owed to [OPERATOR NAME] or to you as their agent. Nothing in this letter is an admission of liability, an admission that I was the driver, or an acknowledgment of any debt.

(Keep the following paragraph only if you have an appeal or independent appeal still open or recently decided.)
2. The charge is, or has been, subject to appeal. An appeal regarding this charge [is currently pending with / was submitted to] [THE OPERATOR / POPLA / THE IAS]. It is improper to pursue debt recovery activity while the charge is under dispute, and I require you to cease collection activity and refer the account back to your client pending the outcome.

3. Prove the debt. Before any further demand is made, I require your client to provide:
- A copy of the contract between the parking operator and the landowner authorising the operator to issue and pursue charges on this land in its own name;
- Photographs of the signage at the location on the date of the alleged contravention, sufficient to show the terms relied on and their prominence;
- A copy of the Notice to Keeper, together with evidence of its date of service, demonstrating compliance with the Protection of Freedoms Act 2012, Schedule 4 (including, where paragraph 9 applies, service within 14 days of the alleged parking event);
- Evidence of the operator's membership of an accredited trade association (BPA or IPC) at the material time;
- A full breakdown of the sum claimed.

If keeper liability under Schedule 4 has not been established, your client has no basis for pursuing me as registered keeper, and you have no basis for demanding payment on their behalf.

4. The added "debt recovery" costs are rejected. The sum you demand exceeds the amount of the original charge by £[ADDED AMOUNT]. Such add-on collection costs have been repeatedly disallowed by the County Court as unrecoverable, and presenting them as sums legally due when they are not is capable of amounting to a misleading commercial practice under the Consumer Protection from Unfair Trading Regulations 2008, regulation 5. Any sum beyond the original charge is denied in its entirety.

5. Conduct requirements. All further contact must be in writing. I do not consent to telephone contact or doorstep visits. For the avoidance of doubt, no court judgment exists in this matter: you have no enforcement powers, no bailiff may attend, and this alleged debt cannot be recorded on my credit file.

6. Next steps. If your client believes it has an enforceable claim, the proper course is to comply with the Pre-Action Protocol for Debt Claims and, if so advised, to issue proceedings, which will be defended. Continued template demands that ignore the matters raised above will be treated as harassment and referred to your client's trade association and, where applicable, your regulator.

I require written confirmation within 14 days that collection activity has been suspended and the account referred back to your client.

Yours faithfully,

[YOUR NAME]

GUIDANCE NOTES (do not send this section)
- Never phone the debt recovery firm. Keep everything in writing.
- Never make a partial payment. Part payment acknowledges the debt and restarts the six-year limitation clock under the Limitation Act 1980, section 5.
- If you were not the driver, do not say who was. Keeper liability exists only if the operator complied with POFA 2012 Schedule 4.
- Expect at most one or two further template letters. Reply once, briefly, referring to this letter. Most chains stop here.
- If a Letter Before Claim arrives from a solicitor firm, move to the Letter Before Claim Response in this pack. That letter has a real 30-day deadline.

This template is legal information, not legal advice. AppealAFine is a document preparation service, not a law firm.`,
  },
  {
    id: "popla-ias-rejected",
    title: "POPLA or IAS Rejected: Next Steps Letter and Guide",
    filename: "POPLA-IAS-Rejected-Next-Steps.pdf",
    summary:
      "What a lost independent appeal actually means, your remaining options, and a letter putting the operator on notice that any claim will be defended.",
    content: `POPLA OR IAS REJECTED: WHAT IT MEANS AND WHAT TO DO NEXT

THE GUIDE

Losing at POPLA or the IAS feels final. It is not. Understand exactly what the decision does and does not do:

- It ends the free independent appeal route. That is all.
- It is binding on the operator only if you WIN. A decision against you does not bind you.
- It does not create a debt, a judgment, or any entry on your credit file.
- It does not give the operator, or any debt collector, enforcement powers.

To force payment the operator must still issue a County Court claim, prove a contract was formed by adequate signage, prove authority from the landowner, and (if pursuing you as keeper rather than driver) prove strict compliance with the Protection of Freedoms Act 2012, Schedule 4. An adverse POPLA or IAS decision is not evidence in court and a judge is not bound by it in any way.

YOUR FOUR OPTIONS AFTER A REJECTION

Option 1: Hold your position. You are under no obligation to write to anyone. Many operators never litigate, particularly where the sums are small and the defence points are visible. If you hold, expect debt recovery letters (use the Debt Recovery Response Letter in this pack when they arrive).

Option 2: Put the operator on notice. Send the letter below. It tells the operator that the dispute is maintained, that any claim will be defended, and that you require their evidence bundle now. This front-foot move often prompts a commercial decision to drop the case.

Option 3: Pay. If the independent assessor's reasoning has genuinely persuaded you that the charge was properly issued (compliant notice, clear signage, real breach), paying now caps the matter. There is no discount at this stage, but there are also no further costs.

Option 4: Complain about process, not outcome. If the assessment itself went wrong procedurally (your evidence was not considered, the operator submitted material you never saw), you can raise a service complaint with POPLA or the IAS. This cannot reverse the decision but can matter later.

Whichever option you choose, diarise nothing away: keep every letter, email, photograph and the full text of the POPLA or IAS decision. If the matter ever reaches court, your organised paper trail is an advantage.

THE LETTER

(Replace items in [square brackets]. Send to the operator, not the appeal body. Keep a copy.)

[YOUR NAME]
[YOUR ADDRESS]

[DATE]

[OPERATOR NAME]
[OPERATOR ADDRESS]

RE: Parking charge reference [PCN REFERENCE]
Vehicle registration: [REGISTRATION]
[POPLA / IAS] reference: [APPEAL REFERENCE]

Dear Sir or Madam,

I write further to the [POPLA / IAS] decision dated [DECISION DATE] in respect of the above charge.

I note the decision. As you will be aware, an adverse decision of [POPLA / the IAS] is not binding on the motorist, creates no debt and confers no enforcement rights. My position is unchanged: liability for this charge is denied and remains fully disputed, on the grounds previously set out including [SUMMARISE YOUR MAIN GROUNDS, e.g. non-compliance with the Protection of Freedoms Act 2012 Schedule 4, inadequate signage, absence of landowner authority].

If you intend to pursue this matter, I require you to do so properly. Any proceedings will be defended, and I put you on notice now that I require, in advance of any claim and in accordance with your obligations under the Pre-Action Protocol for Debt Claims:

1. A copy of the contract with the landowner conferring authority to issue and litigate charges at this location;
2. Photographs of the signage in place on the date of the alleged contravention;
3. The complete Notice to Keeper and proof of its date of service;
4. A full breakdown of any sum claimed, noting that add-on "debt recovery" costs above the original charge are denied as unrecoverable.

Alternatively, you may take the commercial decision to close your file, in which case I require written confirmation.

Please note that I do not consent to telephone contact. All correspondence must be in writing. Referral of this disputed charge to a debt recovery agent without addressing the matters above will be raised with your trade association.

Yours faithfully,

[YOUR NAME]

This document is legal information, not legal advice. AppealAFine is a document preparation service, not a law firm. If the operator issues court proceedings, consider taking advice from a solicitor alongside using the Court Defence Preparation Pack.`,
  },
  {
    id: "letter-before-claim-response",
    title: "Letter Before Claim Response and Protocol Checklist",
    filename: "Letter-Before-Claim-Response.pdf",
    summary:
      "A Pre-Action Protocol compliant reply to a solicitor's Letter Before Claim, plus a checklist of everything their letter must contain.",
    content: `LETTER BEFORE CLAIM: RESPONSE TEMPLATE AND PROTOCOL CHECKLIST

READ FIRST

A Letter Before Claim (also called a Letter Before Action) from a firm such as DCB Legal, BW Legal or Gladstones is the formal step required by the Pre-Action Protocol for Debt Claims before a County Court claim can properly be issued against an individual. It is the point where deadlines start to matter: you have 30 days from the date of the letter to reply. Do not ignore it. A protocol-compliant reply that disputes the debt and requests documents both protects your position and forces the claimant to spend money and confront the weaknesses in its case before issuing.

THE PROTOCOL CHECKLIST

Under the Pre-Action Protocol for Debt Claims, their Letter Before Claim should include or enclose:

1. The amount of the debt and how it is calculated;
2. Whether interest or other charges are being added, and if so the basis;
3. Details of how the debt arises (date, location, vehicle, the basis of the alleged contract);
4. An up-to-date statement of account, or where the debt arises from a single event, clear details of it;
5. The enclosed Information Sheet and Reply Form prescribed by Annex 1 of the Protocol;
6. A Financial Statement form;
7. A statement of how the debt can be paid and what to do if you dispute it;
8. A date, at least 30 days ahead, by which you must respond before proceedings may be issued.

Tick these off against the letter you received. Missing items matter: the court can take failure to comply with the Protocol into account, including on costs, and your reply should point out every omission.

Complete and return their Reply Form if one was enclosed, ticking that you dispute the debt, and enclose the letter below with it. If no Reply Form was enclosed, say so in the letter; it is itself a protocol failure.

THE RESPONSE LETTER

(Replace items in [square brackets]. Send within 30 days of the date on their letter, by a method you can prove. Keep copies of everything.)

[YOUR NAME]
[YOUR ADDRESS]

[DATE]

[SOLICITOR FIRM NAME]
[THEIR ADDRESS]

BY [EMAIL / POST]

RE: Your reference [THEIR REFERENCE]
Your client: [OPERATOR NAME]
Parking charge reference: [PCN REFERENCE]
Vehicle registration: [REGISTRATION]

Dear Sirs,

I acknowledge your Letter Before Claim dated [DATE OF THEIR LETTER]. This is my response within the 30 days provided by the Pre-Action Protocol for Debt Claims. The alleged debt is disputed in full. [I enclose your Reply Form completed accordingly. / No Reply Form or Information Sheet was enclosed with your letter, contrary to paragraph 3.1 of the Protocol; please now provide them.]

The claim is disputed on the following grounds:

1. No keeper liability. [Use if you were pursued as registered keeper.] Your client has not established keeper liability under the Protection of Freedoms Act 2012, Schedule 4. In particular [the Notice to Keeper was not served within the period required by paragraph 9 / the Notice to Keeper did not contain the information prescribed by paragraph 9 / no compliant Notice to Keeper has been evidenced]. Absent strict compliance with Schedule 4, the registered keeper cannot be held liable, and your client has not identified the driver.

2. No contract formed by adequate signage. It is denied that the signage at the location was sufficiently prominent, legible and clear to bring the alleged terms to the attention of the driver so as to form a contract, applying the principles in ParkingEye Ltd v Beavis [2015] UKSC 67. Your client is required to prove otherwise with photographs from the material date.

3. No landowner authority evidenced. Your client is required to prove that it had, at the material time, the landowner's authority to issue parking charges and to bring proceedings in its own name at this location.

4. The sum claimed is inflated. The sum demanded includes £[ADDED AMOUNT] of "debt recovery" or similar costs above the original charge. Such add-on costs are denied as unrecoverable, and the court's attention will be drawn to the line of County Court authority disallowing them.

[Add any case-specific grounds: e.g. the driver was not identified and cannot be assumed; a grace period applied; the machine or app failed; a valid permit or payment existed; mitigating circumstances.]

In accordance with the Protocol, I request copies of the following documents within 30 days:

(a) The contract between your client and the landowner;
(b) Photographs of all signage at the location as at the date of the alleged contravention;
(c) The Notice to Keeper and evidence of its date of service;
(d) All photographs or ANPR records relied on;
(e) A full breakdown of the sum claimed.

Until these documents are provided and the matters above addressed, any proceedings issued would be premature and in breach of the Protocol, which the court will be invited to reflect in costs. If, having reviewed the position, your client discontinues, please confirm in writing that the file is closed.

All correspondence must be in writing.

Yours faithfully,

[YOUR NAME]

GUIDANCE NOTES (do not send this section)
- Reply within the 30 days. Late or absent replies are how default escalation happens.
- Send by email with delivery receipt, or post with proof of postage, or both.
- If they issue a claim anyway, do not panic: move straight to the Court Defence Preparation Pack in this pack, acknowledge service within 14 days, and file your defence.
- If you genuinely owe the charge and simply cannot pay at once, the Reply Form and Financial Statement let you propose instalments; that is a legitimate use of the Protocol.

This template is legal information, not legal advice. AppealAFine is a document preparation service, not a law firm. County Court proceedings are a serious step; consider advice from a solicitor alongside these documents.`,
  },
  {
    id: "court-defence-pack",
    title: "Court Defence Preparation Pack",
    filename: "Court-Defence-Preparation-Pack.pdf",
    summary:
      "A step-by-step small claims checklist, the standard defence points for parking claims, and a witness statement skeleton with the correct statement of truth.",
    content: `COURT DEFENCE PREPARATION PACK
For a County Court claim about a private parking charge (small claims track)

PART 1: THE FIRST 14 DAYS

A claim form (Form N1, usually issued by the County Court Business Centre, Northampton, or via Money Claim Online) starts strict deadlines. From the date of deemed service:

1. Within 14 days: either file your full defence, OR file an Acknowledgment of Service (Form N9). Filing the Acknowledgment and ticking "I intend to defend all of this claim" extends your defence deadline to 28 days from service. Do this immediately; it is free and buys you time.
2. Within 28 days (if you acknowledged): file your defence, using Form N9B or online via Money Claims / MCOL with your claim number and password from the claim pack.
3. Never ignore the claim. If you do nothing, the claimant obtains judgment in default: an automatic CCJ without any judge considering the merits. Default judgments are the source of nearly all parking CCJs.

PART 2: DEFENCE CHECKLIST

Work through this list and note which apply to your case. These are the recurring points on which parking claims fail; your defence should plead every one that genuinely applies, and none that do not.

[ ] Keeper not liable: the claimant pursues you as registered keeper but did not comply strictly with the Protection of Freedoms Act 2012, Schedule 4 (late Notice to Keeper, missing prescribed information, or no compliant notice at all), and has not proved who was driving.
[ ] No contract: signage was absent, unlit, too small, poorly sited or ambiguous, so no contract on the alleged terms was formed with the driver (ParkingEye Ltd v Beavis [2015] UKSC 67 requires terms to be brought fairly to the motorist's attention).
[ ] No standing: the claimant has not evidenced a contract with the landowner giving it authority to issue charges and litigate in its own name.
[ ] Inflated claim: the claim adds "debt recovery costs", "contractual costs" or similar above the original charge; these add-ons are routinely disallowed in the County Court as unrecoverable.
[ ] Grace period: the stay exceeded the paid or permitted time by only a few minutes, within the mandatory grace period under the operator's code of practice.
[ ] Payment or permit: payment was made, or a valid permit or blue badge was displayed, or the machine or app malfunctioned (keep the evidence).
[ ] ANPR error: the cameras recorded two separate visits as one long stay, or misread the plate.
[ ] Limitation: the parking event was more than six years before the claim was issued (Limitation Act 1980, section 5).

Evidence to gather now, whichever points apply: every letter and envelope (envelopes prove posting dates), your own photographs of the signage and location, payment records or app screenshots, the full POPLA or IAS decision if there was one, and a short written timeline of events while memory is fresh.

PART 3: WITNESS STATEMENT SKELETON

The court will direct when witness statements must be exchanged (typically 14 days before the hearing; check your directions notice, Form N157 or N159). Use this skeleton. Keep it factual, numbered and chronological; argument belongs in your defence, facts belong here.

IN THE COUNTY COURT AT [COURT NAME]
Claim No: [CLAIM NUMBER]

BETWEEN:
[CLAIMANT NAME] (Claimant)
and
[YOUR NAME] (Defendant)

WITNESS STATEMENT OF [YOUR NAME]

I, [YOUR NAME], of [YOUR ADDRESS], WILL SAY as follows:

1. I am the Defendant in this claim and the registered keeper of vehicle [REGISTRATION]. I make this statement from facts within my own knowledge, save where otherwise indicated.

2. [The parking event. What happened, in order, with dates and times: where you parked, what the signage showed or did not show, what you paid or displayed, when you left.]

3. [The paperwork. When each notice and letter arrived, what it said, what was missing or late. Exhibit copies: refer to them as Exhibit [YOUR INITIALS]1, [YOUR INITIALS]2 and so on.]

4. [The appeal history. Your appeal to the operator, its rejection, any POPLA or IAS appeal and outcome.]

5. [The claim. The sum claimed and why it is wrong: the added costs, the absence of the documents you requested, the Schedule 4 failures.]

6. For the reasons set out above and in my Defence, I invite the court to dismiss this claim.

STATEMENT OF TRUTH
I believe that the facts stated in this witness statement are true. I understand that proceedings for contempt of court may be brought against anyone who makes, or causes to be made, a false statement in a document verified by a statement of truth without an honest belief in its truth.

Signed: ............................
Name: [YOUR NAME]
Date: [DATE]

PART 4: THE HEARING

Small claims hearings are informal: usually under an hour, no wigs, often around a table or by video. Bring three copies of your bundle (statement plus exhibits): one for you, one for the judge, one for the claimant. Answer the judge's questions directly and stick to your numbered points. Costs risk on the small claims track is limited: normally only fixed costs and expenses are recoverable, not the other side's solicitor's bill, unless a party has behaved unreasonably. Many claimants discontinue before the hearing once a defended case requires them to produce witnesses and documents; if that happens, the claim ends.

This pack is legal information, not legal advice. AppealAFine is a document preparation service, not a law firm. Court proceedings are the stage where individual facts matter most; consider advice from a solicitor, or free help from Citizens Advice, alongside these documents.`,
  },
];
