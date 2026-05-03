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
      src: buildUnsplashUrl("1598256989805-a54449cc4527"),
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
      src: buildUnsplashUrl("1588776814503-46f5580de88c"),
      alt: "Happy child smiling in a dental chair",
      credit: {
        name: "Hush Naidoo Jade Photography",
        link: "https://unsplash.com/@hushnaidoo",
      },
    },
    aligners: {
      src: buildUnsplashUrl("1600171207604-0ee0c427dbcd"), // Generic substitute for aligner
      alt: "Clear orthodontic aligners on a pristine surface",
      credit: { name: "Lesy Fesyk", link: "https://unsplash.com/@lesyf" },
    },
    cosmetic: {
      src: buildUnsplashUrl("1536840656627-84bc0f952f94"),
      alt: "Confident, bright smile",
      credit: { name: "Jurica Koletić", link: "https://unsplash.com/@jblesly" },
    },
  },
  clinic: {
    reception: {
      src: buildUnsplashUrl("1586525198428-91fb17316fc1"), // Generic substitute for modern clinic
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
