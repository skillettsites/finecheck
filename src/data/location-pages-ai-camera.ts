import type { LocationFinePage } from "./location-pages";

export const LOCATION_PAGES_AI_CAMERA: LocationFinePage[] = [
  {
    slug: "mobile-phone-camera-fine-appeal",
    category: "ai-camera",
    location: "AI mobile phone cameras",
    fineTypeLabel: "Mobile Phone Fine",
    title: "AI mobile phone camera fine appeal",
    h1: "How to appeal an AI mobile phone use fine",
    description:
      "Appeal a £200 + 6 point NIP from National Highways AI cameras that detect drivers using a handheld mobile phone, with the statutes and the court route.",
    seoTitle: "AI Mobile Phone Camera Fine Appeal | AppealAFine",
    seoDescription:
      "Caught by an AI camera using your phone at the wheel? Use the statutory grounds, the 14-day NIP rule and the court route to challenge £200 + 6 points.",
    searchVolume: 1900,
    factBox: {
      issuer: "Local police force (NIP issued from National Highways AI camera trial evidence)",
      appealTo: "Magistrates' Court via NIP response and court summons",
      discountWindow: "No discount; £200 fixed penalty + 6 points if accepted",
      formalChallengeWindow: "28 days to return the s.172 Notice and elect court",
      standardFine: "£200 fixed penalty + 6 points, or up to £1,000 on summary conviction",
      fastestRoute: "Challenge the image evidence and demand colour high-resolution disclosure under the Criminal Procedure Rules",
    },
    intro:
      "National Highways has been running AI cameras to detect drivers using a handheld mobile phone since 2021, with the system designed by Acusensus (Heads-Up) and deployed in trailer-mounted units around motorways and A roads. The cameras photograph the driver and use machine vision to flag images that appear to show a phone in hand. Flagged images are reviewed by a human officer before any Notice of Intended Prosecution is issued. The offence is using a handheld mobile phone or similar device while driving, contrary to regulation 110 of the Road Vehicles (Construction and Use) Regulations 1986 (as amended by the Road Vehicles (Construction and Use) (Amendment) (No.4) Regulations 2003 and the 2022 amendment that broadened the definition). It is a section 41D Road Traffic Act 1988 offence with a fixed penalty of £200 and 6 points since 1 March 2022. The 14-day NIP rule under section 1 of the Road Traffic Offenders Act 1988 still applies.",
    grounds: [
      {
        title: "NIP not served within 14 days",
        body: "Section 1 of the Road Traffic Offenders Act 1988 requires the Notice of Intended Prosecution to be served on the registered keeper within 14 days of the offence. Compare the offence date on the NIP to the date you actually received it. If you have moved without updating DVLA, the prosecution can rely on service to your old address, so always update DVLA. If your address is correct and the NIP is dated more than 14 days after the offence, write to the prosecuting force stating that any further proceedings are barred under section 1 RTOA 1988. The magistrates' court will dismiss the charge if the prosecution cannot show timely service.",
      },
      {
        title: "The image does not show a handheld phone",
        body: "The AI flags possible phone use but a human officer reviews the image before any NIP is issued. Mistakes happen: drivers are sometimes captured holding wallets, water bottles, packets of mints, vape devices, or even their own hand resting near their face. Request the high-resolution colour image and any video clip under the Criminal Procedure Rules disclosure provisions if you elect court. If the object in the image is not clearly a phone, the prosecution cannot prove the offence to the criminal standard. The magistrates apply the criminal burden of proof (beyond reasonable doubt) and ambiguous images regularly result in acquittal.",
      },
      {
        title: "The phone was being used hands-free or for a permitted purpose",
        body: "Regulation 110 only prohibits handheld use of a mobile phone or similar device. Hands-free use is permitted, as is using a phone in a cradle for navigation. The 2022 amendments closed loopholes around scrolling and tapping a phone in your hand, but legitimate hands-free use remains lawful. If your phone was in a cradle or mount, or you were using a hands-free system, document the set-up of your vehicle (photos, dashcam footage, the make and model of the cradle). The defence can also include emergency 999 calls to police, fire or ambulance, which are exempt under regulation 110(5) where stopping is impractical or unsafe.",
      },
      {
        title: "Driver identification on a shared vehicle",
        body: "Section 172 of the Road Traffic Act 1988 requires the registered keeper to name the driver. If the AI camera caught a driver who is not you (because the vehicle is shared, owned by a company, or used by family members), use section 172(4) and identify the actual driver. Reasonable diligence is required where the keeper cannot identify the driver alone. Document the steps you have taken: rota, telematics, fuel card data, conversations. The image itself, in colour and full resolution, often makes identification straightforward: the driver's face is usually visible enough to confirm who was at the wheel.",
      },
      {
        title: "Camera evidence integrity and Type Approval",
        body: "AI cameras are a developing technology and not all deployments are fully Type Approved under section 20 of the Road Traffic Offenders Act 1988 in the way that traditional speed cameras are. However, the offence of using a handheld phone is not a measurement offence, so the prosecution proves it by photograph rather than calibration data. The integrity of the image chain (custody, timestamps, the location reference) still matters. Request the disclosure of the operating force's evidence pack, including the location of the camera, the time stamp metadata, and the officer review log. Any gap supports a challenge to admissibility.",
      },
    ],
    localNotes: [
      "National Highways began the AI camera trial with Acusensus in 2021 using trailer-mounted Heads-Up units.",
      "The handheld mobile phone offence carries £200 + 6 points since 1 March 2022 under regulation 110 and section 41D RTA 1988.",
      "Cameras have been deployed on the M1, M3, M4, M6, M62, A1 and many other roads in rotating trials.",
      "All flagged images are reviewed by a human officer at the relevant force's central ticket office before a NIP is issued.",
      "The system also flags driver and front-seat passenger seatbelt non-use as a secondary detection.",
      "Newly qualified drivers (within 2 years of passing) who receive 6 points face automatic re-test under the Road Traffic (New Drivers) Act 1995.",
      "The Acusensus system has been used in Australia since 2019 and was cleared for UK trials by the Department for Transport.",
    ],
    faqs: [
      {
        question: "Is the AI camera trial actually legal?",
        answer:
          "Yes. The cameras gather evidence which is then reviewed by a human officer. The offence is prosecuted under regulation 110 of the Road Vehicles (Construction and Use) Regulations 1986 and section 41D of the Road Traffic Act 1988, which both predate the AI cameras and were not amended by the trial. The procedural rules on service of the NIP (section 1 RTOA 1988) and driver identification (section 172 RTA 1988) apply in the normal way. The Information Commissioner's Office has approved the system on privacy grounds, and the Crown Prosecution Service has accepted that flagged images can support prosecution.",
      },
      {
        question: "What does 'handheld' mean exactly?",
        answer:
          "Since 25 March 2022 the definition is broader than ever. You commit the offence if you hold or use a handheld mobile phone, tablet or similar device for any interactive communication function while driving, even if the device is briefly in your hand to tap, scroll, change music or unlock the screen. The Construction and Use Regulations 1986 (as amended in 2022) close the loophole that previously required communication. Hands-free use, fully fixed cradle use for navigation, and emergency 999 calls remain permitted.",
      },
      {
        question: "Will 6 points affect newly qualified drivers more?",
        answer:
          "Yes. Under the Road Traffic (New Drivers) Act 1995, if you accumulate 6 or more points within 2 years of passing your driving test, your licence is automatically revoked. You must then apply for a provisional licence and pass both the theory and practical tests again. The 6 points from a single mobile phone offence is therefore catastrophic for a newly qualified driver and worth defending hard if there is any credible ground. Older drivers who reach 12 points face the discretionary totting-up disqualification under section 35 RTOA 1988.",
      },
      {
        question: "Can I dispute the image quality?",
        answer:
          "Yes. Request the high-resolution colour image and any associated video clip from the prosecuting force under the Criminal Procedure Rules. If the image is grainy, low-resolution or obscured, the prosecution cannot meet the criminal standard of proof. The Heads-Up cameras photograph through the windscreen and reflections, glare or weather can degrade the image. Ambiguous images about what is in the driver's hand regularly result in acquittal at the magistrates' court. Always elect court if your image is borderline and the alternative is 6 points.",
      },
      {
        question: "Can I take a course instead of points?",
        answer:
          "Not usually. The 6-point handheld phone offence does not have an equivalent of the speed awareness course. Some forces offer an educational option for very specific borderline cases, but it is not standard. If you are eligible for any educational route the offer will arrive alongside the NIP. The standard alternative to 6 points and £200 is to elect court, plead not guilty, and challenge the image evidence. If you plead guilty in court instead of accepting the fixed penalty, you waive the discount and the magistrates can fine up to £1,000 plus impose 6 points.",
      },
      {
        question: "What if I was holding a phone but the engine was off in traffic?",
        answer:
          "The offence requires you to be driving. The courts have interpreted driving broadly to include being stopped in traffic with the engine running. If you were stationary with the handbrake on and the engine off (such as in a long queue at a level crossing or roadworks) you have a real argument that you were not driving at that moment. Document the circumstances: dashcam evidence is invaluable for this. The leading authority is Director of Public Prosecutions v Charles where the court considered the meaning of driving in stationary traffic. Engine-off, handbrake-on situations are the strongest position.",
      },
    ],
    relatedSlugs: [
      "ai-camera-speeding-fine-appeal",
      "seatbelt-camera-fine-appeal",
    ],
  },
  {
    slug: "ai-camera-speeding-fine-appeal",
    category: "ai-camera",
    location: "AI speeding cameras",
    fineTypeLabel: "Speeding Fine",
    title: "AI speeding camera fine appeal",
    h1: "How to appeal an AI speeding camera fine",
    description:
      "Guide to challenging speeding fines generated by new AI cameras, including Type Approval, calibration and the FOI route to verify camera accuracy.",
    seoTitle: "AI Speeding Camera Fine Appeal: Calibration FOI | AppealAFine",
    seoDescription:
      "Caught speeding by an AI camera? Use Type Approval, calibration disclosure and the FOI route to challenge a NIP, with the magistrates' court fallback.",
    searchVolume: 720,
    factBox: {
      issuer: "Local police force (NIP issued from AI camera evidence)",
      appealTo: "Magistrates' Court via NIP response and court summons",
      discountWindow: "No discount; £100 fixed penalty + 3 points if accepted",
      formalChallengeWindow: "28 days to return the s.172 Notice and elect court",
      standardFine: "£100 fixed penalty + 3 points, or up to £1,000 on summary conviction (£2,500 on a motorway)",
      fastestRoute: "Demand Type Approval and calibration evidence under the Criminal Procedure Rules and FOI Act 2000",
    },
    intro:
      "AI cameras are increasingly being deployed for speed enforcement alongside other detections. They can combine speed measurement with mobile phone use, seatbelt and lane discipline detection. Examples include the Acusensus Heads-Up Total system trialled by National Highways and the Sensys Gatso T-Series used at fixed locations. Speed enforcement still relies on a Home Office Type Approved measurement device, even when an AI overlay is used to identify additional offences. The substantive speeding offence is the same as for any other camera: section 89 of the Road Traffic Regulation Act 1984, with the procedural framework under section 1 of the Road Traffic Offenders Act 1988 (the 14-day NIP rule) and section 172 of the Road Traffic Act 1988 (driver identification). The novel ground for AI cameras is the question of whether the measurement device has full Type Approval, and whether the calibration evidence is up to standard. A well-aimed Freedom of Information Act 2000 request can confirm.",
    grounds: [
      {
        title: "NIP not served within 14 days",
        body: "Section 1 of the Road Traffic Offenders Act 1988 requires the NIP to reach the registered keeper within 14 days of the offence. AI camera systems generate large volumes of evidence and forces have sometimes taken longer than normal to issue NIPs while reviewing the AI output. If the NIP is dated more than 14 days after the offence and you have not moved (so service to the DVLA address would otherwise be effective), the prosecution is barred. Raise the point promptly: write to the issuing force citing section 1 RTOA 1988 and the date difference, and if they refuse to withdraw, the magistrates will dismiss when you raise the issue properly.",
      },
      {
        title: "Type Approval and calibration of the measurement device",
        body: "Section 20 of the Road Traffic Offenders Act 1988 makes the camera evidence admissible only where the device is of a Type Approved by the Secretary of State. Many AI camera deployments combine a Type Approved speed-measurement core (typically radar or LiDAR) with an AI overlay for visual classification. The speed evidence depends on the core device's Type Approval Certificate being current and the calibration certificate being valid for the date of offence. Ask the prosecuting force for both. If they cannot produce them, the speed evidence may be inadmissible. The Criminal Procedure Rules entitle you to disclosure of this material.",
      },
      {
        title: "FOI Act 2000 to confirm camera accuracy and protocol",
        body: "A targeted Freedom of Information Act 2000 request to the prosecuting force can confirm the camera type, the Type Approval Certificate reference, the calibration interval and history, and any operational guidance for officers reviewing AI flagged images. Forces are exempt from disclosing matters that would prejudice law enforcement, but the basic compliance evidence is normally disclosable. Use the response, or any refusal, to strengthen your challenge under the Criminal Procedure Rules. This route is slow (20 working days for FOI responses) but free and creates a useful paper trail if you elect court.",
      },
      {
        title: "Signage and limit at the camera location",
        body: "AI cameras must operate at a location where the speed limit is correctly signed under the Traffic Signs Regulations and General Directions 2016. If the camera was at a transition between speed limits, or signage was missing or contradictory on the date of offence, the lower limit may not have been enforceable. Take photographs of the section if you can return safely. Request the council's traffic signs schedule and the police force's camera location records via FOI. Magistrates have dismissed speeding cases where the prosecution could not prove that signage complied at the camera location.",
      },
      {
        title: "Driver identification on shared vehicles",
        body: "Section 172 of the Road Traffic Act 1988 requires the keeper to name the driver. If the vehicle is shared, use section 172(4) and identify the driver with reasonable diligence. Where multiple drivers could have been driving on the relevant date and time, document the diligence steps clearly: rota, telematics, fuel cards, conversations with each potential driver. The AI camera image itself often includes a clear driver photograph that supports identification once you can match it to a face. Always return the s.172 within 28 days, otherwise you commit a separate offence carrying 6 points.",
      },
    ],
    localNotes: [
      "AI camera trials have run on the M1, M3, M4, M6, M62 and several A roads since 2021.",
      "Acusensus Heads-Up Total combines speed, phone, seatbelt and lane discipline detection in one unit.",
      "Sensys Gatso T-Series is the current generation of fixed AI-overlay cameras used at safety camera sites.",
      "All deployments must use a Home Office Type Approved measurement device for the speed element.",
      "AI flagged images are reviewed by a human officer at the force's central ticket office before any NIP issues.",
      "Forces using AI cameras include the Met Police, Greater Manchester Police, West Midlands Police and Avon and Somerset Police.",
      "National Highways' published evaluation data shows substantial reductions in mobile phone use where the cameras are deployed.",
    ],
    faqs: [
      {
        question: "How are AI cameras different from a regular speed camera?",
        answer:
          "Most AI cameras still measure speed using radar or LiDAR cores that are Home Office Type Approved in the same way as traditional speed cameras. The AI element adds visual classification on top, identifying mobile phone use, seatbelt non-use, lane discipline and similar non-measurement offences. The speed evidence stands or falls on the Type Approval and calibration of the measurement core, not on the AI software. The AI overlay can support a speeding case (for example, by classifying the vehicle type or confirming the driver) but the speed itself is measured by the same technology you would find in a conventional camera.",
      },
      {
        question: "Can I challenge the AI classification?",
        answer:
          "Yes for the non-measurement offences (phone, seatbelt, etc.), no for the speed measurement itself. The AI classification of phone or seatbelt use is reviewed by a human officer, but the classification itself can still be wrong. Ambiguous images about what is in the driver's hand, or whether the seatbelt is being worn, regularly produce acquittals at the magistrates' court when reviewed at full resolution. For the speed measurement, you should challenge the measurement device's Type Approval and calibration, not the AI software, because the AI is not what measured your speed.",
      },
      {
        question: "What should I put in an FOI request?",
        answer:
          "Ask the prosecuting force for: (1) the Type Approval Certificate for the speed measurement device at the camera location, (2) the calibration certificate covering the date and time of the alleged offence, (3) the operational protocol for officer review of AI flagged images, and (4) the signage schedule for the speed limit at the camera location. Send the request by email to the force's FOI team. They have 20 working days to respond. Use any refusal or partial answer alongside your Criminal Procedure Rules disclosure request to strengthen the challenge.",
      },
      {
        question: "Will an AI camera fine affect insurance?",
        answer:
          "Yes, in the same way as any other speeding fine. An SP30 endorsement for 3 points stays on your licence for 4 years (active for 3) and insurers ask about active endorsements during the active period. Premiums rise typically 10 to 30 percent for a single SP30. If you take a speed awareness course instead, there is no endorsement to declare but some insurers ask about courses too, particularly direct insurers. Always declare what insurers actually ask about; failure to do so can void your cover.",
      },
      {
        question: "Are AI cameras allowed under the Investigatory Powers Act?",
        answer:
          "Yes. The Investigatory Powers Act 2016 regulates surveillance and interception by public authorities and does not affect roadside enforcement cameras. Roadside enforcement is governed by the Road Traffic Regulation Act 1984 and the Road Traffic Offenders Act 1988. The Information Commissioner's Office has approved the AI camera trials on data protection grounds, with the requirement that data is processed lawfully, fairly and transparently under the UK GDPR and Data Protection Act 2018. Recorded images are deleted after a specified retention period if no offence is detected.",
      },
      {
        question: "What if I elect court and lose?",
        answer:
          "If you elect court and the prosecution proves the offence to the criminal standard, the magistrates can impose a fine of up to £1,000 (£2,500 on a motorway) plus 3 to 6 points, depending on the speed band under the Magistrates' Court Sentencing Guidelines. They may also award prosecution costs. So the financial risk of losing in court is significantly higher than accepting the fixed penalty. Only elect court if you have a credible defence (Type Approval issue, signage problem, plate misread, etc.). Speak to a solicitor if you are unsure.",
      },
    ],
    relatedSlugs: [
      "mobile-phone-camera-fine-appeal",
      "seatbelt-camera-fine-appeal",
    ],
  },
  {
    slug: "seatbelt-camera-fine-appeal",
    category: "ai-camera",
    location: "AI seatbelt cameras",
    fineTypeLabel: "Seatbelt Fine",
    title: "AI seatbelt camera fine appeal",
    h1: "How to appeal an AI seatbelt camera fine",
    description:
      "Guide to challenging £100 NIPs from AI cameras that detect drivers or passengers without a seatbelt, including the medical exemption.",
    seoTitle: "AI Seatbelt Camera Fine Appeal: Grounds + Letter | AppealAFine",
    seoDescription:
      "Caught by an AI seatbelt camera? Use statutory grounds, the medical exemption and the court route to challenge a £100 NIP under s.14 or s.15 RTA 1988.",
    searchVolume: 590,
    factBox: {
      issuer: "Local police force (NIP issued from AI camera evidence)",
      appealTo: "Magistrates' Court via NIP response and court summons",
      discountWindow: "No discount; £100 fixed penalty if accepted",
      formalChallengeWindow: "28 days to return the s.172 Notice and elect court",
      standardFine: "£100 fixed penalty (no points unless dangerous driving aggravation), or up to £500 on summary conviction",
      fastestRoute: "Challenge the image at full resolution and consider the medical or reversing exemption",
    },
    intro:
      "Seatbelt enforcement from AI cameras is a more recent extension of the same Acusensus Heads-Up and Sensys Gatso systems that detect mobile phone use. The cameras photograph through the windscreen and machine vision flags possible seatbelt non-use by either the driver or front-seat passenger. A human officer reviews the flagged image before any Notice of Intended Prosecution is issued. The driver offence is under section 14 of the Road Traffic Act 1988 (driver must wear an adult seatbelt where fitted). The adult passenger offence is under section 14 (the passenger themselves is liable). The under-14 passenger offence is under section 15 (the driver is liable). The fixed penalty is £100 with no points unless the case is aggravated. Several statutory exemptions exist, including holding a medical exemption certificate (section 14(2)) and where the vehicle is being reversed. The 14-day NIP rule under section 1 of the Road Traffic Offenders Act 1988 still applies.",
    grounds: [
      {
        title: "NIP not served within 14 days",
        body: "Section 1 of the Road Traffic Offenders Act 1988 requires the Notice of Intended Prosecution to reach the registered keeper within 14 days of the offence. Compare the offence date on the NIP to the date you actually received it. If your DVLA address is up to date and the NIP is dated more than 14 days after the offence, the prosecution is barred. Write to the issuing force citing section 1 RTOA 1988 and the timing. If they do not withdraw the case, raise the time limit at the magistrates' court. The court must dismiss the charge if the prosecution cannot prove timely service.",
      },
      {
        title: "Medical exemption under section 14(2) RTA 1988",
        body: "Section 14(2) of the Road Traffic Act 1988 exempts a person who holds a medical exemption certificate from wearing a seatbelt. The certificate must be issued by a registered medical practitioner. Conditions that can support an exemption include severe chest or abdominal injuries, certain disabilities, ostomies and some pregnancy complications. If you held a valid medical exemption certificate on the date of the alleged offence, send a copy with your representation. The image alone cannot rebut a valid certificate. The prosecution should withdraw, and the magistrates' court will dismiss if it does not.",
      },
      {
        title: "Reversing or other statutory exemption",
        body: "Section 14(2) also exempts a driver who is reversing or supervising a learner driver who is reversing. The Motor Vehicles (Wearing of Seat Belts) Regulations 1993 list further exemptions: passengers in a vehicle on a roadside delivery round at speeds not exceeding the regulations, certain emergency service operations, and drivers of vehicles constructed or adapted for delivery work who are not driving more than 50 metres between stops. If the AI camera caught you during a reversing manoeuvre or qualifying delivery round, that is a complete defence. Document the activity (delivery schedule, vehicle adaptation, route plan).",
      },
      {
        title: "Image quality and AI misclassification",
        body: "Seatbelt detection from outside the windscreen is difficult: glare, reflections, dark clothing colour-matched to the belt, and rear seat belt webbing can all confuse machine vision. The Heads-Up Total system has been documented as misclassifying dark seatbelts on dark clothing. Request the high-resolution colour image and any video clip under the Criminal Procedure Rules. If the image cannot clearly show whether the belt was worn, the prosecution cannot meet the criminal standard of proof. The magistrates regularly dismiss seatbelt cases where the image is ambiguous, particularly with dark interiors and dark clothing.",
      },
      {
        title: "Passenger liability, not driver liability, for adults",
        body: "Where the alleged offence relates to an adult front-seat passenger not wearing a seatbelt, the passenger is liable under section 14, not the driver. The driver only becomes liable for passengers under 14 years old (section 15). If the NIP names you as the driver but the unbelted person was an adult passenger, the prosecution may have served the wrong person. Reply pointing out the statutory framework, naming the actual passenger if you can, and asking the force to redirect the NIP to the passenger. The driver is not strictly liable for adult passenger seatbelt use.",
      },
    ],
    localNotes: [
      "Seatbelt enforcement carries a £100 fixed penalty with no points unless aggravated.",
      "On summary conviction the maximum fine is £500 under section 14 or 15 of the Road Traffic Act 1988.",
      "The AI camera trial began with mobile phone detection in 2021 and expanded to include seatbelt detection from 2022.",
      "Acusensus and Sensys Gatso both supply systems capable of seatbelt detection.",
      "Medical exemption certificates are issued by registered medical practitioners and last for the duration stated on the certificate.",
      "Passengers under 14 are the driver's responsibility (s.15); adult passengers are responsible for themselves (s.14).",
      "Forces operating AI seatbelt cameras include Greater Manchester Police, the Met, Avon and Somerset Police and others.",
    ],
    faqs: [
      {
        question: "Will a seatbelt fine put points on my licence?",
        answer:
          "Not usually. The standard seatbelt fine under section 14 or 15 of the Road Traffic Act 1988 is a £100 fixed penalty with no points. Points only apply in aggravated cases prosecuted under wider offences such as dangerous driving where the failure to belt is part of the wider conduct. The seatbelt fine does not affect the licence directly. Insurers ask about endorsements, so the basic fine does not need to be declared as a motoring conviction. The fine record itself is not on your driving licence.",
      },
      {
        question: "What if I have a medical exemption?",
        answer:
          "If you hold a valid medical exemption certificate under section 14(2) of the Road Traffic Act 1988, you commit no offence by not wearing the belt. Send a copy of the certificate with your s.172 response and a covering letter referencing section 14(2). The prosecuting force should withdraw. If they do not, the magistrates' court must dismiss the case once the certificate is produced. Keep the original certificate in the vehicle at all times because a police officer can ask to see it on the roadside, although this is less relevant for a camera-detected offence.",
      },
      {
        question: "Can the AI camera tell whether a belt is properly worn?",
        answer:
          "Sometimes. The Heads-Up Total system looks for the diagonal stripe of the seatbelt across the upper body. If the belt is worn behind the back (which itself is unsafe but technically still wearing the belt), the AI will flag the image as non-compliance and a human officer reviews it. If you genuinely had the belt routed under your arm or behind your back, you may still be guilty of the offence under the Motor Vehicles (Wearing of Seat Belts) Regulations 1993 because the regulations require the belt to be worn properly. Request the high-resolution image and consider whether the belt is visible at all.",
      },
      {
        question: "What about backseat passengers?",
        answer:
          "AI cameras typically photograph through the windscreen and target the front seats. Rear passengers are usually outside the frame. If the NIP relates to a rear passenger, the legal framework is the same: passengers 14 or over are liable for themselves under section 14, and the driver is liable for passengers under 14 under section 15. Rear seatbelt enforcement from AI cameras is rare and the evidence is often weak because the image cannot show the rear seat clearly. If you face such a NIP, request the full image and consider whether the prosecution can meet the criminal standard.",
      },
      {
        question: "Is it 1 point or 3 points if it goes to court?",
        answer:
          "Neither. The seatbelt offence under section 14 or 15 does not carry endorsement points. The magistrates' court can fine up to £500 on summary conviction but cannot impose points. The only way points become relevant is if the case is prosecuted as something more serious such as careless or dangerous driving, in which case the offence is different and the seatbelt failure is part of the wider conduct. Standalone seatbelt cases are non-endorsable. Insurers usually do not ask about non-endorsable fines.",
      },
      {
        question: "Can I take a course instead of paying the fine?",
        answer:
          "Some forces offer a seatbelt awareness course as an alternative to the fixed penalty, similar in concept to the speed awareness course. Eligibility varies by force and is not statutory. If you are offered the course it will normally be presented as an alternative to the £100 fine. The course is typically around £45 to £80 and avoids the fine record. If you are eligible and the offer has not been made, ask in writing. The court route does not generally include this option once a NIP has been issued and you have rejected the fixed penalty.",
      },
    ],
    relatedSlugs: [
      "mobile-phone-camera-fine-appeal",
      "ai-camera-speeding-fine-appeal",
    ],
  },
];
