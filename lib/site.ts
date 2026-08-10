import type { Metadata } from 'next';

export const siteConfig = {
  name: 'They Are Tracking',
  url: 'https://theyaretracking.com',
  description: 'An indexed registry of data brokers and people search sites with each opt-out procedure as it works today. We track the forms to help you reclaim your privacy.',
  links: {
    twitter: 'https://twitter.com/theyaretracking',
  },
};

export function buildMetadata({
  title,
  description,
  path = '',
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.name,
      description: description || siteConfig.description,
    },
  };
}

export function generateJsonLd(type: 'Organization' | 'WebSite' | 'Article' | 'FAQPage' | 'BreadcrumbList', data: any) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
}
