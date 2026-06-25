'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-accent border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">🐾</div>
        <h2 className="text-xl font-bold text-brand-dark">Message Sent!</h2>
        <p className="text-gray-600 mt-2">Thanks for reaching out. We'll get back to you within 2–3 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
        <input id="name" type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary text-gray-700" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
        <input id="email" type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary text-gray-700" placeholder="your@email.com" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
        <select id="subject" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary text-gray-700">
          <option>General question</option>
          <option>Content correction</option>
          <option>Partnership inquiry</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
        <textarea id="message" required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary text-gray-700 resize-none" placeholder="How can we help?" />
      </div>
      <button type="submit" className="w-full bg-brand-primary hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors">
        Send Message
      </button>
    </form>
  );
}
