import { cn } from "@/lib/utils"

interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Prose({ className, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-[70ch]",
        "prose-headings:font-heading prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-h1:text-4xl prose-h1:mb-8",
        "prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6",
        "prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4",
        "prose-p:text-[17px] prose-p:leading-[1.7] prose-p:mb-6",
        "prose-a:text-accent prose-a:no-underline hover:prose-a:underline",
        "prose-strong:font-semibold",
        "prose-code:font-mono prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded",
        "prose-li:text-[17px] prose-li:leading-[1.7]",
        className
      )}
      {...props}
    />
  )
}
