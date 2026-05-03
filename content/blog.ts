import { SEOData, HeroSection } from './types';

export const blogContent = {
  seo: {
    title: "Dental Blog | Oral Health Tips | Dr. Bansal's Clinic",
    description: "Expert advice, oral hygiene tips, and clinic news from the team at Dr. Bansal's Dental Care in Patiala.",
  } as SEOData,

  hero: {
    title: "Dental Health Hub",
    subtitle: "Tips, news, and professional insights for a healthier, brighter smile.",
  } as HeroSection,

  categories: ["All", "Oral Hygiene", "Cosmetic", "Kids", "Clinic News"],

  newsletter: {
    title: "Join our Newsletter",
    description: "Get monthly dental tips and exclusive clinic offers delivered to your inbox.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe"
  },

  // Note: Actual blog posts would typically be fetched from a CMS (like Sanity, Contentful)
  // or a markdown folder. These are placeholders for the UI build phase.
  featuredPost: {
    title: "Why You Shouldn't Ignore Bleeding Gums",
    excerpt: "Bleeding gums are often the first sign of gingivitis. Learn why it happens and the simple steps you can take at home to reverse it before it becomes serious.",
    date: "October 15, 2023",
    category: "Oral Hygiene",
    slug: "why-you-shouldnt-ignore-bleeding-gums"
  },

  recentPostsHeading: "Recent Articles",
  readArticleLabel: "Read Article",

  mockPosts: [
    {
      title: "5 Tips for Building Better Habits in Kids",
      excerpt: "Make brushing fun and effective with these simple nightly routines.",
      date: "October 10, 2023",
      category: "Kids",
      slug: "tips-building-better-habits-kids",
    },
    {
      title: "The Truth About Professional Teeth Whitening",
      excerpt: "What to expect during a whitening session and how to maintain the results.",
      date: "October 02, 2023",
      category: "Cosmetic",
      slug: "truth-about-professional-teeth-whitening",
    },
    {
      title: "Welcome to Our New Leela Bhawan Clinic Location",
      excerpt: "We've expanded! Take a virtual tour of our newly designed, calm-clinic environment.",
      date: "September 28, 2023",
      category: "Clinic News",
      slug: "welcome-new-clinic-location",
    },
  ]
};
