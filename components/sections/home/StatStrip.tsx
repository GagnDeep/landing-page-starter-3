import { HugeiconsIcon } from "@hugeicons/react"
import {
  UserMultipleIcon,
  Layout01Icon,
  Target01Icon,
  ComputerIcon,
} from "@hugeicons/core-free-icons"

export function StatStrip() {
  return (
    <section className="bg-primary py-16 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 divide-x divide-primary-foreground/20 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center px-4 text-center">
            <HugeiconsIcon
              icon={UserMultipleIcon}
              className="mb-4 h-8 w-8 text-primary-foreground/80"
            />
            <span className="mb-2 font-mono text-4xl font-bold md:text-5xl">
              {"{{VERIFY: active underwriters}}"}
            </span>
            <span className="font-mono text-sm tracking-wider uppercase opacity-80">
              Active Readers
            </span>
          </div>
          <div className="flex flex-col items-center justify-center px-4 text-center">
            <HugeiconsIcon
              icon={Layout01Icon}
              className="mb-4 h-8 w-8 text-primary-foreground/80"
            />
            <span className="mb-2 font-mono text-4xl font-bold md:text-5xl">
              {"{{VERIFY: weekly volume}}"}
            </span>
            <span className="font-mono text-sm tracking-wider uppercase opacity-80">
              Weekly Insights
            </span>
          </div>
          <div className="flex flex-col items-center justify-center px-4 text-center">
            <HugeiconsIcon
              icon={Target01Icon}
              className="mb-4 h-8 w-8 text-primary-foreground/80"
            />
            <span className="mb-2 font-mono text-4xl font-bold md:text-5xl">
              {"{{VERIFY: coverage %}}"}
            </span>
            <span className="font-mono text-sm tracking-wider uppercase opacity-80">
              Market Coverage
            </span>
          </div>
          <div className="flex flex-col items-center justify-center px-4 text-center">
            <HugeiconsIcon
              icon={ComputerIcon}
              className="mb-4 h-8 w-8 text-primary-foreground/80"
            />
            <span className="mb-2 font-mono text-4xl font-bold md:text-5xl">
              {"{{VERIFY: vendor count}}"}
            </span>
            <span className="font-mono text-sm tracking-wider uppercase opacity-80">
              Vendors Tracked
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
