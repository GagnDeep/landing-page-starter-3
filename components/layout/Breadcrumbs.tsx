import Link from 'next/link';
import { ArrowRight01Icon as ChevronRightIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center space-x-2">
            <HugeiconsIcon icon={ChevronRightIcon} className="w-4 h-4" />
            <Link
              href={item.url}
              className={`transition-colors hover:text-foreground ${index === items.length - 1 ? 'text-foreground font-medium' : ''}`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
