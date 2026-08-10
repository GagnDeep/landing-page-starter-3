import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Prose } from "@/components/Prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import { getVendors, getVendorBySlug } from "@/content/data"
import { notFound } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { Clock01Icon, AnalyticsUpIcon, Link01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"

export async function generateStaticParams() {
  return getVendors().map((vendor) => ({
    slug: vendor.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const vendor = getVendorBySlug(resolvedParams.slug)
  if (!vendor) return {}

  return buildMetadata({
    title: `${vendor.name} Tracking Data`,
    description: `Independent verification of the claims and performance metrics for ${vendor.name} against the S&P 500 benchmark index over time.`,
    path: `/tools/${vendor.slug}/`,
  })
}

export default async function VendorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const vendor = getVendorBySlug(resolvedParams.slug)

  if (!vendor) {
    notFound()
  }

  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Tools", item: "/tools/" },
    { name: vendor.name, item: `/tools/${vendor.slug}/` }
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Breadcrumbs items={[
            { name: "Tools", href: "/tools/" },
            { name: vendor.name, href: `/tools/${vendor.slug}/` }
          ]} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <article>
            <div className="mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block flex items-center gap-2">
                <HugeiconsIcon icon={AnalyticsUpIcon} className="h-4 w-4"/> {vendor.category}
              </span>
              <h1 className="text-display mb-6">{vendor.name} Verification</h1>
              <p className="text-lead max-w-3xl mb-8">
                {vendor.description}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md text-sm font-mono text-muted-foreground">
                 STATUS: {vendor.status.toUpperCase()}
              </div>
            </div>

            {/* Matrix of Claims */}
            <section className="mb-16">
              <h2 className="text-h3 mb-6">Marketing Claims Matrix</h2>
              <div className="w-full overflow-x-auto border rounded-lg bg-card">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="py-4 px-6 font-heading font-semibold text-sm">Metric</th>
                      <th className="py-4 px-6 font-heading font-semibold text-sm">Claimed Value</th>
                      <th className="py-4 px-6 font-heading font-semibold text-sm">Verification Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-6 font-medium text-sm text-muted-foreground uppercase tracking-wider">Subscription Cost</td>
                      <td className="py-4 px-6 font-mono font-medium">{vendor.cost.value}</td>
                      <td className="py-4 px-6 font-mono text-sm text-muted-foreground">
                        {vendor.cost.verificationDate}
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-6 font-medium text-sm text-muted-foreground uppercase tracking-wider">Win Rate</td>
                      <td className="py-4 px-6 font-mono font-medium">{vendor.claimedWinRate.value}</td>
                      <td className="py-4 px-6 font-mono text-sm text-muted-foreground">
                        {vendor.claimedWinRate.verificationDate}
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-4 px-6 font-medium text-sm text-muted-foreground uppercase tracking-wider">Alpha vs SPY</td>
                      <td className="py-4 px-6 font-mono font-medium">{vendor.claimedAlpha.value}</td>
                      <td className="py-4 px-6 font-mono text-sm text-muted-foreground">
                        {vendor.claimedAlpha.verificationDate}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <Prose className="max-w-none mb-16">
              <h2>Data Collection Status</h2>
              <p>
                This tool is currently in the <strong>{vendor.status}</strong> phase. We are actively monitoring and logging all published trade recommendations. To ensure statistical significance, we require a minimum 90-day baseline holding period before generating the first comparative alpha report against the S&P 500 benchmark.
              </p>
              <p>
                Once the initial baseline period concludes, a live performance chart will be rendered here, plotting the aggregate return of the captured signals directly against the SPY ETF over the identical timeframe.
              </p>
            </Prose>

            <section className="border-t pt-16">
              <h2 className="text-h3 mb-6">Compare Other Tools</h2>
              <ul className="flex flex-col gap-3">
                 {getVendors().filter(v => v.slug !== vendor.slug).slice(0, 2).map(sibling => (
                    <li key={sibling.slug}>
                      <Link href={`/tools/${sibling.slug}/`} className="flex items-center gap-2 text-accent hover:underline">
                        <HugeiconsIcon icon={Link01Icon} className="h-4 w-4"/> View {sibling.name} Verification
                      </Link>
                    </li>
                 ))}
                 <li>
                   <Link href="/tools/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-4">
                      &larr; Return to Tools Directory
                   </Link>
                 </li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
