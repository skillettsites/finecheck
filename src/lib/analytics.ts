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
