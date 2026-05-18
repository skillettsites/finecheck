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
      "A County Court claim for a parking charge has a 14-day acknowledgement deadline and a 28-day defence deadline. Miss either and you get a default CCJ. The exact filing steps, the defence template that gets 30% of these claims discontinued, and the £9.99 pack that drafts your defence + witness statement.",
    publishedDate: "2026-05-18",
    category: "Court & Debt",
    seoTitle: "County Court Claim Form N1 Parking Defence (14-Day Rule, 2026)",
    seoDescription:
      "Got a County Court N1 claim form from ParkingEye, UKPC, CEL or Excel? You have 14 days to acknowledge and 28 days to file the defence. The exact procedure, the wording that wins, and the £9.99 defence pack.",
    content: `## You Have 14 Days. Then Default Judgment.

A County Court claim form (the **N1**, sent from the County Court Business Centre in Salford, often with reference numbers starting **CC** or **MCOL**) is the most serious step in a private parking enforcement chain. It is not the same as a Letter Before Claim from BW Legal or DCB Legal. It is not a debt-collector demand. It is a real court case, with two deadlines that the court does not extend:

- **14 days** from service to file an **Acknowledgement of Service** (form N9).
- **28 days** from service to file a **Defence** (form N9B) if you acknowledged.

Miss either deadline and the claimant can apply for a **default judgment**. That becomes a registered **County Court Judgment (CCJ)** within a few weeks, lands on your credit file for six years, and hands the operator the right to send bailiffs (TE-stage) without proving the case further.

Most people miss it because the form looks intimidating, the wording is unfamiliar, or they assume "I'll just ignore it like the rest". Roughly **87% of all private-parking CCJs are default judgments** because the driver never responded ([Justice statistics, MOJ County Court tables](https://www.gov.uk/government/statistics/civil-justice-statistics-quarterly-january-to-march-2024)). Of the people who actually file a defence, the dynamics flip: a sizeable share of these claims get **discontinued** by the operator (Notice of Discontinuance, form N279) before a hearing, because the operator's bulk-claim business model only works against non-responders.

[[CTA:teal|Got an N1 claim form? Don't miss the 14-day deadline|Our £9.99 court pack drafts your N9 acknowledgement, N9B defence and supporting witness statement using the strongest POFA, CRA and Beavis grounds for your facts. Filed by you, ready in minutes.|Get my defence pack|/pricing]]

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

[[CTA:amber|Not sure which grounds apply to your N1?|Upload your Notice to Keeper photo and reference number. The £9.99 pack picks the 2-3 strongest grounds and drafts the N9B defence and witness statement for your specific operator (ParkingEye, UKPC, CEL, Excel and the rest).|Generate my defence|/pricing]]

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

[[CTA:slate|If they discontinue, claim your costs|CPR 38.6 lets you claim wasted costs after a discontinuance. Our £9.99 pack now includes a Part 38 costs schedule template ready for upload.|Get the pack|/pricing]]

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

[[CTA:teal|14 days from the N1 date. Don't burn the deadline|The £9.99 court pack drafts your N9 acknowledgement, N9B defence and supporting witness statement. Match every paragraph to your specific operator's known weaknesses. Generated in minutes.|Build my defence pack|/appeal]]

## How the £9.99 Pack Differs from the Standard £5.99 Letter

The £5.99 Standard letter is designed for the **first appeal** stage (informal challenge to the operator, then escalation to POPLA / IAS). It is not a court-stage document.

The £9.99 Premium pack is the right product if a court claim has actually arrived:

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
          "Yes, in principle. Under CPR 38.6, when a claimant discontinues, the defendant is presumed entitled to costs to the date of discontinuance. In practice, small-claims-track costs are limited to the fixed-costs regime in CPR 27.14, which typically means court fees you paid (often none on the defendant side), loss-of-earnings up to a cap, and travel. The amounts are modest but the principle matters: you do not have to accept a 'walk away with no costs' offer. Our £9.99 pack now includes a Part 38 costs-schedule template.",
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
      "A DCBL doorstep visit notice means an enforcement agent is days away. The exact letter that demands proof of debt and CPR 31 disclosure, the script for refusing entry at the door, and the £5.99 pack that targets your specific case (parking, council, traffic).",
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

[[CTA:teal|Stop the doorstep before it happens|Our £5.99 letter demands proof of debt under CPR 31, challenges the underlying parking liability under POFA 2012, and cites the TCG Regs reasonable-time-of-day rules. Operator-specific (ParkingEye, council, TfL) wording included.|Generate my DCBL letter|/pricing]]

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

[[CTA:amber|Want this letter personalised to your case?|Upload the DCBL letter and original PCN. The £5.99 letter names your specific operator or council, cites the right statute (POFA / TMA / civil enforcement regs), and adds a CPR 13.3 set-aside reservation if there is a CCJ in play.|Get my personalised letter|/pricing]]

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

[[CTA:slate|If a CCJ is behind your DCBL letter|The £9.99 court pack drafts your N244 set-aside application, witness statement and draft defence in one upload. Filed by you. Stays bailiff action pending the court's decision.|See the £9.99 pack|/pricing]]

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

[[CTA:teal|Day-of-letter action plan in your inbox|£5.99 personalised pre-NOE letter + the door-script PDF + the CIVEA complaint template. Delivered to your inbox in minutes.|Build my DCBL pack|/appeal]]`,
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
          "The challenge route is different. Council PCNs that reach the bailiff stage went via the Traffic Enforcement Centre at Northampton and an Order for Recovery. If you did not receive earlier notices (for example because they were sent to an old address), file a TE9 witness statement or TE7 out-of-time statutory declaration. Bailiff action is stayed pending the TEC's decision. Our £9.99 pack drafts the TE7 / TE9 with a narrative on why earlier notices were not received — the success rate is high when the council used an old DVLA address.",
      },
      {
        question: "Does this stop other DCBL actions in the future?",
        answer:
          "No. Each enforcement instruction is treated separately. A successful challenge to one DCBL doorstep visit does not prevent the same creditor instructing them again on a later debt. The defence is debt-specific. The underlying issue is whether the debt itself is lawfully owed and enforceable, which is why most of the value is in resolving the PCN or CCJ stage, not the bailiff stage.",
      },
    ],
  },
];
