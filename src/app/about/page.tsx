import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About PetWellnessHQ',
  description: 'Learn about PetWellnessHQ — our mission, our team, and our commitment to honest, expert pet advice.',
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-brand-dark mb-6">About PetWellnessHQ</h1>
      <div className="prose prose-lg prose-headings:text-brand-dark prose-a:text-brand-primary">
        <p>PetWellnessHQ was created by pet owners who were frustrated with the same thing: dog and cat advice online that was either too generic, riddled with misinformation, or clearly written just to sell products.</p>
        <p>We set out to build something better — a resource that gives you honest, well-researched answers to real questions about the animals we all love.</p>
        <h2>Our Mission</h2>
        <p>Every article on PetWellnessHQ is written with one goal: help you make better decisions for your pet. Whether you're choosing your first breed, dealing with a behavior problem, or managing a health condition, we want to give you the clearest, most accurate information possible.</p>
        <h2>What We Cover</h2>
        <ul>
          <li><strong>Breed guides</strong> — honest assessments of temperament, energy, grooming needs, and health concerns</li>
          <li><strong>Training advice</strong> — science-backed techniques that actually work, explained in plain English</li>
          <li><strong>Health guides</strong> — condition overviews, symptoms to watch for, and when to see a vet</li>
          <li><strong>Product recommendations</strong> — we only suggest products we have confidence in, and we disclose when links are affiliate</li>
        </ul>
        <h2>Our Commitment to Accuracy</h2>
        <p>We regularly review and update our content as new research emerges. If you ever spot an error or have a correction, please <a href="/contact">reach out</a> — we take accuracy seriously.</p>
        <h2>Affiliate Disclosure</h2>
        <p>Some links on PetWellnessHQ are affiliate links, which means we may earn a small commission if you purchase through them — at no extra cost to you. This helps us keep the site running and free. Read our full <a href="/affiliate-disclosure">affiliate disclosure</a>.</p>
      </div>
    </main>
  );
}
