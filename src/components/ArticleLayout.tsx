'use client';
import Image from 'next/image';
import { Calendar, Clock, User, RefreshCw } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Breadcrumb from './Breadcrumb';
import AdPlaceholder from './AdPlaceholder';
import RelatedArticles from './RelatedArticles';
import { ArticleFrontmatter, Article } from '@/lib/mdx';

interface ArticleLayoutProps {
  frontmatter: ArticleFrontmatter;
  readingTime: string;
  relatedArticles: Article[];
  children: React.ReactNode;
}

function TableOfContents({ headings }: { headings: { id: string; text: string }[] }) {
  const [active, setActive] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <>
      {/* Mobile TOC */}
      <div className="lg:hidden mb-6 border border-gray-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-brand-accent text-brand-dark font-semibold text-sm"
        >
          <span>Jump to section</span>
          <span>{mobileOpen ? '▲' : '▼'}</span>
        </button>
        {mobileOpen && (
          <ol className="px-4 py-3 space-y-2 bg-white">
            {headings.map((h, i) => (
              <li key={h.id}>
                <a href={`#${h.id}`} onClick={() => setMobileOpen(false)} className="text-sm text-brand-primary hover:underline">
                  {i + 1}. {h.text}
                </a>
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* Desktop TOC */}
      <aside className="hidden lg:block w-60 flex-shrink-0 self-start sticky top-24">
        <div className="bg-brand-accent rounded-xl p-4 border border-gray-100">
          <h4 className="font-bold text-brand-dark text-sm mb-3 uppercase tracking-wide">Contents</h4>
          <ol className="space-y-2">
            {headings.map((h, i) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`text-sm block leading-snug transition-colors ${active === h.id ? 'text-brand-primary font-semibold' : 'text-gray-600 hover:text-brand-primary'}`}
                >
                  {i + 1}. {h.text}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </>
  );
}

export default function ArticleLayout({ frontmatter, readingTime, relatedArticles, children }: ArticleLayoutProps) {
  const imageSeed = frontmatter.slug.length * 7;
  const imageUrl = frontmatter.featuredImage || `https://picsum.photos/seed/${imageSeed}/1200/500`;

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: frontmatter.category, href: `/${frontmatter.category}` },
    { label: frontmatter.title },
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    author: { '@type': 'Organization', name: frontmatter.author },
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt,
    wordCount: frontmatter.wordCount,
    image: imageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'PetWellnessHQ',
      logo: { '@type': 'ImageObject', url: 'https://PetWellnessHQ.com/logo.png' },
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-brand-dark leading-tight tracking-tight max-w-3xl">
            {frontmatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-brand-muted">
            <span className="flex items-center gap-1.5"><User size={14} />{frontmatter.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} />Published {frontmatter.publishedAt}</span>
            <span className="flex items-center gap-1.5"><RefreshCw size={14} />Updated {frontmatter.updatedAt}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} />{readingTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-72 sm:h-96 w-full bg-gray-100">
        <Image
          src={imageUrl}
          alt={frontmatter.imageAlt || frontmatter.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Affiliate Disclosure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-400 italic py-3 border-b border-gray-100">
          This site may earn commissions from qualifying purchases. <a href="/affiliate-disclosure" className="underline hover:text-brand-primary">Learn more.</a>
        </p>
      </div>

      {/* Ad: After intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block"><AdPlaceholder size="leaderboard" slot="top" /></div>
        <div className="md:hidden"><AdPlaceholder size="mobile-banner" slot="top-mobile" /></div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-12 items-start">
          <article className="flex-1 min-w-0 prose prose-lg max-w-3xl prose-headings:text-brand-dark prose-a:text-brand-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900">
            {children}
          </article>
          {/* Desktop TOC sidebar is rendered inside children context — we pass a placeholder */}
        </div>
      </div>

      {/* Mid-article ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdPlaceholder size="rectangle" slot="mid-article" />
      </div>

      {/* Related Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <RelatedArticles articles={relatedArticles} />
      </div>

      {/* Bottom ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:block"><AdPlaceholder size="leaderboard" slot="bottom" /></div>
      </div>
    </main>
  );
}
