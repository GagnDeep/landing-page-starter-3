import { cn } from "@/lib/utils"

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "prose prose-slate dark:prose-invert max-w-[70ch]",
        "prose-headings:font-heading prose-headings:tracking-tight",
        "prose-h1:text-h1 prose-h2:text-h2 prose-h3:text-h3",
        "prose-p:leading-relaxed prose-p:text-body",
        "prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80",
        "prose-code:font-mono prose-code:text-sm",
        "mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}
