import { homeContent } from "@/content/home";
import Image from "next/image";
import { siteImages } from "@/lib/images";

export function Welcome() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative mx-auto w-full max-w-[500px] aspect-square lg:max-w-none lg:order-last">
             <div className="absolute inset-0 bg-primary/10 rounded-full -translate-x-8 translate-y-8 -z-10" />
             <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-lg border border-border/50">
               <Image
                  src={siteImages.drBansalPortrait.src}
                  alt={siteImages.drBansalPortrait.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
               />
             </div>
          </div>

          <div className="max-w-xl">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {homeContent.welcome.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {homeContent.welcome.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
