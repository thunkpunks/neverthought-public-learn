import type { Metadata } from "next";
import LearnLayout from "@/components/learn/LearnLayout";
import SectionShell from "@/components/site/SectionShell";
import { getLearnRoute } from "@/data/learnRoutes";

const route = getLearnRoute("simulation")!;

export const metadata: Metadata = {
  title: route.title,
  description: route.summary,
};

export default function SimulationPage() {
  return (
    <LearnLayout route={route}>

      <SectionShell label="What simulation is for">
        <p className="text-nt-body leading-relaxed mb-4">
          Simulation creates a synthetic domain environment in which
          admissibility decisions can be rehearsed before they carry real
          consequence. The simulation does not pretend to be the production
          system. It exposes the structural properties of the admissibility
          surface{" "}
          <span className="text-nt-dim">
            {"\u2014"} the topology, the pressure points, the recovery windows
            {" "}{"\u2014"} in a form that can be tested without harm.
          </span>
        </p>
        <p className="text-nt-body leading-relaxed">
          Simulation is the epistemic wind tunnel in instrumented form.
          Where the wind tunnel applies pressure to reveal deformation,
          simulation applies synthetic scenarios to reveal where the
          admissibility surface becomes unstable under realistic conditions.
        </p>
      </SectionShell>

      <SectionShell label="Signal projection">
        <p className="text-nt-body leading-relaxed mb-4">
          Every domain has a signal space: the set of inputs that the deployed
          system will receive and act on. Simulation begins with signal
          projection{" "}
          <span className="text-nt-dim">
            {"\u2014"} mapping the domain\u2019s real signals onto the
            admissibility surface to understand where they concentrate, where
            they conflict, and where they leave gaps that the system will fill
            with inference.
          </span>
        </p>
        <p className="text-nt-body leading-relaxed">
          Signal projection is not modelling. It is not prediction. It is
          structural mapping of the territory the system will navigate.
        </p>
      </SectionShell>

      <SectionShell label="Synthetic fixtures">
        <p className="text-nt-body leading-relaxed mb-4">
          A synthetic fixture is a controlled scenario designed to test a
          specific admissibility property. It is not a representative sample of
          production conditions. It is a carefully constructed test case that
          exposes whether a specific structural property holds or fails.
        </p>
        <div className="space-y-3">
          {[
            { label: "Deformation fixtures", desc: "Test whether the surface remains navigable under specified pressure conditions." },
            { label: "Recovery fixtures", desc: "Test whether recovery windows remain open when the system has operated for a defined period under load." },
            { label: "Authority fixtures", desc: "Test whether human authority boundaries hold when the system generates outputs that approach commitment boundaries at speed." },
            { label: "Residue fixtures", desc: "Test whether accumulated residue from prior decisions creates hidden constraints on current admissibility." },
          ].map(({ label, desc }) => (
            <div key={label} className="border-b border-nt-border pb-3 last:border-0 flex gap-4">
              <p className="text-nt-body text-sm font-medium w-44 flex-shrink-0">{label}</p>
              <p className="text-nt-dim text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell label="What simulation cannot tell you">
        <p className="text-nt-body leading-relaxed mb-3">
          Simulation is bounded by the quality of the signal projection and
          the fixture design. It cannot:
        </p>
        <ul className="space-y-2">
          {[
            "Guarantee that the production surface matches the simulation surface",
            "Certify that a system is ready for deployment",
            "Replace domain expertise with synthetic familiarity",
            "Produce admissibility findings for regulated decisions",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-nt-dim">
              <span className="text-nt-muted mt-0.5 flex-shrink-0">{"\u2014"}</span>
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell label="Governing principle">
        <blockquote className="border-l-2 border-nt-accentDim pl-4">
          <p className="text-nt-body text-sm leading-relaxed italic">
            Neverthought does not merely describe deployment judgement. It
            instruments it. Simulation is the instrument.
          </p>
        </blockquote>
      </SectionShell>

    </LearnLayout>
  );
}
