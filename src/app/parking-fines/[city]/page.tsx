import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import { CITIES, getCityBySlug } from "@/data/cities";

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: city.seoTitle,
    description: city.seoDescription,
    alternates: {
      canonical: `https://appealafine.co.uk/parking-fines/${city.slug}`,
    },
    openGraph: {
      title: city.seoTitle,
      description: city.seoDescription,
      url: `https://appealafine.co.uk/parking-fines/${city.slug}`,
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
  const sections: { level: number; title: string; id: string; body: string[] }[] = [];
  let currentSection: { level: number; title: string; id: string; body: string[] } | null = null;

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
    // Handle links [text](url)
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);

    // Find earliest match
    const linkIdx = linkMatch?.index ?? Infinity;
    const boldIdx = boldMatch?.index ?? Infinity;

    if (linkIdx < boldIdx && linkMatch && linkMatch.index !== undefined) {
      if (linkMatch.index > 0) {
        parts.push(remaining.slice(0, linkMatch.index));
      }
      parts.push(
        <Link key={`link-${key++}`} href={linkMatch[2]} className="text-teal-600 underline hover:text-teal-700">
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

function renderTable(lines: string[], keyBase: number) {
  const rows = lines
    .filter((line) => !line.match(/^\|[\s-|]+\|$/))
    .map((line) =>
      line
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell.length > 0)
    );

  if (rows.length === 0) return null;
  const [header, ...bodyRows] = rows;

  return (
    <div key={`table-${keyBase}`} className="my-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
        <thead className="bg-gray-50">
          <tr>
            {header.map((cell, idx) => (
              <th key={idx} className="px-4 py-3 text-left font-semibold text-gray-900">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {bodyRows.map((row, ridx) => (
            <tr key={ridx}>
              {row.map((cell, cidx) => (
                <td key={cidx} className="px-4 py-3 text-gray-700">
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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

    // Table rows
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      elements.push(renderTable(tableLines, elements.length));
      continue;
    }

    // Unordered list
    if (line.match(/^- /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^- /)) {
        listItems.push(lines[i].replace(/^- /, ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-4 space-y-2 pl-6 list-disc text-gray-700">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\. /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        listItems.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${elements.length}`} className="my-4 space-y-2 pl-6 list-decimal text-gray-700">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${elements.length}`} className="my-4 text-gray-700 leading-relaxed">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return elements;
}

function operatorSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const sections = parseContent(city.content);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Parking Fines in ${city.name}`,
    description: city.seoDescription,
    url: `https://appealafine.co.uk/parking-fines/${city.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "FineCheck",
      url: "https://appealafine.co.uk",
    },
    about: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.region,
      },
    },
  };

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
        name: "Parking Fines",
        item: "https://appealafine.co.uk/parking-fines",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `https://appealafine.co.uk/parking-fines/${city.slug}`,
      },
    ],
  };

  // Split sections: insert mid-content CTA after the 2nd h2 section
  const h2Sections = sections.filter((s) => s.level === 2);
  const midCtaAfterIndex = h2Sections.length >= 3 ? 2 : 1;
  let h2Count = 0;
  let midCtaInserted = false;

  return (
    <div className="py-8 sm:py-12">
      <Container size="md">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Parking Fines", href: "/parking-fines" },
            { label: city.name, href: `/parking-fines/${city.slug}` },
          ]}
          className="mb-6"
        />

        {/* Hero */}
        <div className="mb-8">
          <Badge variant="info" className="mb-3">
            {city.region}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Parking Fines in {city.name}
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Everything you need to know about challenging a parking fine in{" "}
            {city.name}. Local hotspots, appeal tips, and your rights.
          </p>
        </div>

        {/* Key stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-teal-600">{city.annualPCNs}</p>
            <p className="mt-0.5 text-xs text-gray-500">PCNs per Year</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-teal-600">{city.population}</p>
            <p className="mt-0.5 text-xs text-gray-500">Population</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-teal-600">
              {city.tribunalBody}
            </p>
            <p className="mt-0.5 text-xs text-gray-500">Appeal Body</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-teal-600">
              {city.enforcementType === "civil" ? "Civil" : "Decriminalised"}
            </p>
            <p className="mt-0.5 text-xs text-gray-500">Enforcement Type</p>
          </div>
        </div>

        {/* Main Content */}
        <article className="min-w-0">
          {sections.map((section) => {
            const nodes: React.ReactNode[] = [];

            if (section.level === 2) {
              h2Count++;
            }

            nodes.push(
              <section key={section.id} id={section.id} className="scroll-mt-24">
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

            // Insert mid-content CTA
            if (section.level === 2 && h2Count === midCtaAfterIndex && !midCtaInserted) {
              midCtaInserted = true;
              nodes.push(
                <div
                  key="mid-cta"
                  className="my-8 rounded-xl border-2 border-teal-200 bg-teal-50 p-6 text-center"
                >
                  <h3 className="text-lg font-bold text-teal-900">
                    Think Your {city.name} Fine Might Be Wrong?
                  </h3>
                  <p className="mt-1 text-sm text-teal-800">
                    Our tool checks your PCN details and tells you if you have
                    grounds to appeal. It takes less than two minutes.
                  </p>
                  <div className="mt-4">
                    <Button href="/appeal" variant="accent" size="md">
                      Check Your Fine Now
                    </Button>
                  </div>
                </div>
              );
            }

            return nodes;
          })}
        </article>

        {/* Known Hotspots */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="mr-2">📍</span>
            Known Hotspots in {city.name}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {city.hotspots.map((hotspot) => (
              <div
                key={hotspot}
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
                <span className="text-sm text-gray-700">{hotspot}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Major Operators */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Major Parking Operators in {city.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {city.majorOperators.map((op) => (
              <Link
                key={op}
                href={`/appeals/${operatorSlug(op)}`}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:border-teal-300 hover:text-teal-600 hover:shadow-sm"
              >
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z"
                  />
                </svg>
                {op}
              </Link>
            ))}
          </div>
        </section>

        {/* Local Appeal Tips */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Local Appeal Tips for {city.name}
          </h2>
          <div className="space-y-3">
            {city.localTips.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-amber-900">{tip}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        {city.faqs.length > 0 && (
          <section className="mt-12">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <FAQ items={city.faqs} />
          </section>
        )}

        {/* Final CTA */}
        <div className="mt-12 rounded-xl bg-slate-900 p-8 text-center text-white">
          <h2 className="text-xl font-bold sm:text-2xl">
            Ready to Appeal Your {city.name} Parking Fine?
          </h2>
          <p className="mt-2 text-slate-300">
            Our tool analyses your specific circumstances and generates a
            professional appeal letter referencing the correct legislation,
            appeal bodies, and local rules for {city.name}.
          </p>
          <div className="mt-5">
            <Button href="/appeal" variant="accent" size="lg">
              Start Your Free Assessment
            </Button>
          </div>
        </div>

        {/* Back to cities */}
        <div className="mt-8 text-center">
          <Link
            href="/parking-fines"
            className="text-sm text-teal-600 hover:text-teal-700 transition-colors"
          >
            ← View all cities
          </Link>
        </div>
      </Container>
    </div>
  );
}
