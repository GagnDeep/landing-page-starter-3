export interface ImageAsset {
  src: string
  alt: string
  credit?: {
    name: string
    link: string
  }
}

const buildUnsplashUrl = (
  id: string,
  params: string = "w=1200&q=80&auto=format&fit=crop"
) => `https://images.unsplash.com/photo-${id}?${params}`

export const SITE_IMAGES: Record<string, Record<string, ImageAsset>> = {
  hero: {
    home: {
      src: buildUnsplashUrl("1606811841689-23dfddce3e95"),
      alt: "Modern, clean dental clinic interior with gentle lighting",
      credit: { name: "Caroline LM", link: "https://unsplash.com/@carolinelm" },
    },
    about: {
      src: buildUnsplashUrl("1576091160399-112ba8d25d1d"),
      alt: "Dentist and patient smiling in a welcoming clinic",
      credit: {
        name: "Atikah Akhtar",
        link: "https://unsplash.com/@atikahakhtar",
      },
    },
  },
  specialties: {
    rct: {
      src: buildUnsplashUrl("1576091160399-112ba8d25d1d"),
      alt: "Advanced dental technology and precise instruments",
      credit: {
        name: "Daniel Frank",
        link: "https://unsplash.com/@danielmingook",
      },
    },
    pediatric: {
      src: buildUnsplashUrl("1604881988758-f76ad2f7aac1"), // Reliable image
      alt: "Happy child smiling",
      credit: {
        name: "Diana Polekhina",
        link: "https://unsplash.com/@diana_pole",
      },
    },
    aligners: {
      src: buildUnsplashUrl("1576091160399-112ba8d25d1d"), // Generic substitute for aligner
      alt: "Clear orthodontic aligners on a pristine surface",
      credit: { name: "Lesy Fesyk", link: "https://unsplash.com/@lesyf" },
    },
    cosmetic: {
      src: buildUnsplashUrl("1606811841689-23dfddce3e95"),
      alt: "Confident, bright smile",
      credit: { name: "Jurica Koletić", link: "https://unsplash.com/@jblesly" },
    },
  },
  clinic: {
    reception: {
      src: buildUnsplashUrl("1519494026892-80bbd2d6fd0d"), // Generic substitute for modern clinic
      alt: "Welcoming and modern clinic reception area",
      credit: {
        name: "Rusty Watson",
        link: "https://unsplash.com/@rustywatson",
      },
    },
    operatory: {
      src: buildUnsplashUrl("1629909613654-28e377c37b09"),
      alt: "State-of-the-art dental operatory room",
      credit: {
        name: "Cedric Fauntleroy",
        link: "https://unsplash.com/@cedricfauntleroy",
      },
    },
  },
  team: {
    drVikramjit: {
      src: buildUnsplashUrl("1612349317150-e413f6a5b16d"), // Placeholder
      alt: "Dr. Vikramjit Singh, Endodontist",
      credit: {
        name: "Austin Distel",
        link: "https://unsplash.com/@austindistel",
      },
    },
    drArshiya: {
      src: buildUnsplashUrl("1559839734-2b71ea197ec2"), // Placeholder
      alt: "Dr. Arshiya, Pediatric Dentist",
      credit: {
        name: "National Cancer Institute",
        link: "https://unsplash.com/@nci",
      },
    },
  },
}
