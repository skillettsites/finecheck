import { MetadataRoute } from "next";
import { SITEMAP_SECTIONS, SITE_BASE_URL } from "@/lib/sitemap-sections";

const base = SITE_BASE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/appeal/success", "/escalation-pack/success", "/admin"],
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
    // /sitemap.xml is a real <sitemapindex> that references every silo
    // sitemap, so one submission covers the whole site. The children stay
    // listed as a belt-and-braces discovery path for crawlers that read
    // robots.txt but do not expand indexes.
    sitemap: [
      `${base}/sitemap.xml`,
      ...SITEMAP_SECTIONS.map((s) => `${base}/${s}/sitemap.xml`),
    ],
    host: base,
  };
}
