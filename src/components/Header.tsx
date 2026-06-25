'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="16" cy="22" rx="8" ry="7" fill="#1B6B3A"/>
              <ellipse cx="9" cy="13" rx="3.5" ry="4.5" fill="#1B6B3A"/>
              <ellipse cx="23" cy="13" rx="3.5" ry="4.5" fill="#1B6B3A"/>
              <ellipse cx="6" cy="20" rx="2.5" ry="3.5" fill="#1B6B3A"/>
              <ellipse cx="26" cy="20" rx="2.5" ry="3.5" fill="#1B6B3A"/>
            </svg>
            <span className="text-xl font-bold text-brand-dark">PetWellness<span className="text-brand-primary">HQ</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/dogs" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Dogs</Link>
            <Link href="/cats" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Cats</Link>
            <Link href="/training" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">Training</Link>
            <Link href="/about" className="text-gray-600 hover:text-brand-primary font-medium transition-colors">About</Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link href="/dogs" className="block text-gray-700 hover:text-brand-primary font-medium py-2" onClick={() => setMobileOpen(false)}>🐕 Dogs</Link>
            <Link href="/cats" className="block text-gray-700 hover:text-brand-primary font-medium py-2" onClick={() => setMobileOpen(false)}>🐈 Cats</Link>
            <Link href="/training" className="block text-gray-700 hover:text-brand-primary font-medium py-2" onClick={() => setMobileOpen(false)}>🎓 Training</Link>
            <Link href="/about" className="block text-gray-700 hover:text-brand-primary font-medium py-2" onClick={() => setMobileOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </header>
  );
}
