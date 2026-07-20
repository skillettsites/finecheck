// Thin client-side wrappers around gtag for GA4 key events. The base tag is
// loaded by the GoogleAnalytics component in the root layout; these helpers no-op when
// gtag is absent (GA blocked, SSR, or missing env).

interface GtagItem {
  item_id: string;
  item_name: string;
  price: number;
  quantity: number;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtagSafe(...args: unknown[]): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

export function trackBeginCheckout(productId: string, productName: string, pricePence: number): void {
  gtagSafe("event", "begin_checkout", {
    currency: "GBP",
    value: pricePence / 100,
    items: [
      { item_id: productId, item_name: productName, price: pricePence / 100, quantity: 1 } satisfies GtagItem,
    ],
  });
}

// Fires the GA4 purchase key event exactly once per Stripe session: dedupes
// via sessionStorage keyed on the transaction id so refreshes do not double
// count revenue.
export function trackPurchase(
  transactionId: string,
  productId: string,
  productName: string,
  pricePence: number
): void {
  if (typeof window === "undefined") return;
  const dedupeKey = `aaf_purchase_${transactionId}`;
  try {
    if (sessionStorage.getItem(dedupeKey)) return;
    sessionStorage.setItem(dedupeKey, "1");
  } catch {
    // sessionStorage unavailable: still fire, better slightly over than zero.
  }
  gtagSafe("event", "purchase", {
    transaction_id: transactionId,
    currency: "GBP",
    value: pricePence / 100,
    items: [
      { item_id: productId, item_name: productName, price: pricePence / 100, quantity: 1 } satisfies GtagItem,
    ],
  });
}
