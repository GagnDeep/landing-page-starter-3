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
