import { IssueDirectory } from "@/components/IssueDirectory"
import { HugeiconsIcon } from "@hugeicons/react"
import { Archive01Icon } from "@hugeicons/core-free-icons"

export function LatestIssues() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[66ch]">
            <span className="mb-4 block flex items-center gap-2 font-mono text-sm tracking-wider text-primary uppercase">
              <HugeiconsIcon icon={Archive01Icon} className="h-4 w-4" /> The
              Archive
            </span>
            <h2 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
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
