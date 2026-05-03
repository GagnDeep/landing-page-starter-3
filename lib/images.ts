// lib/images.ts

const UNSPLASH_BASE = "https://images.unsplash.com";
const DEFAULT_PARAMS = "?auto=format&fit=crop&q=80";

type UnsplashImage = {
  url: string;
  alt: string;
  credit: string;
  creditUrl: string;
};

// Carefully selected Unsplash images that align with the "bridal-aesthetic" and "luxury clinical" vibe
export const siteImages: Record<string, UnsplashImage> = {
  // Hero and atmospheric backgrounds
  heroBridal: {
    url: `${UNSPLASH_BASE}/photo-1606800052052-a08af7148866${DEFAULT_PARAMS}&w=2000`, // Elegant bride/wedding detail
    alt: "Bridal elegance and glowing skin",
    credit: "Photos by Lanty",
    creditUrl: "https://unsplash.com/@photos_by_lanty",
  },
  heroClinic: {
    url: `${UNSPLASH_BASE}/photo-1629909613654-28e377c37b09${DEFAULT_PARAMS}&w=2000`, // Clean, modern clinic/spa interior
    alt: "Luxury clinical interior",
    credit: "Martha Dominguez de Gouveia",
    creditUrl: "https://unsplash.com/@mdominguezfoto",
  },
  abstractSoftGlow: {
    url: `${UNSPLASH_BASE}/photo-1618005182384-a83a8bd57fbe${DEFAULT_PARAMS}&w=1600`, // Soft, fluid abstract gradient
    alt: "Soft abstract gradient",
    credit: "Milad Fakurian",
    creditUrl: "https://unsplash.com/@miladfakurian",
  },

  // Service highlights
  serviceBridalSmile: {
    url: `${UNSPLASH_BASE}/photo-1588774069410-85ae31eb0579${DEFAULT_PARAMS}&w=1000`, // Natural, confident smile
    alt: "Radiant, confident smile",
    credit: "Lesly Juarez",
    creditUrl: "https://unsplash.com/@jblesly",
  },
  serviceFacialAesthetics: {
    url: `${UNSPLASH_BASE}/photo-1616683693504-3ea7e9ad6fec${DEFAULT_PARAMS}&w=1000`, // Close up of glowing skin / facial treatment
    alt: "Glowing, healthy skin profile",
    credit: "Fleur Kaan",
    creditUrl: "https://unsplash.com/@fleurkaan",
  },
  serviceAdvancedDentistry: {
    url: `${UNSPLASH_BASE}/photo-1606811841689-23dfddce3e95${DEFAULT_PARAMS}&w=1000`, // Clean, clinical dental aesthetic
    alt: "Advanced clinical dentistry equipment",
    credit: "Daniel Frank",
    creditUrl: "https://unsplash.com/@danieldoesurself",
  },

  // Doctor and Team
  drArshpreetPortrait: {
    url: `${UNSPLASH_BASE}/photo-1559839734-2b71ea197ec2${DEFAULT_PARAMS}&w=800`, // Professional female doctor portrait (proxy for Dr. Arshpreet)
    alt: "Portrait of Dr. Arshpreet Kaur",
    credit: "Usman Yousaf",
    creditUrl: "https://unsplash.com/@usmanyousaf",
  },
  teamCollaboration: {
    url: `${UNSPLASH_BASE}/photo-1579684385127-1ef15d508118${DEFAULT_PARAMS}&w=1200`, // Medical team consulting
    alt: "Medical team discussing treatment plan",
    credit: "National Cancer Institute",
    creditUrl: "https://unsplash.com/@nci",
  },

  // Gallery and Lifestyle
  galleryInterior: {
    url: `${UNSPLASH_BASE}/photo-1519494026892-80bbd2d6fd0d${DEFAULT_PARAMS}&w=1200`, // Luxurious, calm waiting area
    alt: "Comfortable, luxurious clinic waiting lounge",
    credit: "Christian Mackie",
    creditUrl: "https://unsplash.com/@mackie",
  },
  bridalDetails: {
    url: `${UNSPLASH_BASE}/photo-1511285560929-80b456fea0bc${DEFAULT_PARAMS}&w=1000`, // Wedding aesthetic details
    alt: "Elegant bridal details",
    credit: "Beatriz Pérez Moya",
    creditUrl: "https://unsplash.com/@beatrizperezmoya",
  },
  technologyScanner: {
    url: `${UNSPLASH_BASE}/photo-1584362917165-526a968579e8${DEFAULT_PARAMS}&w=1000`, // Tech/medical equipment
    alt: "State-of-the-art medical technology",
    credit: "National Cancer Institute",
    creditUrl: "https://unsplash.com/@nci",
  },
};
