export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
}

export interface FormLabels {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  service: string;
  message: string;
  submitButton: string;
}

export interface StudioDetails {
  heading: string;
  address: string;
  phone: string;
  email: string;
  hours: string[];
}

export interface ContactContent {
  meta: MetaData;
  hero: HeroSection;
  form: FormLabels;
  studio: StudioDetails;
}

export const contactContent: ContactContent = {
  meta: {
    title: "Contact Us | IKonic Beauty Salon",
    description: "Book your consultation or inquire about our premium makeup services. Visit our luxury studio on Bhadson Road, Patiala."
  },
  hero: {
    headline: "Let's Talk Beauty.",
    subheadline: "Reach out to secure your date or schedule a consultation."
  },
  form: {
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    eventDate: "Event Date",
    service: "Service Required",
    message: "Tell us about your vision",
    submitButton: "Send Inquiry"
  },
  studio: {
    heading: "Visit Our Studio",
    address: "Bhadson Road, Patiala, Punjab",
    phone: "+91 98765 43210",
    email: "hello@ikonicbeauty.in",
    hours: [
      "Monday - Saturday: 10:00 AM - 7:00 PM",
      "Sunday: By Appointment Only"
    ]
  }
};
