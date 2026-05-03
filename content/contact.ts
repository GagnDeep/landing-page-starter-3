import { Meta } from './home';

export interface ContactInfoBlock {
  title: string;
  detail: string;
  iconName: string;
}

export interface ContactFormContent {
  headline: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  submitButtonText: string;
  successMessage: string;
}

export interface ContactContent {
  meta: Meta;
  hero: {
    headline: string;
    subheadline: string;
  };
  info: {
    blocks: ContactInfoBlock[];
  };
  form: ContactFormContent;
  map: {
    headline: string;
    description: string;
    mapUrl: string;
  };
  emergency: {
    headline: string;
    description: string;
    cta: string;
  };
}

export const contactContent: ContactContent = {
  meta: {
    title: "Contact Us | Dr. Bansal’s Dental Care",
    description: "Get in touch with Dr. Bansal’s Dental Care in Patiala. Find our clinic location, hours, and contact details to book your appointment.",
  },
  hero: {
    headline: "We'd Love to Hear From You",
    subheadline: "Whether you need to book an appointment, have a question about a treatment, or are experiencing an emergency, our team is ready to help.",
  },
  info: {
    blocks: [
      {
        title: "Call Us",
        detail: "+91 98765 43210",
        iconName: "phone",
      },
      {
        title: "Email Us",
        detail: "hello@drbansaldental.com",
        iconName: "mail",
      },
      {
        title: "Visit Us",
        detail: "123 Clinic Road, Neighborhood Area, Patiala 147001",
        iconName: "mapPin",
      },
      {
        title: "Clinic Hours",
        detail: "Mon-Fri: 9am-7pm | Sat: 9am-2pm",
        iconName: "clock",
      }
    ]
  },
  form: {
    headline: "Send us a Message",
    namePlaceholder: "Your Full Name",
    emailPlaceholder: "Email Address",
    phonePlaceholder: "Phone Number",
    subjectPlaceholder: "How can we help?",
    messagePlaceholder: "Please describe your inquiry or symptoms...",
    submitButtonText: "Send Message",
    successMessage: "Thank you! We have received your message and will get back to you shortly.",
  },
  map: {
    headline: "Finding the Clinic",
    description: "We are conveniently located in the heart of Patiala with ample free parking available for patients.",
    mapUrl: "https://maps.google.com/?q=patiala", // Placeholder for actual maps embed URL
  },
  emergency: {
    headline: "Dental Emergency?",
    description: "If you are experiencing severe pain, swelling, or have knocked out a tooth, please call us immediately rather than using the contact form.",
    cta: "Call Now",
  }
};
