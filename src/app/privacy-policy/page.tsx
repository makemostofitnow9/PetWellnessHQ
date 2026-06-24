import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PawGuideHQ privacy policy — how we collect, use, and protect your information.',
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-brand-dark mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2025</p>
      <div className="prose prose-lg prose-headings:text-brand-dark">
        <h2>Information We Collect</h2>
        <p>PawGuideHQ collects information you provide directly (such as via our contact form) and information collected automatically when you visit our site, including your IP address, browser type, pages visited, and time spent on pages, through cookies and analytics tools including Google Analytics 4.</p>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to contact form submissions</li>
          <li>To improve our content and user experience</li>
          <li>To serve relevant advertisements through Google AdSense</li>
          <li>To analyze traffic patterns and popular content</li>
        </ul>
        <h2>Cookies</h2>
        <p>We use cookies for analytics (Google Analytics) and advertising (Google AdSense). You can disable cookies in your browser settings, though this may affect site functionality.</p>
        <h2>Third-Party Services</h2>
        <p>We use the following third-party services that may collect data: Google Analytics, Google AdSense, Amazon Associates. Each has its own privacy policy governing data use.</p>
        <h2>Affiliate Links</h2>
        <p>PawGuideHQ participates in affiliate programs. When you click an affiliate link and make a purchase, we may earn a commission. We do not share your purchase data.</p>
        <h2>Data Retention</h2>
        <p>Contact form data is retained for up to 12 months. Analytics data is retained per Google Analytics default settings (26 months).</p>
        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us at <a href="/contact">our contact page</a>.</p>
        <h2>Contact</h2>
        <p>For privacy questions, use our <a href="/contact">contact form</a>.</p>
      </div>
    </main>
  );
}
