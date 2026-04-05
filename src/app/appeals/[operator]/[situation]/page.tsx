import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import { OPERATOR_SITUATIONS } from "@/data/operator-situations";
import { getOperatorBySlug } from "@/data/operators";
import { getSituationBySlug } from "@/data/situations";

export async function generateStaticParams() {
  return OPERATOR_SITUATIONS.map((os) => ({
    operator: os.operatorSlug,
    situation: os.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ operator: string; situation: string }>;
}): Promise<Metadata> {
  const { operator, situation } = await params;
  const combo = OPERATOR_SITUATIONS.find(
    (os) => os.operatorSlug === operator && os.slug === situation
  );
  if (!combo) return {};

  return {
    title: combo.seoTitle,
    description: combo.seoDescription,
    alternates: {
      canonical: `https://appealafine.co.uk/appeals/${combo.operatorSlug}/${combo.slug}`,
    },
    openGraph: {
      title: combo.seoTitle,
      description: combo.seoDescription,
      url: `https://appealafine.co.uk/appeals/${combo.operatorSlug}/${combo.slug}`,
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

export default async function OperatorSituationPage({
  params,
}: {
  params: Promise<{ operator: string; situation: string }>;
}) {
  const { operator, situation } = await params;
  const combo = OPERATOR_SITUATIONS.find(
    (os) => os.operatorSlug === operator && os.slug === situation
  );
  if (!combo) notFound();

  const op = getOperatorBySlug(combo.operatorSlug);
  const sit = getSituationBySlug(combo.situationSlug);
  const sections = parseContent(combo.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: combo.title,
    description: combo.seoDescription,
    url: `https://appealafine.co.uk/appeals/${combo.operatorSlug}/${combo.slug}`,
    publisher: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://appealafine.co.uk",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://appealafine.co.uk/appeals/${combo.operatorSlug}/${combo.slug}`,
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
              { label: "Operators", href: "/appeals" },
              { label: op?.name || combo.operatorSlug, href: `/appeals/${combo.operatorSlug}` },
              { label: combo.locationName, href: `/appeals/${combo.operatorSlug}/${combo.slug}` },
            ]}
            className="mb-6"
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2 mb-3">
                {op && (
                  <Badge variant="info">{op.tradeBody}</Badge>
                )}
                {op && (
                  <Badge variant={op.pursuesToCourt ? "danger" : "success"}>
                    {op.pursuesToCourt ? "Pursues court" : "Rarely goes to court"}
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {combo.title}
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                {combo.description}
              </p>
            </div>

            {op && (
              <div className="shrink-0">
                <div className="rounded-xl border-2 border-green-200 bg-green-50 px-6 py-4 text-center">
                  <p className="text-sm font-medium text-green-800">
                    Appeal Success Rate
                  </p>
                  <p className="text-4xl font-bold text-green-700">
                    {op.averageSuccessRate}%
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    at {op.appealBody}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Key Facts */}
      {op && (
        <section className="py-12">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Key Facts
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <p className="text-sm text-gray-500">Operator</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{op.name}</p>
                <p className="text-xs text-gray-500 mt-1">{op.fullName}</p>
              </Card>
              <Card>
                <p className="text-sm text-gray-500">Appeal Body</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">{op.appealBody}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {op.appealBody === "POPLA" ? "Parking on Private Land Appeals" : "Independent Appeals Service"}
                </p>
              </Card>
              <Card>
                <p className="text-sm text-gray-500">Uses ANPR</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {op.usesANPR ? "Yes" : "No"}
                </p>
              </Card>
              <Card>
                <p className="text-sm text-gray-500">Court Risk</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {op.pursuesToCourt ? "Higher" : "Lower"}
                </p>
                <Badge variant={op.pursuesToCourt ? "danger" : "success"} className="mt-2">
                  {op.pursuesToCourt ? "Does pursue" : "Rarely pursues"}
                </Badge>
              </Card>
            </div>
          </Container>
        </section>
      )}

      {/* Specific Defences */}
      <section className="bg-gray-50 py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Specific Defences for {combo.title}
          </h2>
          <p className="text-gray-600 mb-6">
            These defences are specific to {op?.name || combo.operatorSlug} charges at {combo.locationName} locations.
            Use as many as apply to your situation.
          </p>

          <div className="space-y-4">
            {combo.specificDefences.map((defence, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4"
              >
                <div className="mt-0.5 shrink-0 rounded-full bg-green-200 p-1">
                  <svg
                    className="h-4 w-4 text-green-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{defence}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Step-by-Step Appeal Guide
          </h2>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Check the Notice to Keeper timing",
                desc: `Check the date on the NtK against the date of the alleged contravention. Under POFA 2012, ${op?.name || "the operator"} must serve the NtK within 14 days. If it was late, the charge fails on this ground alone.`,
              },
              {
                step: 2,
                title: "Gather your evidence",
                desc: `Collect receipts, appointment letters, photos of signage, and any other evidence relevant to your visit at ${combo.locationName}. The more specific your evidence, the stronger your appeal.`,
              },
              {
                step: 3,
                title: `Appeal to ${op?.name || "the operator"}`,
                desc: `Submit your appeal within 28 days of receiving the charge. State each ground clearly, attach your evidence, and request cancellation. Keep copies of everything you send.`,
              },
              {
                step: 4,
                title: `Escalate to ${op?.appealBody || "the independent appeals service"}`,
                desc: `If ${op?.name || "the operator"} rejects your appeal, you have 28 days to escalate to ${op?.appealBody || "the independent appeals service"}. Include all your evidence and clearly explain why the charge should be cancelled. The ${op?.appealBody || "appeals service"} decision is binding on the operator but not on you.`,
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-12">
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
      {combo.faqs.length > 0 && (
        <section className="py-12">
          <Container size="md">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <FAQ items={combo.faqs} />
          </Container>
        </section>
      )}

      {/* Related Links */}
      <section className="bg-gray-50 py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Guides
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {op && (
              <Link href={`/appeals/${op.slug}`}>
                <Card hover className="h-full">
                  <Badge variant="info" className="mb-2">Operator Guide</Badge>
                  <h3 className="font-semibold text-gray-900">
                    Appeal a {op.name} Fine
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Full guide to challenging {op.name} charges, including common weaknesses and court risks.
                  </p>
                  <p className="mt-2 text-sm text-teal-600 font-medium">
                    Read guide &rarr;
                  </p>
                </Card>
              </Link>
            )}
            {sit && (
              <Link href={`/situations/${sit.slug}`}>
                <Card hover className="h-full">
                  <Badge variant="accent" className="mb-2">Situation Guide</Badge>
                  <h3 className="font-semibold text-gray-900">
                    {sit.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    General guide to {sit.name.toLowerCase()} charges from all operators.
                  </p>
                  <p className="mt-2 text-sm text-teal-600 font-medium">
                    Read guide &rarr;
                  </p>
                </Card>
              </Link>
            )}
            <Link href="/appeals">
              <Card hover className="h-full">
                <Badge variant="default" className="mb-2">All Operators</Badge>
                <h3 className="font-semibold text-gray-900">
                  View All Operators
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Browse all {20} private parking operators covered by FineCheck.
                </p>
                <p className="mt-2 text-sm text-teal-600 font-medium">
                  View operators &rarr;
                </p>
              </Card>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Appeal Your {op?.name || ""} {combo.locationName} Fine Now
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Get a free assessment of your parking charge. Our tool checks the
              NtK timing, signage requirements, and other grounds specific to
              {" "}{op?.name || "your operator"} at {combo.locationName} sites.
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
