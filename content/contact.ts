import { SEOData, HeroSection } from './types';

export const contactContent = {
  seo: {
    title: "Contact Us | Book Appointment | Dr. Bansal's Dental Care",
    description: "Get in touch with Dr. Bansal's Dental Care in SST Nagar, Patiala. Book your dental appointment online or call us for emergencies.",
  } as SEOData,

  hero: {
    title: "Get in Touch",
    subtitle: "We're here to help you smile. Reach out to schedule a visit or ask a question.",
  } as HeroSection,

  infoGrid: {
    addressTitle: "Visit the Clinic",
    phoneTitle: "Call Us",
    emailTitle: "Email Us",
  },

  form: {
    title: "Request an Appointment",
    description: "Fill out the form below, and our team will get back to you shortly to confirm your booking.",
    fields: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      date: "Preferred Date",
      reason: "Reason for Visit (e.g., Routine Checkup, Pain, Whitening)",
      message: "Additional Details or Questions"
    },
    submitLabel: "Send Request"
  },

  emergencyCallout: {
    title: "Severe Tooth Pain?",
    description: "If you are experiencing severe pain, swelling, or trauma, do not use this form. Please call our emergency line immediately.",
  },

  location: {
    title: "How to Find Us",
    parkingInfo: "We have dedicated patient parking available directly in front of the clinic.",
    transitInfo: "Located centrally in SST Nagar, easily accessible via local auto-rickshaws and cabs."
  }
};
