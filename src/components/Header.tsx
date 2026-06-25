'use client';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const dogSubs = ['New Pet', 'Costs', 'Health', 'Behavior', 'Breeds', 'Grooming'];
const catSubs = ['New Pet', 'Health', 'Behavior', 'Breeds'];
const trainingSubs = ['Behavior'];

interface DropdownItem { label: string; href: string }

function NavDropdown({ label, href, items }: { label: string; href: string; items: DropdownItem[] }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href={href}
        className="flex items-center gap-1 text-gray-600 hover:text-brand-primary font-medium transition-colors py-2"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </Link>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 z-50">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[160px]">
            <Link
              href={href}
              className="block px-4 py-2 text-sm font-semibold text-brand-primary hover:bg-brand-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              All {label}
            </Link>
            <div className="border-t border-gray-100 my-1" />
            {items.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-accent hover:text-brand-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const navItems = [
    {
      label: 'Dogs', href: '/dogs',
      subs: dogSubs.map(s => ({ label: s, href: `/dogs?sub=${encodeURIComponent(s)}` })),
    },
    {
      label: 'Cats', href: '/cats',
      subs: catSubs.map(s => ({ label: s, href: `/cats?sub=${encodeURIComponent(s)}` })),
    },
    {
      label: 'Training', href: '/training',
      subs: trainingSubs.map(s => ({ label: s, href: `/training?sub=${encodeURIComponent(s)}` })),
    },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
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
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <NavDropdown key={item.label} label={item.label} href={item.href} items={item.subs} />
            ))}
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
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-brand-primary font-medium py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label === 'Dogs' ? '🐕' : item.label === 'Cats' ? '🐈' : '🎓'} {item.label}
                  </Link>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="p-2 text-gray-400 hover:text-brand-primary"
                  >
                    <ChevronDown size={16} className={`transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {mobileExpanded === item.label && (
                  <div className="pl-8 pb-2 space-y-1">
                    {item.subs.map(sub => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block text-sm text-gray-500 hover:text-brand-primary py-1"
                        onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/about" className="block text-gray-700 hover:text-brand-primary font-medium py-2" onClick={() => setMobileOpen(false)}>About</Link>
          </div>
        </div>
      )}
    </header>
  );
}
