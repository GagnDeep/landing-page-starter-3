import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Home01Icon } from "@hugeicons/core-free-icons"

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  if (!items?.length) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors" aria-label="Home">
            <HugeiconsIcon icon={Home01Icon} className="size-4" strokeWidth={2} />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-2">
            <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" strokeWidth={2} />
            <Link
              href={item.href}
              className={`hover:text-foreground transition-colors ${index === items.length - 1 ? 'font-medium text-foreground' : ''}`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
