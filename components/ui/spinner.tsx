import { cn } from "@/lib/utils"
import { HugeiconsIcon, HugeiconsProps } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"

function Spinner({
  className,
  strokeWidth,
  ...props
}: React.ComponentProps<"svg">) {
  const hugeiconsProps = props as unknown as Omit<
    HugeiconsProps,
    "icon" | "strokeWidth" | "className"
  >

  return (
    <HugeiconsIcon
      icon={Loading03Icon}
      strokeWidth={Number(strokeWidth ?? 2)}
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...hugeiconsProps}
    />
  )
}

export { Spinner }
