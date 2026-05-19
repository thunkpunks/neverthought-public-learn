import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home",   href: "/" },
  { label: "Learn",  href: "/learn" },
  { label: "Deploy", href: "/deploy" },
  { label: "Engage", href: "/engage" },
];

interface SiteHeaderProps {
  current?: "home" | "learn" | "deploy" | "engage";
}

export default function SiteHeader({ current }: SiteHeaderProps) {
  return (
    <header className="border-b border-nt-border bg-nt-bg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-nt-heading font-mono text-sm tracking-widest uppercase hover:text-nt-accent transition-colors"
        >
          Neverthought
        </Link>
        <nav className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = current === item.label.toLowerCase();
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active
                    ? "text-nt-accent"
                    : "text-nt-dim hover:text-nt-body"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
