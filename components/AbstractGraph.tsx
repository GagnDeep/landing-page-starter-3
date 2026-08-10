import { cn } from "@/lib/utils"

interface AbstractGraphProps extends React.SVGProps<SVGSVGElement> {}

export function AbstractGraph({ className, ...props }: AbstractGraphProps) {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full text-border", className)}
      {...props}
    >
      {/* Grid */}
      <path
        d="M0 400V0M100 400V0M200 400V0M300 400V0M400 400V0M500 400V0M600 400V0M700 400V0M800 400V0"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      <path
        d="M0 400H800M0 300H800M0 200H800M0 100H800M0 0H800"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
      />

      {/* Benchmark Line (Straight) */}
      <path
        d="M0 300 L800 100"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      {/* AI Picker Line (Volatile) */}
      <path
        d="M0 300 L100 280 L200 150 L300 250 L400 180 L500 200 L600 50 L700 120 L800 80"
        className="text-chart-1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Intersection Point */}
      <circle cx="500" cy="200" r="6" className="fill-chart-1" />
      <circle
        cx="500"
        cy="200"
        r="12"
        className="stroke-chart-1"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  )
}
