import { homeContent } from "@/content/home";
import { AvatarStack } from "@/components/visuals/AvatarStack";
import { siteImages } from "@/lib/images";
import { QuoteUpIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function Testimonials() {
  // Aggregate images for the Avatar Stack social proof
  const avatarImages = [
    { src: siteImages.testimonial1.src, alt: siteImages.testimonial1.alt },
    { src: siteImages.testimonial2.src, alt: siteImages.testimonial2.alt },
    { src: siteImages.testimonial3.src, alt: siteImages.testimonial3.alt },
  ];

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <AvatarStack images={avatarImages} className="mb-6 justify-center scale-110" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {homeContent.testimonials.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {homeContent.testimonials.items.map((testimonial, idx) => (
            <div key={idx} className="bg-primary-foreground/10 rounded-3xl p-8 backdrop-blur-sm border border-primary-foreground/10 flex flex-col">
              <HugeiconsIcon icon={QuoteUpIcon} className="size-10 text-primary-foreground/30 mb-6" strokeWidth={2} />
              <p className="text-lg leading-relaxed flex-1 mb-8 text-primary-foreground/90 font-medium">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="font-heading font-bold text-xl">
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
