import { buildMetadata } from "@/lib/metadata"
import { getWebSiteSchema } from "@/lib/json-ld"
import { vendors } from "@/content/vendors"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"

export const metadata = buildMetadata({
  title: "Vendors",
  path: "/vendors",
  description:
    "An index of the vendor landscape, separating real practitioner tools from vaporware.",
})

export default function VendorsPage() {
  const jsonLd = [getWebSiteSchema()]

  return (
    <div className="bg-background py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ title: "Vendors" }]} />
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-6 font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Vendor Directory
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            We track exactly which carriers are deploying which solutions, from
            submission intake to pricing engines. If it doesn't work on the
            desk, we say so.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {vendors.map((vendor) => (
            <Card
              key={vendor.slug}
              className="flex flex-col transition-colors hover:border-primary/50"
            >
              <CardHeader>
                <div className="mb-2 flex items-start justify-between">
                  <CardTitle className="font-heading text-2xl">
                    {vendor.name}
                  </CardTitle>
                  <Badge variant="secondary" className="font-mono text-xs">
                    {vendor.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <p className="mb-6 line-clamp-3 text-muted-foreground">
                  {vendor.description}
                </p>
                <Link
                  href={`/vendors/${vendor.slug}/`}
                  className="group flex items-center font-mono text-sm tracking-wider text-primary uppercase"
                >
                  Read Review{" "}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-16">
          <h2 className="mb-6 font-heading text-3xl font-semibold">
            The Vendor Landscape
          </h2>
          <div className="prose prose-slate dark:prose-invert grid max-w-none gap-12 md:grid-cols-2">
            <div>
              <p>
                The vendor landscape for P&C underwriting technology is
                currently experiencing a period of intense consolidation
                following the exuberance of the 2021-2022 funding cycle.
                Carriers are no longer willing to underwrite multi-year,
                multi-million dollar proof-of-concepts that fail to deliver
                immediate operational efficiency. As a result, the market is
                quickly separating into vendors who can demonstrably improve the
                combined ratio, and those selling vaporware. This directory is
                our ongoing effort to track that separation, providing
                underwriters with clear, unbiased assessments of the tools being
                pitched to their leadership teams.
              </p>
              <h3 className="mt-6 mb-2 font-heading text-xl">Composability</h3>
              <p>
                A significant trend we are tracking is the shift from monolithic
                core system replacements to highly composable, specialized
                tools. Underwriters have made it clear that they do not want to
                abandon their familiar interfaces, even if those interfaces are
                legacy green screens. The successful vendors are those who can
                embed their capabilities seamlessly into these existing
                workflows, providing insights exactly when and where they are
                needed, without demanding a complete paradigm shift in how the
                desk operates day-to-day.
              </p>
              <p>
                We are also seeing a rapid maturation in the way vendors
                approach data extraction and structuring. Early generation OCR
                tools were often rigid and required constant template
                maintenance. The new generation of tools leverages foundational
                LLMs to handle highly unstructured, diverse submission formats
                with much greater resilience. However, the accuracy of these
                systems remains a point of contention, and we rigorously
                evaluate vendor claims regarding straight-through processing
                capabilities.
              </p>
              <p>
                Another key differentiator among vendors is their approach to
                integration. The most capable AI model is useless if its output
                cannot be efficiently routed into the carrier's rating engine or
                policy administration system. Vendors who prioritize robust,
                well-documented APIs and pre-built connectors to major core
                systems are consistently winning enterprise deals over those
                with superior models but closed ecosystems.
              </p>
            </div>
            <div>
              <h3 className="mt-6 mb-2 font-heading text-xl">
                Diverging Markets
              </h3>
              <p>
                Another critical area of observation is the divergence between
                large tier-one carriers and the mid-market. Tier-one carriers
                are increasingly insourcing the development of their
                underwriting workbenches, leveraging foundational models and
                internal engineering teams to build proprietary solutions
                tailored to their highly specific needs. Mid-market carriers,
                conversely, are heavily reliant on external vendors to provide
                off-the-shelf capabilities that allow them to remain competitive
                in a hardening market.
              </p>
              <h3 className="mt-6 mb-2 font-heading text-xl">
                Independent Record
              </h3>
              <p>
                This directory serves as a living record of our analysis. We do
                not aggregate user reviews, nor do we accept payment for
                placement. Our reviews are based solely on direct practitioner
                feedback, technical deep dives, and an analysis of actual
                deployment outcomes. When reviewing these profiles, pay
                particular attention to the 'cons' section, as this is where the
                true friction points in deployment are usually found—factors
                that vendor marketing materials conveniently omit.
              </p>
              <p>
                One of the most common friction points we uncover is the
                requirement for extensive human-in-the-loop intervention.
                Vendors frequently tout automation rates that assume perfectly
                formatted submission data. When confronted with the messy
                reality of broker submissions, these systems often default to
                manual review, effectively shifting the administrative burden
                rather than eliminating it. We strive to highlight these
                discrepancies in our evaluations.
              </p>
              <p>
                We also evaluate the long-term viability of the vendors
                themselves. The current macroeconomic environment has severely
                restricted access to venture capital, meaning that unprofitable
                startups face a precarious future. We monitor funding rounds,
                executive turnover, and customer churn rates to assess whether a
                vendor is likely to survive the current market cycle or be
                acquired by a larger legacy player.
              </p>
            </div>
          </div>

          {/* Visual break / table to satisfy design constraints */}
          <div className="mt-12 overflow-x-auto rounded-lg border border-border bg-muted p-8">
            <h3 className="mb-4 font-heading text-2xl font-semibold">
              Market Matrix
            </h3>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="border-b border-border p-4 font-mono text-sm">
                    Vendor
                  </th>
                  <th className="border-b border-border p-4 font-mono text-sm">
                    Category
                  </th>
                  <th className="border-b border-border p-4 font-mono text-sm">
                    Target Market
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 text-sm font-semibold">Cytora</td>
                  <td className="p-4 font-mono text-sm">Submission Intake</td>
                  <td className="p-4 text-sm">Tier 1 & 2 Commercial</td>
                </tr>
                <tr className="border-b border-border bg-background">
                  <td className="p-4 text-sm font-semibold">Send Technology</td>
                  <td className="p-4 font-mono text-sm">Workbench</td>
                  <td className="p-4 text-sm">Mid-Market to Tier 1</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm font-semibold">Kalepa</td>
                  <td className="p-4 font-mono text-sm">Copilot</td>
                  <td className="p-4 text-sm">MGA & Mid-Market Carrier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-slate dark:prose-invert mt-12 grid max-w-none gap-12 border-t border-border pt-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 font-heading text-2xl font-semibold">
                Implementation Realities
              </h3>
              <p>
                A recurring theme in our vendor analysis is the stark contrast
                between the sales demonstration and the implementation reality.
                In a controlled demo environment, with perfectly mapped data and
                idealized workflows, nearly every tool looks revolutionary.
                However, when these tools intersect with the technical debt and
                data silos inherent in most carriers, timelines stretch and
                budgets balloon.
              </p>
              <p>
                We advise underwriting operations leaders to approach vendor
                selection with a focus on proof-of-value rather than
                proof-of-concept. A POV requires the vendor to ingest actual,
                messy, historical submission data from the carrier and
                demonstrate tangible efficiency gains against a baseline, rather
                than simply proving the software functions in a sandbox.
              </p>
              <p>
                Furthermore, change management remains the most underestimated
                factor in deployment success. Underwriters are naturally
                skeptical of tools that obscure the decision-making process or
                operate as a black box. Vendors who prioritize
                explainability—showing the underwriter exactly how an algorithm
                arrived at a specific risk score or data extraction—consistently
                see higher adoption rates than those prioritizing pure accuracy
                over transparency.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-heading text-2xl font-semibold">
                The Build vs. Buy Calculus
              </h3>
              <p>
                As foundational models become more accessible and powerful, the
                traditional build vs. buy calculus is shifting. Historically,
                building a custom underwriting workbench was a monumental
                undertaking reserved only for the largest tier-one carriers.
                Today, the availability of robust APIs and open-source models is
                democratizing custom development.
              </p>
              <p>
                We are observing a trend where mid-market carriers and large
                MGAs are opting to build lightweight, highly customized
                orchestration layers internally, while buying specific
                capabilities like OCR or risk scoring via API from specialized
                vendors. This hybrid approach offers greater control over the
                user experience while leveraging external expertise for complex
                data processing tasks.
              </p>
              <p>
                However, this approach requires strong internal engineering
                talent and a clear understanding of API management. Carriers who
                underestimate the maintenance burden of a custom-built
                orchestration layer often find themselves bogged down in
                technical debt, unable to quickly adapt to changing market
                conditions or integrate new tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
