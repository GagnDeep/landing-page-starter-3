import { Metadata } from 'next';
import { siteConfig } from './site';

interface BuildMetadataParams {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
  image = siteConfig.ogImage,
}: BuildMetadataParams): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      type,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
