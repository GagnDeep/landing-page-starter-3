import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HugeiconsIcon } from "@hugeicons/react"
import { HelpSquareIcon } from "@hugeicons/core-free-icons"

export function FAQAccordion() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <div className="mb-8 flex items-center gap-4">
          <HugeiconsIcon
            icon={HelpSquareIcon}
            className="h-8 w-8 text-primary"
          />
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-heading text-lg">
              Who is this publication for?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Working P&C insurance underwriters. We assume you already know the
              basics of the job and are looking for intelligence on tooling,
              market capacity shifts, and career trajectory.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-heading text-lg">
              How often do you publish?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Twice a week. We focus on high-signal analysis rather than daily
              noise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-heading text-lg">
              Is this related to credentialing?
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              No. We do not provide exam prep, CPCU resources, or career entry
              guides. This is purely practitioner intelligence.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
