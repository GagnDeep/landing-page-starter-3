export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export interface BlogContent {
  meta: MetaData;
  hero: HeroSection;
  categories: string[];
  featuredPost: BlogPost;
  posts: BlogPost[];
  newsletterSection: string;
  loadMoreText: string;
  popularHeading: string;
  ctaText: string;
}

export const blogContent: BlogContent = {
  meta: {
    title: "The Bridal Edit | IKonic Beauty Salon Blog",
    description: "Discover the latest bridal makeup trends, skincare tips, and real wedding stories from Patiala's top beauty experts."
  },
  hero: {
    headline: "The Bridal Edit",
    subheadline: "Trends, Tips, and Tales from IKonic."
  },
  categories: ["All", "Trends", "Skincare", "Real Brides", "Hair"],
  featuredPost: {
    title: "2024 Bridal Makeup Trends in Punjab",
    excerpt: "From glass skin to modern minimalist glam, explore the looks defining this year's wedding season.",
    date: "October 15, 2023",
    category: "Trends",
    slug: "2024-bridal-trends"
  },
  posts: [
    {
      title: "Essential Pre-Wedding Skincare Timeline",
      excerpt: "When to start your facials and what products to avoid months before your big day.",
      date: "September 28, 2023",
      category: "Skincare",
      slug: "pre-wedding-skincare-timeline"
    },
    {
      title: "Real Bride: Simran's Royal Patiala Wedding",
      excerpt: "A look inside the stunning heritage wedding and the classic red lip look we created.",
      date: "September 10, 2023",
      category: "Real Brides",
      slug: "real-bride-simran"
    },
    {
      title: "Airbrush vs. HD Makeup: Which is Right for You?",
      excerpt: "Breaking down the differences to help you choose the perfect base for your skin type.",
      date: "August 22, 2023",
      category: "Trends",
      slug: "airbrush-vs-hd-makeup"
    }
  ],
  newsletterSection: "Subscribe for Weekly Bridal Tips",
  loadMoreText: "Load Older Posts",
  popularHeading: "Popular Reads",
  ctaText: "Start Your Bridal Journey"
};
