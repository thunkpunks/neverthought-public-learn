import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import Breadcrumb from "@/components/site/Breadcrumb";
import PreviousNextLearnNav from "@/components/learn/PreviousNextLearnNav";
import type { LearnRoute } from "@/data/learnRoutes";

interface LearnLayoutProps {
  route: LearnRoute;
  children: React.ReactNode;
}

export default function LearnLayout({ route, children }: LearnLayoutProps) {
  return (
    <div className="min-h-screen bg-nt-bg text-nt-body">
      <SiteHeader current="learn" />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Learn", href: "/learn" },
              { label: route.shortTitle },
            ]}
          />
        </div>

        <div className="mb-2">
          <span className="font-mono text-xs text-nt-muted">
            Module {String(route.order).padStart(2, "0")} of 08
          </span>
        </div>

        <h1 className="text-2xl font-medium text-nt-heading mb-8">
          {route.title}
        </h1>

        {children}

        <PreviousNextLearnNav currentHref={route.href} />
      </main>

      <SiteFooter />
    </div>
  );
}
