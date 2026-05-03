import { Meta } from './home';

export interface ArticleSnippet {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

export interface BlogContent {
  meta: Meta;
  hero: {
    headline: string;
    subheadline: string;
  };
  categories: string[];
  featuredArticle: ArticleSnippet;
  articles: {
    headline: string;
    list: ArticleSnippet[];
    loadMoreText: string;
  };
  newsletter: {
    headline: string;
    description: string;
    placeholder: string;
    cta: string;
  };
}

export const blogContent: BlogContent = {
  meta: {
    title: "Dental Health Hub | Dr. Bansal’s Dental Care",
    description: "Read our latest articles and advice on maintaining a healthy, beautiful smile from the experts at Dr. Bansal’s Dental Care.",
  },
  hero: {
    headline: "The Dental Health Hub",
    subheadline: "Practical advice, clinic news, and tips for keeping your smile bright from your neighborhood dental experts.",
  },
  categories: ["All", "Preventive Care", "Cosmetic", "Kids Dental", "Clinic News"],
  featuredArticle: {
    id: "understanding-dental-anxiety",
    title: "Understanding and Overcoming Dental Anxiety",
    excerpt: "Nervous about visiting the dentist? You are not alone. Discover simple techniques we use at our clinic to help you relax and feel safe during your visit.",
    date: "October 12, 2026",
    category: "Clinic News",
    imageUrl: "/images/blog-featured.jpg",
    imageAlt: "Patient relaxing in a dental chair",
  },
  articles: {
    headline: "Recent Articles",
    list: [
      {
        id: "brushing-basics",
        title: "Are You Brushing Too Hard? The Basics of Gentle Care",
        excerpt: "Vigorous brushing might feel cleaner, but it can damage your enamel and gums. Here is how to perfect your technique.",
        date: "September 28, 2026",
        category: "Preventive Care",
        imageUrl: "/images/blog-1.jpg",
        imageAlt: "Person brushing their teeth",
      },
      {
        id: "kids-first-visit",
        title: "Preparing Your Child for Their First Dental Visit",
        excerpt: "Setting a positive tone early on is crucial. Learn how to talk to your child about the dentist to prevent future fear.",
        date: "September 15, 2026",
        category: "Kids Dental",
        imageUrl: "/images/blog-2.jpg",
        imageAlt: "Happy child sitting in the dentist chair",
      },
      {
        id: "teeth-whitening-truths",
        title: "Professional Whitening vs. At-Home Kits",
        excerpt: "With so many options available, which teeth whitening method is safest and most effective for your smile?",
        date: "August 30, 2026",
        category: "Cosmetic",
        imageUrl: "/images/blog-3.jpg",
        imageAlt: "Close up of a bright white smile",
      }
    ],
    loadMoreText: "Load More Articles",
  },
  newsletter: {
    headline: "Smile Tips, Delivered.",
    description: "Join our community and get practical oral health advice sent straight to your inbox once a month.",
    placeholder: "Your email address",
    cta: "Subscribe",
  }
};
