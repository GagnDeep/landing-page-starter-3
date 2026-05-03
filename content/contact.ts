import { SEOData, NoticeBarData } from "./types";

export const seo: SEOData = {
  title: "Contact Us | Dentistree Chandigarh",
  description: "Get in touch with Dentistree in Sector 22B, Chandigarh. Book an appointment, ask a question, or find directions to our clinic.",
};

export const noticeBar: NoticeBarData = {
  text: "For immediate assistance or emergencies, please call our main line.",
  cta: undefined
};

export const hero = {
  headline: "Get in Touch",
  subheadline: "We're here to answer your questions, schedule your visit, and help you achieve your best smile."
};

export const contactInfo = {
  phone: {
    label: "Call Us",
    value: "+91 98765 43210", // Placeholder
    subtext: "Available Mon-Sat, 9:30 AM - 7:30 PM",
    href: "tel:+919876543210"
  },
  email: {
    label: "Email Us",
    value: "hello@dentistreechandigarh.in", // Placeholder
    subtext: "We aim to respond within 24 hours.",
    href: "mailto:hello@dentistreechandigarh.in"
  },
  address: {
    label: "Visit Us",
    value: "Sector 22B, Chandigarh, 160022",
    subtext: "Get Directions",
    href: "https://maps.google.com/?q=Sector+22B+Chandigarh" // Placeholder map link
  }
};

export const schedule = {
  title: "Clinic Hours",
  days: [
    { day: "Monday - Friday", hours: "9:30 AM - 7:30 PM" },
    { day: "Saturday", hours: "9:30 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ]
};

export const emergencyInfo = {
  title: "Dental Emergencies",
  description: "Experiencing severe pain, a knocked-out tooth, or swelling? Contact us immediately. We prioritize dental emergencies to provide rapid relief.",
  cta: { label: "Call Emergency Line", href: "tel:+919876543210" }
};

export const contactForm = {
  title: "Send Us a Message",
  fields: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    interest: "I am interested in...",
    message: "Your Message"
  },
  submitLabel: "Send Message",
  successMessage: "Thank you for reaching out! A member of our team will contact you shortly."
};

export const locationDetails = {
  title: "Finding Our Clinic",
  description: "Dentistree is centrally located in Sector 22B. We have dedicated parking spaces available for patients directly in front of the clinic entrance.",
  transit: "Easily accessible via local transit; the nearest bus stop is Sector 22 Market.",
  accessibility: "Our clinic is fully wheelchair accessible."
};

export const socialMedia = {
  title: "Follow Our Journey",
  platforms: [
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Facebook", href: "#", icon: "facebook" }
  ]
};

export const newPatientPromo = {
  headline: "Ready for your first visit?",
  description: "Download and fill out your new patient forms in advance to save time.",
  cta: { label: "Download Forms", href: "/downloads/patient-forms.pdf" }
};
