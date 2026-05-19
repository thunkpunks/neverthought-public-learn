interface BoundaryNoticeProps {
  className?: string;
}

export default function BoundaryNotice({ className = "" }: BoundaryNoticeProps) {
  return (
    <div
      className={`border border-nt-border rounded px-5 py-4 bg-nt-surface ${className}`}
      role="note"
      aria-label="Scope boundary"
    >
      <p className="text-xs text-nt-dim leading-relaxed font-mono">
        This public learning environment is pedagogical. It does not produce
        readiness scores, diagnoses, regulatory determinations, legal conclusions,
        compliance findings, or deployment approvals.
      </p>
    </div>
  );
}
