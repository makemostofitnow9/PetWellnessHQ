export const defaultSEO = {
  siteName: 'PawGuideHQ',
  siteUrl: 'https://pawguidehq.com',
  defaultTitle: 'PawGuideHQ — The Honest Guide for Dog & Cat Owners',
  defaultDescription: 'Expert breed guides, training tips, and honest product reviews for dog and cat owners. Find the right breed, solve behavior problems, and keep your pet healthy.',
  twitterHandle: '@pawguidehq',
  ogImage: '/og-default.png',
}

export function generateMetadata({
  title,
  description,
  slug,
  category,
  image,
  publishedAt,
  updatedAt,
}: {
  title?: string;
  description?: string;
  slug?: string;
  category?: string;
  image?: string;
  publishedAt?: string;
  updatedAt?: string;
}) {
  const pageTitle = title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.defaultTitle;
  const pageDesc = description || defaultSEO.defaultDescription;
  const pageUrl = slug ? `${defaultSEO.siteUrl}/${category}/${slug}` : defaultSEO.siteUrl;
  const pageImage = image || defaultSEO.ogImage;

  return {
    title: pageTitle,
    description: pageDesc,
    metadataBase: new URL(defaultSEO.siteUrl),
    alternates: { canonical: pageUrl },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: pageUrl,
      siteName: defaultSEO.siteName,
      images: [{ url: pageImage, width: 1200, height: 630 }],
      type: 'article',
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(updatedAt && { modifiedTime: updatedAt }),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [pageImage],
      creator: defaultSEO.twitterHandle,
    },
  };
}
