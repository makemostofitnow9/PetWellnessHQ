import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the PetWellnessHQ team — for questions, corrections, or partnership inquiries.',
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold text-brand-dark mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">Have a question, correction, or partnership inquiry? We'd love to hear from you.</p>
      <ContactForm />
    </main>
  );
}
