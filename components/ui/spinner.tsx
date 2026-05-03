import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  // Extract strokeWidth from props if provided to avoid type conflicts with the SVG props
  const { strokeWidth, ...restProps } = props as React.SVGProps<SVGSVGElement>;
  return (
    <HugeiconsIcon icon={Loading03Icon} strokeWidth={Number(strokeWidth ?? 2)} role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...restProps} />
  )
}

export { Spinner }
