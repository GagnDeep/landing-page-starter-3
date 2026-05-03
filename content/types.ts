export interface SEOContent {
  title: string;
  description: string;
}

export interface CTAContent {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  primaryCTA: CTAContent;
  secondaryCTA?: CTAContent;
}

export interface ServiceCardContent {
  title: string;
  description: string;
  href: string;
}

export interface SectionContent {
  title: string;
  subtitle?: string;
  body?: string;
}

export interface PageContent {
  seo: SEOContent;
}
