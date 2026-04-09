export interface BoroughFine {
  slug: string;
  borough: string;
  fineType: 'parking' | 'bus-lane' | 'congestion' | 'ulez';
  title: string;
  description: string;
  councilName: string;
  content: string;
  localInfo: string[];
  commonIssues: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
}

const FINE_TYPE_LABELS: Record<string, string> = {
  parking: 'Parking Fine',
  'bus-lane': 'Bus Lane Fine',
  congestion: 'Congestion Charge',
  ulez: 'ULEZ Fine',
};

const FINE_TYPE_SHORT: Record<string, string> = {
  parking: 'parking fine',
  'bus-lane': 'bus lane fine',
  congestion: 'congestion charge fine',
  ulez: 'ULEZ fine',
};

export const BOROUGH_FINES: BoroughFine[] = [
  // ============================================================
  // WESTMINSTER
  // ============================================================
  {
    slug: 'parking-fine-westminster',
    borough: 'Westminster',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Westminster',
    description: 'How to challenge a Westminster parking PCN. Local appeal tips, common fine locations, and your rights.',
    councilName: 'Westminster City Council',
    content: `## Got a Parking Fine in Westminster?

**Got a parking fine in Westminster? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Westminster issues more parking fines than any other London borough. With over 500,000 PCNs handed out each year, the council generates tens of millions in revenue from parking enforcement. But not every fine is fair, and thousands of drivers successfully overturn their tickets each year.

## How Westminster Parking Enforcement Works

Westminster City Council uses a mix of civil enforcement officers (CEOs) on foot and CCTV cameras to catch parking violations. The borough operates under the Traffic Management Act 2004, meaning all parking fines are civil matters rather than criminal offences.

Your PCN will typically arrive in one of two ways. An officer may place a yellow envelope on your windscreen, or you may receive a notice through the post if the offence was captured by camera. In both cases, the fine is usually set at £80 to £130, reduced by 50% if you pay within 14 days.

[Start your free appeal assessment](/appeal) to check whether your Westminster PCN has valid grounds for challenge.

## Common Parking Fine Locations in Westminster

The West End is the single biggest hotspot. Oxford Street, Regent Street, and the surrounding roads have extremely strict loading and waiting restrictions. Many drivers get caught stopping briefly outside shops, not realising that even a 30-second pause can trigger a ticket.

Soho and Covent Garden are also heavily patrolled. The narrow streets have complex signage, and resident permit zones change from one block to the next. Marylebone, particularly around Harley Street and Baker Street, catches visitors to medical practices who overstay on meters.

Hyde Park, Mayfair, and Pimlico all have extensive controlled parking zones (CPZs) with restricted hours that vary by street. Victoria station and Paddington station surrounds are enforcement hotspots, especially for drop-offs in restricted areas.

## Your Right to Appeal a Westminster PCN

You have 28 days from the date of the PCN to make an informal challenge to Westminster City Council. If this is rejected, you then receive a Notice to Owner, giving you another 28 days to make a formal representation. If the council rejects your formal representation, you can escalate to London Tribunals, an independent adjudicator.

**Important:** paying the discounted amount within 14 days means you accept the fine and lose your right to appeal. If you believe the fine is wrong, do not pay it. Instead, [start your free assessment](/appeal) and we will help you build your case.

## Grounds That Work for Westminster Appeals

The most successful appeal grounds in Westminster include faulty or unclear signage, incorrect PCN details (wrong vehicle registration, wrong location, wrong contravention code), and procedural errors such as late serving of the Notice to Owner.

Many Westminster streets have confusing time restrictions. If the signage is obscured by trees, damaged, or contradictory, you may have strong grounds. Take photos of the signs at the location as soon as possible.

Another common winning argument is that you were loading or unloading. Westminster allows limited loading in many restricted areas, but the rules are specific. If you can demonstrate you were actively loading for a continuous period within the allowed time, this can overturn the fine.

[Check your fine now](/appeal) and find out which grounds apply to your situation.

## What Happens If You Ignore a Westminster Parking Fine

Do not ignore a parking fine. Westminster will issue a charge certificate after 28 days, increasing the amount by 50%. After that, it can be registered as a debt at the county court, adding further costs. The total can reach several hundred pounds.

However, appealing is entirely free and pauses the escalation process. While your appeal is under review, the fine cannot increase.`,
    localInfo: [
      'Westminster issues over 500,000 PCNs per year, the highest of any London borough.',
      'The council earned over £80 million from parking enforcement in 2024/25.',
      'Westminster has 32 controlled parking zones with varying hours and charges.',
      'All appeals go through London Tribunals if the council rejects your representation.',
    ],
    commonIssues: [
      'Oxford Street and Regent Street loading restrictions',
      'Soho resident permit zone confusion',
      'Marylebone meter overstays near Harley Street',
      'Victoria and Paddington station drop-off zones',
      'Hyde Park Corner double yellow lines',
      'Mayfair CPZ restricted hours',
    ],
    faqs: [
      {
        question: 'How long do I have to appeal a Westminster parking fine?',
        answer: 'You have 28 days from the date of the PCN to make an informal challenge. If that is rejected, you get a further 28 days after receiving the Notice to Owner to make a formal representation. You can then escalate to London Tribunals if needed.',
      },
      {
        question: 'How much is a parking fine in Westminster?',
        answer: 'Most Westminster parking fines range from £80 to £130. You get a 50% discount if you pay within 14 days, but paying means accepting the fine and losing your right to appeal.',
      },
      {
        question: 'Can I appeal a Westminster parking fine online?',
        answer: 'Yes. Westminster City Council accepts informal challenges online through their website. Formal representations and London Tribunals appeals can also be submitted online.',
      },
      {
        question: 'What is the success rate for Westminster parking fine appeals?',
        answer: 'Around 40-60% of formal representations to Westminster are successful, and the success rate at London Tribunals is even higher. Many fines have procedural errors or unclear signage that provide valid grounds for appeal.',
      },
    ],
    seoTitle: 'Appeal a Parking Fine in Westminster | Free Assessment',
    seoDescription: 'Got a parking fine in Westminster? Check your PCN for free and get a personalised appeal letter. Over 40% of Westminster appeals succeed.',
  },
  {
    slug: 'bus-lane-fine-westminster',
    borough: 'Westminster',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Westminster',
    description: 'How to challenge a Westminster bus lane PCN. Camera locations, common mistakes, and appeal tips.',
    councilName: 'Westminster City Council',
    content: `## Got a Bus Lane Fine in Westminster?

**Got a bus lane fine in Westminster? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Westminster is one of the busiest boroughs for bus lane enforcement. With dozens of camera-monitored bus lanes across the West End, Marylebone, and Victoria, thousands of drivers receive bus lane PCNs each year. Many of these fines are issued incorrectly or have valid grounds for appeal.

## How Westminster Bus Lane Cameras Work

Bus lane enforcement in Westminster uses ANPR (automatic number plate recognition) cameras mounted above designated bus lanes. These cameras record vehicles that enter the lane during restricted hours. The footage is reviewed before a PCN is issued by post, usually arriving within 14 days of the offence.

The fine for driving in a bus lane in Westminster is typically £130, reduced to £65 if paid within 14 days. However, paying early means you accept the charge and cannot appeal. If you believe the fine is unfair, [start your free assessment](/appeal) before paying anything.

## Common Bus Lane Fine Locations in Westminster

Oxford Street is the most heavily enforced bus lane in the borough. Since the introduction of traffic restrictions, many drivers have been caught entering the bus-only sections, particularly at the eastern end near Tottenham Court Road.

Park Lane, Victoria Street, and Marylebone Road also have strictly enforced bus lanes. The signage is not always obvious, especially for drivers unfamiliar with the area. Piccadilly and the Strand have stretches where bus lanes operate at peak hours only, catching drivers who assume they are always restricted or never restricted.

The Embankment and Millbank also feature camera-enforced lanes that catch drivers cutting through towards Parliament Square and Westminster Bridge.

## Grounds for Appealing a Westminster Bus Lane Fine

You can appeal a bus lane fine if the signage was unclear, missing, or not compliant with regulations. Bus lane signs must meet specific standards set by the Traffic Signs Regulations and General Directions 2016. If the signs were obscured, faded, or incorrectly positioned, your fine could be invalid.

Other strong grounds include: the camera captured the wrong vehicle, you were turning left and had to cross the bus lane briefly, there was an emergency or breakdown, or the road markings were worn or absent.

[Check your bus lane fine now](/appeal) to see which grounds apply.

## The Appeal Process for Westminster Bus Lane Fines

First, make an informal challenge to Westminster City Council within 28 days. Include photos of the location, screenshots from Google Street View showing signage issues, and any dashcam footage. If rejected, you receive a Notice to Owner and have 28 days to submit a formal representation. If that fails, London Tribunals provides an independent review.

## Tips for a Successful Bus Lane Appeal

Document everything. Visit the location and photograph the signs from the driver's perspective. Check whether the bus lane markings on the road surface are clear and unbroken. Note the times the bus lane operates and whether this matches the signage. Many Westminster bus lanes have specific hours rather than 24/7 enforcement, and errors in the timing on the PCN can invalidate the fine.`,
    localInfo: [
      'Westminster uses over 50 ANPR cameras to monitor bus lanes across the borough.',
      'Oxford Street is the most heavily enforced bus lane zone in London.',
      'Bus lane fines in Westminster are £130, reduced to £65 if paid within 14 days.',
      'London Tribunals handles all escalated bus lane appeals for Westminster.',
    ],
    commonIssues: [
      'Oxford Street bus-only restrictions',
      'Park Lane bus lane during peak hours',
      'Victoria Street camera enforcement',
      'Marylebone Road restricted sections',
      'Piccadilly part-time bus lane confusion',
      'Embankment and Millbank camera zones',
    ],
    faqs: [
      {
        question: 'How much is a bus lane fine in Westminster?',
        answer: 'A bus lane fine in Westminster is £130, reduced to £65 if paid within 14 days. However, paying early means you accept the fine and cannot appeal.',
      },
      {
        question: 'Can I appeal a Westminster bus lane fine if the signs were unclear?',
        answer: 'Yes. If bus lane signage was obscured, damaged, faded, or did not comply with the Traffic Signs Regulations, you have valid grounds to challenge the PCN.',
      },
      {
        question: 'How long does a Westminster bus lane appeal take?',
        answer: 'Westminster usually responds to informal challenges within 28 days. If you escalate to formal representation, allow another 28-56 days. London Tribunals typically decides within 28 days of receiving the case.',
      },
      {
        question: 'Will I get points on my licence for a Westminster bus lane fine?',
        answer: 'No. Bus lane fines in Westminster are civil penalties, not criminal offences. There are no points, no criminal record, and no impact on your driving licence.',
      },
    ],
    seoTitle: 'Appeal a Bus Lane Fine in Westminster | Free',
    seoDescription: 'Got a bus lane fine in Westminster? Check your PCN for free. Many Westminster bus lane fines have valid appeal grounds due to signage issues.',
  },
  {
    slug: 'congestion-charge-fine-westminster',
    borough: 'Westminster',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Westminster',
    description: 'How to challenge a congestion charge PCN in Westminster. Common mistakes, exemptions, and appeal tips.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Westminster?

**Got a congestion charge fine in Westminster? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Westminster sits at the heart of the London Congestion Charge Zone. Most of the borough falls within the charging area, meaning any vehicle driving through central Westminster between 7am and 6pm on weekdays must pay the daily £15 charge. Failure to pay results in a PCN of £160, reduced to £80 if paid within 14 days.

## How the Congestion Charge Works in Westminster

Transport for London (TfL) operates the Congestion Charge, not Westminster City Council. ANPR cameras at entry and exit points around the zone record every vehicle entering or leaving. If you drive within the zone and do not pay by midnight the same day (or the next charging day if you set up Auto Pay), TfL issues a PCN by post.

The charge applies Monday to Friday, 7am to 6pm, excluding bank holidays and the Christmas to New Year period. It does not apply on weekends.

[Start your free assessment](/appeal) to check whether your congestion charge PCN has grounds for challenge.

## Common Reasons for Congestion Charge Fines in Westminster

The most common reason is simply forgetting to pay. Drivers who rarely visit central London may not realise they have entered the zone, especially when approaching from Edgware Road, Park Lane, or Victoria. The boundary is not always obvious to unfamiliar drivers.

Auto Pay failures are another frequent issue. If your payment method expires or the system glitches, you can receive a fine even though you believed you were covered. TfL has a responsibility to notify you of Auto Pay problems, and failure to do so can be grounds for appeal.

Other common issues include incorrect vehicle registration on your account, driving a vehicle you believed was exempt (such as a hybrid that no longer qualifies), and entering the zone boundary during the few seconds before the charging period ends.

## How to Appeal a Congestion Charge Fine

You must appeal directly to TfL, not Westminster Council. You have 28 days from the date of the PCN to challenge it. TfL accepts representations online through their website. If TfL rejects your challenge, you can escalate to London Tribunals.

Strong grounds include: you paid the charge but TfL failed to match the payment, your vehicle was exempt, there was a genuine emergency, or the signs at the boundary were inadequate.

**Do not pay the fine if you plan to appeal.** Paying accepts the charge. [Check your fine now](/appeal) for a free assessment of your grounds.

## Exemptions and Discounts

Several vehicles are exempt from the Congestion Charge: Blue Badge holders (must register), fully electric vehicles, certain wheelchair-accessible vehicles, military vehicles, and vehicles used by emergency services. If you believe you qualified for an exemption but were still fined, this is a strong ground for appeal.

Westminster residents within the zone can register for a 90% discount on the daily charge. If you live in Westminster and were not aware of this discount, it may not cancel an existing PCN, but it is worth checking your eligibility for future savings.`,
    localInfo: [
      'Most of Westminster falls within the Congestion Charge Zone.',
      'The Congestion Charge is £15 per day, Monday to Friday, 7am to 6pm.',
      'TfL, not Westminster Council, manages congestion charge enforcement.',
      'Westminster residents can register for a 90% discount on the charge.',
    ],
    commonIssues: [
      'Forgetting to pay when entering from Edgware Road or Park Lane',
      'Auto Pay failures due to expired payment cards',
      'Hybrid vehicles that no longer qualify for exemption',
      'Confusion about zone boundaries near Victoria',
      'Entering the zone minutes before charging starts or ends',
      'Failed payment matching despite having paid',
    ],
    faqs: [
      {
        question: 'How much is a congestion charge fine in Westminster?',
        answer: 'The PCN is £160, reduced to £80 if paid within 14 days. The daily charge itself is £15.',
      },
      {
        question: 'Who do I appeal to for a congestion charge fine?',
        answer: 'You appeal to Transport for London (TfL), not Westminster City Council. If TfL rejects your appeal, you can escalate to London Tribunals for an independent review.',
      },
      {
        question: 'Can I get out of a congestion charge fine if I forgot to pay?',
        answer: 'Simply forgetting is not usually accepted as grounds for appeal. However, if there were mitigating circumstances such as unclear signage, a system error, or an emergency, you may have valid grounds. A free assessment can check your specific situation.',
      },
      {
        question: 'Do Westminster residents pay the congestion charge?',
        answer: 'Westminster residents within the zone can register for a 90% discount, paying just £1.50 per day instead of £15. You must register in advance through TfL.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge Fine Westminster | Free',
    seoDescription: 'Got a congestion charge fine in Westminster? Free assessment of your PCN. Check exemptions, Auto Pay errors, and appeal grounds.',
  },
  {
    slug: 'ulez-fine-westminster',
    borough: 'Westminster',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Westminster',
    description: 'How to challenge a ULEZ fine in Westminster. Vehicle exemptions, common errors, and appeal process.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Westminster?

**Got a ULEZ fine in Westminster? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The Ultra Low Emission Zone covers all of Greater London, so driving a non-compliant vehicle anywhere in Westminster triggers a daily charge. If you do not pay the £12.50 ULEZ charge, TfL issues a PCN of £180, reduced to £90 if paid within 14 days. Westminster, being at the centre of London, is one of the most common locations for ULEZ fines.

## How ULEZ Enforcement Works in Westminster

TfL uses a network of ANPR cameras across London, including multiple cameras throughout Westminster, to detect non-compliant vehicles. The cameras read your number plate and check it against the DVLA database to determine whether your vehicle meets the emission standards.

For petrol vehicles, you generally need to meet Euro 4 (typically manufactured after 2005). For diesel vehicles, you need Euro 6 (typically manufactured after September 2015). Motorcycles, mopeds, and other vehicle types have their own thresholds.

If your vehicle does not meet the standard and you do not pay the daily charge, a PCN arrives by post. [Check your fine for free](/appeal) to see whether you have grounds to challenge it.

## Common ULEZ Fine Issues in Westminster

Many drivers are caught because they genuinely did not know their vehicle was non-compliant. The ULEZ vehicle checker on TfL's website sometimes gives incorrect results, particularly for imported vehicles, modified vehicles, or those with engine swaps. If TfL's own checker showed your vehicle as compliant but you still received a fine, this is a strong appeal ground.

Other common issues include: you sold the vehicle before the date of the alleged offence, the vehicle was stolen, the camera misread your number plate, or you had already paid the charge but the system did not register it.

Visitors driving through Westminster from outside London are frequently caught, especially those passing through on the A40 (Westway), Edgware Road, or the A4 corridor near Paddington.

## How to Appeal a ULEZ Fine

Appeal directly to TfL within 28 days. Provide evidence such as: your vehicle's V5C showing the correct Euro standard, proof of payment, proof the vehicle was sold or stolen, or screenshots from TfL's vehicle checker showing compliance. If TfL rejects your challenge, escalate to London Tribunals.

[Start your appeal now](/appeal) and we will identify the strongest grounds for your situation.

## ULEZ Exemptions

Certain vehicles are exempt: historic vehicles (manufactured before 1 January 1977), military vehicles, agricultural vehicles, and vehicles with a disabled tax class. Blue Badge holders do not get an automatic ULEZ exemption, but there was a grace period that has now ended for most.

If you believe your vehicle qualifies for an exemption, gather your V5C document and any supporting evidence before submitting your appeal.`,
    localInfo: [
      'ULEZ covers all of Greater London, including the whole of Westminster.',
      'The daily ULEZ charge is £12.50 for non-compliant vehicles.',
      'TfL manages ULEZ enforcement, not Westminster Council.',
      'Petrol vehicles need Euro 4; diesel vehicles need Euro 6 to be compliant.',
    ],
    commonIssues: [
      'TfL vehicle checker giving incorrect compliance results',
      'Visitors unfamiliar with ULEZ entering via A40 or A4 corridors',
      'Camera misreading number plates on Westminster streets',
      'Vehicles sold before the offence date',
      'Confusion about Blue Badge ULEZ exemptions',
      'Modified or imported vehicles with incorrect DVLA records',
    ],
    faqs: [
      {
        question: 'How much is a ULEZ fine in Westminster?',
        answer: 'The PCN is £180, reduced to £90 if paid within 14 days. The daily ULEZ charge itself is £12.50.',
      },
      {
        question: 'Can I appeal a ULEZ fine if my vehicle is actually compliant?',
        answer: 'Yes. If your vehicle meets the emission standards but was incorrectly flagged, provide your V5C and any manufacturer documentation showing the Euro standard. This is one of the most common successful appeal grounds.',
      },
      {
        question: 'Is there a ULEZ exemption for older classic cars?',
        answer: 'Yes. Vehicles manufactured before 1 January 1977 are exempt from ULEZ. You do not need to register for this exemption, but if you receive a fine in error, appeal with proof of your vehicle\'s age.',
      },
      {
        question: 'Who handles ULEZ fine appeals?',
        answer: 'TfL handles the initial appeal. If they reject it, you can escalate to London Tribunals for an independent adjudication. The process is free.',
      },
    ],
    seoTitle: 'Appeal a ULEZ Fine in Westminster | Free Check',
    seoDescription: 'Got a ULEZ fine in Westminster? Free assessment of your PCN. Check vehicle compliance, exemptions, and appeal grounds.',
  },

  // ============================================================
  // CAMDEN
  // ============================================================
  {
    slug: 'parking-fine-camden',
    borough: 'Camden',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Camden',
    description: 'How to challenge a Camden parking PCN. Local hotspots, appeal process, and your rights.',
    councilName: 'London Borough of Camden',
    content: `## Got a Parking Fine in Camden?

**Got a parking fine in Camden? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Camden is one of London's most heavily enforced boroughs for parking. From the busy streets around Camden Town Market to the residential zones of Hampstead and Bloomsbury, the council issues tens of thousands of PCNs every year. But many of these fines have valid grounds for appeal.

## How Camden Parking Enforcement Works

Camden Council uses civil enforcement officers and CCTV cameras across the borough. Enforcement is particularly aggressive around Camden Town, King's Cross, Euston, and the busy commercial streets of Holborn and Bloomsbury.

Parking fines in Camden range from £80 to £130 depending on the contravention. The 50% early payment discount applies if you pay within 14 days, but doing so means accepting the fine.

[Check your Camden parking fine for free](/appeal) before paying anything.

## Common Parking Fine Locations in Camden

Camden Town and the area around the Lock and Stables Market is the borough's biggest hotspot. Thousands of visitors arrive every weekend, and the surrounding streets have strict residents-only zones. Chalk Farm Road, Kentish Town Road, and Parkway are all heavily patrolled.

King's Cross and St Pancras attract fines for station drop-offs and pickups. The surrounding streets, including Euston Road, Pancras Road, and York Way, have complex restrictions that catch unfamiliar drivers.

Hampstead Village has extremely limited parking and aggressive enforcement of the small number of bays. Heath Street, Flask Walk, and the streets around Hampstead Heath are frequent fine locations.

Bloomsbury, particularly around the British Museum, Russell Square, and UCL, catches students and tourists who park in permit zones. Holborn and the streets around Gray's Inn have meters with short maximum stays.

## Your Right to Appeal

You have 28 days from the PCN date for an informal challenge to Camden Council. If rejected, a Notice to Owner gives you 28 days for a formal representation. London Tribunals provides the final independent review.

**Do not pay if you believe the fine is wrong.** [Start your free appeal assessment](/appeal) and we will check your grounds.

## Strong Appeal Grounds in Camden

Camden has many streets where signage is obscured by trees, especially in leafy areas like Hampstead and Primrose Hill. If you could not reasonably see the restriction signs from your vehicle, photograph them and include the images in your appeal.

Permit zone boundary confusion is another common winning ground. Camden's zones often change on a street-by-street basis, and the entry signs are not always prominent. If you parked just outside a zone boundary in what appeared to be an unrestricted area, this may support your case.

Loading and unloading disputes are frequent around Camden Market and King's Cross. If you were genuinely loading goods for a nearby business within the permitted time, gather evidence to support this.`,
    localInfo: [
      'Camden issues approximately 200,000 PCNs per year across the borough.',
      'The borough has 25+ controlled parking zones with different hours.',
      'Camden Town Market attracts 100,000+ visitors per weekend, creating enforcement hotspots.',
      'Appeals go through London Tribunals if Camden Council rejects your representation.',
    ],
    commonIssues: [
      'Camden Town Market area residents-only zones',
      'King\'s Cross and St Pancras station drop-off restrictions',
      'Hampstead Village limited parking bays',
      'Bloomsbury and British Museum area permit zones',
      'Chalk Farm Road and Kentish Town Road enforcement',
      'Holborn meter overstays near Gray\'s Inn',
    ],
    faqs: [
      {
        question: 'How do I appeal a parking fine in Camden?',
        answer: 'Start with an informal challenge to Camden Council within 28 days. You can do this online or by post. If rejected, you have 28 days after the Notice to Owner to make a formal representation. London Tribunals is the final step.',
      },
      {
        question: 'How much is a parking fine in Camden?',
        answer: 'Camden parking fines are typically £80 to £130. A 50% discount applies if paid within 14 days, but payment waives your appeal rights.',
      },
      {
        question: 'Can I park near Camden Market for free?',
        answer: 'Very few free parking options exist near Camden Market. Most surrounding streets are residents-only or have meters. Enforcement is heavy, especially on weekends. Consider public transport or the NCP car park on Pratt Street.',
      },
      {
        question: 'What happens if I ignore a Camden parking fine?',
        answer: 'The fine increases by 50% after 28 days with a charge certificate. It can then be registered at county court, adding further costs. Always appeal if you believe the fine is unfair rather than ignoring it.',
      },
    ],
    seoTitle: 'Appeal a Parking Fine in Camden | Free Assessment',
    seoDescription: 'Got a parking fine in Camden? Check your PCN for free. Common grounds include obscured signage near Camden Market and permit zone confusion.',
  },
  {
    slug: 'bus-lane-fine-camden',
    borough: 'Camden',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Camden',
    description: 'How to challenge a Camden bus lane PCN. Camera locations, restricted hours, and appeal tips.',
    councilName: 'London Borough of Camden',
    content: `## Got a Bus Lane Fine in Camden?

**Got a bus lane fine in Camden? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Camden has multiple camera-enforced bus lanes, particularly along the major routes connecting King's Cross, Euston, and the West End. Thousands of drivers receive bus lane PCNs each year, and many have legitimate grounds to challenge them.

## Bus Lane Enforcement in Camden

Camden Council and TfL share responsibility for bus lane enforcement depending on which roads are involved. TfL manages bus lanes on red routes (major arterial roads), while Camden enforces lanes on borough-managed roads.

ANPR cameras capture vehicles entering bus lanes during restricted hours. The fine is £130, reduced to £65 if paid within 14 days.

[Check your bus lane fine for free](/appeal) to find out if you have grounds to appeal.

## Common Bus Lane Fine Spots in Camden

Euston Road is one of the busiest bus lane enforcement areas in London. The lanes operate at peak hours, and drivers unfamiliar with the road often drift into the bus lane, especially near Euston and King's Cross stations.

Tottenham Court Road has bus lane restrictions following the transformation of the street. Camden High Street and Kentish Town Road also feature enforced bus lanes that catch regular commuters and visitors.

Hampstead Road and Albany Street near Regent's Park have bus lanes with restricted hours that are not always well-signed from a driver's perspective.

## How to Challenge a Camden Bus Lane Fine

Submit an informal challenge within 28 days, either to Camden Council or TfL depending on who issued the fine (check the PCN header). Include photos of signage, dashcam footage if available, and a clear explanation of why you believe the fine is invalid.

Strong grounds include unclear or non-compliant signage, worn road markings, turning left across a bus lane, or a genuine emergency.

[Start your free assessment now](/appeal) and we will identify the best grounds for your situation.

## Tips for Winning Your Appeal

Visit the location and photograph the bus lane signs from the exact point where you entered the lane. Check whether the road markings are continuous and clearly visible. Note the operating hours displayed on the signs and compare them with the time shown on your PCN. Any discrepancy could invalidate the fine.`,
    localInfo: [
      'Camden has over 20 camera-enforced bus lanes across the borough.',
      'Euston Road is one of London\'s busiest bus lane enforcement corridors.',
      'TfL enforces bus lanes on red routes; Camden Council handles borough roads.',
      'Bus lane fines are £130, reduced to £65 within 14 days.',
    ],
    commonIssues: [
      'Euston Road peak-hour bus lanes',
      'Tottenham Court Road restrictions',
      'Camden High Street enforcement cameras',
      'Kentish Town Road bus lane hours',
      'Hampstead Road signage issues',
      'Albany Street restricted sections near Regent\'s Park',
    ],
    faqs: [
      {
        question: 'Who issues bus lane fines in Camden?',
        answer: 'It depends on the road. TfL issues fines for red routes (like parts of Euston Road), while Camden Council enforces bus lanes on borough-managed roads. Check the header of your PCN to see who issued it.',
      },
      {
        question: 'Can I appeal a Camden bus lane fine if I was turning left?',
        answer: 'Yes. If you entered the bus lane briefly to make a left turn, this is generally permitted and is a valid ground for appeal. Provide dashcam footage or a clear description of the manoeuvre.',
      },
      {
        question: 'How long do I have to appeal a bus lane fine in Camden?',
        answer: 'You have 28 days from the PCN date for an informal challenge. If rejected, the Notice to Owner gives you another 28 days for a formal representation.',
      },
      {
        question: 'Are bus lane fines in Camden a criminal offence?',
        answer: 'No. Bus lane fines in Camden are civil penalties. There are no licence points, no criminal record, and no impact on your insurance.',
      },
    ],
    seoTitle: 'Appeal a Bus Lane Fine in Camden | Free Check',
    seoDescription: 'Got a bus lane fine in Camden? Free assessment of your PCN. Check signage compliance, restricted hours, and appeal grounds.',
  },
  {
    slug: 'congestion-charge-fine-camden',
    borough: 'Camden',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Camden',
    description: 'Challenge a congestion charge PCN in Camden. Zone boundaries, payment issues, and appeal guide.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Camden?

**Got a congestion charge fine in Camden? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Parts of southern Camden fall within the London Congestion Charge Zone, including Bloomsbury, Holborn, and areas around Euston. If you drive through these areas without paying the £15 daily charge, TfL issues a PCN of £160, reduced to £80 within 14 days.

## Where the Congestion Charge Zone Hits Camden

The Congestion Charge boundary cuts through Camden roughly along Euston Road. Everything south of Euston Road, including Bloomsbury, the British Museum area, Holborn, and parts of King's Cross, falls within the zone. Streets north of Euston Road, including Camden Town and Kentish Town, are outside the zone.

This boundary creates confusion for drivers, especially those approaching from Camden Town heading south. Crossing Euston Road into Bloomsbury triggers the charge.

[Check your fine for free](/appeal) to see if you have valid grounds.

## Common Issues in Camden

Drivers visiting University College London, the British Museum, or hospitals in the Bloomsbury area often forget they are entering the Congestion Charge Zone. The boundary signage along Euston Road can be missed in heavy traffic.

Auto Pay failures, incorrect vehicle registrations, and system errors are also common. If you paid but TfL did not match the payment, gather your bank statement or payment confirmation as evidence.

## How to Appeal

Appeal directly to TfL within 28 days. If rejected, escalate to London Tribunals. The process is free and pauses any escalation of the fine.

[Start your free assessment](/appeal) to identify the best grounds for your specific situation.`,
    localInfo: [
      'Southern Camden (Bloomsbury, Holborn) falls within the Congestion Charge Zone.',
      'The zone boundary runs roughly along Euston Road.',
      'The Congestion Charge is £15/day, Monday to Friday, 7am to 6pm.',
      'TfL manages enforcement; appeals go through London Tribunals if rejected.',
    ],
    commonIssues: [
      'Crossing Euston Road southbound into the zone without realising',
      'Visiting UCL or British Museum without paying the charge',
      'Zone boundary signage missed in heavy Euston Road traffic',
      'Auto Pay failures on registered accounts',
    ],
    faqs: [
      {
        question: 'Is Camden Town in the Congestion Charge Zone?',
        answer: 'No. Camden Town, Kentish Town, Hampstead, and areas north of Euston Road are outside the zone. Only southern Camden (Bloomsbury, Holborn) falls within the Congestion Charge Zone.',
      },
      {
        question: 'How much is a congestion charge fine in Camden?',
        answer: 'The PCN is £160, reduced to £80 if paid within 14 days. The daily charge itself is £15.',
      },
      {
        question: 'Can I appeal if I forgot to pay the congestion charge?',
        answer: 'Forgetting alone is usually not sufficient grounds. However, if there were mitigating circumstances such as unclear boundary signage, a system error, or an emergency, you may have valid grounds.',
      },
      {
        question: 'Do I appeal to Camden Council or TfL?',
        answer: 'Always appeal congestion charge fines to TfL, regardless of which borough you were driving through. TfL manages the entire Congestion Charge scheme.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge Fine Camden | Free',
    seoDescription: 'Got a congestion charge fine in Camden? Free PCN assessment. Southern Camden falls in the zone. Check your appeal grounds now.',
  },
  {
    slug: 'ulez-fine-camden',
    borough: 'Camden',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Camden',
    description: 'Challenge a ULEZ PCN in Camden. Vehicle compliance, exemptions, and appeal process.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Camden?

**Got a ULEZ fine in Camden? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

ULEZ covers all of Greater London, so driving a non-compliant vehicle anywhere in Camden triggers the £12.50 daily charge. Failure to pay results in a £180 PCN, reduced to £90 within 14 days. Camden, with its busy north London roads, sees many ULEZ fines, particularly on vehicles approaching from outside London.

## How ULEZ Cameras Work in Camden

TfL has ANPR cameras throughout Camden, including on the A400 (Camden High Street), A503 (Seven Sisters Road junction), Finchley Road, and other major routes. These cameras read number plates and check vehicle compliance against the DVLA database.

Petrol vehicles need Euro 4 or better (typically post-2005). Diesel vehicles need Euro 6 (typically post-September 2015). If your vehicle does not meet these standards, you must pay £12.50 per day or face a fine.

[Check your ULEZ fine for free](/appeal) to see whether you have grounds to challenge it.

## Common ULEZ Issues in Camden

Drivers coming into London via the M1 and A1 corridors enter Camden first, making it a common location for ULEZ fines from visitors and commuters. Many are unaware their vehicle is non-compliant until the PCN arrives.

Other issues include TfL's vehicle checker giving incorrect results, vehicles that have been modified to meet standards but whose DVLA records were not updated, and fines issued after the vehicle was sold.

## Appealing a Camden ULEZ Fine

Appeal to TfL within 28 days. Provide your V5C showing the correct Euro standard, proof of payment if applicable, or evidence the vehicle was sold before the offence date. London Tribunals handles escalated appeals.

[Start your free assessment now](/appeal) for a personalised check of your situation.`,
    localInfo: [
      'ULEZ covers all of Camden as part of the London-wide zone.',
      'Cameras on A400, Finchley Road, and other routes monitor compliance.',
      'Vehicles entering from M1/A1 corridors are frequently caught in Camden.',
      'The ULEZ charge is £12.50/day; the PCN is £180 (£90 within 14 days).',
    ],
    commonIssues: [
      'Vehicles entering London via M1/A1 through Camden',
      'Incorrect TfL vehicle checker results',
      'Modified vehicles with outdated DVLA records',
      'Fines issued after vehicle was sold',
    ],
    faqs: [
      {
        question: 'Is all of Camden in the ULEZ zone?',
        answer: 'Yes. ULEZ covers all of Greater London, so every road in Camden is within the zone.',
      },
      {
        question: 'How much is a ULEZ fine in Camden?',
        answer: 'The PCN is £180, reduced to £90 if paid within 14 days. The daily charge for non-compliant vehicles is £12.50.',
      },
      {
        question: 'Can I appeal if I did not know about ULEZ?',
        answer: 'Lack of awareness alone is not usually sufficient. However, if there were other factors such as incorrect vehicle checker results, a recent vehicle modification, or a registration error, you may have valid grounds.',
      },
      {
        question: 'Who handles ULEZ appeals?',
        answer: 'TfL handles the initial appeal. If rejected, London Tribunals provides an independent review. The entire process is free.',
      },
    ],
    seoTitle: 'Appeal a ULEZ Fine in Camden | Free Assessment',
    seoDescription: 'Got a ULEZ fine in Camden? Free PCN check. Vehicles entering via M1/A1 are frequently caught. Check your compliance and appeal grounds.',
  },

  // ============================================================
  // LAMBETH
  // ============================================================
  {
    slug: 'parking-fine-lambeth',
    borough: 'Lambeth',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Lambeth',
    description: 'How to challenge a Lambeth parking PCN. Brixton, Waterloo, and Streatham hotspots and appeal tips.',
    councilName: 'London Borough of Lambeth',
    content: `## Got a Parking Fine in Lambeth?

**Got a parking fine in Lambeth? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Lambeth stretches from the South Bank and Waterloo in the north to Streatham and Norwood in the south. The borough issues a high volume of parking fines, particularly around Brixton, Waterloo, and Clapham. Many of these PCNs are challengeable.

## How Lambeth Parking Enforcement Works

Lambeth Council uses both on-street civil enforcement officers and CCTV cameras. The borough has over 20 controlled parking zones, and restrictions vary significantly between areas. Fines range from £80 to £130, with the usual 50% discount for early payment.

[Check your Lambeth PCN for free](/appeal) before paying.

## Common Fine Locations

Brixton is one of the busiest enforcement areas. The streets around Brixton Market, Electric Avenue, and Coldharbour Lane have complex restrictions and heavy foot traffic. Resident permit confusion between zones is a frequent issue.

Waterloo and the South Bank catch visitors to cultural venues, hospitals (St Thomas', Evelina London), and commuters. Meters around Waterloo station fill quickly, and overstays are common.

Clapham, particularly around Clapham High Street and the Common, has strict evening and weekend restrictions that catch people off guard. Streatham High Road, one of London's longest shopping streets, has loading restrictions that are poorly understood.

## Appeal Grounds for Lambeth

Successful grounds include obscured or confusing signage, incorrect PCN details, expired meters where you had credit remaining, and loading/unloading defences. Lambeth has many tree-lined streets where signs become hidden during summer months.

[Start your appeal now](/appeal) and get a personalised assessment.

## The Appeal Process

Challenge informally to Lambeth Council within 28 days. If rejected, submit a formal representation within 28 days of the Notice to Owner. London Tribunals provides the independent final review.`,
    localInfo: [
      'Lambeth issues approximately 150,000 PCNs annually.',
      'The borough has 20+ controlled parking zones with varied hours.',
      'Brixton is the highest enforcement area within Lambeth.',
      'London Tribunals handles all escalated Lambeth parking appeals.',
    ],
    commonIssues: [
      'Brixton Market area residents-only zone confusion',
      'Waterloo station overstays and drop-off zone fines',
      'Clapham High Street evening and weekend restrictions',
      'Streatham High Road loading and unloading confusion',
      'South Bank visitor parking restrictions',
      'Tree-obscured signage in residential areas',
    ],
    faqs: [
      {
        question: 'How do I appeal a Lambeth parking fine?',
        answer: 'Submit an informal challenge to Lambeth Council within 28 days of the PCN. If rejected, you have 28 days after the Notice to Owner for a formal representation. London Tribunals is the final step.',
      },
      {
        question: 'How much is a parking fine in Lambeth?',
        answer: 'Lambeth parking fines are £80 to £130. A 50% discount applies if paid within 14 days, but paying waives your appeal rights.',
      },
      {
        question: 'Where can I park for free in Lambeth?',
        answer: 'Free parking is very limited. Some residential streets outside CPZ hours allow free parking, and there are a few free bays on Sundays and evenings. Always check the signs carefully.',
      },
      {
        question: 'Can I appeal a Lambeth fine if the meter was broken?',
        answer: 'Yes. If the meter was faulty and you could not pay, this is a valid defence. Take a photo of the meter showing the fault and note the date and time.',
      },
    ],
    seoTitle: 'Appeal a Parking Fine in Lambeth | Free Check',
    seoDescription: 'Got a parking fine in Lambeth? Free PCN assessment. Brixton, Waterloo, and Clapham are top hotspots. Check your appeal grounds now.',
  },
  {
    slug: 'bus-lane-fine-lambeth',
    borough: 'Lambeth',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Lambeth',
    description: 'Challenge a Lambeth bus lane PCN. Camera locations, restricted hours, and how to appeal.',
    councilName: 'London Borough of Lambeth',
    content: `## Got a Bus Lane Fine in Lambeth?

**Got a bus lane fine in Lambeth? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Lambeth has several camera-enforced bus lanes across its main routes, including Brixton Road, Streatham High Road, and routes around Waterloo. Many drivers receive fines that have valid grounds for appeal.

## Bus Lane Cameras in Lambeth

Bus lanes on Lambeth's borough roads are enforced by the council using ANPR cameras. TfL enforces lanes on red routes such as parts of the A23 (Brixton Road). The fine is £130, reduced to £65 within 14 days.

Brixton Road is the single biggest source of bus lane fines in Lambeth. The lane operates during peak hours, and the transitions between restricted and unrestricted sections catch many drivers.

[Check your bus lane fine for free](/appeal) to see if you have grounds.

## Common Issues and Appeal Grounds

Signage compliance is a strong ground. If signs do not meet the Traffic Signs Regulations, the enforcement is invalid. Worn or missing road markings also weaken the council's case. Turning left across a bus lane to reach a side street is generally permitted.

Emergency situations, breakdowns, and avoiding accidents or obstructions are all valid defences.

## How to Appeal

Challenge within 28 days to either Lambeth Council or TfL depending on who issued the PCN. If rejected, London Tribunals provides an independent review.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Brixton Road is Lambeth\'s busiest bus lane enforcement area.',
      'TfL enforces bus lanes on red routes; Lambeth Council handles borough roads.',
      'Bus lane fines are £130, reduced to £65 within 14 days.',
      'All escalated appeals go through London Tribunals.',
    ],
    commonIssues: [
      'Brixton Road peak-hour bus lane cameras',
      'Streatham High Road enforcement',
      'Waterloo area bus lane restrictions',
      'A23 red route bus lane enforcement by TfL',
    ],
    faqs: [
      {
        question: 'How much is a bus lane fine in Lambeth?',
        answer: 'Bus lane fines in Lambeth are £130, reduced to £65 if paid within 14 days.',
      },
      {
        question: 'Can I appeal if I was turning left across the bus lane?',
        answer: 'Yes. Briefly entering a bus lane to make a left turn is generally permitted and is a valid ground for appeal.',
      },
      {
        question: 'Who issues bus lane fines on Brixton Road?',
        answer: 'It depends on the section. TfL enforces bus lanes on the red route sections, while Lambeth Council enforces borough-managed sections. Check your PCN header.',
      },
      {
        question: 'Do bus lane fines in Lambeth affect my licence?',
        answer: 'No. Bus lane fines are civil penalties with no points, no criminal record, and no insurance impact.',
      },
    ],
    seoTitle: 'Appeal a Bus Lane Fine in Lambeth | Free',
    seoDescription: 'Got a bus lane fine in Lambeth? Free PCN check. Brixton Road is the top hotspot. Check signage compliance and appeal grounds.',
  },
  {
    slug: 'congestion-charge-fine-lambeth',
    borough: 'Lambeth',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Lambeth',
    description: 'Challenge a congestion charge PCN in Lambeth. Zone boundaries near Waterloo and the South Bank.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Lambeth?

**Got a congestion charge fine in Lambeth? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The northern tip of Lambeth, including Waterloo, the South Bank, and parts of Kennington, falls within the London Congestion Charge Zone. Drivers crossing Waterloo Bridge, Westminster Bridge, or Lambeth Bridge into this area during charging hours must pay the £15 daily charge or face a £160 PCN.

## Zone Boundaries in Lambeth

The Congestion Charge boundary in Lambeth runs roughly along Kennington Lane and Kennington Road. Everything north and west of this line is within the zone, including Waterloo station, the London Eye, the National Theatre, and St Thomas' Hospital.

Most of Lambeth (Brixton, Clapham, Streatham) is outside the zone. The confusion arises for drivers heading to Waterloo or the South Bank who do not realise they are entering the charging area.

[Check your fine for free](/appeal) to see if you have valid grounds.

## Common Issues and How to Appeal

Visitors to St Thomas' Hospital and the Evelina London Children's Hospital frequently receive fines, especially those unfamiliar with London. Auto Pay failures and incorrect vehicle registrations are also common.

Appeal to TfL within 28 days. If rejected, escalate to London Tribunals. The process is free.

[Start your free assessment](/appeal) for personalised appeal guidance.`,
    localInfo: [
      'Northern Lambeth (Waterloo, South Bank) is within the Congestion Charge Zone.',
      'Most of Lambeth (Brixton, Clapham, Streatham) is outside the zone.',
      'The zone boundary runs roughly along Kennington Lane and Kennington Road.',
      'TfL manages enforcement; the daily charge is £15.',
    ],
    commonIssues: [
      'Driving to Waterloo station without paying',
      'Hospital visits to St Thomas\' or Evelina London',
      'Crossing Waterloo Bridge or Westminster Bridge into the zone',
      'Auto Pay failures on TfL accounts',
    ],
    faqs: [
      {
        question: 'Is Brixton in the Congestion Charge Zone?',
        answer: 'No. Brixton, Clapham, Streatham, and most of Lambeth are outside the zone. Only the northern tip around Waterloo and the South Bank is within the charging area.',
      },
      {
        question: 'How much is a congestion charge fine in Lambeth?',
        answer: 'The PCN is £160, reduced to £80 within 14 days. The daily charge is £15.',
      },
      {
        question: 'Can I appeal if I was visiting a hospital?',
        answer: 'Hospital visits alone are not usually grounds for appeal. However, if there were other factors such as unclear signage, an emergency admission, or a system error, you may have valid grounds.',
      },
      {
        question: 'Do I appeal to Lambeth Council or TfL?',
        answer: 'Always appeal congestion charge fines to TfL, regardless of which borough you were in. Lambeth Council does not handle congestion charge enforcement.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge Fine Lambeth | Free',
    seoDescription: 'Got a congestion charge fine in Lambeth? Free PCN check. Northern Lambeth (Waterloo, South Bank) is in the zone. Check your grounds.',
  },
  {
    slug: 'ulez-fine-lambeth',
    borough: 'Lambeth',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Lambeth',
    description: 'Challenge a ULEZ PCN in Lambeth. Vehicle compliance, exemptions, and the appeal process.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Lambeth?

**Got a ULEZ fine in Lambeth? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

ULEZ covers all of Greater London, including every street in Lambeth. Driving a non-compliant vehicle anywhere in the borough without paying the £12.50 daily charge results in a £180 PCN. Lambeth, with major routes like the A23 and A24 running through it, sees a high volume of ULEZ fines.

## ULEZ Cameras in Lambeth

TfL has ANPR cameras on key routes through Lambeth, including Brixton Road (A23), Streatham High Road (A23), Clapham Road (A3), and routes approaching the South Bank. These cameras check every passing vehicle against DVLA records.

[Check your ULEZ fine for free](/appeal) to see if you have valid grounds.

## Common Issues

Drivers commuting from Surrey and south London via the A23 corridor through Streatham and Brixton are frequently caught. Vehicles that have been modified to meet standards but whose DVLA records are not updated generate unfair fines. TfL vehicle checker errors also occur.

## How to Appeal

Appeal to TfL within 28 days with your V5C, proof of compliance, or evidence the vehicle was sold. London Tribunals handles escalated appeals.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'ULEZ covers all of Lambeth as part of the London-wide zone.',
      'Cameras on A23 (Brixton Road/Streatham) and A3 (Clapham Road) monitor compliance.',
      'Commuters from Surrey via A23 are frequently caught in Lambeth.',
      'The ULEZ charge is £12.50/day; the PCN is £180 (£90 within 14 days).',
    ],
    commonIssues: [
      'A23 corridor from Surrey through Streatham and Brixton',
      'Incorrect TfL vehicle checker results',
      'Modified vehicles with outdated DVLA records',
      'Vehicles sold before the offence date',
    ],
    faqs: [
      {
        question: 'Is all of Lambeth in the ULEZ zone?',
        answer: 'Yes. ULEZ covers all of Greater London, so every road in Lambeth is within the zone.',
      },
      {
        question: 'How much is a ULEZ fine in Lambeth?',
        answer: 'The PCN is £180, reduced to £90 if paid within 14 days. The daily ULEZ charge is £12.50.',
      },
      {
        question: 'Can I appeal if my vehicle was recently modified?',
        answer: 'Yes. If your vehicle now meets Euro standards but the DVLA records are outdated, provide manufacturer documentation or a letter from your garage confirming the modification.',
      },
      {
        question: 'Who do I appeal to for a ULEZ fine?',
        answer: 'Appeal to TfL within 28 days. If rejected, London Tribunals provides a free independent review.',
      },
    ],
    seoTitle: 'Appeal a ULEZ Fine in Lambeth | Free Check',
    seoDescription: 'Got a ULEZ fine in Lambeth? Free PCN assessment. A23 corridor through Streatham and Brixton is a top camera spot. Check your grounds.',
  },

  // ============================================================
  // SOUTHWARK
  // ============================================================
  {
    slug: 'parking-fine-southwark',
    borough: 'Southwark',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Southwark',
    description: 'Challenge a Southwark parking PCN. Borough Market, Bermondsey, and Peckham hotspots.',
    councilName: 'London Borough of Southwark',
    content: `## Got a Parking Fine in Southwark?

**Got a parking fine in Southwark? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Southwark covers a large swathe of south London from London Bridge and Borough Market down to Dulwich and Camberwell. The council issues tens of thousands of PCNs annually, with enforcement concentrated around its busy commercial and cultural areas.

## Common Fine Locations in Southwark

London Bridge and Borough Market attract huge numbers of visitors. The surrounding streets, including Southwark Street, Borough High Street, and Tooley Street, have strict restrictions and heavy enforcement.

Bermondsey Street and the area around Tower Bridge Road catch visitors to restaurants, galleries, and the Bermondsey antiques market. Peckham, especially Peckham Rye and Rye Lane, has complex permit zones.

Camberwell, around Denmark Hill and Camberwell Green, catches visitors to King's College Hospital. The Elephant and Castle area has undergone major redevelopment, with signage changes that are not always well-communicated.

[Check your Southwark PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Strong grounds include unclear signage, incorrect PCN details, loading defences, and permit display errors. Challenge informally within 28 days to Southwark Council. London Tribunals provides the independent review.

[Start your free assessment](/appeal) for a personalised check.`,
    localInfo: [
      'Southwark issues approximately 120,000 PCNs annually.',
      'Borough Market and London Bridge are the biggest enforcement hotspots.',
      'The borough has extensive controlled parking zones across Bermondsey, Peckham, and Camberwell.',
      'All escalated appeals go through London Tribunals.',
    ],
    commonIssues: [
      'Borough Market and London Bridge area restrictions',
      'Bermondsey Street visitor parking confusion',
      'Peckham Rye and Rye Lane permit zones',
      'King\'s College Hospital area overstays (Denmark Hill)',
      'Elephant and Castle redevelopment signage changes',
      'Tooley Street and Tower Bridge Road restrictions',
    ],
    faqs: [
      {
        question: 'How do I appeal a Southwark parking fine?',
        answer: 'Submit an informal challenge to Southwark Council within 28 days. If rejected, submit a formal representation within 28 days of the Notice to Owner. London Tribunals is the final step.',
      },
      {
        question: 'How much is a parking fine in Southwark?',
        answer: 'Southwark fines are typically £80 to £130, with a 50% discount if paid within 14 days.',
      },
      {
        question: 'Can I park near Borough Market?',
        answer: 'On-street parking near Borough Market is extremely limited. Most bays are permit-only or have short meter stays. Consider using the Snowsfields car park or public transport.',
      },
      {
        question: 'What if I was visiting King\'s College Hospital?',
        answer: 'Hospital visits do not exempt you from parking rules. However, if the signage was unclear or a meter was faulty, you have valid appeal grounds.',
      },
    ],
    seoTitle: 'Appeal a Parking Fine in Southwark | Free',
    seoDescription: 'Got a parking fine in Southwark? Free PCN check. Borough Market, Bermondsey, and Peckham are top hotspots. Check your appeal grounds.',
  },
  {
    slug: 'bus-lane-fine-southwark',
    borough: 'Southwark',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Southwark',
    description: 'Challenge a Southwark bus lane PCN. Camera locations and appeal tips.',
    councilName: 'London Borough of Southwark',
    content: `## Got a Bus Lane Fine in Southwark?

**Got a bus lane fine in Southwark? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Southwark has several camera-enforced bus lanes on its major routes. Walworth Road, Camberwell New Road, and routes around Elephant and Castle are frequent fine locations. Many of these fines have valid grounds for appeal.

## Key Bus Lane Locations

Walworth Road and Camberwell Road carry heavy bus traffic through the borough, and the bus lanes operate during peak hours. The Elephant and Castle junction has undergone extensive redevelopment, and temporary traffic arrangements have created enforcement confusion.

Old Kent Road (A2) is another major route with bus lane cameras, catching drivers heading to and from the Dartford Crossing and Kent.

[Check your bus lane fine for free](/appeal) to find out if you can challenge it.

## How to Appeal

Challenge within 28 days to Southwark Council or TfL depending on the issuer. Signage non-compliance, worn markings, left turns, and emergencies are all valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Walworth Road and Camberwell Road are top bus lane enforcement areas.',
      'Elephant and Castle redevelopment has created temporary enforcement confusion.',
      'Bus lane fines are £130, reduced to £65 within 14 days.',
      'TfL enforces red route bus lanes; Southwark handles borough roads.',
    ],
    commonIssues: [
      'Walworth Road peak-hour bus lane cameras',
      'Elephant and Castle junction temporary arrangements',
      'Old Kent Road (A2) bus lane enforcement',
      'Camberwell New Road restricted sections',
    ],
    faqs: [
      {
        question: 'How much is a bus lane fine in Southwark?',
        answer: 'Bus lane fines in Southwark are £130, reduced to £65 if paid within 14 days.',
      },
      {
        question: 'Can I appeal a Southwark bus lane fine online?',
        answer: 'Yes. Both Southwark Council and TfL accept online challenges. Check your PCN header to see who issued it.',
      },
      {
        question: 'Do bus lane fines affect my licence?',
        answer: 'No. Bus lane fines are civil penalties with no points and no criminal record.',
      },
      {
        question: 'What if the road markings were worn?',
        answer: 'Worn or missing bus lane markings are a valid ground for appeal. Photograph the road surface as evidence.',
      },
    ],
    seoTitle: 'Appeal a Bus Lane Fine in Southwark | Free',
    seoDescription: 'Got a bus lane fine in Southwark? Free PCN check. Walworth Road and Elephant and Castle are top spots. Check your appeal grounds.',
  },
  {
    slug: 'congestion-charge-fine-southwark',
    borough: 'Southwark',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Southwark',
    description: 'Challenge a congestion charge PCN in Southwark. Zone boundaries near London Bridge and Borough.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Southwark?

**Got a congestion charge fine in Southwark? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Northern Southwark, including London Bridge, Borough, and the area around the Tate Modern, falls within the Congestion Charge Zone. Drivers crossing Tower Bridge, London Bridge, or Blackfriars Bridge into this area during charging hours must pay the £15 daily charge.

## Zone Boundaries in Southwark

The boundary runs roughly along New Kent Road and through the Elephant and Castle area. Everything north of this line towards the Thames is within the zone. Most of Southwark (Peckham, Camberwell, Dulwich, Bermondsey south) is outside.

[Check your fine for free](/appeal) to see if you have valid grounds.

## How to Appeal

Appeal to TfL within 28 days. Common grounds include Auto Pay failures, unclear boundary signage, and system errors. London Tribunals handles rejected appeals.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Northern Southwark (London Bridge, Borough) is within the Congestion Charge Zone.',
      'Most of Southwark (Peckham, Camberwell, Dulwich) is outside the zone.',
      'The boundary runs roughly along New Kent Road and Elephant and Castle.',
      'TfL manages enforcement; the daily charge is £15.',
    ],
    commonIssues: [
      'Crossing Tower Bridge or London Bridge into the zone',
      'Visiting Borough Market or Tate Modern without paying',
      'Elephant and Castle boundary confusion',
      'Auto Pay failures on TfL accounts',
    ],
    faqs: [
      {
        question: 'Is Peckham in the Congestion Charge Zone?',
        answer: 'No. Peckham, Camberwell, Dulwich, and most of Southwark are outside the zone.',
      },
      {
        question: 'How much is a congestion charge fine?',
        answer: 'The PCN is £160, reduced to £80 within 14 days.',
      },
      {
        question: 'Do I pay TfL or Southwark Council?',
        answer: 'Always pay or appeal to TfL for congestion charge fines.',
      },
      {
        question: 'Can I appeal if my Auto Pay did not work?',
        answer: 'Yes. Auto Pay failures are a valid ground. Provide evidence of your registration and any error notifications.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge Fine Southwark | Free',
    seoDescription: 'Got a congestion charge fine in Southwark? Free PCN check. London Bridge and Borough are in the zone. Check your appeal grounds.',
  },
  {
    slug: 'ulez-fine-southwark',
    borough: 'Southwark',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Southwark',
    description: 'Challenge a ULEZ PCN in Southwark. Vehicle compliance, exemptions, and the appeal process.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Southwark?

**Got a ULEZ fine in Southwark? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

ULEZ covers all of Greater London, including every road in Southwark. Driving a non-compliant vehicle in the borough without paying £12.50 results in a £180 PCN. Major routes like Old Kent Road (A2) and Walworth Road see many ULEZ fines.

## Common Issues and How to Appeal

Drivers using the A2 corridor from Kent through Southwark are frequently caught. TfL vehicle checker errors, modified vehicles with outdated DVLA records, and vehicles sold before the offence are common appeal grounds.

Appeal to TfL within 28 days with supporting evidence. London Tribunals handles escalated cases.

[Check your ULEZ fine for free](/appeal) and get a personalised assessment.`,
    localInfo: [
      'ULEZ covers all of Southwark as part of the London-wide zone.',
      'Old Kent Road (A2) is a major ULEZ camera corridor.',
      'The charge is £12.50/day; the PCN is £180 (£90 within 14 days).',
      'TfL handles all ULEZ enforcement and initial appeals.',
    ],
    commonIssues: [
      'A2 corridor from Kent through Old Kent Road',
      'TfL vehicle checker errors',
      'Modified vehicles with outdated records',
      'Fines after vehicle sold',
    ],
    faqs: [
      {
        question: 'Is all of Southwark in ULEZ?',
        answer: 'Yes. Every road in Southwark falls within the London-wide ULEZ zone.',
      },
      {
        question: 'How much is a ULEZ fine?',
        answer: 'The PCN is £180, reduced to £90 within 14 days.',
      },
      {
        question: 'Can I appeal if my car is compliant but I was fined?',
        answer: 'Yes. Provide your V5C showing the correct Euro standard. This is one of the most common successful appeal grounds.',
      },
      {
        question: 'Who handles ULEZ appeals?',
        answer: 'TfL handles the initial appeal. London Tribunals is the independent escalation body.',
      },
    ],
    seoTitle: 'Appeal a ULEZ Fine in Southwark | Free Check',
    seoDescription: 'Got a ULEZ fine in Southwark? Free PCN assessment. Old Kent Road (A2) is a major camera spot. Check your compliance and appeal.',
  },

  // ============================================================
  // TOWER HAMLETS
  // ============================================================
  {
    slug: 'parking-fine-tower-hamlets',
    borough: 'Tower Hamlets',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Tower Hamlets',
    description: 'Challenge a Tower Hamlets parking PCN. Canary Wharf, Brick Lane, and Whitechapel hotspots.',
    councilName: 'London Borough of Tower Hamlets',
    content: `## Got a Parking Fine in Tower Hamlets?

**Got a parking fine in Tower Hamlets? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Tower Hamlets covers east London from Whitechapel and Spitalfields through to Canary Wharf and the Isle of Dogs. The borough issues a large number of PCNs, particularly around Canary Wharf, Brick Lane, and the busy commercial areas of Bethnal Green and Mile End.

## Common Fine Locations

Canary Wharf and the surrounding Docklands area have extensive parking restrictions. The estate is privately managed with its own parking regulations, and the surrounding borough roads have strict CPZs.

Brick Lane and Spitalfields attract weekend visitors who park in residents-only zones. Whitechapel, especially around the Royal London Hospital, catches visitors who overstay on meters or park in restricted bays.

Bethnal Green, Mile End, and Bow have residential permit zones that change frequently. The signage in these areas is not always clear, particularly on older streets.

[Check your Tower Hamlets PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Strong grounds include confusing signage in multi-lingual areas, incorrect PCN details, permit display errors, and loading defences. Many streets in Tower Hamlets have complex restrictions due to the mix of residential, commercial, and market uses.

Challenge informally within 28 days to Tower Hamlets Council. London Tribunals handles escalated appeals.

[Start your free assessment](/appeal) for personalised advice.`,
    localInfo: [
      'Tower Hamlets issues over 100,000 PCNs per year.',
      'Canary Wharf estate has its own private parking enforcement separate from the council.',
      'Brick Lane and Spitalfields are weekend enforcement hotspots.',
      'The borough has extensive CPZs across Whitechapel, Bethnal Green, and Mile End.',
    ],
    commonIssues: [
      'Canary Wharf estate private parking rules',
      'Brick Lane and Spitalfields weekend visitor parking',
      'Royal London Hospital area overstays (Whitechapel)',
      'Bethnal Green and Mile End permit zone confusion',
      'Bow and Poplar CPZ boundary issues',
      'Columbia Road flower market Sunday restrictions',
    ],
    faqs: [
      {
        question: 'How do I appeal a Tower Hamlets parking fine?',
        answer: 'Submit an informal challenge to Tower Hamlets Council within 28 days. If rejected, you have 28 days for a formal representation after the Notice to Owner. London Tribunals provides the final review.',
      },
      {
        question: 'Is Canary Wharf parking enforced by the council?',
        answer: 'The Canary Wharf estate itself is privately managed, but surrounding borough roads are enforced by Tower Hamlets Council. Check your PCN to see who issued it.',
      },
      {
        question: 'How much is a parking fine in Tower Hamlets?',
        answer: 'Fines are £80 to £130 depending on the contravention, with a 50% discount if paid within 14 days.',
      },
      {
        question: 'Can I park near Brick Lane on weekends?',
        answer: 'Very limited. Most streets are residents-only zones that operate on Sundays. The council car parks on Buxton Street and Vallance Road offer paid alternatives.',
      },
    ],
    seoTitle: 'Appeal a Parking Fine in Tower Hamlets | Free',
    seoDescription: 'Got a parking fine in Tower Hamlets? Free PCN check. Canary Wharf, Brick Lane, and Whitechapel are top hotspots. Check appeal grounds.',
  },
  {
    slug: 'bus-lane-fine-tower-hamlets',
    borough: 'Tower Hamlets',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Tower Hamlets',
    description: 'Challenge a Tower Hamlets bus lane PCN. Camera locations and appeal guidance.',
    councilName: 'London Borough of Tower Hamlets',
    content: `## Got a Bus Lane Fine in Tower Hamlets?

**Got a bus lane fine in Tower Hamlets? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Tower Hamlets has camera-enforced bus lanes on several major routes, including Mile End Road, Commercial Road, and Whitechapel Road. These are busy east London corridors carrying heavy bus and car traffic, and thousands of drivers are caught each year.

## Key Bus Lane Locations

Mile End Road (A11) and Whitechapel Road are the most heavily enforced bus lane corridors in Tower Hamlets. Commercial Road (A13) heading towards the Docklands also has camera-enforced lanes. The A12 approach roads have restricted sections that catch drivers heading to the Blackwall Tunnel.

[Check your bus lane fine for free](/appeal) to see if you have grounds to appeal.

## How to Appeal

Signage non-compliance, worn road markings, left turns, and emergencies are all valid grounds. Challenge within 28 days to Tower Hamlets Council or TfL depending on the issuer.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Mile End Road (A11) and Whitechapel Road are top bus lane enforcement areas.',
      'Commercial Road (A13) has cameras heading towards the Docklands.',
      'Bus lane fines are £130, reduced to £65 within 14 days.',
      'TfL enforces red route sections; Tower Hamlets handles borough roads.',
    ],
    commonIssues: [
      'Mile End Road (A11) peak-hour bus lanes',
      'Whitechapel Road camera enforcement',
      'Commercial Road (A13) Docklands approach',
      'A12 approach roads restricted sections',
    ],
    faqs: [
      {
        question: 'How much is a bus lane fine in Tower Hamlets?',
        answer: 'Bus lane fines are £130, reduced to £65 if paid within 14 days.',
      },
      {
        question: 'Can I appeal if I was avoiding an obstruction?',
        answer: 'Yes. Entering a bus lane to avoid an obstruction or hazard is a valid defence. Provide dashcam footage or a detailed explanation.',
      },
      {
        question: 'Who issues bus lane fines on Mile End Road?',
        answer: 'Check your PCN header. TfL manages the red route sections, while Tower Hamlets Council handles borough-managed stretches.',
      },
      {
        question: 'Do bus lane fines affect my insurance?',
        answer: 'No. Bus lane fines are civil penalties with no points, no criminal record, and no insurance impact.',
      },
    ],
    seoTitle: 'Appeal a Bus Lane Fine Tower Hamlets | Free',
    seoDescription: 'Got a bus lane fine in Tower Hamlets? Free PCN check. Mile End Road and Whitechapel are top camera spots. Check your appeal grounds.',
  },
  {
    slug: 'congestion-charge-fine-tower-hamlets',
    borough: 'Tower Hamlets',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Tower Hamlets',
    description: 'Challenge a congestion charge PCN in Tower Hamlets. Zone boundaries and appeal tips.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Tower Hamlets?

**Got a congestion charge fine in Tower Hamlets? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The western edge of Tower Hamlets, including Whitechapel, Spitalfields, and parts of Aldgate, falls within the Congestion Charge Zone. Drivers entering this area from Commercial Street, Whitechapel High Street, or Tower Bridge during charging hours must pay the £15 daily charge.

## Zone Boundaries

The Congestion Charge boundary in Tower Hamlets runs roughly along Commercial Street and Whitechapel High Street. Most of the borough (Bethnal Green, Mile End, Bow, Canary Wharf, Isle of Dogs) is outside the zone.

[Check your fine for free](/appeal) to see if you have valid grounds.

## How to Appeal

Appeal to TfL within 28 days. Auto Pay failures, boundary confusion, and system errors are common grounds. London Tribunals handles rejected appeals.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Western Tower Hamlets (Whitechapel, Spitalfields, Aldgate) is in the Congestion Charge Zone.',
      'Most of the borough (Canary Wharf, Mile End, Bow) is outside the zone.',
      'The boundary runs along Commercial Street and Whitechapel High Street.',
      'TfL manages enforcement.',
    ],
    commonIssues: [
      'Entering from Commercial Street towards the City',
      'Whitechapel High Street boundary confusion',
      'Tower Bridge approach into the zone',
      'Auto Pay and account registration errors',
    ],
    faqs: [
      {
        question: 'Is Canary Wharf in the Congestion Charge Zone?',
        answer: 'No. Canary Wharf, Isle of Dogs, Mile End, Bow, and most of Tower Hamlets are outside the zone.',
      },
      {
        question: 'How much is a congestion charge fine?',
        answer: 'The PCN is £160, reduced to £80 within 14 days.',
      },
      {
        question: 'Who handles the appeal?',
        answer: 'TfL handles congestion charge appeals. If rejected, escalate to London Tribunals.',
      },
      {
        question: 'Can I appeal if I did not see the boundary signs?',
        answer: 'If boundary signage was genuinely unclear, obscured, or missing, this is a valid ground. Photograph the location as evidence.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge Tower Hamlets | Free',
    seoDescription: 'Got a congestion charge fine in Tower Hamlets? Free PCN check. Only western Tower Hamlets is in the zone. Check your appeal grounds.',
  },
  {
    slug: 'ulez-fine-tower-hamlets',
    borough: 'Tower Hamlets',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Tower Hamlets',
    description: 'Challenge a ULEZ PCN in Tower Hamlets. Vehicle compliance and appeal process.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Tower Hamlets?

**Got a ULEZ fine in Tower Hamlets? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

ULEZ covers all of Greater London, including every road in Tower Hamlets. Driving a non-compliant vehicle on any route in the borough, from the Docklands to Whitechapel, triggers the £12.50 daily charge. Failure to pay results in a £180 PCN.

## Common Issues

Drivers using the A13 corridor from Essex through Tower Hamlets are frequently caught. The Blackwall Tunnel approach via the A12 also generates many ULEZ fines. TfL vehicle checker errors and vehicles sold before the offence date are common appeal grounds.

[Check your ULEZ fine for free](/appeal) for a personalised assessment.

## How to Appeal

Appeal to TfL within 28 days. Provide V5C documentation, proof of compliance, or evidence the vehicle was sold. London Tribunals handles escalated cases.`,
    localInfo: [
      'ULEZ covers all of Tower Hamlets as part of the London-wide zone.',
      'A13 (Commercial Road) and A12 (Blackwall Tunnel approach) are major camera corridors.',
      'The charge is £12.50/day; the PCN is £180 (£90 within 14 days).',
      'TfL handles all ULEZ enforcement.',
    ],
    commonIssues: [
      'A13 corridor from Essex through the Docklands',
      'A12 Blackwall Tunnel approach',
      'TfL vehicle checker errors',
      'Vehicles sold before offence date',
    ],
    faqs: [
      {
        question: 'Is Canary Wharf in the ULEZ zone?',
        answer: 'Yes. ULEZ covers all of Greater London, so Canary Wharf and every other part of Tower Hamlets is within the zone.',
      },
      {
        question: 'How much is a ULEZ fine?',
        answer: 'The PCN is £180, reduced to £90 within 14 days.',
      },
      {
        question: 'Can I appeal a ULEZ fine?',
        answer: 'Yes. Appeal to TfL within 28 days. Common grounds include vehicle compliance errors, checker mistakes, and vehicles sold before the offence.',
      },
      {
        question: 'Is the Blackwall Tunnel in the ULEZ zone?',
        answer: 'Yes. Both approaches and the tunnel itself are within the ULEZ zone.',
      },
    ],
    seoTitle: 'Appeal a ULEZ Fine Tower Hamlets | Free Check',
    seoDescription: 'Got a ULEZ fine in Tower Hamlets? Free PCN assessment. A13 and A12 are major camera corridors. Check compliance and appeal.',
  },

  // ============================================================
  // HACKNEY
  // ============================================================
  {
    slug: 'parking-fine-hackney',
    borough: 'Hackney',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Hackney',
    description: 'Challenge a Hackney parking PCN. Dalston, Shoreditch, and Stoke Newington hotspots.',
    councilName: 'London Borough of Hackney',
    content: `## Got a Parking Fine in Hackney?

**Got a parking fine in Hackney? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Hackney covers vibrant east London from Shoreditch and Hoxton up to Stoke Newington and Stamford Hill. The borough is one of the most aggressively enforced in London for parking, with extensive CCTV coverage and strict CPZs across nearly every residential street.

## Common Fine Locations

Shoreditch and Hoxton are the biggest hotspots. The nightlife and restaurant scene draws thousands of visitors, but nearly every street is a residents-only zone, often operating 24/7. Broadway Market, London Fields, and Mare Street are heavily patrolled.

Dalston, particularly Kingsland Road and Dalston Lane, has complex restrictions with multiple CPZ boundaries in close proximity. Stoke Newington, especially Church Street and the High Street, catches visitors who park in permit zones.

Hackney Marshes and Hackney Wick attract weekend visitors to sports facilities and the creative quarter, but parking is extremely limited.

[Check your Hackney PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Hackney's extensive CCTV network means many PCNs are camera-issued. Challenge informally within 28 days. Signage issues, permit display errors, and loading defences are common winning grounds.

[Start your free assessment](/appeal) for a personalised check.`,
    localInfo: [
      'Hackney has some of the most extensive CPZ coverage in London.',
      'Many Hackney CPZs operate 24/7, unlike most boroughs.',
      'Shoreditch and Hoxton are the highest enforcement areas.',
      'The borough uses extensive CCTV for parking enforcement.',
    ],
    commonIssues: [
      'Shoreditch and Hoxton 24/7 residents-only zones',
      'Broadway Market and London Fields area enforcement',
      'Dalston and Kingsland Road CPZ boundary confusion',
      'Stoke Newington Church Street permit zones',
      'Hackney Wick and Hackney Marshes limited parking',
      'Mare Street meter overstays',
    ],
    faqs: [
      {
        question: 'How do I appeal a Hackney parking fine?',
        answer: 'Challenge informally to Hackney Council within 28 days. If rejected, formal representation within 28 days of the Notice to Owner. London Tribunals is the final step.',
      },
      {
        question: 'Why are Hackney parking fines so common?',
        answer: 'Hackney has one of the most extensive CPZ networks in London, with many zones operating 24/7. Combined with heavy CCTV enforcement, the borough issues a very high number of PCNs.',
      },
      {
        question: 'Can I park for free anywhere in Hackney?',
        answer: 'Very few unrestricted streets remain. Some roads on the borough boundaries have limited free parking, but always check signs carefully.',
      },
      {
        question: 'How much is a Hackney parking fine?',
        answer: 'Typically £80 to £130, with a 50% discount for early payment within 14 days.',
      },
    ],
    seoTitle: 'Appeal a Parking Fine in Hackney | Free Check',
    seoDescription: 'Got a parking fine in Hackney? Free PCN assessment. Shoreditch, Dalston, and Stoke Newington are top hotspots. Check your appeal grounds.',
  },
  {
    slug: 'bus-lane-fine-hackney',
    borough: 'Hackney',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Hackney',
    description: 'Challenge a Hackney bus lane PCN. Camera locations and appeal tips.',
    councilName: 'London Borough of Hackney',
    content: `## Got a Bus Lane Fine in Hackney?

**Got a bus lane fine in Hackney? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Hackney has camera-enforced bus lanes on several major routes, including Mare Street, Kingsland Road, and the A10 corridor. These busy north-south routes see heavy traffic and frequent enforcement.

## Key Bus Lane Locations

Mare Street is the most common location for bus lane fines in Hackney. The lane operates during peak hours and catches drivers heading through the town centre. Kingsland Road (A10) is another major enforcement area, running through Dalston towards the City.

Stamford Hill and Clapton have bus lanes on local routes that are not always well-signed.

[Check your bus lane fine for free](/appeal) to see your appeal grounds.

## How to Appeal

Challenge within 28 days. Signage issues, worn markings, and left turns are strong grounds. London Tribunals handles escalated cases.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Mare Street is Hackney\'s busiest bus lane enforcement area.',
      'Kingsland Road (A10) has cameras from Dalston through Stoke Newington.',
      'Bus lane fines are £130, reduced to £65 within 14 days.',
      'All escalated appeals go through London Tribunals.',
    ],
    commonIssues: [
      'Mare Street peak-hour bus lane cameras',
      'Kingsland Road (A10) enforcement',
      'Stamford Hill bus lane signage issues',
      'Clapton local route restrictions',
    ],
    faqs: [
      {
        question: 'How much is a bus lane fine in Hackney?',
        answer: 'Bus lane fines are £130, reduced to £65 within 14 days.',
      },
      {
        question: 'Can I appeal if signage was unclear?',
        answer: 'Yes. Non-compliant signage is one of the strongest grounds. Photograph the signs as evidence.',
      },
      {
        question: 'Who issues bus lane fines on Kingsland Road?',
        answer: 'Check your PCN header. Some sections are TfL red routes, others are Hackney Council-managed.',
      },
      {
        question: 'Are bus lane fines criminal offences?',
        answer: 'No. They are civil penalties with no points and no criminal record.',
      },
    ],
    seoTitle: 'Appeal a Bus Lane Fine in Hackney | Free',
    seoDescription: 'Got a bus lane fine in Hackney? Free PCN check. Mare Street and Kingsland Road are top camera spots. Check your appeal grounds.',
  },
  {
    slug: 'congestion-charge-fine-hackney',
    borough: 'Hackney',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Hackney',
    description: 'Challenge a congestion charge PCN in Hackney. Zone boundaries and appeal process.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Hackney?

**Got a congestion charge fine in Hackney? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The southern tip of Hackney, including parts of Shoreditch and Hoxton, brushes against the Congestion Charge Zone. The boundary runs close to Old Street and Great Eastern Street. Drivers heading from Hackney into the City via these routes may unknowingly enter the zone.

## Zone Boundaries

Most of Hackney (Dalston, Stoke Newington, Clapton, Hackney Central) is well outside the zone. The confusion arises for drivers heading south from Hoxton or Shoreditch into the City of London, where the boundary is not always clearly signed.

[Check your fine for free](/appeal) to see if you have valid grounds.

## How to Appeal

Appeal to TfL within 28 days. Boundary confusion, Auto Pay failures, and system errors are common grounds. London Tribunals handles rejected appeals.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Southern Hackney (Shoreditch/Hoxton) borders the Congestion Charge Zone.',
      'Most of Hackney is outside the zone.',
      'The boundary runs near Old Street and Great Eastern Street.',
      'TfL manages all congestion charge enforcement.',
    ],
    commonIssues: [
      'Driving from Shoreditch south into the City',
      'Old Street and Great Eastern Street boundary confusion',
      'Auto Pay failures',
      'Unclear zone boundary signage',
    ],
    faqs: [
      {
        question: 'Is Hackney in the Congestion Charge Zone?',
        answer: 'Mostly no. Only the very southern tip near Shoreditch and Hoxton borders the zone. Dalston, Stoke Newington, and Hackney Central are all outside.',
      },
      {
        question: 'How much is a congestion charge fine?',
        answer: 'The PCN is £160, reduced to £80 within 14 days.',
      },
      {
        question: 'Can I appeal if I was confused by the boundary?',
        answer: 'If boundary signage was inadequate or unclear, this is a valid appeal ground. Photograph the location.',
      },
      {
        question: 'Do I appeal to Hackney Council?',
        answer: 'No. Always appeal congestion charge fines to TfL.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge Fine Hackney | Free',
    seoDescription: 'Got a congestion charge fine in Hackney? Free PCN check. Southern Shoreditch borders the zone. Check your appeal grounds.',
  },
  {
    slug: 'ulez-fine-hackney',
    borough: 'Hackney',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Hackney',
    description: 'Challenge a ULEZ PCN in Hackney. Vehicle compliance and appeal tips.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Hackney?

**Got a ULEZ fine in Hackney? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

ULEZ covers all of Greater London, so every road in Hackney falls within the zone. The A10 corridor through Stoke Newington and Dalston, plus the A107 through Hackney Central, are major routes monitored by ANPR cameras.

## Common Issues

Vehicles entering from the north via the A10 (Tottenham/Enfield) are frequently caught passing through Hackney. TfL vehicle checker errors, sold vehicles, and vehicles with updated engines that DVLA records do not reflect are common appeal grounds.

[Check your ULEZ fine for free](/appeal) for a personalised assessment.

## How to Appeal

Appeal to TfL within 28 days with supporting documents. London Tribunals handles escalated cases.`,
    localInfo: [
      'ULEZ covers all of Hackney.',
      'A10 corridor from Tottenham through Hackney is a major camera route.',
      'The charge is £12.50/day; the PCN is £180 (£90 within 14 days).',
      'TfL manages all ULEZ enforcement.',
    ],
    commonIssues: [
      'A10 corridor from north London through Hackney',
      'TfL vehicle checker inaccuracies',
      'Sold vehicles with incorrect DVLA records',
      'Modified engines not reflected in registration',
    ],
    faqs: [
      {
        question: 'Is all of Hackney in ULEZ?',
        answer: 'Yes. Every road in Hackney is within the London-wide ULEZ zone.',
      },
      {
        question: 'How much is a ULEZ fine in Hackney?',
        answer: 'The PCN is £180, reduced to £90 within 14 days.',
      },
      {
        question: 'Can I check my vehicle compliance?',
        answer: 'Yes. Use TfL\'s vehicle checker online. If the result appears incorrect, this can be grounds for appeal.',
      },
      {
        question: 'Who do I appeal to?',
        answer: 'TfL handles the initial appeal. If rejected, London Tribunals provides an independent review.',
      },
    ],
    seoTitle: 'Appeal a ULEZ Fine in Hackney | Free Assessment',
    seoDescription: 'Got a ULEZ fine in Hackney? Free PCN check. A10 corridor is a major camera route. Check compliance and appeal grounds.',
  },

  // ============================================================
  // ISLINGTON
  // ============================================================
  {
    slug: 'parking-fine-islington',
    borough: 'Islington',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Islington',
    description: 'Challenge an Islington parking PCN. Angel, Highbury, and Holloway hotspots.',
    councilName: 'London Borough of Islington',
    content: `## Got a Parking Fine in Islington?

**Got a parking fine in Islington? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Islington is one of London's most densely populated boroughs and one of the strictest for parking enforcement. From the busy shops and restaurants of Angel and Upper Street to the residential streets of Highbury, Canonbury, and Holloway, the council enforces parking rules vigorously.

## Common Fine Locations

Upper Street and the Angel area is the biggest hotspot. The street is lined with restaurants, bars, and shops, and nearly every surrounding road is a residents-only zone. Essex Road and Canonbury have complex CPZ hours.

Holloway Road and the area around the Emirates Stadium (Arsenal) see spikes in enforcement on match days. Highbury Corner and Highbury Fields attract fines for visitors who park in permit zones.

King's Cross borders Islington and Camden, with enforcement from both councils in adjacent streets.

[Check your Islington PCN for free](/appeal) before paying anything.

## Appeal Process

Challenge within 28 days to Islington Council. Common grounds include signage obscured by trees (Islington has many tree-lined streets), incorrect PCN details, and permit display errors. London Tribunals handles escalated cases.

[Start your free assessment](/appeal) for personalised advice.`,
    localInfo: [
      'Islington has near-complete CPZ coverage across the borough.',
      'Upper Street/Angel is the highest enforcement area.',
      'Arsenal match days trigger increased enforcement around the Emirates Stadium.',
      'The borough is one of the smallest in London but among the most densely parked.',
    ],
    commonIssues: [
      'Angel and Upper Street residents-only zones',
      'Essex Road and Canonbury CPZ hour confusion',
      'Holloway Road Arsenal match day enforcement',
      'Highbury Fields visitor parking restrictions',
      'King\'s Cross border zone with Camden',
      'Tree-obscured signage on residential streets',
    ],
    faqs: [
      {
        question: 'How do I appeal an Islington parking fine?',
        answer: 'Challenge informally to Islington Council within 28 days. If rejected, formal representation within 28 days of the Notice to Owner. London Tribunals is the final step.',
      },
      {
        question: 'Can I park on Upper Street?',
        answer: 'Very limited metered bays exist on Upper Street itself. Side streets are almost entirely residents-only. Consider the car park on Torrens Street or public transport.',
      },
      {
        question: 'How much is a parking fine in Islington?',
        answer: 'Fines are £80 to £130 with a 50% discount for early payment within 14 days.',
      },
      {
        question: 'Are there match day parking restrictions near the Emirates?',
        answer: 'Yes. On Arsenal match days, additional restrictions apply within a wide area around the Emirates Stadium. Temporary signs are posted, but they are easy to miss.',
      },
    ],
    seoTitle: 'Appeal a Parking Fine in Islington | Free Check',
    seoDescription: 'Got a parking fine in Islington? Free PCN assessment. Angel, Upper Street, and Holloway are top hotspots. Check your appeal grounds.',
  },
  {
    slug: 'bus-lane-fine-islington',
    borough: 'Islington',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Islington',
    description: 'Challenge an Islington bus lane PCN. Camera locations and appeal guidance.',
    councilName: 'London Borough of Islington',
    content: `## Got a Bus Lane Fine in Islington?

**Got a bus lane fine in Islington? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Islington has camera-enforced bus lanes on Holloway Road, Upper Street, Essex Road, and other key routes. The borough's compact geography and heavy bus traffic mean enforcement is frequent and fines are common.

## Key Locations

Holloway Road (A1) is the main bus lane enforcement corridor, running from Highbury Corner up towards Archway. Upper Street also has restricted sections. Essex Road, connecting Angel to Dalston, features bus lanes that catch commuters daily.

[Check your bus lane fine for free](/appeal) to see your options.

## How to Appeal

Challenge within 28 days to Islington Council or TfL. Signage issues, worn markings, left turns, and emergencies are strong grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Holloway Road (A1) is Islington\'s busiest bus lane enforcement corridor.',
      'Upper Street and Essex Road also have restricted sections.',
      'Bus lane fines are £130, reduced to £65 within 14 days.',
      'London Tribunals handles escalated appeals.',
    ],
    commonIssues: [
      'Holloway Road (A1) peak-hour cameras',
      'Upper Street restricted sections',
      'Essex Road bus lane enforcement',
      'Archway junction bus lane confusion',
    ],
    faqs: [
      {
        question: 'How much is a bus lane fine in Islington?',
        answer: 'Bus lane fines are £130, reduced to £65 within 14 days.',
      },
      {
        question: 'Can I appeal if I was making a left turn?',
        answer: 'Yes. Entering a bus lane briefly to turn left is generally permitted.',
      },
      {
        question: 'Who enforces bus lanes on Holloway Road?',
        answer: 'Check your PCN. Some sections are TfL red routes, others are Islington-managed.',
      },
      {
        question: 'Are bus lane fines criminal?',
        answer: 'No. They are civil penalties with no licence points.',
      },
    ],
    seoTitle: 'Appeal a Bus Lane Fine in Islington | Free',
    seoDescription: 'Got a bus lane fine in Islington? Free PCN check. Holloway Road and Upper Street are top camera spots. Check your appeal grounds.',
  },
  {
    slug: 'congestion-charge-fine-islington',
    borough: 'Islington',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Islington',
    description: 'Challenge a congestion charge PCN in Islington. Zone boundaries near Angel.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Islington?

**Got a congestion charge fine in Islington? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The southern edge of Islington, around the Angel, Pentonville Road, and City Road, borders the Congestion Charge Zone. Drivers heading south from Angel towards the City can cross into the zone without clear awareness.

## Zone Boundaries

Most of Islington (Highbury, Holloway, Finsbury Park) is outside the zone. The boundary runs along City Road and Pentonville Road, meaning only the very southern tip is affected.

[Check your fine for free](/appeal) to see if you have grounds.

## How to Appeal

Appeal to TfL within 28 days. Boundary signage issues and Auto Pay failures are common grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Southern Islington near Angel borders the Congestion Charge Zone.',
      'Most of Islington is outside the zone.',
      'The boundary runs along City Road and Pentonville Road.',
      'TfL manages enforcement.',
    ],
    commonIssues: [
      'Driving from Angel south into the City',
      'Pentonville Road and City Road boundary',
      'Auto Pay failures',
      'Unclear boundary signage at Angel',
    ],
    faqs: [
      {
        question: 'Is Angel in the Congestion Charge Zone?',
        answer: 'Angel is right on the boundary. Streets south of Pentonville Road and City Road are within the zone; streets to the north are outside.',
      },
      {
        question: 'How much is a congestion charge fine?',
        answer: 'The PCN is £160, reduced to £80 within 14 days.',
      },
      {
        question: 'Do I appeal to Islington or TfL?',
        answer: 'Always appeal congestion charge fines to TfL.',
      },
      {
        question: 'Is Highbury in the zone?',
        answer: 'No. Highbury, Holloway, and most of Islington are well outside the Congestion Charge Zone.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge Fine Islington | Free',
    seoDescription: 'Got a congestion charge fine in Islington? Free PCN check. The zone boundary runs through Angel. Check your appeal grounds.',
  },
  {
    slug: 'ulez-fine-islington',
    borough: 'Islington',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Islington',
    description: 'Challenge a ULEZ PCN in Islington. Vehicle compliance and appeal process.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Islington?

**Got a ULEZ fine in Islington? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

ULEZ covers all of Greater London, including every road in Islington. The A1 (Holloway Road) and Essex Road are major routes monitored by ANPR cameras. Non-compliant vehicles face a £12.50 daily charge, with a £180 PCN for non-payment.

## Common Issues

Vehicles from north London and Hertfordshire entering via the A1 are frequently caught in Islington. TfL vehicle checker errors and sold vehicles are common grounds.

[Check your ULEZ fine for free](/appeal) for a personalised assessment.

## How to Appeal

Appeal to TfL within 28 days with supporting evidence. London Tribunals handles escalated cases.`,
    localInfo: [
      'ULEZ covers all of Islington.',
      'A1 (Holloway Road) is a major camera route.',
      'The charge is £12.50/day; the PCN is £180 (£90 within 14 days).',
      'TfL manages all ULEZ enforcement.',
    ],
    commonIssues: [
      'A1 corridor from north London through Islington',
      'TfL vehicle checker errors',
      'Vehicles sold before offence date',
      'Engine modifications not reflected in DVLA records',
    ],
    faqs: [
      {
        question: 'Is all of Islington in ULEZ?',
        answer: 'Yes. Every road in Islington is within the London-wide ULEZ zone.',
      },
      {
        question: 'How much is a ULEZ fine?',
        answer: 'The PCN is £180, reduced to £90 within 14 days.',
      },
      {
        question: 'Can I appeal if my car is compliant?',
        answer: 'Yes. Provide your V5C showing the Euro standard. This is a common successful ground.',
      },
      {
        question: 'Who handles ULEZ appeals?',
        answer: 'TfL handles the initial appeal. London Tribunals is the independent escalation body.',
      },
    ],
    seoTitle: 'Appeal a ULEZ Fine in Islington | Free Check',
    seoDescription: 'Got a ULEZ fine in Islington? Free PCN assessment. A1 corridor is a major camera route. Check compliance and appeal grounds.',
  },

  // ============================================================
  // KENSINGTON & CHELSEA
  // ============================================================
  {
    slug: 'parking-fine-kensington-chelsea',
    borough: 'Kensington and Chelsea',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Kensington and Chelsea',
    description: 'Challenge a RBKC parking PCN. Kensington High Street, Chelsea, and Notting Hill hotspots.',
    councilName: 'Royal Borough of Kensington and Chelsea',
    content: `## Got a Parking Fine in Kensington and Chelsea?

**Got a parking fine in Kensington and Chelsea? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The Royal Borough of Kensington and Chelsea (RBKC) is one of London's smallest but most heavily enforced boroughs for parking. With some of the highest property values in the country, parking space is at a premium. The council issues tens of thousands of PCNs every year.

## Common Fine Locations

Kensington High Street and the surrounding roads attract shoppers and tourists. Meters are expensive and short-stay, and the surrounding residential streets have strict permit zones.

Chelsea, particularly King's Road, Sloane Square, and the streets around Chelsea and Westminster Hospital, is another major hotspot. The Fulham Road corridor catches visitors to restaurants and shops.

Notting Hill and Portobello Road see enforcement spikes on market days (Fridays and Saturdays). Holland Park and Earl's Court have complex CPZ boundaries that catch unfamiliar drivers.

The museum quarter around Exhibition Road (V&A, Science Museum, Natural History Museum) attracts millions of visitors annually, many of whom receive fines for overstaying on meters or parking in restricted bays.

[Check your RBKC PCN for free](/appeal) before paying.

## Appeal Process

Challenge informally within 28 days. RBKC has high appeal success rates at London Tribunals, partly because the complex signage in the borough creates genuine confusion. Obscured signs on tree-lined streets, incorrect PCN details, and loading defences work well.

[Start your free assessment](/appeal) for personalised advice.`,
    localInfo: [
      'RBKC is one of the smallest London boroughs but among the most heavily enforced.',
      'Parking meter charges in RBKC are among the highest in London.',
      'The museum quarter (V&A, Natural History Museum) is a major fine hotspot.',
      'Notting Hill market days trigger increased enforcement on surrounding streets.',
    ],
    commonIssues: [
      'Kensington High Street meter overstays',
      'King\'s Road and Sloane Square permit zones',
      'Notting Hill Portobello Road market day restrictions',
      'Exhibition Road museum quarter visitor parking',
      'Holland Park and Earl\'s Court CPZ boundaries',
      'Chelsea and Westminster Hospital area fines',
    ],
    faqs: [
      {
        question: 'How do I appeal an RBKC parking fine?',
        answer: 'Challenge informally within 28 days to the Royal Borough of Kensington and Chelsea. If rejected, formal representation within 28 days of the Notice to Owner. London Tribunals provides the independent review.',
      },
      {
        question: 'How much is parking in Kensington and Chelsea?',
        answer: 'Meter rates are among the highest in London, up to £6 per hour in some areas. Fines are £80 to £130.',
      },
      {
        question: 'Where can I park near the museums?',
        answer: 'Exhibition Road has metered bays with short maximum stays. The Imperial College car park on Prince Consort Road is a paid alternative. Street parking is very limited.',
      },
      {
        question: 'Can I appeal if the meter was confusing?',
        answer: 'If the meter was unclear, malfunctioning, or you were charged despite having credit remaining, these are valid grounds.',
      },
    ],
    seoTitle: 'Appeal Parking Fine Kensington Chelsea | Free',
    seoDescription: 'Got a parking fine in Kensington and Chelsea? Free PCN check. Museums, King\'s Road, and Notting Hill are top hotspots. Check appeal grounds.',
  },
  {
    slug: 'bus-lane-fine-kensington-chelsea',
    borough: 'Kensington and Chelsea',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Kensington and Chelsea',
    description: 'Challenge an RBKC bus lane PCN. Camera locations and appeal process.',
    councilName: 'Royal Borough of Kensington and Chelsea',
    content: `## Got a Bus Lane Fine in Kensington and Chelsea?

**Got a bus lane fine in Kensington and Chelsea? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

RBKC has bus lane enforcement on key routes including Kensington High Street, Cromwell Road, and the A4 corridor. The fine is £130, reduced to £65 within 14 days.

## Key Locations

Kensington High Street has bus lanes during peak hours. Cromwell Road (A4), a major east-west route, features camera-enforced lanes. The Embankment approach via Chelsea Bridge Road also has restricted sections.

[Check your bus lane fine for free](/appeal) to see your grounds.

## How to Appeal

Challenge within 28 days. Signage non-compliance, worn markings, and left turns are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Kensington High Street and Cromwell Road are key bus lane enforcement areas.',
      'The A4 corridor through the borough has extensive camera coverage.',
      'Bus lane fines are £130, reduced to £65 within 14 days.',
      'London Tribunals handles escalated appeals.',
    ],
    commonIssues: [
      'Kensington High Street peak-hour bus lanes',
      'Cromwell Road (A4) camera enforcement',
      'Chelsea Bridge Road restricted sections',
      'Holland Road and Warwick Road bus lanes',
    ],
    faqs: [
      {
        question: 'How much is a bus lane fine in RBKC?',
        answer: 'Bus lane fines are £130, reduced to £65 within 14 days.',
      },
      {
        question: 'Can I appeal signage issues?',
        answer: 'Yes. If bus lane signs were unclear, obscured, or non-compliant, this is a strong ground.',
      },
      {
        question: 'Who enforces bus lanes on Cromwell Road?',
        answer: 'Cromwell Road is a TfL red route. Check your PCN header to confirm the issuer.',
      },
      {
        question: 'Are bus lane fines criminal?',
        answer: 'No. They are civil penalties with no licence points.',
      },
    ],
    seoTitle: 'Appeal Bus Lane Fine Kensington Chelsea | Free',
    seoDescription: 'Got a bus lane fine in Kensington and Chelsea? Free PCN check. Cromwell Road and Kensington High Street are top spots. Check grounds.',
  },
  {
    slug: 'congestion-charge-fine-kensington-chelsea',
    borough: 'Kensington and Chelsea',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Kensington and Chelsea',
    description: 'Challenge a congestion charge PCN in RBKC. Zone boundaries and how to appeal.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Kensington and Chelsea?

**Got a congestion charge fine in Kensington and Chelsea? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The eastern portion of RBKC, including parts of Knightsbridge, South Kensington, and Chelsea near the Embankment, falls within the Congestion Charge Zone. The boundary runs roughly along Warwick Road and Kensington Gore, meaning much of the borough is actually outside the zone.

## Zone Boundaries

Western RBKC (Notting Hill, Holland Park, Earl's Court) is outside the Congestion Charge Zone. Eastern areas including Knightsbridge, Harrods, the museum quarter, and parts of Chelsea are inside. The boundary can be confusing, especially around Kensington Gore and Exhibition Road.

[Check your fine for free](/appeal) to see if you have valid grounds.

## How to Appeal

Appeal to TfL within 28 days. Boundary confusion, Auto Pay failures, and exemption errors are common grounds.

RBKC residents within the zone can register for a 90% discount.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Eastern RBKC (Knightsbridge, South Kensington) is in the Congestion Charge Zone.',
      'Western RBKC (Notting Hill, Holland Park) is outside the zone.',
      'The boundary runs near Warwick Road and Kensington Gore.',
      'RBKC residents in the zone qualify for a 90% discount.',
    ],
    commonIssues: [
      'Boundary confusion around Kensington Gore and Exhibition Road',
      'Visiting Harrods or the museums without paying',
      'Residents not registered for the 90% discount',
      'Auto Pay failures on TfL accounts',
    ],
    faqs: [
      {
        question: 'Is Notting Hill in the Congestion Charge Zone?',
        answer: 'No. Notting Hill, Holland Park, and Earl\'s Court are outside the zone. Only the eastern parts of RBKC are included.',
      },
      {
        question: 'How much is a congestion charge fine?',
        answer: 'The PCN is £160, reduced to £80 within 14 days.',
      },
      {
        question: 'Do RBKC residents get a discount?',
        answer: 'Yes. Residents within the zone can register for a 90% discount, paying £1.50 instead of £15 per day.',
      },
      {
        question: 'Who handles the appeal?',
        answer: 'TfL handles congestion charge appeals. London Tribunals reviews rejected cases.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge RBKC | Free Assessment',
    seoDescription: 'Got a congestion charge fine in Kensington and Chelsea? Free PCN check. Eastern RBKC is in the zone. Check appeal grounds.',
  },
  {
    slug: 'ulez-fine-kensington-chelsea',
    borough: 'Kensington and Chelsea',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Kensington and Chelsea',
    description: 'Challenge a ULEZ PCN in RBKC. Vehicle compliance and appeal process.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Kensington and Chelsea?

**Got a ULEZ fine in Kensington and Chelsea? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

ULEZ covers all of Greater London, so every street in Kensington and Chelsea is within the zone. The borough sees many ULEZ fines, particularly from visitors driving older vehicles to the museums, shops, and restaurants.

## Common Issues

Visitors from outside London driving classic or older cars are frequently caught. The borough has a high proportion of high-value classic cars whose owners may not realise they are non-compliant. TfL vehicle checker errors also affect vehicles registered in the borough.

[Check your ULEZ fine for free](/appeal) for a personalised assessment.

## How to Appeal

Appeal to TfL within 28 days. Historic vehicle exemptions (pre-1977), compliance errors, and sold vehicles are common grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'ULEZ covers all of RBKC.',
      'The borough has many classic car owners affected by ULEZ.',
      'Pre-1977 vehicles are exempt from ULEZ.',
      'The charge is £12.50/day; the PCN is £180 (£90 within 14 days).',
    ],
    commonIssues: [
      'Classic car owners unaware of non-compliance',
      'Visitors driving older vehicles to museums and shops',
      'TfL vehicle checker errors',
      'Historic vehicle exemption confusion',
    ],
    faqs: [
      {
        question: 'Is RBKC in the ULEZ zone?',
        answer: 'Yes. Every road in Kensington and Chelsea is within the London-wide ULEZ zone.',
      },
      {
        question: 'Are classic cars exempt from ULEZ?',
        answer: 'Vehicles manufactured before 1 January 1977 are exempt. No registration is needed, but if fined in error, appeal with proof of age.',
      },
      {
        question: 'How much is a ULEZ fine?',
        answer: 'The PCN is £180, reduced to £90 within 14 days.',
      },
      {
        question: 'Can I appeal to RBKC?',
        answer: 'No. ULEZ fines are managed by TfL. Appeal to TfL within 28 days.',
      },
    ],
    seoTitle: 'Appeal a ULEZ Fine Kensington Chelsea | Free',
    seoDescription: 'Got a ULEZ fine in Kensington and Chelsea? Free PCN check. Classic car owners frequently caught. Check compliance and appeal.',
  },

  // ============================================================
  // HAMMERSMITH & FULHAM
  // ============================================================
  {
    slug: 'parking-fine-hammersmith-fulham',
    borough: 'Hammersmith and Fulham',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Hammersmith and Fulham',
    description: 'Challenge an LBHF parking PCN. Shepherd\'s Bush, Fulham Broadway, and match day hotspots.',
    councilName: 'London Borough of Hammersmith and Fulham',
    content: `## Got a Parking Fine in Hammersmith and Fulham?

**Got a parking fine in Hammersmith and Fulham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Hammersmith and Fulham stretches from Shepherd's Bush and the Westfield shopping centre down to Fulham and the Thames. The borough has three major football grounds (Chelsea, Fulham, QPR) and a huge shopping centre, making parking enforcement a constant challenge.

## Common Fine Locations

Westfield London (Shepherd's Bush) attracts thousands of drivers daily. The surrounding streets have strict CPZs and match day restrictions for QPR at Loftus Road. King Street in Hammersmith is heavily metered with short stays.

Fulham Broadway and the streets around Stamford Bridge (Chelsea FC) see major enforcement on match days. Fulham Road, Lillie Road, and the streets near Craven Cottage (Fulham FC) also have special event restrictions.

Brook Green, Brackenbury Village, and the residential streets of Ravenscourt Park have permit zones that catch visitors.

[Check your PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Match day restrictions are a common source of unfair fines. Temporary signage for event days is often placed late or in hard-to-see locations. Signage issues, incorrect PCN details, and permit errors are strong grounds.

Challenge within 28 days to LBHF. London Tribunals handles escalated appeals.

[Start your free assessment](/appeal) for personalised advice.`,
    localInfo: [
      'Three football grounds (Chelsea, Fulham, QPR) create match day enforcement zones.',
      'Westfield London attracts thousands of drivers with strict surrounding CPZs.',
      'The borough has extensive match day and event day parking restrictions.',
      'King Street, Hammersmith is one of the busiest metered shopping streets.',
    ],
    commonIssues: [
      'Westfield Shepherd\'s Bush surrounding CPZs',
      'Chelsea FC match day restrictions (Stamford Bridge)',
      'Fulham FC match day restrictions (Craven Cottage)',
      'QPR match day restrictions (Loftus Road)',
      'King Street Hammersmith meter overstays',
      'Fulham Broadway area permit zones',
    ],
    faqs: [
      {
        question: 'How do I appeal an LBHF parking fine?',
        answer: 'Challenge informally within 28 days to Hammersmith and Fulham Council. If rejected, formal representation within 28 days of the Notice to Owner. London Tribunals is the final step.',
      },
      {
        question: 'Are match day parking restrictions enforceable?',
        answer: 'Yes, but only if the signs were properly displayed. Temporary match day signs must be put up in advance and be clearly visible. If they were not, you have grounds to appeal.',
      },
      {
        question: 'How much is a parking fine in Hammersmith and Fulham?',
        answer: 'Fines are £80 to £130 with a 50% discount for early payment within 14 days.',
      },
      {
        question: 'Where can I park near Westfield?',
        answer: 'Westfield has its own car park (paid). Surrounding streets are mostly residents-only. The council car park on Shepherd\'s Bush Green is a paid alternative.',
      },
    ],
    seoTitle: 'Appeal Parking Fine Hammersmith Fulham | Free',
    seoDescription: 'Got a parking fine in Hammersmith and Fulham? Free PCN check. Match day and Westfield restrictions are top hotspots. Check grounds.',
  },
  {
    slug: 'bus-lane-fine-hammersmith-fulham',
    borough: 'Hammersmith and Fulham',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Hammersmith and Fulham',
    description: 'Challenge an LBHF bus lane PCN. Camera locations and appeal tips.',
    councilName: 'London Borough of Hammersmith and Fulham',
    content: `## Got a Bus Lane Fine in Hammersmith and Fulham?

**Got a bus lane fine in Hammersmith and Fulham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Hammersmith and Fulham has bus lane enforcement on the A4 (Hammersmith Flyover/Talgarth Road), Shepherd's Bush Road, and Uxbridge Road. These major routes see heavy enforcement.

## Key Locations

The A4 corridor through Hammersmith is one of London's busiest routes with camera-enforced bus lanes. Shepherd's Bush Road and Uxbridge Road catch drivers heading to and from Westfield and White City. Fulham Palace Road also has restricted sections.

[Check your bus lane fine for free](/appeal) to see your options.

## How to Appeal

Challenge within 28 days. Signage non-compliance, worn markings, and genuine emergencies are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'A4 corridor through Hammersmith is a major bus lane enforcement area.',
      'Shepherd\'s Bush Road and Uxbridge Road have camera-enforced lanes.',
      'Bus lane fines are £130, reduced to £65 within 14 days.',
      'TfL manages red route enforcement; LBHF handles borough roads.',
    ],
    commonIssues: [
      'A4 Hammersmith Flyover/Talgarth Road bus lanes',
      'Shepherd\'s Bush Road cameras',
      'Uxbridge Road restricted sections',
      'Fulham Palace Road enforcement',
    ],
    faqs: [
      {
        question: 'How much is a bus lane fine?',
        answer: 'Bus lane fines are £130, reduced to £65 within 14 days.',
      },
      {
        question: 'Can I appeal a bus lane fine on the A4?',
        answer: 'Yes. The A4 is a TfL red route, so appeal to TfL. Signage issues and worn markings are valid grounds.',
      },
      {
        question: 'Are bus lane fines criminal?',
        answer: 'No. Civil penalties only, no licence points.',
      },
      {
        question: 'How long do I have to appeal?',
        answer: 'You have 28 days from the PCN date for an informal challenge.',
      },
    ],
    seoTitle: 'Appeal Bus Lane Fine Hammersmith Fulham | Free',
    seoDescription: 'Got a bus lane fine in Hammersmith and Fulham? Free PCN check. A4 corridor is the top enforcement spot. Check your appeal grounds.',
  },
  {
    slug: 'congestion-charge-fine-hammersmith-fulham',
    borough: 'Hammersmith and Fulham',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Hammersmith and Fulham',
    description: 'Challenge a congestion charge PCN in LBHF. Zone boundaries and appeal process.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Hammersmith and Fulham?

**Got a congestion charge fine in Hammersmith and Fulham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Hammersmith and Fulham is largely outside the Congestion Charge Zone. However, drivers heading east from the borough towards central London frequently cross the zone boundary without realising. The A4 corridor from Hammersmith is a common route into the zone.

## Common Issues

Drivers commuting from Hammersmith towards the City or West End enter the zone when they pass Knightsbridge or Earl's Court. The boundary is not always obvious on the A4 approach. Auto Pay failures are also common for regular commuters.

[Check your fine for free](/appeal) to see if you have valid grounds.

## How to Appeal

Appeal to TfL within 28 days. Boundary confusion and system errors are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Hammersmith and Fulham is almost entirely outside the Congestion Charge Zone.',
      'Drivers heading east on the A4 frequently cross into the zone.',
      'TfL manages all congestion charge enforcement.',
      'The daily charge is £15, with a £160 PCN for non-payment.',
    ],
    commonIssues: [
      'A4 corridor crossing into the zone towards Knightsbridge',
      'Boundary confusion for regular commuters',
      'Auto Pay failures',
      'Unclear zone signage on approach routes',
    ],
    faqs: [
      {
        question: 'Is Hammersmith in the Congestion Charge Zone?',
        answer: 'No. Hammersmith and Fulham is outside the zone, but drivers heading east on the A4 enter the zone at the Kensington and Chelsea boundary.',
      },
      {
        question: 'How much is a congestion charge fine?',
        answer: 'The PCN is £160, reduced to £80 within 14 days.',
      },
      {
        question: 'Who handles the appeal?',
        answer: 'TfL handles all congestion charge appeals.',
      },
      {
        question: 'Can I appeal if I did not realise I entered the zone?',
        answer: 'If boundary signage was unclear or missing, this is a valid ground. Otherwise, forgetting alone is usually not sufficient.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge Hammersmith Fulham',
    seoDescription: 'Got a congestion charge fine from Hammersmith? Free PCN check. A4 corridor is the main entry into the zone. Check your appeal grounds.',
  },
  {
    slug: 'ulez-fine-hammersmith-fulham',
    borough: 'Hammersmith and Fulham',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Hammersmith and Fulham',
    description: 'Challenge a ULEZ PCN in LBHF. Vehicle compliance and appeal tips.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Hammersmith and Fulham?

**Got a ULEZ fine in Hammersmith and Fulham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

ULEZ covers all of Greater London, so every road in Hammersmith and Fulham is within the zone. The A4 and A40 corridors running through the borough are major ULEZ camera routes, catching vehicles from west London and the M4 corridor.

## Common Issues

Drivers entering London from the M4 via the A4 through Hammersmith are frequently caught. Vehicles from the M40/A40 through Shepherd's Bush also generate many ULEZ fines. TfL checker errors and sold vehicles are common appeal grounds.

[Check your ULEZ fine for free](/appeal) for a personalised assessment.

## How to Appeal

Appeal to TfL within 28 days with supporting documents. London Tribunals handles rejected cases.`,
    localInfo: [
      'ULEZ covers all of Hammersmith and Fulham.',
      'A4 (from M4) and A40 (from M40) are major ULEZ camera corridors.',
      'The charge is £12.50/day; the PCN is £180 (£90 within 14 days).',
      'TfL manages all ULEZ enforcement.',
    ],
    commonIssues: [
      'M4/A4 corridor through Hammersmith',
      'M40/A40 through Shepherd\'s Bush',
      'TfL vehicle checker errors',
      'Vehicles sold before offence date',
    ],
    faqs: [
      {
        question: 'Is all of Hammersmith and Fulham in ULEZ?',
        answer: 'Yes. Every road is within the London-wide ULEZ zone.',
      },
      {
        question: 'How much is a ULEZ fine?',
        answer: 'The PCN is £180, reduced to £90 within 14 days.',
      },
      {
        question: 'Can I appeal?',
        answer: 'Yes. Appeal to TfL within 28 days. Compliance errors, sold vehicles, and checker mistakes are common grounds.',
      },
      {
        question: 'Is the M4 in ULEZ?',
        answer: 'The M4 becomes the ULEZ zone once you enter Greater London, which happens before Hammersmith.',
      },
    ],
    seoTitle: 'Appeal ULEZ Fine Hammersmith Fulham | Free',
    seoDescription: 'Got a ULEZ fine in Hammersmith and Fulham? Free PCN check. M4/A4 and M40/A40 corridors are major camera spots. Check compliance.',
  },

  // ============================================================
  // WANDSWORTH
  // ============================================================
  {
    slug: 'parking-fine-wandsworth',
    borough: 'Wandsworth',
    fineType: 'parking',
    title: 'Appeal a Parking Fine in Wandsworth',
    description: 'Challenge a Wandsworth parking PCN. Clapham Junction, Putney, and Tooting hotspots.',
    councilName: 'London Borough of Wandsworth',
    content: `## Got a Parking Fine in Wandsworth?

**Got a parking fine in Wandsworth? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Wandsworth is one of London's largest boroughs, stretching from Clapham Junction and Battersea through Putney, Tooting, and Balham. The council issues a significant number of PCNs, with enforcement focused on commercial centres and transport hubs.

## Common Fine Locations

Clapham Junction is the UK's busiest railway station by number of trains, and the surrounding streets (St John's Hill, Lavender Hill, Falcon Road) have strict restrictions. Battersea, particularly around Battersea Park and the new Power Station development, has changing signage.

Putney High Street and the area around Putney Bridge see heavy enforcement. Tooting Broadway and Tooting Bec have busy shopping streets with complex meter and CPZ arrangements. Balham High Road is another metered hotspot.

[Check your Wandsworth PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Strong grounds include signage confusion around new developments (Battersea Power Station, Nine Elms), meter issues, and permit display errors. Challenge informally within 28 days.

[Start your free assessment](/appeal) for personalised advice.`,
    localInfo: [
      'Wandsworth is one of the largest London boroughs by area.',
      'Clapham Junction is the UK\'s busiest station by train count.',
      'Battersea Power Station development has changed local parking arrangements significantly.',
      'Putney and Tooting are major commercial enforcement areas.',
    ],
    commonIssues: [
      'Clapham Junction station area restrictions',
      'Battersea Power Station new development signage',
      'Putney High Street meter overstays',
      'Tooting Broadway and Tooting Bec CPZs',
      'Balham High Road metered bays',
      'Battersea Park area visitor parking',
    ],
    faqs: [
      {
        question: 'How do I appeal a Wandsworth parking fine?',
        answer: 'Challenge informally within 28 days to Wandsworth Council. If rejected, formal representation within 28 days of the Notice to Owner. London Tribunals provides the independent review.',
      },
      {
        question: 'How much is a parking fine in Wandsworth?',
        answer: 'Fines are £80 to £130 with a 50% discount for early payment within 14 days.',
      },
      {
        question: 'Can I park near Clapham Junction for free?',
        answer: 'Very limited. Most streets are permit-only or metered. The NCP on Grant Road is a paid option.',
      },
      {
        question: 'Are Battersea Power Station parking rules different?',
        answer: 'The development area has its own private parking enforcement, while surrounding borough roads are managed by Wandsworth Council. Check your PCN issuer.',
      },
    ],
    seoTitle: 'Appeal a Parking Fine in Wandsworth | Free',
    seoDescription: 'Got a parking fine in Wandsworth? Free PCN check. Clapham Junction, Putney, and Tooting are top hotspots. Check your appeal grounds.',
  },
  {
    slug: 'bus-lane-fine-wandsworth',
    borough: 'Wandsworth',
    fineType: 'bus-lane',
    title: 'Appeal a Bus Lane Fine in Wandsworth',
    description: 'Challenge a Wandsworth bus lane PCN. Camera locations and appeal process.',
    councilName: 'London Borough of Wandsworth',
    content: `## Got a Bus Lane Fine in Wandsworth?

**Got a bus lane fine in Wandsworth? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Wandsworth has bus lane enforcement on routes including the A3 (through Wandsworth town centre), Battersea Park Road, and routes around Clapham Junction. The fine is £130, reduced to £65 within 14 days.

## Key Locations

The A3 corridor through Wandsworth town centre has camera-enforced bus lanes. Battersea Park Road heading towards Chelsea Bridge also features enforcement. Lavender Hill and St John's Hill near Clapham Junction have restricted sections.

[Check your bus lane fine for free](/appeal) to see your grounds.

## How to Appeal

Challenge within 28 days. Signage issues, worn markings, and left turns are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'A3 through Wandsworth town centre has camera-enforced bus lanes.',
      'Battersea Park Road features bus lane cameras.',
      'Bus lane fines are £130, reduced to £65 within 14 days.',
      'TfL manages red route sections; Wandsworth handles borough roads.',
    ],
    commonIssues: [
      'A3 corridor through Wandsworth town centre',
      'Battersea Park Road cameras',
      'Lavender Hill and St John\'s Hill near Clapham Junction',
      'Upper Tooting Road restrictions',
    ],
    faqs: [
      {
        question: 'How much is a bus lane fine in Wandsworth?',
        answer: 'Bus lane fines are £130, reduced to £65 within 14 days.',
      },
      {
        question: 'Can I appeal if I was turning left?',
        answer: 'Yes. Briefly entering a bus lane to turn left is generally permitted.',
      },
      {
        question: 'Who issues bus lane fines on the A3?',
        answer: 'Check your PCN. TfL manages parts of the A3 as a red route.',
      },
      {
        question: 'Do bus lane fines affect my licence?',
        answer: 'No. Civil penalties only, no points.',
      },
    ],
    seoTitle: 'Appeal a Bus Lane Fine in Wandsworth | Free',
    seoDescription: 'Got a bus lane fine in Wandsworth? Free PCN check. A3 corridor and Battersea Park Road are top spots. Check your appeal grounds.',
  },
  {
    slug: 'congestion-charge-fine-wandsworth',
    borough: 'Wandsworth',
    fineType: 'congestion',
    title: 'Appeal a Congestion Charge Fine in Wandsworth',
    description: 'Challenge a congestion charge PCN from Wandsworth. Zone boundaries and appeal tips.',
    councilName: 'Transport for London',
    content: `## Got a Congestion Charge Fine in Wandsworth?

**Got a congestion charge fine in Wandsworth? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Wandsworth is outside the Congestion Charge Zone, but drivers heading from the borough into central London frequently cross the boundary. The Battersea/Chelsea Bridge, Vauxhall Bridge, and routes through Nine Elms take you into the zone.

## Common Issues

Commuters from Putney, Battersea, and Clapham heading to the City or West End cross into the zone regularly. The boundary at Vauxhall and along the Thames is not always obvious.

[Check your fine for free](/appeal) to see if you have valid grounds.

## How to Appeal

Appeal to TfL within 28 days. Boundary confusion and Auto Pay failures are common grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    localInfo: [
      'Wandsworth is outside the Congestion Charge Zone.',
      'Drivers crossing Chelsea Bridge, Vauxhall Bridge, or through Nine Elms enter the zone.',
      'TfL manages enforcement.',
      'The daily charge is £15; the PCN is £160 (£80 within 14 days).',
    ],
    commonIssues: [
      'Crossing Chelsea Bridge into the zone',
      'Vauxhall Bridge approach boundary',
      'Nine Elms route into the zone',
      'Auto Pay failures for regular commuters',
    ],
    faqs: [
      {
        question: 'Is Wandsworth in the Congestion Charge Zone?',
        answer: 'No. Wandsworth is outside the zone, but drivers crossing bridges into central London enter it.',
      },
      {
        question: 'How much is the fine?',
        answer: 'The PCN is £160, reduced to £80 within 14 days.',
      },
      {
        question: 'Who handles the appeal?',
        answer: 'TfL handles all congestion charge appeals.',
      },
      {
        question: 'Is Battersea Power Station in the zone?',
        answer: 'The Battersea Power Station area is very close to the boundary. Check the exact zone map on TfL\'s website or our free assessment.',
      },
    ],
    seoTitle: 'Appeal Congestion Charge Fine Wandsworth | Free',
    seoDescription: 'Got a congestion charge fine from Wandsworth? Free PCN check. Bridge crossings into the zone are common triggers. Check your grounds.',
  },
  {
    slug: 'ulez-fine-wandsworth',
    borough: 'Wandsworth',
    fineType: 'ulez',
    title: 'Appeal a ULEZ Fine in Wandsworth',
    description: 'Challenge a ULEZ PCN in Wandsworth. Vehicle compliance and appeal process.',
    councilName: 'Transport for London',
    content: `## Got a ULEZ Fine in Wandsworth?

**Got a ULEZ fine in Wandsworth? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

ULEZ covers all of Greater London, so every road in Wandsworth is within the zone. The A3, A24, and A205 (South Circular) running through the borough are major ULEZ camera routes.

## Common Issues

Drivers entering London from Surrey via the A3 through Wandsworth are frequently caught. The South Circular (A205) through Putney, Wandsworth, and Tooting is another major camera corridor.

[Check your ULEZ fine for free](/appeal) for a personalised assessment.

## How to Appeal

Appeal to TfL within 28 days. Compliance errors, sold vehicles, and checker mistakes are common grounds.`,
    localInfo: [
      'ULEZ covers all of Wandsworth.',
      'A3, A24, and A205 (South Circular) are major camera corridors.',
      'The charge is £12.50/day; the PCN is £180 (£90 within 14 days).',
      'TfL manages all ULEZ enforcement.',
    ],
    commonIssues: [
      'A3 corridor from Surrey through Wandsworth',
      'South Circular (A205) through Putney and Tooting',
      'TfL vehicle checker errors',
      'Vehicles sold before offence date',
    ],
    faqs: [
      {
        question: 'Is Wandsworth in ULEZ?',
        answer: 'Yes. Every road in Wandsworth is within the London-wide ULEZ zone.',
      },
      {
        question: 'How much is a ULEZ fine?',
        answer: 'The PCN is £180, reduced to £90 within 14 days.',
      },
      {
        question: 'Can I appeal?',
        answer: 'Yes. Appeal to TfL within 28 days with supporting evidence.',
      },
      {
        question: 'What vehicles are exempt?',
        answer: 'Pre-1977 historic vehicles, military vehicles, and certain agricultural vehicles are exempt.',
      },
    ],
    seoTitle: 'Appeal a ULEZ Fine in Wandsworth | Free Check',
    seoDescription: 'Got a ULEZ fine in Wandsworth? Free PCN check. A3 and South Circular are major camera routes. Check compliance and appeal.',
  },
];

// ============================================================
// GENERATE REMAINING BOROUGHS (parking + bus-lane only)
// ============================================================

interface BoroughTemplate {
  borough: string;
  slugBase: string;
  councilName: string;
  parkingHotspots: string[];
  parkingContent: string;
  busLaneContent: string;
  parkingLocalInfo: string[];
  busLaneLocalInfo: string[];
  parkingFaqs: { question: string; answer: string }[];
  busLaneFaqs: { question: string; answer: string }[];
}

const REMAINING_BOROUGHS: BoroughTemplate[] = [
  {
    borough: 'Greenwich',
    slugBase: 'greenwich',
    councilName: 'Royal Borough of Greenwich',
    parkingHotspots: ['Greenwich town centre and Cutty Sark area', 'O2 Arena (North Greenwich) event day restrictions', 'Blackheath village permit zones', 'Woolwich town centre meters', 'Eltham High Street restrictions', 'Greenwich Park surrounding roads'],
    parkingContent: `## Got a Parking Fine in Greenwich?

**Got a parking fine in Greenwich? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The Royal Borough of Greenwich covers south-east London from the historic Greenwich town centre and the O2 Arena through to Woolwich, Eltham, and Blackheath. The borough issues thousands of PCNs each year, with enforcement concentrated around its tourist attractions and commercial centres.

## Common Fine Locations in Greenwich

Greenwich town centre is the biggest hotspot. The area around the Cutty Sark, National Maritime Museum, and Greenwich Market attracts millions of visitors annually. Street parking is severely limited, and most surrounding roads are permit-only or metered with short stays.

The O2 Arena (North Greenwich) generates enforcement spikes on event nights. The surrounding roads have event-day restrictions that are not always well-signed. Blackheath village, with its independent shops and restaurants, has strict permit zones.

Woolwich town centre has undergone major regeneration, and parking restrictions have changed frequently. Eltham High Street has meters and CPZ zones that catch shoppers.

[Check your Greenwich PCN for free](/appeal) before paying.

## Your Right to Appeal

You have 28 days from the PCN date to challenge informally to Greenwich Council. If rejected, submit a formal representation within 28 days of the Notice to Owner. London Tribunals provides the independent final review.

**Do not pay if you believe the fine is wrong.** [Start your free appeal assessment](/appeal) and we will check your grounds.

## Strong Appeal Grounds in Greenwich

Greenwich has many historic streets with confusing layouts and signage. Tourist-area restrictions are complex, and event-day rules at the O2 are poorly communicated. Signage obscured by trees, especially around Blackheath and Greenwich Park, is a common winning ground.

Loading defences, meter malfunctions, and incorrect PCN details also lead to successful appeals in Greenwich.`,
    busLaneContent: `## Got a Bus Lane Fine in Greenwich?

**Got a bus lane fine in Greenwich? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Greenwich has camera-enforced bus lanes on several routes, including Woolwich Road, Trafalgar Road, and the A2 corridor through Eltham and Kidbrooke. These busy routes see regular enforcement.

## Key Bus Lane Locations

Woolwich Road and Trafalgar Road connecting Greenwich to Woolwich have peak-hour bus lanes. The A2 corridor (Rochester Way, Eltham Road) has camera-enforced sections. Shooters Hill Road also features restricted bus lanes.

[Check your bus lane fine for free](/appeal) to see your options.

## How to Appeal

Challenge within 28 days. Signage non-compliance, worn road markings, and left turns are valid grounds. TfL manages red route sections, while Greenwich Council handles borough roads.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Greenwich town centre attracts millions of tourists annually.', 'The O2 Arena generates event-day enforcement spikes.', 'Blackheath and Greenwich Park areas have extensive CPZs.', 'London Tribunals handles all escalated Greenwich parking appeals.'],
    busLaneLocalInfo: ['Woolwich Road and Trafalgar Road have peak-hour bus lane cameras.', 'A2 corridor through Eltham has camera enforcement.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'TfL manages red route bus lanes; Greenwich handles borough roads.'],
    parkingFaqs: [
      { question: 'Where can I park near the Cutty Sark?', answer: 'Very limited metered bays exist on surrounding streets. The Cutty Sark car park (paid) and Park Row car park are alternatives. Most streets are permit-only.' },
      { question: 'How much is a parking fine in Greenwich?', answer: 'Fines are £80 to £130 with a 50% discount for early payment within 14 days.' },
      { question: 'Are there event-day parking restrictions at the O2?', answer: 'Yes. On event nights, additional restrictions apply on surrounding streets. Signs should be posted in advance, but they are often missed.' },
      { question: 'How do I appeal a Greenwich parking fine?', answer: 'Challenge informally within 28 days to Greenwich Council. London Tribunals is the final independent review body.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine in Greenwich?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant or obscured signage is a strong appeal ground.' },
      { question: 'Who enforces bus lanes on the A2?', answer: 'TfL manages parts of the A2 as a red route. Check your PCN header.' },
      { question: 'Do bus lane fines affect my licence?', answer: 'No. They are civil penalties with no points.' },
    ],
  },
  {
    borough: 'Lewisham',
    slugBase: 'lewisham',
    councilName: 'London Borough of Lewisham',
    parkingHotspots: ['Lewisham town centre and shopping centre', 'Catford and Catford Broadway', 'Blackheath borders with Greenwich', 'Deptford High Street', 'Lee Green and Hither Green areas', 'Brockley and Honor Oak residential zones'],
    parkingContent: `## Got a Parking Fine in Lewisham?

**Got a parking fine in Lewisham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Lewisham covers south-east London from Deptford and New Cross through to Catford, Lewisham town centre, and the borders of Blackheath. The borough issues thousands of PCNs annually, with enforcement focused on its commercial centres and residential zones.

## Common Fine Locations

Lewisham town centre, around the shopping centre and DLR/rail station, has extensive restrictions and metered bays. Catford and Catford Broadway see heavy enforcement on the commercial high street. Deptford High Street has complex restrictions around market days.

Blackheath borders are shared with Greenwich, and the CPZ boundaries can be confusing. Brockley and Honor Oak Park have expanding CPZs that catch visitors.

[Check your Lewisham PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage confusion, meter issues, and incorrect PCN details are common winning grounds. Challenge within 28 days to Lewisham Council. London Tribunals handles escalated appeals.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Lewisham?

**Got a bus lane fine in Lewisham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Lewisham has bus lanes on routes including Lewisham High Street, the A20 (Lee High Road), and the A21 corridor through Catford. Camera enforcement catches drivers regularly.

## Key Locations

Lewisham High Street has peak-hour bus lanes approaching the town centre. The A20 (Lee High Road/Sidcup Road) has camera-enforced sections. Catford Road and the A21 through Catford also feature enforcement.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues and worn markings are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Lewisham town centre has extensive metered and restricted areas.', 'Catford Broadway is a major enforcement hotspot.', 'Deptford market days trigger increased enforcement.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['Lewisham High Street has peak-hour bus lane cameras.', 'A20 and A21 corridors have enforcement.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Lewisham parking fine?', answer: 'Challenge informally within 28 days to Lewisham Council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in Lewisham?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Lewisham town centre?', answer: 'The Lewisham Shopping Centre has paid parking. Street parking is mostly permit-only or metered.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear or obscured signage is a strong ground for appeal.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal if I was turning left?', answer: 'Yes. Briefly entering a bus lane for a left turn is generally permitted.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A20?', answer: 'Check your PCN header. TfL manages red route sections.' },
    ],
  },
  {
    borough: 'Newham',
    slugBase: 'newham',
    councilName: 'London Borough of Newham',
    parkingHotspots: ['Stratford and Westfield Stratford City', 'East Ham High Street', 'Forest Gate and Upton Park areas', 'London Stadium event day restrictions', 'ExCeL London and Royal Docks', 'Canning Town and Custom House'],
    parkingContent: `## Got a Parking Fine in Newham?

**Got a parking fine in Newham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Newham covers east London from Stratford and the Queen Elizabeth Olympic Park through to East Ham, Forest Gate, and the Royal Docks. The borough has seen massive development since the 2012 Olympics, and parking enforcement has increased significantly.

## Common Fine Locations

Stratford and the area around Westfield Stratford City is the biggest hotspot. The shopping centre attracts millions of visitors, and surrounding streets have strict event-day and match-day restrictions for the London Stadium.

East Ham High Street has metered bays and surrounding CPZs. Forest Gate, Upton Park, and Plaistow have residential zones. ExCeL London and the Royal Docks area has complex restrictions around exhibitions and events.

[Check your Newham PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Event-day signage issues are common, especially around the London Stadium and ExCeL. Challenge within 28 days to Newham Council. London Tribunals handles escalated appeals.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Newham?

**Got a bus lane fine in Newham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Newham has bus lanes on major routes including the A13 (Newham Way), A11 (Romford Road), and Barking Road. These busy east London corridors have camera enforcement.

## Key Locations

The A13 (Newham Way) is the main east-west route through the borough with camera-enforced bus lanes. Romford Road (A11) and Barking Road also have restricted sections. Stratford High Street has bus priority lanes.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues and worn markings are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Westfield Stratford City attracts millions of visitors annually.', 'London Stadium events trigger parking restrictions across a wide area.', 'The Royal Docks and ExCeL area has complex event parking.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A13 (Newham Way) is the main bus lane enforcement route.', 'Romford Road (A11) and Barking Road have cameras.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Newham parking fine?', answer: 'Challenge informally within 28 days to Newham Council. London Tribunals is the final step.' },
      { question: 'Are there match day restrictions near the London Stadium?', answer: 'Yes. Event-day restrictions apply across a wide area around the stadium. Temporary signs should be posted, but they are often missed.' },
      { question: 'How much is a parking fine in Newham?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park near Westfield Stratford?', answer: 'Westfield has its own paid car park. Surrounding streets are mostly restricted.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine in Newham?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Who enforces bus lanes on the A13?', answer: 'TfL manages the A13 as a red route. Check your PCN header.' },
      { question: 'Do bus lane fines affect my licence?', answer: 'No. Civil penalties only.' },
    ],
  },
  {
    borough: 'Barnet',
    slugBase: 'barnet',
    councilName: 'London Borough of Barnet',
    parkingHotspots: ['Finchley and North Finchley town centres', 'Hendon and Brent Cross Shopping Centre surrounds', 'Barnet High Street and Chipping Barnet', 'Golders Green and Temple Fortune', 'Mill Hill Broadway', 'Edgware and Burnt Oak areas'],
    parkingContent: `## Got a Parking Fine in Barnet?

**Got a parking fine in Barnet? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Barnet is London's largest borough by population, stretching from Golders Green and Hendon through Finchley, Mill Hill, and up to High Barnet. The council enforces parking across multiple busy town centres and residential areas.

## Common Fine Locations

Finchley and North Finchley have busy high streets with meters and surrounding CPZs. Hendon and the streets around Brent Cross Shopping Centre see heavy enforcement. Chipping Barnet's historic high street has limited parking. Golders Green and Temple Fortune have complex permit zones.

[Check your Barnet PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues are common in Barnet's suburban streets. Challenge within 28 days to Barnet Council. London Tribunals handles escalated appeals.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Barnet?

**Got a bus lane fine in Barnet? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Barnet has bus lanes on the A1 (Great North Road), A41 (Hendon Way), and Ballards Lane in Finchley. Camera enforcement catches drivers on these north London routes.

## Key Locations

The A1 through Barnet has camera-enforced bus lanes. Hendon Way (A41) approaching Brent Cross also features enforcement. Ballards Lane in Finchley has restricted sections.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues and worn markings are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Barnet is London\'s largest borough by population.', 'Multiple town centres (Finchley, Hendon, Chipping Barnet) have enforcement.', 'Brent Cross area generates significant fines.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A1 (Great North Road) has camera-enforced bus lanes.', 'Hendon Way (A41) features enforcement near Brent Cross.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Barnet parking fine?', answer: 'Challenge informally within 28 days. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in Barnet?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park near Brent Cross?', answer: 'Brent Cross Shopping Centre has paid parking. Surrounding streets are mostly restricted.' },
      { question: 'Can I appeal if signs were obscured?', answer: 'Yes. Obscured signage is a strong appeal ground in Barnet\'s tree-lined streets.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine in Barnet?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal if I was turning left?', answer: 'Yes. Left turns across bus lanes are generally permitted.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A1?', answer: 'Check your PCN header. TfL manages some sections as red routes.' },
    ],
  },
  {
    borough: 'Brent',
    slugBase: 'brent',
    councilName: 'London Borough of Brent',
    parkingHotspots: ['Wembley Stadium event day restrictions', 'Kilburn High Road', 'Harlesden and Willesden town centres', 'Wembley Park area', 'Kingsbury and Queensbury', 'Neasden and Dollis Hill'],
    parkingContent: `## Got a Parking Fine in Brent?

**Got a parking fine in Brent? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Brent is home to Wembley Stadium and the SSE Arena, making it one of London's busiest boroughs for event-day parking enforcement. Beyond Wembley, the borough covers Kilburn, Willesden, Harlesden, and Neasden, all with active parking enforcement.

## Common Fine Locations

Wembley Stadium event days trigger extensive parking restrictions across a wide area. The streets around Wembley Park, Olympic Way, and Wembley High Road see massive enforcement spikes on match days and concert nights.

Kilburn High Road is a busy shopping street with meters and surrounding CPZs. Harlesden and Willesden town centres have metered bays and complex permit zones.

[Check your Brent PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Event-day temporary signage at Wembley is frequently poorly placed or posted too late. This is a common winning ground. Challenge within 28 days to Brent Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Brent?

**Got a bus lane fine in Brent? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Brent has bus lanes on the A5 (Edgware Road), Kilburn High Road, and routes around Wembley. Camera enforcement catches drivers regularly.

## Key Locations

The A5 (Edgware Road) through Brent has camera-enforced bus lanes. Kilburn High Road and Willesden High Road also feature enforcement. Wembley area routes have additional restrictions on event days.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are particularly common near Wembley.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Wembley Stadium events trigger extensive parking restrictions.', 'Kilburn High Road is a major enforcement hotspot.', 'Event-day signage at Wembley is frequently inadequate.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A5 (Edgware Road) has camera-enforced bus lanes.', 'Kilburn High Road features enforcement.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Brent parking fine?', answer: 'Challenge informally within 28 days to Brent Council. London Tribunals is the final step.' },
      { question: 'Are Wembley match day parking restrictions enforceable?', answer: 'Yes, but only if signs were properly displayed in advance. Late or missing signs are grounds for appeal.' },
      { question: 'How much is a parking fine in Brent?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park for Wembley events?', answer: 'Wembley Stadium has official paid parking. Surrounding streets are heavily restricted on event days.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine in Brent?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A5?', answer: 'Check your PCN. Some sections are TfL red routes.' },
    ],
  },
  {
    borough: 'Ealing',
    slugBase: 'ealing',
    councilName: 'London Borough of Ealing',
    parkingHotspots: ['Ealing Broadway and The Broadway shopping centre', 'Acton High Street', 'Southall Broadway and market area', 'Hanwell and Greenford town centres', 'Northolt and Perivale', 'Ealing Common and Haven Green'],
    parkingContent: `## Got a Parking Fine in Ealing?

**Got a parking fine in Ealing? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Ealing is a large west London borough covering Ealing Broadway, Acton, Southall, Hanwell, and Greenford. The council enforces parking across multiple busy town centres, with Ealing Broadway being the biggest hotspot.

## Common Fine Locations

Ealing Broadway and The Broadway shopping area have extensive meters and CPZs. Haven Green and Bond Street catch visitors. Acton High Street and Southall Broadway have busy shopping streets with complex restrictions. Southall market days increase enforcement activity.

[Check your Ealing PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues, meter problems, and permit confusion are common grounds. Challenge within 28 days to Ealing Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Ealing?

**Got a bus lane fine in Ealing? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Ealing has bus lanes on the A40 (Western Avenue), Uxbridge Road, and the A4 corridor. These major west London routes have camera enforcement.

## Key Locations

The A40 through Ealing has camera-enforced bus lanes. Uxbridge Road from Acton through Ealing Broadway is another enforcement area. The A4 (Great West Road) on the borough's southern border also features cameras.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues and worn markings are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Ealing Broadway is the biggest enforcement hotspot.', 'Southall market days increase enforcement activity.', 'The borough covers multiple town centres with separate CPZs.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A40 (Western Avenue) has camera-enforced bus lanes.', 'Uxbridge Road features enforcement through Acton and Ealing.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal an Ealing parking fine?', answer: 'Challenge informally within 28 days to Ealing Council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in Ealing?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Ealing Broadway?', answer: 'The Ealing Broadway Shopping Centre has paid parking. Street meters have short maximum stays.' },
      { question: 'Can I appeal if the meter was broken?', answer: 'Yes. A faulty meter is a valid defence. Photograph the meter as evidence.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine in Ealing?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal A40 bus lane fines?', answer: 'Yes. The A40 is a TfL red route. Signage issues are valid grounds.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on Uxbridge Road?', answer: 'Ealing Council manages borough road sections. Check your PCN header.' },
    ],
  },
  {
    borough: 'Hounslow',
    slugBase: 'hounslow',
    councilName: 'London Borough of Hounslow',
    parkingHotspots: ['Hounslow High Street', 'Chiswick High Road and Turnham Green', 'Brentford and the new stadium area', 'Heathrow approach roads', 'Isleworth and Osterley', 'Feltham town centre'],
    parkingContent: `## Got a Parking Fine in Hounslow?

**Got a parking fine in Hounslow? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Hounslow covers west London from Chiswick and Brentford through to Hounslow town centre and areas near Heathrow Airport. The borough enforces parking across its busy town centres and around Brentford FC's stadium.

## Common Fine Locations

Chiswick High Road and Turnham Green are premium shopping areas with expensive meters and strict CPZs. Brentford has seen increased enforcement since the new Brentford Community Stadium opened. Hounslow High Street has metered bays and surrounding restrictions.

[Check your Hounslow PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage changes around new developments, meter issues, and permit errors are common grounds. Challenge within 28 days to Hounslow Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Hounslow?

**Got a bus lane fine in Hounslow? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Hounslow has bus lanes on the A4 (Great West Road), A315 (Chiswick High Road), and routes approaching Heathrow. Camera enforcement is active on these major corridors.

## Key Locations

The A4 (Great West Road) through Hounslow has extensive bus lane cameras. Chiswick High Road also features enforcement. Routes near Heathrow, including Bath Road and the A30, have restricted sections.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Chiswick High Road has some of west London\'s most expensive meters.', 'Brentford stadium events trigger increased enforcement.', 'Hounslow town centre has extensive restrictions.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A4 (Great West Road) has extensive bus lane cameras.', 'Chiswick High Road features enforcement.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Hounslow parking fine?', answer: 'Challenge informally within 28 days to Hounslow Council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in Hounslow?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Are there match day restrictions near Brentford stadium?', answer: 'Yes. Event-day restrictions apply around the Brentford Community Stadium.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear or obscured signage is a valid appeal ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal A4 bus lane fines?', answer: 'Yes. The A4 is a TfL red route. Signage issues are valid grounds.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes near Heathrow?', answer: 'TfL manages major routes. Hounslow Council handles borough roads.' },
    ],
  },
  {
    borough: 'Richmond upon Thames',
    slugBase: 'richmond',
    councilName: 'London Borough of Richmond upon Thames',
    parkingHotspots: ['Richmond town centre and riverside', 'Twickenham Stadium event day restrictions', 'Kew Gardens surrounding streets', 'Hampton Court area', 'East Sheen and Mortlake', 'Teddington and Hampton Hill'],
    parkingContent: `## Got a Parking Fine in Richmond?

**Got a parking fine in Richmond upon Thames? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Richmond upon Thames covers south-west London from Kew and Richmond through Twickenham, Teddington, and Hampton Court. The borough attracts millions of visitors to its parks, gardens, and sporting venues, creating significant parking enforcement activity.

## Common Fine Locations

Richmond town centre and the riverside area have strict restrictions and expensive meters. Twickenham Stadium events trigger wide-area parking restrictions. Kew Gardens surrounding streets see enforcement spikes, particularly on weekends and holidays. Hampton Court Palace visitors often receive fines for overstaying.

[Check your Richmond PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Event-day signage at Twickenham and tourist-area restrictions near Kew and Hampton Court are common sources of unfair fines. Challenge within 28 days to Richmond Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Richmond?

**Got a bus lane fine in Richmond upon Thames? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Richmond has fewer bus lanes than inner London boroughs, but enforcement exists on the A316 (Twickenham Road), A305, and routes through Richmond town centre.

## Key Locations

The A316 approaching Twickenham has camera-enforced sections. Richmond town centre has restricted bus lanes. The A205 (South Circular) through Mortlake and East Sheen also features enforcement.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues and worn markings are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Twickenham Stadium events trigger wide-area parking restrictions.', 'Kew Gardens and Hampton Court attract millions of visitors.', 'Richmond town centre has expensive meters and strict CPZs.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A316 has camera-enforced bus lane sections.', 'Richmond has fewer bus lanes than inner London boroughs.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Richmond parking fine?', answer: 'Challenge informally within 28 days to Richmond Council. London Tribunals is the final step.' },
      { question: 'Are there rugby match day restrictions at Twickenham?', answer: 'Yes. Extensive restrictions apply around Twickenham Stadium on match days. Temporary signs should be posted in advance.' },
      { question: 'How much is a parking fine in Richmond?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park near Kew Gardens?', answer: 'Very limited metered bays exist nearby. Consider the Kew Gardens car park (paid) or arriving by public transport.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A316?', answer: 'TfL manages parts of the A316. Check your PCN header.' },
    ],
  },
  {
    borough: 'Kingston upon Thames',
    slugBase: 'kingston',
    councilName: 'Royal Borough of Kingston upon Thames',
    parkingHotspots: ['Kingston town centre and Bentall Centre', 'Surbiton station area', 'New Malden High Street', 'Norbiton and Kingston Hill', 'Chessington and Hook area', 'Kingston riverside and bridge approach'],
    parkingContent: `## Got a Parking Fine in Kingston?

**Got a parking fine in Kingston upon Thames? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Kingston upon Thames is a busy south-west London borough centred on its historic market town. The town centre, Surbiton, and New Malden all have active parking enforcement. Kingston's popular shopping centre and riverside attract many visitors who receive fines.

## Common Fine Locations

Kingston town centre and the Bentall Centre area have extensive meters and CPZs. Surbiton station area has restricted parking. New Malden High Street has metered bays and permit zones. The riverside near Kingston Bridge catches visitors to restaurants and pubs.

[Check your Kingston PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues, meter problems, and permit confusion are common grounds. Challenge within 28 days to Kingston Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Kingston?

**Got a bus lane fine in Kingston upon Thames? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Kingston has bus lanes on the A3 (Kingston bypass approach), London Road, and routes through the town centre. Camera enforcement is active.

## Key Locations

The A3 approach and London Road into Kingston have camera-enforced bus lanes. The town centre also has restricted bus-only sections.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Kingston town centre is a major shopping destination.', 'Surbiton station area has restricted parking.', 'The riverside attracts visitors who receive fines.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A3 approach has camera-enforced bus lanes.', 'London Road into Kingston features enforcement.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Kingston parking fine?', answer: 'Challenge informally within 28 days to Kingston Council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in Kingston?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Kingston town centre?', answer: 'Several multi-storey car parks serve the town centre. Street parking is mostly metered or permit-only.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear or obscured signage is a valid appeal ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal if I was turning left?', answer: 'Yes. Left turns across bus lanes are generally permitted.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A3?', answer: 'TfL manages the A3 as a trunk road. Check your PCN header.' },
    ],
  },
  {
    borough: 'Merton',
    slugBase: 'merton',
    councilName: 'London Borough of Merton',
    parkingHotspots: ['Wimbledon town centre and village', 'Wimbledon Championships event restrictions', 'Mitcham town centre', 'Colliers Wood and South Wimbledon', 'Morden station area', 'Raynes Park and Motspur Park'],
    parkingContent: `## Got a Parking Fine in Merton?

**Got a parking fine in Merton? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Merton is best known for the Wimbledon Championships, which triggers the most extensive event-day parking restrictions in London each summer. Beyond tennis season, the borough covers Wimbledon, Mitcham, Colliers Wood, and Morden, all with active enforcement.

## Common Fine Locations

Wimbledon town centre and the village have expensive meters and strict CPZs. During the Championships (two weeks in June/July), restrictions extend across a huge area, with temporary signs that are not always clear. Mitcham town centre, Colliers Wood, and Morden station have metered areas.

[Check your Merton PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Wimbledon Championships temporary signage is a frequent source of unfair fines. Challenge within 28 days to Merton Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Merton?

**Got a bus lane fine in Merton? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Merton has bus lanes on the A24 (London Road/Morden Road), A238, and routes through Wimbledon. Camera enforcement catches drivers on these south London routes.

## Key Locations

The A24 through Morden and Colliers Wood has camera-enforced bus lanes. Wimbledon town centre also has bus-only sections. The A238 through Mitcham features enforcement.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Wimbledon Championships trigger London\'s most extensive event-day restrictions.', 'Wimbledon town centre has expensive meters.', 'Morden station area has active enforcement.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A24 through Morden has camera-enforced bus lanes.', 'Wimbledon town centre has bus-only sections.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Merton parking fine?', answer: 'Challenge informally within 28 days to Merton Council. London Tribunals is the final step.' },
      { question: 'Can I appeal a Wimbledon Championships parking fine?', answer: 'Yes. Temporary event signage must be properly displayed. If signs were late, missing, or unclear, you have grounds.' },
      { question: 'How much is a parking fine in Merton?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park for Wimbledon Championships?', answer: 'Official event parking is available. Most surrounding streets are heavily restricted during the Championships.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A24?', answer: 'TfL manages parts as a red route. Check your PCN header.' },
    ],
  },
  {
    borough: 'Sutton',
    slugBase: 'sutton',
    councilName: 'London Borough of Sutton',
    parkingHotspots: ['Sutton town centre and High Street', 'Cheam Village', 'Carshalton and Wallington', 'Worcester Park', 'Belmont and Banstead borders', 'St Helier area'],
    parkingContent: `## Got a Parking Fine in Sutton?

**Got a parking fine in Sutton? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Sutton is an outer London borough in south-west London, covering Sutton town centre, Cheam, Carshalton, Wallington, and Worcester Park. While enforcement is less intense than inner London, the council still issues thousands of PCNs each year.

## Common Fine Locations

Sutton High Street and the town centre have metered bays and CPZs. Cheam Village has limited parking with strict restrictions. Carshalton and Wallington have expanding permit zones.

[Check your Sutton PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues and meter problems are common grounds. Challenge within 28 days to Sutton Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Sutton?

**Got a bus lane fine in Sutton? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Sutton has limited bus lane enforcement compared to inner London, but camera-enforced lanes exist on the A217 and routes through Sutton town centre.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Sutton town centre has the most active enforcement.', 'Cheam Village has limited parking with strict rules.', 'Enforcement is less intense than inner London.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A217 has camera-enforced bus lane sections.', 'Sutton has limited bus lane enforcement compared to inner London.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Sutton parking fine?', answer: 'Challenge informally within 28 days to Sutton Council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in Sutton?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Sutton town centre?', answer: 'Several car parks serve the town centre. Street parking is metered or permit-only in central areas.' },
      { question: 'Can I appeal if signs were obscured?', answer: 'Yes. Obscured signage is a valid appeal ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes in Sutton?', answer: 'Sutton Council manages borough road bus lanes. TfL handles red routes.' },
    ],
  },
  {
    borough: 'Croydon',
    slugBase: 'croydon',
    councilName: 'London Borough of Croydon',
    parkingHotspots: ['Croydon town centre and Whitgift Centre', 'West Croydon and East Croydon station areas', 'Purley Way retail parks', 'Thornton Heath and Norbury', 'Crystal Palace borders', 'Selhurst and Selhurst Park (Crystal Palace FC)'],
    parkingContent: `## Got a Parking Fine in Croydon?

**Got a parking fine in Croydon? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Croydon is one of London's largest boroughs, with a busy town centre, two major railway stations, and Crystal Palace FC's stadium. The council enforces parking vigorously, particularly in the town centre and around event venues.

## Common Fine Locations

Croydon town centre has extensive meters and CPZs. The areas around East Croydon and West Croydon stations have strict restrictions. Selhurst Park (Crystal Palace FC) triggers match-day enforcement. Purley Way retail parks have private parking enforcement separate from the council. Thornton Heath and Norbury have residential zones.

[Check your Croydon PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Match-day signage issues, meter problems, and redevelopment-related signage changes are common grounds. Challenge within 28 days to Croydon Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Croydon?

**Got a bus lane fine in Croydon? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Croydon has bus lanes on the A23 (London Road/Brighton Road), A232, and routes through the town centre. The Croydon tram network also creates additional restrictions for drivers.

## Key Locations

The A23 through Croydon has camera-enforced bus lanes. The town centre has bus and tram priority areas. Purley Way and the A232 (Croydon Road) also feature enforcement.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues, especially around tram routes, are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Croydon town centre has extensive enforcement.', 'Crystal Palace FC match days trigger additional restrictions.', 'The tram network creates additional road restrictions.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A23 through Croydon has camera-enforced bus lanes.', 'Tram routes create additional restrictions for drivers.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Croydon parking fine?', answer: 'Challenge informally within 28 days to Croydon Council. London Tribunals is the final step.' },
      { question: 'Are Crystal Palace match day restrictions enforceable?', answer: 'Yes, if signs were properly displayed. Late or missing temporary signs are grounds for appeal.' },
      { question: 'How much is a parking fine in Croydon?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Is Purley Way parking enforced by the council?', answer: 'Retail parks on Purley Way often have private parking enforcement. Check your PCN issuer.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I get fined for driving on tram tracks?', answer: 'Yes. Tram-only sections are enforced by camera. If signage was unclear, you can appeal.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A23?', answer: 'TfL manages parts of the A23 as a red route. Check your PCN header.' },
    ],
  },
  {
    borough: 'Bromley',
    slugBase: 'bromley',
    councilName: 'London Borough of Bromley',
    parkingHotspots: ['Bromley town centre and The Glades', 'Beckenham High Street', 'Orpington town centre', 'Chislehurst and Petts Wood', 'Crystal Palace Park area', 'Biggin Hill'],
    parkingContent: `## Got a Parking Fine in Bromley?

**Got a parking fine in Bromley? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Bromley is London's largest borough by area, covering a huge swathe of south-east London from Crystal Palace and Beckenham through Bromley town centre to Orpington, Chislehurst, and Biggin Hill. The council enforces parking across its many town centres.

## Common Fine Locations

Bromley town centre and The Glades shopping centre have extensive meters and CPZs. Beckenham High Street has metered bays. Orpington town centre, Chislehurst, and Petts Wood all have parking restrictions.

[Check your Bromley PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues and meter problems are common grounds. Challenge within 28 days to Bromley Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Bromley?

**Got a bus lane fine in Bromley? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Bromley has limited bus lane enforcement compared to inner London, but camera-enforced lanes exist on the A21, A222, and routes through Bromley town centre.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Bromley is London\'s largest borough by area.', 'Bromley town centre and The Glades are the main enforcement area.', 'Multiple outer town centres (Orpington, Beckenham) have restrictions.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A21 has camera-enforced bus lane sections.', 'Bromley has limited bus lanes compared to inner London.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Bromley parking fine?', answer: 'Challenge informally within 28 days to Bromley Council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in Bromley?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Bromley town centre?', answer: 'The Glades has paid parking. Several council car parks also serve the area.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear or obscured signage is a valid ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A21?', answer: 'Check your PCN header. TfL manages some sections.' },
    ],
  },
  {
    borough: 'Bexley',
    slugBase: 'bexley',
    councilName: 'London Borough of Bexley',
    parkingHotspots: ['Bexleyheath Broadway', 'Sidcup High Street', 'Erith town centre', 'Welling High Street', 'Crayford and Dartford borders', 'Thamesmead area'],
    parkingContent: `## Got a Parking Fine in Bexley?

**Got a parking fine in Bexley? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Bexley covers outer south-east London from Thamesmead and Erith through Bexleyheath, Sidcup, and Welling. The borough has a moderate level of parking enforcement focused on its town centres.

## Common Fine Locations

Bexleyheath Broadway is the main enforcement area with meters and CPZs. Sidcup High Street, Erith, and Welling all have restricted parking. Crayford and areas near the Dartford crossing see enforcement.

[Check your Bexley PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues and meter problems are common. Challenge within 28 days to Bexley Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Bexley?

**Got a bus lane fine in Bexley? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Bexley has limited bus lane enforcement, with cameras on the A2 corridor and routes through Bexleyheath.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Bexleyheath Broadway is the main enforcement area.', 'The borough has moderate enforcement compared to inner London.', 'Crayford borders Dartford with some cross-boundary confusion.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A2 corridor has some camera enforcement.', 'Bexley has limited bus lanes.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Bexley parking fine?', answer: 'Challenge informally within 28 days to Bexley Council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in Bexley?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Bexleyheath?', answer: 'The Broadway Centre has paid parking. Street meters and council car parks are available.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear or obscured signage is a valid ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A2?', answer: 'TfL manages the A2 as a trunk road. Check your PCN header.' },
    ],
  },
  {
    borough: 'Havering',
    slugBase: 'havering',
    councilName: 'London Borough of Havering',
    parkingHotspots: ['Romford town centre and The Liberty', 'Hornchurch High Street', 'Upminster station area', 'Harold Hill', 'Rainham and Beam Park', 'Collier Row'],
    parkingContent: `## Got a Parking Fine in Havering?

**Got a parking fine in Havering? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Havering covers outer east London, including Romford, Hornchurch, Upminster, and Rainham. Romford town centre is the main enforcement area, with its busy shopping district and nightlife attracting many drivers.

## Common Fine Locations

Romford town centre and The Liberty shopping centre area have extensive meters and CPZs. Hornchurch High Street and Upminster station have restrictions. Rainham and Harold Hill are expanding enforcement areas.

[Check your Havering PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues and meter problems are common. Challenge within 28 days to Havering Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Havering?

**Got a bus lane fine in Havering? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Havering has bus lanes on the A12, A13, and routes through Romford town centre. These major routes connect east London to Essex.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Romford town centre is the main enforcement area.', 'Hornchurch and Upminster have active enforcement.', 'The borough is one of outer London\'s busiest for parking fines.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A12 and A13 have camera-enforced bus lanes.', 'Romford town centre has bus-only sections.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Havering parking fine?', answer: 'Challenge informally within 28 days to Havering Council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in Havering?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Romford?', answer: 'The Liberty has paid parking. Several council car parks serve the town centre.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear signage is a valid ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Who enforces bus lanes on the A12?', answer: 'TfL manages the A12. Check your PCN header.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Can I appeal if I was avoiding an obstruction?', answer: 'Yes. This is a valid defence.' },
    ],
  },
  {
    borough: 'Barking and Dagenham',
    slugBase: 'barking-dagenham',
    councilName: 'London Borough of Barking and Dagenham',
    parkingHotspots: ['Barking town centre', 'Dagenham Heathway', 'Chadwell Heath and Goodmayes', 'Becontree and Becontree Heath', 'Thames Road industrial area', 'Barking Riverside new development'],
    parkingContent: `## Got a Parking Fine in Barking and Dagenham?

**Got a parking fine in Barking and Dagenham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Barking and Dagenham covers outer east London with enforcement focused on Barking town centre and Dagenham Heathway. The borough has been undergoing significant regeneration, and parking restrictions have changed in many areas.

## Common Fine Locations

Barking town centre has meters and CPZs. Dagenham Heathway shopping area has restrictions. Barking Riverside, a major new development, has new and changing parking rules.

[Check your PCN for free](/appeal) before paying.

## Appeal Grounds and Process

New development signage changes and meter issues are common grounds. Challenge within 28 days to the council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Barking and Dagenham?

**Got a bus lane fine in Barking and Dagenham? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The borough has bus lanes on the A13 and A1153 (Ripple Road/Longbridge Road). Camera enforcement is active on these routes.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Barking town centre is the main enforcement area.', 'Barking Riverside development has changing parking rules.', 'The borough has moderate enforcement.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A13 has camera-enforced bus lanes through the borough.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.', 'TfL manages red route sections.'],
    parkingFaqs: [
      { question: 'How do I appeal?', answer: 'Challenge informally within 28 days to the council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Has parking changed with Barking Riverside?', answer: 'Yes. New restrictions have been introduced. If signage was inadequate, this is grounds for appeal.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear or new signage is a valid ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Who enforces bus lanes on the A13?', answer: 'TfL manages the A13 as a red route.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Can I appeal?', answer: 'Yes. Challenge within 28 days with evidence of signage issues.' },
    ],
  },
  {
    borough: 'Redbridge',
    slugBase: 'redbridge',
    councilName: 'London Borough of Redbridge',
    parkingHotspots: ['Ilford town centre and The Exchange', 'Wanstead High Street', 'South Woodford and George Lane', 'Gants Hill and Barkingside', 'Woodford Green', 'Hainault and Chigwell borders'],
    parkingContent: `## Got a Parking Fine in Redbridge?

**Got a parking fine in Redbridge? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Redbridge covers north-east London from Wanstead and South Woodford through Ilford to Hainault and Woodford. Ilford town centre is the main enforcement area.

## Common Fine Locations

Ilford town centre and The Exchange shopping area have extensive restrictions. Wanstead High Street and South Woodford (George Lane) have metered bays. Gants Hill and Barkingside have CPZs.

[Check your Redbridge PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues and meter problems are common. Challenge within 28 days to Redbridge Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Redbridge?

**Got a bus lane fine in Redbridge? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Redbridge has bus lanes on the A12, Eastern Avenue (A12), and Ilford High Road. Camera enforcement catches drivers on these routes.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Ilford town centre is the main enforcement area.', 'Wanstead and South Woodford have busy high streets with restrictions.', 'The borough has moderate enforcement levels.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A12 (Eastern Avenue) has camera enforcement.', 'Ilford High Road features bus lanes.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Redbridge parking fine?', answer: 'Challenge informally within 28 days to Redbridge Council. London Tribunals is the final step.' },
      { question: 'How much is a parking fine?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Ilford?', answer: 'The Exchange has paid parking. Street parking is mostly metered or permit-only.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear signage is a valid ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Who enforces bus lanes on the A12?', answer: 'TfL manages the A12. Check your PCN header.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Can I appeal if markings were worn?', answer: 'Yes. Worn road markings are a valid ground.' },
    ],
  },
  {
    borough: 'Waltham Forest',
    slugBase: 'waltham-forest',
    councilName: 'London Borough of Waltham Forest',
    parkingHotspots: ['Walthamstow Village and market', 'Leyton and Leytonstone High Roads', 'Chingford town centre', 'Low Traffic Neighbourhood restrictions', 'Blackhorse Road area', 'Wood Street and Forest Road'],
    parkingContent: `## Got a Parking Fine in Waltham Forest?

**Got a parking fine in Waltham Forest? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Waltham Forest covers north-east London, including Walthamstow, Leyton, Leytonstone, and Chingford. The borough has been at the centre of London's Low Traffic Neighbourhood (LTN) programme, creating new restrictions and enforcement areas.

## Common Fine Locations

Walthamstow Village and the area around Walthamstow Market have extensive CPZs. Leyton and Leytonstone High Roads have meters and restrictions. Low Traffic Neighbourhoods across the borough have camera-enforced road closures.

[Check your Waltham Forest PCN for free](/appeal) before paying.

## Appeal Grounds and Process

LTN signage and enforcement issues are a major source of appeals. Challenge within 28 days to Waltham Forest Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Waltham Forest?

**Got a bus lane fine in Waltham Forest? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Waltham Forest has bus lanes on the A12, Lea Bridge Road, and Hoe Street. Camera enforcement catches drivers on these routes.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Low Traffic Neighbourhoods create new enforcement zones.', 'Walthamstow Village and market are major hotspots.', 'The borough has been expanding CPZs significantly.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A12 and Lea Bridge Road have camera enforcement.', 'Hoe Street features bus lanes.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Waltham Forest parking fine?', answer: 'Challenge informally within 28 days. London Tribunals is the final step.' },
      { question: 'Can I appeal an LTN fine?', answer: 'Yes. If LTN signage was unclear, missing, or inadequate, you have strong grounds.' },
      { question: 'How much is a parking fine?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'What are Low Traffic Neighbourhoods?', answer: 'LTNs use road closures and camera enforcement to restrict through-traffic in residential areas. Many drivers receive fines for entering closed roads.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A12?', answer: 'TfL manages the A12. Check your PCN header.' },
    ],
  },
  {
    borough: 'Haringey',
    slugBase: 'haringey',
    councilName: 'London Borough of Haringey',
    parkingHotspots: ['Tottenham Hotspur Stadium event restrictions', 'Wood Green and Shopping City', 'Crouch End and Muswell Hill', 'Hornsey and Stroud Green', 'Seven Sisters and West Green Road', 'Alexandra Palace event parking'],
    parkingContent: `## Got a Parking Fine in Haringey?

**Got a parking fine in Haringey? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Haringey covers north London from Muswell Hill and Crouch End through Wood Green and Tottenham. The borough is home to Tottenham Hotspur Stadium and Alexandra Palace, both of which trigger significant event-day parking enforcement.

## Common Fine Locations

Tottenham Hotspur Stadium match days create wide-area restrictions. Wood Green and Shopping City have meters and CPZs. Crouch End and Muswell Hill have strict residential zones. Alexandra Palace events trigger restrictions.

[Check your Haringey PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Match-day and event signage issues are common grounds. Challenge within 28 days to Haringey Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Haringey?

**Got a bus lane fine in Haringey? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Haringey has bus lanes on the A10, A105 (Green Lanes), and routes through Wood Green and Tottenham. Camera enforcement catches drivers regularly.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Spurs Stadium events trigger wide-area restrictions.', 'Wood Green is a major enforcement hotspot.', 'Alexandra Palace events create additional restrictions.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A10 through Tottenham has camera enforcement.', 'Green Lanes (A105) features bus lanes.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Haringey parking fine?', answer: 'Challenge informally within 28 days. London Tribunals is the final step.' },
      { question: 'Are Spurs match day restrictions enforceable?', answer: 'Yes, if signs were properly displayed. Inadequate temporary signage is grounds for appeal.' },
      { question: 'How much is a parking fine?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park for Alexandra Palace?', answer: 'Alexandra Palace has its own car parks. Surrounding streets have event-day restrictions.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes on the A10?', answer: 'TfL manages parts of the A10 as a red route.' },
    ],
  },
  {
    borough: 'Enfield',
    slugBase: 'enfield',
    councilName: 'London Borough of Enfield',
    parkingHotspots: ['Enfield Town and Church Street', 'Edmonton Green', 'Southgate and Palmers Green', 'Winchmore Hill', 'Cockfosters and Hadley Wood', 'Enfield Lock and Brimsdown'],
    parkingContent: `## Got a Parking Fine in Enfield?

**Got a parking fine in Enfield? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Enfield is one of London's northernmost boroughs, covering Enfield Town, Edmonton, Southgate, Palmers Green, and Cockfosters. Enforcement is focused on the main town centres.

## Common Fine Locations

Enfield Town and Church Street have meters and CPZs. Edmonton Green has restrictions. Southgate and Palmers Green have residential zones and shopping areas with enforcement.

[Check your Enfield PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues are common. Challenge within 28 days to Enfield Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Enfield?

**Got a bus lane fine in Enfield? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Enfield has bus lanes on the A10 (Great Cambridge Road), A1010, and routes through Edmonton and Enfield Town.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Enfield Town is the main enforcement area.', 'Edmonton Green has active restrictions.', 'The borough is one of London\'s northernmost.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A10 (Great Cambridge Road) has camera enforcement.', 'Edmonton has bus lane cameras.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal an Enfield parking fine?', answer: 'Challenge informally within 28 days. London Tribunals is the final step.' },
      { question: 'How much is a parking fine?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Enfield Town?', answer: 'Several council car parks serve the town centre. Street parking is mostly restricted.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear signage is a valid ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Who enforces the A10 bus lane?', answer: 'TfL manages parts of the A10. Check your PCN header.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Can I appeal?', answer: 'Yes. Challenge within 28 days.' },
    ],
  },
  {
    borough: 'Hillingdon',
    slugBase: 'hillingdon',
    councilName: 'London Borough of Hillingdon',
    parkingHotspots: ['Uxbridge town centre', 'Heathrow Airport surrounding area', 'Hayes and Hayes Town', 'Ruislip High Street', 'Northwood and Northwood Hills', 'West Drayton station area'],
    parkingContent: `## Got a Parking Fine in Hillingdon?

**Got a parking fine in Hillingdon? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Hillingdon is London's westernmost borough, home to Heathrow Airport. The borough covers Uxbridge, Hayes, Ruislip, Northwood, and West Drayton. Airport-related parking enforcement is a major issue.

## Common Fine Locations

Uxbridge town centre has meters and CPZs. Heathrow surrounding areas have extensive restrictions to prevent airport parking on residential streets. Hayes and Hayes Town have restrictions near the Elizabeth line station. Ruislip High Street has metered bays.

[Check your Hillingdon PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Airport-area signage and residential restrictions are common grounds. Challenge within 28 days to Hillingdon Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Hillingdon?

**Got a bus lane fine in Hillingdon? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Hillingdon has bus lanes on the A4020 (Uxbridge Road), A40, and routes near Heathrow Airport. Camera enforcement is active.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Heathrow Airport drives much of the borough\'s parking enforcement.', 'Uxbridge town centre is the main commercial enforcement area.', 'Anti-airport-parking restrictions cover wide residential areas.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A40 and A4020 have camera-enforced bus lanes.', 'Routes near Heathrow have enforcement.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Hillingdon parking fine?', answer: 'Challenge informally within 28 days. London Tribunals is the final step.' },
      { question: 'Can I park near Heathrow on residential streets?', answer: 'Most streets near Heathrow have anti-airport-parking restrictions. Fines are heavily enforced.' },
      { question: 'How much is a parking fine?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear signage is a valid ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Who enforces bus lanes on the A40?', answer: 'TfL manages the A40. Check your PCN header.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Can I appeal?', answer: 'Yes. Challenge within 28 days.' },
    ],
  },
  {
    borough: 'Harrow',
    slugBase: 'harrow',
    councilName: 'London Borough of Harrow',
    parkingHotspots: ['Harrow town centre and St Ann\'s Road', 'Wealdstone and High Street', 'Stanmore and The Broadway', 'Pinner High Street', 'Kenton and Kingsbury borders', 'Harrow on the Hill station area'],
    parkingContent: `## Got a Parking Fine in Harrow?

**Got a parking fine in Harrow? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Harrow covers north-west London, including Harrow town centre, Wealdstone, Stanmore, and Pinner. The borough has moderate parking enforcement focused on its town centres.

## Common Fine Locations

Harrow town centre, especially around St Ann's Road and the shopping areas, has extensive meters and CPZs. Wealdstone, Stanmore, and Pinner High Street all have restrictions. Harrow on the Hill near the school and station has limited parking.

[Check your Harrow PCN for free](/appeal) before paying.

## Appeal Grounds and Process

Signage issues and meter problems are common. Challenge within 28 days to Harrow Council.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in Harrow?

**Got a bus lane fine in Harrow? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

Harrow has bus lanes on the A409, A404, and routes through Harrow town centre and Wealdstone.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days. Signage issues are valid grounds.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['Harrow town centre is the main enforcement area.', 'Pinner High Street has limited parking.', 'Enforcement is moderate compared to inner London.', 'London Tribunals handles escalated appeals.'],
    busLaneLocalInfo: ['A409 and A404 have some camera enforcement.', 'Harrow town centre has bus-only sections.', 'Bus lane fines are £130, reduced to £65 within 14 days.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'How do I appeal a Harrow parking fine?', answer: 'Challenge informally within 28 days. London Tribunals is the final step.' },
      { question: 'How much is a parking fine?', answer: 'Fines are £80 to £130 with a 50% discount within 14 days.' },
      { question: 'Where can I park in Harrow?', answer: 'Several council and private car parks serve the town centre. Street parking is mostly restricted.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Unclear signage is a valid ground.' },
    ],
    busLaneFaqs: [
      { question: 'How much is a bus lane fine?', answer: 'Bus lane fines are £130, reduced to £65 within 14 days.' },
      { question: 'Can I appeal signage issues?', answer: 'Yes. Non-compliant signage is a strong ground.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
      { question: 'Who enforces bus lanes in Harrow?', answer: 'Harrow Council manages borough roads. TfL handles red routes.' },
    ],
  },
  {
    borough: 'City of London',
    slugBase: 'city-of-london',
    councilName: 'City of London Corporation',
    parkingHotspots: ['Bank junction and Threadneedle Street', 'St Paul\'s Cathedral area', 'Liverpool Street and Bishopsgate', 'Barbican and Golden Lane', 'Fleet Street and Chancery Lane', 'Tower Hill and Fenchurch Street'],
    parkingContent: `## Got a Parking Fine in the City of London?

**Got a parking fine in the City of London? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The City of London, also known as the Square Mile, is London's historic financial centre. Despite being only one square mile in area, the City issues a significant number of PCNs due to extremely strict parking rules. Almost no on-street parking is available during business hours.

## Common Fine Locations

Bank junction has been closed to most traffic. St Paul's Cathedral area, Liverpool Street station, and the Barbican all have extremely limited parking. Fleet Street, Chancery Lane, and the streets around the Inns of Court catch visitors and deliveries.

Loading restrictions are the biggest issue. The City has very specific loading windows, and enforcement is swift.

[Check your City of London PCN for free](/appeal) before paying.

## Appeal Grounds and Process

The City of London Corporation handles parking enforcement separately from the London boroughs. Challenge within 28 days. The appeal process is the same: informal challenge, formal representation, then London Tribunals.

Loading restriction confusion, signage issues in the City's medieval street layout, and incorrect PCN details are common grounds.

[Start your free assessment](/appeal) for personalised advice.`,
    busLaneContent: `## Got a Bus Lane Fine in the City of London?

**Got a bus lane fine in the City of London? [Start your free assessment](/appeal) and get a personalised appeal letter in minutes.**

The City of London has limited bus lanes, but enforcement exists on routes including Bishopsgate, which has been closed to most traffic. Camera enforcement captures vehicles entering restricted areas.

## Key Locations

Bishopsgate has significant restrictions. Bank junction is closed to most vehicles. London Wall and Moorgate have bus-only sections during peak hours.

[Check your bus lane fine for free](/appeal) for a personalised assessment.

## How to Appeal

Challenge within 28 days to the City of London Corporation. Signage issues in the City's complex street layout are a common ground.

[Start your free assessment](/appeal) for personalised guidance.`,
    parkingLocalInfo: ['The City of London is only one square mile but heavily enforced.', 'Almost no on-street parking is available during business hours.', 'Bank junction is closed to most traffic.', 'The City of London Corporation handles enforcement separately from boroughs.'],
    busLaneLocalInfo: ['Bishopsgate has significant traffic restrictions.', 'Bank junction is closed to most vehicles.', 'The City has limited bus lanes but strict enforcement.', 'London Tribunals handles escalated appeals.'],
    parkingFaqs: [
      { question: 'Can I park in the City of London?', answer: 'On-street parking is extremely limited during business hours. NCP and private car parks are available but expensive.' },
      { question: 'How do I appeal a City of London parking fine?', answer: 'Challenge informally within 28 days to the City of London Corporation. London Tribunals is the final step.' },
      { question: 'How much is a parking fine in the City?', answer: 'Fines are typically £130, with a 50% discount within 14 days.' },
      { question: 'Is the City of London the same as a London borough?', answer: 'No. The City of London Corporation is a separate entity from the 32 London boroughs, with its own enforcement and appeal process.' },
    ],
    busLaneFaqs: [
      { question: 'Can I drive through Bank junction?', answer: 'Most vehicles are restricted during peak hours. Camera enforcement is active.' },
      { question: 'How much is a bus lane fine in the City?', answer: 'Fines are £130, reduced to £65 within 14 days.' },
      { question: 'Is Bishopsgate closed to traffic?', answer: 'Bishopsgate has significant restrictions during peak hours. Check current rules before driving through.' },
      { question: 'Are bus lane fines criminal?', answer: 'No. Civil penalties only.' },
    ],
  },
];

// Generate pages from templates
for (const tmpl of REMAINING_BOROUGHS) {
  // Parking page
  BOROUGH_FINES.push({
    slug: `parking-fine-${tmpl.slugBase}`,
    borough: tmpl.borough,
    fineType: 'parking',
    title: `Appeal a Parking Fine in ${tmpl.borough}`,
    description: `How to challenge a ${tmpl.borough} parking PCN. Local hotspots, appeal process, and your rights.`,
    councilName: tmpl.councilName,
    content: tmpl.parkingContent,
    localInfo: tmpl.parkingLocalInfo,
    commonIssues: tmpl.parkingHotspots,
    faqs: tmpl.parkingFaqs,
    seoTitle: `Appeal a Parking Fine in ${tmpl.borough} | Free`.substring(0, 60),
    seoDescription: `Got a parking fine in ${tmpl.borough}? Check your PCN for free and get a personalised appeal letter. Check your appeal grounds now.`.substring(0, 155),
  });

  // Bus lane page
  BOROUGH_FINES.push({
    slug: `bus-lane-fine-${tmpl.slugBase}`,
    borough: tmpl.borough,
    fineType: 'bus-lane',
    title: `Appeal a Bus Lane Fine in ${tmpl.borough}`,
    description: `How to challenge a ${tmpl.borough} bus lane PCN. Camera locations and appeal tips.`,
    councilName: tmpl.councilName,
    content: tmpl.busLaneContent,
    localInfo: tmpl.busLaneLocalInfo,
    commonIssues: tmpl.parkingHotspots.slice(0, 4),
    faqs: tmpl.busLaneFaqs,
    seoTitle: `Appeal a Bus Lane Fine in ${tmpl.borough} | Free`.substring(0, 60),
    seoDescription: `Got a bus lane fine in ${tmpl.borough}? Free PCN assessment. Check signage compliance and appeal grounds.`.substring(0, 155),
  });
}

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getBoroughFineBySlug(slug: string): BoroughFine | undefined {
  return BOROUGH_FINES.find((bf) => bf.slug === slug);
}

export function getBoroughFinesByBorough(borough: string): BoroughFine[] {
  return BOROUGH_FINES.filter((bf) => bf.borough === borough);
}

export function getBoroughFinesByType(fineType: string): BoroughFine[] {
  return BOROUGH_FINES.filter((bf) => bf.fineType === fineType);
}

export function getAllBoroughFines(): BoroughFine[] {
  return BOROUGH_FINES;
}

export function getAllBoroughs(): string[] {
  return [...new Set(BOROUGH_FINES.map((bf) => bf.borough))].sort();
}

export function getFineTypeLabel(fineType: string): string {
  return FINE_TYPE_LABELS[fineType] || fineType;
}

export function getFineTypeShort(fineType: string): string {
  return FINE_TYPE_SHORT[fineType] || fineType;
}
