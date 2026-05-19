interface SectionShellProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionShell({ label, children, className = "" }: SectionShellProps) {
  return (
    <section className={`mb-10 ${className}`}>
      {label && (
        <p className="font-mono text-xs text-nt-muted uppercase tracking-wider mb-4">
          {label}
        </p>
      )}
      {children}
    </section>
  );
}
