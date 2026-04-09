import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getAllDataPages } from "@/data/data-pages";
import type { DataPage } from "@/data/data-pages";

export const metadata: Metadata = {
  title: "Parking Fine Data & Statistics UK | appealafine.co.uk",
  description:
    "Comprehensive UK parking fine statistics, appeal success rates, operator rankings, and comparison data. Free, regularly updated, and based on real enforcement data.",
  alternates: {
    canonical: "https://appealafine.co.uk/data",
  },
};

const categoryLabels: Record<DataPage["category"], string> = {
  statistics: "Statistics",
  comparison: "Comparison",
  ranking: "Ranking",
};

const categoryBadgeVariant: Record<DataPage["category"], "info" | "success" | "warning"> = {
  statistics: "info",
  comparison: "success",
  ranking: "warning",
};

export default function DataIndexPage() {
  const pages = getAllDataPages();

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
        name: "Data & Statistics",
        item: "https://appealafine.co.uk/data",
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

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Parking Fine Data &amp; Statistics
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Real numbers on UK parking enforcement. How many fines are issued,
            who issues them, and how often appeals succeed. Updated regularly
            with the latest available data.
          </p>
          <div className="mt-6">
            <Button href="/appeal" variant="accent" size="lg">
              Check Your Fine Now
            </Button>
          </div>
        </div>

        {/* Grid of cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => {
            const highlightStat = page.keyStats[0];
            return (
              <Link
                key={page.slug}
                href={`/data/${page.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg"
              >
                <Badge
                  variant={categoryBadgeVariant[page.category]}
                  className="mb-3"
                >
                  {categoryLabels[page.category]}
                </Badge>

                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {page.title}
                </h2>

                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {page.description}
                </p>

                {/* Key stat highlight */}
                {highlightStat && (
                  <div className="mt-4 rounded-lg bg-teal-50 px-4 py-3">
                    <p className="text-2xl font-bold text-teal-700">
                      {highlightStat.value}
                    </p>
                    <p className="text-xs text-teal-600 mt-0.5">
                      {highlightStat.label}
                    </p>
                  </div>
                )}

                <span className="mt-4 inline-flex items-center text-sm font-medium text-teal-600">
                  View data
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
            );
          })}
        </div>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-slate-900 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            The Data Says You Should Appeal
          </h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Over half of tribunal appeals succeed, but only 3.2% of people ever
            challenge their fine. Get a free assessment and find out if you have
            grounds.
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
