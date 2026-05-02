export interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface CTA {
  label: string;
  href: string;
}

export interface Section<T = any> {
  id?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  cta?: CTA;
  items?: T[];
}
