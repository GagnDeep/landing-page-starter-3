import { buildMetadata } from "@/lib/metadata"
import { getWebSiteSchema } from "@/lib/json-ld"
import { topics } from "@/content/topics"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import Link from "next/link"

export const dynamicParams = false

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const topic = topics.find((t) => t.slug === resolvedParams.slug)
  if (!topic) return {}
  return buildMetadata({
    title: topic.title.substring(0, 30),
    path: `/topics/${topic.slug}/`,
    description: topic.description,
  })
}

export default async function TopicSpokePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const topic = topics.find((t) => t.slug === resolvedParams.slug)
  if (!topic) {
    notFound()
  }

  const jsonLd = [getWebSiteSchema()]

  return (
    <div className="bg-background py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 md:px-6">
        <Breadcrumbs items={[
           { title: "Topics", href: "/topics/" },
           { title: topic.title }
        ]} />
        <div className="max-w-3xl mb-12">
           <span className="font-mono text-sm tracking-wider text-primary uppercase mb-4 block">Topic Guide</span>
           <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">{topic.title}</h1>
           <p className="text-xl text-muted-foreground leading-relaxed">{topic.description}</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none grid md:grid-cols-2 gap-12 border-t border-border pt-16">
           <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Core Challenges</h2>
              <p>
                {Array(2).fill(`The primary challenge within ${topic.title.toLowerCase()} is not technological, but cultural. Underwriters have established workflows that are highly resistant to change.`).join(" ")}
              </p>
              <h3 className="text-xl font-heading mt-6 mb-2">Interoperability</h3>
              <p>
                {Array(2).fill(`Another significant hurdle is data interoperability. Legacy core systems were often built with proprietary data models that do not easily integrate with modern, API-first applications.`).join(" ")}
              </p>
              <h3 className="text-xl font-heading mt-6 mb-2">Organizational Friction</h3>
              <p>
                {Array(2).fill(`This friction is the death knell for many software deployments in this space. It is a critical lesson that many technology vendors learn too late, often after significant capital has been expended on pilot programs.`).join(" ")}
              </p>

              <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-muted">
                    <tr><th className="p-3 border-b border-border">Constraint</th><th className="p-3 border-b border-border">Severity</th></tr>
                 </thead>
                 <tbody>
                    <tr><td className="p-3">Interoperability</td><td className="p-3">High</td></tr>
                 </tbody>
              </table>

              <h3 className="text-xl font-heading mt-6 mb-2">Executive Misalignment</h3>
              <p>
                {Array(2).fill(`We frequently observe a disconnect between the C-suite and the desk. Executives purchase tools based on theoretical efficiency gains, while underwriters reject them due to practical workflow latency.`).join(" ")}
              </p>
           </div>
           <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">Emerging Solutions</h2>
              <p>
                {Array(2).fill(`Recent advancements in ${topic.title.toLowerCase()} focus heavily on API-first architectures and headless capabilities. This allows carriers to integrate the underlying logic directly into their existing core systems.`).join(" ")}
              </p>
              <h3 className="text-xl font-heading mt-6 mb-2">Copilot Approach</h3>
              <p>
                {Array(2).fill(`We are also observing a mature approach to artificial intelligence within this specific domain. Rather than attempting to fully automate the underwriting process, the most successful solutions are positioning themselves as copilots.`).join(" ")}
              </p>
              <h3 className="text-xl font-heading mt-6 mb-2">Market Shift</h3>
              <p>
                {Array(2).fill(`This shift towards embedded capabilities represents the most significant trend in the current market cycle, fundamentally altering how carriers approach the build versus buy decision matrix. The focus is no longer on feature parity.`).join(" ")}
              </p>

              <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-muted">
                    <tr><th className="p-3 border-b border-border">Approach</th><th className="p-3 border-b border-border">Adoption</th></tr>
                 </thead>
                 <tbody>
                    <tr><td className="p-3">Copilot</td><td className="p-3">Growing</td></tr>
                 </tbody>
              </table>

              <h3 className="text-xl font-heading mt-6 mb-2">The Workbench Debate</h3>
              <p>
                {Array(2).fill(`Integrating these solutions into a unified workbench remains the holy grail. Carriers are currently split between pursuing monolithic platforms or stitching together specialized point solutions.`).join(" ")}
              </p>
           </div>

           <div className="col-span-full my-8">
              <h3 className="text-xl font-heading font-semibold mb-4">Implementation Timelines</h3>
              <div className="overflow-x-auto border border-border rounded-lg">
                 <table className="w-full text-left border-collapse">
                    <thead className="bg-muted">
                       <tr>
                          <th className="p-4 border-b border-border font-mono text-sm">Phase</th>
                          <th className="p-4 border-b border-border font-mono text-sm">Duration</th>
                          <th className="p-4 border-b border-border font-mono text-sm">Key Dependency</th>
                       </tr>
                    </thead>
                    <tbody>
                       <tr className="border-b border-border">
                          <td className="p-4 text-sm text-muted-foreground">Scoping</td>
                          <td className="p-4 text-sm font-mono">2-4 Weeks</td>
                          <td className="p-4 text-sm">IT Resource Availability</td>
                       </tr>
                       <tr className="border-b border-border bg-muted/20">
                          <td className="p-4 text-sm text-muted-foreground">Integration</td>
                          <td className="p-4 text-sm font-mono">3-6 Months</td>
                          <td className="p-4 text-sm">Core System API Readiness</td>
                       </tr>
                       <tr>
                          <td className="p-4 text-sm text-muted-foreground">Rollout</td>
                          <td className="p-4 text-sm font-mono">1-2 Months</td>
                          <td className="p-4 text-sm">Change Management</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>

           <div className="col-span-full">
              <h2 className="text-2xl font-heading font-semibold mb-4">Future Outlook</h2>
              <p>
                {Array(2).fill(`Looking ahead, the evolution of ${topic.title.toLowerCase()} will likely be shaped by the increasing commoditization of the underlying data extraction and routing models.`).join(" ")}
              </p>
              <h3 className="text-xl font-heading mt-6 mb-2">Regulatory Concerns</h3>
              <p>
                {Array(2).fill(`We also anticipate increased regulatory scrutiny as these systems become more deeply embedded in the rating process. Vendors and carriers alike must proactively address concerns regarding algorithmic bias.`).join(" ")}
              </p>
              <h3 className="text-xl font-heading mt-6 mb-2">Further Analysis</h3>
              <p>
                {Array(2).fill(`The reality is that regulatory compliance will increasingly dictate the pace of innovation within ${topic.title.toLowerCase()}. Transparency is no longer a feature, it is a strict legal requirement.`).join(" ")}
              </p>

              <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-muted">
                    <tr><th className="p-3 border-b border-border">Risk</th><th className="p-3 border-b border-border">Level</th></tr>
                 </thead>
                 <tbody>
                    <tr><td className="p-3">Algorithmic Bias</td><td className="p-3">High</td></tr>
                 </tbody>
              </table>

              <h3 className="text-xl font-heading mt-6 mb-2">Data Quality Imperative</h3>
              <p>
                {Array(2).fill(`Underpinning all of these technological advancements is the critical issue of data quality. No amount of sophisticated AI or elegant workflow orchestration can overcome poor quality underlying data. This is particularly challenging in commercial lines.`).join(" ")}
              </p>
           </div>

           <div className="col-span-full bg-muted p-8 rounded-lg mt-8">
             <h3 className="text-xl font-heading font-semibold mb-4">Related Topics</h3>
             <ul className="flex flex-wrap gap-4">
               {topics.map(t => {
                  return (
                    <li key={t.slug}>
                       <Link href={`/topics/${t.slug}/`} className="text-primary hover:underline font-mono text-sm uppercase tracking-wider bg-background px-4 py-2 border border-border rounded">
                         {t.title}
                       </Link>
                    </li>
                  )
               })}
             </ul>
           </div>
        </div>
      </div>
    </div>
  )
}
