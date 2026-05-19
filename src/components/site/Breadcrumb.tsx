import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-nt-muted text-xs">/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="text-xs text-nt-dim hover:text-nt-body transition-colors font-mono"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-xs text-nt-body font-mono">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
