import type { Metadata } from "next";
import Link from "next/link";
import LearnLayout from "@/components/learn/LearnLayout";
import SectionShell from "@/components/site/SectionShell";
import { getLearnRoute } from "@/data/learnRoutes";

const route = getLearnRoute("pilot")!;

export const metadata: Metadata = {
  title: route.title,
  description: route.summary,
};

export default function PilotPage() {
  return (
    <LearnLayout route={route}>

      <SectionShell label="What a pilot is not">
        <p className="text-nt-body leading-relaxed mb-4">
          A pilot is not a proof of concept. A proof of concept tests whether
          a system can perform a function. A pilot tests whether a deployment
          can be governed{" "}
          <span className="text-nt-dim">
            {"\u2014"} whether the admissibility surface can be navigated under
            real conditions, by real practitioners, with real authority
            structures and real recovery requirements.
          </span>
        </p>
        <p className="text-nt-body leading-relaxed">
          A pilot that does not produce reusable governance evidence is a
          demonstration, not a pilot. It shows the system working. It does not
          show the governance holding.
        </p>
      </SectionShell>

      <SectionShell label="What a pilot must establish">
        <div className="space-y-4">
          {[
            {
              condition: "Signal inventory",
              desc: "Which domain signals will the system receive? Are they well-defined, consistently structured, and producible under review?",
            },
            {
              condition: "Authority mapping",
              desc: "Who has the authority to pause, redirect, or refuse a system recommendation at each commitment boundary? Is that authority exercisable under real operating conditions?",
            },
            {
              condition: "Recovery window definition",
              desc: "How long does the organisation have to reverse a commitment before the cost becomes disproportionate? Is that window preserved under the pilot conditions?",
            },
            {
              condition: "Evidence structure",
              desc: "Does the pilot produce evidence that could survive adversarial reconstruction? Is provenance maintained throughout?",
            },
            {
              condition: "Gate discipline",
              desc: "Are the EXECUTE / TRANSFORM / DEFER / REJECT gate decisions being made by practitioners with admissibility literacy, or are they being inherited from the system\u2019s own output?",
            },
          ].map(({ condition, desc }) => (
            <div key={condition} className="border-l-2 border-nt-border pl-4">
              <p className="text-nt-body text-sm font-medium mb-1">{condition}</p>
              <p className="text-nt-dim text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Pilot outputs">
        <p className="text-nt-body leading-relaxed mb-4">
          A structured pilot produces artefacts that outlast the pilot itself:
        </p>
        <ul className="space-y-2">
          {[
            "Domain signal inventory",
            "Admissibility surface map for the deployment context",
            "Gate and transition catalogue",
            "Replay evidence records from pilot operations",
            "Recovery window analysis",
            "Negative space register: what the system cannot handle, explicitly documented",
            "Deployment judgement operating model for the organisation",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-nt-dim">
              <span className="text-nt-muted flex-shrink-0">{"\u2192"}</span>
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="From learning to engagement">
        <p className="text-nt-body leading-relaxed mb-6">
          The learning layer creates the vocabulary. The pilot is where that
          vocabulary meets your domain{" "}
          <span className="text-nt-dim">
            {"\u2014"} your signals, your authority structures, your recovery
            requirements, your irreversibility patterns.
          </span>
        </p>
        <div className="border border-nt-border rounded p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-nt-heading text-sm font-medium mb-1">
              Private deployment mapping
            </p>
            <p className="text-nt-dim text-xs leading-relaxed max-w-sm">
              Domain signal inventory, APL projection, scenario and replay
              packs, conformance review, private simulation pilot. The
              commercial layer begins where public learning ends.
            </p>
          </div>
          <Link
            href="/engage"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-nt-accent text-nt-bg text-sm font-medium rounded hover:bg-nt-accentDim transition-colors"
          >
            Engage {"\u2192"}
          </Link>
        </div>
      </SectionShell>

      <SectionShell label="Governing principle">
        <blockquote className="border-l-2 border-nt-accentDim pl-4">
          <p className="text-nt-body text-sm leading-relaxed italic">
            A pilot that produces no governance evidence is an expensive
            demonstration. A pilot designed from admissibility principles
            produces the evidence base for every deployment decision that
            follows it.
          </p>
        </blockquote>
      </SectionShell>

    </LearnLayout>
  );
}
