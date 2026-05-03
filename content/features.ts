import { SEOMetadata, globalContent } from "./global";

export interface FeaturesContent {
  seo: SEOMetadata;
  hero: {
    headline: string;
    subheadline: string;
  };
  categories: Array<{
    id: string;
    title: string;
    description: string;
    services: Array<{
      name: string;
      details: string;
    }>;
  }>;
  comfort: {
    heading: string;
    body: string;
  };
}

export const featuresContent: FeaturesContent = {
  seo: {
    title: `Specialized Dental Services | ${globalContent.clinicName}`,
    description: `Comprehensive dental treatments in Patiala. We offer painless RCT, dental implants, wisdom tooth extractions, gum treatments, and advanced cosmetic dentistry.`,
  },
  hero: {
    headline: "Specialized Clinical Excellence",
    subheadline: "From routine maintenance to complex surgical restorations, we offer a complete spectrum of advanced dental care under one roof.",
  },
  categories: [
    {
      id: "implants",
      title: "Dental Implants & Prosthetics",
      description: "Permanent solutions for missing teeth, restoring both function and aesthetics seamlessly.",
      services: [
        {
          name: "Single & Multiple Implants",
          details: "Biocompatible titanium roots placed with surgical precision for a permanent, natural-feeling tooth replacement.",
        },
        {
          name: "Crowns & Bridges",
          details: "High-strength, color-matched ceramic and zirconia restorations to protect damaged teeth and bridge gaps.",
        },
      ],
    },
    {
      id: "endodontics",
      title: "Endodontics & Restorative",
      description: "Saving natural teeth and restoring structural integrity with advanced techniques.",
      services: [
        {
          name: "Painless Root Canal Treatment (RCT)",
          details: "Using rotary endodontics and profound anesthesia, we comfortably treat infected pulp and save your natural tooth.",
        },
        {
          name: "Tooth-Colored Fillings",
          details: "Durable composite resins that seamlessly blend with your natural enamel, replacing old amalgam fillings.",
        },
      ],
    },
    {
      id: "surgical",
      title: "Oral Surgery",
      description: "Safe, efficient surgical procedures with a focus on rapid healing.",
      services: [
        {
          name: "Painless Wisdom Tooth Extraction",
          details: "Expert removal of impacted or problematic wisdom teeth with minimal trauma and specialized post-operative care.",
        },
        {
          name: "Simple Extractions",
          details: "Gentle removal of severely damaged or non-restorable teeth.",
        },
      ],
    },
    {
      id: "periodontics",
      title: "Periodontics (Gum Care)",
      description: "Building a healthy foundation for your teeth.",
      services: [
        {
          name: "Advanced Gum Treatment",
          details: "Deep cleaning, scaling, and root planing to treat gingivitis and prevent periodontal disease.",
        },
      ],
    },
  ],
  comfort: {
    heading: "A Focus on Your Comfort",
    body: "We understand that dental visits can cause anxiety. Our clinic is designed to be a calming environment. We utilize specialized topical numbing gels before any injection and employ advanced local anesthetics to ensure that your treatment—whether a simple filling or a complex extraction—is entirely painless.",
  },
};
