import { SEO, Section } from './types';

export const seoMetadata: SEO = {
  title: "Our Services | Dentocare | Implants, Orthodontics, Surgery",
  description: "Explore Dentocare's comprehensive dental services including painless dental implants, pediatric orthodontics, cosmetic dentistry, and wisdom tooth extraction.",
  keywords: ["dental services chandigarh", "dental implants sector 46C", "kids braces", "wisdom tooth removal", "cosmetic dentistry"]
};

export const heroSection = {
  headline: "Comprehensive Dental Solutions",
  subheadline: "From routine checkups to full-mouth rehabilitations, Dentocare offers advanced, pain-free treatments tailored to your unique needs."
};

export const servicesSection = {
  title: "Specialized Treatments",
  items: [
    {
      id: "implants",
      title: "Advanced Dental Implants",
      description: "Regain your smile and confidence with our permanent, natural-looking dental implants. Dr. Gaurav utilizes 3D imaging for precise, minimally invasive placement.",
      benefits: ["Prevents bone loss", "Functions like natural teeth", "Long-lasting durability"]
    },
    {
      id: "orthodontics",
      title: "Pediatric & Adult Orthodontics",
      description: "Straighten your teeth effectively with our modern orthodontic solutions, including traditional braces and clear aligners. We specialize in gentle care for kids.",
      benefits: ["Corrects bite issues", "Improves oral hygiene", "Aesthetic clear options available"]
    },
    {
      id: "surgery",
      title: "Wisdom Tooth Surgery",
      description: "Experience painless and expertly managed wisdom tooth extractions. Our surgical protocols ensure quick recovery and minimal discomfort.",
      benefits: ["Prevents overcrowding", "Alleviates pain and infection", "Sedation options available"]
    },
    {
      id: "cosmetic",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our premium cosmetic services, including professional whitening, porcelain veneers, and complete smile makeovers.",
      benefits: ["Stain removal", "Corrects chipped or uneven teeth", "Boosts self-confidence"]
    }
  ]
};

export const technologySection = {
  title: "State-of-the-Art Technology",
  content: "We employ the latest advancements in dental technology, such as digital intraoral scanners and low-radiation digital X-rays, to ensure accurate diagnoses and superior treatment outcomes."
};
