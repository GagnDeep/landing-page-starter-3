"use client"

import React from "react"
import Link from "next/link"
import { homeHero } from "@/content/home"
import {
  AnimatedGradientMesh,
  AnimatedHeroIllustration,
} from "@/components/visuals"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90svh] w-full items-center justify-center overflow-hidden">
      <AnimatedGradientMesh className="absolute inset-0" />

      <div className="relative z-10 container grid items-center gap-12 px-4 pt-12 pb-24 md:px-6 lg:grid-cols-2">
        <div className="flex max-w-2xl flex-col space-y-8">
          <div className="space-y-4">
            <h1 className="font-heading text-5xl leading-[1.1] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              {homeHero.headline}
            </h1>
            <p className="max-w-[540px] text-lg leading-relaxed text-muted-foreground md:text-xl">
              {homeHero.subheading}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full px-8 text-base shadow-lg shadow-primary/25"
            >
              <Link href={homeHero.primaryCta.href}>
                {homeHero.primaryCta.label}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full bg-background/50 px-8 text-base backdrop-blur-sm"
            >
              <Link href={homeHero.secondaryCta.href}>
                {homeHero.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative hidden h-full items-center justify-center lg:flex">
          <div className="relative z-10 aspect-square w-full max-w-md">
            <AnimatedHeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}
