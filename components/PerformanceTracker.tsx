"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HugeiconsIcon } from "@hugeicons/react"
import { Alert01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

export function PerformanceTracker() {
  const [timeframe, setTimeframe] = useState<"1M" | "3M" | "6M" | "1Y">("3M")

  return (
    <Card className="w-full border-border bg-background shadow-sm">
      <CardHeader className="border-b bg-muted/30 pb-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <CardTitle className="mb-2 font-heading text-2xl tracking-tight">
              Live Tracking Apparatus
            </CardTitle>
            <CardDescription className="text-[15px]">
              Independent verification of AI stock-picker returns vs. S&P 500
            </CardDescription>
          </div>
          <div className="flex items-center gap-4">
            {/* Interactive timeframe selector - keyboard accessible via raw buttons */}
            <div
              className="flex rounded-md bg-muted p-1"
              role="tablist"
              aria-label="Tracking Timeframe"
            >
              {(["1M", "3M", "6M", "1Y"] as const).map((tf) => (
                <button
                  key={tf}
                  role="tab"
                  aria-selected={timeframe === tf}
                  onClick={() => setTimeframe(tf)}
                  className={cn(
                    "rounded-sm px-3 py-1 font-mono text-xs transition-colors",
                    timeframe === tf
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tf}
                </button>
              ))}
            </div>
            <Badge
              variant="outline"
              className="w-fit font-mono text-xs font-normal"
            >
              LAST UPDATED: {"{{VERIFY: Date of last dataset update}}"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div
          className="flex flex-col items-center justify-center px-6 py-24 text-center"
          aria-live="polite"
        >
          <div className="mb-6 rounded-full bg-muted p-4">
            <HugeiconsIcon
              icon={Alert01Icon}
              className="h-8 w-8 text-muted-foreground"
            />
          </div>
          <h3 className="mb-3 font-heading text-xl font-semibold">
            Dataset Initialising ({timeframe} View)
          </h3>
          <p className="mb-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Tracking will commence once the first verified performance data is
            collected. We require minimum 90-day verifiable track records before
            publishing comparison data.
          </p>
          <div className="grid w-full max-w-2xl grid-cols-1 gap-8 rounded-lg border bg-muted/20 p-6 text-left sm:grid-cols-3">
            <div>
              <div className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Status
              </div>
              <div className="font-mono text-sm">Awaiting Data</div>
            </div>
            <div>
              <div className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Benchmark
              </div>
              <div className="font-mono text-sm">S&P 500 (SPY)</div>
            </div>
            <div>
              <div className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Methodology
              </div>
              <div className="font-mono text-sm text-accent">
                View Rules &rarr;
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
