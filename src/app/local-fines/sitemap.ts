import { MetadataRoute } from 'next';
import { LOCATION_PAGES } from '@/data/location-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/local-fines`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...LOCATION_PAGES.map((p) => ({
      url: `${baseUrl}/${p.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
