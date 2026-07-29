export const SITE_BASE_URL = 'https://www.appealafine.co.uk';

// Every route segment that exposes a <segment>/sitemap.xml. These are
// referenced by the sitemap index at /sitemap.xml and by robots.txt, so the
// two can never drift apart. "main" holds the static top-level pages.
export const SITEMAP_SECTIONS = [
  'main',
  'appeals',
  'councils',
  'grounds',
  'guides',
  'situations',
  'templates',
  'blog',
  'parking-fines',
  'london',
  'data',
  'local-fines',
] as const;
