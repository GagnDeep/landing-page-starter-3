import {
  featuresHero,
  coreServices,
  technologySpotlight,
  featuresTechCode,
  featuresProcess,
  processSteps,
  featuresFaqTitle,
  featuresFaq,
  featuresCta
} from "@/content/features"
import { AnimatedHeroIllustration, CodeWindowTyping, DotMatrixGrid } from "@/components/visuals"
import Image from "next/image"
import { SITE_IMAGES } from "@/lib/images"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function FeaturesHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24 border-b">
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <DotMatrixGrid />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl text-left">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
              {featuresHero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {featuresHero.subheading}
            </p>
          </div>
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center">
            <AnimatedHeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

export function CoreServices() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-24">
          {coreServices.map((service, index) => {
            const isEven = index % 2 === 0
            // Map service to an image from the registry based on id
            let img = SITE_IMAGES.specialties.rct // fallback
            if (service.id === "rct") img = SITE_IMAGES.specialties.rct
            if (service.id === "pediatric") img = SITE_IMAGES.specialties.pediatric
            if (service.id === "aligners") img = SITE_IMAGES.specialties.aligners
            if (service.id === "implants") img = SITE_IMAGES.specialties.rct
            if (service.id === "cosmetic") img = SITE_IMAGES.specialties.cosmetic

            return (
              <div key={service.id} className={`flex flex-col gap-12 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-muted border">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6 lg:px-8">
                  <h3 className="font-heading text-3xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-4">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mr-3" />
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function FeaturesProcess() {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-4">
            {featuresProcess.headline}
          </h2>
          <p className="text-muted-foreground text-lg">
            {featuresProcess.body}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative p-6 bg-card rounded-2xl border shadow-sm flex flex-col h-full">
              <div className="text-5xl font-heading font-bold text-primary/20 mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturesFaq() {
  return (
    <section className="py-16 md:py-24 bg-background border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">
          {featuresFaqTitle}
        </h2>
        <div className="space-y-6">
          {featuresFaq.map((faq) => (
            <div key={faq.id} className="p-6 bg-card rounded-xl border shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturesCta() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="font-heading text-3xl md:text-5xl font-medium mb-6">
          {featuresCta.headline}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
          {featuresCta.subheading}
        </p>
        {featuresCta.cta && (
          <Link
            href={featuresCta.cta.href}
            className="inline-flex h-12 items-center justify-center rounded-full bg-background px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-background/90"
          >
            {featuresCta.cta.label}
          </Link>
        )}
      </div>
    </section>
  )
}

export function TechnologySpotlight() {
  return (
    <section className="py-16 md:py-24 bg-card border-y">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
             <div className="p-1 max-w-[500px] w-full mx-auto lg:mx-0">
               <CodeWindowTyping codeString={featuresTechCode} />
             </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
              {technologySpotlight.headline}
            </h2>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>{technologySpotlight.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
