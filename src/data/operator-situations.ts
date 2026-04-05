export interface OperatorSituation {
  operatorSlug: string;
  situationSlug: string;
  slug: string;
  title: string;
  locationName: string;
  description: string;
  specificDefences: string[];
  content: string;
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const OPERATOR_SITUATIONS: OperatorSituation[] = [
  {
    operatorSlug: 'parkingeye',
    situationSlug: 'supermarket-parking-fine',
    slug: 'parkingeye-aldi',
    title: 'ParkingEye Fine at Aldi',
    locationName: 'Aldi',
    description: 'ParkingEye manages the vast majority of Aldi car parks across the UK, using ANPR cameras to enforce a 90-minute time limit at most stores. If you have received a ParkingEye charge at Aldi, you are not alone; this is one of the most common private parking charges in the country.',
    specificDefences: [
      'The 90-minute time limit is arguably too short for a full weekly shop, especially if the store was busy or you visited the pharmacy',
      'ParkingEye must apply a 10-minute grace period under the BPA Code of Practice, so overstays of less than 100 minutes should not be charged',
      'Check ANPR entry and exit images for accuracy; request them via Subject Access Request if not provided',
      'Aldi store managers can sometimes request ParkingEye to cancel charges for genuine customers; ask in-store first',
      'Signage at the car park entrance and throughout must clearly state the 90-minute limit, ANPR monitoring, and the charge amount',
      'The Notice to Keeper must be served within 14 days under POFA 2012; ParkingEye occasionally misses this deadline on high-volume sites'
    ],
    content: `## ParkingEye at Aldi: What You Need to Know

ParkingEye is the dominant parking operator at Aldi stores across the UK. The standard arrangement is a 90-minute maximum stay enforced by ANPR cameras that photograph your number plate on entry and exit. If the system calculates that you stayed longer than 90 minutes (plus any grace period), a parking charge of typically £70 to £100 is generated and sent to the registered keeper.

### Why 90 Minutes Is Often Not Enough

Aldi's business model is built around efficiency, but a 90-minute parking limit does not account for the realities of a busy shopping trip. If you arrive during peak hours, you may spend 10 to 15 minutes finding a space and walking to the entrance. A full trolley shop at Aldi takes 30 to 45 minutes. Add another 15 minutes for loading the car. That is already 55 to 75 minutes before you factor in any queuing at the checkout, visiting the Specialbuys section, or using the in-store bakery or toilet facilities.

If you also popped to an adjacent store (as many Aldi locations share car parks with other shops), 90 minutes becomes unrealistic. This is a legitimate point to raise in your appeal, particularly if you were a genuine Aldi customer with a receipt to prove it.

### The Store Manager Route

Before going through ParkingEye's formal appeal process, it is worth speaking to the Aldi store manager directly. Some Aldi stores have a process for requesting that ParkingEye cancel charges for genuine customers. Bring your shopping receipt, explain the situation, and ask the manager to contact ParkingEye. This does not always work, but it costs nothing and can resolve the issue quickly.

Not all Aldi managers are aware of this process or willing to engage with it. If the store cannot help, proceed with the formal appeal to ParkingEye and, if rejected, to POPLA.

### ParkingEye's Court Threat

ParkingEye is one of the few private operators that regularly pursues unpaid charges through the County Court via their solicitors DCB Legal. This is important context: while most private parking operators rely on threatening letters, ParkingEye does sometimes follow through. However, they do not take every case to court, and charges with procedural flaws (late NtK, inadequate signage, ANPR errors) are less likely to be pursued.

If you have strong appeal grounds, use them. The risk of court action should not deter you from challenging a charge that you believe is invalid.

### How to Build Your Aldi Appeal

Start by checking the NtK date against the date of your visit. If more than 14 days elapsed, the NtK is late and the charge fails on this ground alone. Next, photograph the signage at your local Aldi on your next visit. Check every entrance, and look for any signs that are obscured or missing. Then gather your shopping receipt as evidence of being a genuine customer. Finally, check the ANPR images; if they are unclear or the timestamps seem wrong, challenge the evidence.

Submit your appeal to ParkingEye clearly stating each ground, with evidence attached. Keep copies of everything. If rejected, escalate to POPLA within 28 days.`,
    faqs: [
      {
        question: 'How long can you park at Aldi?',
        answer: 'Most Aldi stores enforced by ParkingEye allow 90 minutes of free parking. Some larger stores may allow 2 hours. The time limit is displayed on signage at the car park entrance. A 10-minute grace period should also be applied under the BPA Code of Practice.'
      },
      {
        question: 'Will ParkingEye take me to court over an Aldi parking fine?',
        answer: 'ParkingEye does pursue some unpaid charges through the County Court via DCB Legal. However, they do not take every case to court, and cases with strong procedural defences (late NtK, poor signage, ANPR errors) are less likely to be pursued. If you have valid grounds, appeal.'
      },
      {
        question: 'Can the Aldi store manager cancel my ParkingEye fine?',
        answer: 'Some Aldi store managers can request that ParkingEye cancel charges for genuine customers. Bring your receipt and ask the manager directly. Not all stores offer this, and it is not guaranteed, but it is worth trying before formal appeal.'
      },
      {
        question: 'What is the ParkingEye charge at Aldi?',
        answer: 'The standard ParkingEye charge at Aldi is typically £70 to £100, with an early payment discount reducing it to £40 to £60 if paid within 14 days. If unpaid, the charge can increase through additional administration fees.'
      },
      {
        question: 'How do I appeal a ParkingEye fine from Aldi?',
        answer: 'First, try speaking to the Aldi store manager. If that does not resolve it, appeal formally to ParkingEye within 28 days, stating your grounds (late NtK, signage issues, grace period, genuine customer). If rejected, escalate to POPLA within 28 days of rejection.'
      }
    ],
    seoTitle: 'ParkingEye Fine at Aldi | How to Appeal Aldi Parking Charges (2026)',
    seoDescription: 'Got a ParkingEye fine at Aldi? Free guide to appealing Aldi parking charges. Covers the 90-minute limit, ANPR evidence, grace periods, and your best chances of success.'
  },
  {
    operatorSlug: 'parkingeye',
    situationSlug: 'supermarket-parking-fine',
    slug: 'parkingeye-lidl',
    title: 'ParkingEye Fine at Lidl',
    locationName: 'Lidl',
    description: 'ParkingEye operates ANPR enforcement at many Lidl stores across the UK. Lidl car parks typically have a 90-minute to 2-hour time limit. Charges of £70 to £100 are issued for overstays.',
    specificDefences: [
      'The time limit (typically 90 minutes to 2 hours) must be realistic for the type of store; a large Lidl with bakery and promotional aisles may justify longer visits',
      'The BPA Code requires a 10-minute grace period beyond the advertised maximum stay',
      'Lidl store managers may be able to request charge cancellation for genuine customers',
      'Signage must be displayed at all entry points and throughout the car park',
      'ANPR evidence can be challenged if entry or exit images are unclear',
      'NtK must be served within 14 days under POFA 2012'
    ],
    content: `## ParkingEye at Lidl: Understanding Your Charge

ParkingEye enforces parking at many Lidl stores across the UK using ANPR camera technology. The maximum stay varies by location but is typically 90 minutes to 2 hours. If the ANPR system records your vehicle as having exceeded this limit, a parking charge is automatically generated and sent to the registered keeper via DVLA data.

### Lidl Shopping Patterns

Lidl stores are designed to encourage browsing. The promotional middle aisle (often called the "Aisle of Wonder") features regularly changing non-food items that attract customers to spend additional time in-store. Combined with the bakery section, fresh produce area, and potentially long checkout queues, a Lidl visit can easily exceed 90 minutes, particularly during busy weekend periods.

If you received a charge while doing a genuine shop at Lidl, your receipt is valuable evidence. It shows the time of your transaction and confirms you were a legitimate customer. If you also browsed the promotional aisle, bought items from the bakery, or did any other shopping that extended your stay, mention this in your appeal.

### Shared Car Parks

Some Lidl stores share their car park with neighbouring businesses. If the car park serves multiple shops and you visited more than one, the time limit is being applied to a multi-purpose visit. Check whether the signage adequately explains that the time limit applies even when visiting other stores, and whether the limit is reasonable for the combined purpose of the car park.

### How to Resolve Your Lidl Charge

Try the Lidl store first. Some store managers will contact ParkingEye on behalf of genuine customers. If that route is unavailable, appeal formally to ParkingEye within 28 days. State your grounds clearly: NtK timing, signage compliance, grace period, ANPR evidence quality, and your status as a genuine customer with receipt evidence.

If ParkingEye rejects your appeal, escalate to POPLA within 28 days of the rejection. POPLA is the independent appeals service for BPA members. Their decision is binding on ParkingEye but not on you.

### ParkingEye Court Risks

ParkingEye does pursue some cases through the County Court. However, they are more likely to pursue straightforward cases where the evidence is clear. If your charge has procedural flaws (late NtK, poor signage, ANPR errors), the risk of court action is lower. Do not let the threat of court action prevent you from appealing a charge you believe is unfair.`,
    faqs: [
      {
        question: 'How long can I park at Lidl?',
        answer: 'Lidl parking limits vary by store but are typically 90 minutes to 2 hours. Check the signage at your local store entrance. A 10-minute grace period should also be applied under the BPA Code of Practice.'
      },
      {
        question: 'Can Lidl cancel my ParkingEye charge?',
        answer: 'Some Lidl store managers can request that ParkingEye cancel charges for genuine customers. Bring your receipt and ask the manager. If the store cannot help, proceed with the formal appeal process.'
      },
      {
        question: 'Is 90 minutes enough for a Lidl shop?',
        answer: 'For a quick shop, 90 minutes is usually sufficient. For a full weekly shop during busy periods, especially if you browse the promotional aisle, use the bakery, and queue at checkout, 90 minutes can be tight. This is a relevant argument in your appeal.'
      },
      {
        question: 'What if I visited another shop next to Lidl?',
        answer: 'If the car park serves multiple businesses and you visited more than one, check whether the signage made clear that the time limit applies to the entire visit, including visits to other stores. If not, this weakens the operator case.'
      },
      {
        question: 'How do I get the ANPR evidence from ParkingEye?',
        answer: 'You can request your ANPR images through a Subject Access Request (SAR) to ParkingEye under GDPR. They must respond within one month. The images should show your number plate clearly, and the timestamps should match your actual visit.'
      }
    ],
    seoTitle: 'ParkingEye Fine at Lidl | How to Appeal Lidl Parking Charges (2026)',
    seoDescription: 'Got a ParkingEye fine at Lidl? Free guide to appealing. Covers time limits, ANPR evidence, grace periods, and step-by-step appeal instructions.'
  },
  {
    operatorSlug: 'parkingeye',
    situationSlug: 'hospital-parking-fine',
    slug: 'parkingeye-hospital',
    title: 'ParkingEye Fine at a Hospital',
    locationName: 'Hospital',
    description: 'ParkingEye manages car parks at many NHS hospitals across the UK. Hospital charges are particularly controversial, with patients and visitors penalised when appointments overrun. Compassionate grounds are a powerful defence.',
    specificDefences: [
      'Compassionate circumstances: your appointment overran, you had a medical emergency, or you were visiting a seriously ill patient',
      'NHS guidance states hospital parking should not be a barrier to healthcare; ParkingEye should follow this when assessing appeals',
      'Hospital PALS (Patient Advice and Liaison Service) teams can often intervene with ParkingEye on your behalf',
      'Confusing payment systems in hospitals (multiple tariff zones, machine failures) are a valid defence',
      'The NtK must be served within 14 days; high-volume hospital sites often miss this deadline',
      'Many hospital trusts have agreements allowing charge cancellation for genuine patients and visitors'
    ],
    content: `## ParkingEye at Hospitals: Your Appeal Options

Receiving a ParkingEye charge at a hospital is a frustrating experience. Whether you were a patient whose appointment ran late, a visitor supporting a loved one, or a staff member caught out by confusing rules, hospital parking charges are widely seen as unfair. The good news is that hospital-related appeals have some of the strongest grounds available.

### Why Hospital Charges Are Different

Hospital parking fines carry a unique moral weight that other types of charge do not. The NHS is built on the principle of free healthcare at the point of use, and a parking charge that punishes a patient for their clinic running late undermines that principle. This moral argument, while not strictly a legal defence, influences how independent assessors view hospital appeals at POPLA.

More practically, the UK Government has published guidance stating that hospital parking should not deter patients from seeking treatment. While this guidance is not legally binding on ParkingEye, it sets an expectation that hospital charges should be handled with greater flexibility than charges at commercial sites.

### The Appointment Overrun Defence

If your NHS appointment ran beyond the scheduled time, this is one of the strongest grounds for appeal. NHS clinics regularly run late, and patients have no control over this. To use this defence effectively, get written confirmation from the hospital of your appointment time and any delays.

Contact the clinic directly, or ask the hospital PALS team to provide a letter. The letter should confirm your appointment time, the actual time you were seen, and when your appointment concluded. Combine this with your parking ticket or payment evidence showing you had paid for the expected duration.

### Using the Hospital PALS Team

Every NHS hospital has a PALS (Patient Advice and Liaison Service) team. PALS teams are experienced in handling parking complaints and often have a direct line to ParkingEye for cancellation requests. Contact PALS, explain your situation, and ask them to intervene. Many charges are cancelled at this stage without needing a formal appeal.

### The Risk of ParkingEye Court Action

ParkingEye does pursue some unpaid charges to court. However, hospital charges with strong compassionate grounds are less likely to be pursued, particularly where the patient has evidence of appointment delays. If you have genuine medical circumstances and evidence to support them, the risk is low. Even if ParkingEye were to file a claim, a judge is likely to be sympathetic to a patient who overstayed because of hospital delays.

### Building Your Hospital Appeal

Gather your appointment letter, hospital records showing the delay, a PALS support letter, and any receipts for parking payment. Write a clear appeal explaining that you were a genuine patient whose stay was extended by circumstances entirely outside your control. Reference the NHS guidance on hospital parking and the compassionate grounds provisions in the BPA Code of Practice.`,
    faqs: [
      {
        question: 'Can ParkingEye fine me at an NHS hospital?',
        answer: 'Yes. ParkingEye manages car parks at many NHS hospitals under contract. The charges are private parking charges, not NHS fines. However, hospital charges have strong appeal grounds, particularly compassionate circumstances and appointment delays.'
      },
      {
        question: 'Will the hospital help me appeal my ParkingEye charge?',
        answer: 'Most hospitals will help. Contact the PALS (Patient Advice and Liaison Service) team, which handles parking complaints. They often have a direct relationship with ParkingEye and can request charge cancellation for genuine patients and visitors.'
      },
      {
        question: 'My appointment ran 2 hours late. Can I still be charged?',
        answer: 'You can still receive a charge, but appointment delays are one of the strongest grounds for appeal. Get written confirmation from the hospital of the delay and include it in your appeal. Most assessors at POPLA are sympathetic to genuine appointment overruns.'
      },
      {
        question: 'Is hospital parking free in England?',
        answer: 'Hospital parking is not universally free in England, though it is free in Scotland and largely free in Wales. In England, some trusts have adopted free parking, and certain groups (disabled patients, frequent outpatients) are entitled to free or reduced parking.'
      },
      {
        question: 'Should I pay the discounted rate or appeal?',
        answer: 'If you have genuine grounds for appeal (appointment delay, medical emergency, PALS support), appeal first. The 14-day discount deadline is paused while your appeal is being considered. If your appeal fails, you can still pay at that point.'
      }
    ],
    seoTitle: 'ParkingEye Hospital Fine | Appeal NHS Car Park Charges (2026)',
    seoDescription: 'Got a ParkingEye fine at a hospital? Free guide to appealing NHS hospital parking charges. Covers appointment delays, compassionate grounds, PALS support, and POPLA appeals.'
  },
  {
    operatorSlug: 'parkingeye',
    situationSlug: 'supermarket-parking-fine',
    slug: 'parkingeye-tesco',
    title: 'ParkingEye Fine at Tesco',
    locationName: 'Tesco',
    description: 'ParkingEye operates ANPR enforcement at many Tesco stores, including Express, Metro, Superstore, and Extra formats. Time limits vary by store type, typically from 1 hour at Express stores to 3 hours at Extra locations.',
    specificDefences: [
      'Tesco has a store-level appeals process where managers can request ParkingEye cancel charges for genuine customers',
      'Time limits vary by store format; check the signage matches the store type (1 hour Express, 2 hours Metro/Superstore, 3 hours Extra)',
      'The 10-minute grace period must be applied under the BPA Code of Practice',
      'If you used the Tesco pharmacy, optician, or cafe, your visit naturally takes longer; argue the time limit does not account for these services',
      'Signage must be present and clear at every car park entrance',
      'NtK must be served within 14 days under POFA 2012'
    ],
    content: `## ParkingEye at Tesco: What You Need to Know

ParkingEye manages parking at many Tesco stores across the UK. Tesco operates several store formats, each with different parking arrangements: Tesco Express (small convenience stores, often 1-hour limit), Tesco Metro (medium urban stores, 1.5 to 2-hour limit), Tesco Superstore (large stores, 2 to 3-hour limit), and Tesco Extra (the largest format, typically 3-hour limit).

### The Tesco Store-Level Process

Tesco has one of the better store-level resolution processes for parking charges. If you are a genuine Tesco customer who overstayed, your first step should be to visit the store and speak to the duty manager. Bring your shopping receipt and explain the situation.

Tesco store managers can submit a request to ParkingEye to have the charge cancelled. This process is well-established at many stores and is often the quickest route to resolution. Not every request is guaranteed to succeed, but for a first offence with receipt evidence, the success rate is high.

### Tesco Pharmacy and Additional Services

Tesco stores often include additional services that extend visit times: pharmacies (prescription collection can take 15 to 30 minutes), opticians (eye tests typically take 30 to 45 minutes), cafes (a sit-down meal adds 30 to 60 minutes), clothing sections, and mobile phone shops.

If you used any of these services, your visit naturally takes longer than a standard grocery shop. In your appeal, highlight which additional services you used and how this contributed to the overstay. The car park exists to serve all Tesco customers, including those using in-store services.

### Different Time Limits for Different Formats

The time limit at a Tesco Express should not be the same as at a Tesco Extra, because the stores serve different purposes. If you received a charge at a large Tesco Extra with a time limit that seems too short for the store format (multiple departments, cafe, petrol station, etc.), challenge the reasonableness of the limit.

### Building Your Tesco Appeal

Step 1: Visit the store and try the manager route first. Step 2: If the store cannot help, gather your receipt, photograph the signage, and check the NtK date. Step 3: Appeal formally to ParkingEye with all grounds and evidence. Step 4: If rejected, escalate to POPLA within 28 days.

Keep your tone factual and polite throughout. ParkingEye processes thousands of Tesco appeals, and a clear, evidence-based submission stands the best chance.`,
    faqs: [
      {
        question: 'How long can I park at Tesco?',
        answer: 'It depends on the store format. Tesco Express stores typically allow 1 hour. Tesco Metro and Superstores usually allow 2 to 3 hours. Tesco Extra stores generally allow 3 hours. The exact limit is displayed on signage at the car park entrance.'
      },
      {
        question: 'Can the Tesco manager cancel my ParkingEye fine?',
        answer: 'Yes. Tesco has a well-established store-level process where managers can request ParkingEye cancel charges for genuine customers. Bring your receipt and speak to the duty manager. This is often the quickest route to resolution.'
      },
      {
        question: 'I used the Tesco pharmacy and overstayed. Is that a valid defence?',
        answer: 'Using in-store services like the pharmacy, optician, or cafe naturally extends your visit beyond a standard grocery shop. Highlight this in your appeal and provide evidence (pharmacy receipt, prescription collection timestamp) to show the additional time was spent using Tesco services.'
      },
      {
        question: 'Does ParkingEye operate at all Tesco stores?',
        answer: 'Not all, but many. ParkingEye is the primary operator at Tesco, though some stores may have different arrangements or no enforcement at all. Check the signage at your specific store.'
      },
      {
        question: 'What is the ParkingEye charge at Tesco?',
        answer: 'The standard charge is typically £70 to £100, with an early payment discount reducing it to around £40 to £60 if paid within 14 days.'
      }
    ],
    seoTitle: 'ParkingEye Fine at Tesco | Appeal Tesco Car Park Charges (2026)',
    seoDescription: 'Got a ParkingEye fine at Tesco? Free appeal guide covering time limits by store format, the Tesco manager resolution process, and how to win at POPLA.'
  },
  {
    operatorSlug: 'parkingeye',
    situationSlug: 'supermarket-parking-fine',
    slug: 'parkingeye-morrisons',
    title: 'ParkingEye Fine at Morrisons',
    locationName: 'Morrisons',
    description: 'ParkingEye enforces parking at many Morrisons supermarket car parks using ANPR cameras. Morrisons stores typically allow 2 to 3 hours of free parking, but the in-store cafe, fuel station, and pharmacy can easily push customers over the limit.',
    specificDefences: [
      'Morrisons stores typically allow 2 to 3 hours, which should cover most shopping trips; if the limit was shorter, challenge its reasonableness',
      'The BPA Code requires a 10-minute grace period that must be applied before any charge',
      'Morrisons cafe customers naturally spend longer in-store; argue the time limit does not account for dining',
      'If you filled up at the Morrisons fuel station before or after shopping, this adds time to your visit',
      'Signage at all car park entrances must clearly show the terms',
      'NtK must arrive within 14 days under POFA 2012'
    ],
    content: `## ParkingEye at Morrisons: Understanding Your Options

Morrisons uses ParkingEye to manage parking at many of its supermarket locations. The typical arrangement is 2 to 3 hours of free parking, monitored by ANPR cameras. If you exceed the time limit, ParkingEye issues a charge of typically £70 to £100.

### Why Morrisons Visits Take Longer

Morrisons stores often have features that extend visit times beyond a standard supermarket shop. The Morrisons cafe is a popular destination for families, and a sit-down meal can add 30 to 60 minutes. The fuel station requires additional time, particularly during busy periods. The in-store Market Street deli, bakery, and butcher counters encourage browsing. Some stores also have pharmacies and dry-cleaning services.

If you used any of these services, your extended stay was a natural consequence of using the facilities that Morrisons provides. Include this in your appeal with any relevant receipts or evidence.

### The Store Approach

As with other supermarkets, speaking to the Morrisons store manager is a good first step. Some managers can contact ParkingEye to request charge cancellation for genuine customers. Bring your shopping receipt (and cafe receipt, fuel receipt, etc.) to demonstrate your customer status.

Morrisons customer service can also be contacted through their website or social media channels. Some customers have had success raising the issue with Morrisons corporate, particularly if the store manager was unable to help.

### Combined Visits

Many Morrisons stores are located in retail areas with other shops nearby. If you shopped at Morrisons and then visited an adjacent store, your combined visit may have exceeded the time limit. Check whether the signage makes clear that the time limit applies regardless of whether you visit other stores. If this is not clear on the signs, it weakens the operator's position.

### Building Your Appeal

Gather all evidence: Morrisons shopping receipt, cafe receipt, fuel receipt, pharmacy printout, or any other proof of in-store activity. Photograph the car park signage. Check the NtK date. Then submit a clear, evidence-based appeal to ParkingEye stating all applicable grounds.

If your appeal to ParkingEye is rejected, escalate to POPLA within 28 days. At POPLA, emphasise that you were a genuine customer using Morrisons' own facilities, and that the time limit did not realistically accommodate the services Morrisons provides.`,
    faqs: [
      {
        question: 'How long can I park at Morrisons?',
        answer: 'Most Morrisons stores allow 2 to 3 hours of free parking. The exact time limit is shown on signage at the car park entrance. A 10-minute grace period should also be applied under the BPA Code of Practice.'
      },
      {
        question: 'I had lunch in the Morrisons cafe and overstayed. Can I appeal?',
        answer: 'Yes. Using the Morrisons cafe naturally extends your visit. Include your cafe receipt in your appeal and argue that the time limit should accommodate use of in-store facilities like the cafe.'
      },
      {
        question: 'Can Morrisons help cancel my ParkingEye charge?',
        answer: 'Some Morrisons store managers can request that ParkingEye cancel charges for genuine customers. You can also try contacting Morrisons customer service directly. Bring receipts as evidence of your customer status.'
      },
      {
        question: 'I also filled up with fuel at Morrisons. Does that count?',
        answer: 'Yes. Time spent at the Morrisons fuel station adds to your overall visit duration. If this contributed to your overstay, mention it in your appeal and provide your fuel receipt as evidence.'
      },
      {
        question: 'What if my Morrisons shares a car park with other shops?',
        answer: 'If the car park serves multiple businesses, check whether the signage clearly states the time limit applies to the entire visit. If you visited multiple stores as part of the same trip, this context is relevant to your appeal.'
      }
    ],
    seoTitle: 'ParkingEye Fine at Morrisons | Appeal Morrisons Parking Charges (2026)',
    seoDescription: 'Got a ParkingEye fine at Morrisons? Free guide to appealing. Covers time limits, cafe visits, fuel station stops, and how to get your Morrisons parking charge cancelled.'
  },
  {
    operatorSlug: 'ukpc',
    situationSlug: 'hospital-parking-fine',
    slug: 'ukpc-hospital',
    title: 'UKPC Fine at a Hospital',
    locationName: 'Hospital',
    description: 'UKPC manages parking at several NHS hospitals and healthcare sites across the UK. Hospital charges from UKPC can be challenged on compassionate grounds, appointment delays, and procedural failures.',
    specificDefences: [
      'Compassionate circumstances: appointment overruns, medical emergencies, and visiting critically ill patients are strong appeal grounds',
      'UKPC signage at hospital sites is frequently inadequate, with confusing zone boundaries and unclear tariff information',
      'The hospital PALS team may be able to intervene with UKPC on your behalf',
      'NtK must be served within 14 days under POFA 2012; check the date carefully',
      'UKPC debt collection letters can be aggressive but should not deter you from appealing',
      'NHS guidance expects parking operators at hospitals to treat patients and visitors fairly'
    ],
    content: `## UKPC at Hospitals: Your Appeal Guide

UKPC (UK Parking Control) manages car parks at a number of NHS hospitals and healthcare facilities across the UK. If you have received a UKPC charge at a hospital, you have several strong grounds for appeal, particularly if your visit was extended by medical circumstances.

### UKPC Hospital Enforcement

UKPC uses a combination of ANPR cameras and manual patrols at hospital sites. The charges are typically £60 to £100, with an early payment discount. UKPC is a BPA member, which means they must follow the BPA Code of Practice and use POPLA as their independent appeals service.

Unlike ParkingEye, UKPC has historically been more inconsistent in pursuing unpaid charges to court. While they have taken some cases, they are generally less litigious. This means the risk of court action is lower, though it should not be completely discounted.

### The Compassionate Appeal

Hospital settings provide the strongest compassionate appeal grounds of any parking situation. UKPC, like all BPA members, is expected to consider compassionate circumstances when assessing appeals. If your appointment overran, you were attending an emergency, or you were supporting a distressed patient, explain these circumstances clearly and provide evidence.

The most effective evidence includes a letter from the hospital or clinic confirming appointment times and delays, a PALS support letter, ward visiting records, and any medical correspondence showing the reason for your visit.

### UKPC Signage Issues at Hospitals

Hospital car parks managed by UKPC often have complex signage with multiple zones, tariffs, and restrictions. If the signage was confusing, insufficiently lit, or not visible from where you parked, this is a strong ground for appeal. Hospital visitors are often stressed, unfamiliar with the site, and focused on reaching their appointment or the patient they are visiting. Signage must be clear enough to be understood in these circumstances.

### Debt Collection from UKPC

If you ignore the initial charge, UKPC may pass it to a debt collection agency. These letters can be aggressive and threatening, but the debt collector has no more legal power than UKPC itself. If you are appealing the charge, the debt collection process should be paused. If you receive debt collection letters during an active appeal, write to both UKPC and the debt collector informing them that an appeal is in progress.

### Steps to Appeal

Contact the hospital PALS team first to request their support. Then appeal formally to UKPC within 28 days, attaching all evidence of your hospital visit and the compassionate circumstances. If UKPC rejects your appeal, escalate to POPLA within 28 days of the rejection.`,
    faqs: [
      {
        question: 'Does UKPC take hospital parking cases to court?',
        answer: 'UKPC has taken some cases to court but is generally less litigious than ParkingEye. Hospital charges with strong compassionate grounds are unlikely to be pursued to court. However, do not ignore a County Court claim form if one arrives; respond within the deadline.'
      },
      {
        question: 'Can I appeal a UKPC hospital fine on compassionate grounds?',
        answer: 'Yes, and compassionate grounds are one of the strongest bases for appeal. Provide evidence of your hospital visit, appointment delays, or the medical circumstances that caused your extended stay.'
      },
      {
        question: 'What should I do about UKPC debt collection letters?',
        answer: 'Debt collection letters from UKPC agents can be aggressive but have no more legal force than a letter from UKPC itself. If you have appealed the charge, inform the debt collector that an appeal is active. They should pause the process.'
      },
      {
        question: 'Will the hospital PALS team help with a UKPC charge?',
        answer: 'Most PALS teams are experienced in handling parking complaints and can often intervene with the parking operator. Contact PALS, explain your situation, and ask for their support in your appeal.'
      },
      {
        question: 'How long do I have to appeal a UKPC hospital charge?',
        answer: 'You have 28 days from receiving the charge to appeal to UKPC directly. If UKPC rejects your appeal, you have a further 28 days to escalate to POPLA. The charge should be frozen during the appeal process.'
      }
    ],
    seoTitle: 'UKPC Hospital Parking Fine | Appeal NHS UKPC Charges (2026)',
    seoDescription: 'Got a UKPC parking fine at a hospital? Free guide to appealing on compassionate grounds. Covers appointment delays, PALS support, debt collection, and the POPLA appeal process.'
  },
  {
    operatorSlug: 'apcoa',
    situationSlug: 'hospital-parking-fine',
    slug: 'apcoa-hospital',
    title: 'APCOA Fine at a Hospital',
    locationName: 'Hospital',
    description: 'APCOA manages parking at many of the UK largest NHS hospitals, using pay-and-display, barrier, and ANPR systems. Hospital charges from APCOA can be challenged on compassionate grounds, payment system failures, and confusing tariff structures.',
    specificDefences: [
      'APCOA hospital sites often have complex tariff structures with multiple zones and payment methods; confusion is a valid defence',
      'Pay-by-phone and machine failures are common at APCOA hospital sites and provide strong appeal grounds',
      'Compassionate circumstances (appointment delays, emergencies, visiting seriously ill patients) are powerful defences',
      'APCOA generally does not pursue unpaid charges to court, reducing the risk of non-payment',
      'Hospital PALS teams can often intervene directly with APCOA',
      'NtK must be served within 14 days; high-volume hospital sites frequently miss this'
    ],
    content: `## APCOA at Hospitals: Understanding Your Charge

APCOA is one of the major parking operators at NHS hospitals across the UK. They use a mix of pay-and-display machines, barrier systems, and ANPR cameras. Hospital parking with APCOA can be confusing, with multiple tariff zones, payment methods, and time restrictions that vary by area within the hospital grounds.

### Complex Payment Systems

APCOA hospital car parks often have multiple payment options: pay-and-display machines, RingGo or other pay-by-phone apps, barrier systems with pay-on-exit, and sometimes contactless payments. When any of these systems fail, patients and visitors are left unable to pay, and a charge follows.

If the payment system failed when you tried to use it, document the failure. Take a photo of any error messages, screenshot any app errors, and check your bank statement for attempted transactions. Payment system failures are strong grounds for appeal.

### Tariff Zone Confusion

APCOA hospital sites frequently have multiple zones with different prices. Short stay zones near the main entrance are expensive for brief visits. Long stay zones further from the entrance are cheaper for extended visits. Staff zones may have different rules entirely. If you parked in the wrong zone because the zone boundaries were unclear, this is a legitimate ground for appeal.

### APCOA Court Risk

APCOA generally does not pursue unpaid parking charges through the County Court. This is an important distinction from ParkingEye. While you should still take the charge seriously and appeal properly, the risk of court action is significantly lower. This does not mean you should ignore the charge; it is always better to appeal and get the charge formally cancelled.

### Getting Hospital Support

Contact the hospital PALS team before or alongside your APCOA appeal. APCOA has working relationships with the hospitals they serve, and a request from the hospital to cancel a charge carries significant weight. Provide PALS with your evidence (appointment letter, delay confirmation, payment failure evidence) and ask them to support your case.

### Your Appeal Steps

Gather your evidence: appointment letter, delay confirmation, payment receipts or failure evidence, photos of signage and zones. Appeal to APCOA within 28 days, clearly stating all grounds. If rejected, escalate to POPLA within 28 days. Throughout the process, keep copies of all correspondence.`,
    faqs: [
      {
        question: 'Does APCOA take hospital parking cases to court?',
        answer: 'APCOA generally does not pursue unpaid parking charges through the County Court. While this reduces the risk of non-payment, it is still better to appeal formally to get the charge cancelled rather than simply ignoring it.'
      },
      {
        question: 'The APCOA payment machine was broken at the hospital. What can I do?',
        answer: 'Payment machine failures are strong grounds for appeal. Document the failure with photos and check your bank statement for attempted payments. Submit this evidence with your appeal to APCOA.'
      },
      {
        question: 'I parked in the wrong zone at the hospital. Is that a defence?',
        answer: 'If the zone boundaries were unclear or confusing, this is a valid ground for appeal. Hospital visitors are often stressed and unfamiliar with the site layout. If the signage did not clearly mark the zone boundaries, argue this in your appeal.'
      },
      {
        question: 'Can I pay by phone at APCOA hospital car parks?',
        answer: 'Many APCOA hospital sites offer RingGo or similar pay-by-phone options alongside traditional machines. If the phone payment system failed, screenshot the error and include it as evidence in your appeal.'
      },
      {
        question: 'How does APCOA hospital parking compare to ParkingEye?',
        answer: 'APCOA is less likely to pursue court action than ParkingEye. Both are BPA members using POPLA for appeals. APCOA tends to use more varied payment systems (machines, barriers, apps), while ParkingEye relies primarily on ANPR with time limits.'
      }
    ],
    seoTitle: 'APCOA Hospital Parking Fine | Appeal NHS APCOA Charges (2026)',
    seoDescription: 'Got an APCOA parking fine at a hospital? Free guide to appealing. Covers payment failures, compassionate grounds, tariff zone confusion, and the POPLA appeal process.'
  },
  {
    operatorSlug: 'excel-parking',
    situationSlug: 'retail-park-parking-fine',
    slug: 'excel-parking-retail-park',
    title: 'Excel Parking Fine at a Retail Park',
    locationName: 'Retail Park',
    description: 'Excel Parking manages car parks at many retail parks and shopping centres across the UK. Their ANPR enforcement monitors time limits that are often too short for the range of shops and leisure facilities on site.',
    specificDefences: [
      'The time limit may be unreasonably short for a retail park with multiple stores, restaurants, or a cinema',
      'Signage must be present at every entrance to the retail park; if any entrance lacked signs, drivers entering there were not informed',
      'Excel Parking must apply a grace period under the BPA Code of Practice',
      'No-return-within restrictions must be clearly displayed at every entrance to be enforceable',
      'Excel Parking generally does not pursue court action, reducing the risk of non-payment',
      'NtK must be served within 14 days under POFA 2012'
    ],
    content: `## Excel Parking at Retail Parks: Your Appeal Guide

Excel Parking Services is a BPA-accredited operator that manages car parks at retail parks, shopping centres, and leisure sites across the UK. They use ANPR cameras to enforce time limits, typically 2 to 3 hours. If you have overstayed at a retail park managed by Excel Parking, there are several grounds for appeal.

### The Time Limit Problem at Retail Parks

Retail parks are designed for extended visits. They contain clothing stores, electronics retailers, homeware shops, restaurants, coffee shops, and sometimes cinemas or gyms. A realistic visit involving multiple stores and a meal can easily exceed 2 hours. Yet Excel Parking enforces limits that do not reflect how these sites are actually used.

When appealing, highlight the range of facilities on site and argue that the time limit is not reasonable for the type of use the site encourages. If the retail park has 20+ stores and a restaurant, a 2-hour limit arguably does not allow customers to use the site as intended.

### Multiple Entrance Signage

Retail parks often have several entry and exit points. Excel Parking must display adequate signage at every entrance. If you entered through a side road, a secondary access point, or a shared entrance with another site, check whether there was signage at that specific entrance. If not, you were not informed of the terms when you entered, and no contract was formed.

### No-Return-Within Restrictions

Some Excel Parking sites impose "no return within" restrictions (e.g., you cannot leave and re-enter within 3 hours). If you made two visits in one day and the ANPR combined them, check whether the no-return restriction was clearly displayed at every entrance. If it was not prominently signed, it is not enforceable.

### Excel Parking and Court Action

Excel Parking generally does not pursue unpaid charges through the County Court. While they will send reminder letters and may pass the charge to a debt collector, the risk of actual court proceedings is low. This does not mean you should ignore the charge, as a formal appeal and cancellation is always preferable, but it provides context for your risk assessment.

### Building Your Retail Park Appeal

Document the site: photograph every entrance, count the number of stores and facilities, note the time limit, and check for no-return restrictions. Gather your shopping receipts. Check the NtK date. Then appeal to Excel Parking with all grounds and evidence. If rejected, escalate to POPLA.`,
    faqs: [
      {
        question: 'Does Excel Parking take people to court?',
        answer: 'Excel Parking generally does not pursue unpaid charges through the County Court. They may send reminder letters and use debt collection, but actual court proceedings are uncommon.'
      },
      {
        question: 'Is a 2-hour limit reasonable at a retail park?',
        answer: 'It depends on the size and facilities. At a large retail park with dozens of stores, restaurants, and leisure facilities, 2 hours is arguably inadequate. At a small retail park with a few shops, it may be reasonable. Use the specific facilities of your site in your appeal.'
      },
      {
        question: 'I entered through a side entrance with no signage. Is that a defence?',
        answer: 'Yes. The operator must display adequate signage at every point of entry. If the entrance you used had no signage, you were not informed of the terms and no contract was formed. Photograph the entrance and include this evidence in your appeal.'
      },
      {
        question: 'What is Excel Parking success rate at appeal?',
        answer: 'Excel Parking has an approximate appeal success rate of 52% at POPLA. Success rates are higher when appeals are based on signage issues, NtK timing failures, or unreasonable time limits.'
      },
      {
        question: 'I got charged for two visits in one day. What happened?',
        answer: 'The site likely has a no-return-within restriction. If the ANPR recorded two separate visits within the restricted period, it may have combined them or issued a second charge. Check whether the no-return restriction was clearly displayed at every entrance.'
      }
    ],
    seoTitle: 'Excel Parking Retail Park Fine | Appeal Shopping Centre Charges (2026)',
    seoDescription: 'Got an Excel Parking fine at a retail park? Free guide to appealing. Covers time limits, signage at multiple entrances, no-return restrictions, and POPLA appeals.'
  },
  {
    operatorSlug: 'smart-parking',
    situationSlug: 'residential-parking-fine',
    slug: 'smart-parking-council-car-park',
    title: 'Smart Parking Fine at a Council Car Park',
    locationName: 'Council Car Park',
    description: 'Smart Parking operates ANPR enforcement at some council-owned car parks under private contract. These charges are private parking invoices, not council PCNs, even though the car park is owned by the council.',
    specificDefences: [
      'Smart Parking charges at council car parks are private invoices, not council PCNs; they carry less weight and different appeal routes',
      'ANPR evidence from Smart Parking can be challenged if camera images are unclear or timestamps are inaccurate',
      'Smart Parking is an IPC member, so appeals go to IAS (not POPLA)',
      'The IPC Code of Practice requires prominent signage about ANPR monitoring',
      'Smart Parking generally does not pursue court action',
      'NtK must be served within 14 days under POFA 2012'
    ],
    content: `## Smart Parking at Council Car Parks: A Unique Situation

Smart Parking operates ANPR enforcement at a number of council-owned car parks across the UK. This creates a confusing situation for drivers: the car park is owned by the council, but the parking charge is issued by a private company. Understanding this distinction is crucial for your appeal.

### Private Charge, Not Council PCN

The most important thing to understand is that a Smart Parking charge at a council car park is a private parking invoice, not a council Penalty Charge Notice (PCN). This matters because private charges are contractual claims with different enforcement powers, different appeal routes, and generally lower consequences for non-payment.

A council PCN can ultimately lead to bailiff action. A Smart Parking charge cannot; it would need to go through the County Court, and Smart Parking generally does not pursue court proceedings. This significantly changes your risk assessment.

### IPC Membership and IAS Appeals

Smart Parking is a member of the IPC (International Parking Community), not the BPA. This means their independent appeals service is IAS (Independent Appeals Service), not POPLA. The appeal process is similar but operates under the IPC Code of Practice rather than the BPA Code.

The IPC Code requires clear signage about ANPR monitoring, a grace period, proportionate charges, and proper NtK service. If Smart Parking has failed on any of these points, you have grounds for appeal.

### ANPR Challenges

Smart Parking specialises in ANPR technology, but their cameras are not infallible. Common issues include misreading number plates, recording incorrect entry or exit times, camera maintenance problems, and poor image quality in bad weather or low light.

You can request your ANPR images through a Subject Access Request under GDPR. Smart Parking must provide them within one month. Check that the images clearly show your registration and that the timestamps are accurate. If the evidence is weak, challenge it.

### The Council Connection

Although the car park is council-owned, the council has contracted Smart Parking to manage enforcement. In some cases, the council can intervene if the charge is unreasonable. Contact the council's parking department and explain the situation. While they may redirect you to Smart Parking, some councils do take an interest in how their sites are managed.

### Your Appeal Strategy

Check the NtK date first. Then gather any evidence of payment (receipts, app confirmations) and photograph the signage. Appeal to Smart Parking within 28 days, clearly stating your grounds. If rejected, escalate to IAS within 28 days. Throughout the process, remember that Smart Parking generally does not pursue court action, so the risk of escalation is low.`,
    faqs: [
      {
        question: 'Is a Smart Parking charge at a council car park the same as a council fine?',
        answer: 'No. Even though the car park is council-owned, a Smart Parking charge is a private parking invoice, not a council PCN. It has different appeal routes (IAS instead of Traffic Penalty Tribunal) and generally lower consequences for non-payment.'
      },
      {
        question: 'Does Smart Parking take people to court?',
        answer: 'Smart Parking generally does not pursue unpaid charges through the County Court. They may send reminder letters and use debt collection, but actual court proceedings are rare.'
      },
      {
        question: 'Where do I appeal a Smart Parking charge?',
        answer: 'Appeal first to Smart Parking directly within 28 days. If rejected, escalate to IAS (Independent Appeals Service) within 28 days of the rejection. Smart Parking is an IPC member, so they use IAS, not POPLA.'
      },
      {
        question: 'Can the council help with a Smart Parking charge on their car park?',
        answer: 'Contact the council parking department and explain the situation. While the council has contracted Smart Parking to manage the site, some councils will take an interest in how their car parks are being enforced.'
      },
      {
        question: 'How do I request Smart Parking ANPR images?',
        answer: 'Submit a Subject Access Request (SAR) to Smart Parking under GDPR. They must provide your personal data, including ANPR images, within one month. Use this to check whether the evidence clearly shows your vehicle and accurate timestamps.'
      }
    ],
    seoTitle: 'Smart Parking Council Car Park Fine | Appeal Guide (2026)',
    seoDescription: 'Got a Smart Parking fine at a council car park? Free guide explaining why it is a private charge, not a council PCN, and how to appeal through IAS.'
  },
  {
    operatorSlug: 'euro-car-parks',
    situationSlug: 'retail-park-parking-fine',
    slug: 'euro-car-parks-shopping-centre',
    title: 'Euro Car Parks Fine at a Shopping Centre',
    locationName: 'Shopping Centre',
    description: 'Euro Car Parks manages parking at shopping centres and retail sites across the UK using ANPR enforcement. Overstay charges are common, but signage issues, unreasonable time limits, and no-return restrictions provide strong appeal grounds.',
    specificDefences: [
      'Shopping centre time limits (often 2 to 3 hours) may be unreasonable for sites with restaurants, cinemas, and dozens of stores',
      'Euro Car Parks must display signage at every entrance; shopping centres with multiple access points often have signage gaps',
      'No-return-within restrictions must be clearly displayed; hidden or small-print restrictions are not enforceable',
      'The BPA Code requires a grace period to be applied before any charge is issued',
      'Euro Car Parks generally does not pursue court action',
      'NtK must be served within 14 days under POFA 2012'
    ],
    content: `## Euro Car Parks at Shopping Centres: Your Appeal Guide

Euro Car Parks is a BPA-accredited operator managing car parks at shopping centres, retail parks, and commercial sites across the UK and Ireland. They use ANPR cameras to enforce time limits, and overstay charges are the most common type of charge you will encounter.

### Shopping Centre Parking Challenges

Shopping centres present unique parking challenges. They are designed for extended visits, with dozens of stores, food courts, restaurants, and leisure facilities. A family visiting a shopping centre might browse several clothing stores, pick up electronics, have lunch, and let the children play. This can easily take 3 to 4 hours, yet the ANPR system enforces a strict 2 to 3-hour limit.

If the time limit does not realistically accommodate the type of visit the shopping centre is designed for, argue this in your appeal. List the facilities on site and explain how a normal visit would exceed the limit.

### Multiple Entrances and Signage

Shopping centres typically have several entry points: main road entrances, side street access, pedestrian walkways with adjacent parking, and links from other sites. Euro Car Parks must display adequate signage at every vehicle entrance. If the entrance you used lacked signage, photograph it and use this as a primary appeal ground.

### The Return Restriction Problem

Euro Car Parks often imposes "no return within" restrictions at shopping centres. If you visit in the morning and return in the afternoon, the ANPR may flag the second visit or combine both visits into a single extended stay. For this restriction to be enforceable, it must be clearly and prominently displayed at every entrance, not buried in small print on one sign.

### Euro Car Parks and Debt Collection

If you do not pay or appeal, Euro Car Parks may send reminder letters and eventually pass the charge to a debt collection agency. The debt collection letters can be intimidating, but they carry no more legal force than the original charge. Euro Car Parks generally does not file County Court claims, so the letters are the extent of the escalation in most cases.

### Appeal Steps for Shopping Centre Charges

Gather your receipts from every store you visited. Photograph the entrances and signage. Check for no-return restrictions and how they are displayed. Verify the NtK date. Then appeal to Euro Car Parks within 28 days. If rejected, escalate to POPLA within 28 days.

At POPLA, present your evidence clearly: the site encourages extended visits, the time limit is inadequate, the signage was incomplete, and the grace period was not applied. This combination of grounds gives you the strongest chance of success.`,
    faqs: [
      {
        question: 'Does Euro Car Parks take people to court?',
        answer: 'Euro Car Parks generally does not pursue unpaid charges through the County Court. They rely on reminder letters and debt collection, but actual court proceedings are uncommon.'
      },
      {
        question: 'I was shopping at the centre the whole time. Is that a defence?',
        answer: 'Being a genuine customer is a mitigating factor but not a standalone legal defence. Combine it with other grounds: the time limit was unreasonable for the site, the signage was inadequate, or the grace period was not applied.'
      },
      {
        question: 'What is the typical Euro Car Parks charge at shopping centres?',
        answer: 'The standard charge is typically £60 to £100, with an early payment discount of around £40 to £60 if paid within 14 days.'
      },
      {
        question: 'I got charged for visiting twice in one day. Is that fair?',
        answer: 'Only if the no-return-within restriction was clearly displayed at every entrance. If you did not see the restriction, or it was not prominently signed, it is not enforceable. Include photos of the signage in your appeal.'
      },
      {
        question: 'Should I worry about debt collection letters from Euro Car Parks?',
        answer: 'Debt collection letters are designed to pressure you into paying. The debt collector has no more power than Euro Car Parks itself. If you are appealing the charge, inform the debt collector that an appeal is in progress.'
      }
    ],
    seoTitle: 'Euro Car Parks Shopping Centre Fine | Appeal Guide (2026)',
    seoDescription: 'Got a Euro Car Parks fine at a shopping centre? Free guide to appealing. Covers time limits, signage at multiple entrances, no-return restrictions, and POPLA appeals.'
  }
];

export function getOperatorSituationBySlug(operatorSlug: string, situationSlug: string): OperatorSituation | undefined {
  return OPERATOR_SITUATIONS.find(
    (os) => os.operatorSlug === operatorSlug && os.slug === situationSlug
  );
}

export function getOperatorSituationsBySlugs(operatorSlug: string): OperatorSituation[] {
  return OPERATOR_SITUATIONS.filter((os) => os.operatorSlug === operatorSlug);
}

export function getOperatorSituationByComboSlug(slug: string): OperatorSituation | undefined {
  return OPERATOR_SITUATIONS.find((os) => os.slug === slug);
}
