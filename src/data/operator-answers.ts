// Answer-first blocks and extra FAQs for operator pages that carry search
// demand for "<operator> appeal". Rendered under the H1 on /appeals/[operator]
// without changing the page title, H1 or description. Markdown-style links
// [text](href) are rendered by the page. Figures are attributed inline; the
// POPLA numbers come from the POPLA Annual Report 2024 (year to 30 September
// 2024), checked on 11 September 2026.

export interface OperatorAnswer {
  /** Short paragraphs shown in the answer-first block. */
  summary: string[];
  /** Extra FAQs, merged ahead of the generic operator FAQs. */
  faqs: { question: string; answer: string }[];
}

export const OPERATOR_ANSWERS: Record<string, OperatorAnswer> = {
  parkingeye: {
    summary: [
      "To appeal a ParkingEye parking charge, write to ParkingEye within 28 days of the notice, quote the reference on the letter, and set out your grounds with evidence attached: a Notice to Keeper served late or missing the POFA 2012 wording, signage that was unclear or missing, an ANPR timing or plate error, a grace period that was not applied, or a payment the system did not record.",
      "If ParkingEye rejects the appeal it must give you a POPLA code, and you then have 28 days to make a [POPLA appeal](/guides/popla-appeal-guide). POPLA is free and its decision binds ParkingEye but not you.",
      "POPLA cancelled the charge in 40% of the 92,098 appeals it completed in the year to 30 September 2024, and operators chose not to contest a further 23,800 (POPLA Annual Report 2024). Our free assessment tells you which grounds apply to your notice before you write anything.",
    ],
    faqs: [
      {
        question: "How long do I have to appeal a ParkingEye charge?",
        answer:
          "Appeal to ParkingEye within 28 days of the date on the Parking Charge Notice or Notice to Keeper. If ParkingEye rejects your appeal, the rejection letter includes a POPLA code and you have a further 28 days from the date of that letter to appeal to POPLA.",
      },
      {
        question: "Do I have to say who was driving when I appeal to ParkingEye?",
        answer:
          "No. If you are the registered keeper you are not obliged to name the driver. ParkingEye can only hold the keeper liable if its Notice to Keeper meets the requirements of Schedule 4 of the Protection of Freedoms Act 2012, including the 14-day service deadline where no windscreen notice was left. Appeal as the keeper and check the notice against those requirements.",
      },
      {
        question: "Is a POPLA appeal against ParkingEye free?",
        answer:
          "Yes. POPLA charges the motorist nothing. The charge is on hold while the appeal is open, and if POPLA finds in your favour ParkingEye must cancel it. If POPLA finds against you the charge stays at its original amount; the decision is not a court judgment and does not bind you.",
      },
      {
        question: "What evidence should I attach to a ParkingEye appeal?",
        answer:
          "Both sides of the notice, dated photographs of the entrance sign and the sign nearest where you parked, receipts or bank statements that prove your visit or payment, and anything that fixes the timeline such as dashcam or phone photos with timestamps. Number your grounds and reference the evidence for each one.",
      },
    ],
  },
  "smart-parking": {
    summary: [
      "To appeal a Smart Parking charge, appeal to Smart Parking in writing within 28 days of the notice, setting out your grounds with evidence: an ANPR timing error (two visits stitched into one stay, or a misread plate), signage that was unclear or did not warn of camera enforcement, no grace period applied, or a payment the system did not record.",
      "Smart Parking is an IPC member, so a rejected appeal goes to the Independent Appeals Service (IAS), not POPLA. The IAS is free to use and its decision binds Smart Parking but not you.",
      "Our free assessment identifies the grounds that apply to your notice and the IAS route before you write anything.",
    ],
    faqs: [
      {
        question: "How long do I have to appeal a Smart Parking charge?",
        answer:
          "Appeal to Smart Parking within 28 days of the date on the notice. If Smart Parking rejects the appeal, its rejection letter explains how to escalate to the Independent Appeals Service (IAS) and the deadline for doing so, which is also 28 days.",
      },
      {
        question: "Why does a Smart Parking appeal go to the IAS and not POPLA?",
        answer:
          "POPLA only hears appeals against British Parking Association members. Smart Parking belongs to the International Parking Community, whose independent appeals service is the IAS. Sending a Smart Parking appeal to POPLA will get it rejected as out of scope.",
      },
      {
        question: "What evidence should I attach to a Smart Parking appeal?",
        answer:
          "The notice with its ANPR images, dated photographs of the entrance sign and any sign about camera enforcement, receipts or bank card timestamps that show when you were on site (especially if you left and came back), and proof of any payment. If the two ANPR images are the only evidence on the notice, say so and ask for the full record.",
      },
    ],
  },
};
