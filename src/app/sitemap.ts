import { getAllArticles } from '@/lib/mdx';
import { defaultSEO } from '@/lib/seo';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const base = defaultSEO.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/dogs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/cats`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/training`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${base}/${article.frontmatter.category}/${article.frontmatter.slug}`,
    lastModified: new Date(article.frontmatter.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
