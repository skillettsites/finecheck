import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts } from "@/data/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: {
      canonical: `https://finecheck.co.uk/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://finecheck.co.uk/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
    },
  };
}

const categoryVariants: Record<string, "info" | "success" | "warning" | "danger" | "accent" | "default"> = {
  "Private Parking": "danger",
  "Guides": "info",
  "Data & Research": "success",
  "Legal": "warning",
};

function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headings: { id: string; text: string; level: number }[] = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      headings.push({ id, text, level });
    }
  }
  return headings;
}

function renderContent(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];
  let key = 0;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${key++}`} className="list-disc pl-6 space-y-2 text-gray-700">
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  }

  function flushTable() {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${key++}`} className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            {tableHeaders.length > 0 && (
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="px-4 py-2 text-left font-semibold text-gray-700">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      tableHeaders = [];
      inTable = false;
    }
  }

  function formatInline(text: string): React.ReactNode {
    // Handle bold, links, and inline code
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let partKey = 0;

    while (remaining.length > 0) {
      // Bold
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Link
      const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

      type InlineMatch = { index: number; length: number; node: React.ReactNode };
      const candidates: InlineMatch[] = [];

      if (boldMatch && boldMatch.index !== undefined) {
        candidates.push({
          index: boldMatch.index,
          length: boldMatch[0].length,
          node: (
            <strong key={`b-${partKey++}`} className="font-semibold text-gray-900">
              {boldMatch[1]}
            </strong>
          ),
        });
      }

      if (linkMatch && linkMatch.index !== undefined) {
        candidates.push({
          index: linkMatch.index,
          length: linkMatch[0].length,
          node: (
            <a
              key={`a-${partKey++}`}
              href={linkMatch[2]}
              className="text-teal-600 hover:underline"
              target={linkMatch[2].startsWith("http") ? "_blank" : undefined}
              rel={linkMatch[2].startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {linkMatch[1]}
            </a>
          ),
        });
      }

      // Pick the earliest match
      const nextMatch = candidates.length > 0
        ? candidates.reduce((a, b) => (a.index <= b.index ? a : b))
        : null;

      if (nextMatch) {
        if (nextMatch.index > 0) {
          parts.push(remaining.substring(0, nextMatch.index));
        }
        parts.push(nextMatch.node);
        remaining = remaining.substring(nextMatch.index + nextMatch.length);
      } else {
        parts.push(remaining);
        remaining = "";
      }
    }

    return parts.length === 1 ? parts[0] : <>{parts}</>;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table row
    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line
        .split("|")
        .filter((c) => c.trim() !== "")
        .map((c) => c.trim());

      // Skip separator row
      if (cells.every((c) => /^[-:]+$/.test(c))) continue;

      if (!inTable) {
        inTable = true;
        flushList();
        tableHeaders = cells;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Heading
    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      if (level === 2) {
        elements.push(
          <h2
            key={`h2-${key++}`}
            id={id}
            className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24"
          >
            {formatInline(text)}
          </h2>
        );
      } else {
        elements.push(
          <h3
            key={`h3-${key++}`}
            id={id}
            className="text-lg font-bold text-gray-900 mt-6 mb-3 scroll-mt-24"
          >
            {formatInline(text)}
          </h3>
        );
      }
      continue;
    }

    // List item
    if (line.match(/^[-*]\s+/)) {
      if (!inList) inList = true;
      listItems.push(formatInline(line.replace(/^[-*]\s+/, "")));
      continue;
    } else if (inList) {
      flushList();
    }

    // Numbered list
    if (line.match(/^\d+\.\s+/)) {
      // Collect all numbered items
      const numberedItems: React.ReactNode[] = [formatInline(line.replace(/^\d+\.\s+/, ""))];
      while (i + 1 < lines.length && lines[i + 1].match(/^\d+\.\s+/)) {
        i++;
        numberedItems.push(formatInline(lines[i].replace(/^\d+\.\s+/, "")));
      }
      elements.push(
        <ol key={`ol-${key++}`} className="list-decimal pl-6 space-y-2 text-gray-700">
          {numberedItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") continue;

    // Paragraph
    elements.push(
      <p key={`p-${key++}`} className="text-gray-700 leading-relaxed">
        {formatInline(line)}
      </p>
    );
  }

  flushList();
  flushTable();

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const readTime = estimateReadTime(post.content);
  const relatedPosts = getRelatedPosts(post.slug, 3);
  const contentElements = renderContent(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://finecheck.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://finecheck.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://finecheck.co.uk/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://finecheck.co.uk/blog/${post.slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-white border-b border-gray-200 py-6">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        </Container>
      </section>

      <section className="py-8 sm:py-12 bg-white">
        <Container>
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
            {/* Main Content */}
            <article className="max-w-none">
              <header className="mb-8">
                <Badge
                  variant={categoryVariants[post.category] || "default"}
                  className="mb-3"
                >
                  {post.category}
                </Badge>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <time dateTime={post.publishedDate}>
                    {new Date(post.publishedDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{readTime} min read</span>
                </div>
              </header>

              <div className="space-y-4">{contentElements}</div>

              {/* FAQ Section */}
              {post.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FAQ items={post.faqs} />
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-xl bg-gradient-to-r from-slate-800 to-slate-700 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-2">
                  Need Help With Your Appeal?
                </h2>
                <p className="text-slate-300 mb-4">
                  FineCheck helps you assess your parking fine, check if it is valid, and generate a
                  professional appeal letter. It is free to use.
                </p>
                <Button href="/appeal" variant="accent" size="lg">
                  Start Your Free Appeal
                </Button>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
                      >
                        <Badge
                          variant={categoryVariants[related.category] || "default"}
                          className="mb-2"
                        >
                          {related.category}
                        </Badge>
                        <h3 className="font-semibold text-sm text-gray-900 mb-1">
                          {related.title}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {estimateReadTime(related.content)} min read
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar: Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                    Contents
                  </h3>
                  <nav className="space-y-2">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-sm hover:text-teal-600 transition-colors ${
                          heading.level === 2
                            ? "text-gray-700 font-medium"
                            : "text-gray-500 pl-3"
                        }`}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">
                    Check Your Fine
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    Not sure if your parking fine is valid? Our free tool checks the key issues in
                    under 2 minutes.
                  </p>
                  <Button href="/appeal" variant="accent" size="sm" className="w-full">
                    Check Now
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
