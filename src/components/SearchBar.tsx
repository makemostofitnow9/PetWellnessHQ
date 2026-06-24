'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function SearchBar({ placeholder = 'Search breeds, tips, and more...' }: { placeholder?: string }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/dogs?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden border border-gray-200 focus-within:border-brand-primary transition-colors">
        <Search className="ml-4 text-gray-400 flex-shrink-0" size={20} />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 text-gray-700 outline-none bg-transparent text-sm sm:text-base"
        />
        <button
          type="submit"
          className="bg-brand-primary hover:bg-green-700 text-white px-6 py-3 text-sm font-semibold transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
