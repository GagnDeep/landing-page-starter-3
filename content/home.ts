import { SEOData, HeroSection, FeatureItem } from './types';

export const homeContent = {
  seo: {
    title: "Dr. Bansal's Dental Care | Gentle Dentist in Patiala",
    description: "Experience calm, comprehensive, and friendly dental care at Dr. Bansal's Dental Care in SST Nagar, Patiala. Book your appointment today.",
  } as SEOData,

  // 1. Global Header (Handled by global content)

  // 2. Hero Section
  hero: {
    title: "Calm, Comprehensive Dental Care in Patiala.",
    subtitle: "A friendly, neighbourhood clinic where your comfort always comes first. From routine cleanings to complete smile makeovers.",
    primaryCta: { label: "Schedule a Visit", href: "/contact" },
    secondaryCta: { label: "Meet Dr. Bansal", href: "/about" },
    image: { alt: "A warm, welcoming smile from a patient in our dental clinic" },
  } as HeroSection,

  // 3. Trust Indicators
  trustIndicators: [
    "Serving Patiala Families",
    "5-Star Patient Rated",
    "Modern, Pain-Free Technology",
  ],

  // 4. Welcome / Philosophy Intro
  welcome: {
    title: "A Gentler Approach to Dentistry.",
    description: "We understand that visiting the dentist can be stressful. That's why we've designed our practice in SST Nagar to feel less like a clinical facility and more like a welcoming community space. Dr. Himal Bansal and our dedicated team prioritize clear communication, gentle techniques, and your absolute peace of mind.",
    image: { alt: "Dr. Bansal talking warmly with a patient" },
  },

  // 5. Core Services Grid
  services: {
    title: "Our Primary Services",
    items: [
      {
        title: "General & Preventive",
        description: "Routine check-ups, scaling, polishing, and fillings to keep your smile healthy.",
        link: { label: "Learn More", href: "/features#preventive" }
      },
      {
        title: "Cosmetic Dentistry",
        description: "Teeth whitening, veneers, and aesthetic treatments to boost your confidence.",
        link: { label: "Learn More", href: "/features#cosmetic" }
      },
      {
        title: "Restorative Care",
        description: "Crowns, bridges, and pain-free root canals to repair and protect your teeth.",
        link: { label: "Learn More", href: "/features#restorative" }
      },
      {
        title: "Pediatric Dentistry",
        description: "Gentle, patient care designed specifically to make children feel safe.",
        link: { label: "Learn More", href: "/features#pediatric" }
      }
    ]
  },

  // 6. The "Calm Clinic" Difference
  features: {
    title: "Why Choose Our Practice?",
    subtitle: "We combine modern clinical excellence with a compassionate, human-centered approach to ensure you receive the best possible care without the anxiety.",
    items: [
      {
        title: "Anxiety-Free Environment",
        description: "Designed with soothing colors, soft lighting, and a quiet atmosphere to help you relax."
      },
      {
        title: "Transparent Pricing",
        description: "No hidden fees. We discuss all costs and treatment options before we begin."
      },
      {
        title: "Modern Technology",
        description: "Utilizing digital X-rays and intraoral cameras for precise, comfortable diagnostics."
      },
      {
        title: "Community First",
        description: "Proudly serving our neighbours in SST Nagar with honest, long-term care."
      }
    ] as FeatureItem[]
  },

  // 7. Patient Testimonials
  testimonials: {
    title: "Stories from Our Patients",
    items: [
      {
        quote: "I've always been terrified of the dentist, but Dr. Bansal's team was incredibly patient. They explained everything and made sure I felt no pain during my root canal.",
        author: "Amanpreet S."
      },
      {
        quote: "The cleanest and most welcoming clinic I've visited in Patiala. My kids actually don't mind going in for their check-ups now!",
        author: "Neha M."
      },
      {
        quote: "Highly professional. The scaling and polishing were so thorough, and the staff is just lovely.",
        author: "Rajinder K."
      }
    ]
  },

  // 8. Dr. Bansal Profile Snippet
  doctorProfile: {
    name: "Dr. Himal Bansal",
    role: "Lead Dentist & Founder",
    bio: "With a passion for conservative and pain-free dentistry, Dr. Bansal focuses on saving natural teeth and restoring healthy smiles. He believes that every patient deserves to feel heard, respected, and fully comfortable in the dental chair.",
    link: { label: "Read Full Bio", href: "/about" },
    image: { alt: "Portrait of Dr. Himal Bansal in the clinic" }
  },

  // 9. Tour the Clinic
  clinicTour: {
    title: "Inside Our Clinic",
    subtitle: "A clean, modern space designed for your comfort.",
    images: [
      { alt: "Welcoming reception area with comfortable seating" },
      { alt: "State-of-the-art dental treatment room" },
      { alt: "Advanced sterilization equipment area" }
    ]
  },

  // 10. Technology & Comforts
  technology: {
    title: "Modern Tools, Gentle Touch",
    items: [
      "Digital Low-Radiation X-Rays",
      "Painless Injection Techniques",
      "Intraoral Cameras for Clear Communication",
      "Noise-Canceling Headphones Available"
    ]
  },

  // 11. New Patient Special
  specialOffer: {
    title: "New Patient Special",
    description: "Welcome to our practice! Schedule a comprehensive exam, digital X-rays, and a professional consultation.",
    cta: { label: "Claim Offer", href: "/contact" }
  },

  // 12. Insurance & Financing Preview
  financing: {
    title: "Simple, Transparent Billing",
    description: "We believe quality dental care should be accessible. We accept major insurance plans and offer flexible payment options to suit your budget.",
    link: { label: "View Pricing Options", href: "/pricing" }
  },

  // 13. Before & After Teaser
  beforeAfter: {
    title: "Transformative Results",
    description: "See the difference conservative, high-quality cosmetic dentistry can make.",
    image: { alt: "Subtle before and after comparison of a smile restoration" }
  },

  // 14. Emergency Dental Care Callout
  emergency: {
    title: "Experiencing Tooth Pain?",
    description: "Don't wait. We offer priority same-day appointments for dental emergencies to get you out of pain fast.",
    cta: { label: "Call Emergency Line", href: "tel:+919876543211" }
  },

  // 15. Blog Teaser
  blogTeaser: {
    title: "Dental Health Hub",
    link: { label: "Read All Articles", href: "/blog" }
  },

  // 16 & 17. Location, Accessibility & Hours (Data pulled from global.ts, text below)
  location: {
    title: "Visit Us in SST Nagar",
    subtitle: "Conveniently located with dedicated parking and wheelchair accessibility."
  },

  // 18. FAQ Accordion (Top 3)
  faqTeaser: {
    title: "Common Questions",
    items: [
      {
        question: "Do you treat children?",
        answer: "Yes, we love treating families! We recommend bringing your child in for their first visit around their first birthday."
      },
      {
        question: "Is teeth scaling painful?",
        answer: "Not at all. We use gentle ultrasonic scalers that comfortably remove plaque and tartar without damaging your enamel."
      },
      {
        question: "What should I expect on my first visit?",
        answer: "Your first visit involves a comprehensive exam, digital X-rays if needed, a discussion of your dental history, and a personalized treatment plan."
      }
    ],
    link: { label: "View All FAQs", href: "/faq" }
  },

  // 19. Final Grand CTA
  finalCta: {
    title: "Ready for a healthier smile?",
    subtitle: "Let our dedicated team take care of you in a calm, welcoming environment.",
    cta: { label: "Book Your Appointment", href: "/contact" }
  }

  // 20. Global Footer (Handled by global content)
};
