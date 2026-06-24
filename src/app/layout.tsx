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
  openGraph: {
    type: "website",
    siteName: defaultSEO.siteName,
    images: [{ url: defaultSEO.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    creator: defaultSEO.twitterHandle,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
