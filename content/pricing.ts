export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
}

export interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

export interface ALaCarteItem {
  service: string;
  price: string;
}

export interface TermsInfo {
  heading: string;
  description: string;
}

export interface PricingContent {
  meta: MetaData;
  hero: HeroSection;
  intro: string;
  packages: Package[];
  aLaCarteHeading: string;
  aLaCarte: ALaCarteItem[];
  whatsIncludedHeading: string;
  whatsIncluded: string[];
  bookingTerms: TermsInfo;
  faqTeaser: string[];
  ctaBanner: string;
}

export const pricingContent: PricingContent = {
  meta: {
    title: "Pricing & Packages | IKonic Beauty Salon",
    description: "Transparent, luxury bridal makeup and party glam pricing in Patiala. Explore our customizable packages for your perfect day."
  },
  hero: {
    headline: "Investment in Your Perfect Day.",
    subheadline: "Transparent pricing for world-class bridal artistry."
  },
  intro: "Every bride is unique. While these packages serve as our foundation, we are committed to customizing your experience to perfectly match your vision and needs.",
  packages: [
    {
      name: "Engagement / Roka Elegance",
      price: "Starting at ₹15,000",
      description: "A soft, glowing look perfect for intimate celebrations.",
      features: ["HD Makeup Application", "Classic Hair Styling", "Lash Application", "Draping Assistance"]
    },
    {
      name: "The Bridal Signature",
      price: "Starting at ₹25,000",
      description: "Our comprehensive, premium package for the main event.",
      features: ["Premium HD/Airbrush Makeup", "Intricate Bridal Hair Artistry", "Luxury Mink Lashes", "Advanced Skin Prep", "Complete Styling & Draping"],
      isHighlighted: true
    },
    {
      name: "Reception Glamour",
      price: "Starting at ₹20,000",
      description: "A bold, modern aesthetic for your grand finale.",
      features: ["Long-wear HD Makeup", "Modern Hair Styling", "Lash Application", "Draping Assistance"]
    }
  ],
  aLaCarteHeading: "A La Carte Services",
  aLaCarte: [
    { service: "Party Makeup (Guest)", price: "₹5,000" },
    { service: "Bridal Trial Session", price: "₹3,500" },
    { service: "Hair Styling Only", price: "₹2,500" },
    { service: "Advanced Draping", price: "₹1,500" }
  ],
  whatsIncludedHeading: "Every Premium Package Includes",
  whatsIncluded: [
    "In-depth Consultation",
    "Use of International Luxury Brands",
    "Professional Lighting Setup for Prep Photos",
    "Touch-up Kit for the Event"
  ],
  bookingTerms: {
    heading: "Booking Terms & Conditions",
    description: "To secure your date, a 50% non-refundable retainer is required at the time of booking. The remaining balance is due on the day of the event. We recommend booking 3-6 months in advance for peak wedding season."
  },
  faqTeaser: ["Do you travel to the venue?", "Are trials paid?", "Can I upgrade to Airbrush later?"],
  ctaBanner: "Request a Custom Quote for Destination Weddings or Bridal Parties"
};
