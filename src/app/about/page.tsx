import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About PetWellnessHQ — Expert Pet Advice You Can Trust',
  description: 'PetWellnessHQ is written by experienced pet owners and reviewed for accuracy. Learn about our mission, editorial standards, and team.',
};

const team = [
  {
    name: 'Sarah M.',
    role: 'Lead Dog Behavior Writer',
    bio: '12 years as a certified dog trainer (CPDT-KA). Has owned and trained Golden Retrievers, Border Collies, and rescue mutts. Specializes in positive reinforcement and puppy development.',
    emoji: '🐕',
  },
  {
    name: 'Dr. James L.',
    role: 'Veterinary Content Reviewer',
    bio: 'Licensed veterinarian with 8 years of small animal practice. Reviews all health-related articles for clinical accuracy before publication.',
    emoji: '🩺',
  },
  {
    name: 'Priya K.',
    role: 'Feline Behavior & Breed Writer',
    bio: 'Lifelong cat owner and shelter volunteer with a background in animal science. Has fostered over 60 cats and specializes in feline behavior and breed temperament.',
    emoji: '🐈',
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-12">
        <p className="text-brand-primary font-semibold text-sm uppercase tracking-wide mb-2">Who we are</p>
        <h1 className="text-4xl font-bold text-brand-dark mb-4">About PetWellnessHQ</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Honest, research-backed pet advice — written by people who actually live with animals.
        </p>
      </div>

      <div className="prose prose-lg prose-headings:text-brand-dark prose-a:text-brand-primary mb-16">
        <h2>Our Story</h2>
        <p>PetWellnessHQ was built out of frustration. When we went looking for real answers about our own pets — whether that was understanding why our puppy kept waking us up at 3am, or figuring out if a certain breed would actually suit our lifestyle — we kept finding the same things: thin content stuffed with keywords, product listicles designed to earn commissions, and advice so generic it could apply to any animal anywhere.</p>
        <p>So we built what we wanted to find. A resource where every article is written by someone who has actually experienced the topic they're covering, reviewed by a qualified professional, and updated when the science or best practices change.</p>

        <h2>Our Editorial Standards</h2>
        <ul>
          <li><strong>Written from experience</strong> — every article is authored by someone with hands-on expertise in that area, whether that's a certified trainer, a long-time breed owner, or a veterinary professional.</li>
          <li><strong>Reviewed for accuracy</strong> — health and medical content is reviewed by our veterinary advisor before publication.</li>
          <li><strong>Regularly updated</strong> — we revisit articles as new research, updated guidelines, or reader feedback warrants it. Every article shows its last updated date.</li>
          <li><strong>No hidden agendas</strong> — when we include affiliate links, we disclose it. Our recommendations are based on merit, not margin.</li>
        </ul>

        <h2>What We Cover</h2>
        <ul>
          <li><strong>Dog & cat breed guides</strong> — honest, detailed profiles covering temperament, health risks, grooming needs, energy levels, and who each breed actually suits</li>
          <li><strong>Training & behavior</strong> — science-backed methods explained in plain language, with realistic timelines and troubleshooting for when things don't go to plan</li>
          <li><strong>Health guides</strong> — condition overviews, symptoms to watch for, and clear guidance on when to see a vet</li>
          <li><strong>New pet guides</strong> — everything you need in the first weeks with a new dog or cat, from setup to sleep schedules</li>
        </ul>

        <h2>Affiliate Disclosure</h2>
        <p>Some links on PetWellnessHQ are affiliate links — we may earn a small commission if you purchase through them, at no extra cost to you. This helps us keep the site free. Affiliate relationships never influence our editorial content or recommendations. Read our full <a href="/affiliate-disclosure">affiliate disclosure</a>.</p>

        <p>Have a question, correction, or just want to say hi? <a href="/contact">Get in touch</a> — we read every message.</p>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-2xl font-bold text-brand-dark mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map(member => (
            <div key={member.name} className="bg-brand-accent border border-green-100 rounded-2xl p-6">
              <div className="text-4xl mb-3">{member.emoji}</div>
              <p className="font-bold text-brand-dark">{member.name}</p>
              <p className="text-brand-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
