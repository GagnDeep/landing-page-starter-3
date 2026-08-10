import Link from "next/link"

export interface BreadcrumbsProps {
  items: {
    title: string
    href?: string
  }[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground hover:underline">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.title} className="flex items-center space-x-2">
            <span className="text-border">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-foreground hover:underline"
              >
                {item.title}
              </Link>
            ) : (
              <span className="text-foreground">{item.title}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
