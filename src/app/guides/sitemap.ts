import { MetadataRoute } from 'next';
import { GUIDES } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...GUIDES.map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
