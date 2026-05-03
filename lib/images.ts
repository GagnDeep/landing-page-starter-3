// Centralized Image Registry for Naresh Dental Clinic

export type ImageAsset = {
  src: string;
  alt: string;
  credit?: {
    name: string;
    url: string;
  };
};

// Base URL configuration for Unsplash to ensure optimized delivery
const getUnsplashUrl = (id: string, params: string = "auto=format&fit=crop&q=80") =>
  `https://images.unsplash.com/photo-${id}?${params}`;

export const images = {
  home: {
    hero: {
      src: getUnsplashUrl("1606811841689-23dfddce3e95", "w=1920&auto=format&fit=crop&q=80"), // Modern clinic interior
      alt: "Modern and hygienic dental clinic interior",
      credit: { name: "Daniel Frank", url: "https://unsplash.com/@daniel_frank" }
    },
    drGupta: {
      src: getUnsplashUrl("1622253692010-33b8b6035905", "w=800&auto=format&fit=crop&q=80"), // Professional doctor portrait placeholder
      alt: "Portrait of Dr. Anshum Gupta",
      credit: { name: "Usman Yousaf", url: "https://unsplash.com/@usmanyousaf" }
    },
    serviceImplants: {
      src: getUnsplashUrl("1598256989800-ef393f656113", "w=800&auto=format&fit=crop&q=80"), // Dental implant / clean teeth representation
      alt: "Close up of a perfect smile indicating successful dental implants",
      credit: { name: "Caroline LM", url: "https://unsplash.com/@carolinelm" }
    },
    serviceCosmetics: {
      src: getUnsplashUrl("1534608386348-18e38ad2e2ed", "w=800&auto=format&fit=crop&q=80"), // Bright smile
      alt: "Woman with a bright, healthy smile after cosmetic dentistry",
      credit: { name: "Lesly Juarez", url: "https://unsplash.com/@jblesly" }
    },
    clinicTourThumbnail: {
      src: getUnsplashUrl("1588776814503-46f5580fe605", "w=1200&auto=format&fit=crop&q=80"), // Dental chair/equipment
      alt: "State of the art dental operatory room",
      credit: { name: "Ani Kolleshi", url: "https://unsplash.com/@anikolleshi" }
    }
  },
  about: {
    hero: {
      src: getUnsplashUrl("1579684385127-1ef15d508118", "w=1920&auto=format&fit=crop&q=80"), // Team/clinic ambient
      alt: "Warm and inviting dental clinic reception area",
      credit: { name: "National Cancer Institute", url: "https://unsplash.com/@nci" }
    },
    facility: {
      src: getUnsplashUrl("1519494026892-80bbd2d6fd0d", "w=1200&auto=format&fit=crop&q=80"), // Clean medical facility
      alt: "Sterile and modern dental treatment room",
      credit: { name: "Martha Dominguez de Gouveia", url: "https://unsplash.com/@mdominguezfoto" }
    }
  },
  features: {
    hero: {
      src: getUnsplashUrl("1612349317150-e413f6a5b16d", "w=1920&auto=format&fit=crop&q=80"), // Technology/Doctor working
      alt: "Dentist using advanced diagnostic technology",
      credit: { name: "Jonathan Borba", url: "https://unsplash.com/@jonathanborba" }
    },
    sterilization: {
      src: getUnsplashUrl("1584362917165-526a968579e8", "w=800&auto=format&fit=crop&q=80"), // Clean instruments/hygiene
      alt: "Sterilized dental instruments ready for use",
      credit: { name: "Hush Naidoo Jade Photography", url: "https://unsplash.com/@hushnaidoo" }
    }
  },
  blog: {
    placeholder1: {
      src: getUnsplashUrl("1606265863641-52f1bd3200ff", "w=800&auto=format&fit=crop&q=80"), // Toothbrush/hygiene
      alt: "Dental hygiene tools including a toothbrush",
      credit: { name: "Diana Polekhina", url: "https://unsplash.com/@dianapole" }
    },
    placeholder2: {
      src: getUnsplashUrl("1598256989437-0edee6b34b68", "w=800&auto=format&fit=crop&q=80"), // Smiling person
      alt: "Happy person smiling",
      credit: { name: "Caroline LM", url: "https://unsplash.com/@carolinelm" }
    }
  },
  careers: {
    culture: {
      src: getUnsplashUrl("1559839734-2b71ea197ec2", "w=1200&auto=format&fit=crop&q=80"), // Medical professionals talking
      alt: "Team of medical professionals discussing a case",
      credit: { name: "Usman Yousaf", url: "https://unsplash.com/@usmanyousaf" }
    }
  }
} as const;
