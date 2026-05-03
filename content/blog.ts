import { SeoMetadata, SectionContent } from "./types"

export const blogSeo: SeoMetadata = {
  title: "Dental Insights & News | Spacedent Journal",
  description:
    "Stay updated with the latest in oral health, pediatric dental tips, and modern treatment options from the experts at Spacedent.",
}

export const blogHero: SectionContent = {
  headline: "Spacedent Journal",
  subheading:
    "Expert advice, clinic news, and insights into maintaining a healthy, beautiful smile for you and your family.",
}

export const blogCategories = [
  "All",
  "Pediatric Care",
  "Endodontics",
  "Cosmetic",
  "Oral Health Tips",
]

export const samplePosts = [
  {
    id: "preparing-child-first-visit",
    title: "How to Prepare Your Child for Their First Dental Visit",
    category: "Pediatric Care",
    excerpt:
      "Dr. Arshiya shares her top tips for ensuring your little one's first trip to the dentist is a positive, tear-free experience.",
    date: "2024-05-15",
    readTime: "4 min read",
  },
  {
    id: "truth-about-rct",
    title: "Debunking the Myth: Why Modern Root Canals Are Painless",
    category: "Endodontics",
    excerpt:
      "Still afraid of getting a root canal? Dr. Vikramjit explains how advanced technology has made single-sitting RCTs as routine as a filling.",
    date: "2024-04-28",
    readTime: "5 min read",
  },
  {
    id: "clear-aligners-vs-braces",
    title: "Clear Aligners vs. Traditional Braces: What's Right for You?",
    category: "Cosmetic",
    excerpt:
      "A comprehensive guide to understanding the pros and cons of modern orthodontic treatments.",
    date: "2024-04-10",
    readTime: "6 min read",
  },
]
