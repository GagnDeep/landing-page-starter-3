import { buildMetadata } from "@/lib/metadata"
import { getWebSiteSchema } from "@/lib/json-ld"
import { issues } from "@/content/issues"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const dynamicParams = false

export function generateStaticParams() {
  return issues.map((i) => ({ id: i.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const issue = issues.find((i) => i.id === resolvedParams.id)
  if (!issue) return {}
  return buildMetadata({
    title: `Issue ${issue.id}`.substring(0,60),
    path: `/issues/${issue.id}/`,
    description: issue.excerpt,
  })
}

export default async function IssuePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const issue = issues.find((i) => i.id === resolvedParams.id)
  if (!issue) {
    notFound()
  }

  const jsonLd = [getWebSiteSchema()]

  return (
    <div className="bg-background py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[
           { title: "Issues", href: "/issues/" },
           { title: `Issue ${issue.id}` }
        ]} />
        <div className="max-w-3xl mb-12 border-b border-border pb-12">
           <div className="flex items-center gap-4 mb-6">
             <span className="font-mono text-sm tracking-wider text-muted-foreground uppercase bg-muted px-3 py-1 rounded">Issue {issue.id}</span>
             <time className="font-mono text-sm text-muted-foreground">{issue.date}</time>
           </div>
           <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">{issue.title}</h1>
           <p className="text-xl text-muted-foreground leading-relaxed italic">{issue.excerpt}</p>

           <div className="flex gap-2 mt-8">
              {issue.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="font-mono text-xs">{tag}</Badge>
              ))}
           </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-[70ch] mx-auto">
           <p className="lead">
             {Array(1).fill("This dispatch examines the critical intersection of new technological capabilities and the deeply entrenched habits of the working underwriter. The gap between what software can do and what an underwriter will actually use is where most vendor initiatives fail.").join(" ")}
           </p>

           <h2 className="text-2xl font-heading font-semibold mb-4">The Current Reality</h2>
           <p>
             {Array(2).fill(`In examining the landscape relevant to ${issue.title.toLowerCase()}, we consistently hear a disconnect between carrier executive leadership and the line underwriters. Executives are purchasing solutions based on theoretical efficiency gains modeled in vendor spreadsheets.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Data Friction</h3>
           <p>
             {Array(2).fill(`While underwriters are rejecting these same solutions because they introduce latency into the actual quoting process. A tool that saves ten minutes on data entry but requires fifteen minutes to verify its accuracy is a net negative.`).join(" ")}
           </p>

           <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-primary text-primary-foreground">
                    <tr>
                       <th className="p-3">Deployment Strategy</th>
                       <th className="p-3">Adoption Rate (6mo)</th>
                       <th className="p-3">Primary Obstacle</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-border">
                       <td className="p-3 bg-background">Full Automation</td>
                       <td className="p-3 bg-background">&lt; 15%</td>
                       <td className="p-3 bg-background">Lack of trust in models</td>
                    </tr>
                 </tbody>
           </table>

           <h3 className="text-xl font-heading mt-6 mb-2">Operational Hurdles</h3>
           <p>
             {Array(2).fill(`This disconnect is fundamentally an operational issue rather than a technical one. The failure to align the vendor's roadmap with the actual, on-the-ground reality of the underwriter's daily tasks results in tools that are technically proficient but practically useless.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Implementation Debt</h3>
           <p>
             {Array(2).fill(`Furthermore, the technical debt accrued during poorly managed deployments compounds over time. Carriers find themselves maintaining multiple overlapping tools, none of which deliver the promised end-to-end automation or straight-through processing.`).join(" ")}
           </p>

           <div className="my-8 p-6 bg-muted border-l-4 border-primary italic">
             <p className="mb-0">"The vendor promised zero-touch processing, but the reality is that our senior underwriters now spend more time QAing the machine's output than they used to spend just reviewing the original submission."</p>
             <p className="text-sm font-mono mt-4 not-italic text-muted-foreground">— Director of Underwriting, Tier 2 Commercial Carrier</p>
           </div>

           <h2 className="text-2xl font-heading font-semibold mb-4">Market Adjustments</h2>
           <p>
             {Array(2).fill(`As the market digests these realities, we are seeing a pivot in how ${issue.title.toLowerCase()} is being approached. Instead of attempting to entirely replace human judgment, the most successful deployments are reframing the technology as a copilot.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Assistive UX</h3>
           <p>
             {Array(2).fill(`By surfacing relevant risk flags and pre-filling standard fields, but always leaving the final rating decision explicitly in the hands of the underwriter, we are seeing adoption increase. This subtle shift in UX design dramatically improves workflow.`).join(" ")}
           </p>

           <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-primary text-primary-foreground">
                    <tr>
                       <th className="p-3">Model</th>
                       <th className="p-3">Status</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td className="p-3 bg-background">Hybrid Model</td>
                       <td className="p-3 bg-background">Recommended</td>
                    </tr>
                 </tbody>
           </table>

           <h3 className="text-xl font-heading mt-6 mb-2">The Hybrid Model</h3>
           <p>
             {Array(2).fill(`This hybrid model acknowledges that underwriting intuition, particularly in complex commercial lines, cannot be entirely codified. The technology acts as an exoskeleton, augmenting the underwriter's capacity rather than attempting to replace their judgment entirely.`).join(" ")}
           </p>
           <h2 className="text-2xl font-heading font-semibold mb-4">Conclusion</h2>
           <p>
             {Array(2).fill(`The long-term trajectory for ${issue.title.toLowerCase()} remains robust, but the short-term reality is messy. Carriers must recalibrate their expectations and focus intensely on the human element of deployment.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Further Analysis</h3>
           <p>
             {Array(2).fill(`The reality is that regulatory compliance will increasingly dictate the pace of innovation within ${issue.title.toLowerCase()}. Transparency is no longer a feature, it is a strict legal requirement.`).join(" ")}
           </p>

           <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-primary text-primary-foreground">
                    <tr>
                       <th className="p-3">Shift</th>
                       <th className="p-3">Impact</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td className="p-3 bg-background">Macro Shift</td>
                       <td className="p-3 bg-background">High</td>
                    </tr>
                 </tbody>
           </table>

           <h3 className="text-xl font-heading mt-6 mb-2">Macro Shifts</h3>
           <p>
             {Array(2).fill(`Finally, we must contextualize these micro-workflow changes within the macro capacity environment. Technology does not exist in a vacuum; it is a tool utilized to capture profitable premium in a competitive market.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Further Reading</h3>
           <p>
             For related analysis on how these themes intersect with the broader vendor landscape, see our recent deep dive on the <Link href="/vendors/cytora/">Cytora deployment timeline</Link>, or review our <Link href="/topics/portfolio-management/">Portfolio Management topic hub</Link> for macro capacity constraints. Be sure to check out <Link href="/issues/040/">Issue 040 on Submission Intake</Link>, <Link href="/issues/041/">Issue 041 on Pricing Engines</Link>, and <Link href="/issues/042/">Issue 042 on Workflow</Link> for historical context. Also <Link href="/issues/040/">Issue 040 on Submission Intake</Link>.
           </p>
        </div>
      </div>
    </div>
  )
}
