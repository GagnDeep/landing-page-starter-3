import { buildMetadata } from "@/lib/metadata"
import { getWebSiteSchema } from "@/lib/json-ld"
import { jobs } from "@/content/jobs"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { HugeiconsIcon } from "@hugeicons/react"
import { Location01Icon, Money01Icon, Calendar01Icon, Building04Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const dynamicParams = false

export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const job = jobs.find((j) => j.id === resolvedParams.id)
  if (!job) return {}
  return buildMetadata({
    title: "Job Listing",
    path: `/jobs/${job.id}/`,
    description: `Hiring: ${job.title} located in ${job.location}.`,
  })
}

export default async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const job = jobs.find((j) => j.id === resolvedParams.id)
  if (!job) {
    notFound()
  }

  const jsonLd = [getWebSiteSchema()]

  return (
    <div className="bg-background py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Breadcrumbs items={[
           { title: "Jobs", href: "/jobs/" },
           { title: job.title }
        ]} />

        <div className="bg-muted p-8 rounded-lg border border-border mb-12">
           <h1 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">{job.title}</h1>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 border-t border-border/50 pt-6">
              <div>
                 <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Company</div>
                 <div className="flex items-center gap-2 font-medium"><HugeiconsIcon icon={Building04Icon} className="w-4 h-4 text-primary" /> {job.company}</div>
              </div>
              <div>
                 <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Location</div>
                 <div className="flex items-center gap-2 font-medium"><HugeiconsIcon icon={Location01Icon} className="w-4 h-4 text-primary" /> {job.location}</div>
              </div>
              <div>
                 <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Salary</div>
                 <div className="flex items-center gap-2 font-medium"><HugeiconsIcon icon={Money01Icon} className="w-4 h-4 text-primary" /> {job.salaryRange.value}</div>
              </div>
              <div>
                 <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">Posted</div>
                 <div className="flex items-center gap-2 font-medium"><HugeiconsIcon icon={Calendar01Icon} className="w-4 h-4 text-primary" /> {job.postedDate}</div>
              </div>
           </div>

           <div className="mt-8 pt-6 border-t border-border/50">
             <Button size="lg" className="w-full md:w-auto font-mono">Apply for this position</Button>
           </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
           <h2 className="text-2xl font-heading font-semibold mb-4">Role Overview</h2>
           <p>
             {Array(2).fill(`This position for a ${job.title} represents a critical node within the underwriting organization at ${job.company}. The successful candidate will be expected to not only manage a complex portfolio of risks but also to actively participate in the ongoing modernization of the underwriting workbench.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Modern Underwriting Environment</h3>
           <p>
             {Array(2).fill(`The role requires navigating a modern underwriting environment where data ingestion is increasingly automated. The ideal candidate will be comfortable working alongside algorithmic copilots and contributing feedback to the models to improve straight-through processing rates for non-complex renewals.`).join(" ")}
           </p>

           <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-muted">
                    <tr><th className="p-3 border-b border-border">Environment</th><th className="p-3 border-b border-border">Requirement</th></tr>
                 </thead>
                 <tbody>
                    <tr><td className="p-3">Copilot Usage</td><td className="p-3">Mandatory</td></tr>
                 </tbody>
           </table>

           <h3 className="text-xl font-heading mt-6 mb-2">Strategic Impact</h3>
           <p>
             {Array(2).fill(`Beyond daily portfolio management, this role is deeply involved in the strategic direction of the product lines. The candidate will work closely with actuarial and product teams to refine pricing models based on real-world market feedback and emerging loss trends observed at the desk level.`).join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Change Agent</h3>
           <p>
             {Array(2).fill(`We are looking for a true change agent. Someone who understands the nuances of complex commercial lines underwriting, but who is also excited by the prospect of redesigning those traditional workflows from the ground up using modern technology and data.`).join(" ")}
           </p>

           <h2 className="text-2xl font-heading font-semibold mb-4">Key Responsibilities</h2>
           <ul>
             <li>{Array(1).fill("Evaluate and price complex commercial risks in accordance with established underwriting guidelines while identifying opportunities for profitable growth within the assigned territory.").join(" ")}</li>
             <li>{Array(1).fill("Act as a subject matter expert in the evaluation and deployment of new underwriting technologies, providing direct feedback to the operations and IT teams on tool efficacy.").join(" ")}</li>
             <li>{Array(1).fill("Develop and maintain strong relationships with key distribution partners, leveraging both analytical insights and interpersonal skills to negotiate terms and conditions effectively.").join(" ")}</li>
             <li>{Array(1).fill("Mentor junior underwriting staff, specifically focusing on the intersection of traditional risk assessment techniques and new data-driven underwriting methodologies.").join(" ")}</li>
           </ul>

           <h2 className="text-2xl font-heading font-semibold mb-4">Qualifications</h2>
           <p>
             {Array(2).fill("We are seeking candidates who possess a deep, demonstrable understanding of commercial lines insurance, coupled with a proven track record of profitable portfolio management in a hard market cycle. The ideal candidate is highly analytical, comfortable operating in an environment of ambiguity, and possesses a strong bias towards action.").join(" ")}
           </p>

           <table className="w-full text-left border-collapse my-8 text-sm font-mono border border-border rounded overflow-hidden">
                 <thead className="bg-muted">
                    <tr><th className="p-3 border-b border-border">Skill</th><th className="p-3 border-b border-border">Level</th></tr>
                 </thead>
                 <tbody>
                    <tr><td className="p-3">Data Analytics</td><td className="p-3">Advanced</td></tr>
                 </tbody>
           </table>

           <h3 className="text-xl font-heading mt-6 mb-2">Technical Capabilities</h3>
           <p>
             {Array(2).fill("Technical proficiency with modern underwriting workbenches, pricing engines, and data analytics tools is highly preferred. More importantly, the candidate must demonstrate a capacity to critically evaluate these tools and understand how they impact the broader workflow architecture of the desk.").join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Leadership Expectations</h3>
           <p>
             {Array(2).fill("This role requires strong leadership capabilities. You will be expected to guide less experienced team members through complex risk evaluations while simultaneously driving the adoption of new technological workflows across the broader underwriting department. Communication skills are paramount.").join(" ")}
           </p>
           <h3 className="text-xl font-heading mt-6 mb-2">Cross-Reference</h3>
<p>To see how this role fits into the broader market shift, see our <Link href="/issues/040/">Dispatch on the Agentic Underwriter</Link>. Or explore other opportunities like <Link href="/jobs/req-101/">Senior Inland Marine</Link>, <Link href="/jobs/req-102/">Underwriting Director</Link>, and <Link href="/jobs/req-103/">Portfolio Manager</Link>.</p>
        </div>
      </div>
    </div>
  )
}
