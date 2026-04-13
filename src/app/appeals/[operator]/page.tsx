import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { OPERATORS, getOperatorBySlug } from "@/data/operators";
import { Operator } from "@/lib/types";

export function generateStaticParams() {
  return OPERATORS.map((op) => ({ operator: op.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ operator: string }>;
}): Promise<Metadata> {
  const { operator } = await params;
  const op = getOperatorBySlug(operator);
  if (!op) return { title: "Operator Not Found" };

  return {
    title: op.seoTitle,
    description: op.seoDescription,
    alternates: {
      canonical: `https://appealafine.co.uk/appeals/${op.slug}`,
    },
    openGraph: {
      title: op.seoTitle,
      description: op.seoDescription,
      url: `https://appealafine.co.uk/appeals/${op.slug}`,
      type: "article",
    },
  };
}

function getOperatorFAQs(op: Operator) {
  const faqs = [
    {
      question: `Will ${op.name} take me to court?`,
      answer: op.pursuesToCourt
        ? `Yes, ${op.name} is one of the private operators that does pursue unpaid charges through the County Court. However, they do not take every case to court, and many drivers successfully defend themselves. If you receive a court claim, you should respond within the deadline and consider seeking legal advice.`
        : `${op.name} does not typically pursue unpaid charges through the courts. While they may send threatening letters and use debt collection agencies, the vast majority of cases are not taken further. This does not mean you should ignore the charge, but it does reduce the risk of not paying.`,
    },
    {
      question: `What is ${op.name}'s appeal success rate?`,
      answer: `Based on available data, appeals against ${op.name} have an approximate success rate of ${op.averageSuccessRate}% at the independent appeals stage (${op.appealBody}). Success rates are higher when appeals are based on procedural failures such as late NtK service, inadequate signage, or ANPR evidence errors.`,
    },
    {
      question: `How do I appeal a ${op.name} fine?`,
      answer: `First, appeal directly to ${op.name} within 28 days of receiving the charge. Include your grounds for appeal (signage issues, NtK timing, ANPR errors, etc.) with any supporting evidence. If ${op.name} rejects your appeal, you have 28 days to escalate to ${op.appealBody}, the independent appeals service for ${op.tradeBody} members.`,
    },
    {
      question: `Does ${op.name} use ANPR cameras?`,
      answer: op.usesANPR
        ? `Yes, ${op.name} uses Automatic Number Plate Recognition (ANPR) cameras at many of their sites. ANPR evidence can be challenged if the images are unclear, if the cameras were poorly maintained, or if entry/exit times are inaccurate. You can request ANPR evidence through a Subject Access Request.`
        : `${op.name} primarily uses manual enforcement rather than ANPR cameras. This means a warden would have issued the ticket, and the evidence will be based on their observations and photographs rather than automated camera data.`,
    },
    {
      question: `What trade body does ${op.name} belong to?`,
      answer: `${op.name} is a member of the ${op.tradeBody === "BPA" ? "British Parking Association (BPA)" : "International Parking Community (IPC)"}. This means they must follow the ${op.tradeBody} Code of Practice and use ${op.appealBody} as their independent appeals service. If they breach the Code of Practice, this can strengthen your appeal.`,
    },
    {
      question: `Can I ignore a ${op.name} parking charge?`,
      answer: op.pursuesToCourt
        ? `We do not recommend ignoring a ${op.name} charge, as they are one of the operators known to pursue unpaid charges through the County Court. Instead, check whether the charge is valid and consider appealing if you have grounds.`
        : `While ${op.name} rarely takes cases to court, ignoring the charge is not recommended. It is better to check if the charge is valid and appeal if you have grounds. This creates a paper trail and protects your position if the situation escalates.`,
    },
    {
      question: `What happens if ${op.appealBody} rejects my appeal against ${op.name}?`,
      answer: `If ${op.appealBody} rejects your appeal, the decision is not binding on you as the motorist. You are not legally required to pay based on the ${op.appealBody} decision alone. However, ${op.name} may continue to pursue the charge through debt collection or, in some cases, the County Court. At that point, you would need to decide whether to pay or defend the claim.`,
    },
  ];

  return faqs;
}

function getAppealSteps(op: Operator) {
  return [
    {
      step: 1,
      title: "Check the Notice to Keeper (NtK) timing",
      description: `Under the Protection of Freedoms Act 2012, ${op.name} must send the NtK to the registered keeper within 14 days of the alleged contravention (if the driver was not given a ticket at the time). Check the date on the NtK against the date of the alleged offence. If it was served late, this is one of the strongest grounds for appeal.`,
    },
    {
      step: 2,
      title: "Review the signage",
      description: `${op.name} must display clear, prominent signage at the entrance to the car park and throughout the site. The signage must include the terms and conditions, the charge amount, and how to pay. If the signs were obscured, damaged, missing, or not visible from where you parked, take photos and use this as evidence in your appeal.`,
    },
    {
      step: 3,
      title: "Check the charge amount",
      description: `The parking charge must be a genuine pre-estimate of loss, not a penalty. Under the ${op.tradeBody} Code of Practice, charges must be proportionate. If the charge seems excessive for the type of contravention (for example, a large charge for a minor overstay), this can be challenged.`,
    },
    {
      step: 4,
      title: `Submit your appeal to ${op.name}`,
      description: `Write a clear, factual appeal letter to ${op.name} within 28 days of receiving the charge. State your grounds for appeal, attach any evidence (photos of signage, timestamps, payment receipts), and keep a copy of everything. Be firm but polite. The charge should be frozen while your appeal is being considered.`,
    },
    {
      step: 5,
      title: `If rejected, escalate to ${op.appealBody}`,
      description: `If ${op.name} rejects your appeal, they must provide you with a code to appeal to ${op.appealBody} (${op.appealBody === "POPLA" ? "Parking on Private Land Appeals" : "Independent Appeals Service"}). You have 28 days from rejection to submit your ${op.appealBody} appeal. Include all evidence and clearly explain why the charge should be cancelled. ${op.appealBody} decisions are binding on ${op.name} but not on you.`,
    },
  ];
}

export default async function OperatorPage({
  params,
}: {
  params: Promise<{ operator: string }>;
}) {
  const { operator } = await params;
  const op = getOperatorBySlug(operator);
  if (!op) notFound();

  const faqs = getOperatorFAQs(op);
  const steps = getAppealSteps(op);

  const relatedOperators = OPERATORS.filter(
    (o) => o.tradeBody === op.tradeBody && o.slug !== op.slug
  ).slice(0, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: op.seoTitle,
    description: op.seoDescription,
    publisher: {
      "@type": "Organization",
      name: "AppealAFine",
      url: "https://appealafine.co.uk",
    },
    mainEntityOfPage: `https://appealafine.co.uk/appeals/${op.slug}`,
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
              { label: op.name, href: `/appeals/${op.slug}` },
            ]}
            className="mb-6"
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Appeal a {op.name} Parking Fine
              </h1>
              <p className="mt-4 text-lg text-gray-600">{op.description}</p>
            </div>

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
          </div>
        </Container>
      </section>

      {/* Key Facts */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Facts About {op.name}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <p className="text-sm text-gray-500">Trade Body</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                {op.tradeBody === "BPA"
                  ? "British Parking Association"
                  : "International Parking Community"}
              </p>
              <Badge variant="info" className="mt-2">
                {op.tradeBody}
              </Badge>
            </Card>

            <Card>
              <p className="text-sm text-gray-500">Appeal Body</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                {op.appealBody === "POPLA"
                  ? "POPLA"
                  : "IAS"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {op.appealBody === "POPLA"
                  ? "Parking on Private Land Appeals"
                  : "Independent Appeals Service"}
              </p>
            </Card>

            <Card>
              <p className="text-sm text-gray-500">Uses ANPR</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                {op.usesANPR ? "Yes" : "No"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {op.usesANPR
                  ? "Automatic Number Plate Recognition cameras"
                  : "Manual enforcement only"}
              </p>
            </Card>

            <Card>
              <p className="text-sm text-gray-500">Pursues Court Action</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                {op.pursuesToCourt ? "Yes" : "No"}
              </p>
              <Badge
                variant={op.pursuesToCourt ? "danger" : "success"}
                className="mt-2"
              >
                {op.pursuesToCourt ? "Higher risk" : "Lower risk"}
              </Badge>
            </Card>
          </div>
        </Container>
      </section>

      {/* Common Issues */}
      <section className="bg-gray-50 py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Issues With {op.name}
          </h2>
          <p className="text-gray-600 mb-6">
            These are the most frequently reported problems that drivers
            experience with {op.name}. If any of these apply to your situation,
            they could form the basis of a strong appeal.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {op.commonIssues.map((issue, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <div className="mt-0.5 shrink-0 rounded-full bg-red-100 p-1">
                  <svg
                    className="h-4 w-4 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">{issue}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Known Weaknesses */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Known Weaknesses in {op.name} Enforcement
          </h2>
          <p className="text-gray-600 mb-6">
            These are documented legal and procedural weaknesses in{" "}
            {op.name}&apos;s enforcement process. These weaknesses can
            significantly strengthen your appeal.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {op.knownWeaknesses.map((weakness, i) => (
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-700">{weakness}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Step-by-Step Guide */}
      <section className="bg-gray-50 py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How to Appeal a {op.name} Fine
          </h2>

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Court Action Section */}
      {op.pursuesToCourt && (
        <section className="py-12">
          <Container size="md">
            <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-full bg-amber-200 p-2">
                  <svg
                    className="h-6 w-6 text-amber-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    What Happens if {op.name} Takes You to Court
                  </h2>
                  <div className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
                    <p>
                      {op.name} is one of the few private parking operators that
                      regularly pursues unpaid charges through the County Court.
                      If you receive a Letter Before Claim (LBC) or a County
                      Court claim form, take it seriously.
                    </p>
                    <p>
                      <strong>Key points about court claims from {op.name}:</strong>
                    </p>
                    <ul className="ml-4 list-disc space-y-2">
                      <li>
                        The claim is a civil matter, not criminal. You will not
                        receive a criminal record regardless of the outcome.
                      </li>
                      <li>
                        You have 14 days to acknowledge the claim and 28 days to
                        file your defence after receiving the claim form.
                      </li>
                      <li>
                        Do not ignore a court claim. Failing to respond will
                        result in a default County Court Judgment (CCJ), which
                        will damage your credit rating for six years.
                      </li>
                      <li>
                        Many of the same grounds that apply at appeal (NtK
                        timing, signage, ANPR errors) also apply as a defence in
                        court.
                      </li>
                      <li>
                        Court claims are typically for the original charge plus
                        court fees and interest. If you lose, costs are usually
                        limited because these are small claims.
                      </li>
                      <li>
                        Consider using FineCheck to generate a comprehensive
                        defence document if you are facing a court claim.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className={op.pursuesToCourt ? "bg-gray-50 py-12" : "py-12"}>
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions About {op.name}
          </h2>
          <FAQ items={faqs} />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Appeal Your {op.name} Fine Now
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Get a free assessment of your {op.name} charge. Our tool checks
              the NtK timing, signage requirements, and other common grounds to
              build your strongest possible appeal.
            </p>
            <div className="mt-6">
              <Button href="/appeal" variant="accent" size="lg">
                Start Your Free Assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Operators */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other {op.tradeBody} Operators
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedOperators.map((related) => (
              <Link key={related.slug} href={`/appeals/${related.slug}`}>
                <Card hover className="h-full">
                  <h3 className="font-semibold text-gray-900">
                    {related.name}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge
                      variant={
                        related.averageSuccessRate >= 50
                          ? "success"
                          : "warning"
                      }
                    >
                      {related.averageSuccessRate}% success
                    </Badge>
                    <Badge variant="default">
                      {related.appealBody}
                    </Badge>
                  </div>
                  <p className="mt-2 text-sm text-teal-600 font-medium">
                    View guide &rarr;
                  </p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button href="/appeals" variant="secondary">
              View All Operators
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
