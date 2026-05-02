import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  // Extract strokeWidth from props if it exists, otherwise default to 2
  const { strokeWidth, ...restProps } = props;
  const parsedStrokeWidth = typeof strokeWidth === 'number' ? strokeWidth : (typeof strokeWidth === 'string' && !isNaN(Number(strokeWidth)) ? Number(strokeWidth) : 2);

  return (
    <HugeiconsIcon icon={Loading03Icon} strokeWidth={parsedStrokeWidth} role="status" aria-label="Loading" className={cn("size-4 animate-spin", className)} {...restProps} />
  )
}

export { Spinner }
