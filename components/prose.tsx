import { cn } from "@/lib/utils"

interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Prose({ className, children, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-[70ch] dark:prose-invert prose-headings:font-heading prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
