import type { Metadata } from "next";
import LearnLayout from "@/components/learn/LearnLayout";
import SectionShell from "@/components/site/SectionShell";
import { getLearnRoute } from "@/data/learnRoutes";

const route = getLearnRoute("validation")!;

export const metadata: Metadata = {
  title: route.title,
  description: route.summary,
};

export default function ValidationPage() {
  return (
    <LearnLayout route={route}>

      <SectionShell label="What validation is">
        <p className="text-nt-body leading-relaxed mb-4">
          Validation is the process of testing an admissibility claim against
          the conditions under which it would fail. It is adversarial by design.
          It asks: what would have to be false for this claim to be wrong? Then
          it attempts to find that falsifying condition.
        </p>
        <p className="text-nt-body leading-relaxed">
          This is the opposite of most governance processes, which test claims
          against conditions under which they would hold. Validation that only
          tests for success is not validation. It is performance.
        </p>
      </SectionShell>

      <SectionShell label="The anatomy of a validatable claim">
        <p className="text-nt-body leading-relaxed mb-4">
          A validatable admissibility claim has three components:
        </p>
        <div className="space-y-4">
          {[
            {
              component: "The assertion",
              desc: "A specific, bounded claim about what the system can do, under what conditions, within what scope. Not \u201Cthe system is safe.\u201D A validatable assertion names the specific condition it addresses.",
              example: "Under the fixture conditions tested, the system preserves a recovery window of at least [n] minutes before commitment boundary closure.",
            },
            {
              component: "The falsification condition",
              desc: "The specific condition under which the assertion would be false. If this condition cannot be stated, the assertion is not validatable.",
              example: "The assertion fails if recovery window duration falls below [n] minutes under [specified pressure conditions].",
            },
            {
              component: "The test",
              desc: "An adversarial fixture designed to apply the falsification condition and observe whether the assertion holds or breaks.",
              example: "Apply [pressure protocol] to the fixture environment and measure recovery window duration at [specified intervals].",
            },
          ].map(({ component, desc, example }) => (
            <div key={component} className="border border-nt-border rounded p-5 space-y-3">
              <p className="text-nt-heading text-sm font-medium">{component}</p>
              <p className="text-nt-dim text-sm leading-relaxed">{desc}</p>
              <div className="bg-nt-bg rounded px-4 py-3">
                <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-1">Example</p>
                <p className="text-nt-dim text-xs leading-relaxed">{example}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Governance theatre">
        <p className="text-nt-body leading-relaxed mb-4">
          Governance theatre is what happens when validation processes are
          designed to produce positive outcomes rather than honest ones.
          Common forms:
        </p>
        <ul className="space-y-3">
          {[
            { pattern: "Unfalsifiable claims", desc: "Claims stated broadly enough that no test case could refute them. \u201CThe system supports good decision-making.\u201D" },
            { pattern: "Cherry-picked fixtures", desc: "Test scenarios selected because the system performs well on them, not because they represent adversarial conditions." },
            { pattern: "Reviewer alignment", desc: "Validation processes where the entity being validated selects and controls the validation criteria." },
            { pattern: "Scope collapse", desc: "Validation that addresses a narrow scope but implies findings that apply to the full deployment context." },
          ].map(({ pattern, desc }) => (
            <div key={pattern} className="flex gap-4 pb-3 border-b border-nt-border last:border-0">
              <p className="text-nt-body text-sm font-medium w-48 flex-shrink-0">{pattern}</p>
              <p className="text-nt-dim text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="The four gate primitives">
        <p className="text-nt-body leading-relaxed mb-4">
          Validation produces a gate assignment. Every admissibility decision
          passes through one of four gates:
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { gate: "EXECUTE", desc: "Transition preserves recoverability and can proceed." },
            { gate: "TRANSFORM", desc: "Transition contains value but must be reshaped before commitment." },
            { gate: "DEFER", desc: "Insufficient evidence, authority, or recoverability conditions." },
            { gate: "REJECT", desc: "Transition would collapse future options or violate authority boundaries." },
          ].map(({ gate, desc }) => (
            <div key={gate} className="border border-nt-border rounded p-4">
              <p className="font-mono text-xs text-nt-accent mb-2">{gate}</p>
              <p className="text-nt-dim text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-nt-dim text-xs mt-4 leading-relaxed">
          These labels are canonical and do not have synonyms. Approve, block,
          hold, escalate, pass, fail, and traffic-light systems are not
          substitutes.
        </p>
      </SectionShell>

      <SectionShell label="Governing principle">
        <blockquote className="border-l-2 border-nt-accentDim pl-4">
          <p className="text-nt-body text-sm leading-relaxed italic">
            A governance process that cannot be failed is not governance. It is
            documentation. The difference is not aesthetic. It is structural.
            Validation that does not know what would break it is evidence that
            the system has not been tested, only observed.
          </p>
        </blockquote>
      </SectionShell>

    </LearnLayout>
  );
}
