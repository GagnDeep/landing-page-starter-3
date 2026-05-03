export interface ImageMeta {
  src: string;
  alt: string;
  credit: {
    name: string;
    url: string;
  };
}

export const siteImages: Record<string, ImageMeta> = {
  heroHome: {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000",
    alt: "Warm and welcoming patient smiling after a dental visit",
    credit: { name: "Jonathan Borba", url: "https://unsplash.com/@jonathanborba" },
  },
  heroAbout: {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000",
    alt: "Friendly dental team member",
    credit: { name: "Ani Kolleshi", url: "https://unsplash.com/@anikolleshi" },
  },
  drBansalPortrait: {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    alt: "Portrait of lead dentist in a professional setting",
    credit: { name: "Usman Yousaf", url: "https://unsplash.com/@usman_yousaf" },
  },
  clinicInterior1: {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    alt: "Clean and modern dental clinic interior",
    credit: { name: "Daniel Frank", url: "https://unsplash.com/@danielmfrank" },
  },
  clinicInterior2: {
    src: "https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?auto=format&fit=crop&q=80&w=1200",
    alt: "State of the art dental equipment",
    credit: { name: "National Cancer Institute", url: "https://unsplash.com/@nci" },
  },
  servicePreventive: {
    src: "https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?auto=format&fit=crop&q=80&w=800",
    alt: "Dentist performing routine checkup",
    credit: { name: "National Cancer Institute", url: "https://unsplash.com/@nci" },
  },
  serviceCosmetic: {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    alt: "Beautiful, healthy, and confident smile",
    credit: { name: "Lesly Juarez", url: "https://unsplash.com/@jblesly" },
  },
  servicePediatric: {
    src: "https://images.unsplash.com/photo-1533089454174-8b65672abdb1?auto=format&fit=crop&q=80&w=800",
    alt: "Child smiling happily during dental visit",
    credit: { name: "Kiana Bosman", url: "https://unsplash.com/@kianabosman" },
  },
  testimonial1: {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1bfab8?auto=format&fit=crop&q=80&w=400",
    alt: "Smiling female patient",
    credit: { name: "Michael Dam", url: "https://unsplash.com/@michaeldam" },
  },
  testimonial2: {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    alt: "Happy male patient",
    credit: { name: "Vince Fleming", url: "https://unsplash.com/@vincefleming" },
  },
  testimonial3: {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    alt: "Patient with confident smile",
    credit: { name: "Christopher Campbell", url: "https://unsplash.com/@chrisjoelcampbell" },
  },
};
