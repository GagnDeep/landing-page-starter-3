import { homeContent } from "@/content/home";
import Image from "next/image";
import { siteImages } from "@/lib/images";

export function ClinicTour() {
  const images = [
    { src: siteImages.clinicInterior1.src, alt: homeContent.clinicTour.images[0]?.alt || "Reception Area" },
    { src: siteImages.clinicInterior2.src, alt: homeContent.clinicTour.images[1]?.alt || "Treatment Room" },
    // For visual balance in a grid, reusing interior 1 if a third isn't distinctly available,
    // or typically we'd map over the actual array. For this specific implementation:
    { src: siteImages.servicePreventive.src, alt: homeContent.clinicTour.images[2]?.alt || "Sterilization Area" },
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {homeContent.clinicTour.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {homeContent.clinicTour.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
