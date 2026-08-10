import { HugeiconsIcon } from "@hugeicons/react"
import {
  Idea01Icon,
  ArrowUpRight01Icon,
  SecurityCheckIcon,
} from "@hugeicons/core-free-icons"
import { Card, CardContent } from "@/components/ui/card"

export function BentoGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 max-w-[66ch]">
          <span className="mb-4 block font-mono text-sm tracking-wider text-primary uppercase">
            Coverage Areas
          </span>
          <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            What We Track
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="border-border/50 bg-muted md:col-span-2">
            <CardContent className="flex h-full flex-col justify-between p-8">
              <div>
                <HugeiconsIcon
                  icon={Idea01Icon}
                  className="mb-6 h-8 w-8 text-primary"
                />
                <h3 className="mb-4 font-heading text-2xl font-semibold">
                  The Agentic Underwriter
                </h3>
                <p className="max-w-md text-lg text-muted-foreground">
                  We cover the real-world deployment of LLMs and autonomous
                  agents in the submission triage and pricing process.
                </p>
              </div>
              {/* SVG 2 Placeholder */}
              <div className="mt-8 flex justify-end">
                <svg
                  width="120"
                  height="80"
                  viewBox="0 0 120 80"
                  fill="none"
                  className="text-primary/20"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <circle
                    cx="80"
                    cy="40"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    d="M60 20 L60 60"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-background">
            <CardContent className="flex h-full flex-col p-8">
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="mb-6 h-8 w-8 text-primary"
              />
              <h3 className="mb-4 font-heading text-xl font-semibold">
                Capacity Shifts
              </h3>
              <p className="text-muted-foreground">
                Where capital is flowing, which lines are tightening, and how
                underwriters are adapting guidelines.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground md:col-span-3">
            <CardContent className="flex flex-col items-center justify-between gap-8 p-8 md:flex-row">
              <div className="flex items-center gap-6">
                <div className="rounded-full bg-primary-foreground/10 p-4">
                  <HugeiconsIcon
                    icon={SecurityCheckIcon}
                    className="h-8 w-8 text-primary-foreground"
                  />
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-2xl font-semibold">
                    Vendor Verification
                  </h3>
                  <p className="max-w-2xl text-primary-foreground/80">
                    We cross-reference vendor claims against actual underwriter
                    experiences. If a tool doesn't work on the desk, we say so.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
