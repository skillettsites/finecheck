import { MetadataRoute } from 'next';
import { COUNCILS } from '@/data/councils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/councils`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...COUNCILS.map((council) => ({
      url: `${baseUrl}/councils/${council.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
