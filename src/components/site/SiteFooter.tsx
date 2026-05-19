import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-nt-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-nt-dim">
            Neverthought
          </p>
          <p className="text-nt-dim text-xs mt-1">
            The admissibility layer for the deployment economy.
          </p>
        </div>
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Link href="/learn"   className="text-xs text-nt-dim hover:text-nt-body transition-colors">Learn</Link>
          <Link href="/deploy"  className="text-xs text-nt-dim hover:text-nt-body transition-colors">Deploy</Link>
          <Link href="/engage"  className="text-xs text-nt-dim hover:text-nt-body transition-colors">Engage</Link>
          <Link href="/kernel"  className="text-xs text-nt-dim hover:text-nt-body transition-colors">Kernel</Link>
        </nav>
        <p className="text-xs text-nt-muted">
          {new Date().getFullYear()} Neverthought. Public learning layer only.
        </p>
      </div>
    </footer>
  );
}
