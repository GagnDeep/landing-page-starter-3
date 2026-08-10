import { cn } from "@/lib/utils"

interface ChartGraphicProps extends React.SVGProps<SVGSVGElement> {}

export function ChartGraphic({ className, ...props }: ChartGraphicProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full text-border", className)}
      {...props}
    >
      {/* Bars representing relative performance */}
      <rect
        x="40"
        y="200"
        width="40"
        height="60"
        className="fill-muted-foreground/30"
        rx="2"
      />
      <rect
        x="120"
        y="150"
        width="40"
        height="110"
        className="fill-muted-foreground/50"
        rx="2"
      />
      <rect
        x="200"
        y="220"
        width="40"
        height="40"
        className="fill-chart-1"
        rx="2"
      />
      <rect
        x="280"
        y="80"
        width="40"
        height="180"
        className="fill-accent"
        rx="2"
      />

      {/* Baseline / X-axis */}
      <line
        x1="20"
        y1="260"
        x2="380"
        y2="260"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Y-axis indicator */}
      <line
        x1="20"
        y1="260"
        x2="20"
        y2="40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
        opacity="0.5"
      />
    </svg>
  )
}
