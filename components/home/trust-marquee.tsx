import React from "react"
import { LogoMarquee, MicroIconSet } from "@/components/visuals"

export function TrustMarquee() {
  const logos = [
    <div
      key="1"
      className="flex items-center gap-2 font-heading text-xl font-medium"
    >
      <MicroIconSet iconType="sparkles" size={24} /> ADA Certified
    </div>,
    <div
      key="2"
      className="flex items-center gap-2 font-heading text-xl font-medium"
    >
      <MicroIconSet iconType="hospital" size={24} /> Premium Care
    </div>,
    <div
      key="3"
      className="flex items-center gap-2 font-heading text-xl font-medium"
    >
      <MicroIconSet iconType="tech" size={24} /> 3D Imaging
    </div>,
    <div
      key="4"
      className="flex items-center gap-2 font-heading text-xl font-medium"
    >
      ★ 5.0 Rating
    </div>,
    <div
      key="5"
      className="flex items-center gap-2 font-heading text-xl font-medium"
    >
      <MicroIconSet iconType="stethoscope" size={24} /> Top Endodontists
    </div>,
  ]

  return (
    <section className="w-full border-y border-border/50 bg-muted/20 py-12">
      <div className="container mb-4 px-4 text-center md:px-6">
        <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Trusted by families across Patiala
        </p>
      </div>
      <LogoMarquee
        logos={logos}
        speed="slow"
        className="opacity-70 transition-opacity duration-500 hover:opacity-100"
      />
    </section>
  )
}
