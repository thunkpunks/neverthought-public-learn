import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export const metadata: Metadata = {
  title: "Kernel",
  description: "The Neverthought kernel. The observatory. The protected core.",
};

export default function KernelPage() {
  return (
    <div className="min-h-screen bg-nt-bg text-nt-body">
      <SiteHeader />
      <main className="max-w-3xl mx-auto px-6 py-24">
        <p className="font-mono text-xs text-nt-muted uppercase tracking-widest mb-6">Kernel</p>
        <h1 className="text-2xl font-medium text-nt-heading mb-6">
          The observatory
        </h1>
        <p className="text-nt-dim leading-relaxed mb-4 max-w-xl">
          The Kernel is the protected core of the Neverthought system. The
          admissibility invariant kernel. The formal specification from which
          the public learning layer is derived.
        </p>
        <p className="text-nt-dim text-sm leading-relaxed max-w-xl mb-8">
          The Kernel is not a public surface. It is the observatory from which
          the practice field is visible.{" "}
          <Link href="/learn" className="text-nt-accent hover:text-nt-heading transition-colors">
            The practice field is here.
          </Link>
        </p>
        <Link href="/" className="text-sm text-nt-dim hover:text-nt-body transition-colors">
          {"\u2190"} Home
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}
