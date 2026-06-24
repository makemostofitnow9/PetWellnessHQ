import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'PawGuideHQ affiliate disclosure — our relationship with Amazon, Chewy, and other partners.',
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-brand-dark mb-2">Affiliate Disclosure</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2025</p>
      <div className="prose prose-lg prose-headings:text-brand-dark prose-a:text-brand-primary">
        <p>PawGuideHQ participates in affiliate marketing programs. This means that when you click on certain product links on this site and make a purchase, we may receive a small commission — at no additional cost to you.</p>
        <h2>Programs We Participate In</h2>
        <ul>
          <li><strong>Amazon Associates</strong> — We earn from qualifying purchases as part of the Amazon Services LLC Associates Program.</li>
          <li><strong>Chewy Affiliate Program</strong> — We may earn commissions on qualifying Chewy purchases.</li>
          <li><strong>Petco Affiliate Program</strong> — We may earn commissions on qualifying Petco purchases.</li>
          <li><strong>Pet Insurance Affiliates</strong> — We may earn referral fees from pet insurance partners.</li>
        </ul>
        <h2>Our Promise to You</h2>
        <p>Affiliate commissions never influence our editorial recommendations. We only recommend products we genuinely believe will benefit you and your pet. We clearly label all affiliate product boxes with "Our Pick" or "Recommended Product" so you always know when a link is affiliate.</p>
        <h2>FTC Compliance</h2>
        <p>This disclosure is made in accordance with the Federal Trade Commission's guidelines on endorsements and testimonials (16 CFR Part 255).</p>
        <p>If you have any questions about our affiliate relationships, please <a href="/contact">contact us</a>.</p>
      </div>
    </main>
  );
}
