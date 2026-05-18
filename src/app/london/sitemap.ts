import { MetadataRoute } from 'next';
import { getAllBoroughFines } from '@/data/borough-fines';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/london`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...getAllBoroughFines().map((bf) => ({
      url: `${baseUrl}/london/${bf.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
