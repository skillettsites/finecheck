import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { GROUNDS } from "@/data/grounds";

export const metadata: Metadata = {
  title: "Appeal Grounds & Legal Defences | Appeal a Fine",
  description:
    "Explore the most effective legal grounds for appealing a UK parking fine. Covers signage issues, broken meters, ANPR errors, grace periods, and more.",
  alternates: {
    canonical: "https://appealafine.co.uk/grounds",
  },
};

const strengthLabel: Record<string, string> = {
  strong: "Strong",
  moderate: "Moderate",
  situational: "Situational",
};

const strengthBadgeVariant: Record<string, "success" | "warning" | "info"> = {
  strong: "success",
  moderate: "warning",
  situational: "info",
};

export default function GroundsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://appealafine.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Appeal Grounds",
        item: "https://appealafine.co.uk/grounds",
      },
    ],
  };

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[{ label: "Appeal Grounds", href: "/grounds" }]}
          className="mb-6"
        />

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Appeal Grounds &amp; Legal Defences
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Every successful parking fine appeal starts with the right legal ground.
            Browse the most common and effective defences used to overturn UK
            parking fines, and find the one that fits your situation.
          </p>
          <div className="mt-6">
            <Button href="/appeal" variant="accent" size="lg">
              Start Your Free Assessment
            </Button>
          </div>
        </div>

        {/* Grounds Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUNDS.map((ground) => (
            <Link
              key={ground.slug}
              href={`/grounds/${ground.slug}`}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={strengthBadgeVariant[ground.strength]}>
                  {strengthLabel[ground.strength]}
                </Badge>
                {ground.applicableTo.includes("both") ? (
                  <Badge variant="default">Council &amp; Private</Badge>
                ) : ground.applicableTo.includes("council") ? (
                  <Badge variant="default">Council Only</Badge>
                ) : (
                  <Badge variant="default">Private Only</Badge>
                )}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                {ground.name}
              </h2>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {ground.description}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="mt-16 rounded-2xl bg-slate-900 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Not Sure Which Ground Applies?
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Answer a few quick questions about your parking fine and our AI will
            identify the strongest legal grounds for your appeal, then generate a
            personalised letter.
          </p>
          <div className="mt-6">
            <Button href="/appeal" variant="accent" size="lg">
              Start Your Free Assessment
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
