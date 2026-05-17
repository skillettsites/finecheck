import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Lightweight read-only endpoint for the success page to check whether the
// Stripe webhook has already fulfilled this session (= generated + emailed
// the letter server-side). The client uses this to decide whether to skip
// its own legacy client-side email send and avoid sending a duplicate.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY missing");
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

export async function GET(request: NextRequest) {
  const sessionId = new URL(request.url).searchParams.get("session_id");
  if (!sessionId || !sessionId.startsWith("cs_")) {
    return NextResponse.json({ error: "Invalid session_id" }, { status: 400 });
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const piId = typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent?.id;
    let fulfilled = false;
    let letterSent = false;
    if (piId) {
      const pi = await stripe.paymentIntents.retrieve(piId);
      fulfilled = pi.metadata?.fulfilled === "true";
      letterSent = !!pi.metadata?.letter_sent_at;
    }
    return NextResponse.json({
      paymentStatus: session.payment_status,
      fulfilled,
      letterSent,
    });
  } catch (err) {
    console.error("session-status error:", err);
    return NextResponse.json({ error: "Lookup failed" }, { status: 500 });
  }
}
