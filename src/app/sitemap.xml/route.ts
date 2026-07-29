import { SITEMAP_SECTIONS, SITE_BASE_URL } from '@/lib/sitemap-sections';

// Next.js only emits <urlset> sitemaps from the sitemap.ts metadata
// convention, never a <sitemapindex>. The site's ~490 URLs are split across
// per-silo sitemaps, so without an index at /sitemap.xml each child sitemap
// had to be submitted to Google individually or it was never discovered.
// This route handler serves the real sitemap index that ties them together.
export const dynamic = 'force-static';

export function GET(): Response {
  const lastmod = new Date().toISOString();

  const entries = SITEMAP_SECTIONS.map(
    (section) =>
      `  <sitemap>\n    <loc>${SITE_BASE_URL}/${section}/sitemap.xml</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`,
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</sitemapindex>\n`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
