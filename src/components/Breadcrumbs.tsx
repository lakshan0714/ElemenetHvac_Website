import Link from "next/link";
import { ChevronRight } from "@/components/ui/icons";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink-100 bg-ink-50">
      <ol className="container-page flex flex-wrap items-center gap-1.5 py-3 text-base text-ink-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 text-ink-300" />}
              {isLast ? (
                <span aria-current="page" className="font-semibold text-brand-950">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-brand-900">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
