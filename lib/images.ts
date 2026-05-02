export type ImageRef = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  link?: string;
};

// Centralized image registry using Unsplash source URLs with Next.js image optimization parameters
export const imageRegistry: Record<string, ImageRef> = {
  heroDesktop: {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop",
    alt: "A calm, luxurious home salon setup with soft lighting and premium products",
    width: 2000,
    height: 1125,
  },
  heroMobile: {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    alt: "Close up of elegant salon tools and soft towels",
    width: 800,
    height: 1200,
  },
  serviceHair: {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    alt: "Professional hairstylist cutting and styling client's hair",
    width: 800,
    height: 1000,
  },
  serviceSkin: {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    alt: "Relaxing facial treatment with organic skincare products",
    width: 800,
    height: 1000,
  },
  serviceNails: {
    src: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=800&auto=format&fit=crop",
    alt: "Meticulous gel manicure being applied in a bright, clean setting",
    width: 800,
    height: 1000,
  },
  serviceSpa: {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    alt: "Serene spa setup with essential oils and folded towels",
    width: 800,
    height: 1000,
  },
  teamFounder: {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    alt: "Portrait of Anita Desai, Founder and Lead Stylist",
    width: 800,
    height: 800,
  },
  teamOperations: {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    alt: "Portrait of Karan Singh, Head of Operations",
    width: 800,
    height: 800,
  },
  teamEsthetician: {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    alt: "Portrait of Meera Patel, Lead Esthetician",
    width: 800,
    height: 800,
  },
  aboutAtmosphere: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    alt: "A beautifully styled, relaxing modern living space ready for an at-home salon experience",
    width: 1200,
    height: 800,
  },
  blogPlaceholder1: {
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop",
    alt: "Woman with a fresh, bouncy blowout hairstyle",
    width: 800,
    height: 600,
  },
  blogPlaceholder2: {
    src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop",
    alt: "Bridal skincare preparation setup",
    width: 800,
    height: 600,
  },
  blogPlaceholder3: {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    alt: "At-home spa and wellness items arranged neatly",
    width: 800,
    height: 600,
  },
};
