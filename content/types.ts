export interface SEOData {
  title: string;
  description: string;
}

export interface CTAData {
  label: string;
  href: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  primaryCTA: CTAData;
  secondaryCTA?: CTAData;
}

export interface SectionContent {
  heading: string;
  subheading?: string;
  body: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  quote: string;
  author: string;
  rating: number;
}
