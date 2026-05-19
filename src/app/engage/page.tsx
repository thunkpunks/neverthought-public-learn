import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Engage",
  description: "Private deployment mapping for organisations ready to move from public learning to domain-specific admissibility work.",
};

const LADDER = [
  { step: "01", label: "Deployment Judgement Workshop", desc: "Establishing shared vocabulary and structural orientation for your deployment context." },
  { step: "02", label: "Admissibility Surface Design Sprint", desc: "Mapping your domain signals onto the admissibility surface. Identifying commitment boundaries and recovery requirements." },
  { step: "03", label: "Scenario + Replay Pack", desc: "Structured scenarios for rehearsing deployment decisions. Replay-ready evidence records." },
  { step: "04", label: "Conformance Review", desc: "Adversarial validation of your admissibility claims against domain-specific falsification conditions." },
  { step: "05", label: "Private Runtime Pilot", desc: "Structured pilot under real domain conditions, producing reusable governance evidence." },
];

export default function EngagePage() {
  return (
    <div className="min-h-screen bg-nt-bg text-nt-body">
      <SiteHeader current="engage" />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="font-mono text-xs text-nt-muted uppercase tracking-widest mb-6">
          Private mapping
        </p>
        <h1 className="text-2xl font-medium text-nt-heading mb-6">
          From learning to mapping
        </h1>

        <p className="text-nt-dim leading-relaxed mb-4 max-w-xl">
          Neverthought keeps the grammar public. Teams can learn admissible
          deployment, rehearse toy surfaces, and explore simulation principles
          openly.
        </p>
        <p className="text-nt-dim leading-relaxed mb-12 max-w-xl">
          The commercial layer begins when those public patterns need to be
          mapped onto a real domain: real signals, real authority structures,
          real recovery windows, real replay requirements, and real deployment
          consequences.
        </p>

        <div className="mb-12">
          <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-6">
            Engagement ladder
          </p>
          <div className="space-y-0">
            {LADDER.map(({ step, label, desc }) => (
              <div key={step} className="flex gap-6 py-5 border-b border-nt-border last:border-0">
                <span className="font-mono text-xs text-nt-muted mt-0.5 flex-shrink-0">{step}</span>
                <div>
                  <p className="text-nt-body text-sm font-medium mb-1">{label}</p>
                  <p className="text-nt-dim text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-nt-border rounded p-6">
          <p className="text-nt-heading text-sm font-medium mb-2">
            Start a conversation
          </p>
          <p className="text-nt-dim text-sm mb-4">
            Private mapping begins with understanding your domain. We work
            with deployment teams, FDE practitioners, and organisations at the
            governance decision point.
          </p>
          <a
            href="mailto:engage@neverthought.org"
            className="inline-flex items-center gap-2 text-sm text-nt-accent hover:text-nt-heading transition-colors"
          >
            engage@neverthought.org {"\u2192"}
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
