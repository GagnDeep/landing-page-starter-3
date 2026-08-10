import Link from 'next/link';
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export function Breadcrumbs({ items }: { items: { label: string, href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center space-x-2">
            <HugeiconsIcon icon={ArrowRight01Icon} className="h-4 w-4" />
            {index === items.length - 1 ? (
              <span className="text-foreground" aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-foreground">{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
