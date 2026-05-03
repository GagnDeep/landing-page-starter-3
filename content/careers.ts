import { SEOData, HeroSection, SectionContent, FeatureItem } from './types';

export const careersSEO: SEOData = {
  title: "Careers | Smile Saviors Dental Clinic",
  description: "Join the premier dental team in Patiala. We are looking for passionate professionals dedicated to excellence in patient care."
};

export const careersHero: HeroSection = {
  headline: "Join the Smile Saviors Team",
  subheadline: "Build your career in a premium, high-tech environment that prioritizes professional growth and exceptional patient care.",
  primaryCTA: { label: "View Openings", href: "#positions" }
};

export const cultureAndValues: SectionContent = {
  heading: "Our Culture",
  body: "We foster an environment of continuous learning, mutual respect, and clinical excellence. Our state-of-the-art facility provides the perfect setting for professionals who refuse to compromise on quality."
};

export const benefits: { heading: string; items: FeatureItem[] } = {
  heading: "Why Work With Us",
  items: [
    { title: "Advanced Technology", description: "Practice using the latest in 3D imaging, digital scanners, and premium materials." },
    { title: "Continuing Education", description: "We sponsor and support ongoing training to ensure our team remains at the forefront of modern dentistry." },
    { title: "Premium Environment", description: "Work in a clean, beautifully designed clinic that patients and staff alike love to experience." }
  ]
};

export const openPositions = [
  {
    title: "Associate Dentist",
    department: "Clinical",
    description: "Seeking a highly skilled professional with experience in restorative and cosmetic procedures."
  },
  {
    title: "Dental Hygienist",
    department: "Clinical",
    description: "Looking for a detail-oriented hygienist passionate about patient education and preventive care."
  }
];

export const applicationProcess: SectionContent = {
  heading: "How to Apply",
  body: "Please submit your resume and a brief cover letter outlining your experience and alignment with our clinical philosophy to careers@smilesaviors.com."
};