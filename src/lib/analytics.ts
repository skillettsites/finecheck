// Search logging into the shared Supabase `searches` table.
//
// This is what puts AppealAFine on the Command Center searches board
// alongside ProbateCheck and the other sister sites: they all write the
// same shape with their own `site_id`.
//
// Two rules, both carried over from the sister sites:
//
//   1. ANON key only, never the service-role key. The Supabase project is
//      shared with CarCostCheck and roughly ninety other tables, and the
//      service-role key bypasses RLS on all of them. Anon can INSERT here
//      and read nothing back.
//   2. Never break the appeal flow. Analytics errors are swallowed and
//      never thrown to the visitor. The insert is returned as a Promise so
//      the route can finish it with `after()` before the Vercel isolate
//      freezes.
//
// Privacy: the query is issuer / fine type / contravention only. Never
// name, email, VRM, PCN number, address, or other personal details.

const URL_BASE =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
const ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";

export const HAS_ANALYTICS = !!(URL_BASE && ANON_KEY);

export type SearchLog = {
  /** Issuer + fine type + contravention. Never a name, email, VRM or PCN. */
  query: string;
  resultFound: boolean;
  searchType?: string;
  durationMs?: number | null;
};

const ALLOWED_FINE_TYPES = new Set(["council", "private", "bus-lane", "congestion"]);

// Mirrors the check constraints on aaf_assessments (supabase/migrations/
// 001_aaf_assessments.sql). Anything outside these sets is dropped here so a
// junk row never reaches PostgREST.
const ALLOWED_STAGES = new Set([
  "new",
  "rejected",
  "popla-rejected",
  "collector",
  "letter-before-claim",
  "court-claim",
]);
const ALLOWED_STRENGTHS = new Set(["strong", "moderate", "weak"]);
const ALLOWED_PRODUCTS = new Set(["standard-letter", "premium-pack", "escalation-pack", "stage-reply-letter"]);

let warnedMissingEnv = false;

function sanitizeToken(value: string, max: number): string {
  return value
    .replace(/\S+@\S+/g, " ")
    .replace(/\b[A-Z]{2}\d{2}\s?[A-Z]{3}\b/gi, " ")
    .replace(/\b[A-Z]\d{1,3}\s?[A-Z]{3}\b/gi, " ")
    .replace(/\b\d{5,}\b/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

/**
 * Build the searches.search_query from issuer / fine type / contravention
 * only. Personal fields must never be passed in.
 */
export function buildAppealSearchQuery(parts: {
  issuer?: string | null;
  fineType?: string | null;
  contravention?: string | null;
}): string {
  const rawType = sanitizeToken(String(parts.fineType ?? ""), 32).toLowerCase();
  const fineType = ALLOWED_FINE_TYPES.has(rawType) ? rawType : "";
  const issuer = sanitizeToken(String(parts.issuer ?? ""), 80);
  const contravention = sanitizeToken(String(parts.contravention ?? ""), 80);
  return [issuer, fineType, contravention].filter(Boolean).join(" ").slice(0, 200) || "appeal";
}

/**
 * One row per completed free assessment: what the visitor was told and which
 * product was put in front of them. Column names match aaf_assessments.
 * Never a name, email, VRM, PCN number or address.
 */
export type AssessmentRow = {
  fine_type: string;
  issuer: string | null;
  contravention: string | null;
  stage: string;
  overall_strength: string;
  success_probability: number;
  recommended_product: string | null;
  grounds_count: number;
  deadline_days: number | null;
  device: string;
  landing_path: string | null;
  referrer_host: string | null;
  refined: boolean;
};

function deviceFromUserAgent(ua: string): string {
  if (!ua) return "unknown";
  if (/iPad|Tablet/i.test(ua)) return "tablet";
  if (/Mobi|Android|iPhone/i.test(ua)) return "mobile";
  return "desktop";
}

function intInRange(value: unknown, min: number, max: number): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) return null;
  const n = Math.round(value);
  return n >= min && n <= max ? n : null;
}

/**
 * Sanitise the client's POST body into an aaf_assessments row, or null if the
 * required fields are missing or out of range. Pure, so it is unit tested.
 */
export function buildAssessmentRow(body: Record<string, unknown>, userAgent: string): AssessmentRow | null {
  const fineType = typeof body.fineType === "string" ? body.fineType.toLowerCase() : "";
  if (!ALLOWED_FINE_TYPES.has(fineType)) return null;
  const strength = typeof body.overallStrength === "string" ? body.overallStrength.toLowerCase() : "";
  if (!ALLOWED_STRENGTHS.has(strength)) return null;
  const probability = intInRange(body.successProbability, 0, 100);
  if (probability === null) return null;
  const stageRaw = typeof body.stage === "string" ? body.stage : "new";
  const stage = ALLOWED_STAGES.has(stageRaw) ? stageRaw : "new";
  const product = typeof body.recommendedProduct === "string" && ALLOWED_PRODUCTS.has(body.recommendedProduct)
    ? body.recommendedProduct
    : null;

  const issuer = sanitizeToken(String(body.issuer ?? ""), 80) || null;
  const contravention = sanitizeToken(String(body.contravention ?? ""), 80) || null;

  let landingPath: string | null = null;
  if (typeof body.landingPath === "string" && body.landingPath.startsWith("/")) {
    landingPath = body.landingPath.split("?")[0].split("#")[0].slice(0, 200) || null;
  }
  let referrerHost: string | null = null;
  if (typeof body.referrer === "string" && body.referrer) {
    try {
      referrerHost = new URL(body.referrer).hostname.toLowerCase().slice(0, 100) || null;
    } catch {
      referrerHost = null;
    }
  }

  return {
    fine_type: fineType,
    issuer,
    contravention,
    stage,
    overall_strength: strength,
    success_probability: probability,
    recommended_product: product,
    grounds_count: intInRange(body.groundsCount, 0, 50) ?? 0,
    deadline_days: intInRange(body.deadlineDays, -3650, 3650),
    device: deviceFromUserAgent(userAgent),
    landing_path: landingPath,
    referrer_host: referrerHost,
    refined: body.refined === true,
  };
}

export async function logAssessment(row: AssessmentRow): Promise<void> {
  if (!HAS_ANALYTICS) {
    if (!warnedMissingEnv) {
      warnedMissingEnv = true;
      console.warn(
        "appealafine logAssessment: HAS_ANALYTICS is false (missing SUPABASE_URL or ANON key)"
      );
    }
    return;
  }
  try {
    const res = await fetch(`${URL_BASE}/rest/v1/aaf_assessments`, {
      method: "POST",
      headers: {
        apikey: ANON_KEY,
        Authorization: `Bearer ${ANON_KEY}`,
        "Content-Type": "application/json",
        // Same rule as logSearch: never resolution=ignore-duplicates, anon
        // has INSERT only and PostgREST would turn it into an upsert.
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
      cache: "no-store",
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("appealafine logAssessment failed", res.status, body.slice(0, 300));
    }
  } catch (err) {
    console.error("appealafine logAssessment error", err);
  }
}

export async function logSearch(row: SearchLog): Promise<void> {
  if (!HAS_ANALYTICS) {
    if (!warnedMissingEnv) {
      warnedMissingEnv = true;
      console.warn(
        "appealafine logSearch: HAS_ANALYTICS is false (missing SUPABASE_URL or ANON key)"
      );
    }
    return;
  }
  if (!row.query) return;
  try {
    const res = await fetch(`${URL_BASE}/rest/v1/searches`, {
      method: "POST",
      headers: {
        apikey: ANON_KEY,
        Authorization: `Bearer ${ANON_KEY}`,
        "Content-Type": "application/json",
        // Never resolution=ignore-duplicates: PostgREST treats it as an
        // upsert, which needs UPDATE permission anon does not have.
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        site_id: "appealafine",
        search_query: row.query,
        result_found: row.resultFound,
        search_type: row.searchType ?? "appeal",
        duration_ms: row.durationMs ?? null,
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("appealafine logSearch failed", res.status, body.slice(0, 300));
    }
  } catch (err) {
    console.error("appealafine logSearch error", err);
  }
}
