import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  targetKeyword: string;
  secondaryKeywords?: string[];
  featuredImage?: string;
  imageAlt?: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime?: string;
  wordCount?: number;
  affiliateDisclosure?: boolean;
  schema?: string;
  subcategory?: string;
}

export interface Article {
  frontmatter: ArticleFrontmatter;
  content: string;
  readingTime: string;
}

const contentDir = path.join(process.cwd(), 'src/content');

export function getArticlesByCategory(category: string): Article[] {
  const dir = path.join(contentDir, category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));

  return files.map(file => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data, content } = matter(raw);
    const rt = readingTime(content);
    return {
      frontmatter: data as ArticleFrontmatter,
      content,
      readingTime: rt.text,
    };
  }).sort((a, b) => new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime());
}

export function getArticle(category: string, slug: string): Article | null {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    frontmatter: data as ArticleFrontmatter,
    content,
    readingTime: rt.text,
  };
}

export function getAllArticles(): Article[] {
  const categories = ['dogs', 'cats', 'training'];
  return categories.flatMap(cat => getArticlesByCategory(cat))
    .sort((a, b) => new Date(b.frontmatter.publishedAt).getTime() - new Date(a.frontmatter.publishedAt).getTime());
}

export function getRelatedArticles(currentSlug: string, tags: string[], limit = 4): Article[] {
  const all = getAllArticles();
  return all
    .filter(a => a.frontmatter.slug !== currentSlug)
    .map(a => ({
      article: a,
      score: a.frontmatter.tags.filter(t => tags.includes(t)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ article }) => article);
}
