import React from "react"
import Image from "next/image"
import Link from "next/link"
import { homeSpecialtyRct, homeSpecialtyPediatric } from "@/content/home"
import { SITE_IMAGES } from "@/lib/images"
import { AnimatedChart, FloatingBlobs } from "@/components/visuals"
import { Button } from "@/components/ui/button"

export function SpecialtiesSection() {
  return (
    <section className="w-full border-y border-border/30 bg-card/30 py-24">
      <div className="container space-y-32 px-4 md:px-6">
        {/* RCT Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative order-2 h-[500px] w-full overflow-hidden rounded-3xl border border-border/50 shadow-2xl lg:order-1">
            <Image
              src={SITE_IMAGES.specialties.rct.src}
              alt={SITE_IMAGES.specialties.rct.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-border bg-background/90 p-6 shadow-lg backdrop-blur-md">
              <h4 className="mb-4 font-heading text-lg font-semibold">
                Treatment Success & Efficiency
              </h4>
              <AnimatedChart
                data={[30, 60, 95]}
                labels={["Traditional", "Standard", "Spacedent"]}
                className="h-32"
              />
            </div>
          </div>
          <div className="order-1 space-y-6 lg:order-2">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Advanced Endodontics
            </div>
            <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              {homeSpecialtyRct.headline}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {homeSpecialtyRct.body}
            </p>
            <Button asChild variant="outline" className="mt-4 rounded-full">
              <Link href={homeSpecialtyRct.cta.href}>
                {homeSpecialtyRct.cta.label}
              </Link>
            </Button>
          </div>
        </div>

        {/* Pediatric Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary-foreground">
              Pediatric Dentistry
            </div>
            <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">
              {homeSpecialtyPediatric.headline}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {homeSpecialtyPediatric.body}
            </p>
            <Button asChild variant="outline" className="mt-4 rounded-full">
              <Link href={homeSpecialtyPediatric.cta.href}>
                {homeSpecialtyPediatric.cta.label}
              </Link>
            </Button>
          </div>
          <div className="relative h-[500px] w-full overflow-hidden rounded-3xl border border-border/50 shadow-2xl">
            <FloatingBlobs className="opacity-80" />
            <Image
              src={SITE_IMAGES.specialties.pediatric.src}
              alt={SITE_IMAGES.specialties.pediatric.alt}
              fill
              className="relative z-10 object-cover opacity-90 mix-blend-overlay"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
