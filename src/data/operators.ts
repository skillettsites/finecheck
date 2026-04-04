import { Operator } from '@/lib/types';

export const OPERATORS: Operator[] = [
  {
    slug: 'parkingeye',
    name: 'ParkingEye',
    fullName: 'ParkingEye Limited',
    description: 'ParkingEye is the largest private parking operator in the UK, managing over 3,500 sites including major supermarkets, retail parks, and hospitals. They rely heavily on ANPR camera technology and are one of the few operators that regularly pursue unpaid charges through the County Court via their solicitors DCB Legal.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'ANPR misreads of number plates',
      'Overstay charges at supermarkets and retail parks',
      'Failure to account for legitimate reasons for extended stays',
      'Charges issued despite valid Pay and Display tickets',
      'Camera timing errors creating inaccurate stay durations',
      'Charges at hospital car parks where appointments overran'
    ],
    knownWeaknesses: [
      'ANPR evidence can be challenged if entry/exit images are unclear',
      'Must demonstrate compliant signage at every entry and throughout the site',
      'Pre-estimate of loss arguments: the charge must reflect genuine losses, not a penalty',
      'Grace periods must be clearly displayed and applied consistently',
      'Notice to Keeper must be served within 14 days of the alleged contravention under POFA 2012',
      'The landmark Supreme Court case ParkingEye v Beavis (2015) set boundaries on what constitutes a legitimate charge'
    ],
    pursuesToCourt: true,
    usesANPR: true,
    averageSuccessRate: 42,
    seoTitle: 'Appeal a ParkingEye Fine | How to Beat ParkingEye Charges',
    seoDescription: 'Free guide to appealing ParkingEye parking charges. Learn about ANPR errors, POPLA appeals, court defence, and the legal weaknesses in ParkingEye tickets.'
  },
  {
    slug: 'ukpc',
    name: 'UKPC',
    fullName: 'UK Parking Control Limited',
    description: 'UKPC is one of the larger BPA-accredited operators managing car parks for retail, residential, and commercial clients across the UK. They use both ANPR and manual enforcement and have been known to pursue debts through the courts.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Aggressive debt collection letters from debt recovery agents',
      'Charges at residential developments for minor permit issues',
      'Unclear or contradictory signage at managed sites',
      'Overstay charges with insufficient grace period',
      'Charges issued to visitors at residential blocks',
      'Delays in processing valid permits or exemptions'
    ],
    knownWeaknesses: [
      'Signage often fails to meet BPA Code of Practice requirements',
      'NtK compliance issues: late service or incorrect wording',
      'Debt collection letters often exaggerate legal consequences',
      'Must prove the charge is a genuine pre-estimate of loss',
      'Historical complaints about enforcement practices',
      'Appeals process can be slow, giving leverage for procedural challenges'
    ],
    pursuesToCourt: true,
    usesANPR: true,
    averageSuccessRate: 48,
    seoTitle: 'Appeal a UKPC Parking Fine | Beat UKPC Charges',
    seoDescription: 'How to appeal a UKPC parking charge. Covers signage issues, NtK rules, POPLA appeals, and known weaknesses in UKPC enforcement.'
  },
  {
    slug: 'apcoa',
    name: 'APCOA',
    fullName: 'APCOA Parking (UK) Limited',
    description: 'APCOA is a major European parking operator with a significant UK presence, managing car parks at airports, hospitals, train stations, and city centres. They use a mix of ANPR, pay-by-phone, and barrier systems.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Pay-by-phone system errors or app failures',
      'Barrier malfunction charges at multi-storey car parks',
      'ANPR misreads at airport and station car parks',
      'Charges despite valid RingGo or JustPark payments',
      'Confusing tariff structures at hospital sites',
      'Overstay charges where delays were caused by train cancellations'
    ],
    knownWeaknesses: [
      'Technical failures in payment systems can invalidate charges',
      'Must demonstrate that alternative payment methods were clearly signposted',
      'Airport and hospital sites often have compassionate grounds for appeal',
      'NtK service deadlines are frequently missed on high-volume sites',
      'Payment app evidence can directly contradict the charge',
      'Signage at large multi-level sites is often inconsistent between floors'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 50,
    seoTitle: 'Appeal an APCOA Parking Fine | How to Challenge APCOA Charges',
    seoDescription: 'Guide to appealing APCOA parking charges. Covers pay-by-phone errors, barrier faults, ANPR issues, and how to win at POPLA.'
  },
  {
    slug: 'euro-car-parks',
    name: 'Euro Car Parks',
    fullName: 'Euro Car Parks (UK) Limited',
    description: 'Euro Car Parks manages sites across the UK and Ireland, particularly in retail and commercial settings. They are a BPA member and use ANPR technology at many of their sites.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Overstay charges at shopping centres',
      'ANPR errors at retail park sites',
      'Confusing maximum stay signage',
      'Charges for re-entry within restricted return periods',
      'Unclear terms about free parking conditions',
      'Charges where shopping was done across multiple stores taking longer than allowed'
    ],
    knownWeaknesses: [
      'Return period restrictions often poorly signposted',
      'ANPR camera accuracy can be challenged with vehicle evidence',
      'Maximum stay limits sometimes unreasonable for the site type',
      'NtK compliance is a common failure point',
      'Signage must be visible at entry and throughout; not just at machines',
      'Grace period obligations under the BPA Code'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 52,
    seoTitle: 'Appeal a Euro Car Parks Fine | Challenge ECP Parking Charges',
    seoDescription: 'How to appeal a Euro Car Parks parking charge. Covers overstay issues, ANPR errors, signage problems, and the POPLA appeal process.'
  },
  {
    slug: 'ncp',
    name: 'NCP',
    fullName: 'National Car Parks Limited',
    description: 'NCP is one of the oldest and most recognisable parking brands in the UK, operating multi-storey and surface car parks in town and city centres. They use barrier systems, ANPR, and pay-on-foot machines.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Pay-on-foot machine malfunctions',
      'Barrier failures trapping vehicles or recording incorrect times',
      'Overcharges due to system errors',
      'Lost ticket penalties that are disproportionate',
      'App payment not registering correctly',
      'Charges at sites with unclear pricing structures'
    ],
    knownWeaknesses: [
      'Machine and barrier failures are well-documented and create strong appeal grounds',
      'Lost ticket charges may be challenged as penalties rather than genuine loss estimates',
      'NCP generally does not pursue unpaid charges to court',
      'Payment system errors can be evidenced through bank statements',
      'Older sites may have worn or obscured signage',
      'Customer service team often resolves issues before formal appeal is needed'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 55,
    seoTitle: 'Appeal an NCP Parking Fine | How to Challenge NCP Charges',
    seoDescription: 'Guide to appealing NCP parking charges. Covers machine faults, barrier errors, lost tickets, and your chances of success at POPLA.'
  },
  {
    slug: 'indigo',
    name: 'Indigo',
    fullName: 'Indigo Park Solutions UK Limited',
    description: 'Formerly known as Vinci Park, Indigo manages parking for local authorities, hospitals, airports, and commercial clients. They operate a mix of on-street and off-street parking across the UK.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Confusing dual-role enforcement (acting for councils and as private operator)',
      'Permit validation errors at managed sites',
      'Unclear distinction between council PCNs and private charges',
      'Charges at hospital sites where patients had emergencies',
      'Pay-and-display machine faults',
      'Charges despite having a valid season ticket or permit'
    ],
    knownWeaknesses: [
      'The dual role creates confusion that can be used in appeals',
      'Must clearly identify whether a charge is a council PCN or private invoice',
      'Hospital site charges often succeed on compassionate appeal',
      'Machine fault evidence (photos, timestamps) provides strong grounds',
      'NtK compliance issues are common',
      'Season ticket holders have strong grounds if the system failed to recognise their permit'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 50,
    seoTitle: 'Appeal an Indigo Parking Fine | Challenge Indigo (Vinci) Charges',
    seoDescription: 'How to appeal an Indigo parking charge. Formerly Vinci Park. Covers hospital parking, permit errors, and the POPLA appeal process.'
  },
  {
    slug: 'smart-parking',
    name: 'Smart Parking',
    fullName: 'Smart Parking Limited',
    description: 'Smart Parking is an IPC member that specialises in ANPR-based enforcement. They operate across retail, healthcare, and commercial sites and are known for their technology-first approach to parking management.',
    type: 'private',
    appealBody: 'IAS',
    tradeBody: 'IPC',
    commonIssues: [
      'ANPR camera misreads leading to incorrect charges',
      'Overstay charges at medical centres and GP surgeries',
      'No consideration of grace periods',
      'System not recognising legitimate payments',
      'Charges at sites where the ANPR cameras are poorly maintained',
      'Inadequate signage about ANPR monitoring'
    ],
    knownWeaknesses: [
      'ANPR-only evidence can be challenged if images are unclear',
      'IPC Code of Practice requires prominent signage about camera surveillance',
      'Must serve NtK within the POFA 2012 timeframe',
      'Medical appointment overruns provide strong compassionate grounds',
      'Camera maintenance records can be requested via subject access request',
      'Smart Parking generally does not pursue court action'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 55,
    seoTitle: 'Appeal a Smart Parking Fine | Challenge Smart Parking Charges',
    seoDescription: 'How to appeal a Smart Parking charge. Covers ANPR errors, IAS appeals, and the legal weaknesses in Smart Parking enforcement.'
  },
  {
    slug: 'excel-parking',
    name: 'Excel Parking',
    fullName: 'Excel Parking Services Limited',
    description: 'Excel Parking is a BPA-accredited operator managing car parks for retail, leisure, and commercial clients. They use a combination of ANPR and manual patrols.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Overstay charges at retail sites',
      'Confusing signage about permitted hours',
      'Charges for parking in unmarked bays',
      'ANPR errors with partial plate reads',
      'No grace period applied to minor overstays',
      'Charges where the driver was loading or unloading'
    ],
    knownWeaknesses: [
      'Signage compliance is a common weak point',
      'Must prove the vehicle was parked in contravention, not just present on site',
      'Loading and unloading exemptions are often not properly considered',
      'NtK timing failures',
      'Grace periods required under BPA Code of Practice',
      'Does not typically pursue court proceedings'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 52,
    seoTitle: 'Appeal an Excel Parking Fine | Challenge Excel Parking Charges',
    seoDescription: 'How to appeal an Excel Parking charge. Covers signage issues, overstay disputes, and your rights under the BPA Code of Practice.'
  },
  {
    slug: 'horizon-parking',
    name: 'Horizon Parking',
    fullName: 'Horizon Parking Limited',
    description: 'Horizon Parking manages sites for residential developments, retail parks, and commercial properties. They are BPA-accredited and use both ANPR and manual enforcement methods.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Charges at residential developments for permit issues',
      'Visitor parking restrictions that are poorly communicated',
      'ANPR not recognising registered vehicles',
      'Overly complex permit registration systems',
      'Charges for parking in visitor bays without correct authorisation',
      'Signage hidden behind vegetation or obstructions'
    ],
    knownWeaknesses: [
      'Residential site signage is often inadequate or not visible from parking bays',
      'Permit registration system failures are strong appeal grounds',
      'Visitor permit processes must be clearly explained on signage',
      'NtK compliance failures',
      'Must demonstrate the driver had reasonable opportunity to read terms',
      'Compassionate circumstances at residential sites are often accepted'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 50,
    seoTitle: 'Appeal a Horizon Parking Fine | Challenge Horizon Parking Charges',
    seoDescription: 'How to appeal a Horizon Parking charge. Covers residential permits, signage issues, and the POPLA appeal process.'
  },
  {
    slug: 'g24',
    name: 'G24',
    fullName: 'Gemini Parking Solutions Limited (trading as G24)',
    description: 'G24 is a BPA-accredited parking operator managing sites across retail, residential, and commercial sectors. They use ANPR and manual patrols and are known for their presence at smaller retail and leisure sites.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Overstay charges at small retail sites',
      'Confusing maximum stay terms',
      'Charges for parking outside of marked bays',
      'ANPR misreads on dirty or damaged plates',
      'No-return-within policies not clearly displayed',
      'Charges at sites with insufficient parking for demand'
    ],
    knownWeaknesses: [
      'Smaller sites often have less compliant signage',
      'NtK timing is a frequent failure point',
      'Must prove the motorist had clear notice of the terms',
      'No-return policies must be prominently displayed at entry',
      'Does not typically pursue court action',
      'Appeal success rates at POPLA are relatively high'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 53,
    seoTitle: 'Appeal a G24 Parking Fine | Challenge G24 Charges',
    seoDescription: 'How to appeal a G24 parking charge. Covers signage problems, overstay issues, and how to win your POPLA appeal against G24.'
  },
  {
    slug: 'civil-enforcement',
    name: 'Civil Enforcement',
    fullName: 'Civil Enforcement Limited',
    description: 'Civil Enforcement is a BPA member operating across residential, commercial, and retail sites in the UK. They manage both ANPR and permit-based enforcement.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Permit registration delays causing wrongful charges',
      'ANPR not updated with new vehicle registrations',
      'Charges at residential estates with unclear visitor rules',
      'Overstay at commercial sites',
      'Aggressive follow-up correspondence',
      'Charges where the motorist was a genuine customer'
    ],
    knownWeaknesses: [
      'Permit database errors are well-documented appeal grounds',
      'Must allow reasonable time for permit registration to take effect',
      'NtK compliance is a common weak point',
      'Follow-up letters from debt collectors can be challenged',
      'Signage at residential estates often fails BPA standards',
      'Does not typically pursue court proceedings'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 50,
    seoTitle: 'Appeal a Civil Enforcement Fine | Challenge CEL Parking Charges',
    seoDescription: 'How to appeal a Civil Enforcement parking charge. Covers permit errors, residential parking, and the POPLA appeal process.'
  },
  {
    slug: 'premier-park',
    name: 'Premier Park',
    fullName: 'Premier Park Limited',
    description: 'Premier Park is an IPC member managing parking at retail, leisure, and commercial sites. They use ANPR and manual enforcement and are particularly active in the north of England.',
    type: 'private',
    appealBody: 'IAS',
    tradeBody: 'IPC',
    commonIssues: [
      'Overstay charges at leisure and retail sites',
      'Confusing dual tariff structures',
      'ANPR errors at busy sites',
      'No consideration of mitigating circumstances',
      'Charges where the motorist was a paying customer',
      'Signage not visible in poor weather or lighting'
    ],
    knownWeaknesses: [
      'IPC Code of Practice signage requirements must be met',
      'NtK service within 14 days under POFA 2012',
      'Mitigating circumstances should be considered under IPC Code',
      'Does not typically pursue court action',
      'ANPR evidence can be challenged if capture images are poor quality',
      'Must demonstrate the charge is proportionate to the loss'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 54,
    seoTitle: 'Appeal a Premier Park Fine | Challenge Premier Park Charges',
    seoDescription: 'How to appeal a Premier Park parking charge. Covers IAS appeals, ANPR errors, and your rights under the IPC Code of Practice.'
  },
  {
    slug: 'athena-anpr',
    name: 'Athena ANPR',
    fullName: 'Athena ANPR Limited',
    description: 'Athena ANPR is an IPC member specialising in camera-based enforcement. They manage sites using automatic number plate recognition across retail and commercial properties.',
    type: 'private',
    appealBody: 'IAS',
    tradeBody: 'IPC',
    commonIssues: [
      'ANPR camera misidentification of vehicles',
      'Overstay charges with no grace period',
      'Poor image quality in ANPR evidence',
      'Charges at sites with insufficient signage about cameras',
      'System errors recording incorrect entry or exit times',
      'Charges for vehicles making deliveries'
    ],
    knownWeaknesses: [
      'ANPR-only enforcement is vulnerable to image quality challenges',
      'Must notify motorists clearly about ANPR surveillance',
      'Camera calibration and maintenance records can be requested',
      'NtK compliance within POFA 2012 timescales',
      'Delivery vehicles may have implied permission to be on site',
      'Does not typically pursue court action'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 55,
    seoTitle: 'Appeal an Athena ANPR Fine | Challenge Athena Parking Charges',
    seoDescription: 'How to appeal an Athena ANPR parking charge. Covers camera errors, IAS appeals, and ANPR evidence weaknesses.'
  },
  {
    slug: 'one-parking-solution',
    name: 'One Parking Solution',
    fullName: 'One Parking Solution Limited',
    description: 'One Parking Solution is an IPC member operating in retail, residential, and commercial settings. They provide both ANPR and warden-based enforcement.',
    type: 'private',
    appealBody: 'IAS',
    tradeBody: 'IPC',
    commonIssues: [
      'Charges at residential sites with complex permit rules',
      'Overstay at retail car parks',
      'Warden-issued tickets with incomplete details',
      'ANPR charges where the camera was obstructed',
      'No grace period applied',
      'Charges for parking in disabled bays without clear markings'
    ],
    knownWeaknesses: [
      'Warden-issued tickets must contain all required information',
      'Residential permit rules must be clearly communicated',
      'NtK compliance under POFA 2012',
      'Disabled bay markings must comply with regulations',
      'IPC Code requires consideration of mitigating circumstances',
      'Does not typically pursue court action'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 54,
    seoTitle: 'Appeal a One Parking Solution Fine | Challenge OPS Charges',
    seoDescription: 'How to appeal a One Parking Solution parking charge. Covers residential permits, warden errors, and the IAS appeal process.'
  },
  {
    slug: 'gemini-parking',
    name: 'Gemini Parking Solutions',
    fullName: 'Gemini Parking Solutions Limited',
    description: 'Gemini Parking Solutions is an IPC member providing parking management for commercial, retail, and residential clients. They use both ANPR and manual patrols.',
    type: 'private',
    appealBody: 'IAS',
    tradeBody: 'IPC',
    commonIssues: [
      'Overstay charges at commercial premises',
      'Charges for parking outside designated bays',
      'ANPR errors with similar registration numbers',
      'Confusing signage about permitted parking durations',
      'Charges at sites with broken payment machines',
      'Inadequate lighting making signage unreadable'
    ],
    knownWeaknesses: [
      'Signage must be readable and well-lit under IPC Code',
      'Broken payment machines provide strong appeal grounds',
      'NtK timing failures',
      'ANPR evidence must clearly show the vehicle registration',
      'Must consider mitigating circumstances',
      'Does not typically pursue court action'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 55,
    seoTitle: 'Appeal a Gemini Parking Fine | Challenge Gemini Parking Charges',
    seoDescription: 'How to appeal a Gemini Parking Solutions charge. Covers signage issues, IAS appeals, and common enforcement weaknesses.'
  },
  {
    slug: 'vehicle-control-services',
    name: 'VCS',
    fullName: 'Vehicle Control Services Limited',
    description: 'Vehicle Control Services (VCS) is a BPA-accredited operator managing car parks for retail, leisure, and commercial clients. They have faced scrutiny in the past for aggressive enforcement practices.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Aggressive debt collection letters',
      'Charges at retail sites with confusing terms',
      'ANPR overstay charges with no grace period',
      'Charges despite the motorist being a legitimate customer',
      'Unclear signage about maximum stay periods',
      'Follow-up letters threatening court action that rarely materialises'
    ],
    knownWeaknesses: [
      'History of enforcement complaints weakens their credibility',
      'Debt collection threats are often not followed through',
      'NtK compliance is a frequent weak point',
      'Signage must meet BPA Code of Practice standards',
      'Must apply grace periods under BPA Code',
      'Rarely pursues court action despite threatening letters'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 56,
    seoTitle: 'Appeal a VCS Parking Fine | Challenge Vehicle Control Services Charges',
    seoDescription: 'How to appeal a VCS parking charge. Covers debt collection threats, signage issues, and why VCS rarely takes cases to court.'
  },
  {
    slug: 'cp-plus',
    name: 'CP Plus',
    fullName: 'CP Plus Limited',
    description: 'CP Plus is a BPA-accredited operator providing parking management across the UK. They manage sites for retail chains, hospitals, and commercial landlords using ANPR and pay-and-display systems.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Pay-and-display machine failures',
      'ANPR overstay charges at retail sites',
      'Charges at hospital car parks',
      'Confusing tariff boards',
      'System not recognising cashless payments',
      'Charges for minor overstays of a few minutes'
    ],
    knownWeaknesses: [
      'Machine failures create strong grounds for appeal',
      'Hospital charges often succeed on compassionate grounds',
      'Must prove the payment system was functioning correctly',
      'NtK compliance under POFA 2012',
      'Minor overstays may be disproportionate under BPA Code',
      'Does not typically pursue court action'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 52,
    seoTitle: 'Appeal a CP Plus Parking Fine | Challenge CP Plus Charges',
    seoDescription: 'How to appeal a CP Plus parking charge. Covers machine faults, hospital parking, and the POPLA appeal process.'
  },
  {
    slug: 'britannia-parking',
    name: 'Britannia Parking',
    fullName: 'Britannia Parking Group Limited',
    description: 'Britannia Parking is a BPA-accredited operator managing car parks primarily in urban centres, retail sites, and residential developments. They use a mix of ANPR and patrol-based enforcement.',
    type: 'private',
    appealBody: 'POPLA',
    tradeBody: 'BPA',
    commonIssues: [
      'Residential permit enforcement errors',
      'Overstay charges at urban car parks',
      'Charges for displaying expired permits',
      'ANPR errors in multi-storey car parks',
      'Confusing bay marking designations',
      'Charges where the vehicle was broken down'
    ],
    knownWeaknesses: [
      'Permit system errors are strong appeal grounds',
      'Breakdown situations should be treated as mitigating circumstances',
      'Bay markings must be clear and well-maintained',
      'NtK compliance',
      'Must consider reasonable circumstances under BPA Code',
      'Does not typically pursue court action'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 51,
    seoTitle: 'Appeal a Britannia Parking Fine | Challenge Britannia Charges',
    seoDescription: 'How to appeal a Britannia Parking charge. Covers permit errors, breakdown situations, and your POPLA appeal options.'
  },
  {
    slug: 'parking-control-management',
    name: 'Parking Control Management',
    fullName: 'Parking Control Management Limited',
    description: 'Parking Control Management (PCM) is an IPC member operating across retail, commercial, and residential sites. They use ANPR and manual enforcement.',
    type: 'private',
    appealBody: 'IAS',
    tradeBody: 'IPC',
    commonIssues: [
      'Charges at small retail sites with limited parking',
      'Confusing terms about permitted uses',
      'ANPR charges where the camera was obscured by weather',
      'No grace period for minor overstays',
      'Charges for using the car park outside business hours',
      'Unclear signage about who may park'
    ],
    knownWeaknesses: [
      'Smaller operators often have less robust signage compliance',
      'NtK timing failures under POFA 2012',
      'Must prove the motorist agreed to the terms by clear signage',
      'Weather-affected ANPR evidence is weak',
      'IPC Code requires proportionate charges',
      'Does not typically pursue court action'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 56,
    seoTitle: 'Appeal a PCM Parking Fine | Challenge Parking Control Management Charges',
    seoDescription: 'How to appeal a Parking Control Management charge. Covers IAS appeals, signage issues, and common enforcement weaknesses.'
  },
  {
    slug: 'creative-car-park',
    name: 'Creative Car Park',
    fullName: 'Creative Car Park Management Limited',
    description: 'Creative Car Park is an IPC member managing sites for retail and commercial clients. They provide ANPR and patrol-based enforcement solutions.',
    type: 'private',
    appealBody: 'IAS',
    tradeBody: 'IPC',
    commonIssues: [
      'Overstay charges at retail and leisure sites',
      'ANPR charges with poor evidence quality',
      'Signage placed in locations not visible to drivers',
      'Charges for re-entering the site within a no-return period',
      'No consideration of disabled drivers needing extra time',
      'Charges at sites with very short maximum stay limits'
    ],
    knownWeaknesses: [
      'Signage placement must be at the point of entry to the site',
      'Short maximum stays may be argued as unreasonable for the site type',
      'Disabled drivers should be given extra consideration',
      'NtK compliance under POFA 2012',
      'No-return periods must be clearly displayed',
      'Does not typically pursue court action'
    ],
    pursuesToCourt: false,
    usesANPR: true,
    averageSuccessRate: 57,
    seoTitle: 'Appeal a Creative Car Park Fine | Challenge Creative Car Park Charges',
    seoDescription: 'How to appeal a Creative Car Park charge. Covers IAS appeals, signage problems, and common grounds for successful appeals.'
  }
];

export function getOperatorBySlug(slug: string): Operator | undefined {
  return OPERATORS.find((op) => op.slug === slug);
}

export function getOperatorsByTradeBody(body: 'BPA' | 'IPC'): Operator[] {
  return OPERATORS.filter((op) => op.tradeBody === body);
}
