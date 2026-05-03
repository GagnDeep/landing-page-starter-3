import { careersContent } from "@/content/careers";
import Image from "next/image";
import { siteImages } from "@/lib/images";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";

export function CareersCulture() {
  return (
    <section className="py-24 relative overflow-hidden">
      <FloatingBlobs className="opacity-30 dark:opacity-10" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg border border-border/50">
            <Image
              src={siteImages.heroAbout.src}
              alt="Our dental team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              {careersContent.culture.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {careersContent.culture.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
