import { getArticlesByCategory } from '@/lib/mdx';
import CategoryFilter from '@/components/CategoryFilter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dog Breeds & Care Guides',
  description: 'Comprehensive dog breed guides, health tips, puppy training advice, and expert care information for every dog owner.',
};

const SUBCATEGORIES = ['New Pet', 'Costs', 'Health', 'Behavior', 'Breeds', 'Grooming'];

export default function DogsPage() {
  const articles = getArticlesByCategory('dogs');

  return (
    <main>
      <div className="bg-gradient-to-r from-brand-primary to-green-700 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🐕</span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{articles.length} Articles</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Dog Breeds &amp; Care Guides</h1>
          <p className="text-green-100 mt-3 max-w-2xl text-lg">Breed profiles, health advice, puppy training, and everything you need to raise a happy, healthy dog.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter articles={articles} subcategories={SUBCATEGORIES} />
      </div>
    </main>
  );
}
