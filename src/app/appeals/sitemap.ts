import { MetadataRoute } from 'next';
import { OPERATORS } from '@/data/operators';
import { OPERATOR_SITUATIONS } from '@/data/operator-situations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.appealafine.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/appeals`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    ...OPERATORS.map((operator) => ({
      url: `${baseUrl}/appeals/${operator.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...OPERATOR_SITUATIONS.map((os) => ({
      url: `${baseUrl}/appeals/${os.operatorSlug}/${os.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
