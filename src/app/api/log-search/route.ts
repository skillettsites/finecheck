import { NextRequest, NextResponse, after } from "next/server";
import { buildAppealSearchQuery, logSearch } from "@/lib/analytics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Server-side write for the client-only free assessment.
 *
 * The homepage /appeal flow runs assessFine in the browser, so the INSERT
 * has to happen here with the anon key. after() keeps the isolate alive
 * until Supabase accepts the row. Personal fields from the form are not
 * accepted — only issuer, fine type and contravention.
 */

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const issuer = typeof body.issuer === "string" ? body.issuer : "";
  const fineType = typeof body.fineType === "string" ? body.fineType : "";
  const contravention = typeof body.contravention === "string" ? body.contravention : "";
  const searchType = body.searchType === "fine" ? "fine" : "appeal";
  const resultFound = body.resultFound !== false;
  const durationMs = typeof body.durationMs === "number" ? body.durationMs : null;

  const query = buildAppealSearchQuery({ issuer, fineType, contravention });

  after(() =>
    logSearch({
      query,
      resultFound,
      searchType,
      durationMs,
    })
  );

  return NextResponse.json({ ok: true });
}
