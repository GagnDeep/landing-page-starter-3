import { SEOData, NoticeBarData } from "./types";

export const seo: SEOData = {
  title: "Dental Health Hub | Dentistree Chandigarh",
  description: "Explore our latest articles on pediatric care, orthodontics, oral hygiene, and clinic news from Dr. Siddharth and Dr. Isha Mahajan.",
};

export const noticeBar: NoticeBarData = {
  text: "Join our newsletter for monthly tips on maintaining a healthy family smile.",
  cta: { label: "Subscribe", href: "#newsletter" }
};

export const hero = {
  headline: "Dental Health Hub",
  subheadline: "Insights, tips, and updates from the experts at Dentistree to help you and your family maintain optimal oral health."
};

export const featuredArticle = {
  title: "Why Invisible Aligners Might Be the Perfect Choice for Your Teen",
  excerpt: "Navigating orthodontic options for teenagers can be stressful. Discover how invisible aligners offer a comfortable, discreet, and effective alternative to traditional metal braces.",
  date: "October 15, 2023",
  author: "Dr. Siddharth Mahajan",
  category: "Orthodontics",
  slug: "/blog/invisible-aligners-for-teens"
};

export const categories = [
  { name: "All", slug: "all" },
  { name: "Pediatric Care", slug: "pediatric-care" },
  { name: "Orthodontics & Aligners", slug: "orthodontics" },
  { name: "General Health", slug: "general-health" },
  { name: "Clinic News", slug: "clinic-news" }
];

export const recentPosts = {
  title: "Latest Articles",
  posts: [
    {
      title: "5 Tips for Your Child's First Dental Visit",
      excerpt: "Prepare your little one for a tear-free, positive experience at the dentist.",
      date: "October 02, 2023",
      author: "Dr. Isha Mahajan",
      category: "Pediatric Care",
      slug: "/blog/childs-first-dental-visit"
    },
    {
      title: "Understanding Dental Sealants: Are They Necessary?",
      excerpt: "A deep dive into how sealants protect vulnerable growing teeth from cavities.",
      date: "September 20, 2023",
      author: "Dr. Isha Mahajan",
      category: "Pediatric Care",
      slug: "/blog/understanding-dental-sealants"
    },
    {
      title: "The Truth About Professional Teeth Whitening",
      excerpt: "Separating fact from fiction when it comes to getting a brighter smile.",
      date: "September 10, 2023",
      author: "Dr. Siddharth Mahajan",
      category: "Aesthetic Dentistry",
      slug: "/blog/truth-about-teeth-whitening"
    }
  ]
};

export const newsletterSignup = {
  id: "newsletter",
  title: "Stay Informed",
  description: "Sign up for our monthly newsletter for oral health tips and exclusive clinic updates.",
  inputPlaceholder: "Enter your email address",
  cta: { label: "Subscribe Now", href: "#" }
};

export const doctorPicks = {
  siddharthTitle: "Dr. Siddharth Recommends",
  siddharthLinks: [
    { title: "Caring for Your Aligners", href: "/blog/caring-for-aligners" },
    { title: "When to Choose Traditional Braces", href: "/blog/traditional-vs-aligners" }
  ],
  ishaTitle: "Dr. Isha's Pediatric Corner",
  ishaLinks: [
    { title: "Making Brushing Fun", href: "/blog/making-brushing-fun" },
    { title: "Diet and Dental Health in Kids", href: "/blog/diet-and-kids-teeth" }
  ]
};

export const tagsCloud = {
  title: "Popular Topics",
  tags: ["Cavities", "Braces", "Invisalign", "Teeth Grinding", "Wisdom Teeth", "Fluoride"]
};

export const askDentist = {
  title: "Ask the Dentist",
  description: "Have a specific question? Submit it here, and we might feature the answer in our next post.",
  cta: { label: "Submit Question", href: "/contact" }
};

export const finalCta = {
  headline: "Ready to take the next step?",
  subheadline: "Schedule your consultation with our experts today.",
  cta: { label: "Book Appointment", href: "/contact" }
};
