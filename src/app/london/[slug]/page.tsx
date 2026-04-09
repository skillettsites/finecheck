import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import MidContentCTA from "@/components/ui/MidContentCTA";
import {
  BOROUGH_FINES,
  getBoroughFineBySlug,
  getBoroughFinesByBorough,
  getFineTypeLabel,
  getFineTypeShort,
} from "@/data/borough-fines";

export async function generateStaticParams() {
  return BOROUGH_FINES.map((bf) => ({
    slug: bf.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bf = getBoroughFineBySlug(slug);
  if (!bf) return {};
  return {
    title: bf.seoTitle,
    description: bf.seoDescription,
    alternates: {
      canonical: `https://appealafine.co.uk/london/${bf.slug}`,
    },
    openGraph: {
      title: bf.seoTitle,
      description: bf.seoDescription,
      url: `https://appealafine.co.uk/london/${bf.slug}`,
      type: "article",
    },
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseContent(content: string) {
  const lines = content.split("\n");
  const sections: {
    level: number;
    title: string;
    id: string;
    body: string[];
  }[] = [];
  let currentSection: {
    level: number;
    title: string;
    id: string;
    body: string[];
  } | null = null;

  for (const line of lines) {
    const h2Match = line.match(/^## (.+)/);
    const h3Match = line.match(/^### (.+)/);

    if (h2Match) {
      if (currentSection) sections.push(currentSection);
      const title = h2Match[1];
      currentSection = { level: 2, title, id: slugify(title), body: [] };
    } else if (h3Match) {
      if (currentSection) sections.push(currentSection);
      const title = h3Match[1];
      currentSection = { level: 3, title, id: slugify(title), body: [] };
    } else if (currentSection) {
      currentSection.body.push(line);
    }
  }
  if (currentSection) sections.push(currentSection);
  return sections;
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);

    const linkIdx = linkMatch?.index ?? Infinity;
    const boldIdx = boldMatch?.index ?? Infinity;

    if (linkIdx < boldIdx && linkMatch && linkMatch.index !== undefined) {
      if (linkMatch.index > 0) {
        parts.push(remaining.slice(0, linkMatch.index));
      }
      parts.push(
        <Link
          key={`link-${key++}`}
          href={linkMatch[2]}
          className="text-teal-600 underline hover:text-teal-700"
        >
          {linkMatch[1]}
        </Link>
      );
      remaining = remaining.slice(linkMatch.index + linkMatch[0].length);
    } else if (boldMatch && boldMatch.index !== undefined) {
      if (boldMatch.index > 0) {
        parts.push(remaining.slice(0, boldMatch.index));
      }
      parts.push(
        <strong key={`b-${key++}`} className="font-semibold text-gray-900">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
    } else {
      parts.push(remaining);
      break;
    }
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

function renderBodyLines(lines: string[]) {
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.match(/^- /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^- /)) {
        listItems.push(lines[i].replace(/^- /, ""));
        i++;
      }
      elements.push(
        <ul
          key={`ul-${elements.length}`}
          className="my-4 space-y-2 pl-6 list-disc text-gray-700"
        >
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    if (line.match(/^\d+\. /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        listItems.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol
          key={`ol-${elements.length}`}
          className="my-4 space-y-2 pl-6 list-decimal text-gray-700"
        >
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    elements.push(
      <p
        key={`p-${elements.length}`}
        className="my-4 text-gray-700 leading-relaxed"
      >
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

const fineTypeBadgeVariant: Record<string, "info" | "warning" | "success" | "accent"> = {
  parking: "info",
  "bus-lane": "warning",
  congestion: "accent",
  ulez: "success",
};

export default async function BoroughFinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bf = getBoroughFineBySlug(slug);
  if (!bf) notFound();

  const sections = parseContent(bf.content);

  const h2Sections = sections.filter((s) => s.level === 2);
  const midCtaAfterIndex = h2Sections.length >= 3 ? 2 : 1;
  let h2Count = 0;
  let midCtaInserted = false;

  const relatedPages = getBoroughFinesByBorough(bf.borough).filter(
    (f) => f.slug !== bf.slug
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: bf.title,
    description: bf.seoDescription,
    url: `https://appealafine.co.uk/london/${bf.slug}`,
    publisher: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://appealafine.co.uk",
    },
    about: {
      "@type": "AdministrativeArea",
      name: bf.borough,
      containedInPlace: {
        "@type": "City",
        name: "London",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bf.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="py-8 sm:py-12">
      <Container size="md">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "London", href: "/london" },
            {
              label: `${bf.borough} ${getFineTypeLabel(bf.fineType)}`,
              href: `/london/${bf.slug}`,
            },
          ]}
          className="mb-6"
        />

        {/* Top CTA Box */}
        <div className="mb-8 rounded-xl bg-teal-600 p-6 sm:p-8 text-white">
          <h2 className="text-xl font-bold sm:text-2xl">
            Got a {getFineTypeShort(bf.fineType)} in {bf.borough}?
          </h2>
          <p className="mt-2 text-teal-100">
            Check your PCN for free and get a personalised appeal letter in
            under two minutes. No payment needed.
          </p>
          <div className="mt-4">
            <Link
              href="/appeal"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
            >
              Start Your Free Assessment
              <svg
                className="h-4 w-4"
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
            </Link>
          </div>
        </div>

        {/* Badge + H1 */}
        <div className="mb-8">
          <Badge
            variant={fineTypeBadgeVariant[bf.fineType] || "info"}
            className="mb-3"
          >
            {getFineTypeLabel(bf.fineType)}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {bf.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{bf.description}</p>
        </div>

        {/* Main Content */}
        <article className="min-w-0">
          {sections.map((section) => {
            const nodes: React.ReactNode[] = [];

            if (section.level === 2) {
              h2Count++;
            }

            nodes.push(
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
              >
                {section.level === 2 ? (
                  <h2 className="mt-10 mb-4 text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                ) : (
                  <h3 className="mt-8 mb-3 text-xl font-semibold text-gray-900">
                    {section.title}
                  </h3>
                )}
                {renderBodyLines(section.body)}
              </section>
            );

            if (
              section.level === 2 &&
              h2Count === midCtaAfterIndex &&
              !midCtaInserted
            ) {
              midCtaInserted = true;
              nodes.push(
                <MidContentCTA
                  key="mid-cta"
                  headline={`Think Your ${bf.borough} Fine Might Be Wrong?`}
                  description="Our tool checks your PCN details and tells you if you have grounds to appeal. It takes less than two minutes."
                  buttonText="Check Your Fine Now"
                  href="/appeal"
                  variant="teal"
                />
              );
            }

            return nodes;
          })}
        </article>

        {/* Local Info */}
        {bf.localInfo.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Facts: {bf.borough}
            </h2>
            <div className="space-y-3">
              {bf.localInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-blue-900">{info}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Common Issues */}
        {bf.commonIssues.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Common Fine Locations and Issues
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {bf.commonIssues.map((issue) => (
                <div
                  key={issue}
                  className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">{issue}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {bf.faqs.length > 0 && (
          <section className="mt-12">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqSchema),
              }}
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <FAQ items={bf.faqs} />
          </section>
        )}

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Other Fines in {bf.borough}
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedPages.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/london/${rp.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:border-teal-300 hover:text-teal-600 hover:shadow-sm"
                >
                  {getFineTypeLabel(rp.fineType)}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <div className="mt-12 rounded-xl bg-slate-900 p-8 text-center text-white">
          <h2 className="text-xl font-bold sm:text-2xl">
            Ready to Appeal Your {bf.borough}{" "}
            {getFineTypeLabel(bf.fineType)}?
          </h2>
          <p className="mt-2 text-slate-300">
            Our tool analyses your specific circumstances and generates a
            professional appeal letter referencing the correct legislation,
            appeal bodies, and local rules for {bf.borough}.
          </p>
          <div className="mt-5">
            <Button href="/appeal" variant="accent" size="lg">
              Start Your Free Assessment
            </Button>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/london"
            className="text-sm text-teal-600 hover:text-teal-700 transition-colors"
          >
            View all London boroughs
          </Link>
        </div>
      </Container>
    </div>
  );
}
