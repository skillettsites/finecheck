import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { GUIDES } from "@/data/guides";
import type { Guide } from "@/lib/types";

export const metadata: Metadata = {
  title: "Parking Fine Appeal Guides | Your Complete Resource",
  description:
    "Free, expert guides to appealing UK parking fines. Covers council PCNs, private parking charges, POFA 2012, tribunal appeals, and more. Written by parking law specialists.",
  alternates: {
    canonical: "https://finecheck.co.uk/guides",
  },
};

const categoryLabels: Record<Guide["category"], string> = {
  rights: "Your Rights",
  process: "Appeal Process",
  legal: "Legal Framework",
  operator: "Operators",
  situation: "Specific Situations",
};

const categoryBadgeVariant: Record<Guide["category"], "info" | "success" | "warning" | "danger" | "accent"> = {
  rights: "info",
  process: "success",
  legal: "warning",
  operator: "danger",
  situation: "accent",
};

const categories: Guide["category"][] = ["rights", "process", "legal", "operator", "situation"];

// Most popular guides (first 4)
const popularSlugs = [
  "can-you-ignore-private-parking-fine",
  "how-to-appeal-council-parking-fine",
  "how-to-appeal-private-parking-fine",
  "pofa-2012-explained",
];

export default function GuidesPage() {
  const popularGuides = popularSlugs
    .map((slug) => GUIDES.find((g) => g.slug === slug))
    .filter((g): g is Guide => g !== undefined);

  const allCategories = categories.filter((cat) =>
    GUIDES.some((g) => g.category === cat)
  );

  return (
    <div className="py-12 sm:py-16">
      <Container>
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Parking Fine Appeal Guides
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about challenging a parking fine in the UK.
            Our guides cover your legal rights, the appeal process, and the specific
            rules that operators and councils must follow.
          </p>
        </div>

        {/* Most Popular */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
            </svg>
            Most Popular Guides
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {popularGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group relative rounded-xl border-2 border-teal-100 bg-teal-50/30 p-6 transition-all hover:border-teal-300 hover:shadow-lg"
              >
                <Badge variant={categoryBadgeVariant[guide.category]} className="mb-3">
                  {categoryLabels[guide.category]}
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {guide.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-teal-600">
                  Read guide
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* All Guides by Category */}
        {allCategories.map((category) => {
          const categoryGuides = GUIDES.filter((g) => g.category === category);
          return (
            <section key={category} className="mb-12" id={category}>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Badge variant={categoryBadgeVariant[category]} className="text-sm">
                  {categoryLabels[category]}
                </Badge>
                <span>{categoryLabels[category]}</span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
                  >
                    <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {guide.description}
                    </p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read guide
                      <svg className="ml-1 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-slate-900 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to Appeal Your Fine?</h2>
          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Get a free assessment of your parking fine in under 2 minutes.
            Our AI will check for procedural errors and generate a personalised appeal letter.
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
