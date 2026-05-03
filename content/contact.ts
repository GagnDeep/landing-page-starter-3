import { SEOContent, HeroContent } from './types';

export const contactSEO: SEOContent = {
  title: "Contact Dentocare | Book an Appointment in Chandigarh",
  description: "Get in touch with Dentocare in Sector 46C, Chandigarh. Call us, send an email, or book your dental appointment online.",
};

export const contactHero: HeroContent = {
  headline: "We’d Love to Hear From You",
  subheadline: "Whether you need to schedule an appointment, have a question about a treatment, or are experiencing a dental emergency, our team is here for you.",
  primaryCTA: {
    label: "Call Us Now",
    href: "tel:+919876543210",
  },
};

export const contactInfo = {
  address: "Dentocare, Sector 46C, Chandigarh, India",
  phone: "+91 98765 43210",
  email: "hello@dentocarechd.com",
};

export const openingHours = [
  { days: "Monday - Saturday", hours: "10:00 AM - 8:00 PM" },
  { days: "Sunday", hours: "10:00 AM - 2:00 PM (By Appointment Only)" },
];

export const formLabels = {
  name: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  service: "Service Required",
  message: "How can we help you?",
  submit: "Send Message",
};
