import { aboutContent } from "@/content/about";
import Image from "next/image";
import { siteImages } from "@/lib/images";
import { FloatingBlobs } from "@/components/visuals/FloatingBlobs";

export function OriginAndBio() {
  return (
    <section className="py-24 relative overflow-hidden">
      <FloatingBlobs className="opacity-30 dark:opacity-10" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Origin Story */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {aboutContent.originStory.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {aboutContent.originStory.content}
          </p>
        </div>

        {/* Doctor Bio Deep Dive */}
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-muted/20 rounded-[3rem] p-8 md:p-12 border border-border/40">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg lg:order-last">
             <Image
                src={siteImages.drBansalPortrait.src}
                alt={aboutContent.drBansalDeepDive.image?.alt || "Dr. Himal Bansal"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
             />
          </div>

          <div>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-6">
              {aboutContent.drBansalDeepDive.credentials}
            </div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              {aboutContent.drBansalDeepDive.title}
            </h3>

            <div className="space-y-6">
              {aboutContent.drBansalDeepDive.bio.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
