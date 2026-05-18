import { MetadataRoute } from 'next';
import { DATA_PAGES } from '@/data/data-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/data`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...DATA_PAGES.map((page) => ({
      url: `${baseUrl}/data/${page.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
