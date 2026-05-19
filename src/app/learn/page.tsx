import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import BoundaryNotice from "@/components/site/BoundaryNotice";
import LearnCard from "@/components/learn/LearnCard";
import { LEARN_ROUTES } from "@/data/learnRoutes";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Eight modules for understanding deployment admissibility. Wind Tunnel through Pilot.",
};

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-nt-bg text-nt-body">
      <SiteHeader current="learn" />

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs text-nt-muted uppercase tracking-widest mb-4">
            Public learning layer
          </p>
          <h1 className="text-2xl font-medium text-nt-heading mb-4">
            Deployment judgement begins with understanding what commitment
            actually costs.
          </h1>
          <p className="text-nt-dim text-base leading-relaxed">
            Eight modules. Each one teaches a structural property of admissible
            deployment. No scoring. No ratings. No performed readiness. The
            governing question throughout:{" "}
            <em className="text-nt-body not-italic">
              what must remain possible after the system acts?
            </em>
          </p>
        </div>

        <BoundaryNotice className="mb-12" />

        {/* 8-card grid from manifest — the only source of nav truth */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-16">
          {LEARN_ROUTES.map((route) => (
            <LearnCard key={route.slug} route={route} />
          ))}
        </div>

        {/* Bottom signal */}
        <div className="border-t border-nt-border pt-12 grid md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-3">
              After learning
            </p>
            <p className="text-nt-dim text-sm leading-relaxed mb-4">
              The learning layer creates the vocabulary for a deployment
              engagement. Private mapping begins where public learning ends:{" "}
              your signals, your constraints, your domain.
            </p>
            <a
              href="/engage"
              className="text-sm text-nt-accent hover:text-nt-heading transition-colors"
            >
              Engage {"\u2192"}
            </a>
          </div>
          <div>
            <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-3">
              Governing invariant
            </p>
            <p className="text-nt-dim text-sm leading-relaxed">
              Neverthought models whether transformations remain survivable
              before they become irreversible. Runtime governance, not
              governance theatre.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
