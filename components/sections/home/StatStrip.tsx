import { HugeiconsIcon } from "@hugeicons/react"
import { UserMultipleIcon, Layout01Icon, Target01Icon, ComputerIcon } from "@hugeicons/core-free-icons"

export function StatStrip() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <HugeiconsIcon icon={UserMultipleIcon} className="w-8 h-8 mb-4 text-primary-foreground/80" />
            <span className="font-mono text-4xl md:text-5xl font-bold mb-2">{"{{VERIFY: active underwriters}}"}</span>
            <span className="text-sm uppercase tracking-wider opacity-80 font-mono">Active Readers</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <HugeiconsIcon icon={Layout01Icon} className="w-8 h-8 mb-4 text-primary-foreground/80" />
            <span className="font-mono text-4xl md:text-5xl font-bold mb-2">{"{{VERIFY: weekly volume}}"}</span>
            <span className="text-sm uppercase tracking-wider opacity-80 font-mono">Weekly Insights</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <HugeiconsIcon icon={Target01Icon} className="w-8 h-8 mb-4 text-primary-foreground/80" />
            <span className="font-mono text-4xl md:text-5xl font-bold mb-2">{"{{VERIFY: coverage %}}"}</span>
            <span className="text-sm uppercase tracking-wider opacity-80 font-mono">Market Coverage</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <HugeiconsIcon icon={ComputerIcon} className="w-8 h-8 mb-4 text-primary-foreground/80" />
            <span className="font-mono text-4xl md:text-5xl font-bold mb-2">{"{{VERIFY: vendor count}}"}</span>
            <span className="text-sm uppercase tracking-wider opacity-80 font-mono">Vendors Tracked</span>
          </div>
        </div>
      </div>
    </section>
  )
}
