import { MetadataRoute } from 'next';
import { GROUNDS } from '@/data/grounds';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/grounds`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...GROUNDS.map((ground) => ({
      url: `${baseUrl}/grounds/${ground.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
