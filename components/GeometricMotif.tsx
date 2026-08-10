import { cn } from "@/lib/utils"

interface GeometricMotifProps extends React.SVGProps<SVGSVGElement> {}

export function GeometricMotif({ className, ...props }: GeometricMotifProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-auto w-full text-border", className)}
      {...props}
    >
      {/* Interlocking geometric shapes representing 'tearsheet' / logic */}
      <circle
        cx="150"
        cy="150"
        r="120"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 4"
        opacity="0.3"
      />
      <circle
        cx="150"
        cy="150"
        r="80"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />

      <rect
        x="100"
        y="100"
        width="100"
        height="100"
        className="stroke-accent"
        strokeWidth="2"
        fill="transparent"
      />
      <rect x="120" y="120" width="60" height="60" className="fill-muted" />

      <path
        d="M150 30 L150 270 M30 150 L270 150"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
    </svg>
  )
}
