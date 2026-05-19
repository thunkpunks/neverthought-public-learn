export interface LearnRoute {
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  order: number;
  summary: string;
  learningGoal: string;
  commercialRelevance: string;
  nextRoute: string | null;
  previousRoute: string | null;
}

export const LEARN_ROUTES: LearnRoute[] = [
  {
    slug: "wind-tunnel",
    title: "Wind Tunnel",
    shortTitle: "Wind Tunnel",
    href: "/learn/wind-tunnel",
    order: 1,
    summary:
      "Semantic and admissibility traces placed under recursive pressure. Observe how signals deform, residues accumulate, and topology temperature changes before commitment becomes irreversible.",
    learningGoal:
      "Understand what happens to an AI system\u2019s decision surface when environmental conditions shift faster than its evidence base can recover.",
    commercialRelevance:
      "Deployment teams need to know what pressure looks like before it materialises in production. Wind Tunnel provides that rehearsal environment.",
    nextRoute: "/learn/snapshot",
    previousRoute: null,
  },
  {
    slug: "snapshot",
    title: "Snapshot",
    shortTitle: "Snapshot",
    href: "/learn/snapshot",
    order: 2,
    summary:
      "A system state capture at a moment of interest. Not a readiness score. Not a compliance determination. A structured record of what the system knew, what it could not yet know, and what remained open.",
    learningGoal:
      "Learn to distinguish a deployment snapshot from a readiness rating. A snapshot preserves optionality evidence. A rating collapses it.",
    commercialRelevance:
      "Buyer-safe evidence records must be producible on demand. Snapshot teaches the structure of those records without producing false assurance.",
    nextRoute: "/learn/interpretation",
    previousRoute: "/learn/wind-tunnel",
  },
  {
    slug: "interpretation",
    title: "Interpretation",
    shortTitle: "Interpretation",
    href: "/learn/interpretation",
    order: 3,
    summary:
      "How to read what the system is telling you. Residues, optionality windows, instability signatures, topology temperature, and admissibility posture. Interpretation is not explanation. It is structured reading.",
    learningGoal:
      "Develop the capacity to read a trace without overreading it. Know what the system can support as an inference and what it cannot.",
    commercialRelevance:
      "FDE teams and deployment operators must interpret system outputs without manufacturing false confidence. This is the core literacy layer.",
    nextRoute: "/learn/fde",
    previousRoute: "/learn/snapshot",
  },
  {
    slug: "fde",
    title: "FDE",
    shortTitle: "FDE",
    href: "/learn/fde",
    order: 4,
    summary:
      "Forward Deployed Engineering as deployment judgement, not implementation theatre. FDE teams sit at the boundary between system capability and organisational consequence. That boundary requires a specific kind of literacy.",
    learningGoal:
      "Understand why FDE is a governance function, not a technical one. Learn what deployment judgement looks like when it is practiced rather than performed.",
    commercialRelevance:
      "FDE calibration is the highest-leverage commercial training layer. Organisations that deploy AI without calibrated FDE teams are running on goodwill.",
    nextRoute: "/learn/simulation",
    previousRoute: "/learn/interpretation",
  },
  {
    slug: "simulation",
    title: "Simulation",
    shortTitle: "Simulation",
    href: "/learn/simulation",
    order: 5,
    summary:
      "Synthetic domain environments for rehearsing admissibility decisions before they become consequential. Simulation makes deformation visible before commitment. It is the epistemic wind tunnel in instrumented form.",
    learningGoal:
      "Understand the relationship between synthetic fixture design, signal projection, and admissibility surface rehearsal. Learn what a simulation can and cannot tell you.",
    commercialRelevance:
      "Private simulation pilots are the gateway to APL projection mapping. Public simulation literacy creates demand for that engagement.",
    nextRoute: "/learn/evidence",
    previousRoute: "/learn/fde",
  },
  {
    slug: "evidence",
    title: "Evidence",
    shortTitle: "Evidence",
    href: "/learn/evidence",
    order: 6,
    summary:
      "Evidence scaffolding, replay provenance, and the discipline of not treating outputs as evidence until they are properly structured. An output is not a record. A record is not a finding. A finding requires a scaffold.",
    learningGoal:
      "Learn the difference between a system output, an evidence record, and an admissibility finding. Understand what must be true before an output can serve as replay evidence.",
    commercialRelevance:
      "Organisations facing post-deployment review need reproducible evidence trails. Evidence scaffolding is the mechanism that makes review possible.",
    nextRoute: "/learn/validation",
    previousRoute: "/learn/simulation",
  },
  {
    slug: "validation",
    title: "Validation",
    shortTitle: "Validation",
    href: "/learn/validation",
    order: 7,
    summary:
      "How admissibility claims are tested, constrained, and prevented from becoming performative governance. Validation is adversarial by design. It asks what would have to be false for this claim to be wrong.",
    learningGoal:
      "Understand the structure of an admissibility claim and the conditions under which it fails. Learn to distinguish a validated constraint from a governance decoration.",
    commercialRelevance:
      "Conformance review and adversarial fixture design are high-value deliverables for regulated sector deployment. Validation literacy underpins both.",
    nextRoute: "/learn/pilot",
    previousRoute: "/learn/evidence",
  },
  {
    slug: "pilot",
    title: "Pilot",
    shortTitle: "Pilot",
    href: "/learn/pilot",
    order: 8,
    summary:
      "Converting deployment judgement understanding into a structured pilot engagement. A pilot is not a proof of concept. It is a structured rehearsal of the admissibility surface that a live deployment will require.",
    learningGoal:
      "Understand what makes a deployment pilot admissibility-ready versus merely functional. Learn what must be in place before a pilot can produce reusable governance evidence.",
    commercialRelevance:
      "Private runtime pilots are the endpoint of the commercial journey. This page converts public learning into a clear engagement pathway.",
    nextRoute: null,
    previousRoute: "/learn/validation",
  },
];

export function getLearnRoute(slug: string): LearnRoute | undefined {
  return LEARN_ROUTES.find((r) => r.slug === slug);
}

export function getLearnRouteByHref(href: string): LearnRoute | undefined {
  return LEARN_ROUTES.find((r) => r.href === href);
}
