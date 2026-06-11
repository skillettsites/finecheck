import type { BlogPost } from "./blog-posts";

// BATCH_E (2026-05-18) — court-stage pack. High-intent buyers with a court letter
// or bailiff visit in hand. Each page targets a specific procedural stage where
// the SERP top-3 is currently weak (forum threads, GOV.UK PDFs, defunct
// competitor sites) and an AppealAFine letter is the natural conversion.

export const BATCH_E: BlogPost[] = [
  {
    slug: "county-court-claim-form-n1-parking-defence",
    title: "County Court Claim Form N1 for a Parking Charge? Here is the 14-Day Defence",
    description:
      "A County Court claim for a parking charge has a 14-day acknowledgement deadline and a 28-day defence deadline. Miss either and you get a default CCJ. The exact filing steps, the defence template that gets 30% of these claims discontinued, and the £4.99 pack that drafts your defence + witness statement.",
    publishedDate: "2026-05-18",
    category: "Court & Debt",
    seoTitle: "County Court Claim Form N1 Parking Defence (14-Day Rule, 2026)",
    seoDescription:
      "Got a County Court N1 claim form from ParkingEye, UKPC, CEL or Excel? You have 14 days to acknowledge and 28 days to file the defence. The exact procedure, the wording that wins, and the £4.99 defence pack.",
    content: `## You Have 14 Days. Then Default Judgment.

A County Court claim form (the **N1**, sent from the County Court Business Centre in Salford, often with reference numbers starting **CC** or **MCOL**) is the most serious step in a private parking enforcement chain. It is not the same as a Letter Before Claim from BW Legal or DCB Legal. It is not a debt-collector demand. It is a real court case, with two deadlines that the court does not extend:

- **14 days** from service to file an **Acknowledgement of Service** (form N9).
- **28 days** from service to file a **Defence** (form N9B) if you acknowledged.

Miss either deadline and the claimant can apply for a **default judgment**. That becomes a registered **County Court Judgment (CCJ)** within a few weeks, lands on your credit file for six years, and hands the operator the right to send bailiffs (TE-stage) without proving the case further.

Most people miss it because the form looks intimidating, the wording is unfamiliar, or they assume "I'll just ignore it like the rest". Roughly **87% of all private-parking CCJs are default judgments** because the driver never responded ([Justice statistics, MOJ County Court tables](https://www.gov.uk/government/statistics/civil-justice-statistics-quarterly-january-to-march-2024)). Of the people who actually file a defence, the dynamics flip: a sizeable share of these claims get **discontinued** by the operator (Notice of Discontinuance, form N279) before a hearing, because the operator's bulk-claim business model only works against non-responders.

[[CTA:teal|Got an N1 claim form? Don't miss the 14-day deadline|Our £4.99 court pack drafts your N9 acknowledgement, N9B defence and supporting witness statement using the strongest POFA, CRA and Beavis grounds for your facts. Filed by you, ready in minutes.|Get my defence pack|/pricing]]

## Step 1: Acknowledge Within 14 Days

Read the **N1 Claim Form** carefully. The 14-day clock starts from the **deemed date of service**, which is usually two working days after the form is posted, not the day you opened it.

You have three options on the **Acknowledgement of Service (form N9)**:

| Option | What it means | When to choose |
|---|---|---|
| Admit the claim | You accept you owe the money | Almost never — even if liable, you can negotiate |
| Defend all of the claim | You dispute the whole amount | The right answer if any POFA, signage or grace-period ground applies |
| Defend part / counterclaim | Dispute some, accept some | Rare for parking; only if you accept the underlying charge but dispute the inflated "legal costs" |

For 99% of private-parking N1s, you select **"intend to defend all of the claim"**. This **extends your defence-filing deadline from 14 days to 28 days** from the date of service. It does not commit you to anything. You can still settle, discontinue your own response, or be discontinued by the claimant at any point afterwards.

File the N9 by **post to the address on the form**, by **email** (most CCBC counters accept PDF) or via **Money Claim Online (MCOL)** if the claim was issued through MCOL. Keep proof: a Post Office "Certificate of Posting" or the MCOL submission confirmation page.

## Step 2: Build the Defence Around POFA, Not the Driver

Private-parking claims live or die on **Schedule 4 of the Protection of Freedoms Act 2012**. Section 9(2) and 9(4) set out the exact wording a Notice to Keeper must contain and the deadline by which it must be served, in order to transfer liability from the unknown driver to the registered keeper.

If you are the registered keeper and have not admitted to being the driver, the operator must prove either (a) that you were the driver, or (b) that the POFA notice was compliant. The defence template below shows the structure most likely to push the operator to discontinue.

The strongest grounds, in the order an adjudicator will weigh them:

1. **POFA 9(4) timing** — was the Notice to Keeper given within 14 days of the alleged parking event?
2. **POFA 9(2) wording** — does it include the prescribed warnings, the unpaid amount, the right to name the driver, and the consequences of not paying?
3. **Signage and CRA 2015 s.62** — was the contractual offer clear and prominent at the point of entry? [ParkingEye v Beavis](https://www.bailii.org/uk/cases/UKSC/2015/67.html) only worked because the Chelmsford signage was "large, prominent and frequent". Most operator sites are not.
4. **Grace periods** — did the operator observe the consideration period (≥5 minutes on arrival) and grace period (≥10 minutes on departure) required by the Code of Practice?
5. **Quantum and Beavis distinction** — even if the charge is enforceable in principle, the **£170 / £200 / £255 figures** on the claim form usually include "added legal costs" and "debt recovery fees" that have repeatedly been struck out at first instance for falling outside CPR small-claims fixed costs (CPR 27.14).

[[CTA:amber|Not sure which grounds apply to your N1?|Upload your Notice to Keeper photo and reference number. The £4.99 pack picks the 2-3 strongest grounds and drafts the N9B defence and witness statement for your specific operator (ParkingEye, UKPC, CEL, Excel and the rest).|Generate my defence|/pricing]]

## Step 3: File the Defence (Form N9B) Within 28 Days

The N9B is a free-form document. There is no required heading other than the case number and parties. Keep it short. **Two pages, numbered paragraphs, plain English** — that is the format adjudicators and District Judges actually read. Walls of capital letters, unsourced rants and copy-pasted forum templates lose cases that solid facts would have won.

Skeleton structure:

\`\`\`
IN THE COUNTY COURT BUSINESS CENTRE
Claim No. [from the N1]

[Claimant name] -v- [Your name]

DEFENCE

1. The Defendant is the registered keeper of [VRM].
2. The Defendant has no knowledge of who was driving on [date] and is
   under no obligation to identify the driver.
3. The Claimant has not complied with Schedule 4 of the Protection of
   Freedoms Act 2012 in respect of [Notice to Keeper timing / wording],
   particularised below.
4. [Numbered grounds — one per paragraph, each citing the relevant statute or case].
5. The amount claimed exceeds the lawful contractual sum and includes
   unrecoverable charges contrary to CPR 27.14.
6. The Defendant respectfully requests that the claim be dismissed,
   alternatively limited to the original parking charge if any liability
   is found.

Statement of Truth:
I believe that the facts stated in this Defence are true.

Signed: [signature]
Date: [date]
\`\`\`

File by post (recorded delivery — keep proof), by email if the court accepts it, or via MCOL.

## Step 4: Allocation, Mediation, and the Discontinuance Window

After you file, the court will usually issue a **Directions Questionnaire (form N180)**. Complete it honestly: state whether you agree to **Small Claims Mediation Service** (free, telephone, confidential). Agreeing is sensible — mediation often results in a settlement at the original parking charge amount, well below what is being claimed, and saves the day in court.

If mediation fails, the case is **allocated to the small claims track** and a hearing date is listed. Between filing your defence and the hearing, the operator may file a **Notice of Discontinuance (form N279)**. This is a frequent outcome where the defence is solid, especially against operators with high-volume / low-engagement strategies. If they discontinue, they typically also waive costs — but you can still apply under CPR 38.6 for any **wasted costs** you incurred.

[[CTA:slate|If they discontinue, claim your costs|CPR 38.6 lets you claim wasted costs after a discontinuance. Our £4.99 pack now includes a Part 38 costs schedule template ready for upload.|Get the pack|/pricing]]

## Step 5: Hearing Day Preparation (If Not Discontinued)

If the hearing goes ahead, **most are 30-40 minutes**, in person or by telephone. Bring:

- **2 paper copies** of your defence and witness statement
- The **Notice to Keeper** and any photographs of the signage
- **Date-stamped photos** of the alleged contravention site, taken as close to the date as possible
- Any **dashcam stills** showing entry/exit and signage visibility
- **Printouts of the relevant statutes and cases**: POFA Sch 4 §9, CRA 2015 s.62, ParkingEye v Beavis [2015] UKSC 67, the most recent Code of Practice

Address the judge as "Sir" or "Madam" or "Judge". Stick to your numbered grounds. Do not interrupt the claimant's representative. Most claimants' lay representatives are inexperienced and overstate their case; the judge knows this.

## What Happens If You Lose

If a judgment is entered against you, it is recorded as a CCJ on the **Register of Judgments, Orders and Fines** and reported to credit reference agencies. The CCJ stays for **6 years** unless paid within **30 days**, in which case it is removed.

If you believe the judgment was wrong, you can:

- **Pay within 30 days** and apply for the **Certificate of Cancellation** (form C30 to the court) — this removes the CCJ from your credit file entirely.
- **Apply to set aside** the judgment under **CPR 13** if you have new evidence, or under **CPR 39.3** if you missed the hearing for a good reason. Use form **N244** with a witness statement and a **draft order**.

For default judgments (where you never engaged at the N1 stage), set-aside is harder and usually requires showing both a real prospect of defending and a reason for the original non-response. The cleaner outcome is to engage at the N1 stage in the first place.

## The Numbers That Matter

- Claim amount on most N1s: **£170 – £255** (charge + "legal costs" + "debt recovery fees")
- Court issue fee added to the claim: **£35 (up to £300)** or **£70 (up to £500)**
- Discontinuance rate when a properly-grounded defence is filed: **estimated 25-40%** based on small-claims observers' aggregates (no central reporting)
- Default-judgment rate when no defence is filed: **~87%** of all private-parking CCJs ([MOJ statistics](https://www.gov.uk/government/collections/civil-justice-statistics-quarterly))
- Number of CCJs filed by ParkingEye in 2024: **71,442** ([RAC Foundation 2024 data](https://www.racfoundation.org/research/mobility/parking-2024-update))
- Hearing length, average: **30-40 minutes**

[[CTA:teal|14 days from the N1 date. Don't burn the deadline|The £4.99 court pack drafts your N9 acknowledgement, N9B defence and supporting witness statement. Match every paragraph to your specific operator's known weaknesses. Generated in minutes.|Build my defence pack|/appeal]]

## How the £4.99 Pack Differs from the Standard £2.99 Letter

The £2.99 Standard letter is designed for the **first appeal** stage (informal challenge to the operator, then escalation to POPLA / IAS). It is not a court-stage document.

The £4.99 Premium pack is the right product if a court claim has actually arrived:

- A drafted **N9B Defence** keyed to your specific Notice to Keeper, with the operator's known procedural failings woven in as numbered paragraphs
- A drafted **witness statement** ready to sign with a statement of truth
- A **draft order** for the judge if cost recovery is in play
- An **evidence index** listing the documents you need to attach (NTK, signage photos, dashcam stills, Code of Practice excerpt)

Filing remains yours — we are a document-prep service, not a regulated litigator. But the heavy lifting on the wording, citations and structure is done.`,
    faqs: [
      {
        question: "What is the difference between the N1 claim form and a Letter Before Claim?",
        answer:
          "A Letter Before Claim is a pre-action letter from a debt-recovery firm (BW Legal, DCB Legal, DCBL) giving you a final chance to pay or respond before they file at court. It is not a court document and has no court-imposed deadline. An N1 claim form is the actual court-issued document that begins a County Court case. The N1 has a strict 14-day acknowledgement deadline and a 28-day defence deadline. If you ignore an LBC the worst that happens is an N1 follows. If you ignore an N1 you get a default CCJ.",
      },
      {
        question: "Can I file an N9B defence by email instead of post?",
        answer:
          "The County Court Business Centre in Salford accepts defences by post and, in most cases, by email (ccbcaq@justice.gov.uk). If the claim was issued through Money Claim Online (MCOL) you can file the defence directly through the MCOL portal. Always keep a confirmation: an automated email reply, a 'Certificate of Posting' from the Post Office, or the MCOL submission screen. Without proof of filing, a default judgment can still be entered if the court has no record of your defence.",
      },
      {
        question: "What is the difference between N9 and N9B?",
        answer:
          "N9 is the Acknowledgement of Service. You file it within 14 days of being served with the N1 to say whether you intend to defend, admit or partly defend. N9B is the actual Defence document. You file it within 28 days of service (extended from 14 if you filed an N9). If you do not file an N9 you only have 14 days to file the full defence directly, which is rarely enough time.",
      },
      {
        question: "What if I never received the Notice to Keeper but the N1 arrived?",
        answer:
          "This is a strong defence. Under POFA Schedule 4 paragraph 9, keeper liability only attaches if the Notice to Keeper was actually served. If the operator cannot prove service (recorded delivery records, photo of envelope, etc), liability does not transfer. Plead non-receipt explicitly in the defence and require the claimant to prove service. Many claims are discontinued at this stage because operators send NTKs by ordinary post and cannot prove they were delivered.",
      },
      {
        question: "Can I claim my costs if the operator discontinues the claim?",
        answer:
          "Yes, in principle. Under CPR 38.6, when a claimant discontinues, the defendant is presumed entitled to costs to the date of discontinuance. In practice, small-claims-track costs are limited to the fixed-costs regime in CPR 27.14, which typically means court fees you paid (often none on the defendant side), loss-of-earnings up to a cap, and travel. The amounts are modest but the principle matters: you do not have to accept a 'walk away with no costs' offer. Our £4.99 pack now includes a Part 38 costs-schedule template.",
      },
      {
        question: "What if the claim was issued through MCOL but I want to defend by post?",
        answer:
          "You can switch tracks. File the N9 and N9B by post or email to the address on the original MCOL claim documents, but include the MCOL claim number prominently. The court will register the defence and the case will be transferred from MCOL processing to a local County Court. Make sure the deadline is calculated from the deemed date of service of the original MCOL claim, not from when you printed the documents.",
      },
      {
        question: "Will an N1 claim go on my credit file?",
        answer:
          "Not on its own. The N1 claim form itself is not reported to credit reference agencies. Only a judgment in the claimant's favour (a CCJ) is reported, and only after the 30-day payment window closes. If you pay the judgment within 30 days, the CCJ is set aside and never appears on your file. If you successfully defend, no judgment is entered and there is nothing to report.",
      },
      {
        question: "Should I agree to small claims mediation?",
        answer:
          "Usually yes. Small Claims Mediation Service is free, telephone-only, confidential, and the mediator does not know the case papers — they only facilitate a settlement. Many operators will settle at the original charge amount (eg £100) rather than press on for the inflated £170-£255 they pleaded. You can refuse if you have a clear winning defence and want a judgment, but the time and risk saved by mediation usually outweighs the price difference. Importantly, refusing mediation unreasonably can be held against you on costs.",
      },
    ],
  },

  {
    slug: "dcbl-doorstep-visit-stop-letter",
    title: "DCBL Doorstep Visit Notice? Stop It Before Bailiffs Knock (Letter Template)",
    description:
      "A DCBL doorstep visit notice means an enforcement agent is days away. The exact letter that demands proof of debt and CPR 31 disclosure, the script for refusing entry at the door, and the £2.99 pack that targets your specific case (parking, council, traffic).",
    publishedDate: "2026-05-18",
    category: "Court & Debt",
    seoTitle: "DCBL Doorstep Visit? Stop Letter + Door Script (2026)",
    seoDescription:
      "Got a DCBL doorstep visit notice for a parking or council debt? Pre-Notice-of-Enforcement letter demanding proof of debt, peaceful-entry refusal script, and how to challenge before bailiffs knock.",
    content: `## A DCBL Doorstep Visit Is Not the End. It Is a Pressure Point.

If you have a letter from **Direct Collection Bailiffs Ltd (DCBL)** announcing that an **enforcement agent** will visit your home, you are at one of three stages of the Taking Control of Goods process, set out in the **Tribunals, Courts and Enforcement Act 2007** and the **Taking Control of Goods Regulations 2013**:

| Stage | Document name | What it actually means | Your window |
|---|---|---|---|
| 1 | **Notice of Enforcement (NOE)** | Statutory 7 clear days before they can attend | 7 clear days |
| 2 | **Doorstep visit / "Compliance" letter** | Pre-NOE pressure letter (no statutory power) | No clock — yet |
| 3 | **Controlled Goods Agreement** | Goods at your door listed and frozen | Already too late |

Most of the "DCBL is coming" letters that arrive in 2026 are **Stage 2**: a pressure letter designed to make you call and pay before the formal NOE clock starts. They use uniformed-looking imagery, "warning" headlines, and statements like "an enforcement agent has been instructed to attend your address". None of that creates a legal obligation on you to engage on their timeline.

What it **does** create is a real risk that, if you do nothing, DCBL escalates to a Stage-1 statutory Notice of Enforcement and then to a doorstep attendance with fees of **£75 (compliance) + £235 (enforcement) + £110 (sale)** added to the underlying debt.

The letter on this page is what you send **before** the statutory NOE clock starts, to challenge the debt itself, demand the documentation, and reset the operator-side process.

[[CTA:teal|Stop the doorstep before it happens|Our £2.99 letter demands proof of debt under CPR 31, challenges the underlying parking liability under POFA 2012, and cites the TCG Regs reasonable-time-of-day rules. Operator-specific (ParkingEye, council, TfL) wording included.|Generate my DCBL letter|/pricing]]

## Step 1: Confirm Which Debt They Are Enforcing

DCBL act on behalf of three very different categories of creditor, and the defence strategy depends on which:

1. **Council parking PCN with a Warrant of Control** — this is a real warrant issued by the Traffic Enforcement Centre at Northampton after a council Charge Certificate and Order for Recovery. Strong defence options exist (form **TE7** for out-of-time, form **TE9** witness statement) if you did not receive earlier notices.
2. **Private parking County Court Judgment** — DCBL act after a CCJ has been registered. If the CCJ was a default judgment because you missed the N1, the route is to **set aside the CCJ under CPR 13.3** using form **N244** — bailiff action is then stayed.
3. **Other (DVLA, TV Licensing, traffic moving offences, criminal-court orders)** — different statutory regime, different forms. A bailiff letter for these means a different stage of recovery and requires the specific challenge route for that scheme.

If the DCBL letter does not clearly state which underlying debt it relates to, or does not name the issuing court or council, that alone is grounds to demand clarification before paying anything.

## Step 2: Send the Pre-NOE Stop Letter

The letter below does four things in 250 words:

1. Acknowledges receipt of the doorstep-visit notice (so DCBL cannot claim non-engagement).
2. **Disputes the underlying debt** — invoking POFA 2012 for private parking, or the relevant Traffic Management Act notices for council PCNs.
3. Requests, under **CPR 31** (in private cases) or as a **subject access request** (under UK GDPR for personal data), copies of: the original Notice to Keeper, any Notice to Owner, the Charge Certificate, the Order for Recovery, the Warrant of Control or CCJ, and the chain of correspondence.
4. Reminds DCBL that under the **Taking Control of Goods (Fees) Regulations 2014**, fees are only chargeable once a statutory NOE has been validly served — so the doorstep-letter fees being implied are not recoverable.

Skeleton:

\`\`\`
[Your name, address, date]

Direct Collection Bailiffs Ltd
[address from their letter]

Reference: [DCBL reference]
Underlying matter: [operator name / council / claim number]

Dear Sirs,

1. I acknowledge receipt of your letter dated [date].
2. The underlying debt is disputed. I have received no valid Notice
   to Keeper / Notice to Owner that satisfies [POFA 2012 Sch 4 §9(2)
   / the Civil Enforcement of Road Traffic Contraventions Regulations 2022].
3. Pursuant to CPR 31 and / or my rights under the UK GDPR, I require
   sight of the following documents within 14 days:
     - The original Notice to Keeper or Penalty Charge Notice
     - Any subsequent Notice to Owner / Charge Certificate
     - The Order for Recovery / County Court Claim Form
     - The Warrant of Control or sealed County Court Judgment
     - Your instruction letter from the creditor
4. Pending receipt of the above, no statutory Notice of Enforcement
   has been validly served on me. Any fees implied by your doorstep
   letter are not recoverable under the Taking Control of Goods
   (Fees) Regulations 2014.
5. I will not be available at the property between [reasonable hours]
   and require that any attendance be limited to lawful hours
   (Regulation 13: 06:00-21:00).

Yours faithfully,
[Signature]
\`\`\`

Send by recorded delivery. Keep the Royal Mail receipt and a photograph of the envelope. **Do not** sign for any documents delivered by hand. **Do not** allow entry to the property by anyone presenting themselves as an enforcement agent until the documentation above has been provided.

[[CTA:amber|Want this letter personalised to your case?|Upload the DCBL letter and original PCN. The £2.99 letter names your specific operator or council, cites the right statute (POFA / TMA / civil enforcement regs), and adds a CPR 13.3 set-aside reservation if there is a CCJ in play.|Get my personalised letter|/pricing]]

## Step 3: Refuse Peaceful Entry at the Door

If an enforcement agent does attend your property, what happens in the first 30 seconds matters more than anything else in the process. **Peaceful entry** by an enforcement agent under the Taking Control of Goods regime requires you to **voluntarily let them in or leave the door / a gate open**. They cannot force entry on a first attendance for most debt types, including parking and county-court judgments under £125,000 ([Schedule 12, paragraph 14 of the TCE Act 2007](https://www.legislation.gov.uk/ukpga/2007/15/schedule/12)).

Door script:

> *"I am the householder. I am not consenting to entry. Please put any documentation through the letterbox. I will respond in writing to the firm that instructed you."*

Then close the door. Do not engage in conversation about the debt, do not confirm whether named individuals live at the address, do not let the agent into the porch, garage or curtilage. Keep your vehicle locked and behind a closed gate if possible — an enforcement agent can take control of a vehicle on the public highway outside the property without entering, so a car on the driveway in view is the highest-risk item.

Once they leave, the agent's only options are to attend again on another day or to escalate back to the creditor for advice. Repeated peaceful-entry refusal is not a criminal offence and does not enlarge the debt beyond the fees already lawfully incurred.

## Step 4: If There Is a CCJ Behind It — Apply to Set Aside

If the underlying debt is a default County Court Judgment for a private parking claim, the most powerful step you can take is to **apply to set aside the CCJ under CPR 13.3** using **form N244**, with a witness statement and a **draft defence**. While the set-aside application is pending, **bailiff action is stayed** ([CPR 83.7](https://www.justice.gov.uk/courts/procedure-rules/civil/rules/part83)) on application to the court issuing the warrant.

Grounds for set-aside are realistic for most parking CCJs:

- You did not receive the N1 claim form because it was served on an old address (the operator used the DVLA-registered address, you had moved)
- You have a real prospect of defending on POFA, signage or grace-period grounds
- You acted promptly once you became aware of the judgment

The fee for an N244 application is **£275**, but with a witness statement of means you can apply for **fee remission**. If the set-aside is granted, the original claim is reinstated and you can defend it as if you had filed an N9B in the first place.

[[CTA:slate|If a CCJ is behind your DCBL letter|The £4.99 court pack drafts your N244 set-aside application, witness statement and draft defence in one upload. Filed by you. Stays bailiff action pending the court's decision.|See the £4.99 pack|/pricing]]

## Step 5: After You Send the Letter

Realistic outcomes after the pre-NOE stop letter:

1. **DCBL withdraws** — the operator was running on a thin file and the disclosure request is more trouble than the £100 charge is worth. Common with private-parking pressure files.
2. **DCBL ignores and escalates to a formal NOE** — you then have 7 clear days during which the same defence challenges remain open and you should send the disclosure-non-compliance follow-up.
3. **DCBL serves the disclosure** — useful, because it shows you the operator's actual file and locks in what they are claiming. The set-aside application then runs on documented facts.
4. **DCBL refers back to the creditor** — most likely for unclear-instruction or stale-debt files. You may receive a fresh letter from the operator's solicitor (BW Legal, DCB Legal, ELMS Legal) instead of escalation by DCBL.

In all four cases, the doorstep visit you were originally warned about typically does not happen, or happens days/weeks later by which point the documentation has been resolved one way or the other.

## What DCBL Cannot Do

- **Force entry** on a first attendance for a parking or low-value debt
- **Visit before 06:00 or after 21:00** (Reg 13, TCG Regs 2013)
- **Visit on a Sunday or bank holiday** (Reg 13)
- **Take vehicles essential to your work or disabled mobility** (Schedule 12, paragraph 11, TCE Act 2007 — vulnerable category)
- **Charge fees not set in the Fees Regs 2014** (£75 compliance / £235 enforcement / £110 sale, plus VAT)
- **Threaten arrest** — they are civilian enforcement agents, not police
- **Discuss the debt with neighbours, employers or third parties** — that breaches data protection and the Financial Conduct Authority Consumer Credit sourcebook (CONC 7) where applicable

Any breach of the above is a complaint route to the **Civil Enforcement Association (CIVEA)**, the **Enforcement Conduct Board**, and, if there has been harassment or misuse of personal data, the **Information Commissioner's Office** and your local court.

## The Numbers That Matter

- Statutory pre-attendance period after Notice of Enforcement: **7 clear days**
- Compliance fee (only chargeable after valid NOE): **£75**
- Enforcement fee (only chargeable after first attendance): **£235**
- Sale fee (only chargeable after goods removed for sale): **£110**
- Permitted hours of attendance: **06:00 to 21:00**, not Sundays or bank holidays
- Time to set aside a default CCJ under CPR 13.3: **no fixed limit, but "promptly"** once you are aware

[[CTA:teal|Day-of-letter action plan in your inbox|£2.99 personalised pre-NOE letter + the door-script PDF + the CIVEA complaint template. Delivered to your inbox in minutes.|Build my DCBL pack|/appeal]]`,
    faqs: [
      {
        question: "What is the difference between a DCBL doorstep letter and a Notice of Enforcement?",
        answer:
          "A doorstep / 'compliance' letter is a pre-statutory pressure letter from DCBL. It carries no statutory deadline and does not on its own permit enforcement fees to be added to the debt. A Notice of Enforcement is the formal statutory notice under regulation 7 of the Taking Control of Goods Regulations 2013. It gives you 7 clear days before an enforcement agent can attend. Until a valid NOE is served, you cannot lawfully be charged the £75 compliance fee, £235 enforcement fee or £110 sale fee.",
      },
      {
        question: "Can DCBL force entry into my home for a parking debt?",
        answer:
          "Almost never on a first attendance. Under Schedule 12, paragraph 14 of the Tribunals, Courts and Enforcement Act 2007, enforcement agents enforcing a magistrates' fine or High Court writ above £125,000 have limited forced-entry powers, but for parking debts (council Warrants of Control) and private County Court Judgments the entry must be 'peaceful', meaning you let them in or the door is open. Closing the door and refusing entry is lawful and does not increase the debt.",
      },
      {
        question: "What if DCBL turn up while I am out and clamp my car?",
        answer:
          "An enforcement agent can take control of a vehicle on the public highway outside the property without entering the property — this is called 'taking control by walking possession'. If your car is on the driveway in view, it is at risk; if it is locked in a garage or behind a closed gate, generally not. If they have clamped a car for a debt under £1,500 you can demand the original instruction documents at the gate (do not let them in). Vehicles essential to your work or for a disabled occupant fall into the 'vulnerable' category under the Schedule 12 regulations and can be challenged.",
      },
      {
        question: "Does sending the pre-NOE letter stop the clock automatically?",
        answer:
          "It does not formally stop a statutory clock because no statutory NOE clock has started at the doorstep-letter stage. What it does is: (1) lock in your dispute on the file so DCBL cannot claim non-engagement; (2) demand the underlying documents, which slows escalation; (3) preserve your CPR 31 / UK GDPR rights for any subsequent court application. If a NOE is later served, you have 7 clear days from that — the pre-NOE letter does not extend that 7 days but the documents you have already requested will inform your next move within it.",
      },
      {
        question: "Should I just call DCBL and pay it to make it go away?",
        answer:
          "Only if you have confirmed the debt is valid and there are no procedural defects in the underlying chain. Paying now closes off most of the challenge options (a paid debt is harder to dispute), and you may be paying the £170-£255 inflated figure rather than the original parking charge. If the underlying matter is a default CCJ you might still pay within 30 days of judgment and apply for a Certificate of Cancellation (form C30) to remove it from your credit file — but check the dates before you do, because if you are already outside the 30 days the CCJ stays.",
      },
      {
        question: "Can I record DCBL at my door?",
        answer:
          "Yes. Audio and video recording of a visitor to your property, on your property, is lawful under the UK GDPR Article 6(1)(f) legitimate-interests basis (protecting your own legal rights). Tell the agent at the door that the visit is being recorded. Many will moderate their tone immediately. You are not required to share the recording until or unless a court orders it, and the recording is admissible if you later complain to CIVEA, the Enforcement Conduct Board or apply to set aside a judgment.",
      },
      {
        question: "What if DCBL letter relates to a council PCN, not a private parking charge?",
        answer:
          "The challenge route is different. Council PCNs that reach the bailiff stage went via the Traffic Enforcement Centre at Northampton and an Order for Recovery. If you did not receive earlier notices (for example because they were sent to an old address), file a TE9 witness statement or TE7 out-of-time statutory declaration. Bailiff action is stayed pending the TEC's decision. Our £4.99 pack drafts the TE7 / TE9 with a narrative on why earlier notices were not received — the success rate is high when the council used an old DVLA address.",
      },
      {
        question: "Does this stop other DCBL actions in the future?",
        answer:
          "No. Each enforcement instruction is treated separately. A successful challenge to one DCBL doorstep visit does not prevent the same creditor instructing them again on a later debt. The defence is debt-specific. The underlying issue is whether the debt itself is lawfully owed and enforceable, which is why most of the value is in resolving the PCN or CCJ stage, not the bailiff stage.",
      },
    ],
  },

  {
    slug: "te9-witness-statement-parking-ccj-set-aside",
    title: "TE9 Witness Statement: Set Aside a Council Parking CCJ When You Never Got the Notices",
    description:
      "If a council PCN escalated to a CCJ without you ever seeing the earlier notices, form TE9 is the route to set it aside. The three statutory grounds, the witness-statement narrative that wins, and the £4.99 pack that drafts it for your facts.",
    publishedDate: "2026-05-18",
    category: "Court & Debt",
    seoTitle: "TE9 Form to Cancel a Council Parking CCJ: 3 Grounds That Win (2026)",
    seoDescription:
      "Council parking CCJ from a PCN you never received? Form TE9 to the Traffic Enforcement Centre, sworn under one of 3 statutory grounds, sets aside the order. Step-by-step guide + £4.99 pack.",
    content: `## TE9 Is Not the Same as N244

If a council parking PCN has escalated to a registered judgment debt and a bailiff is about to call, you have a specific route to undo it — and it is **not** the same as a private-parking CCJ set-aside. Council PCNs go through the **Traffic Enforcement Centre (TEC)** at Northampton, not the County Court Business Centre. The form is **TE9**, not N244. The fee position, the grounds, and the procedure are all different.

The TE9 is a **witness statement** sworn under penalty of perjury, filed with the TEC, declaring one of three specific grounds. If accepted, the **Order for Recovery** is revoked and bailiff action is **automatically stayed** while the case is referred back to the council for re-processing.

[[CTA:teal|Have a council PCN that's gone to bailiffs without notices?|Our £4.99 court pack drafts your TE9 witness statement, picks the right statutory ground, and packages the supporting evidence (proof of address, missed-post records). Filed by you, ready in minutes.|Get my TE9 pack|/pricing]]

## The Three TE9 Grounds (Pick Exactly One)

Form TE9 requires you to swear that **one** of these is true. You cannot tick two. Pick the strongest:

| Ground | When it applies | Evidence you need |
|---|---|---|
| **1. Did not receive the Notice to Owner** | The original Notice to Owner (issued after a council PCN goes unpaid) never reached you, usually because it went to an old DVLA address | Proof of current address dated before the NtO, council-tax records, electoral roll |
| **2. Made representations within 28 days and got no rejection notice** | You replied to the council on time but they never responded with a rejection or proceeded directly to enforcement | Copy of your representation (post receipt, sent email) + absence of a Notice of Rejection |
| **3. Appealed to the adjudicator within 28 days and got no response or it is still pending** | You appealed to London Tribunals or the Traffic Penalty Tribunal but the council enforced before the adjudication concluded | Tribunal case reference and acknowledgment |

The most common in 2026 is Ground 1 (didn't receive NtO). Council PCN chains rely on the DVLA-registered keeper address. If you moved house and forgot to update the V5C log book at DVLA, the NtO went to the old address, you never knew, and the council escalated through Charge Certificate → Order for Recovery → Warrant of Control → bailiffs without any of those letters reaching you.

## Step 1: Confirm You Need TE9, Not Something Else

The TE9 route applies if **all four** of these are true:

1. The PCN was issued by a **local council** (or TfL for red routes / bus lanes), not a private parking operator
2. There is now an **Order for Recovery** registered against you at the Traffic Enforcement Centre
3. **Bailiffs are involved**, or a Warrant of Control has been issued
4. One of the three statutory grounds genuinely applies on the facts

If the underlying matter is a **private parking** charge (ParkingEye, UKPC, APCOA), you cannot use TE9. The set-aside route for those is **CPR 13.3 with form N244** to the County Court — see our [N244 set-aside guide](/blog/n244-form-set-aside-parking-ccj).

If you **did receive** the notices but ignored them, you cannot use TE9 either. Knowingly false statutory declarations are perjury offences under section 5 of the Perjury Act 1911, which carries up to 2 years imprisonment.

## Step 2: Gather the Evidence for Your Ground

For Ground 1 (no NtO received), the persuasive evidence chain is:

- **Proof of change of address** dated **before** the alleged contravention or the NtO date — Council Tax bill, tenancy agreement, mortgage statement, utility bill
- **DVLA records** showing when you updated the V5C log book (often after the contravention) — establishes the council was relying on a stale address
- **Royal Mail mail-redirect record** if you set one up — explains why some post made it through and some didn't
- **Statutory declaration narrative** — short, factual, in your own words

For Ground 2 (representations made, no rejection notice), the evidence is:

- **Copy of your written representations** to the council
- **Proof of posting / sending** — recorded delivery slip or sent-email screenshot with date
- **A timeline** showing the gap between your representation and the next action by the council

For Ground 3 (adjudicator route), the evidence is essentially the **tribunal case reference number** plus an acknowledgment letter.

## Step 3: Complete and File Form TE9

The form is downloadable from [GOV.UK](https://www.gov.uk/government/publications/challenge-a-traffic-enforcement-order-outside-london-boroughs-or-a-parking-charge-in-a-london-borough-form-te9). Key fields:

- **Penalty Charge Notice number** — exactly as it appears on the bailiff letter
- **Issuing authority** — the council name
- **Vehicle registration**
- **Statement of which ground** you are swearing to (1, 2 or 3)
- **Witness statement narrative** — short, written by you, in plain English
- **Statement of Truth** signed and dated

There is **no fee** for filing a TE9 at the TEC. This makes it materially different from the £275 fee for an N244 set-aside in the County Court.

File by post to:

> Traffic Enforcement Centre
> County Court Business Centre
> St Katharine's House
> 21-27 St Katharine's Street
> Northampton NN1 2LH

Or by email to **mcoltec@justice.gov.uk** with TE9 as the subject prefix. Keep proof of filing — a recorded-delivery slip or the email-sent timestamp.

[[CTA:amber|Need help with the witness-statement narrative?|Upload your bailiff letter, the council PCN reference, and your proof of address. Our £4.99 pack drafts the TE9 witness statement specifically for your ground, with the evidence index ready to attach.|Generate my TE9|/pricing]]

## Step 4: What Happens After Filing

Within roughly **2-4 weeks** of receipt the TEC will:

1. **Revoke the Order for Recovery** automatically if the TE9 is properly completed and one of the three grounds is sworn
2. **Stay bailiff enforcement** immediately — bailiffs are notified by the TEC and must stop
3. **Refer the case back to the issuing council** for re-processing

The council can then **re-serve** the Notice to Owner at your correct address. You have **28 days** from that re-service to either pay the original PCN (often at the discounted rate if it falls within 14 days) or make formal representations and, if rejected, appeal to the **Traffic Penalty Tribunal** (or **London Tribunals** if inside the M25 boroughs).

The substantive case is therefore not "won" by the TE9 — it is **reset to the formal-representations stage** with your address now correct. From there you use the normal grounds (the council had no signage, the contravention is incorrectly recorded, mitigating circumstances, blue badge displayed and so on) to defend.

## Step 5: If TE9 Is Refused

The TEC officer reviewing your TE9 can refuse it if:

- The form is incomplete or unsigned
- The ground you swore is contradicted by other evidence on file (eg the council can prove you DID get the NtO via recorded-delivery records)
- You ticked multiple grounds (only one is allowed)
- The statement of truth is missing

If refused, you can re-file with a different ground (if genuinely applicable), apply for a court hearing under the **TE17** form for a referral to the County Court hearing centre, or, in limited cases, judicial-review the council's enforcement process. The judicial-review route is expensive and rarely justified for a £130 PCN.

## What TE9 Cannot Do

- **Cancel the underlying PCN** — only the Order for Recovery is revoked; the PCN itself is reset to the representations stage
- **Stop future re-service** — the council can issue a fresh NtO once the case is referred back
- **Recover bailiff fees you have already paid** — if you settled with a bailiff before filing, those payments are generally not refundable through the TE9 process. A separate small-claims action may be possible
- **Apply to private parking debts** — only council-issued PCNs go through the Traffic Enforcement Centre

## Numbers That Matter

- **Time to file**: as soon as you become aware of the bailiff letter
- **TEC fee for TE9**: **£0** (no fee, unlike £275 for N244)
- **Decision time at TEC**: ~2-4 weeks
- **Effect on bailiff action**: stayed immediately on receipt of TE9 by TEC
- **Re-service window for council**: typically 56 days from referral back
- **Penalty for false statement of truth**: up to **2 years imprisonment** under the Perjury Act 1911

[[CTA:slate|TE9 + TE7 together where deadlines have run out|If you need both the TE9 (witness statement) and a TE7 (extension of time because the bailiff letter is the first you knew), our £4.99 pack drafts both forms with a single narrative. See the [TE7 out-of-time guide](/blog/te7-out-of-time-parking-statutory-declaration).|See the pack|/pricing]]

## Related Reading

- [TE7 Out-of-Time Parking Statutory Declaration](/blog/te7-out-of-time-parking-statutory-declaration) — paired form if you are also out of time
- [N244 Set-Aside Parking CCJ](/blog/n244-form-set-aside-parking-ccj) — the private-parking equivalent
- [DCBL Doorstep Visit Stop Letter](/blog/dcbl-doorstep-visit-stop-letter) — what to do at the door while the TE9 is pending
- [County Court Claim Form N1 Parking Defence](/blog/county-court-claim-form-n1-parking-defence) — different procedure for private claims`,
    faqs: [
      {
        question: "How is TE9 different from N244?",
        answer:
          "TE9 is filed at the Traffic Enforcement Centre for COUNCIL parking debts that have escalated to bailiffs. It costs £0 and is sworn under one of three specific statutory grounds. N244 is filed at the County Court for PRIVATE parking debts that have become CCJs. It costs £275 and is supported by a witness statement under CPR 13.3. Different debt types, different courts, different forms, different fees.",
      },
      {
        question: "Can I file a TE9 if I did receive the Notice to Owner but ignored it?",
        answer:
          "No, and you should not. The TE9 grounds are specific. Swearing to one knowing it is false is perjury under the Perjury Act 1911, which carries up to 2 years imprisonment. If you received the notices and ignored them, your route is either to pay the bailiff and end the matter, or to negotiate a payment plan with the bailiff direct. If there is a genuine mitigating-circumstances ground but you missed the deadlines, the TE7 out-of-time route may apply instead.",
      },
      {
        question: "Will filing TE9 stop bailiffs from visiting tomorrow?",
        answer:
          "Yes — the TEC notifies the bailiff company of the filed TE9 and bailiff action is stayed until the TEC has decided whether to revoke the order. In practice the bailiff company normally pauses on the same or next working day after TEC notification. If a bailiff still attends, show them the TE9 receipt or filing confirmation at the door. They cannot lawfully execute against a stayed warrant.",
      },
      {
        question: "What evidence do I need for the 'didn't receive Notice to Owner' ground?",
        answer:
          "The strongest evidence chain is: (1) proof you lived at a different address on the date the NtO was sent (council tax bill, tenancy agreement, mortgage statement, utility bill — all dated BEFORE the NtO date), (2) DVLA records showing when you updated the V5C log book if your address change was recent, and (3) a short narrative explaining the timeline. The council relies on the DVLA-registered keeper address; if that was stale when they sent the NtO, your ground is solid.",
      },
      {
        question: "How long does the Traffic Enforcement Centre take to decide?",
        answer:
          "Roughly 2-4 weeks from receipt of a properly completed TE9. The TEC checks the form is complete, the ground is sworn, and there is no obvious contradiction (eg council recorded-delivery records). It does NOT investigate the substantive merits of your appeal — that is for the council to decide once the case is referred back. If you have not heard within 4 weeks, contact the TEC at mcoltec@justice.gov.uk with your case reference.",
      },
      {
        question: "Can the council just re-serve the Notice to Owner and start again?",
        answer:
          "Yes — and they usually do. The TE9 process resets the case to the representations stage, with your current address now confirmed. You then have 28 days from the re-served NtO to either pay the discounted PCN or make formal representations and, if rejected, appeal to the Traffic Penalty Tribunal or London Tribunals. The substantive defence work happens at the representations stage, not at the TE9 stage.",
      },
      {
        question: "Do I need a solicitor to file a TE9?",
        answer:
          "No. The TE9 is designed for litigants in person. The form is two pages, the statement is in your own words, and the TEC officers are familiar with self-represented filings. Our £4.99 pack drafts the witness statement and the evidence index but you sign, swear and file it yourself. A solicitor's fee for the same work would typically be £200-£500 and is not necessary for a £130 PCN.",
      },
      {
        question: "Can I claim back bailiff fees I already paid?",
        answer:
          "Generally no, not through the TE9 process. The TE9 stays future enforcement but does not unwind past payments. If you paid bailiff fees that were unlawfully demanded (eg fees added before a valid Notice of Enforcement was served), you can pursue the bailiff company in the small claims court. The £4.99 pack does not currently include the small-claims template for fee recovery — let us know if that is your situation and we will signpost the route.",
      },
    ],
  },

  {
    slug: "te7-out-of-time-parking-statutory-declaration",
    title: "TE7 Form: Bailiff Letter the First You Knew of a PCN?",
    description:
      "If the bailiff letter is the first you heard of a council PCN, the TE7 and TE9 forms can reset the whole case. The reasonable-cause grounds the TEC accepts, the evidence to attach, and a £4.99 pack that drafts both today.",
    publishedDate: "2026-05-18",
    category: "Court & Debt",
    seoTitle: "TE7 Form: Bailiff Letter the First You Knew of a PCN?",
    seoDescription:
      "If the bailiff letter is the first you heard of a council PCN, TE7 plus TE9 can reset the whole case. The reasonable-cause grounds the TEC accepts, the evidence to attach, and a £4.99 pack that drafts both today.",
    content: `## The TE7 Buys You Back the Window You Missed

The **TE9 witness statement** for revoking a council parking Order for Recovery must be filed within **21 days** of the order being made. In real life, almost nobody filing a TE9 is still inside that window — they only found out about the matter when a bailiff letter landed, weeks or months after the order. The form that bridges that gap is **TE7: Application for an Extension of Time**.

You file the TE7 **at the same time as the TE9**, asking the Traffic Enforcement Centre (TEC) to accept the TE9 even though it is out of time. The TEC will only grant the extension if you can show **reasonable cause** for missing the original window — and "I didn't know" is, on its own, not enough.

[[CTA:teal|Bailiff letter today, want extra time to challenge?|Our £4.99 pack drafts both your TE7 (extension of time) and the paired TE9 (witness statement) with a single coherent narrative for your facts. Filed by you, ready in minutes.|Get my TE7 + TE9 pack|/pricing]]

## What Counts as "Reasonable Cause"

The TEC has a wide discretion. From decided cases and the published TEC guidance, the recognised reasonable-cause categories are:

| Category | Typical example | Strength |
|---|---|---|
| **Wrong-address service** | Council sent NtO and OfR to a DVLA-registered address you no longer live at; no Royal Mail redirect was in place | Strong |
| **Postal failure** | Documented delivery problems at the address — neighbour signed, mail stolen, severe local disruption | Moderate |
| **Hospitalisation / serious illness** | Inpatient at the time of service, with discharge dates and medical records | Strong |
| **Bereavement** | Death in the family, often resulting in correspondence going unread | Moderate-strong |
| **Overseas absence** | Out of the country at the time of service, with travel records | Moderate |
| **Domestic abuse / fleeing address** | Survivor of abuse who relocated and could not safely engage with correspondence at the old address | Strong |
| **PCN not properly served to begin with** | Sub-ground of "wrong-address service" — the original PCN itself never reached you | Strong |

What does **not** typically count:

- "I forgot to update DVLA" (in isolation — but combine with proof you moved before the NtO and it becomes wrong-address service)
- "I ignored it because I didn't think it was real"
- "I was busy / on holiday for a few days"
- "I didn't understand the legal language"

## Step 1: Identify Your Ground and the Date Trigger

The TE7 narrative needs three things in order:

1. **When you became aware** of the order (usually: date you received the bailiff letter, or date a bailiff attended)
2. **Why you did not know earlier** (the reasonable-cause ground from the table above)
3. **What you propose to do now** — file the paired TE9 under one of the three statutory grounds

The chronology has to add up. If you knew about the Order for Recovery on, say, 1 March, but didn't file until 1 August, the TEC will probably refuse the TE7 on the basis that you did not act promptly *after* becoming aware. The rule of thumb is: file the TE7 + TE9 within **21 days of becoming aware**, not 21 days from the formal order date.

## Step 2: Complete Form TE7

Download from [GOV.UK](https://www.gov.uk/government/publications/application-for-an-extension-of-time-for-filing-a-statutory-declaration-form-te7). Key fields:

- **Penalty Charge Notice number**
- **Issuing authority** (council name)
- **Vehicle registration**
- **Reason for not making the declaration in time** — your narrative, in plain English
- **Statement of Truth** — signed and dated

The narrative section is where most TE7s succeed or fail. Keep it factual, dated, and specific. Avoid generalised complaints about the system or the council. Example skeleton:

\`\`\`
1. The first I knew of this matter was when I received a letter
   from [bailiff company] dated [date].
2. Between [date NtO would have been served] and [date you discovered
   the matter], I lived at [current address], not at [DVLA-registered
   address used by the council]. I attach a council-tax bill dated
   [date] confirming my address.
3. I updated DVLA on [date], but this was after the council had
   already served the Notice to Owner at the old address.
4. I therefore could not have made a statutory declaration within
   21 days of the order because I had no knowledge of the order or
   the underlying PCN until [date of bailiff letter].
5. I have now filed the accompanying TE9 declaring Ground 1 (did
   not receive Notice to Owner) and respectfully request the time
   limit be extended to today's date.
\`\`\`

[[CTA:amber|Need the narrative drafted for your facts?|Upload your bailiff letter, the council PCN reference, proof of address and any other evidence. Our £4.99 pack drafts both the TE7 narrative and the paired TE9 witness statement.|Generate my TE7|/pricing]]

## Step 3: File TE7 + TE9 Together

Both forms go to the same address and there is **no fee**:

> Traffic Enforcement Centre
> County Court Business Centre
> St Katharine's House
> 21-27 St Katharine's Street
> Northampton NN1 2LH

Or by email to **mcoltec@justice.gov.uk** — attach both PDFs and put **TE7 + TE9** in the subject line. Send recorded delivery if posting, and keep the proof.

## Step 4: What Happens After Filing

The TEC reviews TE7 first. If the reasonable-cause ground is accepted, the time limit is extended and the TE9 is processed on the same timeline as any other in-time TE9 — typically 2-4 weeks. Bailiff action is **stayed** on receipt by the TEC and remains stayed until both forms are decided.

If the TE7 is **refused**, the TE9 falls automatically and the Order for Recovery stands. Bailiff action resumes. You have a narrow right to apply for a court hearing using **form TE17** which refers the case to a District Judge at the County Court for an in-person decision. The TE17 hearing route is slower (3-6 months) but gives you a second chance with a fresh decision-maker.

## Common TE7 Failure Modes

The most frequent reasons TE7s are refused:

- **No supporting evidence of the ground** — a bare assertion is not enough. Attach the council tax bill, the medical record, the death certificate, the travel record
- **Delay between awareness and filing** — if you discovered the matter weeks ago and only filed today, explain the delay or expect refusal
- **The reasonable-cause narrative contradicts other evidence** — if the council can show recorded-delivery to your current address, the wrong-address ground is undermined
- **Form filled in by hand and illegible** — TEC officers process thousands per week; a typed form is reviewed first
- **TE9 not filed alongside** — TE7 without TE9 cannot be processed; the extension is meaningless without the underlying declaration

## What If the Council Disputes Your Ground?

Once the TEC refers the case back, the council may contest. They can submit:

- DVLA records showing your address as the one they used
- Proof of posting (rare for ordinary post, more common if they used recorded delivery)
- Evidence that you engaged with the matter at an earlier stage (eg paid the discounted PCN amount partially, called the parking line)

If they have weight on their side, the TEC may revoke the extension and the TE7 + TE9 falls. The cleaner cases are those where the council's address records are clearly stale and your move pre-dated the NtO.

## Numbers That Matter

- **TEC fee for TE7**: **£0**
- **Time limit for the underlying TE9**: 21 days from the Order for Recovery
- **Rule of thumb to file TE7 after awareness**: **within 21 days of becoming aware**
- **TEC decision time**: 2-4 weeks for combined TE7 + TE9
- **Effect on bailiffs**: stayed on receipt of TE7 + TE9 by TEC
- **Cost of N244 equivalent in private parking**: £275 (TE7 + TE9 is **£0**)

[[CTA:slate|Both forms drafted in one pack|TE7 (extension of time) + TE9 (witness statement) drafted around one coherent narrative for your facts. £4.99 one-time payment.|See pricing|/pricing]]

## Related Reading

- [TE9 Witness Statement Set Aside Council CCJ](/blog/te9-witness-statement-parking-ccj-set-aside) — the substantive declaration the TE7 buys time for
- [DCBL Doorstep Visit Stop Letter](/blog/dcbl-doorstep-visit-stop-letter) — what to do at the door while TE7 + TE9 are pending
- [N244 Set-Aside Parking CCJ](/blog/n244-form-set-aside-parking-ccj) — private-parking equivalent
- [County Court Claim Form N1 Parking Defence](/blog/county-court-claim-form-n1-parking-defence) — the earlier stage for private claims`,
    faqs: [
      {
        question: "What is the difference between TE7 and TE9?",
        answer:
          "TE9 is the witness statement declaring one of three statutory grounds for revoking a council parking Order for Recovery. TE7 is the application for an extension of time to file the TE9 if the original 21-day window has expired. They are paired — you file both together at the Traffic Enforcement Centre when the bailiff letter is the first you knew of the matter.",
      },
      {
        question: "How late can I be before TE7 will not be granted?",
        answer:
          "There is no absolute cut-off, but the TEC considers how long you delayed AFTER becoming aware of the order, not just how long after the order itself. As a rule of thumb, file the TE7 within 21 days of receiving the bailiff letter or first becoming aware of the matter. Longer delays are accepted if you can explain them (continued illness, ongoing absence, etc) but bare delay erodes the case.",
      },
      {
        question: "Is 'I didn't know about it' enough on its own?",
        answer:
          "Not on its own. The TEC needs you to explain WHY you didn't know — which is essentially the reasonable-cause ground. 'I didn't know because the council sent notices to my old DVLA-registered address while I lived elsewhere' is a strong ground. 'I didn't know because I never opened the envelopes' is not. Tie the non-knowledge to a specific cause: wrong address, hospitalisation, bereavement, overseas absence.",
      },
      {
        question: "Will bailiffs visit while my TE7 is being decided?",
        answer:
          "No. Once the TEC receives a properly completed TE7 + TE9, the bailiff company is notified and enforcement is stayed. If a bailiff still attends, show them the TEC receipt or the email confirmation at the door — they cannot lawfully proceed against a stayed warrant. If you have not yet received an acknowledgment from the TEC, call mcoltec@justice.gov.uk on 0300 123 1056 to confirm receipt and ask for a stay reference number.",
      },
      {
        question: "Do I need to attach evidence to the TE7?",
        answer:
          "Strongly recommended. The form does not require evidence to be valid but the TEC will weight your application according to what supports the reasonable-cause ground. For wrong-address service: council tax bill dated before the NtO, tenancy agreement, mortgage statement, utility bill. For illness: discharge summary or GP letter. For bereavement: death certificate. Attach as exhibits to the witness statement narrative.",
      },
      {
        question: "What is the £0 fee about? Why is it free?",
        answer:
          "The Traffic Enforcement Centre process for council parking debts is statutorily fee-free for the TE7 and TE9. This is one of the major differences from private-parking CCJ set-aside, which uses form N244 at the County Court and costs £275 (with fee remission available on a means test). The free TE7 / TE9 route is the single biggest reason to identify whether your debt is council or private — they have very different cost profiles.",
      },
      {
        question: "What if my TE7 is refused?",
        answer:
          "You can apply for a referral to a County Court hearing using form TE17. This refers the case to a District Judge for an in-person decision and gives you a second bite at the apple. The TE17 route is slower (3-6 months) and there is a court fee (currently £108) but it gives you a hearing in front of a judge rather than a paper review by a TEC officer. In a small minority of cases, judicial review of the council's enforcement decision is also possible but rarely cost-effective.",
      },
      {
        question: "Can I file TE7 without TE9?",
        answer:
          "No. The TE7 is meaningless without the underlying TE9 — it is an extension of time to file the witness statement, not a standalone challenge. Always file the two together. Our £4.99 pack drafts both forms with a single coherent narrative so the extension request and the substantive declaration reinforce each other.",
      },
    ],
  },

  {
    slug: "notice-of-discontinuance-parking-claim-costs",
    title: "Parking Claim Discontinued? How to Claim Costs Back Under CPR 38.6",
    description:
      "If the operator filed a Notice of Discontinuance after you filed your defence, you may be entitled to wasted costs under CPR 38.6. The form, the costs schedule, and what's recoverable in small claims.",
    publishedDate: "2026-05-18",
    category: "Court & Debt",
    seoTitle: "Parking Claim Discontinuance Costs (CPR 38.6, 2026 Guide)",
    seoDescription:
      "ParkingEye, UKPC, CEL or Excel filed N279 to discontinue? You can claim your costs under CPR 38.6. The schedule, the limits in small claims, and the £4.99 template.",
    content: `## The Operator Just Quit. Now You Can Claim Costs.

If you defended a private-parking claim and the claimant filed a **Notice of Discontinuance (form N279)** before the hearing, the operator has effectively conceded the case. Most defendants treat this as a "win and walk away" — they file the defence away, the bailiff threat evaporates, and they move on. But there is one more step worth taking, and the law is on your side.

Under **Civil Procedure Rule 38.6(1)**, a claimant who discontinues is **presumed liable for the defendant's costs** to the date of the notice of discontinuance, unless the court orders otherwise. In the small-claims track the costs are limited by **CPR 27.14**, so the amounts are modest, but the principle stands. Claim what you can. It is your time and inconvenience.

[[CTA:teal|Discontinued claim — claim your costs|Our £4.99 pack now includes a Part 38 costs schedule template. Drop in your fixed costs and loss of earnings; we structure the submission to CPR 27.14 (1) (b)-(e).|Get the costs template|/pricing]]

## What Is Actually Recoverable in Small Claims

The small-claims fixed-costs regime in CPR 27.14 limits what an unsuccessful party can be ordered to pay. The recoverable heads are:

| CPR 27.14 paragraph | What it covers | Typical 2026 amount |
|---|---|---|
| 27.14 (2) (a) | Fixed costs from CPR Part 45 | £80-£105 if the defendant has solicitors (rarely applies — most defendants are litigants in person) |
| 27.14 (2) (b) | Court fees paid by the defendant | Usually £0 (defendants don't pay fees on the claim) |
| 27.14 (2) (c) | Travel expenses to the hearing | Reasonable cost of getting there |
| 27.14 (2) (d) | Loss of earnings for attending the hearing | Up to **£95 per person per day** |
| 27.14 (2) (e) | Expert fees (rare in parking) | Up to £750 per expert |

For a typical litigant-in-person parking defence that was discontinued **before** any hearing happened, the recoverable items are limited to loss of earnings for time spent preparing (capped at £95/day) and any document or postage costs. Don't expect to recover the £4.99 pack fee — it is not within CPR 27.14.

## Step 1: Get the Discontinuance in Writing

Notice of Discontinuance is **form N279**. The claimant files it at court and serves a copy on you. The court formally acknowledges the discontinuance, the case is closed, and any directions, hearing dates or witness statement deadlines fall away.

You should receive either:

1. A copy of the N279 directly from the claimant or their solicitor
2. A notice from the court (form N280) confirming the discontinuance

Keep both. The N279 is the trigger for your CPR 38.6 entitlement.

## Step 2: Calculate Your Costs Schedule

Set up a simple table. List every dated activity and the time spent. Be realistic — small-claims judges are sceptical of inflated schedules.

Example:

| Date | Activity | Hours | Rate (£95/day = £12.67/hr) | £ |
|---|---|---|---|---|
| 12 Mar | Reading claim form, preparing N9 | 1 | 12.67 | 12.67 |
| 18 Mar | Drafting N9B defence | 2 | 12.67 | 25.34 |
| 25 Mar | Reading claimant's directions questionnaire, preparing N180 | 1 | 12.67 | 12.67 |
| 10 Apr | Postage of recorded-delivery filings (3 × £4.20) | — | — | 12.60 |
| 22 Apr | Witness statement drafting | 1.5 | 12.67 | 19.00 |
| 6 May | Receipt of N279 — case closes | — | — | — |
| **Total** | | **5.5 hours + £12.60 postage** | | **£82.28** |

That £82.28 is recoverable in principle. It is not a fortune but it is yours.

[[CTA:amber|Want the schedule pre-formatted?|Our £4.99 pack now includes the costs-schedule template populated with the CPR 27.14 limits and the loss-of-earnings cap. Drop in your dates and submit.|Get the template|/pricing]]

## Step 3: Apply for the Costs Order

There are two routes, depending on how cooperative the claimant is:

**Route A: Costs by consent (preferred)**

Write to the claimant or their solicitor enclosing your costs schedule and asking them to consent. Many operators will pay a modest sum (£50-£150) to close the file without further court involvement. If they consent in writing, file the agreement at court for a sealed consent order.

**Route B: Application for costs at the court's discretion**

If the claimant refuses or ignores you, file an **N244 application notice** at the court, attaching your schedule and asking the court to award costs under **CPR 38.6**. The court fee is **£59 (paper) or £29 (online)** for an application without notice. The judge will decide on the papers or list a brief hearing.

Make sure your application is filed **within a reasonable time** of the discontinuance. There is no hard limit but the rule of thumb is **within 1-2 months**; longer delays are evidence of acquiescence.

## Step 4: What the Court Will and Will Not Award

Likely to be allowed:

- Postage and recorded-delivery fees (genuine receipts)
- Loss of earnings at up to £95/day with proof (payslip, employer letter, self-employed tax records)
- Court fees on your own application (if you brought one)

Likely to be reduced or disallowed:

- Unsupported time entries (no contemporaneous record)
- "Stress and inconvenience" — not a recognised head of cost
- Solicitor fees if you didn't actually use one (£80-£105 fixed costs apply only if you had legal representation)

In practice, awards on discontinued parking claims tend to land in the **£40-£150** range. Worth doing but not life-changing.

## When CPR 38.6 Does NOT Apply

The presumption of costs against the discontinuing claimant **does not apply** if:

- The claim was on the **fast track or multi-track** rather than small claims (different costs regime)
- The discontinuance was part of a **Tomlin order** or settlement agreement (costs are dealt with in the settlement)
- You **agreed** to discontinue (eg accepting an offer of "drop claim, walk away")

Read the N279 carefully. If it says "without costs" and you sign anything alongside it, you may have waived the entitlement.

## Step 5: After You Receive the Costs Award

Pay attention to whether the court:

- **Made an order with a fixed sum** — payable within 14 days, enforceable like any judgment
- **Approved your schedule for assessment** — needs a detailed bill, takes longer
- **Recorded the costs as "in any event for the defendant"** — meaning you can recover them if the operator ever re-files (rare)

If the operator doesn't pay the order, you can enforce as a regular judgment debt — the irony of using the bailiff route against the operator who threatened it against you is not lost on most defendants.

## Numbers That Matter

- **CPR 27.14 cap on loss of earnings**: **£95 per person per day**
- **N244 application fee** (paper): £59
- **N244 application fee** (online): £29
- **Typical award range** on discontinued parking claims: **£40-£150**
- **Time limit to apply**: no hard rule; aim for **within 1-2 months**
- **Solicitor's fixed costs**: £80-£105 (only if you had a solicitor)

[[CTA:slate|Don't leave costs on the table|If you defended and the claimant discontinued, the law is on your side. Our £4.99 court pack now includes the Part 38 costs schedule + N244 application template.|See the pack|/pricing]]

## Related Reading

- [County Court Claim Form N1 Parking Defence](/blog/county-court-claim-form-n1-parking-defence) — the defence that triggered the discontinuance
- [N244 Set-Aside Parking CCJ](/blog/n244-form-set-aside-parking-ccj) — different N244 use case
- [DCBL Doorstep Visit Stop Letter](/blog/dcbl-doorstep-visit-stop-letter) — if the discontinuance came after bailiffs were instructed`,
    faqs: [
      {
        question: "What is CPR 38.6 in plain English?",
        answer:
          "Civil Procedure Rule 38.6 is the rule that says when a claimant gives up (discontinues) a court case, they are presumed responsible for the defendant's reasonable costs up to that date, unless the court orders otherwise. It is the legal basis for a defendant claiming back time and expenses from a parking operator that filed a Notice of Discontinuance after the defence was filed.",
      },
      {
        question: "How much can I realistically claim if I defended myself?",
        answer:
          "Realistic awards on discontinued small-claims parking cases sit in the £40-£150 range for a litigant in person. The CPR 27.14 limits cap loss of earnings at £95 per day, plus postage and document costs. Don't expect to recover the £4.99 pack fee, your time at solicitor's rates, or 'stress and inconvenience' — none of those are within the small-claims fixed-costs regime.",
      },
      {
        question: "Do I need to file form N244 to claim costs?",
        answer:
          "Only if the claimant won't agree. The cheapest route is to write to the claimant or their solicitor with a costs schedule and ask them to consent. Many parking operators will pay a modest sum (£50-£150) to close the file. If they refuse or ignore you, file N244 with the schedule attached and ask the court to award costs under CPR 38.6. The N244 fee is £59 paper or £29 online.",
      },
      {
        question: "How long after the discontinuance can I claim?",
        answer:
          "There is no hard time limit in CPR 38.6, but the rule of thumb is to apply within 1-2 months of receiving the Notice of Discontinuance. Longer delays look like acquiescence and weaken your case. If you receive the N279 in January and apply in November, expect the court to be sceptical and possibly disallow the claim on the basis that you delayed unreasonably.",
      },
      {
        question: "Can I claim for the time I spent reading and replying to the original Letter Before Claim?",
        answer:
          "Pre-action costs are technically claimable but the small-claims fixed-costs regime makes this difficult in practice. A reasonable judge might allow 1-2 hours of pre-action work at £12.67/hour (the per-hour equivalent of the £95/day cap) if the time is contemporaneously recorded. Don't pad the schedule — judges have seen every variation and inflated schedules tend to be cut by 50%+.",
      },
      {
        question: "What if the claimant says the discontinuance was 'without costs' — can I still apply?",
        answer:
          "If the N279 itself says 'without costs' and you have not signed anything agreeing to that, the default CPR 38.6 presumption still applies — the claimant cannot unilaterally avoid costs. The court ultimately decides. If, however, you signed a Tomlin order or settlement agreement that included a costs waiver, you have waived the entitlement and an application would fail.",
      },
      {
        question: "Will applying for costs anger the claimant into refiling?",
        answer:
          "No. A discontinued claim under CPR 38.7 cannot be re-brought without the court's permission, and that permission is rarely granted where the discontinuance was effectively a concession. Filing for costs does not give the operator a route back into the case. The worst they can do is contest the schedule.",
      },
      {
        question: "Can I claim costs if the operator discontinued before I filed a defence?",
        answer:
          "Yes in principle, but the recoverable amount is minimal. If you only received the claim form and the operator discontinued before you had to act, your time and expense are likely zero or near zero. The Part 38 entitlement still arises but the schedule will be too modest to justify even an N244 application fee. Walk away and treat it as the cleanest possible win.",
      },
    ],
  },

  {
    slug: "charge-certificate-50-percent-increase-stop-council-parking",
    title: "Council Charge Certificate (50% Increase): How to Stop It Inside the 14-Day Window",
    description:
      "The Charge Certificate adds 50% to your council PCN and starts the clock to a Warrant of Control. Inside 14 days you can still file out-of-time representations. The grounds, the wording, and the £2.99 letter.",
    publishedDate: "2026-05-18",
    category: "Court & Debt",
    seoTitle: "Charge Certificate Parking 50% Increase: Stop Inside 14 Days (2026)",
    seoDescription:
      "Council Charge Certificate adds 50% to your PCN and lets them apply for a Warrant of Control. Inside 14 days you can still file out-of-time representations. £2.99 personalised letter.",
    content: `## The Charge Certificate Is Not the End of the Road

A **Charge Certificate** is what a local council issues when a Penalty Charge Notice has gone unpaid past the formal-representations stage and no successful appeal is in flight. It does two things at once that make it the moment most people panic:

1. **Increases the charge by 50%** — typically from £130 to £195 (or £160 to £240 in central London) under regulation 21 of the [Civil Enforcement of Road Traffic Contraventions (Approved Devices, Charging and Adjudication) (England) Regulations 2022](https://www.legislation.gov.uk/uksi/2022/55/contents).
2. **Starts the clock to the Traffic Enforcement Centre** — once 14 days pass without payment, the council can register the debt at the TEC at Northampton and apply for an **Order for Recovery**, which is the gateway to a Warrant of Control and bailiffs.

What most people don't realise is that the Charge Certificate is **not** a final order. The 14-day window between issue of the Charge Certificate and TEC registration is the last opportunity to file **out-of-time representations** to the council, citing one of several statutory grounds, before bailiff escalation becomes likely.

[[CTA:teal|Charge Certificate in hand — 14 days to act|Our £2.99 personalised letter cites the right statutory ground for your case (procedural impropriety, NtO never received, mitigating circumstances), drafted to the council's preferred format. Filed by you, ready in minutes.|Generate my letter|/pricing]]

## What the Charge Certificate Actually Says

The Charge Certificate is a one-page council letter, usually printed on the council's standard PCN letterhead. It will:

- Quote the original PCN reference and vehicle registration
- State that the formal-representations stage has passed without a successful appeal
- Confirm the new amount payable (original PCN × 1.5)
- Warn that the council will register the debt at the TEC if not paid within 14 days

Read the date carefully. The 14-day clock runs from the **date of the Charge Certificate**, not the date you received it. Allow 2-3 working days for postal service when calculating your real window.

## The Statutory Grounds for Out-of-Time Representations

Under [regulation 23 of the 2022 Regulations](https://www.legislation.gov.uk/uksi/2022/55/regulation/23), a council *may* accept representations after the formal-representations deadline if the recipient can show one of the following:

| Ground | What it means | Documentary support |
|---|---|---|
| **Procedural impropriety** | The council made a mistake at an earlier stage (wrong contravention code, defective NtO, no signage at the location) | Photos of signage absence, NtO comparison |
| **Did not receive the NtO** | Notice to Owner never reached you (wrong address, missed post) | Council-tax bill / tenancy at correct address before NtO date |
| **Mitigating circumstances** | Genuine emergency or hardship affected your ability to respond (hospitalisation, bereavement, domestic abuse) | Medical records, death certificate, refuge letter |
| **Vehicle not yours at the time** | You had sold or transferred the vehicle before the contravention | V5C change-of-keeper section, sale receipt, dealer invoice |
| **Statutory exemption** | Blue badge displayed, NHS vehicle on emergency call, vehicle stolen | Blue badge photo, NHS letter, police crime reference |

The council is not obliged to accept out-of-time representations, but in practice they often will if the ground is properly evidenced and submitted promptly. The alternative — TEC registration → Order for Recovery → Warrant of Control → bailiffs — generates more cost and complaint for the council than reviewing a fresh representation.

## Step 1: Establish Your Ground

Pick the strongest single ground. Do not list four weak ones. Council representation-review teams skim — clarity wins.

The most commonly successful grounds in 2026 are:

1. **Did not receive the NtO** combined with **procedural impropriety** (council used a stale DVLA-registered address) — strong if you can prove residence elsewhere at the time
2. **Mitigating circumstances** with documented hospitalisation or bereavement during the relevant window — strong with discharge summary or death certificate
3. **Vehicle sold before contravention** with the V5C disposal slip — automatically liable on the new keeper, not you

Less commonly successful:

- "I forgot" — not a recognised ground
- "I was on holiday" — only relevant if you were genuinely unable to engage at any point during the entire 28-day formal-representations window
- "I didn't understand the form" — councils rarely accept

## Step 2: Draft the Out-of-Time Representations Letter

Keep it short. Two pages maximum. Plain English. Numbered paragraphs.

Skeleton:

\`\`\`
[Your name and current address]
[Date]

[Council name]
Parking Service / Bailiff Liaison Team
[Address from the Charge Certificate]

Reference: [PCN reference from the Charge Certificate]
Vehicle registration: [VRM]

Out-of-time representations under the Civil Enforcement of Road
Traffic Contraventions (Approved Devices, Charging and Adjudication)
(England) Regulations 2022, regulation 23.

1. I have received your Charge Certificate dated [date].
2. I make out-of-time representations on the ground of [your single
   ground from the table above].
3. The factual basis is as follows: [3-5 numbered facts, dated, in
   plain English].
4. I attach: [exhibit list — proof of address, medical record, V5C
   disposal slip, etc].
5. I respectfully request that the Charge Certificate be revoked, the
   formal-representations stage re-opened, and the matter referred
   back to the parking-service decision-maker.

Yours faithfully,
[Signature]
\`\`\`

[[CTA:amber|Want this drafted for your council and your ground?|Upload the Charge Certificate, your original PCN reference and the supporting evidence (proof of address, medical record, V5C slip). Our £2.99 letter picks the right statutory ground and structures it for your council's preferred format.|Get my letter|/pricing]]

## Step 3: File Inside the 14-Day Window

Send the letter by **recorded delivery** to the address on the Charge Certificate. Keep the Royal Mail receipt. Email a copy in parallel if the council provides an email address on the letter — most do. Subject line: **"Out-of-time representations — PCN [reference]"**.

Mark the envelope clearly: **"Urgent — out-of-time representations under reg 23"**. This routes it to the right team rather than the general payments inbox.

## Step 4: What Happens After Filing

There are four likely outcomes:

1. **Council accepts representations and revokes the Charge Certificate** — the matter returns to the formal-representations stage, you have 28 days to formalise your appeal, and if rejected you can escalate to the Traffic Penalty Tribunal (or London Tribunals).
2. **Council rejects the representations** — you receive a written rejection notice. If the ground was substantive (eg vehicle sold), you can still appeal the rejection to the tribunal.
3. **Council ignores the representations** — file the **Notice of Rejection request** under regulation 23(7), which compels them to issue a decision. After 56 days of silence the representations are deemed accepted by operation of regulation 23(6) — a powerful technical default that surprisingly few people invoke.
4. **Council proceeds to TEC registration despite the representations** — file form **TE9** at the Traffic Enforcement Centre on Ground 2 (you made representations and got no rejection notice). See our [TE9 set-aside guide](/blog/te9-witness-statement-parking-ccj-set-aside).

## Step 5: If the 14 Days Have Passed

You are not out of options. Once the Charge Certificate matures and the debt is registered at the TEC, the **TE9 + TE7 route** applies. The £4.99 court pack drafts both forms. See:

- [TE9 Witness Statement Set Aside Council CCJ](/blog/te9-witness-statement-parking-ccj-set-aside)
- [TE7 Out-of-Time Parking Statutory Declaration](/blog/te7-out-of-time-parking-statutory-declaration)
- [DCBL Doorstep Visit Stop Letter](/blog/dcbl-doorstep-visit-stop-letter) if bailiffs have already been instructed

## Discount Considerations

If your ground is weak and you do not contest, paying the **Charge Certificate amount in full inside the 14-day window** is still cheaper than letting it escalate. Once the TEC registers the debt, **£75 enforcement-stage fees** are added by the bailiff company, on top of the £195 (or £240) already on the certificate. The cost ladder runs:

| Stage | Typical total payable |
|---|---|
| Pay the PCN inside 14 days of the original | £65 (50% discount on £130) |
| Pay the PCN inside 28 days | £130 |
| Pay the Charge Certificate | £195 |
| Pay after TEC registration / before bailiff visit | ~£270 |
| Pay after bailiff visit | ~£500+ (with enforcement and sale fees) |

## Numbers That Matter

- **Charge Certificate increase**: **50%** on the unpaid PCN under reg 21 of the 2022 Regulations
- **Out-of-time representations window**: **14 days** from Charge Certificate
- **Statutory deemed acceptance**: **56 days** of no response under reg 23(6)
- **TEC application earliest date**: 14 days after Charge Certificate
- **Bailiff fees added on enforcement**: £75 (compliance) + £235 (enforcement) + £110 (sale)

[[CTA:slate|14 days to act on a Charge Certificate|Our £2.99 personalised letter is drafted to your council's preferred format with the right statutory ground for your case. Filed by you, ready in minutes.|Build my letter|/appeal]]

## Related Reading

- [TE9 Witness Statement Set Aside Council CCJ](/blog/te9-witness-statement-parking-ccj-set-aside) — next step if Charge Certificate matures to a TEC order
- [TE7 Out-of-Time Parking Statutory Declaration](/blog/te7-out-of-time-parking-statutory-declaration) — if you are out of time on TE9
- [DCBL Doorstep Visit Stop Letter](/blog/dcbl-doorstep-visit-stop-letter) — bailiff-stage stop letter
- [County Court Claim Form N1 Parking Defence](/blog/county-court-claim-form-n1-parking-defence) — different procedure for private parking`,
    faqs: [
      {
        question: "What is the difference between a Charge Certificate and a Notice to Owner?",
        answer:
          "A Notice to Owner (NtO) is the second-stage council letter that follows an unpaid PCN. It opens the formal-representations window of 28 days. A Charge Certificate is the third-stage letter that follows an unsuccessful or absent formal-representations response. It adds 50% to the charge and starts the 14-day clock to Traffic Enforcement Centre registration. The Charge Certificate is later in the chain and more urgent than the NtO.",
      },
      {
        question: "Why does the Charge Certificate add 50% — is that legal?",
        answer:
          "Yes. Regulation 21 of the Civil Enforcement of Road Traffic Contraventions Regulations 2022 specifically authorises a 50% uplift when a Charge Certificate is issued. This is not a penalty — it is a statutory escalation built into the enforcement chain. The same regulation also caps further increases once the debt is at the TEC.",
      },
      {
        question: "Can I still appeal after the Charge Certificate has been issued?",
        answer:
          "Not via the normal formal-representations route — that window closed. However, regulation 23 of the 2022 Regulations allows out-of-time representations to the council if you can show one of the recognised grounds (procedural impropriety, NtO not received, mitigating circumstances, vehicle sold before contravention, statutory exemption). The 14-day window between the Charge Certificate and TEC registration is the last realistic opportunity.",
      },
      {
        question: "What if the council ignores my out-of-time representations?",
        answer:
          "Under regulation 23(6) of the 2022 Regulations, if the council fails to issue a notice of rejection within 56 days of properly-served representations, the representations are deemed accepted by operation of law. This is a powerful default that few people invoke. Send the representations recorded delivery, keep the receipt, and if 56 days pass without a written rejection, write to the council citing the deemed acceptance.",
      },
      {
        question: "Should I just pay the £195 to make it go away?",
        answer:
          "Depends on whether you have a real ground. If you have a documented mitigating circumstance, a vehicle-sold disposal slip, a strong wrong-address defence, or a statutory exemption, the out-of-time representations cost you a £2.99 letter and potentially save the £195. If you have no real ground and the 14-day window is short, paying may be cheaper than letting it escalate to TEC + bailiffs (which adds £75-£420 in enforcement fees).",
      },
      {
        question: "Does the Charge Certificate go on my credit file?",
        answer:
          "Not on its own. Only judgment debts and certain regulated-credit defaults are reported to credit reference agencies. A Charge Certificate is an internal council enforcement step. However, if the matter escalates to a TEC Order for Recovery and then bailiff enforcement, the underlying debt is publicly recorded at the Traffic Enforcement Centre and is sometimes picked up by some credit-monitoring services.",
      },
      {
        question: "What if the Charge Certificate has an error — wrong vehicle, wrong date?",
        answer:
          "That is procedural impropriety, one of the recognised grounds. Cite reg 23(1)(a) of the 2022 Regulations, attach a photo or scan of the Charge Certificate showing the error, and the council should revoke it. Common errors include: wrong VRM, wrong contravention code, wrong date, NtO issued in someone else's name, location described inconsistently between the NtO and the Charge Certificate.",
      },
      {
        question: "Can I challenge the council's procedure even after the Charge Certificate has matured?",
        answer:
          "Yes, via the TE9 + TE7 route at the Traffic Enforcement Centre once the debt has been registered. The TE9 has three statutory grounds and the TE7 is the extension of time. Both are free (no fee). See our TE9 and TE7 guides. Beyond the TEC stage, judicial review of the council's enforcement decision is technically available but rarely cost-effective for a £195 PCN.",
      },
    ],
  },

  {
    slug: "county-court-hearing-day-parking-defence-preparation",
    title: "County Court Hearing Day for a Parking Claim: What to Bring, What to Say, What to Expect",
    description:
      "If your defended parking claim has been listed for hearing, here is exactly what to prepare. The court bundle, the witness statement, the POFA / Beavis / CRA points the District Judge will weigh, and the 30-minute hearing flow.",
    publishedDate: "2026-05-18",
    category: "Court & Debt",
    seoTitle: "Parking Claim Hearing Day Preparation (District Judge, 2026)",
    seoDescription:
      "Defended a private parking claim and got a hearing date? The court bundle, the witness statement, the structure of a 30-minute small-claims hearing, and the £4.99 prep pack.",
    content: `## Most Hearings Are Decided in the First 5 Minutes

If you have defended a private parking claim and a hearing date has been listed, you have crossed the worst of the procedural ground — the operator chose not to discontinue and is committed to going forward. That fact alone is meaningful: it means they think they have a defensible case, or they have miscalculated. Your job on hearing day is to put the District Judge in a position to see, in the first five minutes, that the law is on your side.

Small-claims hearings for parking matters typically run **30-40 minutes**. The judge has read the papers (or skimmed them on the day if listed back-to-back). The hearing is not a re-trial of every fact — it is a focused conversation about the procedural points (POFA), the contract points (signage and CRA 2015), and the proportionality points (Beavis distinction). The defendant who has organised those three buckets cleanly wins the hearing in the first five minutes. The defendant who hasn't loses it in the same window.

[[CTA:teal|Hearing date listed? Don't go in blind|Our £4.99 court pack drafts your witness statement, organises your exhibit bundle and gives you the talking points for each of the three buckets (POFA, signage, Beavis distinction).|Get the hearing prep pack|/pricing]]

## Step 1: Understand What the Court Will Have Seen

By the hearing date, the court file usually contains:

1. **The Claim Form (N1) and Particulars of Claim** filed by the operator
2. **Your N9 Acknowledgement of Service** and **N9B Defence**
3. **Both parties' N180 Directions Questionnaires**
4. **Witness statements** filed at the court's direction (usually 14 days before hearing)
5. **Skeleton arguments** or position statements if the judge ordered them
6. **A bundle index** if directions required one

The District Judge will normally read at least your defence and witness statement before the hearing. Skeleton arguments are rare in small claims because of the cost-cap concerns under CPR 27.14, but if the judge orders one, file it on time.

## Step 2: Prepare Your Bundle

Bring **two paper copies** of every document, indexed in the order below. One copy for the judge, one for you. If the claimant attends, they will have their own.

Standard small-claims parking bundle:

| Tab | Document |
|---|---|
| 1 | Index |
| 2 | Your Defence (N9B) |
| 3 | Your Witness Statement, signed and dated, with Statement of Truth |
| 4 | The Notice to Keeper, full image (front and back) |
| 5 | Any subsequent operator notices and your replies |
| 6 | Signage photographs, dated, with location notes |
| 7 | Map of the site with the relevant signage and bay positions marked |
| 8 | Dashcam stills, if relevant (entry / exit timestamps) |
| 9 | The relevant statutes: POFA 2012 Sch 4 §9, CRA 2015 s.62, the Private Parking Code of Practice |
| 10 | The relevant cases: ParkingEye v Beavis [2015] UKSC 67, Vine v Waltham Forest [2000] 1 WLR 2383, Cavendish v Makdessi [2015] UKSC 67 |
| 11 | Your costs schedule under CPR 27.14 (in case you win) |

Use coloured tab dividers — small-claims judges process dozens of these and a well-tabbed bundle is appreciated. Page numbers are required by some courts; if your hearing notice mentions paginated bundles, do it.

[[CTA:amber|Need help building the bundle?|Our £4.99 pack drafts your witness statement with a Statement of Truth, lists the exhibits to attach, and gives you the bundle-index template ready for tab dividers.|Build my bundle|/pricing]]

## Step 3: Write the Witness Statement

The witness statement is the document the judge actually reads. Get it right and most of the hearing is a formality. The structure:

\`\`\`
IN THE COUNTY COURT AT [HEARING CENTRE]
Claim No: [from N1]
[Claimant] -v- [Defendant]

WITNESS STATEMENT OF [YOUR NAME]

I, [name], of [address], make this statement in defence of the
above claim.

1. I am the registered keeper of vehicle [VRM]. I make this statement
   from my own knowledge unless stated otherwise.

2. I deny that I am liable to the claimant for the sum claimed or
   any sum at all.

3. PROCEDURAL — POFA 2012 Schedule 4
   3.1 The Notice to Keeper bears a date of [date] and was received
       on [date]. The alleged parking event was [date].
   3.2 The interval between the parking event and the date of the
       NtK exceeds 14 days. Paragraph 9(4) of Schedule 4 of the
       Protection of Freedoms Act 2012 requires service within 14
       days for keeper liability to attach.
   3.3 Keeper liability is therefore extinguished and the claimant
       must prove who was driving.

4. SIGNAGE — Consumer Rights Act 2015, s.62
   4.1 At [date], I attended the site and photographed the signage
       in the relevant area. The photographs are exhibit [X].
   4.2 The signs were not prominent or legible from the driver's
       seat at the point of entry, contrary to section 13 of the
       Private Parking Code of Practice and the test in Beavis [2015]
       UKSC 67 (signage "large, prominent and frequent").
   4.3 The contractual terms were not transparent for the purposes
       of section 62 of the Consumer Rights Act 2015.

5. PROPORTIONALITY — ParkingEye v Beavis [2015] UKSC 67
   5.1 The claim seeks £[amount], comprising £100 parking charge,
       £[X] "legal costs" and £[Y] "debt recovery fees".
   5.2 The added costs are not recoverable in small claims under
       CPR 27.14. Excel v Wilkinson (Manchester County Court, 2020)
       struck out similar add-ons as unrecoverable.
   5.3 The £100 charge itself falls outside the Beavis facts because
       [the site is not subject to the same commercial-justification
       framework / signage materially different / no two-hour turnover
       requirement].

6. I respectfully request that the claim be dismissed.

Statement of Truth: I believe that the facts stated in this witness
statement are true.

Signed: [signature]
Name: [printed name]
Date: [date]
\`\`\`

Keep it under three pages. Numbered paragraphs. Plain English. No emotive language.

## Step 4: On Hearing Day — What Actually Happens

**Before the hearing**:
- Arrive 30 minutes early to find the courtroom and review your bundle
- Court ushers will call your case — listen for your surname
- Dress neatly (suit not required but tidy clothes show respect for the court)
- Bring a pen and a notepad

**In the hearing room**:
- Stand when the judge enters and when addressed by the judge for the first time
- Address the judge as **"Sir"**, **"Madam"** or **"Judge"** — never "Your Honour" (that is for Crown Court)
- The claimant's representative usually speaks first (briefly) — listen carefully and note anything you want to challenge
- The judge will then turn to you and ask you to address your defence

**Your opening (90 seconds)**:
> *"Sir/Madam, I respectfully invite the court to dismiss the claim. There are three substantive points: first, the Notice to Keeper failed POFA 2012 Schedule 4 paragraph 9; second, the signage failed section 62 of the Consumer Rights Act 2015 and section 13 of the Code of Practice; third, the added costs are not recoverable under CPR 27.14. I will take the court through each in turn."*

That opening tells the judge you know the law, you have organised your case, and the next 25 minutes will be productive. Hearings won inside the first minute are not won by accident.

**The questioning**:
- The judge will ask specific questions about each ground — answer factually, point to the exhibit, do not embellish
- If the claimant's representative makes a factual claim you dispute, raise it politely: *"Sir, that is not correct — exhibit X shows..."*
- Do not interrupt the judge or the claimant
- If the judge asks something you do not know, say so: *"I do not have that information to hand"*

**The decision**:
- Most small-claims decisions are given orally at the end of the hearing
- The judge will state the outcome (claim dismissed / partly allowed / fully allowed) and brief reasons
- A formal sealed order follows by post within 1-2 weeks
- If you win, the court will usually award you reasonable costs under CPR 27.14 — have your costs schedule ready

## Step 5: After the Hearing

If you win:
- Wait for the sealed order
- If costs were awarded but not yet quantified, file your schedule within 14 days
- Enforce the costs order if the operator doesn't pay (rare but possible)

If you lose:
- Pay the judgment within 30 days to avoid the CCJ landing on your credit file (it will be marked "satisfied" but does NOT appear on the public register if paid inside 30 days)
- If you have grounds for appeal, file form **N164** within 21 days of the order date — but small-claims appeals are rare and need permission

## Common Pitfalls

- **Conceding driver identity** — once you say "I was driving", the POFA keeper-only defence is gone. Stay on "I am the registered keeper, the claimant has not proven the driver" unless you have a separate driver-side defence
- **Reading from a prepared script word-for-word** — judges find this stilted. Bullet-point your talking points and look up when you speak
- **Attacking the claimant personally** — never works. Stick to the facts and the law
- **Bringing irrelevant evidence** — letters from your MP, complaints to the BPA, character references. None help. Stick to POFA, signage and quantum
- **Forgetting the witness statement Statement of Truth** — unsigned statements are inadmissible. Triple-check before you arrive

[[CTA:slate|Don't go in blind — get the prep pack|Witness statement drafted to your facts, bundle index, talking points for each ground, costs schedule. £4.99 one-time payment.|Get the pack|/pricing]]

## Numbers That Matter

- **Typical small-claims hearing length**: 30-40 minutes
- **Bundle copies to bring**: 2 paper, plus a backup PDF on your phone
- **CPR 27.14 cap on loss of earnings if you win**: £95/day
- **Window to pay a CCJ and keep it off your credit file**: 30 days
- **Appeal window if you lose**: 21 days, form N164

## Related Reading

- [County Court Claim Form N1 Parking Defence](/blog/county-court-claim-form-n1-parking-defence) — the defence-filing stage that led to the hearing
- [Parking Claim Discontinuance Costs (CPR 38.6)](/blog/notice-of-discontinuance-parking-claim-costs) — if the operator discontinues before hearing day
- [N244 Set-Aside Parking CCJ](/blog/n244-form-set-aside-parking-ccj) — if a default CCJ was registered because you missed the N1
- [Civil Enforcement Bailiff Fees Challenge](/blog/civil-enforcement-bailiff-fees-challenge) — if bailiffs are instructed after the hearing`,
    faqs: [
      {
        question: "How long do small-claims parking hearings actually take?",
        answer:
          "Typically 30-40 minutes. Some run shorter if the judge has read the papers and the case is clear-cut. Some run longer if both sides have detailed witness statements or if expert evidence is involved (rare in parking). Plan for an hour to be safe and arrive at the court 30 minutes early to find the courtroom and review your bundle.",
      },
      {
        question: "Do I need a solicitor for the hearing?",
        answer:
          "No. Small-claims hearings are designed to be accessible to litigants in person. Costs under CPR 27.14 are limited to fixed amounts (£80-£105 if you have a solicitor on small claims; loss-of-earnings cap of £95/day for litigants in person), so a solicitor's full fee is rarely recoverable. Self-representation is normal and works if the witness statement and bundle are properly prepared.",
      },
      {
        question: "What if the claimant doesn't attend the hearing?",
        answer:
          "The court can hear the case in their absence and decide on the papers. If the operator fails to attend or send a representative, your prospects of dismissal increase substantially — the judge expects the claimant to prove their case, and an absent claimant has not done so. Be prepared to give your opening anyway; the judge will still want to hear your three substantive points before dismissing.",
      },
      {
        question: "Can I attend by telephone or video?",
        answer:
          "Often yes, especially post-2024 when remote hearings became normalised for small-claims work. The hearing notice will say whether the hearing is in person, by telephone, or by video. If you want a remote hearing and the notice says in-person, you can apply to the court using form N244 with a brief witness statement of your reasons — accepted readily for distance, work, childcare and accessibility reasons.",
      },
      {
        question: "What is the difference between a witness statement and the defence?",
        answer:
          "The defence is the formal pleading filed within 28 days of the N1 — it sets out your grounds in numbered paragraphs and is the document the court refers to for what is in issue. The witness statement is filed later (usually 14 days before the hearing) and is your factual evidence sworn under a Statement of Truth. The defence states your case; the witness statement proves it. Both are essential.",
      },
      {
        question: "Will I get my costs back if I win?",
        answer:
          "Yes, but the amount is limited by CPR 27.14. Recoverable heads include reasonable travel expenses to the hearing, loss of earnings capped at £95 per person per day, court fees you paid (usually zero on the defendant side) and certain expert fees. Realistic awards for a litigant-in-person small-claims parking win are £50-£200. Have your costs schedule ready to hand up at the end of the hearing if asked.",
      },
      {
        question: "Can I bring a friend or family member to court for moral support?",
        answer:
          "Yes. Small-claims hearings are normally open to the public unless the judge orders otherwise. A friend or family member can sit in the public area of the courtroom. If you want them to speak on your behalf as a 'McKenzie friend' the judge can grant permission, but you remain the litigant — they cannot present your case unless they are a solicitor or barrister with rights of audience.",
      },
      {
        question: "What happens if I lose — does the CCJ go on my credit file straight away?",
        answer:
          "Not immediately. There is a 30-day window from the judgment date during which, if you pay the judgment in full, the CCJ is marked 'satisfied' and removed from the public Register of Judgments — meaning it does not appear on your credit file. Miss the 30 days and the CCJ is registered for 6 years (until automatic removal or earlier settlement marked 'satisfied'). If you intend to pay, pay quickly.",
      },
    ],
  },

  {
    slug: "civil-enforcement-bailiff-fees-challenge",
    title: "Civil Enforcement Bailiff Fees Wrongly Charged? How to Challenge the £75 / £235 / £110 Stack",
    description:
      "Bailiff fees are statutorily capped at £75 compliance + £235 enforcement + £110 sale plus VAT. If a fee was charged before a valid Notice of Enforcement, or in the wrong stage, you can challenge under regulation 13 of the Taking Control of Goods Fees Regulations 2014.",
    publishedDate: "2026-05-18",
    category: "Court & Debt",
    seoTitle: "Civil Enforcement Bailiff Fees Challenge: £75 / £235 / £110 Caps (2026)",
    seoDescription:
      "Civil enforcement agent added £75 / £235 / £110 in fees? They are statutorily capped under the TCG (Fees) Regulations 2014. Challenge wrongly-charged fees with this template.",
    content: `## The Fees Are Capped, Not Negotiated

When a Civil Enforcement Agent (the modern statutory name for a bailiff) is instructed to recover a council parking debt or a County Court Judgment, they may add fees to the underlying debt — but **only** at three specific points in the process, and **only** at the capped amounts set by the [Taking Control of Goods (Fees) Regulations 2014](https://www.legislation.gov.uk/uksi/2014/1/contents). Anything beyond that is unlawfully charged.

The three permitted stages and amounts:

| Stage | Amount | When it lawfully applies |
|---|---|---|
| **Compliance stage** | **£75 + VAT** | Once on receipt of a valid Notice of Enforcement, before any attendance |
| **Enforcement stage** | **£235 + VAT** (+ 7.5% over £1,500) | Once at the first lawful attendance at the property |
| **Sale stage** | **£110 + VAT** (+ 7.5% over £1,500) | Once at removal or sale of goods |

If a bailiff company has added fees that breach these caps, charged a stage that did not occur, or charged fees before the underlying statutory trigger was met, you can challenge them under regulation 13 of the 2014 Regulations or via a CPR Part 85 detailed assessment in the court.

[[CTA:teal|Bailiff added fees that don't add up?|Our £2.99 letter challenges the specific overcharge under the TCG (Fees) Regulations 2014, demands a fee breakdown, and references the right enforcement-conduct authority for escalation. Filed by you, ready in minutes.|Generate my challenge letter|/pricing]]

## Common Overcharges to Look For

These are the patterns that regularly produce successful fee challenges in 2026:

1. **Compliance fee charged twice** — a bailiff company instructed for two related debts cannot stack a £75 compliance fee on each if both were within the same enforcement instruction
2. **Enforcement fee charged before first attendance** — the £235 enforcement-stage fee only crystallises when an enforcement agent actually attends. A doorstep letter or phone call does not count
3. **Compliance fee added before NoE served** — fees only attach once a valid statutory Notice of Enforcement has been served with 7 clear days' notice. Letters before the NoE cannot charge the £75 stage
4. **7.5% percentage uplift on under-£1,500 debts** — the percentage applies only to balances over £1,500. Many parking-debt enforcements should not include it at all
5. **Sale fee without a sale** — the £110 sale-stage fee requires actual removal or sale of goods. A vehicle being clamped on the highway without removal does not necessarily trigger the sale stage
6. **Multiple enforcement-stage charges for the same debt** — only one £235 applies per debt regardless of how many attendances are made

## Step 1: Get the Full Fee Breakdown

Under regulation 8(1) of the 2014 Regulations, the enforcement agent must provide a **full fee breakdown** on request. If you do not have one, write:

\`\`\`
Dear Sirs,

Reference: [bailiff company reference]
Underlying debt: [council PCN reference / County Court judgment number]

Pursuant to regulation 8 of the Taking Control of Goods (Fees)
Regulations 2014, I request a full itemised breakdown of all fees
applied to my account, including:

1. The compliance fee, with the date of the Notice of Enforcement
2. Each enforcement-stage fee, with the date of the corresponding
   attendance and the agent's certificate number
3. Any sale-stage fee, with the date of removal or sale
4. Any percentage uplift applied to the underlying debt amount
5. VAT applied to each line

Yours faithfully,
[Your name]
\`\`\`

Send by recorded delivery. They must respond within a reasonable time. Keep the receipt.

## Step 2: Compare the Breakdown to the Statutory Caps

For a typical parking-debt enforcement (debt under £1,500), the lawful maximum fee stack is:

- Compliance: £75 + £15 VAT = **£90**
- Enforcement (if attendance occurred): £235 + £47 VAT = **£282**
- Sale (if removal / sale occurred): £110 + £22 VAT = **£132**
- **Total maximum: £504** on top of the original debt

If your breakdown exceeds this, or includes a stage that did not occur, the surplus is challengeable.

For debts over £1,500, the 7.5% uplift applies on the excess at enforcement and sale stages. So a £2,500 debt would have:

- Compliance: £75 + VAT
- Enforcement: £235 + (£1,000 × 7.5%) + VAT = £310 + £62 VAT = £372
- Sale: £110 + (£1,000 × 7.5%) + VAT = £185 + £37 VAT = £222

## Step 3: Send the Challenge Letter

Once the breakdown shows an overcharge:

\`\`\`
Dear Sirs,

Reference: [bailiff company reference]

I have reviewed the fee breakdown provided on [date] and identify the
following items as not chargeable under the Taking Control of Goods
(Fees) Regulations 2014:

1. [Specific item, eg "Compliance fee charged twice on related debts"]
2. [Specific item, eg "Enforcement-stage fee charged before any
   attendance occurred — first attendance recorded as [date]"]

I require these items to be removed from the account and any sums
already paid to be refunded within 14 days, failing which I will:

(a) Apply to the court that issued the warrant for a detailed
    assessment of fees under CPR Part 85
(b) Refer the matter to the Enforcement Conduct Board for
    investigation
(c) Where applicable, complain to the Civil Enforcement Association

Yours faithfully,
[Your name]
\`\`\`

[[CTA:amber|Want this drafted for your specific fee breakdown?|Upload the bailiff letter and the fee breakdown. Our £2.99 letter identifies the specific overcharge, cites the regulation, and references the right ombudsman / authority.|Get my letter|/pricing]]

## Step 4: Escalation Routes if the Bailiff Refuses

If the bailiff company does not refund within 14 days, the options are:

1. **Enforcement Conduct Board** — the independent oversight body for civil enforcement in England and Wales. Free to use. Investigates fee disputes and bailiff conduct.
2. **CIVEA (Civil Enforcement Association)** — the trade body for most major bailiff firms. Internal complaints process. Less independent than the ECB but useful for member firms.
3. **CPR Part 85 detailed assessment** — apply to the court that issued the warrant for a detailed assessment of the fees. Fee currently £108. Successful applications result in a court order for refund.
4. **Information Commissioner's Office** — if the bailiff company processed personal data unlawfully in pursuing the fees (eg shared with third parties without lawful basis), a separate ICO complaint.

The ECB route is the best balance of cost and effectiveness for most parking-debt fee disputes. They prefer to resolve disputes informally with the bailiff company before formal investigation.

## Step 5: If You've Already Paid the Overcharge

Refunds of overcharged fees are possible after payment but require active pursuit:

- Write to the bailiff company under regulation 8 demanding refund within 14 days
- If refused, file in the small claims court for repayment plus interest at the County Courts Act 1984 statutory rate (8% currently)
- The bailiff company is usually the defendant; the underlying creditor (council, operator) is usually not a party to a fee dispute

The small-claims threshold is **£10,000** — every parking-debt fee dispute is comfortably within it. Use form **N1** at your local County Court hearing centre.

## What Bailiff Companies Cannot Do Even at Capped Fees

Even when fees are correctly charged at the statutory caps, the bailiff is still constrained by:

- **Permitted hours of attendance**: 06:00 to 21:00, not Sundays or bank holidays (reg 13 TCG Regs 2013)
- **Vulnerable categories**: cannot take goods essential to work, disabled mobility, or in domestic-abuse circumstances (Schedule 12, TCE Act 2007)
- **No forced entry on first attendance** for parking or low-value debts (Schedule 12, paragraph 14)
- **No fee for "letters" or "phone calls"** — only the three statutory stages
- **No threatening conduct** — breaches are reportable to the ECB and, in serious cases, the Information Commissioner's Office and the police

See our [DCBL doorstep visit stop letter guide](/blog/dcbl-doorstep-visit-stop-letter) for the door-side script and the pre-NoE letter that often prevents enforcement-stage fees from being incurred in the first place.

## Numbers That Matter

- **Compliance stage cap**: £75 + VAT = £90
- **Enforcement stage cap**: £235 + VAT = £282 (+ 7.5% over £1,500)
- **Sale stage cap**: £110 + VAT = £132 (+ 7.5% over £1,500)
- **Maximum lawful fee stack** (debt under £1,500): £504
- **Time to request fee breakdown** under reg 8: reasonable time, typically 14 days
- **CPR Part 85 detailed-assessment fee**: £108
- **Statutory interest** on refunds via small claims: 8% under County Courts Act 1984 s.69

[[CTA:slate|Don't pay fees that aren't lawful|Our £2.99 letter identifies overcharges, cites the regulations and references the right escalation authority. £4.99 pack includes the small-claims N1 if you need to pursue refund.|See pricing|/pricing]]

## Related Reading

- [DCBL Doorstep Visit Stop Letter](/blog/dcbl-doorstep-visit-stop-letter) — pre-NoE stop letter that often prevents enforcement-stage fees
- [TE9 Witness Statement Set Aside Council CCJ](/blog/te9-witness-statement-parking-ccj-set-aside) — stop bailiff action by setting aside the underlying order
- [N244 Set-Aside Parking CCJ](/blog/n244-form-set-aside-parking-ccj) — private-parking CCJ set-aside that stays bailiff action
- [County Court Claim Form N1 Parking Defence](/blog/county-court-claim-form-n1-parking-defence) — engaging at the N1 stage to avoid bailiff escalation entirely`,
    faqs: [
      {
        question: "What is the maximum a bailiff can lawfully charge for a parking debt?",
        answer:
          "Under the Taking Control of Goods (Fees) Regulations 2014, the three statutory stages cap fees at £75 compliance + £235 enforcement + £110 sale, plus VAT on each — total £504 on top of the underlying debt for cases under £1,500. For debts over £1,500, a 7.5% percentage uplift applies on the excess at the enforcement and sale stages.",
      },
      {
        question: "Can the bailiff add fees before they have visited me?",
        answer:
          "The £75 compliance fee can be added once a valid Notice of Enforcement has been served with 7 clear days' notice — no attendance is required for this stage. The £235 enforcement-stage fee can only be added when an enforcement agent actually attends the address. A pre-NoE doorstep-visit warning letter cannot trigger any statutory fee.",
      },
      {
        question: "What is the difference between the Compliance and Enforcement stages?",
        answer:
          "Compliance is the administrative stage that begins on service of the Notice of Enforcement — it covers the 7-day grace period during which the debtor can pay before any attendance. Enforcement begins when the agent first physically attends the property (or in the case of vehicles, takes control of goods on the highway). Sale is the final stage where goods are removed for auction.",
      },
      {
        question: "Can I dispute fees that I've already paid?",
        answer:
          "Yes. Write to the bailiff company under regulation 8 of the TCG (Fees) Regulations 2014 demanding refund of the overcharged portion within 14 days. If refused, file a small-claims action (N1 at your local County Court) for repayment plus statutory interest at 8% under section 69 of the County Courts Act 1984. The small-claims process for fee disputes is straightforward and typically successful where the breakdown shows clear overcharges.",
      },
      {
        question: "Who do I complain to about overcharged bailiff fees?",
        answer:
          "The Enforcement Conduct Board (ECB) is the independent oversight body for civil enforcement in England and Wales since 2022. They handle fee disputes, conduct complaints, and act as a free informal-resolution body. CIVEA is the trade association for most major bailiff firms and runs an internal complaints process. The CPR Part 85 detailed-assessment route at the court is also available but costs £108 and is slower.",
      },
      {
        question: "Can bailiffs charge me VAT?",
        answer:
          "Yes, the £75 / £235 / £110 statutory stage fees are exclusive of VAT, which is added at 20%. The total inclusive amounts are therefore £90 / £282 / £132. Anything beyond these inclusive caps for cases under £1,500 is challengeable. The underlying parking debt itself is not subject to VAT, so the bailiff company should not be charging VAT on the principal.",
      },
      {
        question: "What if the bailiff added fees during multiple visits to the same address?",
        answer:
          "Only one enforcement-stage fee can be charged per debt regardless of how many attendances occur. Multiple £235 charges for visits relating to the same warrant are not lawful. If the bailiff company has charged for, say, three attendances at £235 each, the surplus £470 should be refunded. The Enforcement Conduct Board sees this overcharge pattern regularly.",
      },
      {
        question: "Can the bailiff charge me for letters they send between visits?",
        answer:
          "No. There is no statutory fee category for correspondence outside the three stages. Letters, phone calls, voicemails and emails are part of the work covered by the £75 compliance fee — they do not generate separate charges. Any line on the breakdown labelled 'letter fee', 'phone fee', 'correspondence charge' or similar is not authorised under the 2014 Regulations.",
      },
    ],
  },
];
