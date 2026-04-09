import { MetadataRoute } from 'next';
import { OPERATORS } from '@/data/operators';
import { COUNCILS } from '@/data/councils';
import { GUIDES } from '@/data/guides';
import { TEMPLATES } from '@/data/templates';
import { BLOG_POSTS } from '@/data/blog-posts';
import { SITUATIONS } from '@/data/situations';
import { OPERATOR_SITUATIONS } from '@/data/operator-situations';
import { DATA_PAGES } from '@/data/data-pages';
import { GROUNDS } from '@/data/grounds';
import { getAllCities } from '@/data/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://appealafine.co.uk';
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/appeal`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/pofa-checker`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/deadline-calculator`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/contravention-codes`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/appeals`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/councils`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leaderboard`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  const operatorPages: MetadataRoute.Sitemap = OPERATORS.map((operator) => ({
    url: `${baseUrl}/appeals/${operator.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const councilPages: MetadataRoute.Sitemap = COUNCILS.map((council) => ({
    url: `${baseUrl}/councils/${council.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const templatePages: MetadataRoute.Sitemap = TEMPLATES.map((template) => ({
    url: `${baseUrl}/templates/${template.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const situationPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/situations`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...SITUATIONS.map((situation) => ({
      url: `${baseUrl}/situations/${situation.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];

  const operatorSituationPages: MetadataRoute.Sitemap = OPERATOR_SITUATIONS.map((os) => ({
    url: `${baseUrl}/appeals/${os.operatorSlug}/${os.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const dataPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/data`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...DATA_PAGES.map((page) => ({
      url: `${baseUrl}/data/${page.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  const groundPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/grounds`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...GROUNDS.map((ground) => ({
      url: `${baseUrl}/grounds/${ground.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];

  const cityPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/parking-fines`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...getAllCities().map((city) => ({
      url: `${baseUrl}/parking-fines/${city.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];

  return [...staticPages, ...operatorPages, ...councilPages, ...guidePages, ...templatePages, ...blogPages, ...situationPages, ...operatorSituationPages, ...dataPages, ...groundPages, ...cityPages];
}
