import type { Metadata } from "next";
import LearnLayout from "@/components/learn/LearnLayout";
import SectionShell from "@/components/site/SectionShell";
import { getLearnRoute } from "@/data/learnRoutes";

const route = getLearnRoute("evidence")!;

export const metadata: Metadata = {
  title: route.title,
  description: route.summary,
};

export default function EvidencePage() {
  return (
    <LearnLayout route={route}>

      <SectionShell label="The chain of epistemic status">
        <p className="text-nt-body leading-relaxed mb-4">
          An output from a deployed AI system is not automatically evidence of
          anything. It is a signal. The path from signal to evidence requires
          structure, provenance, and a defined relationship between the output
          and the decision it is meant to support.
        </p>
        <div className="space-y-0">
          {[
            { step: "Output", desc: "What the system produced. No epistemic status assigned." },
            { step: "Record", desc: "A structured capture of the output with provenance, timestamp, context, and model state. Still not a finding." },
            { step: "Scaffold", desc: "A record placed within a defined evidence framework that specifies what the record can and cannot support as an inference." },
            { step: "Replay evidence", desc: "A scaffold that has been tested against an adversarial reconstruction to confirm that the inference holds under review." },
            { step: "Admissibility finding", desc: "A replay evidence record that meets the specific conditions required for a defined decision type. Requires domain expertise and explicit scope." },
          ].map(({ step, desc }, i) => (
            <div key={step} className="flex gap-4 py-3 border-b border-nt-border last:border-0">
              <div className="flex items-start gap-3 w-full">
                <span className="font-mono text-xs text-nt-muted mt-1 w-5 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-nt-body text-sm font-medium">{step}</p>
                  <p className="text-nt-dim text-xs leading-relaxed mt-1">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Replay">
        <p className="text-nt-body leading-relaxed mb-4">
          Replay is the capacity to reconstruct a decision surface from its
          evidence record. A system that cannot be replayed is a system that
          cannot be reviewed. A system that cannot be reviewed is a system that
          cannot be governed{" "}
          <span className="text-nt-dim">
            {"\u2014"} regardless of how compliant it appears on the day.
          </span>
        </p>
        <p className="text-nt-body leading-relaxed">
          Replay is not about reproducing the exact output. It is about
          reconstructing the conditions under which the output was admissible or
          inadmissible{" "}
          <span className="text-nt-dim">
            {"\u2014"} and being able to show that reconstruction to a reviewer
            who was not present at the time.
          </span>
        </p>
      </SectionShell>

      <SectionShell label="Provenance">
        <p className="text-nt-body leading-relaxed mb-4">
          Provenance records where an output came from, what conditions were
          active when it was produced, and what the system state was at the
          moment of generation. Without provenance, an output is
          undated{" "}
          <span className="text-nt-dim">
            {"\u2014"} it cannot be placed in a decision sequence, cannot be
            reviewed against the conditions that obtained, and cannot serve as
            evidence in any meaningful sense.
          </span>
        </p>
      </SectionShell>

      <SectionShell label="What outputs are not">
        <p className="text-nt-body leading-relaxed mb-3 text-nt-dim">
          Without explicit scaffolding, an AI output is not:
        </p>
        <ul className="space-y-2">
          {[
            "A clinical recommendation",
            "A legal conclusion",
            "A compliance determination",
            "A risk finding",
            "A deployment approval",
            "An audit-ready record",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-nt-dim">
              <span className="text-nt-muted">{"\u2014"}</span>
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Governing principle">
        <blockquote className="border-l-2 border-nt-accentDim pl-4">
          <p className="text-nt-body text-sm leading-relaxed italic">
            An output becomes evidence when it has been scaffolded, provenanced,
            and placed within a defined decision framework that specifies what
            it can support. Before that, it is a signal. Treating signals as
            evidence is a governance failure, not a technical one.
          </p>
        </blockquote>
      </SectionShell>

    </LearnLayout>
  );
}
