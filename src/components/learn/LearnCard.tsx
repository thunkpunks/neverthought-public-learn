import Link from "next/link";
import type { LearnRoute } from "@/data/learnRoutes";

interface LearnCardProps {
  route: LearnRoute;
}

export default function LearnCard({ route }: LearnCardProps) {
  return (
    <Link href={route.href} className="group block">
      <article className="h-full border border-nt-border bg-nt-surface rounded p-6 flex flex-col gap-4 hover:border-nt-accentDim transition-colors duration-200">
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-nt-muted tracking-wider">
            {String(route.order).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs text-nt-muted">{"\u2192"}</span>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-nt-heading text-base font-medium group-hover:text-nt-accent transition-colors">
            {route.title}
          </h2>
          <p className="text-nt-dim text-sm leading-relaxed">
            {route.summary}
          </p>
        </div>

        <div className="border-t border-nt-border pt-4 space-y-3">
          <div>
            <p className="text-xs font-mono text-nt-muted uppercase tracking-wider mb-1">
              What this teaches
            </p>
            <p className="text-xs text-nt-dim leading-relaxed">
              {route.learningGoal}
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-nt-muted uppercase tracking-wider mb-1">
              Why it matters
            </p>
            <p className="text-xs text-nt-dim leading-relaxed">
              {route.commercialRelevance}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
