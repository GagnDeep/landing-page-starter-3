import { SeoMetadata, SectionContent } from "./types"

export const featuresSeo: SeoMetadata = {
  title: "Services & Treatments | Spacedent Dental Clinic",
  description:
    "Comprehensive dental services in Patiala, including single-sitting RCT, pediatric dentistry, clear aligners, and cosmetic treatments.",
}

export const featuresHero: SectionContent = {
  headline: "Comprehensive Care, Specialized Expertise",
  subheading:
    "From routine checkups to complex restorations, our technology-driven approach ensures optimal results with minimal discomfort.",
}

export const coreServices = [
  {
    id: "rct",
    title: "Single-Sitting Root Canal Treatment",
    description:
      "Experience relief in just one visit. Led by Dr. Vikramjit, our endodontic team utilizes advanced rotary instruments and apex locators to thoroughly clean, shape, and seal the infected tooth efficiently and painlessly.",
    highlights: [
      "Completed in one appointment",
      "Advanced local anesthesia for a pain-free experience",
      "High success rate using 3D imaging technology",
    ],
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    description:
      "Dr. Arshiya provides specialized care tailored for infants, children, and teens. We focus on preventive education, fluoride treatments, and gentle restorations in a fun, child-friendly environment.",
    highlights: [
      "Anxiety-free, playful environment",
      "Preventive sealants and fluoride treatments",
      "Habit counseling (thumb sucking, pacifier use)",
    ],
  },
  {
    id: "aligners",
    title: "Clear Aligners",
    description:
      "Straighten your smile discreetly. Our custom-made, virtually invisible aligners offer a comfortable and aesthetic alternative to traditional metal braces.",
    highlights: [
      "Custom 3D treatment planning",
      "Removable for easy eating and cleaning",
      "Faster, predictable results",
    ],
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Restore the function and aesthetics of your smile with permanent dental implants. They look, feel, and function like your natural teeth.",
    highlights: [
      "Surgical precision using CBCT scans",
      "Long-lasting and durable",
      "Preserves jawbone health",
    ],
  },
  {
    id: "cosmetic",
    title: "Cosmetic Enhancements",
    description:
      "Transform your smile with our range of cosmetic services, including professional teeth whitening, porcelain veneers, and composite bonding.",
    highlights: [
      "Custom smile design",
      "Minimally invasive techniques",
      "Stain-resistant porcelain options",
    ],
  },
]

export const technologySpotlight: SectionContent = {
  headline: "Powered by Advanced Technology",
  body: "We invest in the latest dental technology to make your treatments faster, safer, and more comfortable. From digital intraoral scanners that eliminate messy impressions to low-radiation digital X-rays for precise diagnostics.",
}

export const featuresProcess: SectionContent = {
  headline: "Your Journey with Us",
  body: "We believe in transparency and collaboration. Here is what you can expect when you visit Spacedent.",
}

export const processSteps = [
  {
    step: "01",
    title: "Comprehensive Consultation",
    description: "We start by listening to your concerns and conducting a thorough examination using low-radiation digital imaging.",
  },
  {
    step: "02",
    title: "Personalized Treatment Plan",
    description: "We present all available options and co-create a tailored plan that fits your goals, budget, and timeline.",
  },
  {
    step: "03",
    title: "Gentle Execution",
    description: "Our specialists execute the plan using advanced technology to ensure precision and minimal discomfort.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "We provide comprehensive aftercare instructions and schedule follow-ups to ensure your continued oral health.",
  },
]

export const featuresFaqTitle = "Frequently Asked Questions"

export const featuresFaq = [
  {
    id: "faq-1",
    question: "Is single-sitting RCT really painful?",
    answer: "Not at all. With modern local anesthesia and advanced rotary instruments, most patients report that a single-sitting root canal is no more uncomfortable than getting a standard filling.",
  },
  {
    id: "faq-2",
    question: "At what age should my child first see a dentist?",
    answer: "The American Academy of Pediatric Dentistry recommends that a child's first dental visit should occur within six months after the first tooth erupts, or by their first birthday.",
  },
  {
    id: "faq-3",
    question: "How long do clear aligner treatments usually take?",
    answer: "Treatment times vary based on the complexity of the case, but most patients achieve their desired results in 6 to 18 months.",
  },
]

export const featuresCta: SectionContent = {
  headline: "Ready for Your Transformation?",
  subheading: "Schedule a consultation today and discover how our specialized treatments can enhance your smile.",
  cta: {
    label: "Schedule Consultation",
    href: "/contact",
  }
}

export const featuresTechCode = `// Technology Stack @ Spacedent

const setupOperatory = () => {
  return {
    imaging: "Low-Radiation Digital X-Rays",
    scanning: "Intraoral 3D Scanners (No messy impressions)",
    endodontics: "Rotary Instruments & Apex Locators",
    comfort: "Advanced Local Anesthesia",
  }
}

// Result: Precision diagnostics and zero-anxiety treatments.
console.log(setupOperatory());`
