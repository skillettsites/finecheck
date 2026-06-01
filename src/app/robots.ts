import { MetadataRoute } from "next";

const base = "https://www.appealafine.co.uk";

// The site's URLs are split across native App Router sitemaps: the root
// sitemap holds static pages, and each content silo has its own
// <section>/sitemap.xml. Google/Bing only discover a sitemap if it is
// referenced, so every silo sitemap is listed here explicitly.
const sitemapSections = [
  "appeals",
  "councils",
  "grounds",
  "guides",
  "situations",
  "templates",
  "blog",
  "parking-fines",
  "london",
  "data",
  "local-fines",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/appeal/success", "/admin"],
      },
      // Explicitly welcome the major AI answer engines (high-intent referrals).
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Block bulk scrapers with no search/answer value.
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "Amazonbot", disallow: "/" },
    ],
    sitemap: [
      `${base}/sitemap.xml`,
      ...sitemapSections.map((s) => `${base}/${s}/sitemap.xml`),
    ],
    host: base,
  };
}
