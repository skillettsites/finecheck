// The Escalation Reply Letter webhook branch, run on constructed session
// objects with the Anthropic and Resend calls replaced by recorders. The PDF
// is rendered for real by pdfkit, so the attachment is a genuine PDF.
//
// The final test drives the actual webhook POST handler with a signed event
// (Stripe's own test-header helper) and a session the branch must skip, which
// proves the branch is wired in front of the generic first-stage path.
import { test } from "node:test";
import assert from "node:assert/strict";
import Stripe from "stripe";
import { NextRequest } from "next/server";
import { fulfilStageReplyLetter, buildStageReplyEmail, appealBodyForOperator } from "@/lib/stage-reply-fulfilment";

const EM_DASH = /—/;

function chunk(obj) {
  const json = JSON.stringify(obj);
  const meta = {};
  let n = 0;
  for (let i = 0; i < json.length; i += 450) meta[`appeal_${n++}`] = json.slice(i, i + 450);
  meta.appeal_chunks = String(n);
  return meta;
}

const appeal = {
  form: {
    fineType: "private",
    operatorName: "ParkingEye",
    pcnReference: "PE123456",
    location: "Tesco Extra, Manchester",
    vehicleReg: "AB12 CDE",
    senderName: "Carl Lewis",
    senderAddress: "12 High Street\nSwansea\nSA1 1AB",
    email: "buyer@example.com",
    fineAmount: "100",
    parkingEventDate: "2026-07-01",
    ntkReceivedDate: "2026-07-20",
    circumstances: "The signs were hidden behind a tree.",
    wasDriver: "no",
    stageSenderName: "DCBL",
    stageLetterDate: "2026-09-01",
  },
  assessment: {
    overallStrength: "strong",
    successProbability: 70,
    letterArguments: ["POFA 2012 Schedule 4: NtK served outside the 14-day statutory window"],
    grounds: [
      { title: "Notice to Keeper Served Late (POFA 2012)", legalBasis: "Protection of Freedoms Act 2012, Schedule 4, Paragraph 9" },
    ],
    nextSteps: ["Reply once, in writing"],
  },
  productId: "stage-reply-letter",
  stage: "collector",
  addOns: [],
};

function session(overrides = {}, appealOverrides = {}) {
  const a = { ...appeal, ...appealOverrides };
  return {
    id: "cs_test_constructed",
    object: "checkout.session",
    payment_intent: null,
    payment_status: "paid",
    customer_details: { email: "stripe@example.com" },
    metadata: { productId: "stage-reply-letter", fineType: "private", email: "buyer@example.com", stage: a.stage, ...chunk(a) },
    ...overrides,
  };
}

function recorder() {
  const calls = { generate: [], premium: [], emails: [] };
  const deps = {
    generateText: async (system, user, maxTokens) => {
      calls.generate.push({ system, user, maxTokens });
      return "Carl Lewis\n12 High Street\n\n11 September 2026\n\nDCBL\n\nRE: PE123456\nVehicle Registration: AB12 CDE\n\nDear Sir/Madam,\n\nThe alleged debt is disputed in full. Nothing in this letter is an admission of liability.\n\nYours faithfully,\nCarl Lewis";
    },
    generatePremium: async (a) => {
      calls.premium.push(a);
      return { letter: "APPEAL LETTER BODY", escalationLetter: "ESCALATION BODY", evidenceChecklist: "1. Photo of the sign" };
    },
    sendEmail: async (message) => {
      calls.emails.push(message);
    },
  };
  return { calls, deps };
}

test("collector stage: letter generated with the stage prompt, PDF attached, email built", async () => {
  const { calls, deps } = recorder();
  const outcome = await fulfilStageReplyLetter(session(), deps);
  assert.equal(outcome.ok, true);
  assert.equal(outcome.sentTo, "buyer@example.com");
  assert.equal(outcome.subject, "Your Reply to Debt Recovery Letter: DCBL");
  assert.deepEqual(outcome.attachments, [`Reply-to-Debt-Recovery-Letter-DCBL-${new Date().toISOString().slice(0, 10)}.pdf`]);

  assert.equal(calls.generate.length, 1);
  assert.match(calls.generate[0].system, /debt recovery firm has written demanding payment/);
  assert.match(calls.generate[0].system, /regulation 5/);
  assert.match(calls.generate[0].user, /Letter received from: DCBL/);
  assert.match(calls.generate[0].user, /Independent appeals service: POPLA/, "ParkingEye resolved to POPLA from the operator data");
  assert.equal(calls.generate[0].maxTokens, 3500);
  assert.equal(calls.premium.length, 0, "no add-on, no premium generation");

  assert.equal(calls.emails.length, 1);
  const email = calls.emails[0];
  assert.equal(email.from, "Appeal a Fine <appeals@appealafine.co.uk>");
  assert.equal(email.to, "buyer@example.com");
  assert.equal(email.attachments.length, 1);
  assert.equal(email.attachments[0].content.subarray(0, 5).toString(), "%PDF-", "a real PDF");
  assert.ok(email.attachments[0].content.length > 1000);
  assert.match(email.html, /Before You Send/);
  assert.match(email.html, /Never phone them/);
  assert.match(email.html, /Check your name and address are correct/);
  assert.match(email.html, /Escalation Reply Letter/);
  assert.ok(!EM_DASH.test(email.html));
  assert.ok(!EM_DASH.test(email.subject));
});

test("letter-before-claim stage with the Premium add-on: three PDFs, checklist in the body", async () => {
  const { calls, deps } = recorder();
  const outcome = await fulfilStageReplyLetter(
    session({}, { stage: "letter-before-claim", addOns: ["premium-pack"], form: { ...appeal.form, stageSenderName: "BW Legal" } }),
    deps
  );
  assert.equal(outcome.ok, true);
  assert.equal(outcome.subject, "Your Reply to Letter Before Claim: BW Legal");
  assert.equal(outcome.attachments.length, 3);
  assert.match(outcome.attachments[0], /^Reply-to-Letter-Before-Claim-BW-Legal-/);
  assert.match(outcome.attachments[1], /^Appeal-Letter-ParkingEye-/);
  assert.equal(outcome.attachments[2], "Escalation-Letter-ParkingEye.pdf");
  assert.equal(calls.premium.length, 1);
  assert.equal(calls.premium[0].productId, "premium-pack", "premium pipeline is asked for the premium set");
  const email = calls.emails[0];
  for (const a of email.attachments) assert.equal(a.content.subarray(0, 5).toString(), "%PDF-");
  assert.match(email.html, /Evidence Checklist/);
  assert.match(email.html, /1\. Photo of the sign/);
  assert.match(email.html, /Escalation Reply Letter \+ Premium Appeal Pack/);
  assert.match(email.html, /30 days/);
  assert.match(calls.generate[0].system, /Pre-Action Protocol for Debt Claims/);
});

test("rejected stage for a council PCN uses the council prompt and recipient", async () => {
  const { calls, deps } = recorder();
  const outcome = await fulfilStageReplyLetter(
    session({}, { stage: "rejected", form: { ...appeal.form, fineType: "council", councilName: "Leeds City Council", operatorName: undefined } }),
    deps
  );
  assert.equal(outcome.ok, true);
  assert.equal(outcome.subject, "Your Formal Representations to the Council: Leeds City Council");
  assert.match(calls.generate[0].system, /Do NOT cite POFA 2012/);
  assert.match(calls.emails[0].html, /Notice to Owner/);
});

test("premium add-on without a premium generator is an error, not a silent partial send", async () => {
  const { calls, deps } = recorder();
  delete deps.generatePremium;
  await assert.rejects(
    fulfilStageReplyLetter(session({}, { addOns: ["premium-pack"] }), deps),
    /no premium generator/
  );
  assert.equal(calls.emails.length, 0, "nothing sent");
});

test("sessions the branch must skip", async () => {
  const { calls, deps } = recorder();
  assert.deepEqual(await fulfilStageReplyLetter(session({ metadata: { productId: "premium-pack" } }), deps), { ok: false, reason: "not_stage_product" });
  assert.deepEqual(await fulfilStageReplyLetter(session({}, { stage: "court-claim" }), deps), { ok: false, reason: "bad_stage" });
  assert.deepEqual(await fulfilStageReplyLetter(session({ metadata: { productId: "stage-reply-letter" } }), deps), { ok: false, reason: "no_appeal_data" });
  const noEmail = session({ customer_details: null }, { form: { ...appeal.form, email: undefined } });
  delete noEmail.metadata.email;
  assert.deepEqual(await fulfilStageReplyLetter(noEmail, deps), { ok: false, reason: "no_email" });
  assert.equal(calls.generate.length, 0);
  assert.equal(calls.emails.length, 0);
});

test("email copy when the buyer left name and address blank", () => {
  const input = {
    stage: "collector",
    fineType: "private",
    operatorName: "ParkingEye",
    grounds: [],
  };
  const msg = buildStageReplyEmail(input, "x@example.com", "letter", undefined, []);
  assert.match(msg.html, /replace \[YOUR NAME\] and \[YOUR ADDRESS\]/);
  assert.equal(msg.subject, "Your Reply to Debt Recovery Letter: the debt recovery company");
});

test("appeal body lookup from the operator data", () => {
  assert.equal(appealBodyForOperator("ParkingEye"), "POPLA");
  assert.equal(appealBodyForOperator("parkingeye ltd"), "POPLA");
  assert.equal(appealBodyForOperator("Some Unknown Parking Ltd"), undefined);
  assert.equal(appealBodyForOperator(""), undefined);
  assert.equal(appealBodyForOperator(undefined), undefined);
});

test("webhook POST routes a stage-reply session to the new branch ahead of the generic path", async () => {
  process.env.STRIPE_WEBHOOK_SECRET = "whsec_test_constructed";
  process.env.STRIPE_SECRET_KEY = "sk_test_constructed_never_called";
  const { POST } = await import("@/app/api/webhooks/stripe/route");

  // A court-claim stage is not a reply stage: the branch must answer
  // skipped:bad_stage. The generic path would instead have tried to generate a
  // first-stage letter (and thrown for the missing Anthropic key).
  const s = session({}, { stage: "court-claim" });
  const payload = JSON.stringify({
    id: "evt_test_constructed",
    object: "event",
    type: "checkout.session.completed",
    data: { object: s },
  });
  const signature = Stripe.webhooks.generateTestHeaderString({ payload, secret: process.env.STRIPE_WEBHOOK_SECRET });
  const req = new NextRequest("http://localhost/api/webhooks/stripe", {
    method: "POST",
    headers: { "stripe-signature": signature, "content-type": "application/json" },
    body: payload,
  });
  const res = await POST(req);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true, skipped: "bad_stage" });

  // Untouched behaviour: a bad signature is still rejected.
  const bad = new NextRequest("http://localhost/api/webhooks/stripe", {
    method: "POST",
    headers: { "stripe-signature": "t=1,v1=deadbeef" },
    body: payload,
  });
  assert.equal((await POST(bad)).status, 400);
});
