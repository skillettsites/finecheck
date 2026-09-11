// Assessment output per stage. The first-stage path must be unchanged; the
// later stages keep the grounds and score but swap deadline, next steps and
// the recommended product.
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  assessFine,
  STAGE_OPTIONS,
  isAppealStage,
  stageDeadlineDays,
  stageRecommendedProduct,
} from "@/lib/assessment";

const isoDaysAgo = (n) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
};

const privateInput = {
  fineType: "private",
  operatorName: "ParkingEye",
  parkingEventDate: isoDaysAgo(40),
  ntkReceivedDate: isoDaysAgo(20),
  fineDate: isoDaysAgo(40),
  fineAmount: 100,
  location: "Tesco Extra, Manchester",
  wasDriver: "no",
  circumstances: "The signs were hidden behind a tree and the machine was broken.",
};

const councilInput = {
  fineType: "council",
  councilName: "Manchester City Council",
  contraventionDescription: "Parked in a residents bay",
  fineDate: isoDaysAgo(5),
  fineAmount: 70,
  location: "High Street",
  wasDriver: "yes",
  circumstances: "I had a valid permit displayed",
};

test("stage omitted and stage 'new' give the same result as before, plus stage: 'new'", () => {
  const withoutStage = assessFine(privateInput);
  const withNew = assessFine({ ...privateInput, stage: "new" });
  assert.equal(withoutStage.stage, "new");
  assert.deepEqual(withoutStage, withNew);
  // First-stage behaviour: strong private case recommends the standard letter,
  // deadline runs 28 days from the NtK, four generic next steps.
  assert.equal(withoutStage.overallStrength, "strong");
  assert.equal(withoutStage.recommendedProduct, "standard-letter");
  assert.equal(withoutStage.deadlineDays, 8);
  assert.equal(withoutStage.nextSteps.length, 4);
  assert.match(withoutStage.nextSteps[0], /Generate your personalised appeal letter/);
});

test("later stages keep the grounds and score", () => {
  const base = assessFine(privateInput);
  for (const stage of ["rejected", "popla-rejected", "collector", "letter-before-claim", "court-claim"]) {
    const r = assessFine({ ...privateInput, stage });
    assert.equal(r.stage, stage);
    assert.deepEqual(r.grounds, base.grounds, stage);
    assert.equal(r.successProbability, base.successProbability, stage);
    assert.equal(r.overallStrength, base.overallStrength, stage);
    assert.deepEqual(r.letterArguments, base.letterArguments, stage);
  }
});

test("recommended product per stage", () => {
  assert.equal(stageRecommendedProduct("new"), null);
  assert.equal(stageRecommendedProduct("rejected"), "stage-reply-letter");
  assert.equal(stageRecommendedProduct("popla-rejected"), "stage-reply-letter");
  assert.equal(stageRecommendedProduct("collector"), "stage-reply-letter");
  assert.equal(stageRecommendedProduct("letter-before-claim"), "stage-reply-letter");
  assert.equal(stageRecommendedProduct("court-claim"), "escalation-pack");
  // Through assessFine, for a weak council case that would otherwise recommend premium.
  const weakCouncil = assessFine({ ...councilInput, circumstances: "", contraventionDescription: "" });
  assert.equal(weakCouncil.recommendedProduct, "premium-pack");
  assert.equal(assessFine({ ...weakCouncil, ...councilInput, circumstances: "", contraventionDescription: "", stage: "collector" }).recommendedProduct, "stage-reply-letter");
  assert.equal(assessFine({ ...councilInput, stage: "court-claim" }).recommendedProduct, "escalation-pack");
});

test("stage deadlines count from the letter date", () => {
  assert.equal(stageDeadlineDays("rejected", isoDaysAgo(10)), 18);
  assert.equal(stageDeadlineDays("letter-before-claim", isoDaysAgo(10)), 20);
  assert.equal(stageDeadlineDays("court-claim", isoDaysAgo(3)), 11);
  assert.equal(stageDeadlineDays("court-claim", isoDaysAgo(30)), 0, "never negative");
  assert.equal(stageDeadlineDays("popla-rejected", isoDaysAgo(1)), null, "no statutory clock");
  assert.equal(stageDeadlineDays("collector", isoDaysAgo(1)), null, "no statutory clock");
  assert.equal(stageDeadlineDays("rejected", undefined), null, "no date given");
  assert.equal(stageDeadlineDays("rejected", "not a date"), null);
  // The first-stage NtK deadline is replaced, not kept, at a later stage.
  const r = assessFine({ ...privateInput, stage: "letter-before-claim", stageLetterDate: isoDaysAgo(12) });
  assert.equal(r.deadlineDays, 18);
  assert.equal(assessFine({ ...privateInput, stage: "collector" }).deadlineDays, null);
});

test("next steps are stage and fine-type specific", () => {
  const priv = assessFine({ ...privateInput, stage: "rejected" });
  assert.match(priv.nextSteps[0], /POPLA .*IAS .*28 days/);
  const council = assessFine({ ...councilInput, stage: "rejected" });
  assert.match(council.nextSteps[0], /Notice to Owner/);
  assert.match(assessFine({ ...privateInput, stage: "collector" }).nextSteps.join(" "), /Never phone/);
  assert.match(assessFine({ ...privateInput, stage: "letter-before-claim" }).nextSteps[0], /30 days/);
  assert.match(assessFine({ ...privateInput, stage: "court-claim" }).nextSteps[0], /14 days/);
  assert.match(assessFine({ ...privateInput, stage: "popla-rejected" }).nextSteps[0], /not a court order/);
});

test("STAGE_OPTIONS and isAppealStage agree, default first", () => {
  assert.equal(STAGE_OPTIONS[0].id, "new");
  assert.equal(STAGE_OPTIONS.length, 6);
  for (const o of STAGE_OPTIONS) assert.ok(isAppealStage(o.id));
  assert.equal(isAppealStage("bailiffs"), false);
  assert.equal(isAppealStage(undefined), false);
  for (const o of STAGE_OPTIONS) {
    assert.ok(!/—/.test(o.label + o.hint), "no em dashes");
  }
});
