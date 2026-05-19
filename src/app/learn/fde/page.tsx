import type { Metadata } from "next";
import LearnLayout from "@/components/learn/LearnLayout";
import SectionShell from "@/components/site/SectionShell";
import { getLearnRoute } from "@/data/learnRoutes";

const route = getLearnRoute("fde")!;

export const metadata: Metadata = {
  title: route.title,
  description: route.summary,
};

export default function FdePage() {
  return (
    <LearnLayout route={route}>

      <SectionShell label="What FDE actually is">
        <p className="text-nt-body leading-relaxed mb-4">
          Forward Deployed Engineering places engineers at the boundary between
          a system and the organisation that depends on it. In most
          implementations, this means configuration, integration, and
          troubleshooting{" "}
          <span className="text-nt-dim">
            {"\u2014"} technical proximity to the deployment site.
          </span>
        </p>
        <p className="text-nt-body leading-relaxed">
          That framing misses the structural function. FDE at a consequential
          AI deployment is a governance function. The FDE practitioner is the
          human who holds the admissibility question open while the system acts.
          Not the person who makes the system work. The person who keeps the
          question alive of whether what the system is doing remains admissible.
        </p>
      </SectionShell>

      <SectionShell label="The three failure modes of FDE theatre">
        <div className="space-y-4">
          {[
            {
              mode: "Proximity without authority",
              desc: "The FDE practitioner is present at the deployment site but has no authority to pause, redirect, or refuse a system recommendation. Proximity becomes performance. The governance loop is decorative.",
            },
            {
              mode: "Expertise without surface literacy",
              desc: "The practitioner understands the system\u2019s technical behaviour but cannot read the admissibility surface. They can tell you what the system did. They cannot tell you what that means for what must happen next.",
            },
            {
              mode: "Calibration without falsifiability",
              desc: "The practitioner applies a deployment judgement framework that cannot be tested against adverse cases. If the framework cannot say when it is wrong, it is governance decoration, not governance practice.",
            },
          ].map(({ mode, desc }) => (
            <div key={mode} className="border-l-2 border-nt-muted pl-4">
              <p className="text-nt-heading text-sm font-medium mb-1">{mode}</p>
              <p className="text-nt-dim text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="What calibrated FDE looks like">
        <p className="text-nt-body leading-relaxed mb-4">
          A calibrated FDE practitioner holds four capacities simultaneously:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: "Surface literacy", desc: "Can read admissibility posture, residue, and optionality without the system telling them what to see." },
            { label: "Authority clarity", desc: "Knows exactly what they are authorised to pause, redirect, or refuse, and what requires escalation." },
            { label: "Interpretation discipline", desc: "Can distinguish a system explanation from an admissible inference about the system\u2019s output." },
            { label: "Recovery orientation", desc: "Defaults to preserving recovery windows rather than enabling commitment speed. Knows the cost of the difference." },
          ].map(({ label, desc }) => (
            <div key={label} className="border border-nt-border rounded p-4">
              <p className="text-nt-body text-sm font-medium mb-2">{label}</p>
              <p className="text-nt-dim text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="Human before the loop">
        <p className="text-nt-body leading-relaxed mb-4">
          The phrase{" "}
          <em className="not-italic text-nt-heading">
            human in the loop
          </em>{" "}
          describes a position. A human approves before the system acts. The
          structural problem is that{" "}
          <em className="not-italic text-nt-dim">
            approval is not governance
          </em>
          . A human who approves without a model of the surface is not governing.
          They are providing cover.
        </p>
        <p className="text-nt-body leading-relaxed">
          Human before the loop means: before the commitment boundary closes,
          a practitioner with admissibility literacy and genuine authority has
          read the surface, assessed the posture, and either confirmed
          admissibility or surfaced the condition under which it fails. That
          practitioner is the FDE function.
        </p>
      </SectionShell>

      <SectionShell label="Governing principle">
        <blockquote className="border-l-2 border-nt-accentDim pl-4">
          <p className="text-nt-body text-sm leading-relaxed italic">
            FDE without deployment judgement literacy is proximity to
            consequence, not governance of it. The difference is not visible
            until it is too late.
          </p>
        </blockquote>
      </SectionShell>

    </LearnLayout>
  );
}
