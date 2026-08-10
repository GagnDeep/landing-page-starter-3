import { IssueDirectory } from "@/components/IssueDirectory"
import { HugeiconsIcon } from "@hugeicons/react"
import { Archive01Icon } from "@hugeicons/core-free-icons"

export function LatestIssues() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-[66ch]">
            <span className="font-mono text-sm tracking-wider text-primary uppercase mb-4 block flex items-center gap-2">
              <HugeiconsIcon icon={Archive01Icon} className="w-4 h-4" /> The Archive
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
              Recent Dispatches
            </h2>
          </div>
          <div className="font-mono text-sm text-muted-foreground">
            Viewing 3 of 42
          </div>
        </div>

        <IssueDirectory />
      </div>
    </section>
  )
}
