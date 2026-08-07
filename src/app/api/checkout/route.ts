import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS } from "@/data/products";
import { attributionToMetadata, type Attribution } from "@/lib/tracking";

// Stripe metadata limits: 50 keys total, 500 chars per value, 40 chars per key.
// The appeal branch spends: productId + fineType + email (3), plus the
// appeal_chunks counter emitted by encodeAppeal (1), plus 0 to 7 attribution
// keys, plus appeal_0 ... appeal_N.
//
// Rather than hardcode a worst case and waste slots on the common visitor who
// arrives with no UTMs, compute the chunk budget per request. A typical
// submission measures around 1.6KB (4 chunks), so even the tightest budget
// leaves roughly 10x headroom.
const CHUNK_SIZE = 450;
const STRIPE_METADATA_KEY_LIMIT = 50;
const FIXED_APPEAL_KEYS = 3; // productId, fineType, email
const CHUNK_COUNTER_KEYS = 1; // appeal_chunks

function chunkBudget(attributionKeyCount: number): number {
  return STRIPE_METADATA_KEY_LIMIT - FIXED_APPEAL_KEYS - CHUNK_COUNTER_KEYS - attributionKeyCount;
}

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

function encodeAppeal(
  appeal: unknown,
  maxChunks: number
): Record<string, string> | { error: string } {
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
  if (chunks.length > maxChunks) {
    return { error: "Appeal data too large to encode in payment metadata" };
  }
  const meta: Record<string, string> = { appeal_chunks: String(chunks.length) };
  chunks.forEach((c, i) => {
    meta[`appeal_${i}`] = c;
  });
  return meta;
}

interface EscalationDetails {
  name?: string;
  address?: string;
  vehicleReg?: string;
  pcnReference?: string;
  operatorName?: string;
  email?: string;
}

interface CheckoutPostBody {
  productId?: string;
  fineType?: string;
  appeal?: {
    form?: { email?: string; fineType?: string };
  };
  // Optional buyer details for the Escalation Pack so the static documents
  // can be pre-filled before they are rendered to PDF. All fields optional:
  // anything the buyer leaves blank stays as a [BRACKETED] placeholder.
  details?: EscalationDetails;
  // First-touch attribution captured in the browser on the session's landing
  // page. Best-effort: absent for users with storage disabled, never required.
  attribution?: Attribution;
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

  // Attribution is best-effort and must never block a sale. Flatten once here
  // and spread into whichever branch runs.
  const attributionMeta = attributionToMetadata(body.attribution);

  // The Escalation Pack is a fixed document bundle: no appeal form precedes
  // it, so there is no appeal data to encode. Stripe Checkout collects the
  // buyer's email and the webhook fulfils from the static pack content.
  if (productId === "escalation-pack") {
    const product = PRODUCTS[productId];

    // Optional personalisation: encode any details the buyer provided so the
    // webhook can pre-fill the pack documents. Blank fields stay as
    // placeholders. Never block the sale if details are missing or oversized.
    const rawDetails = body.details && typeof body.details === "object" ? body.details : null;
    const details: EscalationDetails | null = rawDetails
      ? {
          name: rawDetails.name?.toString().trim() || undefined,
          address: rawDetails.address?.toString().trim() || undefined,
          vehicleReg: rawDetails.vehicleReg?.toString().trim() || undefined,
          pcnReference: rawDetails.pcnReference?.toString().trim() || undefined,
          operatorName: rawDetails.operatorName?.toString().trim() || undefined,
          email: rawDetails.email?.toString().trim() || undefined,
        }
      : null;
    const hasAnyDetail = details && Object.values(details).some(Boolean);
    let detailsMeta: Record<string, string> = {};
    if (hasAnyDetail) {
      // Escalation branch spends productId + email (2) rather than 3, so it has
      // one slot more than the appeal branch. Use the same conservative budget.
      const encoded = encodeAppeal({ details }, chunkBudget(Object.keys(attributionMeta).length));
      if (!("error" in encoded)) detailsMeta = encoded;
    }
    const buyerEmail = details?.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)
      ? details.email
      : undefined;

    try {
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.create({
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
        allow_promotion_codes: true,
        ...(buyerEmail ? { customer_email: buyerEmail } : {}),
        success_url: `${request.nextUrl.origin}/escalation-pack/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${request.nextUrl.origin}/escalation-pack`,
        metadata: {
          productId,
          ...(buyerEmail ? { email: buyerEmail } : {}),
          ...detailsMeta,
          ...attributionMeta,
        },
        payment_intent_data: {
          metadata: {
            productId,
            source: "appealafine-web",
            ...(attributionMeta.landing_page ? { landing_page: attributionMeta.landing_page } : {}),
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

  if (!body.appeal || typeof body.appeal !== "object") {
    return NextResponse.json({ error: "Missing appeal data" }, { status: 400 });
  }
  const email = body.appeal.form?.email;
  const fineType = body.fineType || body.appeal.form?.fineType || "unknown";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
  }

  const encoded = encodeAppeal(body.appeal, chunkBudget(Object.keys(attributionMeta).length));
  if ("error" in encoded) {
    return NextResponse.json({ error: encoded.error }, { status: 400 });
  }

  const product = PRODUCTS[productId];

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      // Omit payment_method_types so Stripe surfaces every eligible method
      // (card + Apple Pay + Google Pay + Link) from the account's payment
      // method configuration. Wallets are a one-tap checkout on mobile, where
      // most of our traffic is, so the old hardcoded card-only list added
      // needless friction at the final step.
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
      allow_promotion_codes: true,
      customer_email: email,
      success_url: `${request.nextUrl.origin}/appeal/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/appeal`,
      metadata: {
        productId,
        fineType,
        email,
        ...attributionMeta,
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
          ...(attributionMeta.landing_page ? { landing_page: attributionMeta.landing_page } : {}),
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
      // Omit payment_method_types: lets Stripe show wallets too (see POST above).
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
