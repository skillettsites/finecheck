export interface AppealTemplate {
  slug: string;
  title: string;
  category: 'operator' | 'council' | 'defence' | 'escalation';
  operatorSlug?: string;
  description: string;
  whenToUse: string;
  letterTemplate: string;
  instructions: string[];
  tips: string[];
  relatedTemplates: string[];
  seoTitle: string;
  seoDescription: string;
}

export const TEMPLATES: AppealTemplate[] = [
  {
    slug: 'parkingeye-appeal-letter',
    title: 'ParkingEye Appeal Letter Template',
    category: 'operator',
    operatorSlug: 'parkingeye',
    description: 'A formal appeal letter template for challenging a ParkingEye parking charge notice. Covers ANPR evidence issues, signage compliance, POFA 2012 requirements, and the BPA Code of Practice.',
    whenToUse: 'Use this template when you have received a parking charge from ParkingEye and want to appeal directly to them in the first instance. ParkingEye is a BPA member, so appeals they reject can be escalated to POPLA. This template is suitable for overstay charges, ANPR errors, and signage-related challenges at supermarkets, retail parks, and hospital car parks.',
    letterTemplate: `[YOUR NAME]
[YOUR ADDRESS]
[YOUR CITY]
[YOUR POSTCODE]

[DATE]

ParkingEye Limited
Burnt Tree, Tipton
West Midlands, DY4 7NF

Dear Sir or Madam,

Re: Parking Charge Notice [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]

I am writing to formally appeal the above parking charge notice. I do not accept liability for this charge and request that it be cancelled for the following reasons.

Inadequacy of ANPR Evidence

ParkingEye relies upon Automatic Number Plate Recognition cameras to record entry and exit times. I request that you provide the full ANPR images showing my vehicle entering and exiting the car park. ANPR systems are known to produce misreads and timing errors, and I am not satisfied that the recorded timestamps accurately reflect my actual stay. If the images are unclear or do not definitively show my vehicle, the charge has no evidential basis.

Signage Compliance

Under the BPA Approved Operator Scheme Code of Practice, signage must be prominent, legible, and located at every entrance to the car park as well as throughout the site. The terms and conditions, including the maximum stay period, the charge amount, and the appeal process, must be clearly displayed. I do not believe the signage at this location met these requirements. [DESCRIBE SPECIFIC SIGNAGE ISSUES IF APPLICABLE, e.g. signs were obscured, faded, positioned too high, or absent from key areas.]

POFA 2012 Compliance

Under Schedule 4 of the Protection of Freedoms Act 2012, the Notice to Keeper must be served within 14 days of the alleged contravention (or the date the keeper's details were obtained from the DVLA). I request confirmation that this requirement was met, along with proof of postage. The NtK must also contain the prescribed wording set out in the Act, including the right to appeal and the consequences of non-payment. Any failure to comply renders the charge unenforceable against the registered keeper.

Proportionality of the Charge

Following the Supreme Court decision in ParkingEye v Beavis [2015] UKSC 67, a parking charge must represent a genuine pre-estimate of loss or serve a legitimate commercial interest in managing the car park. I question whether the charge of [AMOUNT] is proportionate given the nature and duration of the alleged overstay.

I therefore request that this charge be cancelled. If you reject this appeal, I intend to escalate the matter to POPLA as the independent appeals service for BPA members. Please provide your response in writing within 28 days.

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'Replace all placeholders in square brackets with your actual details.',
      'Add specific signage issues you observed, such as missing, obscured, or illegible signs.',
      'If you have photos of the car park signage (or lack of it), mention that you can provide these as evidence.',
      'Send the letter within 28 days of receiving the charge, ideally by recorded delivery.',
      'Keep a copy of everything you send and receive.',
      'If ParkingEye rejects your appeal, you have 28 days to escalate to POPLA. Use our POPLA escalation template for that.',
    ],
    tips: [
      'Request your ANPR images via a Subject Access Request under the UK GDPR. ParkingEye must respond within 30 days.',
      'ParkingEye is one of the few operators that pursues court action, so do not ignore their correspondence.',
      'Check Google Maps and Google Street View for evidence of poor signage at the location.',
      'If you were parked at a hospital, emphasise that medical appointments are unpredictable and that overstays were beyond your control.',
      'The BPA Code requires operators to allow a grace period. Check whether one was applied.',
    ],
    relatedTemplates: ['popla-appeal-letter', 'anpr-error-appeal-letter', 'mitigating-circumstances-letter'],
    seoTitle: 'ParkingEye Appeal Letter Template | Free Download | FineCheck',
    seoDescription: 'Free ParkingEye appeal letter template with real legal arguments. Covers ANPR errors, POFA 2012, BPA Code, and signage issues. Copy and customise for your appeal.',
  },
  {
    slug: 'ukpc-appeal-letter',
    title: 'UKPC Appeal Letter Template',
    category: 'operator',
    operatorSlug: 'ukpc',
    description: 'A formal appeal letter template for challenging a UKPC (UK Parking Control) parking charge. Addresses common UKPC enforcement weaknesses including signage failures, NtK compliance, and aggressive debt collection tactics.',
    whenToUse: 'Use this template when you have received a parking charge from UKPC and want to appeal directly to them. UKPC is a BPA member, so rejected appeals can go to POPLA. This template works well for residential car park charges, permit issues, visitor parking disputes, and overstay charges at commercial sites.',
    letterTemplate: `[YOUR NAME]
[YOUR ADDRESS]
[YOUR CITY]
[YOUR POSTCODE]

[DATE]

UK Parking Control Limited
Parking Charge Appeals
PO Box 2012
Stoke-on-Trent, ST4 9DN

Dear Sir or Madam,

Re: Parking Charge Notice [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]

I am writing to formally appeal the above parking charge notice. I do not accept liability for this charge and respectfully request that it be cancelled for the reasons set out below.

Notice to Keeper Requirements

Under Schedule 4 of the Protection of Freedoms Act 2012, the Notice to Keeper must be served within 14 days of the alleged contravention (or within 14 days of obtaining keeper details from the DVLA) in order to transfer liability from the driver to the registered keeper. I request that you provide proof that the NtK was sent within this statutory timeframe and that it contained the prescribed wording required by the Act, including the right of appeal and the consequences of non-payment. Any failure to comply with these requirements means you cannot pursue the registered keeper for payment.

Signage and Terms

Under the BPA Approved Operator Scheme Code of Practice, all terms and conditions must be clearly and prominently displayed at the entrance to the car park and at regular intervals throughout the site. The signage must include the maximum stay period, the charge amount, and details of how to appeal. I do not believe the signage at this location was adequate or compliant. [DESCRIBE SPECIFIC SIGNAGE ISSUES, e.g. signs were too small, placed at an angle, partially obscured by vegetation, or contradictory in their wording.]

Proportionality and Genuine Pre-Estimate of Loss

The charge of [AMOUNT] must represent a genuine pre-estimate of loss suffered by the landowner, or serve a legitimate interest in managing the parking facility. Following ParkingEye v Beavis [2015] UKSC 67, charges that function as penalties rather than reflecting genuine losses are unenforceable. I question whether this charge meets that threshold.

Debt Collection Practices

I am aware that UKPC uses third-party debt collection agencies whose correspondence can exaggerate the legal consequences of non-payment. I wish to place on record that I will only correspond with UKPC directly or through the formal POPLA appeals process.

I request that this charge be cancelled in full. If my appeal is rejected, I will escalate the matter to POPLA. Please respond in writing within 28 days.

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'Replace all placeholders in square brackets with your actual details.',
      'Be specific about the signage problems you observed at the location.',
      'If you have a valid permit or were visiting a resident, attach a copy of the permit or a letter from the resident.',
      'Send within 28 days of receiving the charge. Use recorded delivery for proof.',
      'Do not engage with debt collection agencies. Communicate only with UKPC directly or through POPLA.',
      'Keep copies of all correspondence.',
    ],
    tips: [
      'UKPC has historically had a high volume of complaints about enforcement practices. Check forums like PePiPoo and MoneySavingExpert for similar cases.',
      'If the charge relates to a residential car park, check whether the management company authorised UKPC to enforce parking and whether you were given adequate notice of the terms.',
      'Debt collection letters from UKPC\'s agents often use alarming language. These are not court documents and you are not obliged to pay based on a debt collection letter alone.',
      'Check whether the NtK arrived more than 14 days after the alleged contravention. If it did, UKPC cannot hold the keeper liable.',
      'Photograph the signage at the location as soon as possible. Conditions may change.',
    ],
    relatedTemplates: ['popla-appeal-letter', 'anpr-error-appeal-letter', 'mitigating-circumstances-letter'],
    seoTitle: 'UKPC Appeal Letter Template | Free Download | FineCheck',
    seoDescription: 'Free UKPC appeal letter template. Covers NtK compliance, signage issues, BPA Code of Practice, and debt collection tactics. Copy and personalise for your case.',
  },
  {
    slug: 'apcoa-appeal-letter',
    title: 'APCOA Appeal Letter Template',
    category: 'operator',
    operatorSlug: 'apcoa',
    description: 'A formal appeal letter template for challenging an APCOA parking charge. Covers common issues with pay-by-phone systems, barrier malfunctions, airport and station car parks, and app payment failures.',
    whenToUse: 'Use this template when you have received a parking charge from APCOA. APCOA manages car parks at airports, hospitals, train stations, and city centres. This template is particularly useful for disputes involving payment system errors, app failures, barrier malfunctions, or confusing tariff structures.',
    letterTemplate: `[YOUR NAME]
[YOUR ADDRESS]
[YOUR CITY]
[YOUR POSTCODE]

[DATE]

APCOA Parking (UK) Limited
Parking Charge Appeals
PO Box 844
Leeds, LS1 9QF

Dear Sir or Madam,

Re: Parking Charge Notice [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]

I am writing to formally appeal the above parking charge notice. I do not accept liability for this charge and request that it be cancelled for the reasons set out below.

Payment System / Technology Failure

[SELECT AND ADAPT THE RELEVANT PARAGRAPH BELOW]

[IF APP/PHONE PAYMENT ISSUE:] I attempted to pay for my parking using [RingGo / JustPark / APCOA FLOW app / pay-by-phone] at the time of parking. However, the payment system experienced a technical failure, preventing me from completing the transaction. I should not be penalised for a failure in APCOA's own payment infrastructure. I can provide screenshots of the failed transaction or error messages if required.

[IF BARRIER MALFUNCTION:] The barrier at the car park was malfunctioning on the date in question, which prevented me from exiting within the permitted time. Barrier malfunctions are a known issue at APCOA-managed multi-storey car parks and are entirely outside my control. I should not be liable for an overstay caused by APCOA's own equipment failure.

Signage and Tariff Clarity

Under the BPA Approved Operator Scheme Code of Practice, all tariffs, terms, and conditions must be displayed clearly and unambiguously. The tariff structure at this location is confusing, with multiple rates depending on time of day, duration, and payment method. I do not believe the signage adequately communicated the terms that APCOA now seeks to enforce. [DESCRIBE SPECIFIC TARIFF CONFUSION OR SIGNAGE ISSUES.]

POFA 2012 Compliance

Under Schedule 4 of the Protection of Freedoms Act 2012, the Notice to Keeper must be served within 14 days and must contain the prescribed wording. I request confirmation that this requirement was met, along with proof of posting. Any failure to comply renders the charge unenforceable against the registered keeper.

Proportionality

The charge of [AMOUNT] must be proportionate and represent a genuine pre-estimate of loss, in line with the principles established in ParkingEye v Beavis [2015] UKSC 67. I do not consider this charge to be proportionate given the circumstances.

I request that this charge be cancelled. If my appeal is rejected, I intend to escalate the matter to POPLA. Please respond in writing within 28 days.

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'Replace all placeholders in square brackets with your actual details.',
      'Choose the relevant paragraph (app/phone failure or barrier malfunction) and delete the other.',
      'If you have screenshots of a failed payment or app errors, mention them and attach copies.',
      'If the issue was a barrier malfunction, check whether there was a help button or intercom and note whether you used it.',
      'Send within 28 days of receiving the charge, by recorded delivery.',
      'Keep all receipts, screenshots, and copies of correspondence.',
    ],
    tips: [
      'APCOA manages many hospital car parks. If your overstay was due to a medical appointment running late, emphasise this and provide appointment evidence.',
      'If you were at a train station and your overstay was caused by train delays or cancellations, obtain evidence from National Rail or the train operator.',
      'Check whether you have a payment confirmation email or app notification that proves you attempted to pay.',
      'APCOA is a BPA member, so rejected appeals go to POPLA, which is free to use.',
      'Airport car park charges can be high. Check that the advertised rates match what you were actually charged.',
    ],
    relatedTemplates: ['popla-appeal-letter', 'mitigating-circumstances-letter', 'anpr-error-appeal-letter'],
    seoTitle: 'APCOA Appeal Letter Template | Free Download | FineCheck',
    seoDescription: 'Free APCOA appeal letter template for parking charges at airports, hospitals, and stations. Covers app failures, barrier issues, and BPA Code requirements.',
  },
  {
    slug: 'excel-parking-appeal-letter',
    title: 'Excel Parking Appeal Letter Template',
    category: 'operator',
    operatorSlug: 'excel-parking',
    description: 'A formal appeal letter template for challenging an Excel Parking charge. Covers common issues with their enforcement at retail parks, leisure centres, and commercial sites, including signage problems and NtK failures.',
    whenToUse: 'Use this template when you have received a parking charge from Excel Parking. Excel Parking is a BPA member that manages car parks at retail parks, leisure centres, and commercial properties. This template covers signage compliance, ANPR issues, and POFA 2012 requirements.',
    letterTemplate: `[YOUR NAME]
[YOUR ADDRESS]
[YOUR CITY]
[YOUR POSTCODE]

[DATE]

Excel Parking Services Limited
Parking Charge Appeals
Regus House, Herons Way
Chester Business Park, CH4 9QR

Dear Sir or Madam,

Re: Parking Charge Notice [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]

I am writing to formally appeal the above parking charge notice. I do not accept liability for this charge and request that it be cancelled for the following reasons.

Signage Compliance

Under the BPA Approved Operator Scheme Code of Practice, all terms and conditions must be clearly displayed at every entrance to the car park and throughout the site. The signage must state the maximum permitted stay, the amount of the charge, and the process for appealing. Having visited this location, I do not believe the signage was adequate or compliant with the Code. [DESCRIBE SPECIFIC SIGNAGE ISSUES: e.g. signs were not visible on entry, were obscured, were too small to read from a vehicle, or did not clearly state the terms.]

POFA 2012 Notice to Keeper Requirements

Under Schedule 4 of the Protection of Freedoms Act 2012, the operator must serve the Notice to Keeper within 14 days of the alleged contravention (or within 14 days of obtaining the keeper details from the DVLA). The NtK must contain the specific prescribed wording set out in the Act. I request that you provide proof of postage and confirmation that the NtK was served within the statutory timeframe. Any failure to comply with these requirements means that keeper liability cannot be established.

ANPR Evidence

I request disclosure of the full ANPR images showing my vehicle entering and exiting the car park, along with the timestamps and the calibration records for the cameras in use. ANPR systems are susceptible to misreads and timing errors, and I am not satisfied that the evidence accurately reflects my actual parking duration.

Proportionality of the Charge

The charge must represent a genuine pre-estimate of loss or serve a legitimate commercial interest, consistent with the principles in ParkingEye v Beavis [2015] UKSC 67. I do not consider the charge of [AMOUNT] to be proportionate given the circumstances.

I request that this charge be cancelled in full. Should my appeal be rejected, I will exercise my right to escalate the matter to POPLA as the independent appeals service for BPA members.

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'Replace all placeholders in square brackets with your actual details.',
      'Visit the car park (if possible) and photograph the signage to support your appeal.',
      'Describe any specific signage problems in detail: location, size, visibility, and content.',
      'Send within 28 days of receiving the charge, using recorded delivery.',
      'If Excel Parking rejects your appeal, you have 28 days to escalate to POPLA for free.',
      'Keep copies of all correspondence and evidence.',
    ],
    tips: [
      'Excel Parking often enforces at sites where the signage is not prominent enough. Take photos on your next visit.',
      'Check the date on the NtK carefully. If it arrived more than 14 days after the alleged contravention, they may have missed the deadline.',
      'If you were visiting a shop or business at the location, ask the business whether they can validate your parking or confirm you were a customer.',
      'Search online forums (PePiPoo, MoneySavingExpert) for other appeals against Excel Parking at the same location.',
      'Excel Parking does not always pursue unpaid charges to court, but do not rely on this.',
    ],
    relatedTemplates: ['popla-appeal-letter', 'anpr-error-appeal-letter', 'mitigating-circumstances-letter'],
    seoTitle: 'Excel Parking Appeal Letter Template | Free Download | FineCheck',
    seoDescription: 'Free Excel Parking appeal letter template. Covers signage failures, NtK compliance, ANPR evidence challenges, and BPA Code requirements. Ready to customise.',
  },
  {
    slug: 'smart-parking-appeal-letter',
    title: 'Smart Parking Appeal Letter Template',
    category: 'operator',
    operatorSlug: 'smart-parking',
    description: 'A formal appeal letter template for challenging a Smart Parking charge. Smart Parking is an IPC member, so escalation goes to the IAS (not POPLA). This template covers their specific enforcement practices and the IPC Code of Practice.',
    whenToUse: 'Use this template when you have received a parking charge from Smart Parking. Unlike most other major operators, Smart Parking is a member of the IPC (International Parking Community), not the BPA. This means escalated appeals go to the IAS (Independent Appeals Service), not POPLA. The template addresses ANPR issues, IPC Code requirements, and NtK compliance.',
    letterTemplate: `[YOUR NAME]
[YOUR ADDRESS]
[YOUR CITY]
[YOUR POSTCODE]

[DATE]

Smart Parking Limited
Parking Charge Appeals
Sackville House, 143-149 Fenchurch Street
London, EC3M 6BL

Dear Sir or Madam,

Re: Parking Charge Notice [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]

I am writing to formally appeal the above parking charge notice. I do not accept liability for this charge and request that it be cancelled for the reasons below.

IPC Code of Practice Compliance

Smart Parking is a member of the International Parking Community (IPC) and is bound by the IPC Code of Practice. Under this Code, adequate and prominent signage must be displayed at every entrance and throughout the car park. The signage must clearly state the terms and conditions, the charge amount, the time limits, and the appeal process. I do not believe the signage at this location was compliant with these requirements. [DESCRIBE SPECIFIC SIGNAGE ISSUES.]

ANPR Evidence

I request full disclosure of the ANPR images relied upon to issue this charge, including the entry and exit photographs, the recorded timestamps, and any camera calibration or maintenance records. ANPR technology is not infallible and I require this evidence to verify the accuracy of the alleged contravention. If the images do not clearly and unambiguously show my vehicle registration, the charge is not supported by adequate evidence.

POFA 2012 Notice to Keeper

Under Schedule 4 of the Protection of Freedoms Act 2012, the Notice to Keeper must be served within 14 days and must contain the statutory prescribed wording. This includes a statement that the charge is a charge to the driver, that the keeper is liable if the driver does not pay, and details of how to appeal. I request proof that the NtK was served within the 14-day window and that it fully complied with the statutory requirements.

Grace Period

The IPC Code of Practice requires operators to allow a reasonable grace period at the beginning and end of a parking session. I request confirmation that a grace period was applied in this case and details of what that grace period was. If no grace period was applied, this represents a breach of the Code.

Proportionality

In line with ParkingEye v Beavis [2015] UKSC 67, the charge must be proportionate and represent a genuine pre-estimate of loss or a legitimate interest. I do not consider the charge of [AMOUNT] to be proportionate.

I request that this charge be cancelled. If my appeal is rejected, I will escalate the matter to the Independent Appeals Service (IAS). Please respond in writing within 28 days.

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'Replace all placeholders in square brackets with your actual details.',
      'Note that Smart Parking is an IPC member, not BPA. Escalated appeals go to the IAS, not POPLA.',
      'Describe the signage problems you observed in as much detail as possible.',
      'Request your ANPR images via a Subject Access Request if Smart Parking does not provide them.',
      'Send within 28 days of the charge, by recorded delivery.',
      'Keep copies of everything.',
    ],
    tips: [
      'The IAS appeals process is different from POPLA. Check the IAS website for their specific requirements and deadlines.',
      'Smart Parking operates at many NHS hospital car parks. If your overstay was due to a medical appointment, provide evidence from the hospital.',
      'The IPC Code of Practice requires a "consideration period" (grace period). If none was applied, this is a strong ground for appeal.',
      'Smart Parking has faced criticism for aggressive enforcement, particularly at hospital sites. Check online forums for similar cases.',
      'If the NtK wording does not exactly match the statutory requirements in POFA 2012, the charge cannot be enforced against the keeper.',
    ],
    relatedTemplates: ['ias-appeal-letter', 'anpr-error-appeal-letter', 'mitigating-circumstances-letter'],
    seoTitle: 'Smart Parking Appeal Letter Template | Free Download | FineCheck',
    seoDescription: 'Free Smart Parking appeal letter template. Covers IPC Code, IAS appeals, ANPR errors, and hospital car park charges. Copy and personalise for your case.',
  },
  {
    slug: 'council-pcn-appeal-letter',
    title: 'Council PCN Informal Challenge Template',
    category: 'council',
    description: 'A formal template for making an informal challenge against a council-issued Penalty Charge Notice (PCN). This is the first stage of appealing a council parking ticket, before making a formal representation to the Traffic Penalty Tribunal or London Tribunals.',
    whenToUse: 'Use this template when you have received a Penalty Charge Notice from a local council (not a private operator). Council PCNs are issued under the Traffic Management Act 2004 (outside London) or London Local Authorities and Transport for London Act 2003 (in London). The informal challenge is the first step. If rejected, you can make a formal representation after receiving a Notice to Owner.',
    letterTemplate: `[YOUR NAME]
[YOUR ADDRESS]
[YOUR CITY]
[YOUR POSTCODE]

[DATE]

[COUNCIL NAME]
Parking Services
[COUNCIL ADDRESS]

Dear Sir or Madam,

Re: Penalty Charge Notice [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]

I am writing to make an informal challenge against the above Penalty Charge Notice. I do not believe this PCN was correctly issued and request that it be cancelled for the following reasons.

[SELECT AND ADAPT THE RELEVANT GROUNDS BELOW]

[IF CONTRAVENTION DID NOT OCCUR:]
I contend that the alleged contravention did not occur. [EXPLAIN WHY: e.g. I was loading/unloading goods within the permitted time; I was picking up or dropping off a passenger; I was displaying a valid permit/ticket; the restriction had ended by the time I parked.]

[IF PROCEDURAL ERROR:]
The PCN does not comply with the procedural requirements of the Traffic Management Act 2004. [SPECIFY: e.g. the PCN was not correctly served; the wrong contravention code was used; the PCN does not accurately describe the location; the civil enforcement officer did not observe the vehicle for the required period.]

[IF MITIGATING CIRCUMSTANCES:]
I accept that I may have technically contravened the restriction, but there were mitigating circumstances beyond my control. [EXPLAIN: e.g. medical emergency; vehicle breakdown; sudden illness; road closure that prevented returning to the vehicle.] I enclose supporting evidence of these circumstances.

[IF SIGNAGE/LINES UNCLEAR:]
The signs and/or road markings at this location are inadequate, unclear, or contradictory. Under the Traffic Signs Regulations and General Directions 2016, the restriction must be properly signed and marked. I do not believe the signage was sufficient to inform a reasonable motorist of the restriction in force. [DESCRIBE SPECIFIC ISSUES: e.g. missing signs, faded lines, contradictory signs.]

Evidence

I enclose the following evidence in support of this challenge:
[LIST YOUR EVIDENCE: e.g. photographs of the location, photographs of signage or road markings, parking ticket/permit, medical evidence, breakdown evidence, appointment letter, witness statement.]

I request that this PCN be cancelled. If this informal challenge is rejected and a Notice to Owner is issued, I will make formal representations and, if necessary, appeal to the [Traffic Penalty Tribunal / London Tribunals].

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'Replace all placeholders with your actual details.',
      'Select the ground(s) that apply to your situation and delete the others.',
      'Gather and attach all supporting evidence before sending.',
      'Send as soon as possible. The informal challenge should be made within 14 days to preserve the discounted payment option if your challenge is rejected.',
      'If your informal challenge is rejected, the council will issue a Notice to Owner. You then have 28 days to make a formal representation.',
      'If formal representations are rejected, you can appeal to the Traffic Penalty Tribunal (outside London) or London Tribunals (in London).',
    ],
    tips: [
      'Council PCNs are different from private parking charges. They are issued under statute and have a formal appeal process with an independent tribunal.',
      'If you pay within 14 days (or 21 days if served by post), you usually get a 50% discount. Making an informal challenge pauses this deadline.',
      'Take photographs of the location, signage, and road markings as soon as possible after receiving the PCN.',
      'Check Google Street View for historical images of the signage. This can help if signs have been changed since your contravention.',
      'The Traffic Penalty Tribunal and London Tribunals are independent of the council. Adjudicators frequently cancel PCNs on procedural grounds.',
      'If the contravention code on the PCN is wrong, this can be grounds for cancellation.',
    ],
    relatedTemplates: ['mitigating-circumstances-letter', 'anpr-error-appeal-letter'],
    seoTitle: 'Council PCN Appeal Letter Template | Free Download | FineCheck',
    seoDescription: 'Free council parking fine appeal letter template. Covers informal challenges under the Traffic Management Act 2004. For use with any UK council PCN.',
  },
  {
    slug: 'popla-appeal-letter',
    title: 'POPLA Escalation Appeal Template',
    category: 'escalation',
    description: 'A template for escalating your appeal to POPLA (Parking on Private Land Appeals), the independent appeals service for operators who are members of the BPA (British Parking Association). Use this after your initial appeal to the operator has been rejected.',
    whenToUse: 'Use this template after your appeal to a BPA-member operator (such as ParkingEye, UKPC, APCOA, Excel Parking, or Horizon Parking) has been rejected. You have 28 days from the date of the operator\'s rejection letter to submit your appeal to POPLA. POPLA\'s decision is binding on the operator but not on you.',
    letterTemplate: `POPLA Appeal Submission

Appellant: [YOUR NAME]
Address: [YOUR ADDRESS], [YOUR CITY], [YOUR POSTCODE]
PCN Reference: [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Operator: [OPERATOR NAME]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]
Date Operator Rejected Appeal: [DATE OF REJECTION]

Dear POPLA Assessor,

I am appealing the decision of [OPERATOR NAME] to reject my challenge to the above parking charge. I believe the charge should be cancelled for the following reasons.

Summary of Grounds

1. Non-Compliance with the BPA Code of Practice

The operator is required to comply with the BPA Approved Operator Scheme Code of Practice. I contend that the operator has failed to meet the required standards in the following respects:

[SELECT ALL THAT APPLY AND PROVIDE DETAILS:]
- Signage at the site was inadequate, unclear, or non-compliant. [DESCRIBE SPECIFIC ISSUES.]
- The required grace period was not applied or was not clearly communicated.
- The terms and conditions were not prominently displayed at all entrances.
- The charge exceeds the level permitted under the BPA Code.

2. POFA 2012 Non-Compliance

Under Schedule 4 of the Protection of Freedoms Act 2012, the operator must serve a compliant Notice to Keeper within 14 days. I contend that the NtK was either served late, did not contain the prescribed wording, or was otherwise non-compliant. Without a valid NtK, the operator cannot transfer liability to the registered keeper.

[PROVIDE SPECIFIC DETAILS: date NtK received, any wording issues, proof of late service.]

3. Inadequate Evidence

The operator has not provided sufficient evidence to prove that the alleged contravention occurred. [DESCRIBE: e.g. ANPR images are unclear, timestamps are unreliable, no evidence of my vehicle at the location at the relevant time.]

4. Additional Grounds

[ADD ANY OTHER SPECIFIC GROUNDS: mitigating circumstances, payment system failures, permit issues, disability, emergency, etc.]

Evidence Enclosed

I enclose the following evidence in support of this appeal:
[LIST ALL EVIDENCE: photographs of signage, the NtK envelope with postmark, ANPR images received via SAR, correspondence with the operator, receipts, medical evidence, etc.]

I respectfully request that the POPLA Assessor cancels this parking charge. The operator has not met the required standards and the charge should not stand.

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'You must submit your POPLA appeal within 28 days of the operator rejecting your initial appeal.',
      'POPLA appeals are submitted online at popla.co.uk. Use this template as the basis for your submission.',
      'Include all grounds for appeal. POPLA considers the full case, not just what the operator addressed.',
      'Upload all supporting evidence: photos, correspondence, SAR responses, receipts, and any other relevant documents.',
      'POPLA\'s decision is binding on the operator. If POPLA rules in your favour, the charge is cancelled.',
      'If POPLA rules against you, their decision is not binding on you, but the operator may continue to pursue the charge.',
    ],
    tips: [
      'POPLA assessors are independent and frequently rule against operators, especially on signage and NtK compliance grounds.',
      'Be thorough. Include every ground for appeal, even if you think some are weaker than others.',
      'Request your ANPR images and any other data held about you via a Subject Access Request (SAR) before submitting to POPLA.',
      'Check the POPLA website for their specific evidence requirements and file size limits.',
      'Keep your submission factual and concise. POPLA assessors handle a high volume of cases and appreciate clear, well-structured appeals.',
      'If the operator did not respond to your initial appeal within a reasonable time, mention this.',
    ],
    relatedTemplates: ['parkingeye-appeal-letter', 'ukpc-appeal-letter', 'apcoa-appeal-letter', 'anpr-error-appeal-letter'],
    seoTitle: 'POPLA Appeal Letter Template | Free Escalation Template | FineCheck',
    seoDescription: 'Free POPLA appeal template for escalating rejected parking charge appeals. Covers BPA Code, POFA 2012, signage, and evidence requirements.',
  },
  {
    slug: 'ias-appeal-letter',
    title: 'IAS Escalation Appeal Template',
    category: 'escalation',
    description: 'A template for escalating your appeal to the IAS (Independent Appeals Service), the appeals body for operators who are members of the IPC (International Parking Community). Use this after your initial appeal to an IPC-member operator has been rejected.',
    whenToUse: 'Use this template after your appeal to an IPC-member operator (such as Smart Parking, Britannia Parking, or Parking Control Management) has been rejected. You have 28 days from the date of rejection to submit to the IAS. The IAS process is similar to POPLA but applies the IPC Code of Practice rather than the BPA Code.',
    letterTemplate: `IAS Appeal Submission

Appellant: [YOUR NAME]
Address: [YOUR ADDRESS], [YOUR CITY], [YOUR POSTCODE]
PCN Reference: [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Operator: [OPERATOR NAME]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]
Date Operator Rejected Appeal: [DATE OF REJECTION]

Dear IAS Adjudicator,

I am appealing the decision of [OPERATOR NAME] to uphold the above parking charge. I believe the charge should be cancelled for the following reasons.

1. Non-Compliance with the IPC Code of Practice

The operator is bound by the IPC Code of Practice. I contend that the operator has failed to comply in the following respects:

[SELECT AND ADAPT ALL THAT APPLY:]
- Signage at the site was not adequate, prominent, or compliant with the IPC Code. [DESCRIBE: e.g. signs were missing from entrances, too small, illegible, or did not contain the required information.]
- The IPC Code requires a "consideration period" (grace period) at the start and end of a parking session. I request confirmation that this was applied. If no grace period was allowed, this is a breach of the Code.
- The terms and conditions were not displayed clearly enough for a reasonable motorist to understand them before entering the car park.
- The charge amount exceeds what is permitted under the IPC Code.

2. POFA 2012 Non-Compliance

Under the Protection of Freedoms Act 2012, Schedule 4, the Notice to Keeper must be served within 14 days and must contain the prescribed statutory wording. I contend that the operator has failed to comply with these requirements. [PROVIDE DETAILS: date NtK received, any deficiencies in the wording, evidence of late service.]

3. Insufficient Evidence

The operator has not provided adequate evidence to support the alleged contravention. [DESCRIBE: e.g. ANPR images are unclear or do not show the vehicle registration; timestamps are inconsistent; no manual enforcement evidence.]

4. Additional Grounds

[ADD ANY FURTHER GROUNDS: payment issues, permit displayed, mitigating circumstances, disability, emergency, etc.]

Supporting Evidence

I enclose the following:
[LIST: photographs, correspondence, NtK with envelope, ANPR images from SAR, payment receipts, medical evidence, etc.]

I respectfully ask the IAS Adjudicator to cancel this parking charge. The operator has not demonstrated compliance with the IPC Code or POFA 2012, and the charge is not supported by adequate evidence.

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'Submit your IAS appeal within 28 days of the operator\'s rejection.',
      'IAS appeals are submitted online at theias.org. Use this template to structure your submission.',
      'Include all relevant grounds. The IAS considers the full case, not just the points the operator addressed.',
      'Upload all supporting evidence with your submission.',
      'The IAS decision is binding on the operator. If they rule in your favour, the charge is cancelled.',
      'Keep your submission clear, factual, and well-organised.',
    ],
    tips: [
      'The IAS applies the IPC Code of Practice, which has different requirements from the BPA Code (used by POPLA).',
      'The IPC Code\'s "consideration period" (grace period) is a common ground for successful appeals.',
      'Request a Subject Access Request from the operator before submitting to the IAS so you have all available evidence.',
      'The IAS website has guidance on what evidence to include and how to structure your appeal.',
      'IAS adjudicators are independent and regularly cancel charges where operators fail to meet the Code requirements.',
      'If the operator did not respond to your initial appeal within 28 days, the charge should be cancelled automatically.',
    ],
    relatedTemplates: ['smart-parking-appeal-letter', 'anpr-error-appeal-letter', 'mitigating-circumstances-letter'],
    seoTitle: 'IAS Appeal Letter Template | Free Escalation Template | FineCheck',
    seoDescription: 'Free IAS appeal template for IPC member parking charges. Covers IPC Code of Practice, grace periods, POFA 2012, and evidence requirements.',
  },
  {
    slug: 'anpr-error-appeal-letter',
    title: 'ANPR Evidence Challenge Template',
    category: 'defence',
    description: 'A specialised template for challenging parking charges based on ANPR (Automatic Number Plate Recognition) evidence errors. Covers common ANPR failures including misreads, timing errors, camera angles, and data protection issues.',
    whenToUse: 'Use this template when you believe the ANPR evidence used to issue your parking charge is inaccurate or insufficient. Common situations include: the camera misread your number plate, the entry/exit times are wrong, the images are unclear, or the ANPR system failed to record one of your visits (e.g., you left and re-entered the car park). This template can be used for any private operator that uses ANPR cameras.',
    letterTemplate: `[YOUR NAME]
[YOUR ADDRESS]
[YOUR CITY]
[YOUR POSTCODE]

[DATE]

[OPERATOR NAME]
[OPERATOR ADDRESS]

Dear Sir or Madam,

Re: Parking Charge Notice [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]

I am writing to formally appeal the above parking charge notice on the grounds that the ANPR evidence relied upon to issue this charge is inaccurate and/or insufficient.

ANPR Evidence Disclosure Request

Under the UK GDPR and the Data Protection Act 2018, I have a right to access the personal data you hold about me, including ANPR images. I request that you provide the following within 30 days:

(a) The full, unedited ANPR photographs showing my vehicle at the point of entry and exit, including clear images of the registration plate.
(b) The exact timestamps recorded for entry and exit.
(c) Details of the ANPR system used, including the make, model, and software version.
(d) The most recent calibration and maintenance records for the ANPR cameras at this location.
(e) Any other data held about my vehicle or this alleged contravention.

Grounds for Challenge

1. Image Quality and Accuracy

ANPR systems are known to produce misreads. I do not accept that the images clearly and unambiguously identify my vehicle. If the registration plate is not fully legible in both the entry and exit images, the charge is not supported by adequate evidence.

2. Timing Accuracy

ANPR cameras must be accurately calibrated to ensure timestamps are reliable. I challenge the accuracy of the recorded entry and exit times. Even small timing errors can mean the difference between a legitimate stay and an alleged overstay. I request evidence that the cameras were calibrated and functioning correctly on the date in question.

3. Multiple Visits Not Recorded

[IF APPLICABLE:] I visited this car park on multiple occasions on the same day. The ANPR system may have failed to record my exit and subsequent re-entry, instead treating two separate short visits as one continuous long stay. This is a well-documented limitation of ANPR technology.

4. Partial Captures and Cloning

ANPR systems can capture partial plates or match plates incorrectly. I request confirmation that the images relied upon show my specific vehicle (make, model, and colour), not just a registration number. Number plate cloning is also a possibility that cannot be ruled out without clear photographic evidence.

Given these concerns, I do not believe the ANPR evidence is sufficient to support this charge. I request that the charge be cancelled. If my appeal is rejected, I will escalate the matter to [POPLA / IAS] as appropriate.

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'Replace all placeholders with your actual details.',
      'If you visited the car park more than once on the same day, include section 3 about multiple visits. Otherwise, delete it.',
      'This template doubles as a Subject Access Request (SAR). The operator must respond within 30 days under the UK GDPR.',
      'If the operator provides ANPR images that are unclear, use this as evidence in your escalation to POPLA or the IAS.',
      'Send by recorded delivery and keep a copy.',
      'Replace [POPLA / IAS] with the correct body based on whether the operator is a BPA or IPC member.',
    ],
    tips: [
      'ANPR systems struggle in low light, rain, and when plates are dirty or damaged. Note the weather conditions on the day if relevant.',
      'If you suspect your number plate has been cloned, report it to the police and obtain a crime reference number.',
      'Many successful appeals are based on ANPR timing errors. Even a few minutes can be crucial.',
      'The SAR request in this template forces the operator to disclose their evidence. If they fail to respond within 30 days, this is a breach of data protection law.',
      'Take your own photographs of the ANPR cameras at the site, noting their positions and any obstructions.',
      'If you made two separate visits, check whether you have any evidence (receipts, card transactions) that proves you left and returned.',
    ],
    relatedTemplates: ['parkingeye-appeal-letter', 'smart-parking-appeal-letter', 'popla-appeal-letter', 'ias-appeal-letter'],
    seoTitle: 'ANPR Evidence Challenge Template | Free Download | FineCheck',
    seoDescription: 'Free ANPR challenge template for parking charge appeals. Challenge camera misreads, timing errors, and poor image quality. Includes Subject Access Request.',
  },
  {
    slug: 'mitigating-circumstances-letter',
    title: 'Mitigating Circumstances Appeal Template',
    category: 'defence',
    description: 'A template for appealing a parking charge (private or council) on the grounds of mitigating circumstances. Covers medical emergencies, vehicle breakdowns, personal emergencies, and other situations beyond your control.',
    whenToUse: 'Use this template when you accept that a parking contravention may have technically occurred, but there were genuine mitigating circumstances that prevented you from complying with the parking terms. This applies to medical emergencies, vehicle breakdowns, sudden illness, caring for a vulnerable person, or other situations where you could not reasonably have returned to your vehicle or moved it in time.',
    letterTemplate: `[YOUR NAME]
[YOUR ADDRESS]
[YOUR CITY]
[YOUR POSTCODE]

[DATE]

[OPERATOR NAME OR COUNCIL NAME]
[THEIR ADDRESS]

Dear Sir or Madam,

Re: [Parking Charge Notice / Penalty Charge Notice] [PCN REFERENCE]
Vehicle Registration: [VEHICLE REG]
Location: [LOCATION]
Date of Alleged Contravention: [DATE OF ALLEGED CONTRAVENTION]

I am writing to appeal the above charge on the grounds of mitigating circumstances. While I understand the parking restrictions at this location, I was unable to comply due to circumstances entirely beyond my control.

Description of Circumstances

[CHOOSE AND ADAPT THE RELEVANT SECTION:]

[MEDICAL EMERGENCY:]
On the date in question, I experienced a medical emergency that prevented me from returning to my vehicle within the permitted time. [DESCRIBE: e.g. I was taken ill while shopping and required medical attention; I was attending a hospital appointment that overran significantly; I was assisting someone who collapsed.] I enclose evidence of this emergency, including [medical records / hospital appointment letter / ambulance report / GP letter].

[VEHICLE BREAKDOWN:]
My vehicle suffered a mechanical breakdown at the location and I was physically unable to move it. [DESCRIBE: e.g. the battery died; the engine would not start; I had a flat tyre.] I contacted a recovery service and the vehicle was moved as soon as possible. I enclose evidence of the breakdown, including [breakdown recovery receipt / mechanic's invoice / roadside assistance confirmation].

[PERSONAL EMERGENCY:]
I was dealing with a personal emergency that prevented me from returning to my vehicle. [DESCRIBE: e.g. I received a phone call about a family emergency; I was caring for a distressed child; I was assisting someone in danger.] I enclose supporting evidence where available.

[OTHER CIRCUMSTANCES:]
[DESCRIBE YOUR SPECIFIC SITUATION and explain why you could not comply with the parking terms.]

Supporting Evidence

I enclose the following evidence:
[LIST ALL EVIDENCE: medical letters, appointment confirmations, breakdown receipts, witness statements, photographs, emergency call logs, etc.]

Request

I respectfully request that this charge be cancelled on compassionate grounds given the circumstances described above. I am a responsible motorist and would not have contravened the restrictions had it been within my power to avoid it.

If this appeal is rejected, I [will escalate to POPLA/IAS / will make formal representations and appeal to the Traffic Penalty Tribunal/London Tribunals] as appropriate.

Yours faithfully,

[YOUR NAME]`,
    instructions: [
      'Replace all placeholders with your actual details.',
      'Choose the section that best matches your circumstances and delete the others.',
      'Gather as much supporting evidence as possible. The stronger your evidence, the more likely your appeal will succeed.',
      'Be honest and specific about what happened. Do not exaggerate.',
      'Send as quickly as possible, especially for council PCNs where the 14-day discount period may apply.',
      'If you are appealing to a private operator, replace the escalation line with the relevant body (POPLA for BPA members, IAS for IPC members).',
      'For council PCNs, the escalation route is the Traffic Penalty Tribunal (outside London) or London Tribunals (in London).',
    ],
    tips: [
      'Mitigating circumstances appeals succeed most often when supported by strong, independent evidence.',
      'A GP or hospital letter is the most persuasive evidence for medical emergencies.',
      'For vehicle breakdowns, keep the recovery receipt and any garage invoice.',
      'POPLA and the Traffic Penalty Tribunal both accept mitigating circumstances as grounds for cancellation.',
      'Even if you believe your circumstances are compelling, always check for procedural grounds as well (NtK timing, signage). You can include both.',
      'If you have a disability that contributed to the situation, mention this and provide evidence of your Blue Badge or disability if relevant.',
    ],
    relatedTemplates: ['council-pcn-appeal-letter', 'parkingeye-appeal-letter', 'popla-appeal-letter'],
    seoTitle: 'Mitigating Circumstances Appeal Template | Free Download | FineCheck',
    seoDescription: 'Free mitigating circumstances appeal letter template for parking fines. Covers medical emergencies, breakdowns, and personal emergencies. Works for private and council charges.',
  },
];

export function getTemplateBySlug(slug: string): AppealTemplate | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}

export function getTemplatesByCategory(category: AppealTemplate['category']): AppealTemplate[] {
  return TEMPLATES.filter((t) => t.category === category);
}
