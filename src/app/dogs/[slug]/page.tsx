import { getArticle, getArticlesByCategory, getRelatedArticles } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ArticleLayout from '@/components/ArticleLayout';
import AffiliateCTA from '@/components/AffiliateCTA';
import { generateMetadata as genMeta } from '@/lib/seo';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const articles = getArticlesByCategory('dogs');
  return articles.map(a => ({ slug: a.frontmatter.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle('dogs', slug);
  if (!article) return {};
  return genMeta({
    title: article.frontmatter.title,
    description: article.frontmatter.description,
    slug: article.frontmatter.slug,
    category: 'dogs',
    image: article.frontmatter.featuredImage,
    publishedAt: article.frontmatter.publishedAt,
    updatedAt: article.frontmatter.updatedAt,
  });
}

const mdxComponents = { AffiliateCTA };

export default async function DogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle('dogs', slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, article.frontmatter.tags);

  return (
    <ArticleLayout frontmatter={article.frontmatter} readingTime={article.readingTime} relatedArticles={related}>
      <MDXRemote source={article.content} components={mdxComponents} />
    </ArticleLayout>
  );
}
