'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ArticleCard from './ArticleCard';
import { Article } from '@/lib/mdx';

interface CategoryFilterProps {
  articles: Article[];
  subcategories: string[];
}

function CategoryFilterInner({ articles, subcategories }: CategoryFilterProps) {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<string>(() => {
    return 'All';
  });

  useEffect(() => {
    const sub = searchParams.get('sub');
    if (sub && subcategories.includes(sub)) {
      setActive(sub);
    }
  }, [searchParams, subcategories]);

  const filtered = active === 'All'
    ? articles
    : articles.filter(a => a.frontmatter.subcategory === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {['All', ...subcategories].map(sub => (
          <button
            key={sub}
            onClick={() => setActive(sub)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              active === sub
                ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                : 'bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary'
            }`}
          >
            {sub}
            {sub !== 'All' && (
              <span className={`ml-1.5 text-xs ${active === sub ? 'text-white/70' : 'text-gray-400'}`}>
                {articles.filter(a => a.frontmatter.subcategory === sub).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500">No articles in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(article => (
            <ArticleCard
              key={article.frontmatter.slug}
              frontmatter={article.frontmatter}
              readingTime={article.readingTime}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default function CategoryFilter(props: CategoryFilterProps) {
  return (
    <Suspense fallback={
      <div className="flex flex-wrap gap-2 mb-8">
        {['All', ...props.subcategories].map(sub => (
          <div key={sub} className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-400">
            {sub}
          </div>
        ))}
      </div>
    }>
      <CategoryFilterInner {...props} />
    </Suspense>
  );
}
