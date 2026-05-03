import { SEOMetadata, globalContent } from "./global";

export interface ContactContent {
  seo: SEOMetadata;
  hero: {
    headline: string;
    subheadline: string;
  };
  emergencyBanner: {
    heading: string;
    body: string;
  };
  contactInfo: {
    addressHeading: string;
    address: string;
    phoneHeading: string;
    emailHeading: string;
    hoursHeading: string;
  };
  form: {
    heading: string;
    body: string;
    fields: {
      name: string;
      phone: string;
      email: string;
      service: string;
      message: string;
    };
    submitLabel: string;
  };
}

export const contactContent: ContactContent = {
  seo: {
    title: `Contact & Location | ${globalContent.clinicName}`,
    description: `Book your appointment with Dr. Anshum Gupta. Find our clinic address in Patiala, contact numbers, and working hours.`,
  },
  hero: {
    headline: "Get in Touch",
    subheadline: "We are here to provide exceptional dental care. Schedule your consultation or reach out with any questions.",
  },
  emergencyBanner: {
    heading: "Dental Emergency?",
    body: `If you are experiencing severe pain, swelling, or have knocked out a tooth, please call us immediately at ${globalContent.phone}.`,
  },
  contactInfo: {
    addressHeading: "Clinic Location",
    address: "123 Health Avenue, Model Town, Patiala, Punjab 147001", // Adjust to real address when available
    phoneHeading: "Phone & WhatsApp",
    emailHeading: "Email",
    hoursHeading: "Working Hours",
  },
  form: {
    heading: "Request an Appointment",
    body: "Fill out the form below, and our reception team will contact you shortly to confirm your appointment time.",
    fields: {
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address (Optional)",
      service: "Service Interested In",
      message: "Additional Details or Symptoms",
    },
    submitLabel: "Request Appointment",
  },
};
