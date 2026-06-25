import Link from 'next/link';
import Image from 'next/image';
import { Clock, Tag } from 'lucide-react';
import { ArticleFrontmatter } from '@/lib/mdx';

interface ArticleCardProps {
  frontmatter: ArticleFrontmatter;
  readingTime: string;
  size?: 'default' | 'large';
}

const categoryColors: Record<string, string> = {
  dogs: 'bg-green-600',
  cats: 'bg-blue-600',
  training: 'bg-amber-500',
};

export default function ArticleCard({ frontmatter, readingTime, size = 'default' }: ArticleCardProps) {
  const href = `/${frontmatter.category}/${frontmatter.slug}`;
  const imageSeed = frontmatter.slug.length * 7;
  const badgeColor = categoryColors[frontmatter.category] || 'bg-brand-primary';

  return (
    <Link href={href} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`relative overflow-hidden flex-shrink-0 ${size === 'large' ? 'h-56' : 'h-48'}`}>
        <Image
          src={frontmatter.featuredImage || `https://picsum.photos/seed/${imageSeed}/800/400`}
          alt={frontmatter.imageAlt || frontmatter.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className={`${badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full capitalize shadow-sm`}>
            {frontmatter.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className={`font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug ${size === 'large' ? 'text-xl' : 'text-base'}`}>
          {frontmatter.title}
        </h3>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2 leading-relaxed flex-1">
          {frontmatter.description}
        </p>
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
          <div className="flex items-center gap-3 text-xs text-brand-muted">
            <span className="flex items-center gap-1"><Clock size={12} />{readingTime}</span>
            {frontmatter.tags?.[0] && (
              <span className="flex items-center gap-1"><Tag size={12} />{frontmatter.tags[0]}</span>
            )}
          </div>
          <span className="text-brand-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Read →
          </span>
        </div>
      </div>
    </Link>
  );
}
