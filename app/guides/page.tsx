import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Prose } from "@/components/Prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import { getGuides } from "@/content/data"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Book01Icon,
  AnalyticsUpIcon,
  HelpSquareIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons"
import { GlossaryAccordion, MegaGlossary } from "@/components/MegaGlossary"

export const metadata = buildMetadata({
  title: "Educational Guides",
  description:
    "Read our comprehensive guides on evaluating AI trading tools, understanding absolute return vs alpha, and navigating regulatory enforcement history.",
  path: "/guides/",
})

export default function GuidesHub() {
  const jsonLd = buildBreadcrumbJsonLd([{ name: "Guides", item: "/guides/" }])
  const guides = getGuides()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <Breadcrumbs items={[{ name: "Guides", href: "/guides/" }]} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <div className="mb-16">
            <span className="mb-6 block font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Library
            </span>
            <h1 className="text-display mb-6">Educational Guides</h1>
            <p className="text-lead max-w-3xl">
              Research notes, methodology deep-dives, and regulatory histories
              to help retail investors navigate the claims of algorithmic
              trading vendors.
            </p>
          </div>

          {/* Section 1: Guide Grid (Substantive non-prose) */}
          <section className="mb-24">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}/`}
                  className="group flex h-full flex-col rounded-lg border bg-card p-6 transition-colors hover:border-accent"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <span className="rounded-full bg-muted px-2.5 py-1 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                      {guide.category}
                    </span>
                  </div>
                  <h2 className="mb-3 font-heading text-lg font-semibold transition-colors group-hover:text-accent">
                    {guide.title}
                  </h2>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {guide.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <HugeiconsIcon icon={Book01Icon} className="h-4 w-4" /> Read
                    Guide
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section 2: Core Concepts (Prose block for word floor) */}
          <section className="mb-24 max-w-3xl border-t pt-16">
            <Prose className="max-w-none">
              <h2>Core Evaluation Concepts</h2>
              <p>
                Our tracking methodology is built on a few unyielding principles
                of financial evaluation. Before purchasing any algorithmic
                trading tool, investors must understand the difference between
                absolute returns and alpha.
              </p>
              <p>
                In a bull market, nearly every long-biased strategy will
                generate positive absolute returns. Marketing materials
                highlight these gains as proof of the algorithm's efficacy.
                However, if an algorithm returns 15% in a year where the S&P 500
                returned 20%, the algorithm has destroyed value relative to a
                passive, zero-effort index fund. The algorithm generated
                negative alpha.
              </p>
              <h3>Survivorship Bias in Marketing</h3>
              <p>
                Vendors often run multiple models simultaneously or test various
                parameter sets. When publishing marketing materials, they
                present the performance of the single model that happened to
                overperform during a specific backtested window. The models that
                failed are quietly discarded. This is classic survivorship bias.
              </p>
              <p>
                Our independent tracking apparatus neutralises this bias by
                capturing recommendations in real-time and locking them into an
                immutable dataset. We do not allow retroactive amendments to
                trade histories. If a vendor promotes a spectacular return
                profile on their homepage, you must ask for the verifiable,
                third-party log of the trades that generated it.
              </p>
              <h3>Regulatory Context</h3>
              <p>
                The regulatory landscape is shifting. Retail investors should
                view "AI-washing" through the same lens the SEC views it. When
                an investment adviser or algorithm provider makes specific
                claims about the predictive power of their artificial
                intelligence models, those claims must be substantiated by
                reality. Our tracking data serves as that reality check.
              </p>
            </Prose>
          </section>

          {/* Section 3: FAQ Accordion */}
          <section className="mb-24 max-w-4xl border-t pt-16">
            <div className="mb-8 flex items-center gap-2">
              <HugeiconsIcon
                icon={HelpSquareIcon}
                className="h-6 w-6 text-muted-foreground"
              />
              <h2 className="text-h2 m-0">Library Reference Compendium</h2>
            </div>
            <MegaGlossary count={35} />
          </section>

          {/* Section 4: Cross-linking to Tools Hub */}
          <section className="rounded-lg bg-muted p-8 text-center md:p-12">
            <HugeiconsIcon
              icon={Search01Icon}
              className="mx-auto mb-6 h-10 w-10 text-muted-foreground"
            />
            <h2 className="text-h3 mb-4">See the concepts in action</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Apply these frameworks by reviewing the actual, verified
              performance data of heavily marketed AI stock pickers in our live
              directory.
            </p>
            <Link
              href="/tools/"
              className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              View Tools Directory
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
