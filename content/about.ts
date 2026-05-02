import { SEO, Section } from './types';

export const seoMetadata: SEO = {
  title: "About Us | Dentocare Clinic Chandigarh | Dr. Gaurav",
  description: "Learn about Dentocare's commitment to clinical excellence, strict hygiene, and compassionate care in Sector 46C, Chandigarh.",
  keywords: ["about dentocare", "dr gaurav dentist", "dental team chandigarh", "hygienic dental clinic"]
};

export const heroSection = {
  headline: "Redefining Dental Excellence in Chandigarh",
  subheadline: "A legacy of trust, advanced clinical skills, and a deeply empathetic approach to your family's oral health."
};

export const storySection = {
  title: "Our Story",
  content: "Dentocare was founded with a singular vision: to bring world-class, hygienic, and pain-free dentistry to the heart of Chandigarh. Located in Sector 46C, our state-of-the-art facility is built around the comfort and well-being of our patients. We pride ourselves on our 5.0-star reputation, earned through years of dedicated service."
};

export const valuesSection: Section<{ title: string; desc: string }> = {
  title: "Our Core Values",
  items: [
    { title: "Clinical Excellence", desc: "We adhere strictly to international standards of dental care and continuous education." },
    { title: "Uncompromising Hygiene", desc: "Patient safety is our priority, ensured through rigorous sterilization protocols." },
    { title: "Empathetic Care", desc: "We treat every patient like family, ensuring a comfortable, anxiety-free experience." },
    { title: "24/7 Accessibility", desc: "Dental emergencies don't wait, and neither do we. We are here when you need us most." }
  ]
};

export const drGauravSection = {
  name: "Dr. Gaurav",
  title: "Lead Dental Surgeon & Implantologist",
  bio: "Dr. Gaurav is a highly respected dental professional known for his meticulous approach and warm demeanor. With extensive expertise in complex procedures like dental implants and wisdom tooth surgeries, he is dedicated to providing pain-free, lasting solutions. His commitment to patient education and comfort has made Dentocare a trusted name in the region."
};
