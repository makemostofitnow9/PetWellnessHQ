import Link from 'next/link';
import Image from 'next/image';
import { Clock, Tag } from 'lucide-react';
import { ArticleFrontmatter } from '@/lib/mdx';

interface ArticleCardProps {
  frontmatter: ArticleFrontmatter;
  readingTime: string;
  size?: 'default' | 'large';
}

export default function ArticleCard({ frontmatter, readingTime, size = 'default' }: ArticleCardProps) {
  const href = `/${frontmatter.category}/${frontmatter.slug}`;
  const imageSeed = frontmatter.slug.length * 7;

  return (
    <Link href={href} className="group block bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-200">
      <div className={`relative overflow-hidden ${size === 'large' ? 'h-56' : 'h-44'}`}>
        <Image
          src={frontmatter.featuredImage || `https://picsum.photos/seed/${imageSeed}/800/400`}
          alt={frontmatter.imageAlt || frontmatter.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-brand-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
            {frontmatter.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className={`font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug ${size === 'large' ? 'text-xl' : 'text-base'}`}>
          {frontmatter.title}
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2 leading-relaxed">{frontmatter.description}</p>
        <div className="flex items-center gap-4 mt-3 text-xs text-brand-muted">
          <span className="flex items-center gap-1"><Clock size={12} />{readingTime}</span>
          {frontmatter.tags?.[0] && <span className="flex items-center gap-1"><Tag size={12} />{frontmatter.tags[0]}</span>}
        </div>
      </div>
    </Link>
  );
}
