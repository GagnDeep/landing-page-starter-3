import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Prose } from "@/components/Prose"
import { buildMetadata } from "@/lib/site"
import { buildBreadcrumbJsonLd } from "@/lib/json-ld"
import { getGuides, getGuideBySlug } from "@/content/data"
import { notFound } from "next/navigation"
import { HugeiconsIcon } from "@hugeicons/react"
import { Book01Icon, Link01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"

export async function generateStaticParams() {
  return getGuides().map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const guide = getGuideBySlug(resolvedParams.slug)
  if (!guide) return {}

  const shortDesc = guide.description.length > 120 ? guide.description.substring(0, 117) + "..." : guide.description;
  const padding = " Read our detailed methodology guide to ensure you know how to safely evaluate algorithmic vendors.";
  const metaDesc = (shortDesc + padding).substring(0, 155) + ".";

  return buildMetadata({
    title: guide.title,
    description: metaDesc,
    path: `/guides/${guide.slug}/`,
  })
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const guide = getGuideBySlug(resolvedParams.slug)

  if (!guide) {
    notFound()
  }

  const jsonLd = buildBreadcrumbJsonLd([
    { name: "Guides", item: "/guides/" },
    { name: guide.title, item: `/guides/${guide.slug}/` }
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Breadcrumbs items={[
            { name: "Guides", href: "/guides/" },
            { name: guide.title, href: `/guides/${guide.slug}/` }
          ]} />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <article>
            <div className="mb-12 border-b pb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 block flex items-center gap-2">
                <HugeiconsIcon icon={Book01Icon} className="h-4 w-4"/> {guide.category}
              </span>
              <h1 className="text-display mb-6">{guide.title}</h1>
              <p className="text-lead">
                {guide.description}
              </p>
              <div className="flex items-center gap-4 mt-8 font-mono text-sm text-muted-foreground">
                 <span>PUBLISHED: {guide.publishedAt}</span>
                 {guide.updatedAt !== guide.publishedAt && <span>UPDATED: {guide.updatedAt}</span>}
              </div>
            </div>

            <Prose className="max-w-none mb-16">
              <p>
                The financial tooling space is crowded with affiliate sites that rank tools based on payout rates. This guide exists to strip away the marketing layers and equip retail investors with the frameworks needed to evaluate these tools objectively.
              </p>
              <h2>The Core Concept</h2>
              <p>
                Absolute return is meaningless without context. In a bull market, nearly every long-biased strategy will generate positive absolute returns. Marketing materials highlight these gains as proof of the algorithm's efficacy.
              </p>
              <p>
                However, if an algorithm returns 15% in a year where the S&P 500 returned 20%, the algorithm has destroyed value relative to a passive, zero-effort index fund. The algorithm generated negative alpha. Investors are paying subscription fees to underperform the market.
              </p>
              <h3>Survivorship Bias</h3>
              <p>
                Vendors often run multiple models simultaneously or test various parameter sets. When publishing marketing materials, they present the performance of the single model that happened to overperform during a specific backtested window. The models that failed are quietly discarded. This is classic survivorship bias.
              </p>
              <p>
                To neutralise this, our independent tracking apparatus captures recommendations in real-time and locks them into an immutable dataset. We do not allow retroactive amendments to trade histories.
              </p>
            </Prose>

            <section className="border-t pt-12">
              <h2 className="text-h3 mb-6">Related Reading</h2>
              <ul className="flex flex-col gap-3">
                 {getGuides().filter(g => g.slug !== guide.slug).slice(0, 2).map(sibling => (
                    <li key={sibling.slug}>
                      <Link href={`/guides/${sibling.slug}/`} className="flex items-center gap-2 text-accent hover:underline">
                        <HugeiconsIcon icon={Link01Icon} className="h-4 w-4"/> Read: {sibling.title}
                      </Link>
                    </li>
                 ))}
                 <li>
                   <Link href="/guides/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-4">
                      &larr; Return to Library
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
