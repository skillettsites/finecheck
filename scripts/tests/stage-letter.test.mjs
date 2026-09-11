// The pure stage-letter library: prompts, instant preview, session parsing.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  STAGE_REPLY_LETTER_ID,
  STAGE_REPLY_STAGES,
  isStageReplyStage,
  sanitiseAddOns,
  stageSystemPrompt,
  stageUserPrompt,
  stageFallbackLetter,
  stageLetterTitle,
  stageRecipient,
  stageSendingSteps,
  decodeChunkedAppeal,
  parseStageReplySession,
  stageLetterInputFromAppeal,
} from "@/lib/stage-letter";

const EM_DASH = /—/;

const baseInput = (stage, extra = {}) => ({
  stage,
  fineType: "private",
  operatorName: "ParkingEye",
  appealBody: "POPLA",
  pcnReference: "PE123456",
  vehicleReg: "AB12 CDE",
  location: "Tesco Extra, Manchester",
  parkingEventDate: "2026-07-01",
  ntkReceivedDate: "2026-07-20",
  fineAmount: "100",
  wasDriver: "no",
  circumstances: "The signs were hidden behind a tree.",
  senderName: "Carl Lewis",
  senderAddress: "12 High Street\nSwansea",
  grounds: [
    { title: "Notice to Keeper Served Late (POFA 2012)", legalBasis: "Protection of Freedoms Act 2012, Schedule 4, Paragraph 9" },
    { title: "Inadequate or Non-Compliant Signage", legalBasis: "BPA/IPC Code of Practice; ParkingEye v Beavis [2015] UKSC 67" },
  ],
  ...extra,
});

test("stage ids", () => {
  assert.equal(STAGE_REPLY_LETTER_ID, "stage-reply-letter");
  assert.deepEqual([...STAGE_REPLY_STAGES], ["rejected", "popla-rejected", "collector", "letter-before-claim"]);
  assert.equal(isStageReplyStage("court-claim"), false, "court claims go to the Escalation Pack");
  assert.equal(isStageReplyStage("new"), false);
  assert.deepEqual(sanitiseAddOns(["premium-pack", "premium-pack", "escalation-pack", 3]), ["premium-pack"]);
  assert.deepEqual(sanitiseAddOns("premium-pack"), []);
});

test("system prompts carry the stage-specific legal positions and never em dashes", () => {
  const collector = stageSystemPrompt("collector", "private");
  assert.match(collector, /Schedule 4/);
  assert.match(collector, /£70/);
  assert.match(collector, /Consumer Protection from Unfair Trading Regulations 2008, regulation 5/);
  assert.match(collector, /BPA or IPC membership/);
  assert.match(collector, /no bailiff may attend/);

  const lbc = stageSystemPrompt("letter-before-claim", "private");
  assert.match(lbc, /Pre-Action Protocol for Debt Claims/);
  assert.match(lbc, /30 days/);
  assert.match(lbc, /Reply Form/);
  assert.match(lbc, /landowner contract/);

  const rejected = stageSystemPrompt("rejected", "private");
  assert.match(rejected, /POPLA for a BPA member, the IAS for an IPC member/);
  assert.match(rejected, /28 days/);

  const popla = stageSystemPrompt("popla-rejected", "private");
  assert.match(popla, /not binding on the motorist/);
  assert.match(popla, /any claim will be defended/);

  for (const stage of STAGE_REPLY_STAGES) {
    for (const ft of ["private", "council"]) {
      const p = stageSystemPrompt(stage, ft);
      assert.ok(!EM_DASH.test(p), `${stage}/${ft} has an em dash`);
      assert.match(p, /Never fabricate/);
      assert.match(p, /nothing in it is an admission/);
    }
  }
});

test("council variants refuse POFA and the operator codes", () => {
  for (const stage of STAGE_REPLY_STAGES) {
    const p = stageSystemPrompt(stage, "council");
    assert.match(p, /Do NOT cite POFA 2012/, stage);
    assert.match(p, /Traffic Management Act 2004/);
  }
  assert.match(stageSystemPrompt("collector", "council"), /TE9/);
  assert.match(stageSystemPrompt("collector", "council"), /TE7/);
  assert.match(stageSystemPrompt("rejected", "council"), /Traffic Penalty Tribunal/);
});

test("user prompt lists the case facts and grounds, respects driver privacy", () => {
  const p = stageUserPrompt(baseInput("collector", { stageSenderName: "DCBL", stageLetterDate: "2026-09-01" }));
  assert.match(p, /Reply to Debt Recovery Letter/);
  assert.match(p, /Operator: ParkingEye/);
  assert.match(p, /Independent appeals service: POPLA/);
  assert.match(p, /Letter received from: DCBL/);
  assert.match(p, /Date on their letter: 2026-09-01/);
  assert.match(p, /NOT identified as driver/);
  assert.match(p, /1\. Notice to Keeper Served Late \(POFA 2012\) \(Protection of Freedoms Act 2012, Schedule 4, Paragraph 9\)/);
  assert.match(p, /Sender Name: Carl Lewis/);
  assert.ok(!EM_DASH.test(p));
  // Grounds given as plain strings (client route) render without "()".
  const q = stageUserPrompt(baseInput("rejected", { grounds: [{ title: "Signage (BPA Code)", legalBasis: "" }] }));
  assert.match(q, /1\. Signage \(BPA Code\)\n/);
  assert.ok(!q.includes("()"));
});

test("titles and recipients per stage", () => {
  assert.equal(stageLetterTitle("rejected", "private"), "POPLA or IAS Appeal Submission");
  assert.equal(stageLetterTitle("rejected", "council"), "Formal Representations to the Council");
  assert.equal(stageLetterTitle("collector", "private"), "Reply to Debt Recovery Letter");
  assert.equal(stageLetterTitle("letter-before-claim", "private"), "Reply to Letter Before Claim");
  assert.equal(stageRecipient(baseInput("rejected")), "POPLA");
  assert.equal(stageRecipient(baseInput("rejected", { appealBody: "IAS" })), "the IAS");
  assert.equal(stageRecipient(baseInput("rejected", { appealBody: undefined })), "POPLA or the IAS");
  assert.equal(stageRecipient(baseInput("collector")), "the debt recovery company");
  assert.equal(stageRecipient(baseInput("collector", { stageSenderName: "DCBL" })), "DCBL");
  assert.equal(stageRecipient(baseInput("letter-before-claim", { stageSenderName: "BW Legal" })), "BW Legal");
  assert.equal(stageRecipient(baseInput("popla-rejected")), "ParkingEye");
  assert.equal(stageRecipient(baseInput("rejected", { fineType: "council", councilName: "Leeds City Council" })), "Leeds City Council");
});

test("instant preview is a complete letter with placeholders, per stage", () => {
  for (const stage of STAGE_REPLY_STAGES) {
    for (const ft of ["private", "council"]) {
      const letter = stageFallbackLetter(baseInput(stage, { fineType: ft, councilName: "Leeds City Council" }));
      assert.match(letter, /^Carl Lewis\n12 High Street/, `${stage}/${ft} sender block`);
      assert.match(letter, /Vehicle Registration: AB12 CDE/);
      assert.match(letter, /Yours faithfully,\n\nCarl Lewis$/);
      assert.match(letter, /1\. Notice to Keeper Served Late/);
      assert.ok(!EM_DASH.test(letter), `${stage}/${ft} em dash`);
    }
  }
  const collector = stageFallbackLetter(baseInput("collector"));
  assert.match(collector, /\[DATE OF THEIR LETTER\]/);
  assert.match(collector, /£\[AMOUNT\]/);
  assert.match(collector, /regulation 5/);
  assert.match(collector, /written confirmation within 14 days/);
  const lbc = stageFallbackLetter(baseInput("letter-before-claim", { stageLetterDate: "2026-09-01" }));
  assert.match(lbc, /Dear Sirs,/);
  assert.match(lbc, /1 September 2026/);
  assert.match(lbc, /within the 30 days provided by the Pre-Action Protocol/);
  assert.match(lbc, /has not identified the driver/, "keeper-not-driver paragraph present when wasDriver=no");
  const lbcDriver = stageFallbackLetter(baseInput("letter-before-claim", { wasDriver: "yes" }));
  assert.ok(!/has not identified the driver/.test(lbcDriver));
  const noName = stageFallbackLetter(baseInput("rejected", { senderName: "", senderAddress: "" }));
  assert.match(noName, /^\[YOUR NAME\]\n\[YOUR ADDRESS\]/);
});

test("sending steps per stage", () => {
  assert.match(stageSendingSteps("rejected", "private")[0], /popla\.co\.uk/);
  assert.match(stageSendingSteps("rejected", "council")[0], /Notice to Owner/);
  assert.match(stageSendingSteps("collector", "private").join(" "), /Never phone/);
  assert.match(stageSendingSteps("letter-before-claim", "private")[0], /30 days/);
});

function chunk(obj) {
  const json = JSON.stringify(obj);
  const meta = {};
  let n = 0;
  for (let i = 0; i < json.length; i += 450) meta[`appeal_${n++}`] = json.slice(i, i + 450);
  meta.appeal_chunks = String(n);
  return meta;
}

const savedAppeal = {
  form: {
    fineType: "private",
    operatorName: "ParkingEye",
    email: "buyer@example.com",
    senderName: "Carl Lewis",
    senderAddress: "12 High Street",
    stageSenderName: "DCBL",
    stageLetterDate: "2026-09-01",
    wasDriver: "no",
  },
  assessment: {
    overallStrength: "strong",
    successProbability: 70,
    letterArguments: ["x"],
    grounds: [{ title: "Signage", legalBasis: "BPA Code" }],
    nextSteps: ["a"],
  },
  productId: "stage-reply-letter",
  stage: "collector",
  addOns: ["premium-pack", "bogus"],
};

test("chunked metadata decodes and the session parses", () => {
  const meta = { productId: "stage-reply-letter", stage: "collector", email: "buyer@example.com", ...chunk(savedAppeal) };
  assert.ok(Number(meta.appeal_chunks) >= 2, "test appeal spans more than one chunk");
  assert.deepEqual(decodeChunkedAppeal(meta), savedAppeal);
  const parsed = parseStageReplySession({ metadata: meta, customer_details: { email: "other@example.com" } });
  assert.equal(parsed.ok, true);
  assert.equal(parsed.stage, "collector");
  assert.equal(parsed.email, "buyer@example.com", "form email wins over Stripe's customer_details");
  assert.deepEqual(parsed.addOns, ["premium-pack"]);
  const input = stageLetterInputFromAppeal(parsed.appeal, parsed.stage, "POPLA");
  assert.equal(input.stageSenderName, "DCBL");
  assert.equal(input.appealBody, "POPLA");
  assert.deepEqual(input.grounds, [{ title: "Signage", legalBasis: "BPA Code" }]);
});

test("session parsing rejects what the branch must not fulfil", () => {
  const meta = { productId: "stage-reply-letter", stage: "collector", ...chunk(savedAppeal) };
  assert.deepEqual(parseStageReplySession({ metadata: { ...meta, productId: "premium-pack" } }), { ok: false, reason: "not_stage_product" });
  assert.deepEqual(parseStageReplySession({ metadata: { productId: "stage-reply-letter" } }), { ok: false, reason: "no_appeal_data" });
  assert.deepEqual(parseStageReplySession({ metadata: { ...meta, appeal_1: undefined } }), { ok: false, reason: "no_appeal_data" });
  const court = { ...meta, ...chunk({ ...savedAppeal, stage: "court-claim" }) };
  assert.deepEqual(parseStageReplySession({ metadata: court }), { ok: false, reason: "bad_stage" });
  const noStage = { ...meta, stage: undefined, ...chunk({ ...savedAppeal, stage: undefined }) };
  assert.deepEqual(parseStageReplySession({ metadata: noStage }), { ok: false, reason: "bad_stage" });
  const metaStageOnly = { ...meta, stage: "rejected", ...chunk({ ...savedAppeal, stage: undefined }) };
  assert.equal(parseStageReplySession({ metadata: metaStageOnly }).stage, "rejected", "top-level metadata stage is the fallback");
  const noEmail = { ...meta, ...chunk({ ...savedAppeal, form: { ...savedAppeal.form, email: undefined } }) };
  assert.deepEqual(parseStageReplySession({ metadata: noEmail }), { ok: false, reason: "no_email" });
  assert.equal(parseStageReplySession({ metadata: noEmail, customer_email: "s@example.com" }).email, "s@example.com");
});
