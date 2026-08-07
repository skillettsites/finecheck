// First-touch attribution capture, ported from HomeBuyerCheck.
//
// Why this exists: every paid Stripe session on this site up to 2026-08-06 was
// recorded with landing_page "?" and source "direct", because nothing ever
// collected the data. With 71 blog posts driving traffic there was no way to
// tell which content earned money. Nothing here changes what Google indexes.

const STORAGE_KEY = "aaf_attribution";

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer?: string;
  referrer_source?: string;
  landing_page?: string;
}

function parseReferrerSource(referrer: string): string | undefined {
  if (!referrer) return undefined;
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (host.includes("chatgpt.com") || host.includes("chat.openai.com")) return "chatgpt";
    if (host.includes("google")) return "google";
    if (host.includes("bing")) return "bing";
    if (host.includes("yahoo")) return "yahoo";
    if (host.includes("duckduckgo")) return "duckduckgo";
    if (host.includes("ecosia")) return "ecosia";
    if (host.includes("copilot.microsoft")) return "copilot";
    if (host.includes("claude.ai")) return "claude";
    if (host.includes("perplexity")) return "perplexity";
    if (host.includes("facebook") || host.includes("fb.com")) return "facebook";
    if (host.includes("twitter") || host.includes("x.com")) return "twitter";
    if (host.includes("reddit")) return "reddit";
    if (host.includes("moneysavingexpert")) return "moneysavingexpert";
    if (host.includes("pepipoo")) return "pepipoo";
    if (host.includes("mumsnet")) return "mumsnet";
    return host;
  } catch {
    return undefined;
  }
}

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const a: Attribution = {};

    const utm = (k: string) => params.get(k) || undefined;
    if (utm("utm_source")) a.utm_source = utm("utm_source");
    if (utm("utm_medium")) a.utm_medium = utm("utm_medium");
    if (utm("utm_campaign")) a.utm_campaign = utm("utm_campaign");
    if (utm("utm_content")) a.utm_content = utm("utm_content");

    // Match on hostname, not the whole URL: a third-party page whose query
    // string happens to mention appealafine.co.uk is an external referrer and
    // should be recorded, not discarded as internal.
    const referrer = document.referrer;
    if (referrer) {
      let isInternal = false;
      try {
        isInternal = new URL(referrer).hostname.endsWith("appealafine.co.uk");
      } catch {
        isInternal = false;
      }
      if (!isInternal) {
        a.referrer = referrer;
        const source = parseReferrerSource(referrer);
        if (source) a.referrer_source = source;
      }
    }

    a.landing_page = window.location.pathname;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(a));
  } catch {
    // Private browsing or storage disabled. Attribution is best-effort and must
    // never break the page it is mounted on.
  }
}

export function getAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

/**
 * Flatten attribution into Stripe metadata keys. Values are capped at 500 chars
 * (Stripe's per-value limit); referrer URLs can be long. Empty keys are omitted
 * rather than sent as "" so the metadata budget is not wasted.
 */
export function attributionToMetadata(a: Attribution | null | undefined): Record<string, string> {
  if (!a) return {};
  const out: Record<string, string> = {};
  const put = (k: string, v: unknown) => {
    if (typeof v === "string" && v.trim()) {
      // Trailing lone surrogate would make Stripe reject the whole request,
      // which drops the buyer into the fallback path with no server-side letter.
      out[k] = v.trim().slice(0, 500).replace(/[\uD800-\uDFFF]$/, "");
    }
  };
  put("utm_source", a.utm_source);
  put("utm_medium", a.utm_medium);
  put("utm_campaign", a.utm_campaign);
  put("utm_content", a.utm_content);
  put("referrer", a.referrer);
  put("referrer_source", a.referrer_source);
  put("landing_page", a.landing_page);
  return out;
}
