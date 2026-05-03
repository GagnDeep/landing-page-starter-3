export interface SeoMetadata {
  title: string
  description: string
  keywords?: string[]
}

export interface CtaData {
  label: string
  href: string
}

export interface NavigationItem {
  label: string
  href: string
}

export interface Testimonial {
  id: string
  name: string
  quote: string
  role?: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface SectionContent {
  headline: string
  subheading?: string
  body?: string
  cta?: CtaData
}
