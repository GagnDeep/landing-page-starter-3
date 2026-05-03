import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { images } from "@/lib/images";

export function Founder() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl border border-border/20">
            <Image
              src={images.home.drGupta.src}
              alt={images.home.drGupta.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/90 backdrop-blur px-6 py-4 rounded-xl border border-border/50">
                <p className="font-heading font-bold text-xl">{homeContent.founder.title}</p>
                <p className="text-primary text-sm font-semibold">{homeContent.founder.credentials}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <p className="text-primary font-semibold tracking-wider uppercase text-sm">
              {homeContent.founder.tagline}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              A Legacy of <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {homeContent.founder.bio}
            </p>
            <div className="pt-6">
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/about">
                  {homeContent.founder.cta}
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
