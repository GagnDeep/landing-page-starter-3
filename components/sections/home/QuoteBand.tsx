import { HugeiconsIcon } from "@hugeicons/react"
import { QuoteUpIcon } from "@hugeicons/core-free-icons"

export function QuoteBand() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative mx-auto max-w-4xl text-center">
          <HugeiconsIcon
            icon={QuoteUpIcon}
            className="absolute -top-8 -left-8 h-16 w-16 text-primary-foreground/20"
          />
          <p className="relative z-10 font-heading text-2xl leading-relaxed font-medium md:text-3xl">
            {
              "{{VERIFY: Pull quote about the necessity of this publication for the industry. A strong thesis statement from the editor or a prominent industry figure.}}"
            }
          </p>
          <div className="mt-8 font-mono text-sm tracking-wider text-primary-foreground/80 uppercase">
            — {"{{VERIFY: Quote Author Name}}"}, {"{{VERIFY: Title}}"}
          </div>
        </div>
      </div>
    </section>
  )
}
