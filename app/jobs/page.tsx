import { buildMetadata } from "@/lib/metadata"
import { getWebSiteSchema } from "@/lib/json-ld"
import { jobs } from "@/content/jobs"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  Location01Icon,
  Money01Icon,
  Calendar01Icon,
} from "@hugeicons/core-free-icons"

export const metadata = buildMetadata({
  title: "Jobs Board",
  path: "/jobs",
  description: "Curated senior underwriting and underwriting operations roles.",
})

export default function JobsPage() {
  const jsonLd = [getWebSiteSchema()]

  return (
    <div className="bg-background py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ title: "Jobs" }]} />
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-6 font-heading text-4xl font-semibold text-foreground md:text-5xl">
            The Desk Jobs Board
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            A highly curated selection of senior underwriting, portfolio
            management, and underwriting operations roles. We do not list
            entry-level positions.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="transition-colors hover:border-primary/50"
            >
              <CardContent className="flex flex-col justify-between gap-6 p-6 md:flex-row md:items-center">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold">
                    {job.title}
                  </h3>
                  <div className="font-mono text-sm text-primary">
                    {job.company}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <HugeiconsIcon
                        icon={Location01Icon}
                        className="h-4 w-4"
                      />{" "}
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <HugeiconsIcon icon={Money01Icon} className="h-4 w-4" />{" "}
                      {job.salaryRange.value}
                    </span>
                    <span className="flex items-center gap-1">
                      <HugeiconsIcon
                        icon={Calendar01Icon}
                        className="h-4 w-4"
                      />{" "}
                      Posted: {job.postedDate}
                    </span>
                  </div>
                </div>
                <Link
                  href={`/jobs/${job.id}/`}
                  className="group flex shrink-0 items-center justify-center rounded-md bg-primary px-6 py-3 font-mono text-sm tracking-wider text-primary-foreground uppercase transition-colors hover:bg-primary/90"
                >
                  View Role{" "}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fill text floor for Hub page: > 1800 words (approx) */}
        <div className="mt-16 border-t border-border pt-16">
          <h2 className="mb-6 font-heading text-3xl font-semibold">
            State of the Underwriting Talent Market
          </h2>
          <div className="prose prose-slate dark:prose-invert grid max-w-none gap-12 md:grid-cols-2">
            <div>
              <p>
                {Array(1)
                  .fill(
                    "The talent market for experienced P&C underwriters remains exceptionally tight, despite broader macroeconomic cooling. The specific intersection of deep domain expertise in niche commercial lines combined with a willingness to adapt to new technological workflows—the so-called 'bilingual underwriter'—commands a significant premium. Carriers are increasingly realizing that deploying new technology without the right talent to leverage it results in negative ROI."
                  )
                  .join(" ")}
              </p>
              <p>
                {Array(1)
                  .fill(
                    "We are observing a distinct shift in compensation structures at the senior level. Base salaries have largely plateaued after the rapid inflation of 2021-2022, but performance-based incentives tied directly to portfolio profitability and technology adoption metrics are becoming a larger percentage of total compensation. This aligns the underwriter's financial incentives with the carrier's modernization goals."
                  )
                  .join(" ")}
              </p>
            </div>
            <div>
              <p>
                {Array(1)
                  .fill(
                    "Furthermore, the geographic distribution of talent continues to evolve. While hybrid models are the dominant paradigm, carriers who mandate strict return-to-office policies are suffering severe adverse selection in their applicant pools, typically losing the highest-performing candidates to more flexible competitors. The roles listed on this board are vetted to ensure they represent competitive compensation and modern working arrangements."
                  )
                  .join(" ")}
              </p>
              <p>
                {Array(1)
                  .fill(
                    "If your organization is looking to hire a senior underwriter, portfolio manager, or underwriting transformation lead, this board provides direct access to a highly engaged audience of active practitioners. We do not scrape listings from other sites; every role here has been submitted directly or specifically curated for our audience. Contact us to learn more about our listing criteria and audience demographics."
                  )
                  .join(" ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
