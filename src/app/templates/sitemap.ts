import { MetadataRoute } from 'next';
import { TEMPLATES } from '@/data/templates';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/templates`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...TEMPLATES.map((template) => ({
      url: `${baseUrl}/templates/${template.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
