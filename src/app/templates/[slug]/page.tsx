import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { TEMPLATES, getTemplateBySlug, AppealTemplate } from "@/data/templates";
import CopyTemplateButton from "./CopyTemplateButton";
import TemplateRenderer from "./TemplateRenderer";

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return { title: "Template Not Found" };

  return {
    title: template.seoTitle,
    description: template.seoDescription,
    alternates: {
      canonical: `https://finecheck.co.uk/templates/${template.slug}`,
    },
    openGraph: {
      title: template.seoTitle,
      description: template.seoDescription,
      url: `https://finecheck.co.uk/templates/${template.slug}`,
      type: "article",
    },
  };
}

const categoryConfig: Record<
  AppealTemplate["category"],
  { label: string; variant: "info" | "success" | "warning" | "accent" }
> = {
  operator: { label: "Operator", variant: "info" },
  council: { label: "Council", variant: "success" },
  defence: { label: "Defence", variant: "warning" },
  escalation: { label: "Escalation", variant: "accent" },
};

export default async function TemplateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  const cat = categoryConfig[template.category];

  const relatedTemplates = template.relatedTemplates
    .map((s) => TEMPLATES.find((t) => t.slug === s))
    .filter(Boolean) as AppealTemplate[];

  const faqItems = [
    {
      question: `Is this ${template.title.toLowerCase()} free to use?`,
      answer:
        "Yes, this template is completely free. Copy it, replace the placeholders with your details, and send it. No signup or payment required.",
    },
    {
      question: "How do I send this appeal letter?",
      answer:
        "Print the letter, sign it, and send it by recorded delivery (Royal Mail Signed For) to the address shown. Keep a copy of everything you send. Some operators also accept appeals by email or through an online portal.",
    },
    {
      question: "What if my appeal is rejected?",
      answer:
        template.category === "escalation"
          ? "If the independent appeals body (POPLA or IAS) rules against you, their decision is not legally binding on you, but the operator may continue to pursue the charge. At that point, you should consider whether to pay or seek legal advice."
          : "If the operator rejects your appeal, you can escalate to the independent appeals service (POPLA for BPA members, IAS for IPC members). This is free and their decision is binding on the operator. We have escalation templates available.",
    },
    {
      question:
        "Would a personalised letter be more effective than this template?",
      answer:
        "In most cases, yes. A personalised letter analyses your specific circumstances, references the exact legal grounds that apply to your case, and targets the known weaknesses of the specific operator. Generic templates cover common arguments, but a tailored letter is significantly stronger.",
    },
    {
      question: "How long do I have to send this appeal?",
      answer:
        "For private parking charges, you typically have 28 days from the date the charge was issued to appeal to the operator. For council PCNs, you should submit an informal challenge within 14 days to preserve the discounted payment option. Do not delay.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: template.seoTitle,
    description: template.seoDescription,
    author: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://finecheck.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://finecheck.co.uk",
    },
    mainEntityOfPage: `https://finecheck.co.uk/templates/${template.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
        <Container size="lg" className="py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { label: "Appeal Templates", href: "/templates" },
              {
                label: template.title,
                href: `/templates/${template.slug}`,
              },
            ]}
            className="mb-6"
          />
          <div className="max-w-3xl">
            <Badge variant={cat.variant} className="mb-3">
              {cat.label}
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {template.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {template.description}
            </p>
          </div>
        </Container>
      </section>

      <Container size="lg" className="py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* When to Use */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                When to Use This Template
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {template.whenToUse}
              </p>
            </section>

            {/* The Template */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Appeal Letter Template
                </h2>
                <CopyTemplateButton text={template.letterTemplate} />
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                <div className="bg-gray-100 border-b border-gray-200 px-5 py-3 flex items-center gap-2">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9Z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-600">
                    Appeal Letter
                  </span>
                  <span className="ml-auto text-xs text-gray-400">
                    Replace highlighted placeholders with your details
                  </span>
                </div>
                <TemplateRenderer text={template.letterTemplate} />
              </div>
            </section>

            {/* Instructions */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                How to Use This Template
              </h2>
              <ol className="space-y-3">
                {template.instructions.map((instruction, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-800 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="text-gray-600 leading-relaxed pt-0.5">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Tips */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Tips for a Stronger Appeal
              </h2>
              <div className="space-y-3">
                {template.tips.map((tip, i) => (
                  <div key={i} className="flex gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-amber-500 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 1a6 6 0 00-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 00.75.75h2.5a.75.75 0 00.75-.75v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0010 1zM8.863 17.414a.75.75 0 00-.226 1.483 9.066 9.066 0 002.726 0 .75.75 0 00-.226-1.483 7.563 7.563 0 01-2.274 0z" />
                    </svg>
                    <p className="text-gray-600 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Box */}
            <section className="rounded-xl bg-gradient-to-br from-blue-800 to-blue-900 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                This Is a Generic Template
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">
                Get a personalised letter that references your specific
                circumstances, the exact legal grounds for your case, and
                {template.operatorSlug
                  ? ` ${template.title.split(" ")[0]}-specific weaknesses`
                  : " operator-specific weaknesses"}
                . Personalised letters have a significantly higher success rate
                than generic templates. From just &pound;5.99.
              </p>
              <Button href="/appeal" variant="accent" size="lg">
                Get a Personalised Appeal Letter
              </Button>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Actions */}
            <Card padding="md">
              <h3 className="font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button
                  href="/appeal"
                  variant="accent"
                  size="md"
                  className="w-full"
                >
                  Get Personalised Letter
                </Button>
                <CopyTemplateButton
                  text={template.letterTemplate}
                  variant="sidebar"
                />
              </div>
            </Card>

            {/* Operator Link */}
            {template.operatorSlug && (
              <Card padding="md">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Operator Guide
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Read our detailed guide on appealing charges from this
                  operator, including known weaknesses and success rates.
                </p>
                <Button
                  href={`/appeals/${template.operatorSlug}`}
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  View Operator Guide
                </Button>
              </Card>
            )}

            {/* Related Templates */}
            {relatedTemplates.length > 0 && (
              <Card padding="md">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Related Templates
                </h3>
                <ul className="space-y-2">
                  {relatedTemplates.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/templates/${related.slug}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-800 transition-colors py-1"
                      >
                        <svg
                          className="h-3.5 w-3.5 shrink-0 text-gray-400"
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
                        {related.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Appeal Stats */}
            <Card padding="md" className="bg-blue-50 border-blue-100">
              <h3 className="font-semibold text-gray-900 mb-2">
                Did You Know?
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Over 10 million private parking charges are issued in the UK
                every year, but fewer than 3% are appealed. Of those that are
                appealed, around 40-50% are cancelled at the independent appeals
                stage. Many people pay fines they could have successfully
                challenged.
              </p>
            </Card>
          </aside>
        </div>
      </Container>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </Container>
      </section>
    </>
  );
}
