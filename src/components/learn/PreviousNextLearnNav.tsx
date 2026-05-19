import Link from "next/link";
import { LEARN_ROUTES } from "@/data/learnRoutes";

interface PreviousNextLearnNavProps {
  currentHref: string;
}

export default function PreviousNextLearnNav({ currentHref }: PreviousNextLearnNavProps) {
  const current = LEARN_ROUTES.find((r) => r.href === currentHref);
  if (!current) return null;

  const prev = current.previousRoute
    ? LEARN_ROUTES.find((r) => r.href === current.previousRoute)
    : null;

  const next = current.nextRoute
    ? LEARN_ROUTES.find((r) => r.href === current.nextRoute)
    : null;

  return (
    <nav
      aria-label="Previous and next"
      className="border-t border-nt-border mt-16 pt-8 flex items-center justify-between gap-4"
    >
      <div className="flex-1">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex flex-col gap-1 hover:text-nt-accent transition-colors"
          >
            <span className="text-xs text-nt-muted font-mono uppercase tracking-wider">
              {"\u2190"} Previous
            </span>
            <span className="text-sm text-nt-body group-hover:text-nt-accent transition-colors">
              {prev.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/learn"
            className="group flex flex-col gap-1 hover:text-nt-accent transition-colors"
          >
            <span className="text-xs text-nt-muted font-mono uppercase tracking-wider">
              {"\u2190"} Back
            </span>
            <span className="text-sm text-nt-body group-hover:text-nt-accent transition-colors">
              Learn
            </span>
          </Link>
        )}
      </div>

      <Link
        href="/learn"
        className="text-xs text-nt-muted hover:text-nt-dim transition-colors font-mono"
      >
        All modules
      </Link>

      <div className="flex-1 flex justify-end">
        {next ? (
          <Link
            href={next.href}
            className="group flex flex-col gap-1 items-end hover:text-nt-accent transition-colors"
          >
            <span className="text-xs text-nt-muted font-mono uppercase tracking-wider">
              Next {"\u2192"}
            </span>
            <span className="text-sm text-nt-body group-hover:text-nt-accent transition-colors">
              {next.title}
            </span>
          </Link>
        ) : (
          <Link
            href="/engage"
            className="group flex flex-col gap-1 items-end hover:text-nt-accent transition-colors"
          >
            <span className="text-xs text-nt-muted font-mono uppercase tracking-wider">
              Next {"\u2192"}
            </span>
            <span className="text-sm text-nt-body group-hover:text-nt-accent transition-colors">
              Engage
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}
