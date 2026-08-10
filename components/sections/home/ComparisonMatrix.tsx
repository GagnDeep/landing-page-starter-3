import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"

export function ComparisonMatrix() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-[66ch] text-center">
          <span className="mb-4 block font-mono text-sm tracking-wider text-primary uppercase">
            The Approach
          </span>
          <h2 className="mb-4 font-heading text-3xl font-semibold text-foreground md:text-4xl">
            What We Are Not
          </h2>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-2 border-b border-border bg-background">
            <div className="border-r border-border p-6 text-center font-heading text-xl font-semibold">
              Generic Tech Blogs
            </div>
            <div className="p-6 text-center font-heading text-xl font-semibold text-primary">
              The Underwriting Desk
            </div>
          </div>

          <div className="grid grid-cols-2 bg-background">
            <div className="flex items-start gap-4 border-r border-border p-6">
              <HugeiconsIcon
                icon={Cancel01Icon}
                className="mt-1 h-6 w-6 shrink-0 text-destructive"
              />
              <p className="text-sm text-muted-foreground md:text-base">
                Focuses on C-suite pitches and high-level theoretical AI
                capabilities.
              </p>
            </div>
            <div className="flex items-start gap-4 bg-primary/5 p-6">
              <HugeiconsIcon
                icon={CheckmarkBadge01Icon}
                className="mt-1 h-6 w-6 shrink-0 text-primary"
              />
              <p className="text-sm text-foreground md:text-base">
                Focuses on practitioner reality, actual desk tools, and daily
                workflow impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-border bg-background">
            <div className="flex items-start gap-4 border-r border-border p-6">
              <HugeiconsIcon
                icon={Cancel01Icon}
                className="mt-1 h-6 w-6 shrink-0 text-destructive"
              />
              <p className="text-sm text-muted-foreground md:text-base">
                Explains how to get into the industry.
              </p>
            </div>
            <div className="flex items-start gap-4 bg-primary/5 p-6">
              <HugeiconsIcon
                icon={CheckmarkBadge01Icon}
                className="mt-1 h-6 w-6 shrink-0 text-primary"
              />
              <p className="text-sm text-foreground md:text-base">
                Assumes you already have the job and are looking to compound
                your edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
