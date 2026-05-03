import { SEOData, HeroSection } from './types';

export const pricingContent = {
  seo: {
    title: "Pricing & Insurance | Dr. Bansal's Dental Care",
    description: "Transparent pricing and flexible payment options for your dental treatments in Patiala.",
  } as SEOData,

  hero: {
    title: "Transparent Pricing. No Surprises.",
    subtitle: "High-quality, calm dental care that fits your budget.",
  } as HeroSection,

  insurance: {
    title: "Insurance Information",
    description: "We work with several major health insurance providers to help you maximize your benefits. Our team will assist you in understanding your coverage and filing claims. Please bring your insurance card to your first visit.",
    acceptedProviders: ["Provider A", "Provider B", "Provider C"] // Placeholders to be updated by client
  },

  financing: {
    title: "Flexible Financing Options",
    description: "We believe financial concerns should never stand in the way of a healthy smile. We offer flexible EMI options and work with third-party financing partners like Bajaj Finserv to make comprehensive treatments affordable.",
  },

  newPatientSpecial: {
    title: "New Patient Welcome Offer",
    description: "Experience our clinic for the first time with a comprehensive evaluation.",
    price: "₹499",
    badge: "New Patients Only",
    includesTitle: "What's Included:",
    includes: [
      "Complete Oral Examination",
      "Digital X-Rays (if required)",
      "Personalized Treatment Plan",
      "Oral Hygiene Consultation"
    ],
    cta: { label: "Book Offer", href: "/contact" }
  },

  estimates: {
    title: "Estimated Procedure Costs",
    description: "While exact costs depend on your specific clinical needs, we provide these starting estimates for complete transparency. A detailed, written cost breakdown is always provided before any treatment begins.",
    disclaimer: "*Prices are indicative starting rates and may vary based on complexity.",
    tableHeaders: { procedure: "Procedure", range: "Estimated Range" },
    items: [
      { name: "Consultation", range: "₹300 - ₹500" },
      { name: "Scaling & Polishing", range: "₹800 - ₹1,500" },
      { name: "Tooth-Colored Filling", range: "₹1,000 - ₹2,500" },
      { name: "Root Canal Treatment (RCT)", range: "₹3,500 - ₹6,000" },
      { name: "Ceramic Crown", range: "₹4,000 - ₹8,000" },
      { name: "Teeth Whitening", range: "₹5,000 - ₹10,000" }
    ]
  },

  faq: {
    title: "Billing Questions",
    items: [
      {
        question: "Do you offer EMIs for treatments like braces or implants?",
        answer: "Yes, we offer flexible EMI options for extensive treatment plans. Our front desk can help you set up a payment schedule that works for you."
      },
      {
        question: "When is payment due?",
        answer: "Payment is generally due at the time services are rendered unless a prior financing arrangement has been made."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept Cash, UPI (Google Pay, PhonePe, Paytm), and all major Credit/Debit cards."
      }
    ]
  },

  finalCta: {
    title: "Discuss your treatment plan with us.",
    cta: { label: "Contact Front Desk", href: "/contact" }
  }
};
