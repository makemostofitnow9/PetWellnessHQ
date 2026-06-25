import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="16" cy="22" rx="8" ry="7" fill="#1B6B3A"/>
                <ellipse cx="9" cy="13" rx="3.5" ry="4.5" fill="#1B6B3A"/>
                <ellipse cx="23" cy="13" rx="3.5" ry="4.5" fill="#1B6B3A"/>
                <ellipse cx="6" cy="20" rx="2.5" ry="3.5" fill="#1B6B3A"/>
                <ellipse cx="26" cy="20" rx="2.5" ry="3.5" fill="#1B6B3A"/>
              </svg>
              <span className="text-white text-lg font-bold">PetWellnessHQ</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">The honest guide for dog and cat owners. Breed guides, training tips, and expert advice without the fluff.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dogs" className="hover:text-white transition-colors">Dog Breeds</Link></li>
              <li><Link href="/cats" className="hover:text-white transition-colors">Cat Breeds</Link></li>
              <li><Link href="/training" className="hover:text-white transition-colors">Dog Training</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} PetWellnessHQ. All rights reserved.</p>
          <p className="text-xs">PetWellnessHQ is a participant in the Amazon Services LLC Associates Program. <Link href="/affiliate-disclosure" className="underline hover:text-white">Learn more.</Link></p>
        </div>
      </div>
    </footer>
  );
}
