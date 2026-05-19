import type { Metadata } from "next";
import LearnLayout from "@/components/learn/LearnLayout";
import SectionShell from "@/components/site/SectionShell";
import { getLearnRoute } from "@/data/learnRoutes";

const route = getLearnRoute("wind-tunnel")!;

export const metadata: Metadata = {
  title: route.title,
  description: route.summary,
};

export default function WindTunnelPage() {
  return (
    <LearnLayout route={route}>

      <SectionShell label="What this is">
        <p className="text-nt-body leading-relaxed mb-4">
          A wind tunnel in fluid dynamics subjects structures to controlled
          pressure to reveal how they deform before they fail. The epistemic
          wind tunnel does the same for AI decision surfaces: it places signals,
          traces, and commitment boundaries under recursive pressure to reveal
          how they move before deployment makes deformation consequential.
        </p>
        <p className="text-nt-body leading-relaxed">
          Deformation is not failure. Deformation is information. The question
          is whether the surface remains navigable after pressure is applied,
          or whether optionality has been silently foreclosed.
        </p>
      </SectionShell>

      <SectionShell label="What you observe">
        <div className="space-y-4">
          {[
            {
              term: "Topology temperature",
              def: "A measure of how volatile the admissibility surface is under current signal conditions. High temperature means small inputs produce large surface changes. Low temperature means the surface is stable but may be rigid.",
            },
            {
              term: "Residue accumulation",
              def: "Traces left by prior decisions that have not been discharged. Residue constrains future navigation even when the surface appears clear. Ignoring residue is the most common source of hidden coupling.",
            },
            {
              term: "Optionality collapse",
              def: "The point at which a decision forecloses a set of future states that were previously reachable. Optionality collapse is often irreversible. The wind tunnel is designed to make it visible before commitment.",
            },
            {
              term: "Recovery window",
              def: "The interval during which a transition can be reversed or redirected without disproportionate cost. Recovery windows shrink under pressure. The wind tunnel maps them.",
            },
          ].map(({ term, def }) => (
            <div key={term} className="border-l-2 border-nt-border pl-4">
              <p className="text-nt-heading text-sm font-medium mb-1">{term}</p>
              <p className="text-nt-dim text-sm leading-relaxed">{def}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="What this teaches">
        <p className="text-nt-body leading-relaxed mb-4">
          Deployment teams need a model of pressure before they encounter it in
          production. The wind tunnel provides that model without requiring
          real-world consequence. It teaches operators to read surface
          instability as a signal, not a warning to suppress.
        </p>
        <p className="text-nt-body leading-relaxed">
          The key shift: from treating AI output as a decision, to treating it
          as a topological event that changes what is navigable next. The wind
          tunnel makes that topology visible.
        </p>
      </SectionShell>

      <SectionShell label="Governing principle">
        <blockquote className="border-l-2 border-nt-accentDim pl-4">
          <p className="text-nt-body text-sm leading-relaxed italic">
            Deformation under pressure is not a system defect. It is the
            evidence base for deployment judgement. A system that never deforms
            visibly is not stable{" "}
            <span className="not-italic">{"\u2014"}</span>{" "}
            it is opaque.
          </p>
        </blockquote>
      </SectionShell>

    </LearnLayout>
  );
}
