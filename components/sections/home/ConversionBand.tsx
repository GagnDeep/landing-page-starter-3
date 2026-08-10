import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Mail01Icon } from "@hugeicons/core-free-icons"

export function ConversionBand() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-muted py-24">
      {/* SVG 3 Placeholder - subtle texture/pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-primary/5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 container mx-auto max-w-2xl px-4 text-center md:px-6">
        <h2 className="mb-6 font-heading text-4xl font-semibold text-foreground md:text-5xl">
          Ready to join the desk?
        </h2>
        <p className="mb-8 text-xl text-muted-foreground">
          Join thousands of other P&C professionals receiving our twice-weekly
          dispatches.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-14 px-8 font-mono text-lg">
            <HugeiconsIcon icon={Mail01Icon} className="mr-2 h-5 w-5" />
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  )
}
