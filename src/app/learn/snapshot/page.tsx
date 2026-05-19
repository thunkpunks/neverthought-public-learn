import type { Metadata } from "next";
import LearnLayout from "@/components/learn/LearnLayout";
import SectionShell from "@/components/site/SectionShell";
import { getLearnRoute } from "@/data/learnRoutes";

const route = getLearnRoute("snapshot")!;

export const metadata: Metadata = {
  title: route.title,
  description: route.summary,
};

export default function SnapshotPage() {
  return (
    <LearnLayout route={route}>

      <SectionShell label="What a snapshot is">
        <p className="text-nt-body leading-relaxed mb-4">
          A snapshot is a structured record of system state at a moment of
          interest. It captures what the system knew, what it could not yet
          know, what signals were active, and what options remained open.
        </p>
        <p className="text-nt-body leading-relaxed">
          A snapshot is not a readiness score. A snapshot does not conclude
          that deployment is safe, ready, or appropriate. It creates a record
          that can be used to reconstruct the decision surface at a point in
          time{" "}
          <span className="text-nt-dim">
            {"\u2014"} which is a different thing entirely.
          </span>
        </p>
      </SectionShell>

      <SectionShell label="The distinction that matters">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-nt-border rounded p-5">
            <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-3">
              Snapshot
            </p>
            <ul className="space-y-2">
              {[
                "Records what was known and unknown",
                "Maps open optionality at moment of capture",
                "Preserves replay evidence",
                "Does not conclude or recommend",
                "Supports later review and reconstruction",
              ].map((item) => (
                <li key={item} className="text-sm text-nt-dim flex gap-2">
                  <span className="text-nt-muted mt-0.5">{"\u2022"}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-nt-border rounded p-5">
            <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-3">
              Readiness score
            </p>
            <ul className="space-y-2">
              {[
                "Collapses uncertainty into a number",
                "Implies a conclusion has been reached",
                "Creates false confidence downstream",
                "Does not survive adversarial review",
                "Performs governance rather than practicing it",
              ].map((item) => (
                <li key={item} className="text-sm text-nt-dim flex gap-2">
                  <span className="text-nt-muted mt-0.5">{"\u2022"}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell label="What a snapshot contains">
        <p className="text-nt-body leading-relaxed mb-4">
          A well-formed snapshot records:
        </p>
        <div className="space-y-3">
          {[
            { field: "Signal inventory", desc: "Active signals at time of capture, with provenance and confidence indicators." },
            { field: "Known unknowns", desc: "Explicit record of what the system could not access or resolve at the moment of capture." },
            { field: "Optionality map", desc: "Which paths remained open. Which had already been foreclosed by prior decisions." },
            { field: "Residue state", desc: "Accumulated constraints from earlier decisions that remain active." },
            { field: "Authority record", desc: "Who had the authority to act at this point, and on what basis." },
          ].map(({ field, desc }) => (
            <div key={field} className="flex gap-4 border-b border-nt-border pb-3 last:border-0">
              <p className="text-nt-body text-sm font-medium w-40 flex-shrink-0">{field}</p>
              <p className="text-nt-dim text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Governing principle">
        <blockquote className="border-l-2 border-nt-accentDim pl-4">
          <p className="text-nt-body text-sm leading-relaxed italic">
            A snapshot that does not record what was unknown is not a snapshot.
            It is a claim. Claims require validation. Snapshots require
            structure.
          </p>
        </blockquote>
      </SectionShell>

    </LearnLayout>
  );
}
