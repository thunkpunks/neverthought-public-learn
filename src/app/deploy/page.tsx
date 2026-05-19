import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import BoundaryNotice from "@/components/site/BoundaryNotice";

export const metadata: Metadata = {
  title: "Deploy",
  description:
    "Admissible deployment connects learning to live organisational consequence. Domain signal projection, simulation, evidence scaffolding, and pilot design.",
};

const CAPABILITIES = [
  {
    label: "Domain Expertise Projection Mapping",
    desc:
      "Every organisation has a signal space — the inputs your deployed system will receive and act on. APL projection maps those domain signals onto the admissibility surface: where they concentrate, where they conflict, where the system will fill gaps with inference. Projection is not modelling. It is structural mapping of the territory before the system enters it.",
  },
  {
    label: "Simulation and pressure testing",
    desc:
      "Synthetic domain environments built from your signals allow admissibility decisions to be rehearsed before they become consequential. The simulation layer — instrumented via epistemic wind tunnel tooling — applies realistic pressure to reveal deformation signatures, recovery window contraction, and optionality collapse before commitment. Simulation is the practitioner environment for deployment judgement, not a demo of system capability.",
  },
  {
    label: "Evidence scaffolding",
    desc:
      "An AI output is not automatically evidence of anything. Evidence scaffolding structures system outputs with provenance, authority records, and replay integrity so they can survive reconstruction under review. Without scaffolding, outputs cannot serve as governance evidence — regardless of how coherent they appear at the time of production.",
  },
  {
    label: "Pilot design",
    desc:
      "A deployment pilot is not a proof of concept. It is a structured rehearsal of the admissibility surface the live deployment will require. A well-designed pilot produces reusable artefacts: domain signal inventory, gate and transition catalogue, recovery window analysis, and replay evidence records. These outlast the pilot itself and anchor every governance decision that follows.",
  },
];

export default function DeployPage() {
  return (
    <div className="min-h-screen bg-nt-bg text-nt-body">
      <SiteHeader current="deploy" />

      <main className="max-w-3xl mx-auto px-6 py-16">

        <p className="font-mono text-xs text-nt-muted uppercase tracking-widest mb-6">
          Admissible deployment
        </p>

        <h1 className="text-2xl font-medium text-nt-heading mb-6">
          What deployment protects
        </h1>

        <div className="space-y-4 mb-12">
          <p className="text-nt-body leading-relaxed">
            Deployment companies help AI systems enter organisations.
            Admissible deployment governs what those systems are allowed to make
            irreversible once they are inside.
          </p>
          <p className="text-nt-body leading-relaxed">
            The distinction matters because AI systems commit organisations to
            paths before anyone has verified whether those paths remain
            reversible. The commitment happens faster than the governance.
            Admissible deployment is the mechanism that keeps governance in
            front of commitment{" "}
            <span className="text-nt-dim">
              {"\u2014"} not as a checkbox process, but as a structural
              property of how the system operates in its domain.
          </span>
          </p>
          <p className="text-nt-body leading-relaxed">
            What admissible deployment protects is not the organisation from
            risk. It protects the organisation{"\u2019"}s capacity to intervene,
            recover, refuse, redirect, and learn once the system is deployed.
            That capacity is the governance. When it is gone, governance is
            decoration.
          </p>
        </div>

        <BoundaryNotice className="mb-12" />

        <div className="mb-12">
          <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-6">
            Deployment capabilities
          </p>
          <div className="space-y-0">
            {CAPABILITIES.map(({ label, desc }) => (
              <div key={label} className="py-6 border-b border-nt-border last:border-0">
                <h2 className="text-nt-heading text-sm font-medium mb-3">{label}</h2>
                <p className="text-nt-dim text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-4">
            The governing question
          </p>
          <blockquote className="border-l-2 border-nt-accentDim pl-5">
            <p className="text-nt-body text-sm leading-relaxed italic">
              Can the organisation still intervene, recover, refuse, redirect,
              and learn once the system is deployed?
            </p>
          </blockquote>
          <p className="text-nt-dim text-sm mt-4 leading-relaxed">
            This is not a checklist question. It is a structural question about
            the admissibility surface the deployment will require. The answer
            must be legible before commitment, not reconstructed after the
            fact.
          </p>
        </div>

        <div className="border border-nt-border rounded p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-nt-heading text-sm font-medium mb-1">
              From learning to deployment
            </p>
            <p className="text-nt-dim text-xs leading-relaxed max-w-sm">
              The public learning layer teaches the grammar. Deployment
              engagement maps that grammar onto your domain: your signals, your
              authority structures, your recovery requirements, your replay
              obligations.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <Link
              href="/engage"
              className="inline-flex items-center gap-2 px-5 py-3 bg-nt-accent text-nt-bg text-sm font-medium rounded hover:bg-nt-accentDim transition-colors"
            >
              Engage {"\u2192"}
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 px-5 py-2 border border-nt-border text-nt-dim text-sm rounded hover:border-nt-muted transition-colors text-center justify-center"
            >
              Return to learning layer
            </Link>
          </div>
        </div>

      </main>

      <SiteFooter />
    </div>
  );
}
