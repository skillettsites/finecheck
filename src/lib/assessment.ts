export interface AssessmentInput {
  fineType: 'council' | 'private' | 'bus-lane' | 'congestion';
  // Council fields
  councilName?: string;
  pcnReference?: string;
  contraventionDescription?: string;
  // Private fields
  operatorName?: string;
  ntkReceivedDate?: string;
  parkingEventDate?: string;
  whatHappened?: string;
  // Common fields
  fineDate?: string;
  fineAmount?: number;
  location?: string;
  vehicleReg?: string;
  wasDriver?: 'yes' | 'no' | 'prefer-not-to-say';
  circumstances?: string;
}

export interface DefenceGround {
  id: string;
  title: string;
  description: string;
  strength: 'strong' | 'moderate' | 'weak';
  legalBasis: string;
}

export interface AssessmentResult {
  overallStrength: 'strong' | 'moderate' | 'weak';
  successProbability: number;
  grounds: DefenceGround[];
  deadlineDays: number | null;
  nextSteps: string[];
  letterArguments: string[];
  recommendedProduct: string;
}

function daysBetween(dateA: string, dateB: string): number {
  const a = new Date(dateA);
  const b = new Date(dateB);
  return Math.floor((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

function daysFromToday(dateStr: string): number {
  const d = new Date(dateStr);
  const now = new Date();
  return Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
}

function assessPrivateFine(input: AssessmentInput): AssessmentResult {
  const grounds: DefenceGround[] = [];
  const letterArguments: string[] = [];
  let baseScore = 40;

  // POFA 14-day NtK check (most powerful defence for private fines)
  if (input.parkingEventDate && input.ntkReceivedDate) {
    const daysDiff = daysBetween(input.parkingEventDate, input.ntkReceivedDate);
    if (daysDiff > 14) {
      grounds.push({
        id: 'pofa-ntk-late',
        title: 'Notice to Keeper Served Late (POFA 2012)',
        description: `The Notice to Keeper was received ${daysDiff} days after the parking event. Under the Protection of Freedoms Act 2012, Schedule 4, the operator must serve the NtK within 14 days. Late service means keeper liability cannot be established, and the operator cannot pursue the registered keeper for payment.`,
        strength: 'strong',
        legalBasis: 'Protection of Freedoms Act 2012, Schedule 4, Paragraph 9',
      });
      letterArguments.push('POFA 2012 Schedule 4: NtK served outside the 14-day statutory window');
      baseScore += 30;
    } else if (daysDiff >= 12) {
      grounds.push({
        id: 'pofa-ntk-borderline',
        title: 'Notice to Keeper Timing is Borderline',
        description: `The NtK appears to have been served ${daysDiff} days after the event. This is close to the 14-day limit. If you can demonstrate the NtK arrived even one day later than you initially recorded, this becomes a strong defence.`,
        strength: 'moderate',
        legalBasis: 'Protection of Freedoms Act 2012, Schedule 4, Paragraph 9',
      });
      letterArguments.push('POFA 2012: NtK timing is borderline and may exceed the statutory limit');
      baseScore += 15;
    }
  }

  // Driver identification
  if (input.wasDriver === 'no' || input.wasDriver === 'prefer-not-to-say') {
    // If NtK was late, this is especially powerful
    const ntkLate = grounds.some((g) => g.id === 'pofa-ntk-late');
    if (ntkLate) {
      grounds.push({
        id: 'keeper-not-driver',
        title: 'Keeper Was Not the Driver',
        description:
          'Since the NtK was served late and you were not the driver, the operator has no valid route to recover payment. They cannot pursue the keeper (late NtK) and do not know who the driver was.',
        strength: 'strong',
        legalBasis: 'Protection of Freedoms Act 2012, Schedule 4',
      });
      letterArguments.push('Keeper was not the driver; combined with late NtK, no liability can be established');
      baseScore += 10;
    } else {
      grounds.push({
        id: 'keeper-not-driver',
        title: 'Keeper Was Not the Driver',
        description:
          'If you were not the driver, the operator can only pursue you as the registered keeper through the POFA 2012 keeper liability provisions. These have strict requirements that the operator must meet, including correct NtK wording and timing.',
        strength: 'moderate',
        legalBasis: 'Protection of Freedoms Act 2012, Schedule 4',
      });
      letterArguments.push('Keeper liability provisions require strict compliance with POFA 2012');
      baseScore += 8;
    }
  }

  // Circumstance-based checks
  const circ = (input.circumstances || '').toLowerCase() + ' ' + (input.whatHappened || '').toLowerCase();

  if (circ.includes('sign') && (circ.includes('unclear') || circ.includes('missing') || circ.includes('hidden') || circ.includes('confus') || circ.includes('not visible') || circ.includes("couldn't see") || circ.includes("could not see"))) {
    grounds.push({
      id: 'signage-inadequate',
      title: 'Inadequate or Non-Compliant Signage',
      description:
        'For a parking charge to be enforceable, the operator must display clear, prominent signage at every entry point and throughout the car park. The terms must be visible, legible, and unambiguous. If signage was missing, hidden, or unclear, the contract between you and the operator may not have been formed.',
      strength: 'strong',
      legalBasis: 'BPA/IPC Code of Practice; ParkingEye v Beavis [2015] UKSC 67',
    });
    letterArguments.push('Signage was inadequate, unclear, or not prominently displayed');
    baseScore += 15;
  }

  if (circ.includes('machine') && (circ.includes('broken') || circ.includes('fault') || circ.includes('not working') || circ.includes('out of order') || circ.includes('error'))) {
    grounds.push({
      id: 'machine-fault',
      title: 'Payment Machine or System Failure',
      description:
        'If the payment machine was out of order or malfunctioning, you were unable to comply with the parking terms through no fault of your own. An operator cannot penalise a motorist for failing to pay when the means of payment was unavailable.',
      strength: 'strong',
      legalBasis: 'BPA/IPC Code of Practice; Consumer Rights Act 2015',
    });
    letterArguments.push('Payment machine was faulty or out of order, preventing compliance');
    baseScore += 15;
  }

  if (circ.includes('app') && (circ.includes('crash') || circ.includes('error') || circ.includes('not working') || circ.includes('fail') || circ.includes("didn't work") || circ.includes('glitch'))) {
    grounds.push({
      id: 'app-failure',
      title: 'Payment App or Digital System Failure',
      description:
        'If the parking app or digital payment system malfunctioned, this prevented you from completing payment. Evidence such as screenshots, bank statements, or app error logs can support this ground.',
      strength: 'moderate',
      legalBasis: 'BPA/IPC Code of Practice; Consumer Rights Act 2015',
    });
    letterArguments.push('Digital payment system or parking app failed, preventing payment');
    baseScore += 10;
  }

  if (circ.includes('grace') || circ.includes('5 minute') || circ.includes('10 minute') || circ.includes('few minutes') || circ.includes('just over') || circ.includes('couple of minutes')) {
    grounds.push({
      id: 'grace-period',
      title: 'Grace Period Not Applied',
      description:
        'Both the BPA and IPC Codes of Practice require operators to provide a grace period (typically 10 minutes) at the start and end of a parking session. If you were charged for a minor overstay within this grace period, the charge may not comply with the Code.',
      strength: 'moderate',
      legalBasis: 'BPA Code of Practice clause 19.4; IPC Code of Practice',
    });
    letterArguments.push('Grace period was not applied as required by the operator Code of Practice');
    baseScore += 10;
  }

  if (circ.includes('medical') || circ.includes('emergency') || circ.includes('hospital') || circ.includes('ambulance') || circ.includes('illness') || circ.includes('disabled')) {
    grounds.push({
      id: 'mitigating-medical',
      title: 'Medical or Emergency Circumstances',
      description:
        'A medical emergency, sudden illness, or disability-related delay constitutes a compelling mitigating circumstance. Operators are expected to consider such circumstances sympathetically under their Code of Practice.',
      strength: 'moderate',
      legalBasis: 'BPA/IPC Code of Practice; Equality Act 2010 (for disability)',
    });
    letterArguments.push('Medical emergency or health-related mitigating circumstances');
    baseScore += 10;
  }

  if (circ.includes('anpr') || circ.includes('camera') || circ.includes('number plate') || circ.includes('wrong car') || circ.includes('wrong vehicle') || circ.includes('misread')) {
    grounds.push({
      id: 'anpr-error',
      title: 'ANPR Camera Misread or Error',
      description:
        'Automatic Number Plate Recognition systems can misread registration plates, especially in poor lighting, rain, or when plates are dirty. If the ANPR evidence is incorrect, the charge is invalid. You can request the ANPR images via a Subject Access Request.',
      strength: 'strong',
      legalBasis: 'Data Protection Act 2018; BPA/IPC Code of Practice',
    });
    letterArguments.push('ANPR camera evidence is inaccurate or disputed');
    baseScore += 15;
  }

  if (circ.includes('valid ticket') || circ.includes('had a ticket') || circ.includes('paid') || circ.includes('displayed') || circ.includes('receipt')) {
    grounds.push({
      id: 'valid-payment',
      title: 'Valid Payment Was Made',
      description:
        'If you had a valid ticket, made a payment, or displayed a valid permit, the charge should not have been issued. Evidence such as the ticket, receipt, bank statement, or payment app confirmation supports this defence.',
      strength: 'strong',
      legalBasis: 'Contract law; BPA/IPC Code of Practice',
    });
    letterArguments.push('Valid payment was made or a ticket was properly displayed');
    baseScore += 15;
  }

  if (circ.includes('loading') || circ.includes('unloading') || circ.includes('delivery') || circ.includes('dropping off') || circ.includes('picking up')) {
    grounds.push({
      id: 'loading-unloading',
      title: 'Loading or Unloading Activity',
      description:
        'If you were actively loading or unloading goods, many parking restrictions include exemptions for this activity. The vehicle must have been stationary only as long as reasonably necessary for the loading/unloading.',
      strength: 'moderate',
      legalBasis: 'Traffic Management Act 2004; BPA/IPC Code of Practice',
    });
    letterArguments.push('Vehicle was engaged in loading or unloading activity');
    baseScore += 8;
  }

  // Fine amount check (disproportionate penalty)
  if (input.fineAmount && input.fineAmount > 100) {
    grounds.push({
      id: 'disproportionate-charge',
      title: 'Charge May Be Disproportionate',
      description: `The charge of \u00a3${input.fineAmount} may be considered a penalty rather than a genuine pre-estimate of loss. Following ParkingEye v Beavis [2015], charges must be proportionate and serve a legitimate interest. Charges significantly above the industry norm of \u00a360-\u00a3100 may be challenged.`,
      strength: 'moderate',
      legalBasis: 'ParkingEye v Beavis [2015] UKSC 67; Consumer Rights Act 2015',
    });
    letterArguments.push('Parking charge may be disproportionate and constitute a penalty');
    baseScore += 8;
  }

  // If no specific grounds found, add general grounds
  if (grounds.length === 0) {
    grounds.push({
      id: 'general-review',
      title: 'General Procedural Review',
      description:
        'Even without specific circumstances, private parking charges must comply with strict procedural requirements. The NtK wording, signage compliance, and operator accreditation can all be checked for technical defects.',
      strength: 'weak',
      legalBasis: 'Protection of Freedoms Act 2012; BPA/IPC Code of Practice',
    });
    letterArguments.push('Request for evidence of procedural compliance');
  }

  // Cap the score
  const successProbability = Math.min(85, Math.max(15, baseScore));

  // Calculate overall strength
  let overallStrength: 'strong' | 'moderate' | 'weak';
  if (successProbability >= 60) {
    overallStrength = 'strong';
  } else if (successProbability >= 40) {
    overallStrength = 'moderate';
  } else {
    overallStrength = 'weak';
  }

  // Calculate deadline
  let deadlineDays: number | null = null;
  if (input.ntkReceivedDate) {
    const daysSinceNtk = daysFromToday(input.ntkReceivedDate);
    deadlineDays = Math.max(0, 28 - daysSinceNtk);
  } else if (input.fineDate) {
    const daysSinceFine = daysFromToday(input.fineDate);
    deadlineDays = Math.max(0, 28 - daysSinceFine);
  }

  // Next steps
  const nextSteps: string[] = [];
  nextSteps.push('Generate your personalised appeal letter with the legal arguments identified above');
  nextSteps.push('Gather supporting evidence (photos, receipts, bank statements, screenshots)');
  nextSteps.push('Submit your appeal to the operator within the deadline');
  nextSteps.push('If rejected, escalate to POPLA (BPA operators) or IAS (IPC operators) for independent review');

  // Recommend product based on strength
  let recommendedProduct = 'standard-letter';
  if (overallStrength === 'strong') {
    recommendedProduct = 'standard-letter';
  } else if (overallStrength === 'moderate') {
    recommendedProduct = 'premium-pack';
  } else {
    recommendedProduct = 'premium-pack';
  }

  return {
    overallStrength,
    successProbability,
    grounds,
    deadlineDays,
    nextSteps,
    letterArguments,
    recommendedProduct,
  };
}

function assessCouncilFine(input: AssessmentInput): AssessmentResult {
  const grounds: DefenceGround[] = [];
  const letterArguments: string[] = [];
  let baseScore = 30;

  // Deadline check
  if (input.fineDate) {
    const daysSinceFine = daysFromToday(input.fineDate);

    if (daysSinceFine <= 14) {
      // Still in discounted period
      grounds.push({
        id: 'discount-period',
        title: 'Still Within Discounted Payment Period',
        description:
          'You are still within the 14-day discount period. If your appeal is unsuccessful, you can still pay the reduced amount. This gives you a risk-free window to challenge the PCN.',
        strength: 'moderate',
        legalBasis: 'Traffic Management Act 2004, Section 78',
      });
      letterArguments.push('Informal challenge submitted within the 14-day discount period');
    }

    if (daysSinceFine > 28) {
      grounds.push({
        id: 'deadline-risk',
        title: 'Appeal Deadline May Have Passed',
        description: `It has been ${daysSinceFine} days since the PCN was issued. The informal challenge period is typically 28 days. However, you may still be able to make formal representations if you have received a Notice to Owner. Act quickly.`,
        strength: 'weak',
        legalBasis: 'Traffic Management Act 2004',
      });
    }
  }

  // Circumstance-based checks
  const circ = (input.circumstances || '').toLowerCase() + ' ' + (input.contraventionDescription || '').toLowerCase();

  if (circ.includes('sign') && (circ.includes('unclear') || circ.includes('missing') || circ.includes('hidden') || circ.includes('confus') || circ.includes('not visible') || circ.includes('obscured'))) {
    grounds.push({
      id: 'signage-tro',
      title: 'Signage or Traffic Regulation Order Issues',
      description:
        'Council parking restrictions must be properly signed and lined in accordance with the Traffic Signs Regulations and General Directions 2016. If signs were missing, obscured, contradictory, or did not match the underlying Traffic Regulation Order (TRO), the PCN may be invalid.',
      strength: 'strong',
      legalBasis: 'TSRGD 2016; Traffic Management Act 2004; R (Herron) v Parking Adjudicator [2011]',
    });
    letterArguments.push('Signage was missing, obscured, or did not comply with TSRGD 2016');
    baseScore += 20;
  }

  if (circ.includes('line') && (circ.includes('faded') || circ.includes('missing') || circ.includes('worn') || circ.includes('unclear'))) {
    grounds.push({
      id: 'road-markings',
      title: 'Road Markings Faded or Missing',
      description:
        'Yellow lines and bay markings must be clearly visible. If the road markings were faded, worn away, or missing, the restriction may not be enforceable. Photographic evidence of the road surface is particularly helpful here.',
      strength: 'strong',
      legalBasis: 'TSRGD 2016; Traffic Management Act 2004',
    });
    letterArguments.push('Road markings were faded, worn, or not clearly visible');
    baseScore += 18;
  }

  if (circ.includes('machine') && (circ.includes('broken') || circ.includes('fault') || circ.includes('not working') || circ.includes('out of order'))) {
    grounds.push({
      id: 'machine-fault',
      title: 'Pay and Display Machine Fault',
      description:
        'If the Pay and Display machine was out of order and no alternative payment method was clearly signposted, you could not comply with the parking restriction. This is a recognised ground for cancellation.',
      strength: 'strong',
      legalBasis: 'Traffic Management Act 2004; Statutory Guidance',
    });
    letterArguments.push('Pay and Display machine was faulty with no alternative payment available');
    baseScore += 18;
  }

  if (circ.includes('loading') || circ.includes('unloading') || circ.includes('delivery')) {
    grounds.push({
      id: 'loading-exemption',
      title: 'Loading or Unloading Exemption',
      description:
        'Most parking restrictions include exemptions for vehicles actively loading or unloading goods. The activity must be continuous and reasonably necessary. If you were loading or unloading when the PCN was issued, this is a valid defence.',
      strength: 'moderate',
      legalBasis: 'Traffic Management Act 2004; TRO exemptions',
    });
    letterArguments.push('Vehicle was exempt due to active loading or unloading');
    baseScore += 12;
  }

  if (circ.includes('medical') || circ.includes('emergency') || circ.includes('hospital') || circ.includes('ambulance') || circ.includes('illness')) {
    grounds.push({
      id: 'mitigating-medical',
      title: 'Medical Emergency or Mitigating Circumstances',
      description:
        'A genuine medical emergency constitutes compelling mitigating circumstances. If you or a passenger required urgent medical attention, the council should exercise discretion and cancel the PCN. Medical evidence (appointment letters, prescriptions, discharge notes) strengthens this ground.',
      strength: 'moderate',
      legalBasis: 'Traffic Management Act 2004; Statutory Guidance on Civil Parking Enforcement',
    });
    letterArguments.push('Medical emergency or serious mitigating circumstances');
    baseScore += 12;
  }

  if (circ.includes('blue badge') || circ.includes('disabled') || circ.includes('disability')) {
    grounds.push({
      id: 'blue-badge',
      title: 'Blue Badge or Disability-Related Issue',
      description:
        'Blue Badge holders have specific parking rights under the Blue Badge scheme. If your badge was valid and correctly displayed (or if disability prevented correct display), the PCN may be cancelled. The Equality Act 2010 also requires councils to make reasonable adjustments.',
      strength: 'strong',
      legalBasis: 'Disabled Persons (Badges for Motor Vehicles) Regulations 2000; Equality Act 2010',
    });
    letterArguments.push('Blue Badge was valid or disability-related reasonable adjustment required');
    baseScore += 18;
  }

  if (circ.includes('paid') || circ.includes('valid ticket') || circ.includes('had a ticket') || circ.includes('displayed') || circ.includes('receipt')) {
    grounds.push({
      id: 'valid-payment',
      title: 'Valid Payment or Ticket Was in Place',
      description:
        'If you had a valid Pay and Display ticket or had paid via phone/app, the PCN should not have been issued. Evidence of payment (ticket, receipt, bank statement, app confirmation) will support cancellation.',
      strength: 'strong',
      legalBasis: 'Traffic Management Act 2004',
    });
    letterArguments.push('Valid payment was made or a ticket was correctly displayed');
    baseScore += 18;
  }

  if (circ.includes('moved') || circ.includes('drove away') || circ.includes('left') || circ.includes('returned') || circ.includes('came back')) {
    grounds.push({
      id: 'observation-period',
      title: 'Insufficient Observation Period',
      description:
        'For certain contraventions, the Civil Enforcement Officer must observe the vehicle for a minimum period before issuing a PCN. If the PCN was issued without proper observation, or if you returned to the vehicle and were about to drive away, the PCN may be challenged.',
      strength: 'moderate',
      legalBasis: 'Statutory Guidance on Civil Parking Enforcement',
    });
    letterArguments.push('CEOs observation period may have been insufficient');
    baseScore += 8;
  }

  if (circ.includes('permit') || circ.includes('resident')) {
    grounds.push({
      id: 'permit-issue',
      title: 'Valid Permit Not Recognised',
      description:
        'If you held a valid residents permit or visitor permit that was not recognised or was in the process of being renewed, the PCN may be cancelled. Proof of a valid permit at the time of the contravention is key evidence.',
      strength: 'strong',
      legalBasis: 'Traffic Management Act 2004; TRO permit conditions',
    });
    letterArguments.push('Valid parking permit was held at the time of the alleged contravention');
    baseScore += 15;
  }

  // If no specific grounds found
  if (grounds.length === 0 || (grounds.length === 1 && grounds[0].id === 'discount-period')) {
    grounds.push({
      id: 'general-procedural',
      title: 'Procedural Compliance Review',
      description:
        'Even without specific circumstances, council PCNs must comply with strict procedural requirements. The PCN must contain correct information, be issued in accordance with the TRO, and follow proper serving procedures.',
      strength: 'weak',
      legalBasis: 'Traffic Management Act 2004; Civil Enforcement of Road Traffic Contraventions Regulations 2022',
    });
    letterArguments.push('Request for evidence of procedural compliance and TRO validity');
  }

  // Cap the score
  const successProbability = Math.min(80, Math.max(15, baseScore));

  let overallStrength: 'strong' | 'moderate' | 'weak';
  if (successProbability >= 55) {
    overallStrength = 'strong';
  } else if (successProbability >= 35) {
    overallStrength = 'moderate';
  } else {
    overallStrength = 'weak';
  }

  // Calculate deadline
  let deadlineDays: number | null = null;
  if (input.fineDate) {
    const daysSinceFine = daysFromToday(input.fineDate);
    deadlineDays = Math.max(0, 28 - daysSinceFine);
  }

  const nextSteps: string[] = [];
  if (deadlineDays !== null && deadlineDays > 0) {
    nextSteps.push('Submit an informal challenge to the council within the 28-day window');
  }
  nextSteps.push('Generate your personalised appeal letter with the legal arguments above');
  nextSteps.push('Gather supporting evidence (photos, receipts, witness statements)');
  nextSteps.push('If the informal challenge is rejected, make formal representations after receiving the Notice to Owner');
  nextSteps.push('If formal representations are rejected, appeal to the independent tribunal (London Tribunals or Traffic Penalty Tribunal)');

  let recommendedProduct = 'standard-letter';
  if (overallStrength === 'moderate' || overallStrength === 'weak') {
    recommendedProduct = 'premium-pack';
  }

  return {
    overallStrength,
    successProbability,
    grounds,
    deadlineDays,
    nextSteps,
    letterArguments,
    recommendedProduct,
  };
}

function assessBusLaneFine(input: AssessmentInput): AssessmentResult {
  const grounds: DefenceGround[] = [];
  const letterArguments: string[] = [];
  let baseScore = 25;

  const circ = (input.circumstances || '').toLowerCase();

  if (circ.includes('sign') && (circ.includes('unclear') || circ.includes('missing') || circ.includes('confus'))) {
    grounds.push({
      id: 'signage-issue',
      title: 'Bus Lane Signage Was Inadequate',
      description: 'Bus lane restrictions must be clearly signed with correct times and days of operation. If the signage was missing, obscured, or confusing, the PCN may be invalid.',
      strength: 'strong',
      legalBasis: 'TSRGD 2016; Traffic Management Act 2004',
    });
    letterArguments.push('Bus lane signage was inadequate or not compliant with TSRGD 2016');
    baseScore += 20;
  }

  if (circ.includes('avoid') || circ.includes('emergency') || circ.includes('ambulance') || circ.includes('police') || circ.includes('fire engine')) {
    grounds.push({
      id: 'emergency-vehicle',
      title: 'Moved to Allow Emergency Vehicle',
      description: 'If you entered the bus lane to make way for an emergency vehicle, this is a recognised defence. The Highway Code requires drivers to move aside for emergency vehicles.',
      strength: 'strong',
      legalBasis: 'Highway Code; Traffic Management Act 2004',
    });
    letterArguments.push('Entered bus lane to allow an emergency vehicle to pass');
    baseScore += 20;
  }

  if (circ.includes('turn') || circ.includes('turning') || circ.includes('junction')) {
    grounds.push({
      id: 'permitted-turn',
      title: 'Entered Bus Lane to Make a Permitted Turn',
      description: 'Drivers are typically permitted to enter a bus lane shortly before a left turn. If you entered the bus lane at a reasonable distance before your turn, this may be a valid defence.',
      strength: 'moderate',
      legalBasis: 'Local TRO provisions; Traffic Management Act 2004',
    });
    letterArguments.push('Entered bus lane to make a permitted left turn');
    baseScore += 12;
  }

  if (grounds.length === 0) {
    grounds.push({
      id: 'general-bus-lane',
      title: 'Procedural and Signage Review',
      description: 'Bus lane PCNs must comply with strict procedural requirements. The camera evidence, signage, and TRO can all be checked for defects.',
      strength: 'weak',
      legalBasis: 'Traffic Management Act 2004; TSRGD 2016',
    });
    letterArguments.push('Request full evidence pack including camera footage and TRO');
  }

  const successProbability = Math.min(75, Math.max(15, baseScore));
  let overallStrength: 'strong' | 'moderate' | 'weak';
  if (successProbability >= 55) overallStrength = 'strong';
  else if (successProbability >= 35) overallStrength = 'moderate';
  else overallStrength = 'weak';

  let deadlineDays: number | null = null;
  if (input.fineDate) {
    deadlineDays = Math.max(0, 28 - daysFromToday(input.fineDate));
  }

  return {
    overallStrength,
    successProbability,
    grounds,
    deadlineDays,
    nextSteps: [
      'Generate your personalised appeal letter',
      'Request the full evidence pack from the council (camera images, signage photos, TRO)',
      'Submit your challenge within the deadline',
      'If rejected, appeal to the Traffic Penalty Tribunal or London Tribunals',
    ],
    letterArguments,
    recommendedProduct: overallStrength === 'strong' ? 'standard-letter' : 'premium-pack',
  };
}

function assessCongestionFine(input: AssessmentInput): AssessmentResult {
  const grounds: DefenceGround[] = [];
  const letterArguments: string[] = [];
  let baseScore = 20;

  const circ = (input.circumstances || '').toLowerCase();

  if (circ.includes('paid') || circ.includes('receipt') || circ.includes('account')) {
    grounds.push({
      id: 'payment-made',
      title: 'Payment Was Made or Attempted',
      description: 'If you paid the charge or attempted to pay before the deadline, this is a strong defence. Evidence of payment, attempted payment, or system errors supports cancellation.',
      strength: 'strong',
      legalBasis: 'Transport Act 2000; GLA Powers Act 2007',
    });
    letterArguments.push('Congestion charge payment was made or attempted before the deadline');
    baseScore += 25;
  }

  if (circ.includes('exempt') || circ.includes('electric') || circ.includes('disabled') || circ.includes('blue badge')) {
    grounds.push({
      id: 'vehicle-exempt',
      title: 'Vehicle May Be Exempt',
      description: 'Certain vehicles are exempt from the congestion charge or ULEZ, including some electric vehicles, disabled tax class vehicles, and military vehicles. If your vehicle qualifies for an exemption, the charge should be cancelled.',
      strength: 'strong',
      legalBasis: 'Greater London Authority Act 1999; TfL Congestion Charge scheme',
    });
    letterArguments.push('Vehicle qualifies for an exemption from the charge');
    baseScore += 25;
  }

  if (circ.includes('sign') || circ.includes('boundary') || circ.includes('didn\'t know') || circ.includes('confus')) {
    grounds.push({
      id: 'boundary-confusion',
      title: 'Zone Boundary Was Unclear',
      description: 'If the zone boundary signage was missing, obscured, or confusing, you may not have been aware you were entering the charging zone. This is a recognised ground for representations.',
      strength: 'moderate',
      legalBasis: 'TSRGD 2016; TfL scheme order',
    });
    letterArguments.push('Charging zone boundary signage was unclear or missing');
    baseScore += 12;
  }

  if (grounds.length === 0) {
    grounds.push({
      id: 'general-congestion',
      title: 'General Review of Charge Validity',
      description: 'The PCN must comply with procedural requirements. The camera evidence, serving of the PCN, and your vehicle details can all be reviewed for errors.',
      strength: 'weak',
      legalBasis: 'Transport Act 2000; GLA Powers Act 2007',
    });
    letterArguments.push('Request full evidence and procedural compliance review');
  }

  const successProbability = Math.min(75, Math.max(15, baseScore));
  let overallStrength: 'strong' | 'moderate' | 'weak';
  if (successProbability >= 55) overallStrength = 'strong';
  else if (successProbability >= 35) overallStrength = 'moderate';
  else overallStrength = 'weak';

  let deadlineDays: number | null = null;
  if (input.fineDate) {
    deadlineDays = Math.max(0, 28 - daysFromToday(input.fineDate));
  }

  return {
    overallStrength,
    successProbability,
    grounds,
    deadlineDays,
    nextSteps: [
      'Generate your personalised appeal letter',
      'Gather evidence (payment receipts, exemption documents, photos of signage)',
      'Submit representations to TfL or the issuing authority within the deadline',
      'If rejected, appeal to the independent adjudicator',
    ],
    letterArguments,
    recommendedProduct: overallStrength === 'strong' ? 'standard-letter' : 'premium-pack',
  };
}

export function assessFine(input: AssessmentInput): AssessmentResult {
  switch (input.fineType) {
    case 'private':
      return assessPrivateFine(input);
    case 'council':
      return assessCouncilFine(input);
    case 'bus-lane':
      return assessBusLaneFine(input);
    case 'congestion':
      return assessCongestionFine(input);
    default:
      return assessCouncilFine(input);
  }
}
