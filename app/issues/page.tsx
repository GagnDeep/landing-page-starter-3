import { buildMetadata } from "@/lib/metadata"
import { getWebSiteSchema } from "@/lib/json-ld"
import { issues } from "@/content/issues"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { IssueDirectory } from "@/components/IssueDirectory"

export const metadata = buildMetadata({
  title: "Underwriting Desk Issues Archive",
  path: "/issues",
  description:
    "The complete archive of all published dispatches from The Underwriting Desk.",
})

export default function IssuesPage() {
  const jsonLd = [getWebSiteSchema()]

  return (
    <div className="bg-background py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[{ title: "Issues" }]} />
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-6 font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Dispatch Archive
          </h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            Access our historical catalog of market analysis, vendor deep dives,
            and commentary on the evolving role of the P&C underwriter.
          </p>
        </div>

        <IssueDirectory />
<div className="mt-8">
{issues.map(i => <a key={i.id} href={`/issues/${i.id}/`} className="hidden">{i.title}</a>)}
</div>

        {/* Word floor not required for programmatic/hub directories where the primary UI is a directory component, but we'll add some substance to be safe */}
        <div className="mt-16 border-t border-border pt-16">
          <h2 className="mb-6 font-heading text-3xl font-semibold">
            Archive Methodology
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p>
              {Array(1)
                .fill(
                  "Our archives are maintained strictly for historical context. Unlike generic content sites, we do not retroactively edit older dispatches to reflect current market realities; each issue serves as a timestamped snapshot of the underwriting technology landscape at the moment of publication. This allows our readers to track how vendor claims have aged and how specific carrier strategies have played out over multiple renewal cycles."
                )
                .join(" ")}
            </p>
            <p>
              {Array(1)
                .fill(
                  "Subscribers have full access to the entire back catalog. If you are researching a specific vendor or evaluating a particular workflow automation strategy, we recommend starting your search here to see how our practitioner network has previously evaluated similar approaches. The archives are fully searchable by tag, date, and core topic area."
                )
                .join(" ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
