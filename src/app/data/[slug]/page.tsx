import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import { DATA_PAGES, getDataPageBySlug } from "@/data/data-pages";
import type { DataPage } from "@/data/data-pages";

export async function generateStaticParams() {
  return DATA_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getDataPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical: `https://appealafine.co.uk/data/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `https://appealafine.co.uk/data/${page.slug}`,
      type: "article",
    },
  };
}

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
    // Check for links first: [text](/url)
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);

    // Use whichever comes first
    const linkIdx = linkMatch?.index ?? Infinity;
    const boldIdx = boldMatch?.index ?? Infinity;

    if (linkIdx < boldIdx && linkMatch && linkMatch.index !== undefined) {
      if (linkMatch.index > 0) {
        parts.push(remaining.slice(0, linkMatch.index));
      }
      parts.push(
        <a
          key={`a-${key++}`}
          href={linkMatch[2]}
          className="font-medium text-teal-600 underline hover:text-teal-700"
        >
          {linkMatch[1]}
        </a>
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
            <tr key={ridx} className={ridx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
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

export default async function DataPageDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getDataPageBySlug(slug);
  if (!page) notFound();

  const sections = parseContent(page.content);
  const tocItems = sections.filter((s) => s.level === 2 || s.level === 3);

  // Insert mid-content CTA after roughly half the sections
  const midIndex = Math.floor(sections.length / 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.seoDescription,
    url: `https://appealafine.co.uk/data/${page.slug}`,
    publisher: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://appealafine.co.uk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://appealafine.co.uk/data/${page.slug}`,
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
            { label: "Data", href: "/data" },
            { label: page.title, href: `/data/${page.slug}` },
          ]}
          className="mb-6"
        />

        {/* Header */}
        <div className="mb-8">
          <Badge variant={categoryBadgeVariant[page.category]} className="mb-3">
            {categoryLabels[page.category]}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {page.title}
          </h1>
          <p className="mt-3 text-lg text-gray-600">{page.description}</p>
        </div>

        {/* Key Stats Grid */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white p-5 text-center"
            >
              <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-gray-500">{stat.description}</p>
            </div>
          ))}
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

            {/* Content with mid-content CTA */}
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

                {/* Mid-content CTA */}
                {idx === midIndex && (
                  <div className="my-10 rounded-xl border-2 border-teal-200 bg-teal-50 p-6 text-center">
                    <h3 className="text-lg font-bold text-teal-900">
                      Think Your Fine Could Be Overturned?
                    </h3>
                    <p className="mt-2 text-sm text-teal-700">
                      Our AI checks your specific circumstances against the data and
                      generates a professional appeal letter.
                    </p>
                    <div className="mt-4">
                      <Button href="/appeal" variant="accent" size="md">
                        Get Your Free Assessment
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* FAQs */}
            {page.faqs.length > 0 && (
              <section className="mt-12">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <FAQ items={page.faqs} />
              </section>
            )}

            {/* Final dark CTA banner */}
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
          </article>
        </div>
      </Container>
    </div>
  );
}
