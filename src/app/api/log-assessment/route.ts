import { NextRequest, NextResponse, after } from "next/server";
import { buildAssessmentRow, logAssessment } from "@/lib/analytics";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Records the verdict each visitor was shown by the free assessment.
 *
 * Sister endpoint of /api/log-search. That one feeds the shared `searches`
 * board and stays untouched; this one writes the strength, probability,
 * stage and recommended product to `aaf_assessments` so the 95% who never buy
 * can be read by what they were told. Same rules: anon key only, after() so
 * the isolate finishes the insert, nothing personal accepted. Anything that
 * does not sanitise to a valid row is dropped with a 400, never thrown.
 */

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const row = buildAssessmentRow(body, req.headers.get("user-agent") || "");
  if (!row) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  after(() => logAssessment(row));

  return NextResponse.json({ ok: true });
}
