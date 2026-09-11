// buildAssessmentRow: the sanitiser between the client's POST body and the
// aaf_assessments insert. It must never let a personal field through and must
// drop anything the table's check constraints would reject.
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildAssessmentRow } from "@/lib/analytics";

const UA_IPHONE =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
const UA_DESKTOP =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36";

const good = {
  fineType: "private",
  issuer: "ParkingEye",
  contravention: "overstayed",
  stage: "collector",
  overallStrength: "strong",
  successProbability: 72,
  recommendedProduct: "stage-reply-letter",
  groundsCount: 3,
  deadlineDays: 18,
  landingPath: "/blog/dcbl-letter?utm_source=x#top",
  referrer: "https://www.google.com/search?q=dcbl",
  refined: false,
};

test("valid body becomes a complete row", () => {
  const row = buildAssessmentRow(good, UA_IPHONE);
  assert.deepEqual(row, {
    fine_type: "private",
    issuer: "ParkingEye",
    contravention: "overstayed",
    stage: "collector",
    overall_strength: "strong",
    success_probability: 72,
    recommended_product: "stage-reply-letter",
    grounds_count: 3,
    deadline_days: 18,
    device: "mobile",
    landing_path: "/blog/dcbl-letter",
    referrer_host: "www.google.com",
    refined: false,
  });
});

test("required fields missing or out of range drop the row", () => {
  assert.equal(buildAssessmentRow({ ...good, fineType: "speeding" }, UA_DESKTOP), null);
  assert.equal(buildAssessmentRow({ ...good, overallStrength: "excellent" }, UA_DESKTOP), null);
  assert.equal(buildAssessmentRow({ ...good, successProbability: 101 }, UA_DESKTOP), null);
  assert.equal(buildAssessmentRow({ ...good, successProbability: "72" }, UA_DESKTOP), null);
  assert.equal(buildAssessmentRow({}, UA_DESKTOP), null);
});

test("unknown optional values fall back rather than failing", () => {
  const row = buildAssessmentRow(
    { ...good, stage: "bailiffs", recommendedProduct: "gold-pack", groundsCount: 99, deadlineDays: "soon", landingPath: "http://evil", referrer: "not a url" },
    ""
  );
  assert.equal(row.stage, "new");
  assert.equal(row.recommended_product, null);
  assert.equal(row.grounds_count, 0);
  assert.equal(row.deadline_days, null);
  assert.equal(row.landing_path, null);
  assert.equal(row.referrer_host, null);
  assert.equal(row.device, "unknown");
});

test("personal tokens are stripped from issuer and contravention", () => {
  const row = buildAssessmentRow(
    { ...good, issuer: "ParkingEye AB12 CDE dave@example.com", contravention: "PCN 1234567890 at Tesco" },
    UA_DESKTOP
  );
  assert.equal(row.issuer, "ParkingEye");
  assert.equal(row.contravention, "PCN at Tesco");
  assert.equal(row.device, "desktop");
});

test("refined is only true when literally true", () => {
  assert.equal(buildAssessmentRow({ ...good, refined: "true" }, UA_DESKTOP).refined, false);
  assert.equal(buildAssessmentRow({ ...good, refined: true }, UA_DESKTOP).refined, true);
});
