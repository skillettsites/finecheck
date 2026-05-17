// Generates public/sample-appeal-letter.pdf: a polished demonstration
// appeal letter used as a credibility/conversion asset on /pricing.
// Run with: node scripts/generate-sample-pdf.mjs

import PDFDocument from "pdfkit";
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "..", "public", "sample-appeal-letter.pdf");

const TEAL = "#0d9488";
const TEAL_DARK = "#0f766e";
const TEAL_LIGHT_BG = "#ccfbf1"; // teal-100 — clearly visible at print scale
const SLATE_900 = "#0f172a";
const SLATE_700 = "#334155";
const SLATE_500 = "#64748b";
const SLATE_400 = "#94a3b8";
const SLATE_300 = "#cbd5e1";
const SLATE_200 = "#e2e8f0";
const SLATE_100 = "#f1f5f9";
const AMBER_700 = "#b45309";
const AMBER_900 = "#78350f";
const AMBER_100 = "#fde68a"; // amber-200 — clearly visible
const WHITE = "#ffffff";

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN_X = 56;
const MARGIN_TOP = 70;
const MARGIN_BOTTOM = 70;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

const doc = new PDFDocument({
  size: "A4",
  margins: { top: MARGIN_TOP, bottom: MARGIN_BOTTOM, left: MARGIN_X, right: MARGIN_X },
  bufferPages: true,
  info: {
    Title: "Sample Appeal Letter | AppealAFine",
    Author: "AppealAFine",
    Subject: "Sample parking charge notice appeal letter",
    Keywords: "parking, appeal, POFA, sample",
  },
});

const chunks = [];
doc.on("data", (c) => chunks.push(c));
doc.on("end", () => {
  writeFileSync(OUTPUT, Buffer.concat(chunks));
  console.log(`Wrote ${OUTPUT} (${(Buffer.concat(chunks).length / 1024).toFixed(1)} KB)`);
});

// ============== helpers ==============

// Reusable text drawer that doesn't tinker with cursor flow surprises.
// Returns the bottom y after drawing.
function paragraph(text, x, y, opts = {}) {
  const {
    width = CONTENT_W,
    font = "Helvetica",
    size = 11,
    color = SLATE_700,
    lineGap = 4,
    align = "left",
    characterSpacing = 0,
  } = opts;
  doc.font(font).fontSize(size).fillColor(color);
  doc.text(text, x, y, { width, lineGap, align, characterSpacing });
  return doc.y;
}

function line(text, x, y, opts = {}) {
  return paragraph(text, x, y, { ...opts, lineGap: 0 });
}

// ============== page 1 ==============

let y = 0;

// Top teal stripe across full width
doc.save();
doc.rect(0, 0, PAGE_W, 4).fill(TEAL);
doc.restore();

// Brand left
doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(SLATE_900)
  .text("APPEALAFINE", MARGIN_X, 32, {
    width: CONTENT_W / 2,
    characterSpacing: 1.6,
  });

// "Sample" chip right
const chipX = PAGE_W - MARGIN_X - 150;
doc.save();
doc.roundedRect(chipX, 26, 150, 22, 11).fill(SLATE_100);
doc.restore();
doc
  .font("Helvetica-Bold")
  .fontSize(8.5)
  .fillColor(TEAL_DARK)
  .text("SAMPLE APPEAL LETTER", chipX, 34, {
    width: 150,
    align: "center",
    characterSpacing: 1,
  });

// Pre-header label
y = MARGIN_TOP;
y = line("FORMAL APPEAL · PARKING CHARGE NOTICE", MARGIN_X, y, {
  size: 8.5,
  color: SLATE_500,
  characterSpacing: 1.4,
});
y += 6;

// Title
y = paragraph("Notice of Appeal — PCN PE-26050017XXXXX", MARGIN_X, y, {
  font: "Helvetica-Bold",
  size: 19,
  color: SLATE_900,
  lineGap: 0,
});
y += 14;

// Two-column From / To
const colW = (CONTENT_W - 24) / 2;
const fromX = MARGIN_X;
const toX = MARGIN_X + colW + 24;

const headerTop = y;
line("FROM", fromX, headerTop, { size: 8, color: SLATE_500, characterSpacing: 1.3 });
line("TO", toX, headerTop, { size: 8, color: SLATE_500, characterSpacing: 1.3 });

const addrTop = headerTop + 14;
let fromY = addrTop;
fromY = line("Mx. A. Sample", fromX, fromY, { size: 10.5, color: SLATE_900 });
fromY = line("123 Demonstration Street", fromX, fromY, { size: 10.5, color: SLATE_900 });
fromY = line("Manchester  M1 2AB", fromX, fromY, { size: 10.5, color: SLATE_900 });

let toY = addrTop;
toY = line("ParkingEye Limited", toX, toY, { size: 10.5, color: SLATE_900 });
toY = line("Parking Appeals Department", toX, toY, { size: 10.5, color: SLATE_900 });
toY = line("PO Box 100, Liverpool  L1 0AA", toX, toY, { size: 10.5, color: SLATE_900 });

y = Math.max(fromY, toY) + 12;

// Date
y = line("17 May 2026", MARGIN_X, y, { size: 10.5, color: SLATE_500 });
y += 14;

// Metadata strip
const stripH = 60;
doc.save();
doc.roundedRect(MARGIN_X, y, CONTENT_W, stripH, 6).fill(SLATE_100);
doc.restore();

const cells = [
  ["REFERENCE", "PE-26050017XXXXX"],
  ["VEHICLE", "AB12 CDE"],
  ["DATE OF EVENT", "1 May 2026"],
  ["LOCATION", "Asda, Hulme"],
];
const cellW = CONTENT_W / 4;
cells.forEach(([label, value], i) => {
  const cx = MARGIN_X + cellW * i + 14;
  line(label, cx, y + 12, { size: 7.5, color: SLATE_500, characterSpacing: 1.2 });
  line(value, cx, y + 28, { size: 10.5, color: SLATE_900, font: "Helvetica-Bold" });
});
y += stripH + 18;

// Salutation
y = paragraph("Dear Sir or Madam,", MARGIN_X, y, { size: 11, color: SLATE_900 });
y += 6;

// Lede
y = paragraph(
  "I am writing to formally challenge the above Parking Charge Notice in full. Having reviewed your Notice to Keeper against the relevant statute, case law and the Private Parking Code of Practice, I have identified four substantive grounds on which this charge cannot be enforced and should be cancelled.",
  MARGIN_X,
  y,
  { size: 11, color: SLATE_700, align: "justify", lineGap: 4 }
);
y += 12;

// Numbered grounds
function ground(num, title, paragraphs) {
  const bubbleR = 11;
  const bubbleX = MARGIN_X + bubbleR;
  const titleX = MARGIN_X + bubbleR * 2 + 8;
  const titleW = PAGE_W - MARGIN_X - titleX;
  const startY = y;

  // Bubble
  doc.save();
  doc.circle(bubbleX, startY + 9, bubbleR).fill(TEAL);
  doc.fillColor(WHITE).font("Helvetica-Bold").fontSize(10)
    .text(String(num), bubbleX - 4, startY + 4, { width: 8, align: "center" });
  doc.restore();

  // Title
  let afterTitle = paragraph(title, titleX, startY + 1, {
    font: "Helvetica-Bold",
    size: 11.5,
    color: SLATE_900,
    width: titleW,
    lineGap: 3,
  });
  y = afterTitle + 6;

  paragraphs.forEach((p) => {
    y = paragraph(p, MARGIN_X, y, {
      size: 10.5,
      color: SLATE_700,
      align: "justify",
      lineGap: 4,
      width: CONTENT_W,
    });
    y += 6;
  });
  y += 6;
}

ground(
  1,
  "The Notice to Keeper was served outside the 14-day window required by POFA 2012 Schedule 4",
  [
    "The alleged parking event occurred on 1 May 2026. The Notice to Keeper bears a date of 22 May 2026 and was received on 24 May 2026, a period of 23 days. Under Schedule 4, paragraph 9(4) of the Protection of Freedoms Act 2012, where an operator wishes to invoke keeper liability the Notice to Keeper must be given within the relevant period, defined as \"the period of 14 days beginning with the day after that on which the specified period of parking ended.\"",
    "Service outside this statutory window extinguishes any keeper liability that might otherwise have arisen. As the registered keeper I am therefore under no obligation in respect of this charge and I am not required to disclose the identity of the driver.",
  ]
);

ground(
  2,
  "Signage at the location does not meet the standards required to form a contract",
  [
    "On attending the site after receipt of the Notice I observed and photographed the signage in the area in which the vehicle was parked. The terms relied upon were not displayed prominently or in characters of sufficient size to be legible by a driver from a parked vehicle, nor at the point of entry.",
    "Section 13 of the Private Parking Code of Practice (effective 1 October 2024) requires that key terms be \"clearly visible from the driver's seat at the point of entry and at intervals throughout the car park.\" The signage at this site falls short of that standard. Without clear and conspicuous notice of the terms, no contract was formed and no parking charge can validly arise.",
  ]
);

ground(
  3,
  "The charge is disproportionate to any legitimate commercial interest",
  [
    "The charge of £100 (reduced to £60 if paid within 14 days) cannot be justified as protecting a genuine commercial interest of the operator on the facts of this case. The land is a free supermarket car park provided as a service to customers of Asda.",
    "In ParkingEye Ltd v Beavis [2015] UKSC 67 the Supreme Court held that a parking charge is enforceable only where it is not extravagant or unconscionable when measured against the legitimate interests of the operator. None of the features that justified the charge in Beavis are present here. The charge is therefore an unenforceable penalty under Cavendish Square Holding BV v Talal El Makdessi [2015] UKSC 67.",
  ]
);

ground(
  4,
  "The mandatory grace periods under the Code of Practice were not observed",
  [
    "The vehicle was recorded as remaining for twelve minutes longer than the maximum stay. Section 10 of the Private Parking Code of Practice requires a consideration period of at least five minutes for a motorist to read the terms and decide whether to accept them, together with a grace period of at least ten minutes at the end of the stay before any charge can issue.",
    "The combined effect of these two periods is fifteen minutes, which exceeds the twelve-minute overstay alleged in the Notice. On this ground alone no contravention occurred and the charge cannot stand.",
  ]
);

// Statutory basis callout — let it flow naturally; pdfkit will page-break if needed.
y += 4;
const calloutH = 70;
doc.save();
doc.roundedRect(MARGIN_X, y, CONTENT_W, calloutH, 6).fill(TEAL_LIGHT_BG);
doc.rect(MARGIN_X, y, 3, calloutH).fill(TEAL);
doc.restore();
line("STATUTORY BASIS", MARGIN_X + 18, y + 14, {
  size: 9,
  color: TEAL_DARK,
  font: "Helvetica-Bold",
  characterSpacing: 1.2,
});
paragraph(
  "Protection of Freedoms Act 2012, Schedule 4, paragraph 9(4)  ·  Consumer Rights Act 2015, s.62  ·  Private Parking Code of Practice 2024, sections 10 and 13  ·  ParkingEye Ltd v Beavis [2015] UKSC 67",
  MARGIN_X + 18,
  y + 30,
  { size: 10, color: SLATE_700, width: CONTENT_W - 32, lineGap: 3 }
);
y += calloutH + 22;

// Closing
y = paragraph(
  "For the reasons set out above, I respectfully request that this Parking Charge Notice be cancelled in full and that all records relating to this matter be removed from your systems. If a cancellation is not received within thirty-five days of the date of this letter I will exercise my right to escalate this appeal to POPLA for independent adjudication.",
  MARGIN_X,
  y,
  { size: 11, color: SLATE_700, align: "justify", lineGap: 4 }
);
y += 10;
y = paragraph("I look forward to your response.", MARGIN_X, y, {
  size: 11,
  color: SLATE_700,
});
y += 30;
y = line("Yours faithfully,", MARGIN_X, y, { size: 11, color: SLATE_700 });
y += 44;
y = line("Mx. A. Sample", MARGIN_X, y, { size: 11, color: SLATE_900, font: "Helvetica-Bold" });
y = line("123 Demonstration Street, Manchester  M1 2AB", MARGIN_X, y, {
  size: 10,
  color: SLATE_500,
});

// ============== page 3: cover note / value prop ==============

doc.addPage();

doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(SLATE_900)
  .text("APPEALAFINE", MARGIN_X, 32, {
    width: CONTENT_W,
    characterSpacing: 1.6,
  });

y = MARGIN_TOP;
y = line("ABOUT THIS DOCUMENT", MARGIN_X, y, {
  size: 8.5,
  color: SLATE_500,
  characterSpacing: 1.4,
});
y += 6;
y = paragraph("What you get when you appeal with AppealAFine", MARGIN_X, y, {
  font: "Helvetica-Bold",
  size: 19,
  color: SLATE_900,
  lineGap: 2,
});
y += 14;

y = paragraph(
  "The letter on the previous pages is a representative example of what AppealAFine produces. We assemble a tailored letter from your operator or council, fine type, location, dates and your account of what happened, then cite the specific statutes, regulations and case law that apply to your situation.",
  MARGIN_X,
  y,
  { size: 11, color: SLATE_700, align: "justify", lineGap: 4 }
);
y += 14;

// 3-column features
const featureColW = (CONTENT_W - 24) / 3;
const featureH = 120;
const features = [
  {
    title: "Tailored to your case",
    body: "Operator, council, location, NtK timing, signage and circumstances are woven into the letter. No mail-merge templates.",
  },
  {
    title: "Real legal grounds",
    body: "POFA 2012, Consumer Rights Act 2015, the Private Parking Code of Practice 2024, Beavis, Vine, Cavendish, Heron and more, cited correctly.",
  },
  {
    title: "In your inbox in minutes",
    body: "PDF and plain text emailed instantly. Standard letter £5.99. Premium pack £9.99 adds an escalation letter and an evidence checklist.",
  },
];
features.forEach((f, i) => {
  const fx = MARGIN_X + (featureColW + 12) * i;
  // soft slate-100 background card
  doc.save();
  doc.roundedRect(fx, y, featureColW, featureH, 8).fill(SLATE_100);
  doc.restore();
  // teal accent strip down left edge
  doc.save();
  doc.rect(fx, y, 3, featureH).fill(TEAL);
  doc.restore();
  // accent dot
  doc.save();
  doc.circle(fx + 18, y + 22, 4).fill(TEAL);
  doc.restore();
  line(f.title, fx + 30, y + 17, {
    size: 11,
    color: SLATE_900,
    font: "Helvetica-Bold",
    width: featureColW - 40,
  });
  paragraph(f.body, fx + 18, y + 44, {
    size: 9.5,
    color: SLATE_700,
    width: featureColW - 30,
    lineGap: 3,
  });
});
y += featureH + 22;

// What we covered
y = line("WHAT THIS LETTER COVERS", MARGIN_X, y, {
  size: 8.5,
  color: SLATE_500,
  characterSpacing: 1.4,
});
y += 8;
const bullets = [
  "POFA 2012 Schedule 4 paragraph 9(4) — 14-day Notice to Keeper window",
  "Private Parking Code of Practice 2024 — signage and grace period rules",
  "ParkingEye Ltd v Beavis [2015] UKSC 67 — penalty test and legitimate interest",
  "Consumer Rights Act 2015 s.62 — fairness in consumer contract terms",
];
bullets.forEach((b) => {
  // teal tick
  doc.save();
  doc
    .moveTo(MARGIN_X, y + 8)
    .lineTo(MARGIN_X + 4, y + 12)
    .lineTo(MARGIN_X + 12, y + 4)
    .lineWidth(1.6)
    .strokeColor(TEAL)
    .stroke();
  doc.restore();
  y = paragraph(b, MARGIN_X + 22, y + 2, {
    size: 10.5,
    color: SLATE_700,
    width: CONTENT_W - 22,
    lineGap: 3,
  });
  y += 6;
});
y += 6;

// Disclaimer
const discH = 88;
doc.save();
doc.roundedRect(MARGIN_X, y, CONTENT_W, discH, 6).fill(AMBER_100);
doc.restore();
line("IMPORTANT", MARGIN_X + 18, y + 14, {
  size: 9,
  color: AMBER_700,
  font: "Helvetica-Bold",
  characterSpacing: 1.2,
});
paragraph(
  "This is a sample document. Names, vehicle registrations and reference numbers are fictional. AppealAFine provides document preparation services and is not a firm of solicitors. Nothing in this document is legal advice. If your case involves a court claim, county court judgment, bailiffs or a hearing, please instruct a qualified solicitor. Appeal outcomes are not guaranteed; success depends on the strength of the facts and the evidence available.",
  MARGIN_X + 18,
  y + 30,
  { size: 9.5, color: AMBER_900, width: CONTENT_W - 32, lineGap: 3, align: "justify" }
);
y += discH + 18;

// CTA
y = paragraph("Start your appeal at appealafine.co.uk/appeal", MARGIN_X, y, {
  size: 11,
  color: TEAL_DARK,
  font: "Helvetica-Bold",
});

// ============== footers (use bufferedPageRange so totals are accurate) ==============

const range = doc.bufferedPageRange();
const total = range.count;
for (let i = 0; i < total; i++) {
  doc.switchToPage(range.start + i);

  // hairline rule
  doc.save();
  doc
    .moveTo(MARGIN_X, PAGE_H - 48)
    .lineTo(PAGE_W - MARGIN_X, PAGE_H - 48)
    .lineWidth(0.5)
    .strokeColor(SLATE_300)
    .stroke();
  doc.restore();

  // height: 12 + lineBreak: false prevents pdfkit's auto-paginate from
  // firing when the y position is below the bottom content margin.
  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(SLATE_500)
    .text("AppealAFine  ·  appealafine.co.uk", MARGIN_X, PAGE_H - 36, {
      width: CONTENT_W / 2,
      align: "left",
      lineBreak: false,
      height: 12,
    });

  doc
    .font("Helvetica")
    .fontSize(8)
    .fillColor(SLATE_500)
    .text(
      `Sample reference: SAMPLE-2026-001  ·  Page ${i + 1} of ${total}`,
      PAGE_W / 2,
      PAGE_H - 36,
      { width: CONTENT_W / 2, align: "right", lineBreak: false, height: 12 }
    );
}

doc.end();
