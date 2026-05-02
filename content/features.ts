export interface MetaData {
  title: string;
  description: string;
}

export interface HeroSection {
  headline: string;
  subheadline: string;
}

export interface ServiceDetail {
  heading: string;
  description: string;
  inclusions: string[];
}

export interface ProductBrands {
  heading: string;
  brands: string[];
}

export interface AddOn {
  name: string;
  description: string;
}

export interface FeaturesContent {
  meta: MetaData;
  hero: HeroSection;
  bridalMakeup: ServiceDetail;
  engagementLooks: ServiceDetail;
  partyGlam: ServiceDetail;
  hairStyling: ServiceDetail;
  products: ProductBrands;
  addOnsHeading: string;
  addOns: AddOn[];
  serviceBookingCta: string;
}

export const featuresContent: FeaturesContent = {
  meta: {
    title: "Services | IKonic Beauty Salon",
    description: "Explore our premium beauty services including Bridal Makeup, Engagement Looks, Party Glam, and Hair Artistry in Patiala."
  },
  hero: {
    headline: "Artistry Tailored to Every Occasion.",
    subheadline: "From your bridal grand entrance to striking party glam, we craft looks that define the moment."
  },
  bridalMakeup: {
    heading: "Bridal Makeup",
    description: "Our flagship service designed to make you the breathtaking centerpiece of your wedding day. We focus on longevity, flawless finish, and capturing your unique essence.",
    inclusions: ["HD & Airbrush Options", "Premium Lash Application", "Signature Contouring", "Advanced Skin Prep"]
  },
  engagementLooks: {
    heading: "Engagement & Pre-Wedding",
    description: "Soft, romantic, and perfectly balanced. We create glowing looks that translate beautifully in both natural light and studio photography.",
    inclusions: ["Radiant Base", "Soft Glam Eyes", "Elegant Draping", "Photography-Optimized Finish"]
  },
  partyGlam: {
    heading: "Party Glam & Guest Makeup",
    description: "Make a statement at your next event. High-energy, sophisticated artistry that ensures you stand out from the crowd.",
    inclusions: ["Bold or Classic Styling", "Long-Wear Techniques", "Customized Color Palette"]
  },
  hairStyling: {
    heading: "Hair Artistry & Draping",
    description: "The perfect complement to your makeup. Our hair specialists architect styles ranging from classic traditional buns to modern, cascading waves.",
    inclusions: ["Intricate Updos", "Modern Waves", "Seamless Extension Placement", "Perfect Dupatta Draping"]
  },
  products: {
    heading: "The Products We Trust",
    brands: ["MAC Cosmetics", "Charlotte Tilbury", "Huda Beauty", "NARS", "Estée Lauder", "Anastasia Beverly Hills"]
  },
  addOnsHeading: "Service Enhancements",
  addOns: [
    { name: "Luxury Nail Art", description: "Bespoke gel extensions and intricate designs." },
    { name: "Floral Styling", description: "Fresh, hand-selected floral arrangements for your hair." },
    { name: "Lens Fitting", description: "Professional color contact lens application." }
  ],
  serviceBookingCta: "Secure Your Look"
};
