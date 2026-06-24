import ArticleCard from './ArticleCard';
import { Article } from '@/lib/mdx';

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (!articles.length) return null;

  return (
    <section className="mt-12 pt-10 border-t border-gray-200 not-prose">
      <h2 className="text-2xl font-bold text-brand-dark mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {articles.map(article => (
          <ArticleCard
            key={article.frontmatter.slug}
            frontmatter={article.frontmatter}
            readingTime={article.readingTime}
          />
        ))}
      </div>
    </section>
  );
}
