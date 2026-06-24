import { getArticlesByCategory } from '@/lib/mdx';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dog Training Guides',
  description: 'Proven dog training techniques, behavior guides, and step-by-step training plans for owners of all experience levels.',
};

export default function TrainingPage() {
  const articles = getArticlesByCategory('training');

  return (
    <main>
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🎓</span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{articles.length} Articles</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Dog Training Guides</h1>
          <p className="text-amber-100 mt-3 max-w-2xl text-lg">Step-by-step training plans and expert behavior advice to help you raise a confident, well-mannered dog.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {articles.length === 0 ? (
          <p className="text-gray-500">No articles yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.frontmatter.slug} frontmatter={article.frontmatter} readingTime={article.readingTime} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
