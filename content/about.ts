import { SEOMetadata, globalContent } from "./global";

export interface AboutContent {
  seo: SEOMetadata;
  hero: {
    headline: string;
    subheadline: string;
  };
  mission: {
    heading: string;
    body: string;
  };
  doctorProfile: {
    name: string;
    title: string;
    bio: string[];
    credentials: string[];
  };
  values: {
    heading: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  hygieneStandard: {
    heading: string;
    body: string;
  };
}

export const aboutContent: AboutContent = {
  seo: {
    title: `About Us | ${globalContent.clinicName}`,
    description: `Learn about Dr. Anshum Gupta and the dedicated team at Naresh Dental Clinic in Patiala. We are committed to hygiene, advanced technology, and compassionate care.`,
  },
  hero: {
    headline: "Our Commitment to Your Smile",
    subheadline: "Blending decades of clinical expertise with a deep commitment to patient comfort and immaculate hygiene.",
  },
  mission: {
    heading: "A Legacy of Trust in Patiala",
    body: "Naresh Dental Clinic and Implant Center was founded on a simple principle: dentistry should be painless, transparent, and built on trust. For years, we have served the Patiala community by providing world-class dental solutions in an environment that feels welcoming and safe.",
  },
  doctorProfile: {
    name: "Dr. Anshum Gupta",
    title: "Lead Dental Surgeon & Implantologist",
    bio: [
      "Dr. Anshum Gupta is a distinguished dental professional known for his meticulous approach and gentle chairside manner.",
      "With specialized training in advanced implantology and endodontics, he ensures that every patient receives treatment tailored to their unique anatomical and aesthetic needs.",
      "His philosophy centers on educating patients, allowing them to make informed decisions about their oral health in a pressure-free environment."
    ],
    credentials: [
      "BDS, MDS (Specialization)",
      "Certified Implantologist",
      "Member of the Indian Dental Association"
    ],
  },
  values: {
    heading: "Our Core Values",
    items: [
      {
        title: "Uncompromising Hygiene",
        description: "We utilize multi-step, hospital-grade sterilization protocols to ensure a pristine clinical environment.",
      },
      {
        title: "Painless Procedures",
        description: "Modern anesthetics and gentle techniques mean you can finally relax during your dental visits.",
      },
      {
        title: "Advanced Technology",
        description: "From digital X-rays to precision scanners, we invest in tools that improve accuracy and comfort.",
      },
      {
        title: "Transparent Care",
        description: "We explain every diagnosis and treatment plan clearly, with no hidden costs or unnecessary procedures.",
      },
    ],
  },
  hygieneStandard: {
    heading: "The Platinum Standard in Sterilization",
    body: "Your safety is our absolute priority. Our dedicated sterilization bay features advanced autoclaving technology. Every instrument is thoroughly disinfected, pouched, and sealed before use. We use high-quality disposables wherever possible to guarantee a hygienic, risk-free experience.",
  },
};
