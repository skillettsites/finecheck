#!/usr/bin/env node
/**
 * Product-claim guard.
 *
 * Background: an audit on 2026-08-07 found marketing copy across the site
 * claiming the £4.99 Premium Appeal Pack "drafts your N244", "writes the full
 * Defence (N9B) and Allocation Questionnaire (N180)", or includes a
 * "Certificate of Cancellation template" and "CRA dispute letter". None of
 * those exist in ANY product, at any price.
 *
 * WHAT ACTUALLY EXISTS (keep in sync with src/data/products.ts):
 *   £2.99 Standard  - an AI-generated personalised appeal letter. Nothing else.
 *   £4.99 Premium   - the above, plus a second-stage appeal letter for
 *                     POPLA/IAS/tribunal, an evidence CHECKLIST, and
 *                     operator-specific strategy.
 *   £19.99 Escalation Pack - five STATIC PDFs, private parking only: decision
 *                     guide, debt recovery response letter, POPLA/IAS rejection
 *                     letter, Letter Before Claim response + protocol
 *                     checklist, and a court defence preparation pack, which is
 *                     a defence CHECKLIST and a witness statement SKELETON.
 *
 * Nothing at any price drafts, completes or files a court form.
 *
 * A first version of this script passed while twelve false claims were still
 * live. The failures were instructive and the rules below encode them:
 *   - negation was tested against the whole line, so a single "Don't" anywhere
 *     in a CTA disarmed every rule on that line;
 *   - "witness statement" and "defence" were not in the artefact list at all,
 *     which is the exact shape of most of the false claims;
 *   - "costs schedule" was a space literal while the copy is "costs-schedule";
 *   - only src/data/blog-posts*.ts was scanned, so src/app was invisible.
 *
 *   node scripts/check-product-claims.mjs
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join, relative } from "path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Every file that can contain customer-facing product copy. */
function collect(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collect(full, acc);
    else if (/\.(ts|tsx)$/.test(entry)) acc.push(full);
  }
  return acc;
}

// Court forms and filings. Named forms are never produced by any product.
const COURT_FORMS = /\b(N244|N9B|N9 acknowledgement|N180|N1 claim|claim form N1|TE7|TE9|statutory declaration|certificate of cancellation|certificate of satisfaction|CRA dispute|credit reference agency dispute|draft order|evidence index|bundle index|costs[- ]schedule|allocation questionnaire|directional questionnaire|(application|apply) to set[- ]aside|set[- ]aside application)\b/i;

/**
 * Adjectives asserting the artefact arrives already done. "a completed N180 you
 * file" is still us producing the form, so customer-does-the-filing wording
 * must not excuse it.
 */
const PRODUCED_ADJ = /\b(completed|drafted|pre-?filled|filled in|populated|ready[- ]to[- ]file|ready to file|ready to sign)\b/i;

// Court-stage deliverables. These exist ONLY in the £19.99 pack, and only in
// the limited form of a checklist or a skeleton.
const COURT_DELIVERABLES = /\b(witness statement|court defence|full defence|defence pack|court pack|court claim pack|costs[- ]schedule)\b/i;

// Wording that makes a checklist/skeleton claim legitimate for the £19.99 pack.
// "court defence preparation pack" is the document's real name in
// escalation-pack.ts, so "preparation pack" is legitimate limiting language.
const LIMITED_FORM = /\b(checklist|skeleton|preparation pack|template you complete|you complete|you file|guide)\b/i;

/**
 * The limiting word must sit NEXT TO the deliverable it qualifies. Testing the
 * whole sentence let "a full court defence with witness statement skeleton"
 * pass, because `skeleton` appeared somewhere in it. It must also never launder
 * a deliverable that is itself described as full, complete or comprehensive.
 */
function limitedAdjacent(sentence, match) {
  const idx = sentence.indexOf(match[0]);
  if (idx === -1) return false;
  const lead = sentence.slice(Math.max(0, idx - 30), idx);
  if (/\b(full|complete|comprehensive)\b[\s\w]*$/i.test(lead)) return false;
  const near = sentence.slice(Math.max(0, idx - 40), idx + match[0].length + 120);
  return LIMITED_FORM.test(near);
}

// Verbs asserting we produce the artefact for the customer.
const PRODUCE = /\b(draft|drafts|drafted|drafting|write|writes|wrote|generate|generates|build|builds|complete|completes|includes?|provides?|package[sd]?|prepare[sd]?|populated|handles the drafting)\b/i;

const FILING_CLAIMS = /\b(we file (it|them|your)|filed for you|we submit (it|them|your)|ready to file for you)\b/i;

const CHEAP_PRICE = /£(2\.99|4\.99)/;
const PACK_PRICE = /£19\.99/;

/**
 * Negation must sit in the SAME CLAUSE as, and BEFORE, the claim. Testing the
 * whole line let "Don't miss the deadline" cancel a false claim later in the
 * same CTA.
 */
function isNegated(text, claimIndex) {
  const before = text.slice(0, claimIndex);
  const clause = before.split(/[.;:|]/).pop() || "";
  return /\b(do not|does not|don't|doesn't|never|cannot|can't|no longer|not include|does not contain|is not|are not)\b/i.test(clause);
}

const violations = [];
const push = (file, line, slug, what, snippet) =>
  violations.push({ file: relative(ROOT, file), line, slug, what, snippet: snippet.trim().slice(0, 170) });

for (const file of collect(join(ROOT, "src"))) {
  const lines = readFileSync(file, "utf8").split("\n");
  let slug = "(page)";
  lines.forEach((line, i) => {
    const m = line.match(/^\s*slug:\s*['"]([a-z0-9-]+)['"]/);
    if (m) slug = m[1];

    // Price context is BLOCK-scoped, not line-scoped. A heading such as
    // "## How the £4.99 Pack Differs" followed by bullets that name court
    // documents with no £ of their own is still a priced claim, and the earlier
    // line-scoped version could not see it. Look back over a short window.
    const block = lines.slice(Math.max(0, i - 8), i + 1).join(" ");
    const cheapCtx = CHEAP_PRICE.test(line) || CHEAP_PRICE.test(block);
    const packCtx = PACK_PRICE.test(line) || PACK_PRICE.test(block);
    if (!cheapCtx && !packCtx) return;

    const ln = i + 1;

    // Analyse SENTENCE BY SENTENCE, not line by line. A CTA body routinely
    // contains a correct disclaimer ("We do not fill in court forms") next to a
    // legitimate mention, and line-level matching cannot tell them apart.
    // Splitting on sentence and CTA-field boundaries keeps each claim with its
    // own subject and its own negation.
    const sentences = line.split(/(?<=[.;!?])\s+|\|/);

    for (const s of sentences) {
      // A claim only counts if it is attributed to US or to a priced product.
      // "you complete it yourself" and "the form is two pages" are not claims.
      //
      // Bullets under a heading such as "## What the £4.99 Premium Pack Adds"
      // carry no attribution of their own, but the heading attributes them.
      // Without this, a bulleted list of court documents was invisible.
      const headingAttributes =
        /(£(2\.99|4\.99|19\.99))[^\n]{0,60}\b(pack|letter|plan)\b[^\n]{0,40}\b(adds?|includes?|covers?|gives?|differs?|contains?)\b/i.test(block) ||
        /\b(what|how)[^\n]{0,40}£(2\.99|4\.99|19\.99)[^\n]{0,40}\b(pack|letter)\b/i.test(block);
      // Heading-derived attribution only counts for a NAMED court form. Without
      // that restriction an editorial heading such as "## Step 3: Write the
      // Witness Statement" in a post that mentions the pack became a claim.
      const directlyAttributed = /\b(we|our|us)\b|£\d|\bpack\b/i.test(s);
      const attributed = directlyAttributed || (headingAttributes && COURT_FORMS.test(s));
      if (!attributed) continue;
      // Explicit customer-does-it wording is the honest construction we want.
      const customerDoes = /\byou (complete|file|sign|swear|write|add|assemble|submit|paginate)\b|\bcompleted by you\b|\byourself\b/i.test(s);
      const negated = /\b(do not|does not|don't|doesn't|never|cannot|can't|no longer|not include|does not contain|is not|are not|free (to download|from))\b/i.test(s);

      const form = s.match(COURT_FORMS);
      const deliverable = s.match(COURT_DELIVERABLES);

      // Rule A: neither £2.99 nor £4.99 contains ANY court-stage material, so
      // attributing one to those prices is false however it is phrased.
      // Must be OUR price, not any price. Editorial sentences quoting a court
      // fee ("The N244 fee is 59 pounds paper") are not product claims, and
      // matching a bare pound sign turned those into false positives.
      const selfAttributed =
        /(our|we|us)/i.test(s) || CHEAP_PRICE.test(s) || PACK_PRICE.test(s) || /pack/i.test(s);
      if (cheapCtx && selfAttributed && !PACK_PRICE.test(s) && !negated && (!customerDoes || PRODUCED_ADJ.test(s))) {
        const hit = form || deliverable;
        if (hit) push(file, ln, slug, `"${hit[0]}" attributed to £2.99/£4.99`, s);
      }

      // Rule B: at ANY price, claiming to produce a named court form is false.
      const preMade = PRODUCED_ADJ.test(s);
      if (form && (PRODUCE.test(s) || preMade) && !negated && (!customerDoes || preMade)) {
        push(file, ln, slug, `claims to produce "${form[0]}"`, s);
      }

      // Rule C: at £19.99 the court item is a checklist and a skeleton only,
      // so "full" or "complete" court defence overstates it.
      if (packCtx && deliverable && !limitedAdjacent(s, deliverable) && !negated && !customerDoes) {
        push(file, ln, slug, `"${deliverable[0]}" at £19.99 without adjacent checklist/skeleton wording`, s);
      }

      if (FILING_CLAIMS.test(s)) push(file, ln, slug, "claims we file at court", s);
    }
  });
}

if (violations.length === 0) {
  console.log("check-product-claims: OK. No priced copy claims a court document we do not produce.");
  process.exit(0);
}

console.error(`check-product-claims: ${violations.length} false product claim(s).\n`);
for (const v of violations) {
  console.error(`  ${v.file}:${v.line}  [${v.slug}]  ${v.what}`);
  console.error(`    ...${v.snippet}...\n`);
}
console.error("£2.99 and £4.99 contain no court material. £19.99 is a defence CHECKLIST");
console.error("and a witness statement SKELETON. Nothing drafts or files a court form.");
process.exit(1);
