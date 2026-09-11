// The checkout route's Stripe metadata arithmetic, exercised through the real
// POST handler with no Stripe key set: an appeal that fits the budget passes
// encoding and fails later at Stripe (500), one that does not fit is refused
// before Stripe is touched (400). With 7 attribution keys the budget is
// 50 - 4 fixed - 1 counter - 7 = 38 chunks of 450 characters.
import { test } from "node:test";
import assert from "node:assert/strict";
import { NextRequest } from "next/server";
import { POST } from "@/app/api/checkout/route";

delete process.env.STRIPE_SECRET_KEY;

const attribution = {
  utm_source: "a",
  utm_medium: "b",
  utm_campaign: "c",
  utm_content: "d",
  referrer: "https://www.google.com/",
  referrer_source: "google",
  landing_page: "/blog/x",
};

// Build an appeal whose JSON is exactly `chunks` * 450 characters long.
function appealOfChunks(chunks, extra = {}) {
  const shell = { form: { email: "buyer@example.com", fineType: "private" }, ...extra, pad: "" };
  const target = chunks * 450;
  const without = JSON.stringify(shell).length;
  shell.pad = "x".repeat(target - without);
  assert.equal(JSON.stringify(shell).length, target);
  return shell;
}

async function post(body) {
  const req = new NextRequest("http://localhost/api/checkout", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const res = await POST(req);
  return { status: res.status, json: await res.json() };
}

test("38 chunks with 7 attribution keys fit; 39 do not", async () => {
  const fits = await post({ productId: "standard-letter", appeal: appealOfChunks(38), attribution, stage: "new" });
  assert.equal(fits.status, 500, "reached Stripe (no key) so encoding passed");
  assert.match(fits.json.error, /Could not start checkout/);

  const tooBig = await post({ productId: "standard-letter", appeal: appealOfChunks(39), attribution, stage: "new" });
  assert.equal(tooBig.status, 400);
  assert.match(tooBig.json.error, /too large/);
});

test("the stage key is reserved even when the client sends no stage", async () => {
  // Same budget without a stage: a legacy client cannot squeeze in a 39th chunk.
  const tooBig = await post({ productId: "premium-pack", appeal: appealOfChunks(39), attribution });
  assert.equal(tooBig.status, 400);
  const fits = await post({ productId: "premium-pack", appeal: appealOfChunks(38), attribution });
  assert.equal(fits.status, 500);
});

test("stage-reply-letter goes through the appeal branch and needs an email", async () => {
  const noEmail = await post({ productId: "stage-reply-letter", stage: "collector", appeal: { form: {} } });
  assert.equal(noEmail.status, 400);
  assert.match(noEmail.json.error, /Valid email/);
  const ok = await post({ productId: "stage-reply-letter", stage: "collector", appeal: appealOfChunks(3, { addOns: ["premium-pack"] }) });
  assert.equal(ok.status, 500, "encoded, then stopped at Stripe");
});

test("unknown product is refused", async () => {
  const r = await post({ productId: "gold-pack", appeal: { form: { email: "a@b.co" } } });
  assert.equal(r.status, 400);
});
