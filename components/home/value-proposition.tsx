import React from "react"
import { homeValueProposition } from "@/content/home"
import { DotMatrixGrid } from "@/components/visuals"

export function ValueProposition() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24 lg:py-32">
      <DotMatrixGrid className="opacity-40" />
      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="mb-8 font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {homeValueProposition.headline}
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
          {homeValueProposition.body}
        </p>
      </div>
    </section>
  )
}
