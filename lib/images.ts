// Using optimized Unsplash images matching the "premium, clinical, serene" aesthetic.
export interface AppImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const buildUnsplashUrl = (id: string, width: number = 1920) => {
  return `https://images.unsplash.com/photo-${id}?w=${width}&q=80&auto=format&fit=crop`;
};

export const heroImages: Record<string, AppImage> = {
  homeHero: {
    src: buildUnsplashUrl("1606811841689-23dfddce3e95"), // Clean, bright clinical setting
    alt: "Modern, hygienic dental clinic operatories"
  },
  aboutHero: {
    src: buildUnsplashUrl("1588776814503-46f5580fe605"), // Professional team/doctor interaction
    alt: "Smile Saviors expert dental team consulting"
  },
  featuresHero: {
    src: buildUnsplashUrl("1598256989805-65ba56a6ba6d"), // Advanced dental equipment
    alt: "High-tech 3D imaging and dental equipment"
  }
};

export const teamImages: Record<string, AppImage> = {
  leadDoctor: {
    src: buildUnsplashUrl("1612349317150-e4eea366ae6e", 800), // Professional male doctor portrait
    alt: "Dr. Ajay Sharma, Lead Implantologist"
  },
  specialist: {
    src: buildUnsplashUrl("1594824436951-a81a5662590c", 800), // Professional female doctor portrait
    alt: "Dr. Priya Kaur, Cosmetic Specialist"
  }
};

export const blogImages: Record<string, AppImage> = {
  article1: {
    src: buildUnsplashUrl("1606811841689-23dfddce3e95", 800),
    alt: "Oral hygiene close up"
  },
  article2: {
    src: buildUnsplashUrl("1588776814503-46f5580fe605", 800),
    alt: "Patient smiling after cosmetic procedure"
  }
};

export const testimonialImages: Record<string, AppImage> = {
  patient1: {
    src: buildUnsplashUrl("1534528741775-53994a69daeb", 400),
    alt: "Happy patient portrait"
  },
  patient2: {
    src: buildUnsplashUrl("1507003211169-0a1dd7228f2d", 400),
    alt: "Satisfied patient portrait"
  }
};