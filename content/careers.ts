import { SEOContent, CTA } from './types';

export const careersContent = {
  seo: {
    title: "Careers & Academy | Amil's Hair Lounge",
    description: "Join the elite team at Amil's Hair Lounge or enroll in Amil's Academy to master the art of hair styling under Ajay Sir."
  } as SEOContent,
  hero: {
    headline: "Learn. Grow. Create.",
    subheading: "Whether you're looking to join our salon floor or start your journey at our academy, your future in beauty starts here."
  },
  academy: {
    headline: "Amil's Academy",
    description: "Led by Master Educator Ajay Sir, our academy bridges the gap between basic cosmetology and high-end salon floor reality. We teach the techniques that build 4.9-star reputations.",
    benefits: ["Hands-on live model training", "Advanced chemical theory", "Client consultation mastery", "Business and social media skills"],
    courses: [
      {
        title: "The Foundation Course",
        duration: "3 Months",
        description: "Perfect for beginners. Covers essential cutting, basic coloring, and salon etiquette."
      },
      {
        title: "Master Color & Balayage",
        duration: "4 Weeks",
        description: "An intensive deep-dive into advanced placement, formulation, and color correction."
      }
    ],
    cta: { label: "Request Syllabus", href: "/contact" } as CTA
  },
  salonCareers: {
    headline: "Join the Salon Team",
    description: "We are always looking for passionate, driven professionals to join our family. At Amil's, you aren't just an employee; you are an artist in residence.",
    values: ["Continuous internal education", "Premium product access", "A supportive, creative environment", "Competitive commission structures"],
    openPositions: [
      {
        role: "Senior Colorist",
        type: "Full-Time",
        description: "Minimum 5 years experience required. Must excel in Balayage and color correction."
      },
      {
        role: "Salon Assistant",
        type: "Full-Time",
        description: "An incredible opportunity to learn on the floor. Assisting senior stylists and managing client experience."
      }
    ],
    cta: { label: "Apply Now", href: "/contact" } as CTA
  }
};
