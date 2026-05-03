import { SEOMetadata, globalContent } from "./global";

export interface BlogContent {
  seo: SEOMetadata;
  hero: {
    headline: string;
    subheadline: string;
  };
  disclaimer: string;
  categories: string[];
  featuredArticle: {
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    slug: string;
  };
  posts: Array<{
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    slug: string;
  }>;
}

export const blogContent: BlogContent = {
  seo: {
    title: `Patient Education & Dental Blog | ${globalContent.clinicName}`,
    description: `Read the latest insights on oral health, dental implants, and hygiene from Dr. Anshum Gupta at Naresh Dental Clinic, Patiala.`,
  },
  hero: {
    headline: "Dental Health Hub",
    subheadline: "Expert advice, clinic updates, and comprehensive guides to help you maintain a healthy, beautiful smile for life.",
  },
  disclaimer: "The information provided here is for educational purposes only and should not replace professional medical advice. Always consult your dentist for a proper diagnosis.",
  categories: ["All", "Dental Implants", "Oral Hygiene", "Treatments", "Clinic News"],
  featuredArticle: {
    title: "The Complete Guide to Dental Implants: What to Expect",
    excerpt: "Considering a dental implant? Dr. Anshum Gupta explains the process, recovery time, and why titanium implants are the gold standard for tooth replacement.",
    category: "Dental Implants",
    readTime: "5 min read",
    slug: "complete-guide-to-dental-implants",
  },
  posts: [
    {
      title: "Why Does a Root Canal Have a Bad Reputation?",
      excerpt: "Modern endodontics is practically painless. Discover how advanced technology has transformed the RCT experience at our Patiala clinic.",
      category: "Treatments",
      readTime: "4 min read",
      slug: "truth-about-root-canals",
    },
    {
      title: "5 Signs You Might Need Your Wisdom Teeth Removed",
      excerpt: "Experiencing jaw pain or crowding? Learn the critical signs of impacted wisdom teeth and when surgical extraction becomes necessary.",
      category: "Treatments",
      readTime: "3 min read",
      slug: "signs-you-need-wisdom-teeth-removed",
    },
    {
      title: "The Hidden Impact of Gum Disease on Overall Health",
      excerpt: "Your oral hygiene is directly linked to your cardiovascular health. Understand the importance of professional scaling and gum treatments.",
      category: "Oral Hygiene",
      readTime: "4 min read",
      slug: "gum-disease-and-overall-health",
    },
    {
      title: "Maintaining Your Smile: The Importance of Bi-Annual Checkups",
      excerpt: "Preventative care is the most cost-effective dentistry. Here is why you shouldn't skip your 6-month dental cleaning.",
      category: "Oral Hygiene",
      readTime: "3 min read",
      slug: "importance-of-biannual-checkups",
    },
  ],
};
