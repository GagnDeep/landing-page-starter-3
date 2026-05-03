import React from "react"
import Link from "next/link"
import { homeTestimonials, homeFaqSnippet, homeFinalCta } from "@/content/home"
import { FloatingBlobs } from "@/components/visuals"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export function TestimonialsAndFaq() {
  return (
    <React.Fragment>
      {/* Testimonials */}
      <section className="w-full bg-muted/30 py-24">
        <div className="container px-4 md:px-6">
          <h2 className="mb-16 text-center font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {homeTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-border/40 bg-background shadow-sm"
              >
                <CardContent className="flex h-full flex-col justify-between space-y-6 px-6 pt-8 pb-6">
                  <p className="leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="font-medium text-foreground">
                    &mdash; {testimonial.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="w-full bg-background py-24">
        <div className="container max-w-3xl px-4 md:px-6">
          <h2 className="mb-12 text-center font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {homeFaqSnippet.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-heading text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-8 text-center">
            <Button variant="link" asChild>
              <Link href="/faq">View all FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative w-full overflow-hidden bg-primary/5 py-32">
        <FloatingBlobs className="opacity-50" />
        <div className="relative z-10 container mx-auto max-w-4xl space-y-8 px-4 text-center md:px-6">
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {homeFinalCta.headline}
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground">
            {homeFinalCta.subheading}
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full px-10 text-lg shadow-xl shadow-primary/20"
          >
            <Link href={homeFinalCta.cta!.href}>{homeFinalCta.cta!.label}</Link>
          </Button>
        </div>
      </section>
    </React.Fragment>
  )
}
