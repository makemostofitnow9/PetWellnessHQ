import Link from 'next/link';
import Image from 'next/image';
import { getAllArticles } from '@/lib/mdx';
import ArticleCard from '@/components/ArticleCard';
import SearchBar from '@/components/SearchBar';
import { ArrowRight } from 'lucide-react';

// Curated Unsplash photos for the homepage photo strip
const photoStrip = [
  { src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=400&h=400', alt: 'Golden retriever puppy' },
  { src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&h=400', alt: 'Fluffy cat kitten' },
  { src: 'https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=400&h=400', alt: 'Fluffy white dog' },
  { src: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=400&h=400', alt: 'Cat close-up' },
  { src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&h=400', alt: 'Shiba Inu dog' },
  { src: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=400&h=400', alt: 'Large fluffy cat' },
  { src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&h=400', alt: 'Dog portrait' },
  { src: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=400&h=400', alt: 'Large fluffy cat' },
  { src: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=400&h=400', alt: 'Bernese Mountain Dog' },
  { src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&h=400', alt: 'Fluffy kitten' },
];

const categories = [
  {
    name: 'Dogs',
    emoji: '🐕',
    href: '/dogs',
    desc: 'Breed guides, health tips & training',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&h=400',
    color: 'from-green-600 to-brand-primary',
  },
  {
    name: 'Cats',
    emoji: '🐈',
    href: '/cats',
    desc: 'Feline breeds, behavior & care',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&h=400',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Training',
    emoji: '🎓',
    href: '/training',
    desc: 'Behavior, commands & techniques',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&h=400',
    color: 'from-amber-500 to-orange-600',
  },
];

export default function HomePage() {
  const allArticles = getAllArticles();
  const featured = allArticles.slice(0, 3);
  const latest = allArticles.slice(3, 9);

  return (
    <main>
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        {/* Background field photo */}
        <Image
          src="https://images.unsplash.com/photo-1670262257345-548986b7b8ed?auto=format&fit=crop&w=1600&h=800&q=80"
          alt="Golden retriever running on a sunny green field"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-green-900/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-xl text-left">
            <span className="inline-block bg-white/15 border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              🐾 Trusted by pet owners everywhere
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-5">
              The Honest Guide<br />for Dog &amp; Cat<br />Owners
            </h1>
            <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-lg">
              Breed guides, training tips, and expert advice — without the fluff.
            </p>
            <div className="mb-8">
              <SearchBar />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/dogs" className="inline-flex items-center gap-2 bg-white text-brand-primary font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-all hover:gap-3 shadow-lg">
                Explore Dog Breeds <ArrowRight size={16} />
              </Link>
              <Link href="/cats" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all hover:gap-3">
                Explore Cat Breeds <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling photo strip */}
      <div className="bg-white border-b border-gray-100 py-4 overflow-hidden">
        <div className="flex gap-3 animate-marquee">
          {[...photoStrip, ...photoStrip].map((photo, i) => (
            <div key={i} className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden shadow-sm">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-110 transition-transform duration-300" sizes="80px" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <section className="bg-brand-primary text-white py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { value: `${allArticles.length}+`, label: 'Expert Articles' },
            { value: '3', label: 'Pet Categories' },
            { value: '100%', label: 'Free to Read' },
          ].map(stat => (
            <div key={stat.label}>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-green-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      {featured.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wide mb-1">Start here</p>
              <h2 className="text-3xl font-bold text-brand-dark">Featured Articles</h2>
            </div>
            <Link href="/dogs" className="hidden sm:inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all text-sm">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(article => (
              <ArticleCard key={article.frontmatter.slug} frontmatter={article.frontmatter} readingTime={article.readingTime} size="large" />
            ))}
          </div>
        </section>
      )}

      {/* Browse by Category — photo cards */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-primary font-semibold text-sm uppercase tracking-wide mb-1">Explore</p>
            <h2 className="text-3xl font-bold text-brand-dark">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map(cat => (
              <Link key={cat.name} href={cat.href} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-64">
                <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-75 group-hover:opacity-85 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-5xl mb-3 drop-shadow-lg">{cat.emoji}</span>
                  <h3 className="text-2xl font-bold drop-shadow-md">{cat.name}</h3>
                  <p className="text-white/80 text-sm mt-1 px-6 text-center">{cat.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                    Browse guides <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {latest.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wide mb-1">Fresh content</p>
              <h2 className="text-3xl font-bold text-brand-dark">Latest Articles</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map(article => (
              <ArticleCard key={article.frontmatter.slug} frontmatter={article.frontmatter} readingTime={article.readingTime} />
            ))}
          </div>
        </section>
      )}

      {/* Popular Dog Breeds */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-brand-primary font-semibold text-sm uppercase tracking-wide mb-1">🐕 Dogs</p>
              <h2 className="text-3xl font-bold text-brand-dark">Popular Dog Breeds</h2>
            </div>
            <Link href="/dogs?sub=Breeds" className="hidden sm:inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all text-sm">
              All breeds <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Golden Retriever', trait: 'Friendly', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=300&h=300' },
              { name: 'French Bulldog', trait: 'Compact', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&h=300' },
              { name: 'German Shepherd', trait: 'Protective', img: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=300&h=300' },
              { name: 'Shiba Inu', trait: 'Independent', img: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=300&h=300' },
              { name: 'Bichon Frisé', trait: 'Hypoallergenic', img: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=300&h=300' },
              { name: 'Labrador', trait: 'Loyal', img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=300&h=300' },
            ].map(breed => (
              <Link key={breed.name} href="/dogs?sub=Breeds" className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 aspect-square">
                <Image src={breed.img} alt={breed.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-sm leading-tight">{breed.name}</p>
                  <span className="inline-block mt-1 text-xs bg-white/20 text-white/90 px-2 py-0.5 rounded-full">{breed.trait}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cat Breeds */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-1">🐈 Cats</p>
              <h2 className="text-3xl font-bold text-brand-dark">Popular Cat Breeds</h2>
            </div>
            <Link href="/cats?sub=Breeds" className="hidden sm:inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm">
              All breeds <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Ragdoll', trait: 'Laid-back', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&h=300' },
              { name: 'Maine Coon', trait: 'Majestic', img: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?auto=format&fit=crop&w=300&h=300' },
              { name: 'Siamese', trait: 'Vocal', img: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=300&h=300' },
              { name: 'British Shorthair', trait: 'Calm', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=300&h=300' },
              { name: 'Calico', trait: 'Unique', img: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=300&h=300' },
              { name: 'Persian', trait: 'Gentle', img: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=300&h=300' },
            ].map(breed => (
              <Link key={breed.name} href="/cats?sub=Breeds" className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 aspect-square">
                <Image src={breed.img} alt={breed.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-sm leading-tight">{breed.name}</p>
                  <span className="inline-block mt-1 text-xs bg-white/20 text-white/90 px-2 py-0.5 rounded-full">{breed.trait}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-accent border-t border-green-100 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl font-bold text-brand-dark mb-10">Why pet owners trust PetWellnessHQ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: '🐾', title: 'Expert-Written', desc: 'Every article is written by experienced pet owners and reviewed for accuracy.' },
              { emoji: '🔄', title: 'Regularly Updated', desc: 'We revisit and refresh content as new research and best practices emerge.' },
              { emoji: '🛡️', title: 'Honest Reviews', desc: 'Affiliate links never influence our recommendations — only products we\'d use ourselves.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-7 border border-green-100 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-brand-dark text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
