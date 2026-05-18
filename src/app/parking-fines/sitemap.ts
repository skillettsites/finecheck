import { MetadataRoute } from 'next';
import { getAllCities } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/parking-fines`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...getAllCities().map((city) => ({
      url: `${baseUrl}/parking-fines/${city.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
