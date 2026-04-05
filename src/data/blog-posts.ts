export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  category: string;
  content: string;
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "can-you-ignore-private-parking-fine-2026",
    title: "Can You Ignore a Private Parking Fine in 2026? The Honest Answer",
    description:
      "The truth about ignoring private parking fines in 2026, including the new Code of Practice, debt collectors, court action, and your real options.",
    publishedDate: "2026-03-15",
    category: "Private Parking",
    seoTitle: "Can You Ignore a Private Parking Fine in 2026? | FineCheck",
    seoDescription:
      "Should you ignore a private parking fine? We cover the new 2026 Code of Practice, when operators pursue court action, CCJs, and what actually happens if you don't pay.",
    content: `## The Short Answer

No, you probably should not ignore a private parking fine in 2026. While the internet is full of advice telling you to bin the letter and move on, the reality has changed significantly in recent years. Private parking operators have become much more aggressive about pursuing unpaid charges, and the legal landscape has shifted firmly in their favour.

That said, there is a big difference between "should not ignore" and "must pay immediately." You have rights, and many private parking fines can be successfully challenged. The key is to engage with the process rather than pretend it does not exist.

## Why the Old "Just Ignore It" Advice No Longer Works

For years, the standard advice on forums and social media was simple: throw the letter in the bin. The logic was that private parking operators rarely took people to court, and even when they did, the amounts involved were too small to justify the legal costs.

That changed in 2015 with the Supreme Court ruling in **ParkingEye v Beavis**. The court ruled that ParkingEye's £85 charge was enforceable and not an unfair penalty. This gave private operators the legal precedent they needed to pursue unpaid charges through the courts with confidence.

Since then, the situation has continued to shift:

- **ParkingEye** regularly pursues court action through DCB Legal and Gladstones Solicitors. They file thousands of County Court claims each year.
- **UKPC, Excel Parking, and Horizon** have also increased their use of debt recovery and court action.
- The **Protection of Freedoms Act 2012 (POFA)** allows operators to pursue the registered keeper if they cannot identify the driver, provided they follow the correct process.
- The **new Private Parking Code of Practice** has standardised charges and given operators clearer authority.

## The New Code of Practice

The government-backed Private Parking Code of Practice introduced significant changes:

- **Standard charge**: £50 (reduced to £25 if paid within 14 days)
- **Higher charge**: £100 for more serious contraventions (reduced to £50 within 14 days)
- **10-minute grace period**: All motorists get 10 minutes after their parking time expires before a charge can be issued
- **Consideration period**: A 5-minute window when you first arrive to decide whether to park
- **Single appeals service**: Replacing the old POPLA and IAS dual system

The Code makes it harder to argue that charges are excessive or punitive, because the amounts are now regulated. This removes one of the strongest defences drivers previously had.

## What Actually Happens If You Ignore It

Here is the typical timeline:

**Week 1-2**: You receive a Notice to Driver (if placed on windscreen) or a Notice to Keeper (posted to the registered keeper). The discounted payment period starts.

**Week 3-4**: The discount period expires. The charge increases to the full amount.

**Week 6-8**: You receive a reminder letter, often with more urgent language about debt recovery.

**Month 2-3**: The operator may send a "Letter Before Claim" or "Letter Before Action." This is a formal pre-court letter required under the Civil Procedure Rules. If you receive one of these, they are serious about pursuing you.

**Month 3-6**: If you still have not paid or responded, the operator may instruct a debt collection agency or file a County Court claim.

**Month 6-12**: If a County Court claim is filed and you do not respond within 14 days, the operator can apply for a **County Court Judgment (CCJ)** by default. A CCJ stays on your credit file for six years and can affect your ability to get mortgages, credit cards, and even mobile phone contracts.

## When They Do and Don't Pursue Court Action

Not every operator pursues every unpaid charge. The economics of small claims court mean that operators tend to focus on:

- **Higher value charges** (the full £100 rate)
- **Multiple unpaid charges** against the same driver
- **Clear-cut cases** where signage and process were solid
- **Cases where the driver was identified** (not just the keeper)

Operators are less likely to pursue cases where:

- There are obvious procedural errors (wrong dates, wrong vehicle, incorrect NtK)
- The POFA requirements were not met (NtK sent too late, missing required information)
- The signage at the car park was inadequate or misleading

## ParkingEye: The Exception

ParkingEye deserves special mention because they are by far the most aggressive operator when it comes to court action. Their legal team, primarily DCB Legal, files thousands of claims annually. If your fine is from ParkingEye and you have no valid defence, ignoring it is particularly risky.

## What You Should Do Instead

1. **Check the notice carefully.** Is it a council fine (Penalty Charge Notice) or a private charge (Parking Charge Notice)? They look similar but have different legal frameworks.

2. **Check the POFA compliance.** If you are the registered keeper but were not the driver, the operator must have sent a compliant Notice to Keeper within 14 days of the contravention. If they did not, they cannot pursue the keeper.

3. **Assess your grounds.** Were you within the terms? Was the signage clear? Did you have a valid reason for overstaying?

4. **Appeal if you have grounds.** You lose nothing by appealing. The operator cannot take court action while an appeal is in progress, and many appeals succeed.

5. **Pay the discounted amount if you have no defence.** If you genuinely broke the rules and the operator followed proper process, paying £25 or £50 within the discount window is usually the pragmatic choice.

## The Bottom Line

Ignoring a private parking fine in 2026 is a gamble, and the odds are worse than they used to be. The combination of the Beavis ruling, the new Code of Practice, and increasingly aggressive operators means that "ignore and hope" is no longer a reliable strategy. Appeal if you have grounds, pay the discount if you do not, and whatever you do, respond to a Letter Before Claim.`,
    faqs: [
      {
        question: "Will ignoring a private parking fine affect my credit score?",
        answer:
          "Not directly from the fine itself. However, if the operator takes you to court and obtains a County Court Judgment (CCJ) that you do not pay within 30 days, it will appear on your credit file for six years.",
      },
      {
        question: "Can a private parking company clamp or tow my car?",
        answer:
          "No. Since the Protection of Freedoms Act 2012, private companies cannot clamp or tow vehicles on private land in England and Wales. They can only issue parking charges.",
      },
      {
        question: "Is a private parking fine legally enforceable?",
        answer:
          "Yes, following the Supreme Court ruling in ParkingEye v Beavis (2015). Private parking charges are treated as contractual debts and can be enforced through the County Court.",
      },
      {
        question: "How long do private parking companies have to send a fine?",
        answer:
          "Under POFA, a Notice to Keeper must be sent within 14 days of the contravention (or 14 days after a Notice to Driver was issued). If the operator misses this deadline, they cannot pursue the registered keeper.",
      },
    ],
  },
  {
    slug: "what-happens-if-you-dont-pay-parking-fine",
    title: "What Happens If You Don't Pay a Parking Fine? Complete Timeline",
    description:
      "A step-by-step timeline of what happens when you don't pay a parking fine, from the initial notice through to debt collectors and court action.",
    publishedDate: "2026-03-10",
    category: "Guides",
    seoTitle: "What Happens If You Don't Pay a Parking Fine? Full Timeline | FineCheck",
    seoDescription:
      "Step-by-step guide to what happens when you don't pay a UK parking fine. Covers council and private fines, deadlines, debt collectors, court action, and CCJs.",
    content: `## It Depends on Who Issued the Fine

The consequences of not paying a parking fine vary dramatically depending on whether it was issued by a **council** (Penalty Charge Notice, or PCN) or a **private operator** (Parking Charge Notice, also confusingly abbreviated to PCN). The process, timescales, and enforcement powers are entirely different.

## Council Parking Fines: The Timeline

Council fines are issued under the Traffic Management Act 2004 (or the Road Traffic Act 1991 in some areas). Councils have statutory powers that private companies do not.

### Day 1: The PCN Is Issued

You find a Penalty Charge Notice on your windscreen, or you receive one by post (for CCTV-enforced contraventions like bus lanes or yellow box junctions). The fine amount depends on the contravention band:

- **Higher rate**: £70 in London, £70 outside London (for more serious offences)
- **Lower rate**: £50 in London, £50 outside London (for less serious offences)

### Days 1-14: Discounted Payment Period

You have 14 days to pay at a 50% discount. A £70 fine becomes £35. Most people who intend to pay do so during this window.

### Day 14: Informal Challenge Window (Postal PCNs)

For fines issued by post (CCTV enforcement), you have 14 days to make an informal challenge. If you do, the 14-day discount period is paused until the council responds. If the challenge fails, you get another 14 days to pay at the discounted rate.

### Day 28: Notice to Owner (NtO)

If you have not paid or successfully challenged, the council sends a Notice to Owner to the registered keeper. This is a formal document that:

- Confirms the amount owed (now the full amount, no discount)
- Sets out your right to make formal representations
- Gives you 28 days to pay or appeal

### Day 28-56: Formal Representations

You have 28 days from the NtO to submit formal representations (your official appeal to the council). The grounds are defined by law and include things like:

- The contravention did not occur
- You were not the owner at the time
- The PCN was not served correctly
- The penalty exceeded the relevant amount
- The order that created the restriction was invalid

### Council Decision

The council must respond. If they reject your representations, they issue a **Notice of Rejection** which gives you the right to appeal to an independent tribunal.

### Tribunal Appeal

- **London**: London Tribunals (formerly the Parking and Traffic Appeals Service)
- **England and Wales (outside London)**: Traffic Penalty Tribunal (TPT)

The tribunal appeal is free and can usually be done online. The adjudicator's decision is binding on the council but not on you. If you lose, you still owe the original amount.

### Day 56+: Charge Certificate

If you do not pay after exhausting your appeals (or not appealing at all), the council issues a **Charge Certificate**. This increases the amount by 50%. A £70 fine becomes £105.

### Day 70+: County Court Registration

The council registers the debt with the Traffic Enforcement Centre (TEC), part of the County Court. You receive an order to pay within 14 days.

### Day 84+: Bailiffs

If you still have not paid, the council can instruct enforcement agents (bailiffs) to collect the debt. Bailiffs can add their own fees:

- Compliance stage: £75
- Enforcement stage: £235 (plus 7.5% of debts over £1,500)
- Sale stage: £110 (plus 7.5% of debts over £1,500)

A £70 parking fine can ultimately cost you over £400 if it reaches the bailiff stage.

## Private Parking Fines: The Timeline

Private parking charges follow a different path because private companies have no statutory enforcement powers. They can only pursue you through the civil courts.

### Day 1: Parking Charge Notice or Windscreen Notice

You receive a charge, typically £60-£100 (or £50-£100 under the new Code of Practice). The operator must clearly display their terms in the car park.

### Days 1-14: Discounted Payment Period

Most operators offer a 14-day discount, reducing the charge to £25 or £50 under the new Code of Practice.

### Day 14-28: POFA Notice to Keeper

If the driver has not been identified, the operator must send a Notice to Keeper (NtK) to the registered keeper within a specific timeframe. Under POFA, this is their only route to pursuing the keeper. If the NtK is late, non-compliant, or missing required information, the keeper liability falls away.

### Day 28-56: Reminder Letters

You receive increasingly urgent letters, often with threatening language about "debt recovery proceedings" and "County Court action." These are designed to prompt payment.

### Month 2-4: Appeal to the Operator

You can appeal directly to the parking company. If they reject your appeal, you have the right to escalate to an independent appeals service:

- **POPLA** (Parking on Private Land Appeals): for BPA members
- **IAS** (Independent Appeals Service): for IPC members

The new Code of Practice will eventually consolidate these into a single service.

### Month 3-6: Debt Collection

The operator may instruct a debt collection agency. These agencies have no legal powers beyond writing letters and making phone calls. They cannot send bailiffs, enter your property, or take your belongings. Debt collectors for private parking charges are often aggressive in tone but limited in what they can actually do.

### Month 6-12: Letter Before Claim

If the operator is serious about court action, they must send a Letter Before Claim (LBC) giving you 30 days to respond. This is a formal step required by the Civil Procedure Rules before filing a court claim.

### Month 12+: County Court Claim

The operator files a claim in the County Court (small claims track). You receive a court form (N1 claim form equivalent, usually via the online Money Claims system). You have 14 days to respond.

If you **do not respond**, the operator gets a default CCJ. This appears on your credit file for six years.

If you **do respond** and defend the claim, the case proceeds to a small claims hearing (usually by telephone or in person). The judge will decide based on the evidence.

## What a CCJ Means for You

A County Court Judgment is serious:

- Appears on your credit file for **six years**
- Can affect mortgage applications, credit cards, loans, even renting
- Even if you pay it within 30 days, it is marked as "satisfied" rather than removed
- If you pay after 30 days, it stays as an unsatisfied CCJ for the full six years

## The Smart Approach

1. **Never ignore a council fine.** Councils have statutory enforcement powers and the timeline from PCN to bailiffs is well-established and efficient.

2. **Assess private fines carefully.** Check the POFA compliance, signage, and your specific circumstances before deciding whether to appeal or pay.

3. **Always respond to a Letter Before Claim.** Whether from a council or private operator, failing to respond to pre-court correspondence is the single biggest mistake you can make.

4. **Appeal early.** The earlier you engage, the more options you have. Many successful appeals are made at the informal stage before the process escalates.`,
    faqs: [
      {
        question: "Can I go to prison for not paying a parking fine?",
        answer:
          "No. Parking fines are civil debts, not criminal offences. You cannot be imprisoned for an unpaid parking fine. The worst outcome is bailiff action (for council fines) or a CCJ (for private fines).",
      },
      {
        question: "How much can bailiffs add to a parking fine?",
        answer:
          "Bailiffs can add a compliance fee of £75, an enforcement fee of £235, and if they need to sell goods, a sale fee of £110. A £70 parking fine can end up costing over £400.",
      },
      {
        question: "Can a private parking company send bailiffs?",
        answer:
          "No. Only councils can use bailiffs (enforcement agents) for parking fines. Private companies must pursue debts through the County Court, which involves a court hearing. Even if they get a CCJ, they need a separate court order to instruct enforcement agents.",
      },
      {
        question: "Will an unpaid parking fine affect my car insurance?",
        answer:
          "Not directly. Parking fines are not criminal convictions and do not need to be declared on insurance applications. However, if the fine leads to a CCJ, this could indirectly affect your credit profile.",
      },
    ],
  },
  {
    slug: "parking-fine-appeal-success-rates-2026",
    title: "Parking Fine Appeal Success Rates in 2026: The Real Numbers",
    description:
      "Actual appeal success rate data from TPT, London Tribunals, and POPLA. Find out your real chances of winning a parking fine appeal.",
    publishedDate: "2026-03-08",
    category: "Data & Research",
    seoTitle: "Parking Fine Appeal Success Rates 2026: Real Data | FineCheck",
    seoDescription:
      "Real parking fine appeal success rates for 2026. TPT: 64%, London Tribunals: 49%, POPLA: 42%. See which defences work best and why most people never appeal.",
    content: `## The Numbers Most People Never See

Most drivers who receive a parking fine never appeal. Across the UK, fewer than 1 in 20 recipients challenge their ticket, despite appeal success rates that would surprise most people. Here are the real numbers from the most recent published data.

## Independent Tribunal Success Rates

These are the success rates at the final stage of appeal, where an independent adjudicator reviews the case:

### Traffic Penalty Tribunal (TPT)

The TPT covers council parking fines in England (outside London) and Wales.

- **Overall success rate: 64%**
- Total appeals received: approximately 48,000
- Appeals allowed (driver wins): approximately 31,000
- Appeals refused: approximately 17,000

This is a remarkable number. Nearly two-thirds of drivers who take their case to the TPT win. The TPT adjudicators are legally qualified and their decisions are binding on the council.

### London Tribunals

London Tribunals (formerly PATAS) handles appeals against London borough parking fines.

- **Overall success rate: 49%**
- Total appeals received: approximately 52,000
- Appeals allowed: approximately 25,500
- Appeals refused: approximately 26,500

London has a lower success rate than the TPT, likely because London boroughs are more experienced at enforcement and their cases tend to be better documented. Still, nearly half of all appeals succeed.

### POPLA (Parking on Private Land Appeals)

POPLA handles appeals against private parking charges from BPA member companies.

- **Overall success rate: 42%**
- Total appeals received: approximately 65,000
- Appeals allowed: approximately 27,300
- Appeals refused: approximately 37,700

While lower than the council tribunal rates, a 42% success rate is still significant. Nearly half of all private parking charge appeals are upheld.

### IAS (Independent Appeals Service)

The IAS covers private parking charges from IPC member companies.

- **Overall success rate: approximately 40%**
- Published data is less detailed than POPLA, but success rates are broadly similar.

## Success Rates by Defence Type

Not all defences are created equal. Here is how different grounds of appeal perform:

### Strongest Defences (60%+ success rate)

- **Inadequate signage**: Signs were too small, obscured, contradictory, or missing key terms. This is one of the strongest defences because the contract between the driver and the operator is formed through the signage. If the signs were unclear, there is no valid contract.

- **Procedural errors**: The operator or council failed to follow the correct process. For private fines, this often means a non-compliant Notice to Keeper under POFA. For council fines, it might mean incorrect service of the PCN or NtO.

- **Contravention did not occur**: The driver can prove they were not in contravention. Examples include having a valid permit that was not displayed correctly, or being within a loading/unloading exemption.

### Moderate Defences (40-60% success rate)

- **Mitigating circumstances**: The driver had a reasonable excuse, such as a medical emergency, vehicle breakdown, or being directed to park by a warden or attendant.

- **Overstay due to circumstances beyond control**: Being delayed in a shop, medical appointment running late, or traffic preventing return to the vehicle. Success depends heavily on the specific facts.

- **Grace period violations**: The driver overstayed by a very short period. The new Code of Practice mandates a 10-minute grace period, but cases from before its introduction may still use this defence.

### Weaker Defences (below 40% success rate)

- **"I didn't see the signs"**: Unless the signage was genuinely inadequate, simply not noticing restrictions is not a defence.

- **"The fine is too high"**: Since ParkingEye v Beavis, arguing that a charge is excessive is much harder. The new Code of Practice caps at £50/£100, making this defence largely moot.

- **"I was only parked for a few minutes"**: Time spent is generally not relevant if you were in contravention.

## Why Most People Don't Appeal

Given these success rates, why do so few people appeal? Research suggests several reasons:

1. **They don't know they can.** Many drivers assume a parking fine is final and do not realise there is an independent tribunal process.

2. **The process seems complicated.** In reality, council tribunal appeals can be done entirely online and typically take 10-15 minutes to submit.

3. **Fear of increased penalties.** Some drivers worry that appealing will make things worse. This is not true. The fine cannot increase because you appealed (for council fines, the discount period is paused during the informal challenge stage).

4. **The discount incentive.** The 50% discount for early payment creates a strong incentive to just pay and move on, even when you might have valid grounds.

5. **Small amounts.** A £35 discounted fine may not seem worth the effort of an appeal, even if you would probably win.

## What This Means for You

The data is clear: if you have reasonable grounds to appeal, the odds are genuinely in your favour. Even at the lowest tribunal (POPLA, 42%), you have close to a coin flip chance of winning.

At the Traffic Penalty Tribunal, you have a nearly two-in-three chance of success. These are not theoretical numbers; they represent thousands of real cases decided by independent adjudicators each year.

The key takeaway: **do not assume your appeal will fail.** The evidence suggests that most parking fines that are appealed have genuine issues with signage, process, or the facts of the contravention. If you think something was wrong with your fine, it is almost certainly worth challenging.

## How to Maximise Your Chances

1. **Gather evidence early.** Photos of signage, your parking location, timestamps, and any receipts are crucial. Go back and photograph the signs if you can.

2. **Focus on the strongest ground.** Do not throw every possible argument at the wall. Identify your single best defence and build your case around it.

3. **Be factual, not emotional.** Tribunals respond to evidence and legal arguments, not complaints about fairness or revenue-raising.

4. **Use the correct terminology.** Understanding the difference between informal challenges, formal representations, and tribunal appeals shows the adjudicator you understand the process.

5. **Submit on time.** Missing deadlines is the easiest way to lose your appeal rights entirely. Keep track of every date.`,
    faqs: [
      {
        question: "What is the success rate for parking fine appeals?",
        answer:
          "It varies by tribunal. The Traffic Penalty Tribunal (TPT) has a 64% success rate, London Tribunals around 49%, and POPLA (private fines) around 42%. Overall, appealing is more likely to succeed than most people think.",
      },
      {
        question: "Does appealing a parking fine increase the amount I owe?",
        answer:
          "No. For council fines, the discount period is paused while your informal challenge is considered. For private fines, the operator cannot increase the charge because you appealed. Your original amount is the maximum.",
      },
      {
        question: "How long does a parking fine appeal take?",
        answer:
          "An informal challenge to a council typically gets a response within 2-4 weeks. Formal representations may take 4-8 weeks. Tribunal appeals are usually decided within 2-4 weeks of submission. Private operator appeals via POPLA or IAS typically take 4-6 weeks.",
      },
      {
        question: "Can I appeal a parking fine after paying it?",
        answer:
          "For council fines, paying the fine is generally considered acceptance and you cannot then appeal. For private fines, paying under protest may preserve some rights, but it is much harder to get a refund after payment.",
      },
    ],
  },
  {
    slug: "parkingeye-took-me-to-court",
    title: "ParkingEye Took Me to Court: What Actually Happens",
    description:
      "A practical guide to what happens when ParkingEye files a County Court claim against you, from the initial paperwork to the hearing and how to defend yourself.",
    publishedDate: "2026-03-05",
    category: "Legal",
    seoTitle: "ParkingEye Took Me to Court: What Really Happens | FineCheck",
    seoDescription:
      "What to expect if ParkingEye takes you to court for an unpaid parking charge. Covers the N1 claim form, defences, mediation, small claims hearings, and when they drop cases.",
    content: `## ParkingEye Is Different

ParkingEye is the UK's largest private parking operator, managing thousands of car parks across supermarkets, retail parks, hospitals, and leisure venues. They are also, by a considerable margin, the most likely private operator to take drivers to court for unpaid charges.

While many private parking operators threaten court action but rarely follow through, ParkingEye has a dedicated legal operation. Their primary solicitors, DCB Legal (previously known as DCB Group), handle thousands of County Court claims annually. If you have ignored a ParkingEye charge, the threat of court action is real.

## The Background: ParkingEye v Beavis

Before we get into the court process, it is worth understanding why ParkingEye is in such a strong legal position.

In November 2015, the Supreme Court ruled in **ParkingEye Ltd v Beavis [2015] UKSC 67** that ParkingEye's £85 charge for overstaying at a Riverside Retail Park was enforceable. The court found that:

- The charge was not an unfair penalty
- The motorist had agreed to the terms by entering the car park
- The charge served a legitimate interest in managing parking
- The amount was proportionate

This ruling gave ParkingEye (and other operators) a solid legal foundation for pursuing unpaid charges through the courts. It is extremely difficult to argue that a standard ParkingEye charge is unenforceable purely on the basis that it is a penalty.

## The Pre-Court Process

Before ParkingEye takes you to court, you will typically have received:

1. **Initial Parking Charge Notice** (on windscreen or by post)
2. **Notice to Keeper** (if you were not identified as the driver)
3. **One or more reminder letters**
4. **Debt collection letters** (often from DCBL or a similar agency)
5. **Letter Before Claim (LBC)**

The Letter Before Claim is the critical document. It is a formal requirement under the Pre-Action Protocol for Debt Claims. ParkingEye must give you at least 30 days to respond before filing a court claim.

**If you receive a Letter Before Claim, you must take it seriously.** This is no longer a threat; it is a formal legal step. You should respond in writing, setting out any defences you have.

## The County Court Claim

If ParkingEye proceeds, they file a claim through the Money Claims Online system (or the County Court directly). You will receive a **Claim Form** (equivalent to the N1 form) in the post. It will include:

- The amount claimed (the parking charge plus court fees and sometimes interest)
- ParkingEye's statement of the case (their version of events)
- A response pack with forms to complete

### Your Options

You have **14 days** from receiving the claim to respond. Your options are:

1. **Admit the claim and pay.** You pay the full amount plus court fees.
2. **Admit the claim and request time to pay.** You accept you owe the money but ask to pay in instalments.
3. **Defend the claim.** You file a defence and the case continues.
4. **Do nothing.** ParkingEye gets a default CCJ. This is the worst outcome.

### Filing a Defence

If you choose to defend, you must file a defence within 14 days (or request a 28-day extension). Your defence should be clear, factual, and focused on the legal issues. Common defences include:

- **POFA non-compliance**: The Notice to Keeper was late, missing, or did not contain the required information
- **Signage issues**: The terms were not adequately displayed at the car park
- **You were not the driver and POFA was not followed**: The keeper liability provisions were not properly engaged
- **The charge is a penalty**: Harder to argue since Beavis, but still possible in unusual circumstances
- **The claim is time-barred**: The limitation period for contract claims is six years, so this is rarely applicable for recent charges

## Mediation

After you file a defence, the court will usually offer or require **mediation** before a hearing. This is typically a telephone call with a mediator who tries to help both parties reach a settlement.

ParkingEye often offers to settle during mediation, sometimes for a reduced amount. This can be a pragmatic option if your defence is not particularly strong. However, if you have a solid defence, there is no obligation to settle.

Key points about mediation:

- It is free through the Small Claims Mediation Service
- It is usually conducted by telephone
- Both parties must participate in good faith
- Any agreement reached is binding
- If mediation fails, the case proceeds to a hearing

## The Hearing

If mediation fails or is not offered, the case goes to a **small claims hearing**. These are:

- Usually held by telephone or video call (sometimes in person)
- Informal compared to higher courts; no wigs or gowns
- Presided over by a District Judge
- Typically lasting 30-60 minutes

At the hearing, both sides present their case. ParkingEye is usually represented by a solicitor or a legal representative. You can represent yourself, which is normal for small claims.

The judge will consider:

- Whether there was a valid contract (signage, terms, acceptance by parking)
- Whether the charge was properly issued (POFA compliance, correct notices)
- Whether the amount is reasonable and not a penalty
- Whether any defences apply

## When ParkingEye Drops Cases

ParkingEye does drop cases, usually when they realise their evidence has problems. Common reasons include:

- **POFA failures**: If the Notice to Keeper was not sent within the required timeframe or was missing mandatory information, ParkingEye may discontinue
- **Missing ANPR evidence**: If the camera data is unclear or disputed
- **Signage changes**: If the signage at the time of the contravention was different from what they have on file
- **Strategic decisions**: ParkingEye may decide that pursuing a well-prepared defendant is not cost-effective

If ParkingEye discontinues the claim, you are usually entitled to recover your court costs (filing fee, etc.).

## Practical Tips for Defending

1. **Respond to everything on time.** Missing deadlines is the fastest way to lose your case.
2. **Keep copies of everything.** Every letter, every email, every photograph.
3. **Visit the car park if possible.** Take photos and videos of the signage, layout, and any relevant features.
4. **Read the POFA requirements carefully.** Many successful defences are based on technical non-compliance.
5. **Stay calm and factual.** Judges are not impressed by emotional arguments about revenue-raising or fairness. Stick to the law and the evidence.
6. **Consider the PePiPoo forum.** This online community has extensive experience with ParkingEye claims and can offer specific advice for your situation.

## The Cost of Losing

If you lose at the hearing, you will typically be ordered to pay:

- The original parking charge (£60-£100)
- Court fees (£35-£80 depending on the amount claimed)
- Possibly some additional costs, though these are limited in small claims

The total is usually £150-£250. You will not be ordered to pay ParkingEye's legal costs, as costs are not normally awarded in small claims cases.`,
    faqs: [
      {
        question: "How often does ParkingEye actually take people to court?",
        answer:
          "ParkingEye files thousands of County Court claims each year, making them by far the most litigious private parking operator in the UK. If you have received a Letter Before Claim from DCB Legal, the threat is genuine.",
      },
      {
        question: "Can I represent myself against ParkingEye in court?",
        answer:
          "Yes. Small claims hearings are designed for litigants in person (people without lawyers). You can represent yourself, and many drivers have successfully defended ParkingEye claims this way.",
      },
      {
        question: "What happens if I lose a ParkingEye court case?",
        answer:
          "You will be ordered to pay the original charge plus court fees, typically totalling £150-£250. In small claims, you will not normally have to pay ParkingEye's legal costs. You will also get a CCJ if you do not pay within 30 days.",
      },
      {
        question: "Should I accept ParkingEye's mediation offer?",
        answer:
          "It depends on your defence. If you have strong grounds (e.g. clear POFA non-compliance), holding out for a hearing may be worthwhile. If your defence is weaker, settling for a reduced amount at mediation can be pragmatic.",
      },
    ],
  },
  {
    slug: "supermarket-parking-fine-appeal-guide",
    title: "Got a Supermarket Parking Fine? How to Appeal Successfully",
    description:
      "Complete guide to appealing parking fines from Aldi, Lidl, Tesco, Morrisons, and Asda car parks. Which operators manage which stores and how to win your appeal.",
    publishedDate: "2026-02-28",
    category: "Guides",
    seoTitle: "Supermarket Parking Fine Appeal Guide 2026 | FineCheck",
    seoDescription:
      "How to appeal a supermarket parking fine from Aldi, Lidl, Tesco, Morrisons, or Asda. See which operators enforce which stores and the best defences to use.",
    content: `## Why Supermarket Parking Fines Are So Common

Supermarket car parks are the single biggest source of private parking charges in the UK. ANPR (Automatic Number Plate Recognition) cameras monitor how long vehicles are parked, and drivers who exceed the posted time limit receive a Parking Charge Notice, typically for £60-£100.

The frustration is understandable. You went shopping at the store, spent money, and still received a fine because you were 10 minutes over the limit. Here is how to fight back.

## Which Operators Manage Which Supermarkets

Understanding who manages the car park is the first step, because your appeal goes to the operator, not the supermarket.

### ParkingEye
- **Aldi** (majority of stores)
- **Lidl** (many stores)
- **Some Tesco** stores (shared with UKPC)
- Various retail parks with supermarket anchors

### UKPC (UK Parking Control)
- **Morrisons** (primary operator)
- Some Tesco stores

### Horizon Parking
- **Asda** (many stores)
- Some standalone Asda petrol stations

### Excel Parking
- Various smaller supermarket locations
- Some discount retailers

### Smart Parking
- **Lidl** (some newer stores)
- Various mixed-use retail sites

Note: Operators can change, so always check the signage at the specific store.

## Common Defences for Supermarket Parking Fines

### 1. "I Was Shopping in the Store"

This is the most common situation: you overstayed the time limit but were genuinely shopping (or in an adjacent store in the same retail park).

**How to use this defence:**
- Provide your receipt showing you were in the store at the time
- If you used a self-checkout, check your bank statement for the transaction time
- Explain that the time limit was insufficient for your shop (especially for larger weekly shops)
- If the store was busy with long queues, note this

**Success rate:** Moderate. Operators will sometimes cancel the charge if you can prove you were a genuine customer, especially if you write to the store manager as well as the operator. However, this is technically not a defence against the charge itself, since the time limit was the contract term.

### 2. Inadequate Signage

For any private parking charge to be enforceable, the terms must be clearly displayed at the car park. This means:

- Signs must be at the entrance and throughout the car park
- The time limit, charges, and terms must be clearly readable
- Signs must not be obscured by trees, other signs, or poor lighting
- The font size must be large enough to read from the driver's position

**How to use this defence:**
- Visit the car park and photograph every sign
- Note any signs that are damaged, obscured, faded, or poorly positioned
- Photograph the entrance to show whether the terms are visible when entering
- Note if there are areas of the car park with no visible signage

**Success rate:** High. Signage issues are one of the strongest defences at tribunal.

### 3. POFA Non-Compliance

If you were not the driver, the operator must follow the Protection of Freedoms Act 2012 requirements to pursue the registered keeper. The Notice to Keeper must:

- Be sent within 14 days (or 14 days after any Notice to Driver was placed on the windscreen)
- Contain specific wording required by the Act
- Identify the creditor (the landowner or their agent)
- State the amount and the grounds

**How to use this defence:**
- Check the date on the NtK against the date of the alleged contravention
- Check if the NtK contains all the required POFA wording
- If you were not the driver, state this and check whether the POFA conditions were met

**Success rate:** Very high if the NtK was genuinely non-compliant.

### 4. Adjacent Store Visit

Many supermarket car parks are part of larger retail parks. If you visited another store in the same retail park, you may have overstayed the supermarket car park limit.

**How to use this defence:**
- Check whether the car park terms apply to the specific supermarket or the entire retail park
- If the terms say "customers of [supermarket] only," visiting an adjacent store may not be covered
- Provide receipts from the other store to show you were on the retail park

**Success rate:** Moderate to low. If the signage clearly states the car park is for supermarket customers only, using it to visit other shops is technically a breach.

### 5. Trolley Return Time

At busy supermarkets, returning a trolley to a distant bay can add several minutes to your visit. If you were only a few minutes over the limit, this could contribute to a defence.

**How to use this defence:**
- Note the distance from the store exit to the nearest trolley return point
- Calculate the reasonable time to walk back to your car after returning the trolley
- Combine with evidence of genuine shopping (receipt)

**Success rate:** Low as a standalone defence, but useful as supporting evidence.

## Supermarket-Specific Tips

### Aldi

Aldi stores typically have a 90-minute time limit enforced by ParkingEye. Aldi has a reputation for being unsympathetic to appeals directed at the store itself, but ParkingEye will cancel charges if you can demonstrate clear POFA or signage issues.

**Tip:** Aldi stores are designed for quick shopping, so 90 minutes is usually generous. If you overstayed, check whether you were delayed by something specific (pharmacy next door, ATM queue, etc.).

### Lidl

Lidl uses a mix of ParkingEye and Smart Parking. Time limits vary between 60 and 120 minutes. Lidl's "Middle of Lidl" promotions can cause longer shopping times as customers browse.

**Tip:** If the store was particularly busy due to a promotion, mention this in your appeal.

### Tesco

Tesco car parks are managed by various operators depending on location. Larger Tesco Extra stores may have longer time limits (2-3 hours) while Express stores may have very short limits.

**Tip:** Tesco has a customer service team that can sometimes intervene with the parking operator on your behalf. It is worth contacting Tesco directly as well as appealing to the operator.

### Morrisons

Morrisons primarily uses UKPC. Time limits are typically 2-3 hours at larger stores.

**Tip:** Morrisons has been known to ask UKPC to cancel charges for genuine customers. Contact the store manager directly with your receipt.

### Asda

Asda uses Horizon Parking at many locations. Time limits vary, and some Asda stores have recently introduced ANPR where they previously had no enforcement.

**Tip:** If ANPR enforcement was recently introduced and signage was still being installed, this could strengthen a signage defence.

## The Appeal Process Step by Step

1. **Do not pay immediately.** You have time to assess the situation.
2. **Photograph the signage.** Visit the car park as soon as possible.
3. **Gather your evidence.** Receipts, bank statements, photos.
4. **Appeal to the operator first.** Set out your grounds clearly and factually.
5. **If rejected, escalate to POPLA or IAS.** This costs you nothing.
6. **If the charge is cancelled, you are done.** If not, consider whether to pay or wait for further action.

## Template Approach

When writing your appeal, structure it as follows:

- State the PCN reference number
- State the date and location
- Explain your circumstances briefly
- Set out your specific grounds of appeal (focus on the strongest one or two)
- Attach evidence (photos, receipts, bank statements)
- Request cancellation

Keep it factual and concise. Emotional appeals about loyalty to the supermarket are unlikely to succeed, but evidence of genuine shopping combined with a procedural or signage issue often will.`,
    faqs: [
      {
        question: "Can Aldi or Lidl cancel a ParkingEye fine?",
        answer:
          "The supermarket itself does not issue the fine, but store managers can sometimes request the operator to cancel a charge. It is worth contacting the store directly, although success varies. Your formal appeal should go to the parking operator.",
      },
      {
        question: "Is 90 minutes enough time to shop at a supermarket?",
        answer:
          "For most trips, yes. However, factors like busy stores, long pharmacy queues, or mobility issues can make 90 minutes tight. If you have a specific reason for needing longer, include this in your appeal, though the time limit itself is usually considered reasonable.",
      },
      {
        question: "Do supermarket parking fines appear on my credit record?",
        answer:
          "Not unless the operator takes you to court and obtains a CCJ that you do not pay within 30 days. The fine itself does not appear on credit records.",
      },
      {
        question: "What if I was shopping at a store next to the supermarket?",
        answer:
          "Check the signage carefully. If the car park terms specify it is for customers of the specific supermarket, parking there to visit an adjacent store is technically a breach of the terms. However, if the car park serves the entire retail park, this could be a defence.",
      },
    ],
  },
  {
    slug: "hospital-parking-fine-appeal-guide",
    title: "Hospital Parking Fine Appeal: Your Rights and How to Win",
    description:
      "How to appeal a hospital parking fine, including NHS parking rules, compassionate grounds, free parking eligibility, and ANPR overstay defences.",
    publishedDate: "2026-02-20",
    category: "Guides",
    seoTitle: "Hospital Parking Fine Appeal Guide 2026 | FineCheck",
    seoDescription:
      "Appeal a hospital parking fine with our complete guide. Covers NHS free parking rules, compassionate grounds, ANPR overstay from long appointments, and who qualifies for exemptions.",
    content: `## Hospital Parking Fines: A Sensitive Issue

Receiving a parking fine while visiting a hospital is one of the most frustrating experiences drivers face. Whether you were attending an appointment, visiting a sick relative, or dealing with an emergency, the last thing you need is a £60-£100 charge. The good news is that hospital parking fines often have strong grounds for appeal.

## Who Enforces Hospital Parking?

Hospital car parks are managed in different ways:

- **NHS Trust-managed**: Some hospitals manage their own parking, including enforcement. Fines are issued by the trust, not a private operator.
- **Private operator-managed**: Many hospitals contract out parking management to companies like ParkingEye, APCOA, or Saba. These operators install ANPR cameras and issue charges for overstays.
- **Council-managed**: Some hospital car parks on public roads are enforced by the local council through standard PCNs.

The identity of the enforcer determines your appeal route, so check your notice carefully.

## Government Guidance on NHS Parking

The UK government has issued clear guidance on hospital parking, and NHS England has published a set of principles:

### Free Parking Requirements

The following groups should receive **free hospital parking**:

- **Disabled patients and visitors** (Blue Badge holders)
- **Frequent outpatients** (attending regular appointments, such as chemotherapy or dialysis)
- **Parents of sick children** staying overnight
- **Staff working night shifts**
- **Visitors to patients who are gravely ill or receiving end-of-life care**

Note that "should" is important here. These are NHS England guidelines, not legal requirements, and implementation varies between trusts. However, if you fall into one of these categories and were charged for parking, you have strong grounds for appeal.

### Free Parking in Specific Countries

- **Wales**: Free hospital parking at all NHS Wales hospitals since 2008
- **Scotland**: Free hospital parking at all NHS Scotland hospitals since 2008
- **Northern Ireland**: Free hospital parking since 2014 at most sites
- **England**: Mixed. Some trusts offer free parking, others charge. The guidance above applies but is not universally implemented.

If you received a fine at a Welsh, Scottish, or Northern Irish hospital where parking should be free, your appeal is straightforward.

## Common Grounds for Appeal

### 1. Appointment Overran

This is the most common scenario. You purchased a parking ticket or timed your stay based on your expected appointment time, but the appointment started late or took longer than expected.

**How to appeal:**
- Get a letter from the hospital confirming your appointment time and the actual time you were seen
- Request a note from the clinic confirming the appointment overran
- Some hospitals have systems to validate parking for patients whose appointments run over

**Success rate:** High, especially if you can document that the overrun was beyond your control. Tribunals and appeals services are sympathetic to this defence because patients cannot simply leave mid-appointment.

### 2. Emergency Attendance

If you attended A&E or were called to the hospital for a family emergency, you may not have had time to arrange parking properly.

**How to appeal:**
- Provide documentation of the emergency (A&E discharge summary, triage notes)
- Explain why you could not purchase a ticket or move your vehicle
- If you were in A&E for longer than expected, document the timeline

**Success rate:** Very high. Both operators and tribunals recognise that medical emergencies take priority over parking arrangements.

### 3. Free Parking Eligibility

If you should have qualified for free parking (see the categories above) but were charged anyway:

**How to appeal:**
- Provide evidence of your eligibility (Blue Badge, appointment letters showing regular attendance, confirmation from the ward)
- Reference the NHS England guidance on free parking categories
- Contact the hospital's Patient Advice and Liaison Service (PALS) for support

**Success rate:** Very high if you can demonstrate eligibility.

### 4. Inadequate Signage or Unclear Terms

Hospital car parks are often confusing. Multiple entrances, different zones, unclear boundaries between paid and free areas, temporary signs for construction works. All of these create signage defence opportunities.

**How to appeal:**
- Photograph the signage, paying attention to clarity, visibility, and consistency
- Note any areas where the terms are unclear or contradictory
- Document any construction, temporary barriers, or diversions that may have caused confusion

**Success rate:** Good, particularly at busy hospitals where signage is often poor.

### 5. Machine or Payment System Failures

Many hospital car parks use pay-on-exit barriers or app-based payment systems. If the machine was broken, the app was not working, or the barrier did not accept your payment:

**How to appeal:**
- Document the failure (screenshot of app error, photo of broken machine, note of time)
- Report the issue to the hospital immediately if possible
- Check whether alternative payment methods were available and clearly signed

**Success rate:** High if you can prove the failure.

### 6. POFA Non-Compliance (Private Operators Only)

As with any private parking charge, the operator must comply with POFA requirements. The Notice to Keeper must be sent within 14 days, contain the required wording, and correctly identify the vehicle and contravention.

**How to appeal:**
- Check the NtK dates and content against the POFA requirements
- This defence applies regardless of whether you were actually overstaying

**Success rate:** Very high if the NtK was genuinely non-compliant.

## The PALS Route

The Patient Advice and Liaison Service (PALS) exists at every NHS trust and can be a powerful ally. PALS can:

- Write a supporting letter for your appeal
- Liaise with the parking operator on your behalf
- Confirm your appointment times and any delays
- Help you access the trust's parking policy

Always contact PALS before or during your appeal. Their involvement often leads to the charge being cancelled without needing to go to tribunal.

## How to Appeal

### If Managed by a Private Operator

1. Appeal directly to the operator, citing your grounds
2. If rejected, escalate to POPLA (BPA members) or IAS (IPC members)
3. Contact PALS for a supporting letter
4. If the charge is still upheld, consider whether it is worth waiting for court action (rare for hospital fines)

### If Managed by the NHS Trust

1. Contact the trust's parking office directly
2. Ask PALS to intervene
3. If the trust issued a formal PCN under council-type enforcement, follow the council appeal process

### If Managed by the Council

1. Follow the standard council PCN appeal process (informal challenge, formal representations, tribunal)
2. PALS support may still be relevant as evidence

## Special Situations

### Cancer Treatment and Regular Appointments

Patients receiving regular treatment (chemotherapy, radiotherapy, dialysis) should qualify for free or reduced-cost parking under NHS guidance. If you are being charged:

- Ask the hospital for a parking pass or exemption
- Keep all appointment letters as evidence
- Contact the hospital charity, which may have a fund for parking costs

### Visiting a Dying Relative

Visitors to patients receiving end-of-life care should qualify for free parking under NHS guidance. If you were charged:

- Ask the ward to confirm the circumstances in writing
- Reference the NHS England guidance specifically
- Contact PALS immediately

### Disabled Parking

Blue Badge holders should receive free parking at NHS hospitals. If the Blue Badge system was not recognised by the ANPR system:

- Contact the hospital parking office with your Blue Badge details
- Provide photographic evidence that the badge was displayed

## The Bigger Picture

Hospital parking charges are controversial and regularly debated in Parliament. Many campaigners argue that all hospital parking should be free across the UK, as it already is in Wales, Scotland, and Northern Ireland. The current system in England is a patchwork, and patients often fall through the gaps.

If you have been unfairly charged, do not simply accept it. Hospital parking fines have some of the highest appeal success rates precisely because the circumstances are often compelling and the enforcement arrangements are frequently flawed.`,
    faqs: [
      {
        question: "Is hospital parking free in the UK?",
        answer:
          "It depends where you are. Hospital parking is free in Wales, Scotland, and Northern Ireland. In England, it varies by hospital trust. Some trusts offer free parking, others charge. Certain groups (Blue Badge holders, frequent outpatients, parents of sick children) should receive free parking under NHS guidance.",
      },
      {
        question: "Can I appeal a hospital parking fine if my appointment overran?",
        answer:
          "Yes, and this is one of the strongest grounds for appeal. Get a letter from the hospital confirming your actual appointment time and duration. Tribunals and appeals services are sympathetic to patients who overstayed because their medical appointment ran late.",
      },
      {
        question: "Who do I contact about a hospital parking fine?",
        answer:
          "First, check who issued the fine (private operator, NHS trust, or council). Then contact the hospital's Patient Advice and Liaison Service (PALS) for support. PALS can provide supporting letters and liaise with the parking operator on your behalf.",
      },
      {
        question: "Do cancer patients get free hospital parking?",
        answer:
          "Under NHS England guidance, frequent outpatients (including those receiving regular cancer treatment) should qualify for free or reduced parking. Ask your hospital about parking passes or exemptions. The hospital charity may also help with parking costs.",
      },
    ],
  },
  {
    slug: "new-parking-code-of-practice-2026",
    title: "New Parking Rules 2026: What the Code of Practice Means for You",
    description:
      "Everything you need to know about the new Private Parking Code of Practice, including the £50 cap, grace periods, and what has changed for drivers.",
    publishedDate: "2026-02-15",
    category: "Legal",
    seoTitle: "New Private Parking Code of Practice 2026 Explained | FineCheck",
    seoDescription:
      "The new Private Parking Code of Practice explained: £50 standard charges, 10-minute grace period, single appeals service, and what it means for drivers in 2026.",
    content: `## What Is the New Code of Practice?

The Private Parking Code of Practice is a government-backed set of rules that private parking companies must follow when issuing charges on private land. It was developed following years of complaints about aggressive operators, excessive charges, and a confusing appeals system.

The Code applies to **private parking operators only**. Council parking enforcement (PCNs on public roads) is covered by separate legislation and is not affected.

## Key Changes at a Glance

| What Changed | Old System | New Code |
|---|---|---|
| Standard charge | Up to £100 (varied by operator) | £50 (£25 if paid in 14 days) |
| Higher charge | Up to £100+ | £100 (£50 if paid in 14 days) |
| Grace period | None required | 10 minutes mandatory |
| Consideration period | None | 5 minutes |
| Appeals service | POPLA and IAS (two services) | Single unified service |
| Debt recovery | Loosely regulated | Stricter rules |

## The £50 and £100 Caps

The most significant change is the cap on charges:

### Standard Charge: £50

This applies to the majority of parking contraventions, including:

- Overstaying a time limit
- Parking without a valid ticket
- Parking in the wrong area of a car park
- Failing to display a permit correctly

The £50 charge is reduced to **£25 if paid within 14 days**.

### Higher Charge: £100

This applies to more serious contraventions:

- Parking in a disabled bay without a valid Blue Badge
- Parking in a fire lane or emergency access route
- Persistently breaching the same car park's terms (repeat offenders)
- Tailgating through a barrier

The £100 charge is reduced to **£50 if paid within 14 days**.

### What This Means

Previously, operators could set their own charges, and amounts of £60, £80, or even £100 for a simple overstay were common. The cap brings private parking charges in line with council fines and removes one of the biggest sources of driver frustration.

However, it also makes it harder to argue that a charge is excessive or a penalty, since the government has effectively endorsed these amounts as reasonable.

## The 10-Minute Grace Period

Every driver now gets a **mandatory 10-minute grace period** after their parking time expires before a charge can be issued. This means:

- If you have a 2-hour ticket and return after 2 hours and 8 minutes, you cannot be charged
- The ANPR system must account for this grace period
- The grace period applies to all private car parks covered by the Code

This is a significant protection. Under the old system, operators could (and did) issue charges for overstays of just one or two minutes. The 10-minute buffer eliminates most of the "trivial overstay" charges that caused so much anger.

## The 5-Minute Consideration Period

When you first arrive at a car park, you now have a **5-minute consideration period** to decide whether to park. During this time:

- You cannot be charged for entering the car park
- The clock does not start until the consideration period ends
- This applies even if ANPR records your entry

This protects drivers who enter a car park, realise it is full or unsuitable, and leave within a few minutes.

## Single Appeals Service

Previously, private parking appeals were handled by two different bodies:

- **POPLA** (Parking on Private Land Appeals): for BPA member operators
- **IAS** (Independent Appeals Service): for IPC member operators

The new Code will consolidate these into a **single, unified appeals service**. This simplifies the process for drivers, who no longer need to work out which service handles their operator.

The single service will:

- Handle all private parking charge appeals
- Be free for motorists
- Make decisions that are binding on the operator (but not the motorist)
- Publish annual statistics on appeal outcomes

## Stricter Rules for Debt Recovery

The Code introduces tighter controls on how operators pursue unpaid charges:

- Operators must follow a clear escalation process
- Threatening or misleading language in letters is prohibited
- Debt collection agencies must be registered and regulated
- The Letter Before Claim requirements are explicitly set out

This should reduce the aggressive debt collection letters that many drivers receive, often designed to frighten people into paying rather than reflecting any genuine intention to take court action.

## Signage Requirements

The Code sets out detailed requirements for signage:

- Terms must be displayed prominently at the entrance and throughout the car park
- Font sizes must be large enough to read from the driver's position
- The charge amounts, time limits, and appeal process must all be clearly stated
- Contact details for the operator must be displayed
- The name of the landowner must be identified

Poor signage has always been one of the strongest grounds for appeal. The Code does not change this, but it gives clearer standards for what "adequate" signage looks like.

## What the Code Does NOT Change

- **Council fines**: The Code only applies to private parking operators. Council PCNs on public roads are unaffected.
- **Clamping**: Clamping on private land has been illegal since 2012 and remains so.
- **POFA requirements**: The Protection of Freedoms Act requirements for Notice to Keeper are unchanged.
- **Court action**: Operators can still take you to court for unpaid charges (this is a civil matter, not affected by the Code).
- **The Beavis ruling**: The Supreme Court ruling that private parking charges are enforceable still stands.

## When Does It Take Effect?

The Code has been developed over several years following extensive consultation. Implementation is phased:

- The core provisions (charge caps, grace periods) are being rolled out through 2025-2026
- The single appeals service is expected to be fully operational by late 2026
- Operators have transition periods to update their systems and signage

Check individual operator websites for the most current information on compliance.

## How This Affects Your Appeal

If you received a charge after the Code took effect:

- **Charges above the caps** are automatically non-compliant and should be appealed
- **No grace period applied**: If you were charged for an overstay of less than 10 minutes, appeal immediately
- **Signage does not meet the new standards**: Use the Code's requirements as a benchmark

If you received a charge before the Code took effect, the old rules still apply to that specific charge.

## Our View

The Code of Practice is a welcome improvement. Capped charges, mandatory grace periods, and a single appeals service address the biggest frustrations drivers have had with private parking enforcement.

However, it also legitimises private parking charges in a way that the old system did not. With government-endorsed charge levels and clearer rules, operators are now on firmer legal ground. The days of successfully arguing that any private parking charge is unenforceable are largely over.

The best advice remains the same: check the signage, know your time limit, and if you do get a charge, check the process before deciding whether to appeal or pay.`,
    faqs: [
      {
        question: "Does the new Code of Practice apply to council parking fines?",
        answer:
          "No. The Code only applies to private parking operators on private land. Council parking fines (Penalty Charge Notices) on public roads are governed by the Traffic Management Act 2004 and are not affected.",
      },
      {
        question: "What is the maximum a private parking company can charge?",
        answer:
          "Under the new Code of Practice, the standard charge is £50 (£25 if paid within 14 days). For more serious contraventions like parking in disabled bays, the higher charge is £100 (£50 within 14 days).",
      },
      {
        question: "Do I still get a 10-minute grace period at supermarkets?",
        answer:
          "Yes. The 10-minute grace period applies to all private car parks covered by the Code of Practice, including supermarkets, retail parks, hospitals, and leisure venues.",
      },
      {
        question: "Can I still appeal a private parking fine under the new rules?",
        answer:
          "Yes. The new Code introduces a single unified appeals service (replacing POPLA and IAS). Appeals remain free for motorists, and the process is designed to be simpler than before.",
      },
    ],
  },
  {
    slug: "how-long-does-parking-company-have-to-send-fine",
    title: "How Long Does a Parking Company Have to Send You a Fine?",
    description:
      "Time limits for sending parking fines: the POFA 14-day rule, council timescales, NtD vs NtK differences, and what counts as 'received'.",
    publishedDate: "2026-02-10",
    category: "Legal",
    seoTitle: "How Long Does a Parking Company Have to Send a Fine? | FineCheck",
    seoDescription:
      "The rules on how long parking companies and councils have to send you a fine. Covers the POFA 14-day rule, NtD vs NtK, postal timing, and when late fines are invalid.",
    content: `## The Short Answer

For **private parking operators**, the key rule is the POFA 14-day requirement for the Notice to Keeper. For **councils**, there is no strict time limit for issuing a PCN, but there are practical constraints and fairness considerations.

Understanding these timescales is important because a late notice can be grounds for cancelling the entire charge.

## Private Parking: The POFA 14-Day Rule

The Protection of Freedoms Act 2012 (POFA) created a mechanism for private parking operators to pursue the registered keeper of a vehicle when the driver cannot be identified. This is known as "keeper liability."

### How Keeper Liability Works

When you park in a private car park, the contract is between the **driver** and the landowner/operator. If you overstay, the operator can pursue the driver for breach of contract.

But what if the operator does not know who was driving? POFA allows them to pursue the **registered keeper** instead, provided they follow strict rules. The most important of these is the Notice to Keeper (NtK) requirement.

### The 14-Day Rule

The operator must serve a compliant Notice to Keeper within one of these timeframes:

**If a Notice to Driver (NtD) was placed on the windscreen:**
- The NtK must be sent within **14 days** of the NtD being placed on the vehicle

**If no Notice to Driver was placed (e.g. ANPR-only enforcement):**
- The NtK must be sent within **14 days** of the contravention

### What "Sent" Means

This is where it gets slightly complicated. The 14-day rule relates to when the notice is **sent**, not when it is received. In practice:

- First-class post is deemed to arrive **2 working days** after posting
- Second-class post is deemed to arrive **4 working days** after posting
- The operator must post the NtK within the 14-day window

Some operators push the boundaries by sending notices close to the deadline. If you receive an NtK that appears to have been sent late, check the postmark carefully.

### What the NtK Must Contain

A compliant NtK must include:

1. The date and time of the alleged contravention
2. The vehicle registration mark
3. The amount of the charge
4. The name and address of the creditor (the landowner or their agent)
5. A statement that the creditor has the right to recover the charge from the keeper
6. Information about how to pay and how to appeal
7. Specific POFA wording about keeper liability

If any of these elements are missing or incorrect, the NtK may be non-compliant, and keeper liability falls away.

### What Happens If the NtK Is Late

If the operator fails to send a compliant NtK within 14 days, they **cannot pursue the registered keeper**. They can only pursue the **driver**, and since they usually do not know who was driving, this effectively means they cannot enforce the charge at all.

This is one of the most powerful defences against private parking charges. If you can demonstrate that the NtK was sent outside the 14-day window, the charge should be cancelled.

### How to Check

1. Look at the date on the NtK letter
2. Compare it to the date of the alleged contravention
3. If the NtK is dated more than 14 days after the contravention (or more than 14 days after a windscreen NtD), it is late
4. Check the postmark on the envelope if you still have it
5. Request proof of postage from the operator if you are not sure

## Council Parking Fines: Time Limits

Council PCNs are governed by different rules, and the timescales are less rigid.

### PCNs Placed on the Windscreen

There is no specific time limit for placing a PCN on a vehicle's windscreen. The traffic warden issues the notice at the time of the contravention. If you drive away before the PCN is attached, the council can send it by post (see below).

### PCNs Sent by Post

When a PCN is sent by post (either because the vehicle drove away or because the offence was captured by CCTV), the council should issue it within **28 days** of the contravention under the Traffic Management Act 2004.

However, this is not an absolute deadline in the same way the POFA 14-day rule is. Late service of a council PCN can be a ground for appeal, but it does not automatically invalidate the notice.

### The Notice to Owner (NtO)

After the initial PCN, if the driver does not pay or challenge, the council sends a Notice to Owner (NtO) to the registered keeper. The NtO must be served:

- Not less than **28 days** after the PCN was served
- Not more than **6 months** after the PCN was served (in practice, most are sent within 56 days)

If the NtO is sent too early or too late, this can be grounds for appeal.

### CCTV Enforcement

For contraventions caught on camera (bus lanes, yellow box junctions, moving traffic offences), the PCN must be sent by post. The 28-day guideline applies, though some councils take longer.

## Notice to Driver (NtD) vs Notice to Keeper (NtK)

These are sometimes confused, but they serve different purposes:

### Notice to Driver (NtD)

- A notice placed on the vehicle's windscreen at the time of the contravention
- Addressed to "the driver" (the operator does not know who this is)
- Starts the clock for the NtK if the driver does not respond
- Not required by POFA, but commonly used by operators

### Notice to Keeper (NtK)

- A notice sent by post to the registered keeper
- Contains specific POFA wording about keeper liability
- Must be sent within 14 days (see above)
- This is the critical notice for enforcement purposes

If an operator issues a windscreen NtD and then fails to follow up with a compliant NtK within 14 days, they lose the ability to pursue the keeper.

## What Counts as "Received"

The law uses deemed service rules:

### First Class Post
- Deemed received on the **second working day** after posting
- Example: posted Monday, deemed received Wednesday

### Second Class Post
- Deemed received on the **fourth working day** after posting
- Example: posted Monday, deemed received Friday

### Actual Receipt

If you can prove you received the notice later than the deemed date (e.g. due to Royal Mail delays, incorrect address, or postal redirection), this may be relevant.

However, the POFA 14-day rule is based on when the notice was **sent**, not received. So postal delays do not help if the notice was posted on time.

## Special Situations

### The Vehicle Was Sold

If you sold the vehicle before the contravention occurred, you are not the keeper and the NtK should not have been sent to you. Provide proof of sale (V5C transfer, bill of sale).

### The Vehicle Was Stolen

If the vehicle was stolen at the time of the contravention, you are not liable. Provide the crime reference number.

### Multiple Charges on the Same Day

Some operators issue separate charges for each contravention on the same day (e.g. entering and leaving the same car park multiple times). Each charge requires its own compliant NtK within the 14-day window.

### Bank Holidays and Weekends

Working days exclude weekends and bank holidays for the purposes of deemed service. The 14-day sending requirement is calendar days, not working days.

## Practical Advice

1. **Always check the dates.** Compare the NtK date to the contravention date. Even one day matters.
2. **Keep the envelope.** The postmark can be evidence of when the notice was actually posted.
3. **Request proof of postage.** If you think the NtK was late, ask the operator to prove when they sent it.
4. **Do not assume the dates on the letter are correct.** Some operators backdate letters. The postmark is more reliable.
5. **Raise POFA non-compliance as your primary ground.** It is a technical defence that tribunals and appeals services take seriously, regardless of whether you were actually in contravention.`,
    faqs: [
      {
        question: "What is the 14-day rule for parking fines?",
        answer:
          "Under the Protection of Freedoms Act 2012, private parking operators must send a Notice to Keeper within 14 days of the contravention (or 14 days after placing a windscreen notice). If they miss this deadline, they cannot pursue the registered keeper for payment.",
      },
      {
        question: "How long do councils have to send a parking fine?",
        answer:
          "Councils should issue postal PCNs within 28 days of the contravention, though this is not an absolute deadline. The Notice to Owner must be sent between 28 days and 6 months after the original PCN.",
      },
      {
        question: "Does the 14-day rule apply to council fines?",
        answer:
          "No. The POFA 14-day rule applies only to private parking operators. Council fines are governed by the Traffic Management Act 2004, which has different (and generally less strict) timing requirements.",
      },
      {
        question: "What if I received the notice late due to postal delays?",
        answer:
          "The POFA 14-day rule is based on when the notice was sent, not received. If the operator posted the NtK within 14 days but you received it later due to postal delays, the notice is still technically compliant. However, the operator should be able to provide proof of posting.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return BLOG_POSTS.slice(0, count);

  // Prioritise same category, then most recent
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );
  const others = BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, count);
}
