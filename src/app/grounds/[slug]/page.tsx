import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import { GROUNDS, getGroundBySlug, getRelatedGrounds } from "@/data/grounds";

export async function generateStaticParams() {
  return GROUNDS.map((ground) => ({
    slug: ground.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ground = getGroundBySlug(slug);
  if (!ground) return {};
  return {
    title: ground.seoTitle,
    description: ground.seoDescription,
    alternates: {
      canonical: `https://appealafine.co.uk/grounds/${ground.slug}`,
    },
    openGraph: {
      title: ground.seoTitle,
      description: ground.seoDescription,
      url: `https://appealafine.co.uk/grounds/${ground.slug}`,
      type: "article",
    },
  };
}

const strengthLabel: Record<string, string> = {
  strong: "Strong Defence",
  moderate: "Moderate Defence",
  situational: "Situational Defence",
};

const strengthBadgeVariant: Record<string, "success" | "warning" | "info"> = {
  strong: "success",
  moderate: "warning",
  situational: "info",
};

/**
 * Parse the markdown-style content into structured sections.
 */
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
      currentSection = {
        level: 2,
        title,
        id: slugify(title),
        body: [],
      };
    } else if (h3Match) {
      if (currentSection) sections.push(currentSection);
      const title = h3Match[1];
      currentSection = {
        level: 3,
        title,
        id: slugify(title),
        body: [],
      };
    } else if (currentSection) {
      currentSection.body.push(line);
    }
  }
  if (currentSection) sections.push(currentSection);
  return sections;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Renders body lines, handling markdown formatting:
 * bold, italic, links, lists, tables, numbered lists, paragraphs.
 */
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

/**
 * Render inline markdown: **bold**, [links](/path), and plain text.
 */
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Check for markdown links first [text](/url)
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    // Check for bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);

    // Find which comes first
    const linkIndex = linkMatch?.index ?? Infinity;
    const boldIndex = boldMatch?.index ?? Infinity;

    if (linkIndex === Infinity && boldIndex === Infinity) {
      parts.push(remaining);
      break;
    }

    if (linkIndex < boldIndex && linkMatch && linkMatch.index !== undefined) {
      if (linkMatch.index > 0) {
        parts.push(remaining.slice(0, linkMatch.index));
      }
      parts.push(
        <Link
          key={`link-${key++}`}
          href={linkMatch[2]}
          className="font-medium text-teal-600 hover:text-teal-700 underline"
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

/**
 * Render a markdown table.
 */
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

export default async function GroundPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ground = getGroundBySlug(slug);
  if (!ground) notFound();

  const sections = parseContent(ground.content);
  const tocItems = sections.filter((s) => s.level === 2 || s.level === 3);
  const relatedGrounds = getRelatedGrounds(ground.slug);

  // Insert CTA after first section
  const firstSectionIndex = 0;
  const midSectionIndex = Math.floor(sections.length / 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ground.title,
    description: ground.seoDescription,
    url: `https://appealafine.co.uk/grounds/${ground.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Appeal a Fine",
      url: "https://appealafine.co.uk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://appealafine.co.uk/grounds/${ground.slug}`,
    },
  };

  return (
    <div className="py-8 sm:py-12">
      <Container size="md">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Appeal Grounds", href: "/grounds" },
            { label: ground.name, href: `/grounds/${ground.slug}` },
          ]}
          className="mb-6"
        />

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
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
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {ground.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{ground.description}</p>
          <p className="mt-2 text-sm text-gray-500">
            <span className="font-medium">Legal basis:</span> {ground.legalBasis}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Table of Contents (sidebar on desktop) */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                On This Page
              </h2>
              <nav className="space-y-1">
                {tocItems.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block text-sm transition-colors hover:text-teal-600 ${
                      section.level === 3
                        ? "pl-4 text-gray-500"
                        : "font-medium text-gray-700"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
                <a
                  href="#evidence"
                  className="block text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
                >
                  Key Evidence
                </a>
                <a
                  href="#example-wording"
                  className="block text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
                >
                  Example Wording
                </a>
                <a
                  href="#faqs"
                  className="block text-sm font-medium text-gray-700 transition-colors hover:text-teal-600"
                >
                  FAQs
                </a>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="min-w-0 flex-1">
            {/* Mobile TOC */}
            <details className="lg:hidden mb-8 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <summary className="cursor-pointer text-sm font-bold text-gray-900">
                Table of Contents
              </summary>
              <nav className="mt-3 space-y-1">
                {tocItems.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block text-sm transition-colors hover:text-teal-600 ${
                      section.level === 3
                        ? "pl-4 text-gray-500"
                        : "font-medium text-gray-700"
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </details>

            {/* Content Sections */}
            {sections.map((section, idx) => (
              <div key={section.id}>
                <section id={section.id} className="scroll-mt-24">
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

                {/* CTA after first section */}
                {idx === firstSectionIndex && (
                  <div className="my-8 rounded-xl border-2 border-teal-200 bg-teal-50 p-6 text-center">
                    <p className="text-lg font-semibold text-teal-900">
                      Think this defence applies to your case?
                    </p>
                    <p className="mt-1 text-sm text-teal-700">
                      Get a free assessment in under 2 minutes. Our AI will check your
                      specific circumstances and generate a personalised appeal letter.
                    </p>
                    <div className="mt-4">
                      <Button href="/appeal" variant="accent" size="md">
                        Start Your Free Assessment
                      </Button>
                    </div>
                  </div>
                )}

                {/* CTA midway through content */}
                {idx === midSectionIndex && idx !== firstSectionIndex && (
                  <div className="my-8 rounded-xl bg-gray-50 border border-gray-200 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          Ready to use this defence?
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          Our AI drafts your appeal letter with the correct legal
                          references, tailored to your situation.
                        </p>
                      </div>
                      <Button href="/appeal" variant="accent" size="md" className="shrink-0">
                        Appeal Now
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Key Evidence Section */}
            <section id="evidence" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Key Evidence You Need
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <ul className="space-y-3">
                  {ground.howToProve.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-teal-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Example Wording Section */}
            <section id="example-wording" className="mt-12 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Example Appeal Wording
              </h2>
              <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3 mb-3">
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
                  <p className="text-sm font-medium text-amber-900">
                    Adapt this template to your specific circumstances. Replace the
                    bracketed sections with your own details.
                  </p>
                </div>
                <p className="text-sm text-amber-900 leading-relaxed italic">
                  &ldquo;{ground.exampleWording}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="text-sm text-amber-800">
                    Want a fully personalised version?{" "}
                    <Link
                      href="/appeal"
                      className="font-semibold text-teal-700 hover:text-teal-800 underline"
                    >
                      Start your free assessment
                    </Link>{" "}
                    and our AI will generate a complete appeal letter tailored to your case.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQs */}
            {ground.faqs.length > 0 && (
              <section id="faqs" className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <FAQ items={ground.faqs} />
              </section>
            )}

            {/* Related Grounds */}
            {relatedGrounds.length > 0 && (
              <section className="mt-12">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Related Appeal Grounds
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedGrounds.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/grounds/${related.slug}`}
                      className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
                    >
                      <Badge variant={strengthBadgeVariant[related.strength]} className="mb-2">
                        {strengthLabel[related.strength]}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {related.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Final CTA */}
            <div className="mt-12 rounded-xl bg-slate-900 p-8 text-center text-white">
              <h2 className="text-xl font-bold sm:text-2xl">
                Ready to Appeal Your Fine?
              </h2>
              <p className="mt-2 text-slate-300">
                Our AI analyses your specific circumstances and generates a professional
                appeal letter, referencing the correct legislation and appeal bodies.
              </p>
              <div className="mt-5">
                <Button href="/appeal" variant="accent" size="lg">
                  Start Your Free Assessment
                </Button>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </div>
  );
}
