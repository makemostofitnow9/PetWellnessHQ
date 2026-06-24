import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/lib/mdx';
import ArticleCard from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';

export default function HomePage() {
  const allArticles = getAllArticles();
  const featured = allArticles.slice(0, 3);
  const latest = allArticles.slice(0, 6);

  const categories = [
    { name: 'Dogs', emoji: '🐕', href: '/dogs', desc: 'Breed guides, health tips, and more', color: 'bg-green-50 border-green-200 hover:border-brand-primary' },
    { name: 'Cats', emoji: '🐈', href: '/cats', desc: 'Feline breeds, behavior, and care', color: 'bg-blue-50 border-blue-200 hover:border-blue-400' },
    { name: 'Training', emoji: '🎓', href: '/training', desc: 'Behavior, commands, and techniques', color: 'bg-amber-50 border-amber-200 hover:border-amber-400' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-primary to-green-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <svg key={i} className="absolute" style={{ left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%`, width: 40, height: 40 }} viewBox="0 0 32 32" fill="white">
              <ellipse cx="16" cy="22" rx="8" ry="7"/><ellipse cx="9" cy="13" rx="3.5" ry="4.5"/><ellipse cx="23" cy="13" rx="3.5" ry="4.5"/><ellipse cx="6" cy="20" rx="2.5" ry="3.5"/><ellipse cx="26" cy="20" rx="2.5" ry="3.5"/>
            </svg>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
            The Honest Guide for<br />Dog &amp; Cat Owners
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Breed guides, training tips, and expert advice — without the fluff.
          </p>
          <SearchBar />
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/dogs" className="bg-white text-brand-primary font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors">
              Explore Dog Breeds
            </Link>
            <Link href="/cats" className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-colors">
              Explore Cat Breeds
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(article => (
              <ArticleCard key={article.frontmatter.slug} frontmatter={article.frontmatter} readingTime={article.readingTime} size="large" />
            ))}
          </div>
        </section>
      )}

      {/* Browse by Category */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map(cat => (
              <Link key={cat.name} href={cat.href} className={`${cat.color} border-2 rounded-2xl p-8 text-center transition-all hover:shadow-lg group`}>
                <div className="text-5xl mb-4">{cat.emoji}</div>
                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{cat.name}</h3>
                <p className="text-gray-500 text-sm mt-2">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {latest.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-brand-dark">Latest Articles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map(article => (
              <ArticleCard key={article.frontmatter.slug} frontmatter={article.frontmatter} readingTime={article.readingTime} />
            ))}
          </div>
        </section>
      )}

      {/* Trust Bar */}
      <section className="bg-brand-accent border-t border-b border-green-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg font-semibold text-brand-dark mb-8">Written by pet lovers. Reviewed for accuracy. Updated regularly.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { emoji: '🐾', title: 'Expert-Written', desc: 'Content created by experienced pet owners and reviewed for accuracy.' },
              { emoji: '🔄', title: 'Regularly Updated', desc: 'Articles are revisited and refreshed to reflect current best practices.' },
              { emoji: '🛡️', title: 'Honest Reviews', desc: 'We only recommend products we would use for our own pets.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-green-100">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-brand-dark">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
