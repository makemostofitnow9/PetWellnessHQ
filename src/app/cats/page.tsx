import { getArticlesByCategory } from '@/lib/mdx';
import CategoryFilter from '@/components/CategoryFilter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cat Breeds & Care Guides',
  description: 'In-depth cat breed guides, feline behavior tips, and expert care advice for cat owners.',
};

const SUBCATEGORIES = ['New Pet', 'Health', 'Behavior', 'Breeds'];

export default function CatsPage() {
  const articles = getArticlesByCategory('cats');

  return (
    <main>
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🐈</span>
            <span className="bg-white/20 text-white text-xs font-semibond px-3 py-1 rounded-full">{articles.length} Articles</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Cat Breeds &amp; Care Guides</h1>
          <p className="text-blue-100 mt-3 max-w-2xl text-lg">From kittens to seniors — breed profiles, health guides, and behavior tips for every cat owner.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter articles={articles} subcategories={SUBCATEGORIES} />
      </div>
    </main>
  );
}
