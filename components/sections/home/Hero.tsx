import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"

export function Hero() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex max-w-[66ch] flex-col space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-sm tracking-wider text-muted-foreground uppercase">
                The Underwriting Desk
              </span>
              <h1 className="font-heading text-4xl leading-tight font-semibold text-foreground md:text-5xl lg:text-6xl">
                Intelligence for the Working P&C Underwriter
              </h1>
              <p className="max-w-[50ch] text-xl leading-relaxed text-muted-foreground">
                A twice-weekly briefing on underwriting tooling, hiring, market
                moves and the live argument about AI in underwriting.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button size="lg" className="h-12 px-8 font-mono">
                Subscribe Free
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="ml-2 h-4 w-4"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 font-mono"
              >
                Read Latest Issue
              </Button>
            </div>
          </div>

          <div className="flex min-h-[400px] items-center justify-center rounded-lg border border-border bg-muted/50 p-8">
            {/* Inline SVG Graphic placeholder */}
            <svg
              className="h-full w-full max-w-sm text-primary"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="10"
                width="30"
                height="80"
                rx="2"
                fill="currentColor"
                fillOpacity="0.2"
              />
              <rect
                x="50"
                y="30"
                width="40"
                height="60"
                rx="2"
                fill="currentColor"
                fillOpacity="0.5"
              />
              <path
                d="M10 50 L90 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <circle cx="90" cy="20" r="4" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
