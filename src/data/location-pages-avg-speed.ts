import type { LocationFinePage } from "./location-pages";

export const LOCATION_PAGES_AVG_SPEED: LocationFinePage[] = [
  {
    slug: "m25-average-speed-fine-appeal",
    category: "average-speed",
    location: "M25",
    fineTypeLabel: "Speeding Fine",
    title: "M25 average speed fine appeal",
    h1: "How to appeal an M25 average-speed or smart-motorway speeding fine",
    description:
      "Guide to challenging a Notice of Intended Prosecution from M25 HADECS3 or average-speed cameras, with the statutes and the court route.",
    seoTitle: "M25 Average Speed Fine Appeal: NIP + Court Route | AppealAFine",
    seoDescription:
      "M25 average-speed or smart-motorway NIP? Use these statutory grounds, the 14-day rule under the RTOA 1988 and the court route to challenge a speeding fine.",
    searchVolume: 720,
    factBox: {
      issuer: "Metropolitan Police, Surrey Police, Essex Police or Kent Police (depending on section)",
      appealTo: "Magistrates' Court via NIP response and court summons",
      discountWindow: "No discount; £100 + 3 points fixed penalty if accepted",
      formalChallengeWindow: "28 days to return the s.172 Notice and elect court",
      standardFine: "£100 fixed penalty + 3 points, or up to £1,000 on summary conviction (£2,500 on a motorway)",
      fastestRoute: "Challenge the NIP on the 14-day rule under s.1 Road Traffic Offenders Act 1988 if served late",
    },
    intro:
      "The M25 has used smart-motorway technology for years and large sections now operate variable mandatory speed limits enforced by HADECS3 spot-speed cameras and pairs of ANPR cameras running average-speed enforcement. Common stretches include junctions 5 to 7 (Surrey), junctions 23 to 27 (Hertfordshire) and junctions 27 to 30 (Essex). The lower limit, often 60 or 50 mph, is enforceable as a temporary mandatory speed limit under section 14 of the Road Traffic Regulation Act 1984 and the underlying speed restrictions under sections 81 and 84. If your speed is recorded above the limit, the relevant force serves a Notice of Intended Prosecution under section 1 of the Road Traffic Offenders Act 1988. The NIP must reach the registered keeper within 14 days. After that you have 28 days to identify the driver under section 172 of the Road Traffic Act 1988 and elect either the fixed penalty, a speed awareness course (where offered) or contest in the magistrates' court.",
    grounds: [
      {
        title: "NIP not served within 14 days",
        body: "Section 1 of the Road Traffic Offenders Act 1988 requires the Notice of Intended Prosecution to be served on the registered keeper within 14 days of the offence. There are limited exceptions where the offence is detected only after collision or where keeper details cannot be obtained, but for routine camera detections the 14-day rule is strict. Check the date the NIP was actually received against the date of the offence. If the NIP is dated late, write to the police force stating that prosecution is barred under section 1 RTOA 1988. The magistrates' court will dismiss the charge if the prosecution cannot show the NIP was served in time and you raise the issue properly.",
      },
      {
        title: "Variable speed limit signage was not displayed correctly",
        body: "On smart motorways, the variable speed limit only has legal effect if the matrix signs are correctly displayed at the gantries on the section of road in question. Section 36 of the Road Traffic Act 1988 and the Traffic Signs Regulations and General Directions 2016 set out the technical requirements. If the signs were blank, showing the national speed limit, displaying conflicting limits between gantries, or fewer than two gantries displaying the relevant limit, the lower limit may not be enforceable. Request the police footage and the gantry display log under the disclosure process if you elect court, and consult an independent expert if necessary.",
      },
      {
        title: "Camera or calibration evidence is missing or defective",
        body: "Average-speed and HADECS3 cameras must be Type Approved by the Home Office under section 20 of the Road Traffic Offenders Act 1988, calibrated within the manufacturer's certified interval, and operated in accordance with the Home Office Handbook of Police Powers and Procedures. Ask the prosecuting force for the Type Approval Certificate, the calibration certificate covering the date of offence, and the operator's training record if relevant. If any of these is missing, expired or non-compliant, the evidence may be inadmissible. This is a more technical defence and works best when you elect court and request disclosure under the Criminal Procedure Rules.",
      },
      {
        title: "Driver was not identified or s.172 response was misinterpreted",
        body: "Section 172 of the Road Traffic Act 1988 requires the registered keeper to name the driver. If the vehicle is a company car or a vehicle used by multiple drivers, you must use reasonable diligence to identify the driver but you cannot be required to invent a name you do not know. The defence of reasonable diligence is set out in section 172(4). It is a high bar, but it is a real defence where the vehicle is shared and there is no way to identify which driver was at the wheel on the date and time. Document the diligence you have exercised (rotas, fuel cards, tracker logs) when you respond.",
      },
      {
        title: "Speedometer error or measured speed barely over the limit",
        body: "If the recorded speed is only marginally over the limit, the ACPO Speed Enforcement Policy Guidelines (now NPCC) suggest a tolerance of 10 percent plus 2 mph before prosecution. Forces do not have to follow these guidelines, but if you are within the tolerance and a court rejection seems unfair, raising the guidelines as part of mitigation can sometimes lead to a course offer or fine reduction. This is rarely a winning ground in itself, but combined with a marginal speed, a clean licence and a credible explanation, it strengthens your overall position when responding to the NIP.",
      },
    ],
    localNotes: [
      "The M25 averages around 200,000 vehicles per day across its 117 miles.",
      "Smart-motorway sections include J5 to J7 (Clacket Lane area, Surrey Police), J23 to J27 (Met and Herts Police), and J27 to J30 (Essex Police).",
      "HADECS3 cameras enforce variable mandatory limits and are small and discreet, mounted on gantries.",
      "Average-speed enforcement uses ANPR pairs to measure mean speed over a section, not spot speed.",
      "Lower limits are often 60 mph or 50 mph and can change in response to congestion or incidents.",
      "Most NIPs are served by the Central Ticket Office of the relevant force.",
      "Speed awareness courses are offered for first offences typically 10 percent + 2 to 10 percent + 9 over the limit.",
    ],
    faqs: [
      {
        question: "How long do I have to respond to the s.172 notice?",
        answer:
          "You have 28 days from the date of service to return the section 172 notice identifying the driver. Failure to respond is itself an offence under section 172 of the Road Traffic Act 1988 and typically carries 6 points and a fine of up to £1,000, which is worse than the speeding offence itself. Even if you intend to contest the speeding allegation, return the s.172 notice on time, naming the driver. You can dispute the speeding charge separately by electing court when the Conditional Offer of Fixed Penalty arrives.",
      },
      {
        question: "Can I take a speed awareness course instead?",
        answer:
          "Speed awareness courses are offered for first speeding offences where the recorded speed is roughly 10 percent + 2 mph to 10 percent + 9 mph over the posted limit. You must not have been on a course in the previous three years. The course costs around £80 to £100 and avoids points on your licence. If your speed is in that band and your record is clean, the force will normally offer the course alongside the fixed penalty. If they have not offered one and you are eligible, you can ask in writing.",
      },
      {
        question: "Will an M25 speeding fine show on my driving licence?",
        answer:
          "Yes. A fixed penalty for speeding adds 3 points (SP30 endorsement) for 4 years from the date of offence, of which the points are active for the first 3 years. If you accept a speed awareness course there are no points. If you elect court and are convicted, the magistrates may impose 3 to 6 points or a discretionary disqualification at higher speeds. Insurers ask about active and spent endorsements and your premium will normally rise for the active period.",
      },
      {
        question: "What is the difference between HADECS3 and an average-speed camera?",
        answer:
          "HADECS3 is a spot-speed camera that measures your speed at a single instant as you pass under the gantry. Average-speed enforcement uses two ANPR cameras spaced some distance apart to measure your mean speed between them. Both are Type Approved by the Home Office. HADECS3 is generally more lenient with brief bursts of speed because you can be under the limit either side of the gantry. Average-speed enforcement is unforgiving because consistent travel above the limit between the two cameras will trigger.",
      },
      {
        question: "What happens if I do not respond at all?",
        answer:
          "Ignoring the NIP and the s.172 notice does not make the matter go away. The force will summons you to the magistrates' court for failing to identify the driver under section 172 of the Road Traffic Act 1988, with 6 points and a fine of up to £1,000. They may also prosecute for the underlying speeding offence in the same hearing. Always respond on time. If you want to contest the substantive speeding charge, return the s.172 naming the driver and then elect court when the conditional offer is issued.",
      },
      {
        question: "Is the maximum fine really £2,500 on a motorway?",
        answer:
          "Yes. Speeding on a motorway, including the M25, carries a maximum fine of £2,500 on summary conviction in the magistrates' court, twice the £1,000 maximum on other roads. The starting points used by magistrates depend on speed and limit, set out in the Magistrates' Court Sentencing Guidelines. Most cases at low excess speeds attract Band A fines of around 25 to 75 percent of weekly income with 3 points. Higher speeds move to Band B and Band C with disqualification ranges. The £2,500 ceiling is rarely reached in practice.",
      },
    ],
    relatedSlugs: [
      "a9-average-speed-fine-appeal",
      "a14-average-speed-fine-appeal",
      "a90-average-speed-fine-appeal",
    ],
  },
  {
    slug: "a9-average-speed-fine-appeal",
    category: "average-speed",
    location: "A9",
    fineTypeLabel: "Speeding Fine",
    title: "A9 average speed fine appeal",
    h1: "How to appeal an A9 average-speed speeding fine",
    description:
      "Appeal a Police Scotland Conditional Offer of Fixed Penalty from the A9 average-speed cameras, including the Justice of the Peace Court route.",
    seoTitle: "A9 Average Speed Fine Appeal (Scotland) | AppealAFine",
    seoDescription:
      "A9 average-speed NIP from Police Scotland? Statutory grounds, the Scottish Conditional Offer, and the Justice of the Peace Court route to challenge.",
    searchVolume: 590,
    factBox: {
      issuer: "Police Scotland",
      appealTo: "Justice of the Peace Court (Scotland) via Procurator Fiscal",
      discountWindow: "No discount; £100 + 3 points fixed penalty if accepted",
      formalChallengeWindow: "28 days to return the s.172 Notice and reject the Conditional Offer",
      standardFine: "£100 fixed penalty + 3 points (Conditional Offer), or up to £1,000 on summary conviction",
      fastestRoute: "Challenge service of the NIP under s.1 Road Traffic Offenders Act 1988 if more than 14 days old",
    },
    intro:
      "The A9 average-speed cameras cover the 136-mile route between Dunblane and Inverness and have been in continuous use since October 2014. They are operated by the A9 Safety Group and enforced by Police Scotland. The route was previously notorious for collisions; the cameras measure your mean speed between paired ANPR sites over typically 4 to 10 miles, so a single hard burst will not trigger but consistent over-limit driving will. The legal framework is the same as in England for the substantive offence: section 89 of the Road Traffic Regulation Act 1984 with section 1 of the Road Traffic Offenders Act 1988 (14-day NIP rule). Procedure is different. Scotland uses a Conditional Offer of Fixed Penalty instead of an English fixed penalty notice, and unresolved cases go to the Procurator Fiscal and then to the Justice of the Peace Court, not the magistrates' court. You can challenge a Police Scotland NIP on the same kinds of grounds as in England, but the forum and procedure are Scottish.",
    grounds: [
      {
        title: "NIP served outside 14 days",
        body: "Section 1 of the Road Traffic Offenders Act 1988 applies across Great Britain and requires the Notice of Intended Prosecution to be served on the registered keeper within 14 days of the offence. Compare the offence date on the NIP to the date you received it, allowing one working day for post under the Interpretation Act 1978. If the NIP is out of time, write to Police Scotland stating that any subsequent prosecution would be barred under section 1 RTOA 1988 and ask for the conditional offer to be withdrawn. The point is a hard time-limit and works in the Justice of the Peace Court if you have to litigate.",
      },
      {
        title: "Average-speed calibration or Type Approval defects",
        body: "Average-speed cameras must be Type Approved under section 20 of the Road Traffic Offenders Act 1988 and calibrated to the manufacturer's certified interval. Police Scotland's evidence chain depends on this and on the operational handbook. Ask, when you reject the Conditional Offer, for the Type Approval Certificate covering the A9 average-speed system, the calibration certificate covering the date of offence, and the integrity log from the camera pair. A gap in any of these undermines the evidence. The Procurator Fiscal will withdraw weak prosecutions rather than risk a not-proven verdict at the Justice of the Peace Court.",
      },
      {
        title: "Signage and limit confusion across changing sections",
        body: "The A9 is largely a single carriageway with a 60 mph limit, but some sections are dualled at 70 mph and there are local 50 mph and 40 mph reductions at villages. If you were prosecuted at the lower limit but the speed limit changes within the average-speed section, the evidence must show that your mean speed exceeded the limit on the relevant part of the route. Request the camera pair locations and the limit map for that section. The Traffic Signs Regulations and General Directions 2016 require correct repeater signage; if it was missing or contradictory, the lower limit may not have been enforceable.",
      },
      {
        title: "Driver identification under s.172 RTA 1988",
        body: "If the vehicle was used by more than one driver, you must use reasonable diligence to identify the driver under section 172(4) of the Road Traffic Act 1988. Document who could have been driving (work rota, family calendar, tracker data) and the steps you have taken to narrow it down. If you genuinely cannot identify the driver after diligent enquiry, you can state that in the s.172 response. This is a narrow defence that works only where the evidence of diligence is convincing, but it is the same in Scotland as in England under the same statute.",
      },
      {
        title: "Speed marginally over the limit, mitigation for course or fine reduction",
        body: "Police Scotland follows National Police Chiefs' Council speed enforcement guidance, which recommends a tolerance of 10 percent plus 2 mph before prosecution. If your speed is within that tolerance, raise it in your response. Speed awareness courses are also offered in Scotland through Police Scotland's National Driver Offender Retraining Scheme partner and avoid points if you accept. Otherwise, in the Justice of the Peace Court, the equivalent of the Magistrates' Court Sentencing Guidelines applies with a starting band of 3 points and a fine related to means. A clean licence and a credible explanation are real mitigation.",
      },
    ],
    localNotes: [
      "The A9 cameras run 136 miles from Dunblane to Inverness, the longest average-speed corridor in the UK.",
      "Operational since 28 October 2014, deployed by the A9 Safety Group.",
      "Camera pairs measure mean speed over sections of 4 to 10 miles.",
      "HGVs were given a 50 mph limit on single-carriageway sections at the same time, raised to 50 mph from the original 40 mph.",
      "Casualty data from Transport Scotland shows fatal and serious casualties on the corridor more than halved since 2014.",
      "Police Scotland's Camera Safety Unit operates the cameras, with prosecutions referred to the Procurator Fiscal.",
      "Unresolved cases proceed in the Justice of the Peace Court, with appeals to the Sheriff Court.",
    ],
    faqs: [
      {
        question: "Is the procedure in Scotland different from England?",
        answer:
          "Yes. Scotland uses a Conditional Offer of Fixed Penalty rather than the English-style fixed penalty notice. You have 28 days to accept the £100 fine and 3 points, or to reject the offer. If you reject, the case goes to the Procurator Fiscal for a decision on prosecution. If prosecuted, you appear in the Justice of the Peace Court (a lay tribunal) rather than the magistrates' court. The substantive law on speeding is the same across Great Britain, but the procedural code, fines structure and court forum differ.",
      },
      {
        question: "What are the speed limits on the A9 corridor?",
        answer:
          "Most of the A9 between Dunblane and Inverness is single carriageway with a 60 mph limit for cars and 50 mph for HGVs. Dualled sections, particularly around Perth and the new Dunkeld/Birnam improvements, are 70 mph (60 mph for HGVs). Several villages and towns including Aviemore, Pitlochry and Dalwhinnie have local 30 or 40 mph reductions. The average-speed cameras enforce whichever limit applies on the relevant section between the camera pair. Check the signage on your route and the camera locations published by Transport Scotland.",
      },
      {
        question: "Can I take a speed awareness course on Police Scotland NIPs?",
        answer:
          "Yes. The National Driver Offender Retraining Scheme delivers speed awareness courses through Police Scotland's partner. Eligibility is broadly the same as in England: a first offence in the previous three years and a speed roughly between 10 percent + 2 mph and 10 percent + 9 mph over the limit. If you are eligible and your speed is in that band, the offer normally arrives with or shortly after the Conditional Offer. If it has not, ask in writing. The course removes the points and avoids further escalation.",
      },
      {
        question: "What if I never received the NIP?",
        answer:
          "Section 1 of the Road Traffic Offenders Act 1988 requires service within 14 days but is satisfied by sending the NIP by first-class post to the address on the DVLA record. If you moved without updating DVLA, the prosecution can rely on service to that old address. Update DVLA promptly. If your record was correct but the NIP genuinely never arrived, raise the non-service in the s.172 reply and at any court hearing. The Procurator Fiscal will not pursue a case where service cannot be proven.",
      },
      {
        question: "Does an A9 speeding fine affect my driving licence in the same way as an English one?",
        answer:
          "Yes. Points apply to your Great Britain driving licence regardless of which force issued the NIP. An SP30 endorsement for 3 points lasts 4 years from the offence date, active for the first 3 years. Insurers will see it in the same way as for an English-issued NIP. Disqualification ranges in the Justice of the Peace Court mirror the English Magistrates' Court Sentencing Guidelines at higher speeds. There is no Scottish/English split for the keeper or licence-holder consequences.",
      },
      {
        question: "Can I appeal the Conditional Offer to the Sheriff Court?",
        answer:
          "Not directly. The Conditional Offer is an alternative to prosecution and rejection sends the case to the Procurator Fiscal. If the Procurator Fiscal prosecutes, the case is heard at the Justice of the Peace Court in the first instance. From there you can appeal a conviction or sentence to the Sheriff Appeal Court and ultimately the High Court of Justiciary on points of law. Most A9 average-speed cases do not get beyond the Justice of the Peace Court because the evidence is documentary and the issues are narrow.",
      },
    ],
    relatedSlugs: [
      "m25-average-speed-fine-appeal",
      "a14-average-speed-fine-appeal",
      "a90-average-speed-fine-appeal",
    ],
  },
  {
    slug: "a14-average-speed-fine-appeal",
    category: "average-speed",
    location: "A14",
    fineTypeLabel: "Speeding Fine",
    title: "A14 average speed fine appeal",
    h1: "How to appeal an A14 average-speed speeding fine",
    description:
      "Appeal a Notice of Intended Prosecution from A14 average-speed cameras, including statutory grounds and the magistrates' court route.",
    seoTitle: "A14 Average Speed Fine Appeal: NIP + Court | AppealAFine",
    seoDescription:
      "A14 average-speed NIP from Cambs, Suffolk or Northants Police? Use statutory grounds and the court route to challenge a speeding fine.",
    searchVolume: 480,
    factBox: {
      issuer: "Cambridgeshire Police, Suffolk Police or Northamptonshire Police",
      appealTo: "Magistrates' Court via NIP response and court summons",
      discountWindow: "No discount; £100 + 3 points fixed penalty if accepted",
      formalChallengeWindow: "28 days to return the s.172 Notice and elect court",
      standardFine: "£100 fixed penalty + 3 points, or up to £1,000 on summary conviction",
      fastestRoute: "Challenge the NIP on the 14-day rule under s.1 Road Traffic Offenders Act 1988 if served late",
    },
    intro:
      "The A14 is the major east-west corridor connecting the M1/M6 at Catthorpe to Felixstowe via Cambridge, Newmarket and Bury St Edmunds. Average-speed cameras have been used heavily during long roadworks, including the Cambridge to Huntingdon improvement scheme completed in 2020 which kept long average-speed sections in place for years. They are also deployed permanently at junctions and accident clusters. Enforcement varies by force area: Cambridgeshire Police covers from Catthorpe to Newmarket Heath, Suffolk Police covers Newmarket to Felixstowe, and Northamptonshire Police handles the M1 junction sections. The legal framework is the same: section 89 of the Road Traffic Regulation Act 1984, with section 1 of the Road Traffic Offenders Act 1988 (14-day NIP rule) and section 172 of the Road Traffic Act 1988 (driver identification). Average-speed enforcement on the A14 has been particularly tight during temporary limits in roadworks, where lower limits of 40 or 50 mph apply.",
    grounds: [
      {
        title: "NIP not served within 14 days",
        body: "Section 1 of the Road Traffic Offenders Act 1988 requires the Notice of Intended Prosecution to be served on the registered keeper within 14 days of the offence. Compare the date of offence to the date you received the NIP. If you have moved house since the offence, the prosecution can rely on service to your DVLA address, so always update DVLA promptly. If the NIP is dated more than 14 days after the offence and you have not moved, that is a clean ground to invite the relevant force to withdraw. If they do not withdraw, the magistrates' court will dismiss the charge if the prosecution cannot prove service within the statutory window.",
      },
      {
        title: "Temporary speed limit signage in roadworks",
        body: "During roadworks on the A14, average-speed cameras commonly enforce a temporary limit of 40 or 50 mph. The temporary limit is only enforceable if the signage complies with the Traffic Signs Regulations and General Directions 2016 and the relevant Temporary Traffic Regulation Order. If signs were missing on your section, contradictory between gantries, or removed before the limit was officially lifted, you may have a defence. Request the police footage and the TTRO covering the date of offence under disclosure if you elect court. Take photographs of the section if you can return safely.",
      },
      {
        title: "Camera Type Approval and calibration",
        body: "Average-speed cameras must be Type Approved under section 20 of the Road Traffic Offenders Act 1988 and calibrated within the manufacturer's certified interval. Ask, when you respond to the NIP, for the Type Approval Certificate and the calibration certificate covering the date and time of the alleged offence. If either is missing, expired, or in the wrong name, the evidence may be inadmissible. This is a technical defence that works best when you elect court and request disclosure under the Criminal Procedure Rules. Camera evidence is usually robust, but disclosure failures do happen.",
      },
      {
        title: "Driver identification on shared vehicles",
        body: "Section 172 of the Road Traffic Act 1988 requires the registered keeper to name the driver. If the vehicle is shared between several drivers (company pool car, family vehicle, hire firm), the defence of reasonable diligence under section 172(4) is available. Document who could have been driving on the relevant date and time and the steps you have taken to narrow it down. If you cannot identify the driver despite diligent enquiry, state that explicitly in the s.172 response. The burden of proving diligence is on you, so keep records of fuel cards, telematics, rotas and conversations.",
      },
      {
        title: "Speed marginally over the limit",
        body: "If the recorded average speed is only marginally above the limit, raise the NPCC enforcement guidelines (10 percent + 2 mph tolerance) in your reply. The relevant force does not have to follow the guidelines, but the magistrates do take them into account. Combined with a clean licence and a credible explanation for being on that section of the A14 at that speed, this can support a speed awareness course offer or a band-A fine if you elect court. It is rarely a winning ground in isolation, but it strengthens an otherwise borderline case.",
      },
    ],
    localNotes: [
      "The A14 runs 127 miles from Catthorpe (M1/M6) to Felixstowe via Cambridge and Newmarket.",
      "It carries around 85,000 vehicles a day at its busiest, near Cambridge.",
      "The Cambridge to Huntingdon improvement scheme was completed in 2020 after years of average-speed enforced 40 mph limits during construction.",
      "Permanent average-speed sections exist at known collision clusters including the Girton Interchange.",
      "Cambridgeshire Police, Suffolk Police and Northamptonshire Police share enforcement along the corridor.",
      "Speed awareness courses are administered by the relevant force through the National Driver Offender Retraining Scheme.",
      "NIPs are issued by the Central Ticket Office of the relevant force.",
    ],
    faqs: [
      {
        question: "How long do I have to respond to the s.172 notice?",
        answer:
          "You have 28 days from service of the s.172 notice to identify the driver. Failing to do so is itself an offence under section 172 of the Road Traffic Act 1988 and typically carries 6 points and a fine of up to £1,000. Always return the s.172 on time naming the driver, even if you plan to contest the speeding charge. You can dispute the underlying speeding offence by electing court once the Conditional Offer of Fixed Penalty arrives, while the s.172 itself is resolved.",
      },
      {
        question: "Are A14 roadworks limits still being enforced?",
        answer:
          "The main Cambridge to Huntingdon scheme was completed in 2020 and the long-term 40 mph limit was lifted, but average-speed enforcement is still used on shorter sections during any new roadworks and at known collision clusters. National Highways publishes scheme notices when new average-speed enforcement is set up. If your NIP relates to a period of active roadworks, check the start and end dates of the Temporary Traffic Regulation Order to confirm the limit was actually in force on the date stated in the NIP.",
      },
      {
        question: "Will the A14 fine count as 3 points or 6?",
        answer:
          "For a Conditional Offer of Fixed Penalty the endorsement is SP30 with 3 points, active for 3 years and on your licence for 4. If you elect court and are convicted, the magistrates can impose 3 to 6 points or a discretionary disqualification depending on speed and limit, under the Magistrates' Court Sentencing Guidelines. Speeds well over the limit (typically more than 21 mph over a 30 mph limit, or 30 mph over a 70 mph limit) attract disqualification consideration. Speed awareness course avoids any points.",
      },
      {
        question: "Can I take a speed awareness course for an A14 fine?",
        answer:
          "Yes, if you are eligible. The criteria are a first speeding offence in the previous 3 years and a speed roughly between 10 percent + 2 mph and 10 percent + 9 mph over the posted limit. The course costs around £80 to £100 and avoids any points or fine record. If you are eligible the relevant force will normally offer the course alongside the fixed penalty. If they do not, you can ask in writing. Once the offer is accepted you must attend within the deadline given.",
      },
      {
        question: "Three police forces enforce the A14, will my case stay with one?",
        answer:
          "Yes. Once the NIP has been issued by one force, that force handles your case from start to finish. The relevant section of the A14 determines which force prosecutes. The NIP itself states the issuing force and the central ticket office to contact. Cases do not transfer between forces. If you need to query something on the NIP, contact the address printed on it. The court that would hear the case is the magistrates' court covering that section of the route.",
      },
      {
        question: "What if I was on cruise control set to the correct limit?",
        answer:
          "Cruise control evidence can support an argument that you did not deliberately speed, but it is not a defence in itself. The offence is one of strict liability: if your speed was over the limit, you committed the offence regardless of intent. However, if there is a credible reason to believe the camera measurement is wrong (for example, your cruise control was set well below the recorded speed and the vehicle is not faulty), challenge the camera evidence specifically. If your speed was just over the limit, cruise control evidence is more useful for mitigation than for a defence.",
      },
    ],
    relatedSlugs: [
      "m25-average-speed-fine-appeal",
      "a9-average-speed-fine-appeal",
      "a90-average-speed-fine-appeal",
    ],
  },
  {
    slug: "a90-average-speed-fine-appeal",
    category: "average-speed",
    location: "A90",
    fineTypeLabel: "Speeding Fine",
    title: "A90 average speed fine appeal",
    h1: "How to appeal an A90 average-speed speeding fine",
    description:
      "Appeal a Police Scotland Conditional Offer of Fixed Penalty from the A90 average-speed cameras between Dundee and Stonehaven.",
    seoTitle: "A90 Average Speed Fine Appeal (Scotland) | AppealAFine",
    seoDescription:
      "A90 average-speed NIP from Police Scotland? Use statutory grounds and the Justice of the Peace Court route to challenge a speeding fine.",
    searchVolume: 390,
    factBox: {
      issuer: "Police Scotland",
      appealTo: "Justice of the Peace Court (Scotland) via Procurator Fiscal",
      discountWindow: "No discount; £100 + 3 points fixed penalty if accepted",
      formalChallengeWindow: "28 days to return the s.172 Notice and reject the Conditional Offer",
      standardFine: "£100 fixed penalty + 3 points (Conditional Offer), or up to £1,000 on summary conviction",
      fastestRoute: "Challenge service of the NIP under s.1 Road Traffic Offenders Act 1988 if more than 14 days old",
    },
    intro:
      "The A90 runs from Edinburgh to Fraserburgh and has long average-speed enforcement sections, particularly between Dundee and Stonehaven and at known accident clusters such as Laurencekirk. The Aberdeen-Dundee average-speed scheme was introduced in 2017 by the A90 Safety Group and Transport Scotland, and the system has been credited with significant casualty reductions. Enforcement is by Police Scotland, with prosecutions referred to the Procurator Fiscal and any contested cases heard in the Justice of the Peace Court. The substantive offence is the same as in the rest of Great Britain (section 89 Road Traffic Regulation Act 1984, with section 1 Road Traffic Offenders Act 1988 for the 14-day NIP rule and section 172 Road Traffic Act 1988 for driver identification), but the procedure is Scottish. You receive a Conditional Offer of Fixed Penalty rather than an English-style FPN and you respond within 28 days.",
    grounds: [
      {
        title: "NIP not served within 14 days",
        body: "Section 1 of the Road Traffic Offenders Act 1988 applies in Scotland and requires the Notice of Intended Prosecution to reach the registered keeper within 14 days of the offence. Service to the DVLA address is good service even if you have moved, so keep DVLA records up to date. If the NIP is dated more than 14 days after the offence and your address is correct, the prosecution is barred. Write to Police Scotland's Camera Safety Unit citing section 1 RTOA 1988 and ask for the Conditional Offer to be withdrawn. If they refuse and the case goes to the Justice of the Peace Court, raise the time limit as your first issue.",
      },
      {
        title: "Average-speed Type Approval and calibration",
        body: "The A90 average-speed cameras must be Type Approved under section 20 of the Road Traffic Offenders Act 1988 and calibrated to the manufacturer's certified interval. When you reject the Conditional Offer, ask the Camera Safety Unit for the Type Approval Certificate and the calibration certificate covering the date and time of the alleged offence. If either is missing, expired or not specific to the camera pair that detected your vehicle, the evidence may be inadmissible. The Procurator Fiscal will often withdraw a prosecution rather than risk a not-proven verdict on technical evidence issues.",
      },
      {
        title: "Signage and limit changes through the corridor",
        body: "The A90 between Dundee and Stonehaven includes 70 mph dual carriageway sections and 60 mph single-carriageway transitions, with local 40 and 50 mph reductions at junctions. The Traffic Signs Regulations and General Directions 2016 require correct repeater signs at appropriate spacing. If your alleged offence relates to a transition section where signage may have been ambiguous, request the signage diagrams from Transport Scotland and Police Scotland for the date of offence. The Justice of the Peace Court will dismiss where the lower limit was not properly displayed for the relevant section.",
      },
      {
        title: "Driver identification on shared or company vehicles",
        body: "If the vehicle was driven by more than one person, section 172(4) of the Road Traffic Act 1988 allows a defence of reasonable diligence. Document the steps you have taken to identify the driver: work rota, family calendar, telematics or tracker data, fuel card transactions. The defence is narrow and you must prove the diligence; it is not enough simply to say you do not remember. If you genuinely cannot identify the driver, state that with supporting evidence in the s.172 response and prepare to argue the diligence point at the Justice of the Peace Court if challenged.",
      },
      {
        title: "Marginal speed and mitigation for course or fine reduction",
        body: "Police Scotland follows the NPCC speed enforcement guidance, with a tolerance of 10 percent plus 2 mph before prosecution. If your recorded speed is within the tolerance, raise that in your response. Even if not, a marginal excess speed with a clean licence is good mitigation. Speed awareness courses are offered in Scotland through the National Driver Offender Retraining Scheme partner; eligibility is the same as in England. Otherwise, the Justice of the Peace Court applies fines and points by reference to speed bands similar to the English Magistrates' Court Sentencing Guidelines.",
      },
    ],
    localNotes: [
      "The Aberdeen-Dundee A90 average-speed scheme launched in 2017, covering 50 miles between the cities.",
      "Police Scotland's Camera Safety Unit operates the enforcement system.",
      "Casualty data from Transport Scotland shows significant reductions in fatal and serious collisions since 2017.",
      "Local accident clusters at Laurencekirk and Stonehaven have had additional fixed cameras since.",
      "Limit transitions include 70 mph dual carriageway, 60 mph single carriageway, and 40 or 50 mph at junctions.",
      "Prosecutions are referred to the Procurator Fiscal at Aberdeen or Dundee Sheriffdom depending on offence location.",
      "Speed awareness courses are administered by Police Scotland through their NDORS partner.",
    ],
    faqs: [
      {
        question: "Why does Scotland use a Conditional Offer instead of a fixed penalty notice?",
        answer:
          "Scotland's criminal procedure has always been distinct from England. The Conditional Offer of Fixed Penalty is the Scottish equivalent of an English fixed penalty notice and is governed by the Criminal Procedure (Scotland) Act 1995 as well as the Road Traffic Offenders Act 1988. The substantive offence is the same across Great Britain, but the prosecution route runs through the Procurator Fiscal rather than the local police force. If you accept the Conditional Offer, you pay £100 and accept 3 points. If you reject, the case is referred to the Procurator Fiscal.",
      },
      {
        question: "Where would a contested A90 case be heard?",
        answer:
          "Contested A90 cases are heard at the Justice of the Peace Court covering the location of the alleged offence, typically Aberdeen or Forfar for the Dundee-Stonehaven corridor. The Justice of the Peace Court is a lay tribunal sitting with a legally qualified clerk. Appeals against conviction or sentence go to the Sheriff Appeal Court and ultimately the High Court of Justiciary on points of law. The Procurator Fiscal prosecutes on behalf of the Lord Advocate; Police Scotland does not appear in court directly.",
      },
      {
        question: "Will points from an A90 fine show on my English licence?",
        answer:
          "Yes. The Great Britain driving licence is a single document and points are added by reference to the offence date regardless of which jurisdiction issued the NIP. An SP30 endorsement for 3 points lasts 4 years from the offence date, with the points active for the first 3 years. Insurers will see the endorsement in the same way as an English-issued one. If you are an English licence-holder caught on the A90, the procedure differs but the licence consequences are identical.",
      },
      {
        question: "How tight is the A90 average-speed tolerance?",
        answer:
          "Police Scotland follows the NPCC speed enforcement guidelines, recommending prosecution where the recorded speed exceeds the limit by more than 10 percent plus 2 mph. So on a 70 mph section, the typical threshold is 79 mph. The threshold is policy, not law, and any speed over the limit is technically prosecutable. Average-speed enforcement is unforgiving because it measures mean speed between camera pairs, so a sustained marginal excess will trigger even if you never had a hard burst over the threshold.",
      },
      {
        question: "Can I plead guilty by post and avoid attending court?",
        answer:
          "Yes. The Procurator Fiscal's complaint will give you the option to plead guilty by post or to attend a pleading diet. A guilty plea by post avoids the inconvenience of attending but you waive your chance to advance mitigation in person. If you want to challenge the substantive evidence (camera Type Approval, signage, etc.), you must plead not guilty and attend a trial diet at the Justice of the Peace Court. You can be represented by a solicitor or appear as a party litigant.",
      },
      {
        question: "What if I was not on the A90 at the time?",
        answer:
          "If your vehicle's registered keeper details have been used but your vehicle was not in fact on the A90 at the time, this could be a cloned plate or an ANPR misread. Gather corroborating evidence: dashcam footage, fuel and toll receipts elsewhere, work logbook entries, telematics or tracker data, and witnesses. Send these with your s.172 response and notify Police Scotland that you suspect plate cloning. They will request the camera image so they can compare the make, model and colour to your vehicle. If the images do not match, the case will be withdrawn.",
      },
    ],
    relatedSlugs: [
      "m25-average-speed-fine-appeal",
      "a9-average-speed-fine-appeal",
      "a14-average-speed-fine-appeal",
    ],
  },
];
