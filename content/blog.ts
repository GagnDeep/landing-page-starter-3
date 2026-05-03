import { SEOContent } from './types';

export const blogContent = {
  seo: {
    title: "Editorial & Hair Care Journal | Amil's Hair Lounge",
    description: "Expert insights, hair care tips, and salon trends from the specialists at Amil's Hair Lounge in Patiala."
  } as SEOContent,
  hero: {
    headline: "The Editorial",
    subheading: "Insights and inspiration from the experts at Amil's."
  },
  categories: ["All", "Trends", "Maintenance", "Treatments", "Academy Insights"],
  featuredArticle: {
    title: "Why Hair Botox is the Ultimate Frizz Solution for Indian Summers",
    excerpt: "Humidity is the enemy of smooth hair. Discover how our signature Hair Botox treatment reconstructs your hair from the inside out, providing lasting protection against the Patiala heat.",
    category: "Treatments",
    readTime: "5 min read",
    link: "/blog/hair-botox-summer-solution"
  },
  articles: [
    {
      title: "Balayage vs. Highlights: What's Right for You?",
      excerpt: "Decoding the two most popular coloring techniques to help you choose your next look.",
      category: "Trends",
      readTime: "4 min read",
      link: "/blog/balayage-vs-highlights"
    },
    {
      title: "Post-Keratin Care: How to Make Your Treatment Last",
      excerpt: "You've invested in smooth hair. Here is exactly how to wash, style, and protect it to maximize longevity.",
      category: "Maintenance",
      readTime: "3 min read",
      link: "/blog/post-keratin-care"
    },
    {
      title: "Ajay Sir's Top 3 Hair Health Myths Debunked",
      excerpt: "From daily washing to split-end 'repair' products, our Master Stylist sets the record straight.",
      category: "Academy Insights",
      readTime: "6 min read",
      link: "/blog/hair-health-myths"
    }
  ],
  newsletter: {
    headline: "Join the Insider List",
    description: "Get exclusive styling tips, trend reports, and early access to salon promotions delivered straight to your inbox.",
    inputPlaceholder: "Enter your email address",
    cta: "Subscribe"
  }
};
