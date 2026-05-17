import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS } from "@/data/products";

// Stripe metadata limits: 50 keys total, 500 chars per value, 40 chars per key.
// We reserve a few keys for productId/fineType/email/chunks and chunk the
// stringified appeal across appeal_0 ... appeal_N. 450 chars/chunk leaves
// headroom and allows up to ~20KB total which is plenty for any appeal.
const CHUNK_SIZE = 450;
const MAX_CHUNKS = 45;

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

function encodeAppeal(appeal: unknown): Record<string, string> | { error: string } {
  let json: string;
  try {
    json = JSON.stringify(appeal);
  } catch {
    return { error: "Could not serialise appeal data" };
  }
  const chunks: string[] = [];
  for (let i = 0; i < json.length; i += CHUNK_SIZE) {
    chunks.push(json.slice(i, i + CHUNK_SIZE));
  }
  if (chunks.length > MAX_CHUNKS) {
    return { error: "Appeal data too large to encode in payment metadata" };
  }
  const meta: Record<string, string> = { appeal_chunks: String(chunks.length) };
  chunks.forEach((c, i) => {
    meta[`appeal_${i}`] = c;
  });
  return meta;
}

interface CheckoutPostBody {
  productId?: string;
  fineType?: string;
  appeal?: {
    form?: { email?: string; fineType?: string };
  };
}

// POST: primary path used by the appeal flow. Encodes the full appeal in
// Stripe metadata so the webhook can generate and send the letter
// server-side even if the user's browser tab dies after redirect to Stripe.
export async function POST(request: NextRequest) {
  let body: CheckoutPostBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const productId = body.productId;
  if (!productId || !PRODUCTS[productId]) {
    return NextResponse.json({ error: "Invalid or missing productId" }, { status: 400 });
  }
  if (!body.appeal || typeof body.appeal !== "object") {
    return NextResponse.json({ error: "Missing appeal data" }, { status: 400 });
  }
  const email = body.appeal.form?.email;
  const fineType = body.fineType || body.appeal.form?.fineType || "unknown";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const encoded = encodeAppeal(body.appeal);
  if ("error" in encoded) {
    return NextResponse.json({ error: encoded.error }, { status: 400 });
  }

  const product = PRODUCTS[productId];

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      success_url: `${request.nextUrl.origin}/appeal/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/appeal`,
      metadata: {
        productId,
        fineType,
        email,
        ...encoded,
      },
      payment_intent_data: {
        // Mirror the same metadata onto the PaymentIntent so the webhook can
        // atomically mark fulfilment there (Checkout Sessions are immutable
        // after creation; PaymentIntents allow metadata updates).
        metadata: {
          productId,
          email,
          source: "appealafine-web",
        },
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Stripe did not return a checkout URL" }, { status: 502 });
    }
    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json({ error: "Could not start checkout. Please try again." }, { status: 500 });
  }
}

// GET: legacy fallback. Returns a 307 redirect for old direct links.
// Does not encode appeal data, so the webhook will skip server-side letter
// generation for these sessions and the client-side flow remains responsible.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("product");
  const fineType = searchParams.get("fineType") || "unknown";

  if (!productId || !PRODUCTS[productId]) {
    return NextResponse.redirect(new URL("/appeal", request.url));
  }

  const product = PRODUCTS[productId];

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.nextUrl.origin}/appeal/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/appeal`,
      metadata: {
        productId,
        fineType,
        source: "legacy-get",
      },
    });

    if (session.url) {
      return NextResponse.redirect(session.url);
    }
    return NextResponse.redirect(new URL("/appeal", request.url));
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.redirect(new URL("/appeal?error=checkout", request.url));
  }
}
