import { MetadataRoute } from 'next';
import { SITUATIONS } from '@/data/situations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/situations`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...SITUATIONS.map((situation) => ({
      url: `${baseUrl}/situations/${situation.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
