import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import { SITUATIONS, getSituationBySlug } from "@/data/situations";
import { getOperatorBySlug } from "@/data/operators";

export async function generateStaticParams() {
  return SITUATIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const situation = getSituationBySlug(slug);
  if (!situation) return {};

  return {
    title: situation.seoTitle,
    description: situation.seoDescription,
    alternates: {
      canonical: `https://finecheck.co.uk/situations/${situation.slug}`,
    },
    openGraph: {
      title: situation.seoTitle,
      description: situation.seoDescription,
      url: `https://finecheck.co.uk/situations/${situation.slug}`,
      type: "article",
    },
  };
}

const strengthConfig: Record<string, { label: string; variant: "success" | "warning" | "danger"; bg: string }> = {
  strong: { label: "Strong", variant: "success", bg: "border-green-200 bg-green-50" },
  moderate: { label: "Moderate", variant: "warning", bg: "border-amber-200 bg-amber-50" },
  weak: { label: "Weak", variant: "danger", bg: "border-red-200 bg-red-50" },
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
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    if (boldMatch && boldMatch.index !== undefined) {
      if (boldMatch.index > 0) parts.push(remaining.slice(0, boldMatch.index));
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
    if (!line.trim()) { i++; continue; }

    if (line.match(/^- /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^- /)) {
        items.push(lines[i].replace(/^- /, ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${elements.length}`} className="my-4 space-y-2 pl-6 list-disc text-gray-700">
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (line.match(/^\d+\. /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        items.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={`ol-${elements.length}`} className="my-4 space-y-2 pl-6 list-decimal text-gray-700">
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    elements.push(
      <p key={`p-${elements.length}`} className="my-4 text-gray-700 leading-relaxed">
        {renderInline(line)}
      </p>
    );
    i++;
  }
  return elements;
}

export default async function SituationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const situation = getSituationBySlug(slug);
  if (!situation) notFound();

  const sections = parseContent(situation.content);
  const operators = situation.commonOperators
    .map((s) => getOperatorBySlug(s))
    .filter((o): o is NonNullable<typeof o> => o !== undefined);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: situation.title,
    description: situation.seoDescription,
    url: `https://finecheck.co.uk/situations/${situation.slug}`,
    publisher: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://finecheck.co.uk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://finecheck.co.uk/situations/${situation.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Situations", href: "/situations" },
              { label: situation.name, href: `/situations/${situation.slug}` },
            ]}
            className="mb-6"
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <Badge variant="accent" className="mb-3">
                {situation.typicalFineAmount} typical charge
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {situation.title}
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                {situation.description}
              </p>
            </div>

            <div className="shrink-0">
              <div className="rounded-xl border-2 border-blue-200 bg-blue-50 px-6 py-4 text-center">
                <p className="text-sm font-medium text-blue-800">
                  Common Defences
                </p>
                <p className="text-4xl font-bold text-blue-700">
                  {situation.commonDefences.length}
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  {situation.commonDefences.filter((d) => d.strength === "strong").length} strong grounds
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Happens */}
      <section className="py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How This Happens
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {situation.howItHappens}
          </p>
        </Container>
      </section>

      {/* Common Operators */}
      {operators.length > 0 && (
        <section className="bg-gray-50 py-12">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Common Operators
            </h2>
            <p className="text-gray-600 mb-6">
              These are the private parking operators most commonly associated with
              this type of parking charge.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {operators.map((op) => (
                <Link key={op.slug} href={`/appeals/${op.slug}`}>
                  <Card hover className="h-full">
                    <h3 className="font-semibold text-gray-900">{op.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge
                        variant={op.averageSuccessRate >= 50 ? "success" : "warning"}
                      >
                        {op.averageSuccessRate}% success
                      </Badge>
                      <Badge variant="info">{op.tradeBody}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-blue-800 font-medium">
                      View guide &rarr;
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Common Defences */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Defences
          </h2>
          <p className="text-gray-600 mb-6">
            These are the most effective grounds for appealing this type of
            parking charge, ranked by strength.
          </p>

          <div className="space-y-4">
            {situation.commonDefences
              .sort((a, b) => {
                const order = { strong: 0, moderate: 1, weak: 2 };
                return (order[a.strength as keyof typeof order] ?? 2) - (order[b.strength as keyof typeof order] ?? 2);
              })
              .map((defence, i) => {
                const config = strengthConfig[defence.strength] || strengthConfig.moderate;
                return (
                  <div
                    key={i}
                    className={`rounded-xl border-2 p-6 ${config.bg}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {defence.ground}
                        </h3>
                        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                          {defence.description}
                        </p>
                      </div>
                      <Badge variant={config.variant} className="shrink-0">
                        {config.label}
                      </Badge>
                    </div>
                  </div>
                );
              })}
          </div>
        </Container>
      </section>

      {/* Appeal Tips */}
      <section className="bg-gray-50 py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Appeal Tips
          </h2>
          <div className="space-y-3">
            {situation.appealTips.map((tip, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white text-xs font-bold">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <Container size="md">
          <article>
            {sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-24">
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
              </div>
            ))}
          </article>
        </Container>
      </section>

      {/* FAQ */}
      {situation.faqs.length > 0 && (
        <section className="bg-gray-50 py-12">
          <Container size="md">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <FAQ items={situation.faqs} />
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="bg-blue-800 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Appeal Your {situation.name} Now
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Get a free assessment of your parking charge in under 2 minutes.
              Our tool checks the most common grounds and generates a
              personalised appeal letter.
            </p>
            <div className="mt-6">
              <Button href="/appeal" variant="accent" size="lg">
                Start Your Free Assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
