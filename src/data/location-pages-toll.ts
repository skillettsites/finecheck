import type { LocationFinePage } from "./location-pages";

export const LOCATION_PAGES_TOLL: LocationFinePage[] = [
  {
    slug: "dart-charge-pcn-appeal",
    category: "toll-zone",
    location: "Dart Charge",
    fineTypeLabel: "PCN",
    title: "Dart Charge PCN appeal",
    h1: "How to appeal a Dart Charge PCN at the Dartford Crossing",
    description:
      "A step-by-step guide to challenging a Dart Charge Penalty Charge Notice issued for the Dartford-Thurrock river crossing, with the statutes that the adjudicator actually applies.",
    seoTitle: "Dart Charge PCN Appeal: Grounds + Letter | AppealAFine",
    seoDescription:
      "Got a Dart Charge PCN for the Dartford Crossing? Use the statutory grounds, deadlines and free template letter to challenge it through Conduent and the Traffic Penalty Tribunal.",
    searchVolume: 9900,
    factBox: {
      issuer: "Conduent on behalf of National Highways",
      appealTo: "Traffic Penalty Tribunal",
      discountWindow: "14 days, PCN reduced to £35",
      formalChallengeWindow: "28 days to make formal representations after the Notice to Owner",
      standardFine: "£35 reduced, £70 full, £105 charge certificate",
      fastestRoute: "Informal challenge to Conduent within 14 days quoting the Dartford-Thurrock Crossing Charging Scheme 2013",
    },
    intro:
      "The Dart Charge is the road user charge for the Dartford-Thurrock river crossing on the M25 between Kent and Essex. The crossing has not had cash booths since November 2014, so every vehicle is logged by ANPR and the keeper must pay by midnight the day after the crossing. If you miss that window or the system fails to match your payment, Conduent issues a Penalty Charge Notice on behalf of National Highways. The PCN is £70 and drops to £35 if paid in 14 days. It is a civil charge under Part 6 of the Traffic Management Act 2004, enforced through the Dartford-Thurrock Crossing Charging Scheme 2013. That means you have a statutory right to challenge it, first informally to Conduent, then formally through the Traffic Penalty Tribunal. Most successful appeals come down to evidence of payment, a hire or lease vehicle transfer, or a procedural slip by the operator.",
    grounds: [
      {
        title: "The crossing charge was actually paid in time",
        body: "Under the Dartford-Thurrock Crossing Charging Scheme 2013 the charge is due by midnight the day after the crossing. If your bank statement, account auto top-up email or pre-pay receipt shows the payment cleared inside that window, the PCN must be cancelled. Conduent sometimes fails to match a payment when the registration was typed incorrectly or the vehicle was added to an account after the crossing. Send a written representation to Conduent with the transaction reference, the date and time stamp from your bank or PayPal, and the registration mark exactly as it appears on the V5C. Ask them to reconcile against the ANPR record. If they refuse you can take the same evidence to the Traffic Penalty Tribunal.",
      },
      {
        title: "The vehicle was on hire or lease at the time",
        body: "If you were not the registered keeper when the crossing happened, you are not liable. Regulation 14 of the Civil Enforcement of Road Traffic Contraventions (England) General Regulations 2022 lets a hire firm transfer liability to the named hirer by serving a copy of the hire agreement and statement of liability. A leasing company will normally do this automatically and forward the PCN to you, but the chain of paperwork must be complete. If you are the hirer, check the agreement covers the date and time of the crossing and that the company has issued the statement of liability. If the hire firm has paid and then re-billed you with an admin charge, the original PCN should already be closed and the dispute becomes a contractual one with the hire company, not with National Highways.",
      },
      {
        title: "The PCN was not served within the statutory window",
        body: "Schedule 1 of the 2022 Regulations requires the enforcement authority to serve the Penalty Charge Notice within six months of the contravention, and the Notice to Owner within six months of the PCN. The Dart Charge system is fast, but delays do happen when ANPR reads are queued or postal addresses are incorrect. If the PCN is dated more than six months after the crossing, write to Conduent stating that service is out of time under the 2022 Regulations and request cancellation. The Traffic Penalty Tribunal regularly cancels late-served PCNs, see decisions in the adjudicator's published register if you need a precedent to quote.",
      },
      {
        title: "The vehicle is exempt from the charge",
        body: "Exempt vehicles include two-wheeled motorcycles, mopeds and quad bikes, vehicles displaying a valid disabled tax class, and certain emergency vehicles. The exemption is set out in the Dartford-Thurrock Crossing Charging Scheme 2013 and its amendments. If your vehicle is taxed in the disabled class on the date of the crossing, request a DVLA V5C copy showing the tax class and send it with your representation. Conduent must also exempt vehicles where the keeper has registered for a recognised local resident discount scheme, although this is narrow and only covers a small number of Dartford and Thurrock postcodes.",
      },
      {
        title: "Procedural defect in the PCN itself",
        body: "Regulation 9 of the 2022 Regulations sets out the information that must appear on a PCN: the date, time and location of the contravention, the amount of the penalty, the discount and full-penalty amounts, and how to make representations. If any of that is missing, wrong or inconsistent, the PCN is defective. Look closely at the date and time of the contravention against your own diary, check the registration is correct character by character, and confirm the photographic evidence shows your vehicle. Even small errors such as a wrong make or colour can support a representation. Request the operator's photo evidence under the PCN appeal process if you are not sure.",
      },
    ],
    localNotes: [
      "The Dartford Crossing carries roughly 180,000 vehicles per day and is the busiest estuarial crossing in the UK.",
      "Cash booths were removed in November 2014 when free-flow ANPR charging began.",
      "The standard charge is £2.50 for a car, £3 for a two-axle goods vehicle and £6 for multi-axle HGVs.",
      "Payment is free at the time of crossing but a £35 to £70 PCN follows non-payment by midnight the next day.",
      "Conduent took over the contract from Sanef in 2020 and runs the customer service site dartford-crossing-charge.service.gov.uk.",
      "PCN representations go to Conduent at PO Box 842, Leeds, LS1 9QF or via the online account portal.",
      "Adjudication is handled by the Traffic Penalty Tribunal in Manchester, not London Tribunals.",
    ],
    faqs: [
      {
        question: "How long do I have to appeal a Dart Charge PCN?",
        answer:
          "You have 28 days from the date of issue to make an informal representation to Conduent, which keeps the discounted £35 rate available while they consider it. If they reject the informal challenge, they issue a Notice to Owner and you then have a further 28 days to make formal representations. If those are rejected you have 28 days to appeal to the Traffic Penalty Tribunal. Miss any of these windows and the PCN can escalate to a charge certificate at £105 plus enforcement.",
      },
      {
        question: "Can I appeal a Dart Charge PCN if I genuinely forgot to pay?",
        answer:
          "Forgetting is not itself a statutory ground for cancellation, but it does not mean you have no options. If this is your first PCN and you pay the underlying crossing charge promptly, Conduent has discretion to cancel as a goodwill gesture. Phrase your representation around the absence of any prior contraventions, the fact you have now paid, and any mitigating factor such as a hospital visit, recent bereavement or system outage. Always send it in writing so there is a paper trail if you need to escalate.",
      },
      {
        question: "What happens if I ignore a Dart Charge PCN?",
        answer:
          "After 28 days the £35 discount disappears and the PCN rises to £70. After a further 28 days without payment or representations, Conduent issues a Charge Certificate raising the amount to £105. If still unpaid, the case is registered as an order for recovery at the Traffic Enforcement Centre in Northampton and bailiffs can be instructed. You can still challenge by filing a TE9 witness statement if you never received the original PCN, or a TE7 application for more time, both available free from gov.uk.",
      },
      {
        question: "Is the Dart Charge PCN a criminal fine?",
        answer:
          "No. The Dart Charge is a civil penalty under Part 6 of the Traffic Management Act 2004 and the Dartford-Thurrock Crossing Charging Scheme 2013. It does not generate points, does not appear on a DBS check and does not need to be declared to insurers as a conviction. It is enforced through the civil county court process if it escalates, not through the magistrates' court. That said, you should still take it seriously because unpaid civil debts can affect credit files and lead to bailiff action.",
      },
      {
        question: "Can a foreign-registered vehicle be issued a Dart Charge PCN?",
        answer:
          "Yes. National Highways uses Euro Parking Collection to trace foreign-registered keepers in the EU and Switzerland and pursue unpaid charges. Several other countries are now also covered under bilateral arrangements. If you are a foreign keeper and believe you paid, your grounds are the same as for a UK keeper. If you never received the PCN because of a forwarding failure, you can ask for the time limit to be extended on the grounds that service was defective.",
      },
      {
        question: "Does the Dart Charge apply at night?",
        answer:
          "No. The Dart Charge only applies between 06:00 and 22:00 every day, including weekends and bank holidays. If your ANPR record shows a crossing outside those hours, the PCN cannot stand and you have an absolute ground to challenge under the Dartford-Thurrock Crossing Charging Scheme 2013. Pull the time-stamped image from your representation portal and quote it directly. If Conduent still refuses, the Traffic Penalty Tribunal will cancel without hesitation.",
      },
    ],
    relatedSlugs: [
      "dartford-crossing-fine-payment-missed",
      "mersey-gateway-pcn-appeal",
      "tyne-tunnel-pcn-appeal",
      "m6-toll-pcn-appeal",
    ],
  },
  {
    slug: "mersey-gateway-pcn-appeal",
    category: "toll-zone",
    location: "Mersey Gateway",
    fineTypeLabel: "PCN",
    title: "Mersey Gateway PCN appeal",
    h1: "How to appeal a Mersey Gateway Bridge PCN",
    description:
      "Step-by-step appeal guide for a Mersey Gateway Penalty Charge Notice on the Runcorn-Widnes crossing, with the statutory grounds and tribunal route.",
    seoTitle: "Mersey Gateway PCN Appeal: Statutory Grounds | AppealAFine",
    seoDescription:
      "Mersey Gateway Bridge PCN? Use these statutory grounds and the Traffic Penalty Tribunal route to challenge the £40 to £80 charge through Merseyflow.",
    searchVolume: 3600,
    factBox: {
      issuer: "emovis (Merseyflow) on behalf of Halton Borough Council",
      appealTo: "Traffic Penalty Tribunal",
      discountWindow: "14 days, PCN reduced to £40",
      formalChallengeWindow: "28 days to make formal representations after the Notice to Owner",
      standardFine: "£40 reduced, £80 full, £120 charge certificate",
      fastestRoute: "Informal challenge to Merseyflow within 14 days quoting the Mersey Gateway Bridge (Tolls) Order 2017",
    },
    intro:
      "The Mersey Gateway Bridge opened in October 2017 to relieve the ageing Silver Jubilee Bridge between Runcorn and Widnes. The crossing has no toll booths, so every vehicle must pay online or by phone by midnight the day after travel. The toll is currently £2 for a car. If you do not pay, emovis trading as Merseyflow issues a Penalty Charge Notice on behalf of Halton Borough Council. The PCN is £80, reduced to £40 if paid within 14 days, and rises to £120 once a charge certificate is issued. The legal basis is the Mersey Gateway Bridge (Tolls) Order 2017 together with Part 6 of the Traffic Management Act 2004. You have a clear right to challenge through informal representations, formal representations, and finally an appeal to the Traffic Penalty Tribunal. Most appeals succeed on evidence of payment, hire vehicle transfer of liability, or a procedural fault by the operator.",
    grounds: [
      {
        title: "You paid the toll on time but Merseyflow did not match it",
        body: "Under the Mersey Gateway Bridge (Tolls) Order 2017 the toll is due by midnight the day after the crossing. Mismatched payments are common when drivers mistype the registration in the online portal or pay against an outdated number plate after a transfer. If your card statement or Merseyflow account history shows the payment was made in time, send a written representation with the transaction reference, the registration as stated on the V5C and the ANPR image reference from the PCN. Merseyflow should reconcile and cancel. If they refuse, the Traffic Penalty Tribunal applies a strict reading of the Order and will cancel on documentary evidence of timely payment.",
      },
      {
        title: "The vehicle was on hire or lease",
        body: "If you were not the registered keeper, you are not liable. Under regulation 14 of the Civil Enforcement of Road Traffic Contraventions (England) General Regulations 2022, a hire company can transfer liability to the named hirer by serving a statement and a copy of the hire agreement. The agreement must cover the date and time of the crossing. If you are the hirer and Merseyflow has billed you direct, ask the hire firm for the transfer paperwork; if the chain is incomplete, the PCN should be cancelled. If you were the keeper but the vehicle was sold before the crossing, send Merseyflow the DVLA V5C/2 sale slip and any insurance change documents to prove you had transferred ownership.",
      },
      {
        title: "The PCN was served out of time",
        body: "Schedule 1 of the 2022 Regulations requires the enforcement authority to serve the PCN within six months of the contravention and the Notice to Owner within six months of the PCN. Mersey Gateway uses postal service so delays do happen, particularly for keepers who have moved house without updating DVLA. If the PCN is dated more than six months after the crossing, write to Merseyflow stating that service is out of time under the 2022 Regulations. The tribunal cancels late-served PCNs as a matter of routine, so this is one of the cleanest grounds to use when the dates support it.",
      },
      {
        title: "The vehicle is exempt under the Tolls Order",
        body: "Exemptions in the Mersey Gateway Bridge (Tolls) Order 2017 include two-wheeled motorcycles, mopeds, and vehicles displaying a valid disabled tax class on the date of crossing. Halton Borough Council also operates a local user discount scheme for residents in Halton postcodes. If you qualify but were not signed up at the time of the crossing, you can apply retrospectively in some cases. Send DVLA evidence of the tax class or proof of Halton residency along with your representation. The PCN should be cancelled if any statutory exemption applies, and you can supply the V5C extract or council tax bill as evidence.",
      },
      {
        title: "Defects in the PCN content",
        body: "Regulation 9 of the 2022 Regulations sets out the required content of a PCN: date, time and location of the contravention, the amount of the penalty, the discount and full-penalty amounts, and the procedure for representations. Anything missing or wrong undermines the PCN. Check the registration, the make and colour of the vehicle in the ANPR photograph, and the date and time. Even minor inconsistencies, such as a wrong make of car in the photo or a mismatch between the date in the PCN narrative and the date on the photo, are grounds to challenge. Request the full evidence pack if you are unsure.",
      },
    ],
    localNotes: [
      "The Mersey Gateway Bridge opened on 14 October 2017 and crosses the Mersey between Runcorn and Widnes.",
      "The bridge replaced the toll-free Silver Jubilee Bridge, which is now also tolled for through traffic.",
      "Standard toll for a car is £2, with HGVs paying up to £8 depending on axle count.",
      "Around 80,000 vehicles cross daily, more than originally forecast.",
      "Merseyflow's operational contractor is emovis (formerly Sanef ITS).",
      "Local Halton residents qualify for unlimited free crossings if they register their vehicle.",
      "Halton Borough Council retains the appeals authority although Merseyflow handles day-to-day administration.",
    ],
    faqs: [
      {
        question: "How long do I have to appeal a Mersey Gateway PCN?",
        answer:
          "You have 28 days from the date of issue to challenge informally to Merseyflow, which preserves the £40 discount while they consider it. If they reject the informal challenge they issue a Notice to Owner and you have a further 28 days for formal representations. If those are rejected, you have 28 days to appeal to the Traffic Penalty Tribunal. After that the case escalates to a charge certificate at £120 and enforcement at the Traffic Enforcement Centre in Northampton.",
      },
      {
        question: "I am a Halton resident, do I have to pay?",
        answer:
          "Halton residents can register one or two vehicles for free unlimited crossings under the council's local user discount scheme. Registration is not automatic, you must apply through the Merseyflow portal with proof of residency, normally a council tax bill or driving licence showing a Halton address. If you crossed before registering and have been issued a PCN, write to Merseyflow asking for the scheme to be applied retrospectively, attaching proof you were eligible on the date of crossing. They often agree as a one-off.",
      },
      {
        question: "What if I never received the original PCN?",
        answer:
          "If you did not receive the PCN at any address known to DVLA, you can file a witness statement on form TE9 once the case has been registered for enforcement at the Traffic Enforcement Centre. The TE9 is a free statement of truth and, if accepted, voids the order for recovery and returns the case to Merseyflow for re-service. Use TE7 if you simply need more time. Both forms are downloadable from gov.uk and there is no fee.",
      },
      {
        question: "Are motorbikes tolled at the Mersey Gateway?",
        answer:
          "No. Two-wheeled motorcycles, mopeds and quads are exempt under the Mersey Gateway Bridge (Tolls) Order 2017. If you have been issued a PCN on a motorcycle, the case is straightforward, send Merseyflow the V5C showing the body type as motorcycle and ask for cancellation under the statutory exemption. The Traffic Penalty Tribunal cancels these without question if Merseyflow refuses.",
      },
      {
        question: "Do I need a solicitor to appeal?",
        answer:
          "No. The Traffic Penalty Tribunal is designed to be used by unrepresented motorists. There is no fee, no risk of being ordered to pay anyone's costs, and the adjudicators expect to receive plain-English representations from keepers themselves. The tribunal applies the Mersey Gateway Bridge (Tolls) Order 2017 and the 2022 Regulations strictly, so a clear letter setting out the facts and the statutory ground is usually enough. You can submit online at trafficpenaltytribunal.gov.uk.",
      },
      {
        question: "Will a Mersey Gateway PCN affect my driving licence?",
        answer:
          "No. The Mersey Gateway PCN is a civil penalty, not a criminal offence. It does not generate points on your licence, does not need to be declared to insurers as a motoring conviction and does not appear on a DBS check. The only downside of leaving it unpaid is escalation: the £80 PCN becomes £120 at charge-certificate stage and is enforceable as a county court debt that can be passed to bailiffs.",
      },
    ],
    relatedSlugs: [
      "dart-charge-pcn-appeal",
      "tyne-tunnel-pcn-appeal",
      "m6-toll-pcn-appeal",
      "dartford-crossing-fine-payment-missed",
    ],
  },
  {
    slug: "tyne-tunnel-pcn-appeal",
    category: "toll-zone",
    location: "Tyne Tunnel",
    fineTypeLabel: "PCN",
    title: "Tyne Tunnel PCN appeal",
    h1: "How to appeal a Tyne Tunnel PCN",
    description:
      "Step-by-step appeal guide for an unpaid toll Penalty Charge Notice for the Tyne Tunnel, with statutory grounds and the route to the Traffic Penalty Tribunal.",
    seoTitle: "Tyne Tunnel PCN Appeal: Statutory Grounds | AppealAFine",
    seoDescription:
      "Tyne Tunnel PCN from TT2? Use these statutory grounds and the Traffic Penalty Tribunal route to challenge the £60 to £100 charge.",
    searchVolume: 2400,
    factBox: {
      issuer: "TT2 Limited (Tyne Tunnels operator)",
      appealTo: "Traffic Penalty Tribunal",
      discountWindow: "14 days, PCN reduced to £30",
      formalChallengeWindow: "28 days to make formal representations after the Notice to Owner",
      standardFine: "£30 reduced, £60 full, £100 charge certificate",
      fastestRoute: "Informal challenge to TT2 within 14 days quoting the Tyne Tunnels (Revision of Tolls) Order 2016",
    },
    intro:
      "The Tyne Tunnels are two road tunnels under the River Tyne connecting North Tyneside and South Tyneside. Operator TT2 Limited took over in 2008 and moved to fully cashless tolling in November 2021. The toll is £2.10 for a car and £4.20 for goods vehicles, paid online, by phone or via the Tyne Pass account. Payment is due by midnight the day after the crossing. If you miss the deadline or the system fails to match your payment, TT2 issues a Penalty Charge Notice. The PCN is £60, reduced to £30 if paid within 14 days, and rises to £100 once a charge certificate is issued. The legal basis is the Tyne Tunnels (Revision of Tolls) Order 2016 together with Part 6 of the Traffic Management Act 2004 and the Civil Enforcement of Road Traffic Contraventions (England) General Regulations 2022. You can challenge first informally to TT2, then formally, and finally at the Traffic Penalty Tribunal.",
    grounds: [
      {
        title: "The toll was paid on time",
        body: "If your Tyne Pass account auto-deducted, or your card statement shows the toll cleared by midnight the day after travel, the PCN cannot stand. TT2's system regularly misses payments when the registration entered online does not exactly match the V5C, when a vehicle is added to an account after the crossing, or when a previous keeper's account is still associated with the plate. Send TT2 a written representation with the transaction reference, the payment date and time, and the registration as it appears on the V5C. Ask them to reconcile against the ANPR record for that crossing. If they refuse, the Traffic Penalty Tribunal cancels on documentary evidence of payment.",
      },
      {
        title: "Hire or lease vehicle transfer of liability",
        body: "Under regulation 14 of the Civil Enforcement of Road Traffic Contraventions (England) General Regulations 2022, a hire firm can transfer liability to the named hirer by serving the hire agreement and a statement of liability. The agreement must cover the date and time of the crossing. If you are the hirer and TT2 has billed you direct, request the transfer paperwork from the hire firm. If the keeper company has not properly transferred liability, the PCN against you fails. If you were the keeper but had sold the vehicle, supply the V5C/2 sale slip showing the date of transfer to DVLA, alongside any insurance cancellation confirmation, and ask TT2 to pursue the new keeper instead.",
      },
      {
        title: "Out-of-time service",
        body: "Schedule 1 of the 2022 Regulations requires the PCN to be served within six months of the contravention and the Notice to Owner to follow within six months of the PCN. Service is by post, so delays happen when DVLA records are out of date or when post is returned. If the PCN is dated more than six months after the date of crossing, the PCN is invalid and you should write to TT2 stating that service is out of time under the 2022 Regulations and request cancellation. If they refuse, the Traffic Penalty Tribunal will cancel because there is no discretion on the time limit.",
      },
      {
        title: "Exempt vehicle under the Tolls Order",
        body: "The Tyne Tunnels (Revision of Tolls) Order 2016 exempts two-wheeled motorcycles, mopeds and quads, vehicles in the disabled tax class, and certain emergency vehicles. If your V5C shows the vehicle in the disabled tax class on the date of crossing, the PCN should be cancelled. Send a DVLA copy of the V5C and request cancellation under the statutory exemption. Note that the Tyne Tunnel also runs a small number of contracts with local authorities for refuse and gritter vehicles which give limited exemptions; if you operate one of those vehicles, check the contract before paying.",
      },
      {
        title: "Defective PCN content",
        body: "Regulation 9 of the 2022 Regulations requires the PCN to state the date, time and location of the contravention, the amount of the penalty, the discount and full-penalty amounts, and how to make representations. Any missing or incorrect information makes the PCN defective. Look closely at the date and time stamps in the ANPR image, the registration mark character by character, and the description of the vehicle. Compare the photo to your vehicle's make, model and colour; mismatches happen when ANPR misreads a plate. If anything is wrong, raise it in your representation and ask the adjudicator to apply the principle that civil enforcement notices must comply strictly with the Regulations.",
      },
    ],
    localNotes: [
      "The Tyne Tunnels comprise two parallel two-lane tunnels under the Tyne between Jarrow and Howdon.",
      "The first tunnel opened in 1967 and the second in 2011 as part of the New Tyne Crossing project.",
      "Cashless tolling launched on 24 November 2021, ending the manned and coin booths.",
      "Standard car toll is £2.10, HGVs £4.20 (updated under the 2016 Order and subsequent amendments).",
      "TT2 Limited operates the tunnels under a 30-year concession granted in 2008 by the North East Combined Authority.",
      "Around 50,000 vehicles use the tunnels each day.",
      "Local user discount of 50p per crossing is available via a Tyne Pass account.",
    ],
    faqs: [
      {
        question: "How long do I have to appeal a Tyne Tunnel PCN?",
        answer:
          "You have 28 days from the date of issue to challenge informally to TT2, which keeps the £30 discount available while they consider it. If TT2 rejects the informal challenge they issue a Notice to Owner and you have 28 days for formal representations. If those are rejected you have 28 days to appeal to the Traffic Penalty Tribunal. Beyond those deadlines TT2 issues a charge certificate at £100 and registers the debt for enforcement at the Traffic Enforcement Centre in Northampton.",
      },
      {
        question: "I tried to pay but the website was down, what now?",
        answer:
          "Document the outage. Take screenshots of any error pages, save the time-stamped emails of failed transactions, and note the time you tried to pay. Send these to TT2 with your representation, asking them to apply the principle that you should not be penalised for a failure of their own system. TT2 has discretion to cancel and the Traffic Penalty Tribunal regularly cancels PCNs where the keeper has clearly tried to pay within the window but the operator's payment infrastructure failed.",
      },
      {
        question: "Will an unpaid Tyne Tunnel PCN affect my credit file?",
        answer:
          "Not directly. A civil PCN does not appear on your credit file. However, if the case escalates to a county court judgment after the Traffic Enforcement Centre registers the debt, that judgment will appear on your credit record and may be visible for six years. The way to avoid this is to either pay or to file a TE9 witness statement if you never received the PCN, or a TE7 application for more time, both available free from gov.uk.",
      },
      {
        question: "What if I crossed on a foreign-registered vehicle?",
        answer:
          "TT2 uses Euro Parking Collection to trace foreign keepers in the EU and several non-EU countries and pursue unpaid charges. Foreign keepers have the same statutory rights as UK keepers. If you have evidence that the toll was paid, or that the vehicle was on hire, or that service is out of time, the same grounds apply. Send representations in English to TT2 with all supporting paperwork translated where reasonable. The Traffic Penalty Tribunal accepts appeals from non-UK keepers.",
      },
      {
        question: "Can the Tyne Tunnel PCN be transferred to my employer?",
        answer:
          "If the vehicle is registered to a company and you were driving on company business, the PCN goes to the company as registered keeper. The company can either pay or pass it to you under the contract of employment. They cannot transfer formal civil liability to you, that stays with the registered keeper, but they can make you reimburse them. If your employer has incorrectly named you in the PCN process when the vehicle is registered to them, you can ask TT2 to reissue the PCN to the correct keeper.",
      },
      {
        question: "Is the Tyne Tunnel toll a criminal fine?",
        answer:
          "No. The Tyne Tunnel toll PCN is a civil charge under Part 6 of the Traffic Management Act 2004 and the Tyne Tunnels (Revision of Tolls) Order 2016. It does not create points, does not appear on a DBS check and does not need to be declared as a motoring conviction. Enforcement, if unpaid, is via the county court process rather than the magistrates' court. Take it seriously, because escalation can lead to bailiffs and CCJs, but you do not need to declare it on insurance or job applications.",
      },
    ],
    relatedSlugs: [
      "dart-charge-pcn-appeal",
      "mersey-gateway-pcn-appeal",
      "m6-toll-pcn-appeal",
      "dartford-crossing-fine-payment-missed",
    ],
  },
  {
    slug: "m6-toll-pcn-appeal",
    category: "toll-zone",
    location: "M6 Toll",
    fineTypeLabel: "PCN",
    title: "M6 Toll PCN appeal",
    h1: "How to challenge an M6 Toll PCN: the rules are different",
    description:
      "The M6 Toll is a private motorway, so the usual Traffic Management Act appeal route does not apply. Here is what does, and how to defend a contract-law claim if it goes to court.",
    seoTitle: "M6 Toll PCN: Why It Is Not a Real PCN | AppealAFine",
    seoDescription:
      "The M6 Toll is a private road, not a TMA 2004 fine. Learn why standard appeal routes do not apply and how to defend a contractual claim from Midland Expressway.",
    searchVolume: 1900,
    factBox: {
      issuer: "Midland Expressway Limited (M6toll)",
      appealTo: "Midland Expressway internal review, then County Court defence if pursued",
      discountWindow: "Discount terms set contractually by Midland Expressway, typically 14 days",
      formalChallengeWindow: "No statutory window; rely on contract law and respond in writing within 28 days",
      standardFine: "Toll plus admin charge, typically £10 to £100 depending on stage",
      fastestRoute: "Pay the underlying toll promptly and dispute admin fees as an unenforceable penalty",
    },
    intro:
      "The M6 Toll is the only privately operated motorway in the UK. It runs north-east of Birmingham between junctions 3a and 11a of the M6 and is owned and operated by Midland Expressway Limited. Crucially, the M6 Toll is not a road to which Part 6 of the Traffic Management Act 2004 applies, so the standard civil enforcement framework does not work the same way. There is no Penalty Charge Notice in the statutory sense, no Traffic Penalty Tribunal, no Notice to Owner, and the Protection of Freedoms Act 2012 Schedule 4 (which governs private parking enforcement) does not cover moving toll roads. What you actually receive when you use the M6 Toll without paying is a contractual demand for payment dressed up as a PCN. Your defence has to be in contract law, not under any statutory ground. The good news is that the legal basis for inflated charges is weak and a properly defended county court claim has a real prospect of success.",
    grounds: [
      {
        title: "There is no statutory PCN, only a contractual demand",
        body: "When you drive through the M6 Toll you are entering into a contract with Midland Expressway Limited. The PCN is essentially an invoice for the toll plus an administrative charge. Because the M6 Toll is not a road to which Part 6 of the Traffic Management Act 2004 applies, Midland Expressway cannot use the Traffic Enforcement Centre or the Traffic Penalty Tribunal. There is no statutory appeal route. The only enforcement mechanism is a county court claim for breach of contract. That changes the strategy: instead of formal representations, write to Midland Expressway disputing the admin charge as an unenforceable penalty at common law, separate from the underlying toll which you can choose to pay without prejudice.",
      },
      {
        title: "POFA 2012 does not apply to private toll roads",
        body: "The Protection of Freedoms Act 2012 Schedule 4 provides the statutory framework that lets private parking operators transfer liability to the registered keeper of a vehicle when the driver is unknown. It only applies to relevant land, which is land where parking takes place. The M6 Toll is not parking and POFA 2012 cannot be relied on by Midland Expressway. That means if Midland Expressway pursues the registered keeper but cannot prove who the driver was, they have no statutory route to keeper liability. A keeper who was not driving can write to Midland Expressway pointing out that POFA 2012 does not apply, that the registered keeper has no contractual liability for a toll they did not personally incur, and that the demand should be cancelled.",
      },
      {
        title: "The administrative charge may be an unenforceable penalty",
        body: "Under the doctrine in Cavendish Square Holding BV v Makdessi and ParkingEye Limited v Beavis (Supreme Court 2015), a contractual charge above the cost of breach is an unenforceable penalty unless it protects a legitimate commercial interest and is not out of all proportion. Midland Expressway's legitimate interest in collecting tolls is real, but the actual cost of recovering an unpaid toll is small. If the admin charge is disproportionate to the underlying toll, that is a credible argument to raise. Pay the toll itself promptly to remove the breach, then dispute the additional charge specifically as a penalty under Cavendish v Makdessi, and let Midland Expressway decide whether to sue.",
      },
      {
        title: "Defective service of the demand",
        body: "Although there is no statutory time limit for service, common law requires the demand to be communicated to the contracting party within a reasonable time. If you only received the demand months after the alleged use of the road, you can argue that delay has caused prejudice. The Civil Procedure Rules also impose pre-action obligations on a claimant, including the Pre-Action Protocol for Debt Claims for individuals. If Midland Expressway issues a county court claim without complying with the protocol you may be able to ask the court to stay the claim and order them to comply, which often removes the appetite for the litigation.",
      },
      {
        title: "Dispute through county court defence if claim is issued",
        body: "If Midland Expressway issues a county court claim, file a defence within 28 days using form N9B. Argue: there was no contract because the driver is unknown and POFA 2012 does not apply, or alternatively that the admin charge is an unenforceable penalty under Cavendish v Makdessi, or that the claimant has not complied with the Pre-Action Protocol for Debt Claims. Many claimants discontinue when faced with a defended claim because the legal costs and small claims track risk wipe out the recoverable amount. If you do go to a hearing, take printouts of the relevant statutes and case names so the district judge can locate them quickly.",
      },
    ],
    localNotes: [
      "The M6 Toll opened in December 2003 and runs 27 miles from M6 junction 3a near Coleshill to M6 junction 11a near Cannock.",
      "It is owned and operated by Midland Expressway Limited, ultimately controlled by IFM Investors.",
      "The concession runs until 2054.",
      "Standard car toll is currently around £8.40 weekday and £6.90 weekend, with prices reviewed regularly.",
      "It is the only public motorway in the UK where tolls are charged on the entire length to ordinary cars.",
      "The road was built privately under the New Roads and Street Works Act 1991, which is why the TMA 2004 civil enforcement regime does not apply.",
      "Midland Expressway has historically pursued unpaid tolls via debt collection agencies including DCBL.",
    ],
    faqs: [
      {
        question: "Can I be issued points on my licence for not paying the M6 Toll?",
        answer:
          "No. The M6 Toll is a civil contractual matter, not a criminal offence. There are no points, no fine on the magistrates' court system, and nothing to declare to insurers as a conviction. Any letters describing the M6 Toll PCN as a fine that affects your licence are misleading. The worst outcome is a county court judgment if you ignore proceedings, which would appear on your credit file for six years unless paid within one month of judgment.",
      },
      {
        question: "Should I just pay the M6 Toll PCN to make it go away?",
        answer:
          "Pay the underlying toll, because that is what you actually owe. Disputing the toll itself when you genuinely used the road is hard. The more winnable fight is the administrative charge stacked on top, which can be argued as an unenforceable penalty under Cavendish v Makdessi. Pay the toll without prejudice to the admin charge, explicitly stating in writing that the payment is for the toll only and that the admin charge is disputed. That preserves your position if it ever goes to court.",
      },
      {
        question: "Can DCBL or another bailiff turn up at my door for an unpaid M6 Toll?",
        answer:
          "Not without a court judgment first. Debt collection agencies have no special powers beyond writing letters and making phone calls. They can only enforce against your property if Midland Expressway obtains a county court judgment against you and then applies for a warrant of control. Until then, DCBL and similar agencies are simply asking you to pay. You can write to them stating that the debt is disputed and that they should refer the matter back to their client.",
      },
      {
        question: "Does POFA 2012 not give Midland Expressway keeper liability?",
        answer:
          "No. POFA 2012 Schedule 4 only applies to parking on relevant land, which means land where parking takes place. A motorway is not relevant land. The Court of Appeal in Vehicle Control Services Ltd v HMRC made clear that Schedule 4 is narrow and confined to parking. Midland Expressway therefore cannot rely on POFA 2012 to make the keeper liable for a driver's toll, and the keeper has a real defence if pursued purely as registered keeper without proof of who was driving.",
      },
      {
        question: "Is there a Traffic Penalty Tribunal route?",
        answer:
          "No. The Traffic Penalty Tribunal only adjudicates civil enforcement under the Traffic Management Act 2004 and related regulations. Because the M6 Toll is not within that framework, the tribunal has no jurisdiction. The only forum is the County Court, and only if Midland Expressway chooses to sue. That is also why M6 Toll demands cannot escalate via a charge certificate or the Traffic Enforcement Centre in Northampton, in contrast to Dart Charge or Mersey Gateway.",
      },
      {
        question: "What should I write in my response letter?",
        answer:
          "Keep it short and firm. Say that you dispute the demand, that POFA 2012 Schedule 4 does not apply to the M6 Toll because it is not relevant land, that the administrative charge is an unenforceable penalty under Cavendish v Makdessi, and that you require any further communication to comply with the Pre-Action Protocol for Debt Claims. Send by recorded post and keep proof of delivery. Do not concede that you were the driver unless you genuinely were and intend to pay the underlying toll.",
      },
    ],
    relatedSlugs: [
      "dart-charge-pcn-appeal",
      "mersey-gateway-pcn-appeal",
      "tyne-tunnel-pcn-appeal",
      "dartford-crossing-fine-payment-missed",
    ],
  },
  {
    slug: "dartford-crossing-fine-payment-missed",
    category: "toll-zone",
    location: "Dartford Crossing",
    fineTypeLabel: "Missed Payment PCN",
    title: "Missed Dartford Crossing payment",
    h1: "I forgot to pay the Dartford Crossing, what should I do?",
    description:
      "Practical guide for drivers who missed the midnight-next-day Dart Charge payment window, with the grace rules and the statutory grounds to challenge if you did pay.",
    seoTitle: "Forgot to Pay Dartford Crossing? Your Options | AppealAFine",
    seoDescription:
      "Missed the Dart Charge deadline? Pay the £2.50, challenge the £35 PCN where you can, and use the statutory grounds when the system failed.",
    searchVolume: 4400,
    factBox: {
      issuer: "Conduent on behalf of National Highways",
      appealTo: "Traffic Penalty Tribunal",
      discountWindow: "14 days, PCN reduced to £35",
      formalChallengeWindow: "28 days to make formal representations after the Notice to Owner",
      standardFine: "£35 reduced, £70 full, £105 charge certificate",
      fastestRoute: "Pay the underlying £2.50 immediately, then write to Conduent asking for goodwill cancellation",
    },
    intro:
      "Most drivers who get a Dart Charge PCN did not deliberately dodge the toll, they simply forgot. The Dartford Crossing has no booths and the payment window is short: you must pay by midnight the day after the crossing. Once that window closes, Conduent issues a £70 PCN on behalf of National Highways, halved to £35 if paid within 14 days. The good news is that there are several ways out. You can ask Conduent for a goodwill cancellation, particularly if it is your first PCN. You can challenge under the Dartford-Thurrock Crossing Charging Scheme 2013 if the system failed to match a payment you actually made. And you can use the statutory grounds under Part 6 of the Traffic Management Act 2004 and the Civil Enforcement of Road Traffic Contraventions (England) General Regulations 2022 if there is any procedural defect. This page walks through each route in order.",
    grounds: [
      {
        title: "The payment did clear but Conduent did not match it",
        body: "This is the most common ground that succeeds at the Traffic Penalty Tribunal. The Dart Charge system matches incoming card or account payments to the ANPR record by registration mark and time stamp. Mismatches happen when the registration entered online had a typo, when the account holder used an old plate after a vehicle change, or when the payment was credited a few seconds after the midnight cut-off but the actual transaction was authorised earlier. Pull your bank statement or PayPal transaction record, screenshot the timing, and write a representation to Conduent quoting the Dartford-Thurrock Crossing Charging Scheme 2013 and asking for reconciliation. Send proof in PDF, not just a forwarded email.",
      },
      {
        title: "Goodwill cancellation for a first contravention",
        body: "Conduent has internal discretion to cancel a first PCN as a one-off. There is no statutory right to this but it is widely granted. To make the request work, pay the underlying £2.50 toll immediately via the gov.uk service and quote the payment reference in your representation. Apologise for the missed deadline, state that this is your first contravention, and explain any mitigating context such as a hospital visit, unfamiliarity with the cashless system, or a recent house move. Keep it short and polite. Conduent will normally cancel if the toll is paid and you have no prior history of contraventions on the account or vehicle.",
      },
      {
        title: "Hire or lease vehicle, liability not transferred properly",
        body: "If the vehicle was hired or leased on the date of crossing, the registered keeper is the hire firm and they should transfer liability to you under regulation 14 of the Civil Enforcement of Road Traffic Contraventions (England) General Regulations 2022. The transfer needs a copy of the hire agreement and a statement of liability served on Conduent. If you are receiving a PCN directly from Conduent but the chain is incomplete, you have a defence: the PCN was issued to the wrong person. Send Conduent a copy of your hire agreement covering the date of crossing and ask them to either confirm the transfer paperwork is complete or cancel the PCN against you.",
      },
      {
        title: "Foreign-registered or recently sold vehicle",
        body: "If you sold the vehicle before the crossing, send Conduent your V5C/2 sale slip with the date of transfer to DVLA. If your record is clean, the PCN should be reissued to the new keeper. If you were never the keeper because the vehicle is foreign-registered, the same routes apply through Euro Parking Collection. Drivers with foreign plates retain the right to challenge under the Dartford-Thurrock Crossing Charging Scheme 2013 and the 2022 Regulations. Where service was effected late because the postal trace took months, you may have an out-of-time service argument as a backup.",
      },
      {
        title: "Out-of-time service or defective PCN",
        body: "Schedule 1 of the 2022 Regulations requires the PCN to be served within six months of the contravention and the Notice to Owner to follow within six months of the PCN. If your PCN is dated more than six months after the actual crossing, write to Conduent stating that service is out of time and ask for cancellation. Regulation 9 also requires the PCN to state the date, time and location of the contravention, the amount of the penalty, the discount and full-penalty amounts, and the procedure for representations. Look at the PCN carefully for any inconsistencies, missing fields or wrong details. The Traffic Penalty Tribunal applies these requirements strictly.",
      },
    ],
    localNotes: [
      "The Dart Charge applies 06:00 to 22:00 every day including weekends and bank holidays.",
      "Standard car charge is £2.50, paid by midnight the day after the crossing.",
      "Pre-pay accounts get a small discount and queue-jump priority at peak times.",
      "Two-wheeled motorcycles, mopeds and quads are exempt, as are vehicles in the disabled tax class.",
      "Conduent took over the contract from Sanef in 2020 and runs dartford-crossing-charge.service.gov.uk.",
      "The Traffic Penalty Tribunal in Manchester handles appeals, not London Tribunals.",
      "Around 180,000 vehicles cross daily, with around 1 in 20 contraventions resulting in a PCN.",
    ],
    faqs: [
      {
        question: "I forgot to pay, can I still pay just the £2.50?",
        answer:
          "Yes, but only within a narrow window. The Dart Charge website lets you pay the toll for up to a year after the crossing on a goodwill basis, even after the formal deadline has passed. Paying does not automatically cancel the PCN, but it strongly supports a goodwill cancellation request, because it shows you intended to comply and did so as soon as you realised. Pay first, then write to Conduent with the payment reference, the PCN number and a polite apology. Most first-time cases are cancelled.",
      },
      {
        question: "Is there any grace period after midnight?",
        answer:
          "Not officially. The Dartford-Thurrock Crossing Charging Scheme 2013 sets the deadline as midnight the day after the crossing. In practice Conduent runs a small unwritten tolerance for payments that arrive within a few hours of midnight if the bank statement shows the transaction was initiated earlier, but you should not rely on that. If you are running late, pay before midnight at all costs. If you genuinely paid before midnight but Conduent's system credited the payment after midnight, your bank's time-stamped statement is the evidence you need.",
      },
      {
        question: "Will the PCN still be £35 if I challenge it?",
        answer:
          "Conduent keeps the discounted £35 rate available while they consider an informal representation. If they reject the representation and you then escalate to a formal challenge after the Notice to Owner, the discount is normally lost and the full £70 applies, although the adjudicator can reinstate the discount on cancellation. You can also choose to pay £35 to close the case while still preserving the right to a refund if you can show a clear procedural error and pursue a complaint. Most drivers find it cheaper to pay and move on if the case is borderline.",
      },
      {
        question: "What if I never received the PCN at all?",
        answer:
          "If you only learn about the case once it has reached the Traffic Enforcement Centre in Northampton for enforcement, you can file a TE9 witness statement on the gov.uk service. The TE9 is a free statement of truth that you did not receive the PCN. If accepted, the order for recovery is cancelled and the case returns to Conduent for re-service, which gives you a fresh chance to challenge. Use form TE7 if you simply need more time to act. Both forms are free and do not require a solicitor.",
      },
      {
        question: "Can I appeal on the grounds that I did not know the toll existed?",
        answer:
          "Ignorance of the toll is not a statutory ground for cancellation and the Traffic Penalty Tribunal will not accept it. The crossing is signed clearly in advance with multiple gantries warning drivers to pay. However, it can be part of a mitigation package: explain in your representation that you are not local, that this was a one-off journey, that you have now paid, and that you are unlikely to use the crossing again. Combined with a clean record this often produces a goodwill cancellation, even though it is not a formal ground.",
      },
      {
        question: "What if a hire car company is invoicing me an admin fee on top?",
        answer:
          "The hire firm can charge a contractual admin fee for handling the PCN transfer, typically £25 to £50. That is not part of the PCN itself and is governed by your hire agreement, not by the 2022 Regulations. If the fee is high and you think it is unreasonable, look at the small print of the hire agreement to see what it actually says. You can also argue under the Consumer Rights Act 2015 that the fee must be transparent and prominent in the agreement, and dispute it on those grounds with the hire firm.",
      },
    ],
    relatedSlugs: [
      "dart-charge-pcn-appeal",
      "mersey-gateway-pcn-appeal",
      "tyne-tunnel-pcn-appeal",
      "ulez-pcn-appeal-uk",
    ],
  },
  {
    slug: "ulez-pcn-appeal-uk",
    category: "toll-zone",
    location: "ULEZ",
    fineTypeLabel: "PCN",
    title: "ULEZ PCN appeal",
    h1: "How to appeal a ULEZ Penalty Charge Notice",
    description:
      "Appeal a Transport for London ULEZ PCN with the statutory grounds, deadlines and route to London Tribunals.",
    seoTitle: "ULEZ PCN Appeal: Statutory Grounds + Letter | AppealAFine",
    seoDescription:
      "Received a £180 ULEZ PCN from TfL? Use the statutory grounds, the 14-day discount window and the London Tribunals route to challenge it.",
    searchVolume: 8100,
    factBox: {
      issuer: "Transport for London",
      appealTo: "London Tribunals (Environment and Traffic Adjudicators)",
      discountWindow: "14 days, PCN reduced to £90",
      formalChallengeWindow: "28 days for formal representations after the Notice of Rejection",
      standardFine: "£90 reduced, £180 full, £270 charge certificate",
      fastestRoute: "Informal representation to TfL within 14 days quoting the Greater London Low Emission Zone Charging Order 2006 as amended",
    },
    intro:
      "The Ultra Low Emission Zone is a daily charge for driving non-compliant vehicles in Greater London. It launched in central London in April 2019, expanded to the North and South Circular in October 2021, and went London-wide on 29 August 2023. The standard charge is £12.50 per day. Transport for London enforces with a network of ANPR cameras. If you drive a non-compliant vehicle and do not pay by midnight the third day after the journey, TfL issues a Penalty Charge Notice. The PCN is £180, reduced to £90 if paid within 14 days, and rises to £270 once a charge certificate is issued. Legal basis is the Greater London Low Emission Zone Charging Order 2006 (as amended by the Mayor's ULEZ Variation Orders), together with the GLA Road Traffic Order 2003 and Part 6 of the Traffic Management Act 2004. You appeal first informally to TfL, then formally, then to London Tribunals.",
    grounds: [
      {
        title: "The vehicle is actually ULEZ-compliant",
        body: "The single most common error is TfL treating a compliant vehicle as non-compliant. Petrol cars are compliant if they meet Euro 4 (broadly first registered after January 2006) and diesels if they meet Euro 6 (broadly first registered after September 2015). Some older cars have been retrofitted or had their emissions certificate reissued. Use the TfL vehicle checker against your V5C and any DVSA emissions records, take a screenshot of the result, and send it with your representation. If the checker still says non-compliant but you hold a Certificate of Conformity from the manufacturer showing the actual Euro standard, attach that too. TfL must cancel where the vehicle meets the standard.",
      },
      {
        title: "Charge was paid before the deadline",
        body: "The ULEZ charge is due by midnight on the third day after the journey, so you have a generous window: travel on Monday, pay by midnight Thursday. If you paid in time but TfL did not match the payment, your bank statement is the evidence. Common reasons for mismatches: typing the registration with a confused 0 versus O or 1 versus I, paying against a previous keeper's vehicle, or paying for a different date in the auto-pay calendar. Send TfL the payment receipt, the registration as it appears on the V5C, and ask them to reconcile. If they refuse, London Tribunals will cancel on documentary evidence.",
      },
      {
        title: "Vehicle on hire or lease, liability not properly transferred",
        body: "Under regulation 14 of the Civil Enforcement of Road Traffic Contraventions (England) General Regulations 2022, a hire firm can transfer liability to the named hirer by serving the agreement and a statement of liability. The agreement must cover the date of the journey. If you are the hirer and TfL has billed you direct, request the transfer paperwork from the hire firm; if the chain is incomplete, the PCN against you fails. If you sold the vehicle before the journey, the V5C/2 sale slip dated before the journey date is your evidence. TfL should reissue the PCN to the new keeper or cancel.",
      },
      {
        title: "Exempt or temporary exempt vehicle",
        body: "Several exemptions apply under the Greater London Low Emission Zone Charging Order 2006: vehicles in the disabled or disabled-passenger tax class, agricultural and historic vehicles (over 40 years old and unmodified), and certain showmen's vehicles. NHS patients on chemotherapy or dialysis can claim a temporary exemption through the TfL exemption register. If you qualify but were not registered at the time of the journey, you can apply retrospectively for some categories. Send DVLA evidence of the tax class, the historic vehicle status, or the medical letter, and ask TfL to apply the exemption to the dates in question.",
      },
      {
        title: "PCN served out of time or defective in content",
        body: "Under Schedule 1 of the 2022 Regulations, TfL must serve the PCN within six months of the contravention and the Notice to Owner within six months of the PCN. Regulation 9 sets out the required content: date, time and location of the contravention, the amount of the penalty, the discount and full-penalty amounts, and the procedure for representations. London Tribunals applies these requirements strictly. Late service or missing fields are a clean ground to cancel. Check the PCN closely, particularly the date and time stamp on the ANPR image against the dates stated in the body of the PCN, and raise any inconsistency in your representation.",
      },
    ],
    localNotes: [
      "The central London ULEZ launched on 8 April 2019 inside the Congestion Charge zone.",
      "The zone expanded to the North and South Circular on 25 October 2021.",
      "ULEZ went London-wide on 29 August 2023, covering all 32 boroughs and the City.",
      "Standard daily charge is £12.50, on top of any Congestion Charge or Low Emission Zone charge for HGVs.",
      "Petrol vehicles must meet Euro 4, diesels must meet Euro 6.",
      "TfL operates more than 2,750 ANPR cameras across the expanded zone.",
      "Appeals are heard by Environment and Traffic Adjudicators at London Tribunals in Chancery Exchange, EC4.",
    ],
    faqs: [
      {
        question: "What is the deadline for paying the ULEZ charge?",
        answer:
          "You have until midnight on the third day after your journey to pay the £12.50 daily charge. If you travel on Monday, the deadline is midnight Thursday. After that, TfL issues a PCN. You can also pay in advance up to 90 days ahead, or set up auto-pay against your number plate to avoid missing the deadline. Auto-pay has a small annual admin fee but spreads the charge to a monthly invoice and stops the risk of forgetting.",
      },
      {
        question: "Can I appeal a ULEZ PCN if I did not know about the zone?",
        answer:
          "Ignorance is not a statutory ground and London Tribunals will not cancel on that basis alone. The zone is signed at every entry point and was widely publicised, especially before the August 2023 expansion. However, if it is your first contravention and you have now signed up for auto-pay or paid the underlying charges, TfL has discretion to cancel as a goodwill gesture. Phrase your representation around your clean record, the steps you have taken to avoid future contraventions, and any mitigating circumstance.",
      },
      {
        question: "Will a ULEZ PCN affect my driving licence?",
        answer:
          "No. The ULEZ PCN is a civil penalty under Part 6 of the Traffic Management Act 2004 and the Greater London Low Emission Zone Charging Order 2006. It does not generate points, does not appear on a DBS check, and does not need to be declared to insurers as a motoring conviction. The only downside of leaving it unpaid is escalation: £90 becomes £180, then £270, then a county court order for recovery and potentially bailiff action through the Traffic Enforcement Centre in Northampton.",
      },
      {
        question: "I sold my car before the ULEZ journey, why am I being billed?",
        answer:
          "TfL uses DVLA's keeper records to identify the responsible person. If DVLA was not notified of the transfer in time, you remain the registered keeper on paper. Send TfL a copy of your V5C/2 sale slip showing the date of transfer, ideally before the date of the contravention. Also send any proof you handed over the V5C and that the buyer signed it. TfL should reissue the PCN to the actual new keeper. If DVLA records are wrong, you may also need to write to DVLA to correct them.",
      },
      {
        question: "Does the ULEZ apply on weekends?",
        answer:
          "Yes. Unlike the Congestion Charge, ULEZ operates 24 hours a day, 7 days a week, 365 days a year, except Christmas Day, which is the only day in the year when it does not apply. If you crossed into the zone late on Christmas Eve or early on Boxing Day, double-check the time stamp on the ANPR image. If your journey actually fell on Christmas Day itself, the PCN cannot stand and London Tribunals will cancel.",
      },
      {
        question: "Can London Tribunals reduce the PCN rather than cancel it?",
        answer:
          "No. London Tribunals adjudicators either uphold or cancel. They have no power to reduce the amount. However, they can direct TfL to accept the discounted £90 rate where the appeal succeeds in part or where there has been administrative error by TfL, and they can recommend that TfL exercises discretion outside the strict statutory grounds. Most appeals succeed or fail on the strict statutory grounds, so frame your representation around the statutes rather than on mitigation alone.",
      },
    ],
    relatedSlugs: [
      "congestion-charge-pcn-appeal",
      "clean-air-zone-pcn-appeal-uk",
      "dart-charge-pcn-appeal",
      "dartford-crossing-fine-payment-missed",
    ],
  },
  {
    slug: "congestion-charge-pcn-appeal",
    category: "toll-zone",
    location: "Congestion Charge",
    fineTypeLabel: "PCN",
    title: "Congestion Charge PCN appeal",
    h1: "How to appeal a London Congestion Charge PCN",
    description:
      "Step-by-step appeal of a Transport for London Congestion Charge PCN, with statutory grounds and the route to London Tribunals.",
    seoTitle: "Congestion Charge PCN Appeal: Grounds + Letter | AppealAFine",
    seoDescription:
      "Got a £160 London Congestion Charge PCN? Use these statutory grounds and the London Tribunals route to challenge through TfL.",
    searchVolume: 3600,
    factBox: {
      issuer: "Transport for London",
      appealTo: "London Tribunals (Environment and Traffic Adjudicators)",
      discountWindow: "14 days, PCN reduced to £80",
      formalChallengeWindow: "28 days for formal representations after the Notice to Owner",
      standardFine: "£80 reduced, £160 full, £240 charge certificate",
      fastestRoute: "Informal representation to TfL within 14 days quoting the GLA Road Traffic (Congestion Charging Provisions) Order 2003",
    },
    intro:
      "The London Congestion Charge has been in place since February 2003 and now operates 07:00 to 18:00 Monday to Friday and 12:00 to 18:00 Saturday, Sunday and bank holidays. The zone covers most of central London inside the Inner Ring Road. The daily charge is £15 if paid by midnight on the day or by midnight the day after, slightly more if paid the following day. Auto-pay accounts pay a discounted £13.50. If you do not pay, Transport for London issues a Penalty Charge Notice. The PCN is £160, reduced to £80 if paid within 14 days, and rises to £240 once a charge certificate is issued. Legal basis is the GLA Road Traffic (Congestion Charging Provisions) Order 2003, the GLA Road Traffic Order 2003 and Part 6 of the Traffic Management Act 2004. You can challenge first informally to TfL, then formally after the Notice to Owner, then to London Tribunals.",
    grounds: [
      {
        title: "The charge was paid in time",
        body: "If you paid the daily charge on or before midnight the day of travel, or by midnight the day after at the £17.50 late rate, the PCN cannot stand. TfL system mismatches are common when the registration is mistyped, when an auto-pay account is associated with the wrong vehicle, or when a previous keeper has a stale entry. Send TfL the bank statement or auto-pay confirmation with the transaction reference, the registration exactly as it appears on the V5C, and ask them to reconcile against the ANPR record for the date in question. London Tribunals will cancel on documentary evidence of timely payment.",
      },
      {
        title: "Vehicle exempt or had a valid discount",
        body: "Exemptions under the GLA Road Traffic (Congestion Charging Provisions) Order 2003 include two-wheeled motorcycles, mopeds, vehicles in the disabled or disabled-passenger tax class, NHS staff within scope of the reimbursement scheme, and licensed London taxis. Resident discount of 90 percent is available if you live inside the zone and are registered. If your V5C shows the disabled tax class on the date of travel, send TfL the DVLA extract and ask for cancellation. If you were entitled to the resident discount but had not yet registered, you can apply retrospectively in some cases.",
      },
      {
        title: "Hire or lease vehicle and proper transfer of liability",
        body: "Under regulation 14 of the Civil Enforcement of Road Traffic Contraventions (England) General Regulations 2022 a hire firm can transfer liability to the named hirer by serving the hire agreement and a statement of liability. The agreement must cover the date of travel. If you are the hirer and TfL has billed you direct, ask the hire firm for the transfer paperwork. If the chain is incomplete the PCN against you fails. If you sold the vehicle before the journey, send TfL the V5C/2 sale slip dated before the journey and ask them to reissue to the actual new keeper.",
      },
      {
        title: "Vehicle did not enter the zone",
        body: "The Congestion Charge applies to vehicles that enter the marked zone. ANPR misreads are rare but happen, particularly with personalised or non-standard plates. If your vehicle was nowhere near central London on the date stamped on the PCN, gather corroborating evidence: dashcam footage, fuel receipts in a different part of the country, work logbook entries, or telematics data from your insurance black box. Send these with your representation. TfL will request the full ANPR image, which often shows a plate similar but not identical to yours, leading to cancellation. London Tribunals takes alibi evidence seriously when properly documented.",
      },
      {
        title: "PCN served late or defective in content",
        body: "Schedule 1 of the 2022 Regulations requires TfL to serve the PCN within six months of the contravention and the Notice to Owner within six months of the PCN. Regulation 9 sets out the required PCN content. Late service or missing details are statutory grounds for cancellation. Check the PCN for: correct date and time of contravention against the ANPR image, registration correctly stated, location described accurately, penalty and discount amounts shown, and instructions for representations included. Any defect supports an appeal, particularly when raised early in the informal challenge.",
      },
    ],
    localNotes: [
      "The Congestion Charge zone covers most of central London inside the Inner Ring Road, from Vauxhall to King's Cross and from Park Lane to Aldgate.",
      "Hours are 07:00 to 18:00 Monday to Friday and 12:00 to 18:00 weekends and bank holidays.",
      "Daily charge is £15 (£13.50 on auto-pay).",
      "Residents inside the zone get a 90 percent discount if registered.",
      "Two-wheeled vehicles, taxis and most NHS patients within scope are exempt.",
      "The Congestion Charge runs alongside the ULEZ, so non-compliant vehicles pay both.",
      "Appeals are heard by Environment and Traffic Adjudicators at London Tribunals.",
    ],
    faqs: [
      {
        question: "I drove through the zone but it was outside the hours, why am I charged?",
        answer:
          "The Congestion Charge only applies 07:00 to 18:00 Monday to Friday and 12:00 to 18:00 weekends and bank holidays. If your ANPR image is time-stamped outside those hours, the PCN cannot stand. Look closely at the time on the image, not just the date. Send TfL the relevant image with your representation and ask them to cancel under the GLA Road Traffic (Congestion Charging Provisions) Order 2003. If they refuse, London Tribunals will cancel without hesitation.",
      },
      {
        question: "Does the Congestion Charge apply to electric vehicles?",
        answer:
          "Until 25 December 2025 there was a Cleaner Vehicle Discount that exempted fully electric cars. From that date the discount ended. Electric vehicles now pay the full daily charge of £15 unless they qualify under another exemption such as disabled tax class. Check your V5C and TfL's current rules for the date of travel, because the rules at the time of the journey are what matter, not the rules today. If your journey was before 25 December 2025 in an eligible EV that was registered for the discount, the PCN should be cancelled.",
      },
      {
        question: "What if my number plate was misread by the camera?",
        answer:
          "ANPR misreads happen, particularly with characters that look alike such as 0 and O, 1 and I, or B and 8. If the image on the PCN does not show your vehicle, request the full ANPR image from TfL and compare the make, colour and model to your own. If they do not match, this is a strong ground to cancel. London Tribunals adjudicators routinely cancel on misread cases when the evidence shows the vehicle in the image is plainly not yours.",
      },
      {
        question: "How does the Congestion Charge interact with ULEZ?",
        answer:
          "They run on separate legal frameworks but use the same TfL ANPR infrastructure. A non-compliant car driving through central London on a weekday pays both, totalling £27.50 per day. The PCNs are also separate, so if you miss both you can receive two PCNs for the same journey. You can challenge each separately on the relevant statutory grounds. Auto-pay covers both charges for vehicles registered against the account, which removes the day-to-day risk of forgetting.",
      },
      {
        question: "Can I appeal because the signage was unclear?",
        answer:
          "Sign clarity is not normally a winning ground because the zone has been signed since 2003 and is widely known. However, if signage at a specific entry point was missing, obscured or contradictory on the date of your journey, you may have a defence. Take dated photographs of the signage in question and include them with your representation. London Tribunals will consider sign-quality defences but they are easier to win for newer zones such as ULEZ than for the long-established Congestion Charge.",
      },
      {
        question: "Will an unpaid Congestion Charge PCN affect my credit?",
        answer:
          "Not directly. A civil PCN does not appear on a credit file. If it escalates beyond the charge certificate to a county court order at the Traffic Enforcement Centre in Northampton and you do not respond, the resulting judgment can appear on your credit record for six years. To prevent that you can file a TE9 witness statement (if you never received the PCN) or a TE7 application for more time. Both are free from gov.uk and do not require a solicitor.",
      },
    ],
    relatedSlugs: [
      "ulez-pcn-appeal-uk",
      "clean-air-zone-pcn-appeal-uk",
      "dart-charge-pcn-appeal",
      "mersey-gateway-pcn-appeal",
    ],
  },
  {
    slug: "clean-air-zone-pcn-appeal-uk",
    category: "toll-zone",
    location: "Clean Air Zone",
    fineTypeLabel: "PCN",
    title: "Clean Air Zone PCN appeal",
    h1: "How to appeal a UK Clean Air Zone PCN",
    description:
      "Appeal a Clean Air Zone PCN in Bath, Birmingham, Bradford, Bristol, Portsmouth, Sheffield, Tyneside or Newcastle, with statutory grounds and the tribunal route.",
    seoTitle: "Clean Air Zone PCN Appeal: All UK Cities | AppealAFine",
    seoDescription:
      "UK Clean Air Zone PCN? Cover all 8 cities, statutory grounds under the Transport Act 2000, and the Traffic Penalty Tribunal route.",
    searchVolume: 2900,
    factBox: {
      issuer: "Local authority (varies by zone), administered through the central JAQU service",
      appealTo: "Traffic Penalty Tribunal",
      discountWindow: "Most CAZs offer 14 days at 50 percent",
      formalChallengeWindow: "28 days for formal representations after the Notice to Owner",
      standardFine: "£120 (cars and LGVs) or £450 (HGVs, coaches, buses), with 50 percent discount in 14 days",
      fastestRoute: "Informal representation to the issuing council within 14 days quoting the Transport Act 2000 and the local Charging Order",
    },
    intro:
      "A Clean Air Zone is a defined area where non-compliant vehicles pay a daily charge. England now has CAZs in Bath, Birmingham, Bradford, Bristol, Portsmouth, Sheffield, Newcastle and Gateshead. Each operates under the Transport Act 2000 Part III and a local Charging Order made by the council, and each has its own daily charges, exemptions and operating hours. The Joint Air Quality Unit runs the central payment and ANPR service, so payments and PCNs look similar across cities even though the underlying authority is the local council. PCNs are typically £120 for cars and LGVs and £450 for HGVs, buses and coaches, with 50 percent discount for payment in 14 days. Appeals go first informally to the issuing council, then formally after a Notice to Owner, and finally to the Traffic Penalty Tribunal in Manchester. For city-specific exemptions, sunset periods and Class A to D rules, check the individual council's page.",
    grounds: [
      {
        title: "Vehicle is actually compliant",
        body: "Each CAZ targets vehicles below a Euro standard: typically Euro 4 for petrol and Euro 6 for diesel cars, with separate rules for taxis, LGVs, HGVs, buses and coaches. The central vehicle checker at gov.uk pulls data from DVLA, but the data is sometimes wrong, particularly for retrofitted vehicles or imports. If your V5C or Certificate of Conformity shows the vehicle meets the relevant Euro standard for that CAZ class, send the documentation to the issuing council and ask for cancellation. The Traffic Penalty Tribunal cancels on documentary evidence that the vehicle was compliant on the date of the journey under the Transport Act 2000 framework and the local Charging Order.",
      },
      {
        title: "Charge was paid in time",
        body: "The CAZ daily charge can be paid up to six days after the date of travel through the central gov.uk service. If you paid within that window, the PCN cannot stand. Mismatches happen when the registration is mistyped or when payment is made against the wrong date. Send the council the payment reference, registration as on the V5C, and the date the payment cleared. Ask them to reconcile against the ANPR record. The Traffic Penalty Tribunal will cancel on documentary evidence of payment, applying the local Charging Order strictly.",
      },
      {
        title: "Statutory exemption applies",
        body: "Each CAZ has a list of national exemptions, including vehicles in the disabled or disabled-passenger tax class, military vehicles, historic vehicles (over 40 years old and unmodified), and certain showmen's vehicles. Local exemptions vary: Birmingham has a financial-incentive sunset period for residents and workers earning under set thresholds, Bath exempts blue badge holders, Bradford and Newcastle have specific local resident schemes. Check the council's published exemption register for the date of travel. If your vehicle qualified but was not registered, you can apply retrospectively in many cases.",
      },
      {
        title: "Hire vehicle, lease or recent sale",
        body: "Under regulation 14 of the Civil Enforcement of Road Traffic Contraventions (England) General Regulations 2022 a hire firm can transfer liability to the named hirer by serving the agreement and a statement of liability. The agreement must cover the date of travel. If you are the hirer and the council has billed you direct, request the transfer paperwork from the hire firm. If you sold the vehicle before the journey, send the V5C/2 sale slip dated before the journey and ask the council to reissue to the actual keeper. Both routes are standard grounds at the Traffic Penalty Tribunal.",
      },
      {
        title: "Out-of-time service or defective PCN",
        body: "Schedule 1 of the 2022 Regulations requires the PCN to be served within six months of the contravention and the Notice to Owner within six months of the PCN. Regulation 9 sets out the required content: date, time and location of the contravention, the amount of the penalty, the discount and full-penalty amounts, and the procedure for representations. CAZ PCNs sometimes go out late because of postal delays or where DVLA records are stale. If your PCN is dated more than six months after the journey, write to the council stating service is out of time and ask for cancellation. The Traffic Penalty Tribunal applies the limit strictly.",
      },
    ],
    localNotes: [
      "Bath was the first English CAZ outside London, launching on 15 March 2021 as a Class C zone (no cars).",
      "Birmingham followed on 1 June 2021 as a Class D zone (charges cars too).",
      "Bradford launched on 26 September 2022 as a Class C zone for commercial vehicles only.",
      "Bristol's Class D zone began on 28 November 2022.",
      "Portsmouth opened on 29 November 2021 as a Class B zone (no cars).",
      "Sheffield went live on 27 February 2023 as a Class C zone (no cars).",
      "Newcastle and Gateshead Tyneside zone launched on 30 January 2023, charging buses and coaches first, then expanding.",
      "All English CAZs are administered through the central gov.uk service and Joint Air Quality Unit infrastructure.",
    ],
    faqs: [
      {
        question: "Which UK cities have a Clean Air Zone?",
        answer:
          "There are currently eight English CAZs: Bath (Class C, since March 2021), Birmingham (Class D, June 2021), Bradford (Class C, September 2022), Bristol (Class D, November 2022), Portsmouth (Class B, November 2021), Sheffield (Class C, February 2023), and the Tyneside zone covering Newcastle and Gateshead (January 2023). London is separate and uses ULEZ and the Low Emission Zone, not a CAZ. Scotland operates Low Emission Zones in Aberdeen, Dundee, Edinburgh and Glasgow under different legislation.",
      },
      {
        question: "What is the difference between Class A, B, C and D?",
        answer:
          "Class A targets buses, coaches, taxis and private hire vehicles. Class B adds HGVs. Class C adds LGVs and minibuses. Class D adds cars and motorcycles. So a Class D zone is the broadest. The class determines which vehicles can be charged in that city. If your vehicle category is outside the local class for the date of travel, the PCN cannot stand. Check the council's Charging Order in force on the journey date to confirm the class and the vehicle types covered.",
      },
      {
        question: "Can I appeal a CAZ PCN if the signage was unclear?",
        answer:
          "Yes, where you can prove that signage at a specific entry point was missing, obscured or contradictory on the date of travel. The Department for Transport has prescribed sign types under the Traffic Signs Regulations and General Directions 2016 and councils must use them at every CAZ entry. Take dated photographs of the signage if you return to the area, and include them with your representation. The Traffic Penalty Tribunal will consider sign-quality defences where the evidence is dated and specific to the journey route.",
      },
      {
        question: "Are blue badge holders exempt from the CAZ charge?",
        answer:
          "Some zones grant blue badge exemptions, others do not. Bath and Birmingham have specific exemptions for vehicles in the disabled or disabled-passenger tax class on the V5C, which is broader than just blue badge. Bradford and Bristol have similar tax-class exemptions. Possession of a blue badge alone is not enough, the vehicle itself usually needs to be in the disabled tax class. Check the issuing council's exemption register, and if you qualify, send DVLA evidence of the tax class on the date of travel.",
      },
      {
        question: "How do I challenge a Tyneside CAZ PCN if my bus or coach is exempt under transition rules?",
        answer:
          "The Tyneside zone phased in vehicle types: buses, coaches and HGVs first, with LGVs and taxis added later. Some operators were also given temporary exemptions under the council's transition rules, particularly where contracts predated the zone or where the vehicle was due for replacement under a CleanBus or CleanVan upgrade scheme. Check the council's published exemption register for the specific vehicle type, fleet operator status and date. Send any evidence of registered exemption with your representation.",
      },
      {
        question: "Where do I appeal if the council rejects my representation?",
        answer:
          "Appeals from all English CAZs (outside London) go to the Traffic Penalty Tribunal in Manchester, the same tribunal that handles Dart Charge, Mersey Gateway and Tyne Tunnel PCNs. There is no fee and no risk of being ordered to pay anyone's costs. You can submit online at trafficpenaltytribunal.gov.uk. Most appeals are decided on the papers within a few weeks. Tribunals adjudicators apply the Transport Act 2000, the local Charging Order, and the 2022 Regulations strictly, so a clear letter setting out the statutory ground usually carries the day.",
      },
    ],
    relatedSlugs: [
      "ulez-pcn-appeal-uk",
      "congestion-charge-pcn-appeal",
      "dart-charge-pcn-appeal",
      "mersey-gateway-pcn-appeal",
    ],
  },
];
