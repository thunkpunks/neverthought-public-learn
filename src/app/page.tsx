import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Neverthought",
  description:
    "Deployment companies help AI systems enter organisations. Neverthought helps organisations govern what those systems are allowed to make irreversible.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-nt-bg text-nt-body">
      <SiteHeader current="home" />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(107,140,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(107,140,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <p className="font-mono text-xs text-nt-muted uppercase tracking-widest mb-8">
          Deployment admissibility
        </p>

        <h1 className="text-3xl md:text-4xl font-medium text-nt-heading leading-tight mb-8 max-w-2xl">
          What must remain possible
          <br />
          after the system acts?
        </h1>

        <p className="text-nt-dim text-lg leading-relaxed max-w-xl mb-4">
          Deployment companies help AI systems enter organisations.
          Neverthought helps organisations govern what those systems are allowed
          to make irreversible.
        </p>

        <p className="text-nt-dim text-base leading-relaxed max-w-xl mb-12">
          We help deployment teams know when an AI recommendation is not yet an
          admissible commitment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 px-6 py-3 bg-nt-accent text-nt-bg text-sm font-medium rounded hover:bg-nt-accentDim transition-colors"
          >
            Learn, then deploy{" "}
            <span aria-hidden="true">{"\u2192"}</span>
          </Link>
          <Link
            href="/engage"
            className="inline-flex items-center gap-2 px-6 py-3 border border-nt-border text-nt-body text-sm rounded hover:border-nt-muted transition-colors"
          >
            Engage
          </Link>
        </div>
      </section>

      {/* Category statement */}
      <section className="border-y border-nt-border">
        <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-3">
              The problem
            </p>
            <p className="text-nt-body text-sm leading-relaxed">
              AI systems commit organisations to paths before anyone has verified
              whether those paths remain reversible. The commitment happens faster
              than the governance.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-3">
              The discipline
            </p>
            <p className="text-nt-body text-sm leading-relaxed">
              Admissibility is the question of whether a transition can proceed
              without collapsing the options that follow it. It is a structural
              property, not a checklist.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-3">
              The practice
            </p>
            <p className="text-nt-body text-sm leading-relaxed">
              Deployment judgement. Human authority before the loop closes.
              Evidence that survives review. Governance that does not become
              theatre under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Learn CTA */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="border border-nt-border rounded p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-nt-heading text-lg font-medium mb-2">
              Eight modules. One governing question.
            </h2>
            <p className="text-nt-dim text-sm max-w-md">
              From wind tunnel pressure-testing to pilot design. Public,
              pedagogical, and honest about what a website can and cannot tell
              you.
            </p>
          </div>
          <Link
            href="/learn"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 border border-nt-border text-nt-body text-sm rounded hover:border-nt-muted transition-colors"
          >
            Open the learning layer {"\u2192"}
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
