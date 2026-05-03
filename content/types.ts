export interface SEOData {
  title: string;
  description: string;
}

export interface CTAData {
  label: string;
  href: string;
}

export interface NoticeBarData {
  text: string;
  cta?: CTAData;
}
