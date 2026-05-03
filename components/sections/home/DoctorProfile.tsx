import { homeContent } from "@/content/home";
import Image from "next/image";
import { siteImages } from "@/lib/images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CTAGlow } from "@/components/visuals/CTAGlow";

export function DoctorProfile() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-muted/30 rounded-[3rem] p-8 md:p-12 lg:p-16 border border-border/50">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
               <Image
                  src={siteImages.drBansalPortrait.src}
                  alt={homeContent.doctorProfile.image?.alt || "Dr. Himal Bansal"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
               />
            </div>

            <div className="lg:col-span-7 lg:pl-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6">
                {homeContent.doctorProfile.role}
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {homeContent.doctorProfile.name}
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full mb-8" />

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                {homeContent.doctorProfile.bio}
              </p>

              <CTAGlow>
                <Button size="lg" asChild className="rounded-full px-8">
                  <Link href={homeContent.doctorProfile.link.href}>
                    {homeContent.doctorProfile.link.label}
                  </Link>
                </Button>
              </CTAGlow>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
