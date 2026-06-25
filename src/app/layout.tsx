import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultSEO } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-merriweather" });

export const metadata: Metadata = {
  title: { default: defaultSEO.defaultTitle, template: `%s | ${defaultSEO.siteName}` },
  description: defaultSEO.defaultDescription,
  metadataBase: new URL(defaultSEO.siteUrl),
  alternates: { canonical: defaultSEO.siteUrl },
  openGraph: {
    type: "website",
    siteName: defaultSEO.siteName,
    images: [{ url: defaultSEO.ogImage, width: 1200, height: 630, alt: defaultSEO.defaultTitle }],
  },
  twitter: {
    card: "summary_large_image",
    creator: defaultSEO.twitterHandle,
  },
  robots: { index: true, follow: true },
  verification: { google: 'uqY5VsIItPhBh8FODFyhe7DbEI8KCW0ZMkoK3UvaCG4' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: defaultSEO.siteName,
  url: defaultSEO.siteUrl,
  description: defaultSEO.defaultDescription,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${defaultSEO.siteUrl}/dogs?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: defaultSEO.siteName,
  url: defaultSEO.siteUrl,
  logo: { '@type': 'ImageObject', url: `${defaultSEO.siteUrl}/logo.png` },
  sameAs: [`https://twitter.com/${defaultSEO.twitterHandle.replace('@', '')}`],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
