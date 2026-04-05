import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import { GUIDES, getGuideBySlug, getRelatedGuides } from "@/data/guides";
import type { Guide } from "@/lib/types";

export async function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
    alternates: {
      canonical: `https://finecheck.co.uk/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      url: `https://finecheck.co.uk/guides/${guide.slug}`,
      type: "article",
    },
  };
}

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

/**
 * Parse the markdown-style content into structured sections.
 * Extracts headings (##, ###) and body content.
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
 * Extract key takeaways from the first section's content.
 * Takes the first bold items or first few sentences.
 */
function extractKeyTakeaways(content: string): string[] {
  const takeaways: string[] = [];

  // Look for bold items (text wrapped in **)
  const boldPattern = /\*\*([^*]+)\*\*/g;
  let match;
  const seen = new Set<string>();

  while ((match = boldPattern.exec(content)) !== null) {
    const text = match[1].trim();
    // Only include substantive bold text, not just labels
    if (text.length > 15 && text.length < 200 && !seen.has(text)) {
      seen.add(text);
      takeaways.push(text);
      if (takeaways.length >= 4) break;
    }
  }

  // Fallback: first 3 sentences from the intro paragraph
  if (takeaways.length < 2) {
    const lines = content.split("\n").filter((l) => l.trim() && !l.startsWith("#") && !l.startsWith("-") && !l.startsWith("|"));
    const intro = lines.slice(0, 3).join(" ");
    const sentences = intro.split(/\. /).slice(0, 3);
    return sentences.map((s) => s.replace(/\.$/, "").trim()).filter((s) => s.length > 10);
  }

  return takeaways;
}

/**
 * Renders a body line, handling markdown-style formatting:
 * bold, lists, tables, numbered lists, paragraphs.
 */
function renderBodyLines(lines: string[]) {
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Skip empty lines
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
 * Render inline markdown: **bold** and *italic*
 */
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    if (boldMatch && boldMatch.index !== undefined) {
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
 * Render a markdown table
 */
function renderTable(lines: string[], keyBase: number) {
  const rows = lines
    .filter((line) => !line.match(/^\|[\s-|]+\|$/)) // Skip separator rows
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

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const sections = parseContent(guide.content);
  const tocItems = sections.filter((s) => s.level === 2 || s.level === 3);
  const keyTakeaways = extractKeyTakeaways(guide.content);
  const relatedGuides = getRelatedGuides(guide.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.seoDescription,
    url: `https://finecheck.co.uk/guides/${guide.slug}`,
    publisher: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://finecheck.co.uk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://finecheck.co.uk/guides/${guide.slug}`,
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
            { label: "Guides", href: "/guides" },
            { label: guide.title, href: `/guides/${guide.slug}` },
          ]}
          className="mb-6"
        />

        {/* Header */}
        <div className="mb-8">
          <Badge variant={categoryBadgeVariant[guide.category]} className="mb-3">
            {categoryLabels[guide.category]}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{guide.description}</p>
        </div>

        {/* Key Takeaways */}
        {keyTakeaways.length > 0 && (
          <div className="mb-8 rounded-xl border-2 border-amber-200 bg-amber-50 p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-amber-900 mb-3">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-amber-900">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-8">
          {/* Table of Contents (sidebar on desktop) */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                In This Guide
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

            {/* Guide Content */}
            {sections.map((section) => (
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
            ))}

            {/* CTA after content */}
            <div className="mt-12 rounded-xl bg-slate-900 p-8 text-center text-white">
              <h2 className="text-xl font-bold sm:text-2xl">
                Ready to Appeal? Get Your Personalised Letter
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

            {/* Related Guides */}
            {relatedGuides.length > 0 && (
              <section className="mt-12">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Related Guides
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedGuides.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/guides/${related.slug}`}
                      className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-gray-300 hover:shadow-md"
                    >
                      <Badge variant={categoryBadgeVariant[related.category]} className="mb-2">
                        {categoryLabels[related.category]}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {related.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {related.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {guide.faqs.length > 0 && (
              <section className="mt-12">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <FAQ items={guide.faqs} />
              </section>
            )}
          </article>
        </div>
      </Container>
    </div>
  );
}
