import { SEOContent } from './types';

export const contactContent = {
  seo: {
    title: "Contact & Location | Amil's Hair Lounge Patiala",
    description: "Book an appointment or visit Amil's Hair Lounge in Leela Bhawan, Patiala. Contact our expert team today."
  } as SEOContent,
  hero: {
    headline: "Get in Touch",
    subheading: "Ready to elevate your style? We are here to answer your questions and secure your booking."
  },
  details: {
    address: {
      label: "Visit Us",
      value: "SCO 14, First Floor, Leela Bhawan Market, Patiala, Punjab 147001"
    },
    phone: {
      label: "Call Us",
      value: "+91 98765 43210"
    },
    email: {
      label: "Email Us",
      value: "hello@amilshairlounge.com"
    },
    hours: {
      label: "Salon Hours",
      schedule: [
        { days: "Tuesday - Sunday", time: "10:00 AM - 8:00 PM" },
        { days: "Monday", time: "Closed" }
      ]
    }
  },
  form: {
    headline: "Send us a Message",
    fields: {
      name: { label: "Full Name", placeholder: "Jane Doe" },
      email: { label: "Email Address", placeholder: "jane@example.com" },
      phone: { label: "Phone Number", placeholder: "+91 xxxxx xxxxx" },
      service: { label: "Interested Service", placeholder: "Select a service..." },
      message: { label: "Message", placeholder: "Tell us about your hair goals..." }
    },
    submitLabel: "Request Appointment"
  },
  map: {
    ariaLabel: "Map showing the location of Amil's Hair Lounge in Leela Bhawan, Patiala"
  }
};
