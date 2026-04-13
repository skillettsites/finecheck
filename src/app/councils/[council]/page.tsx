import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { COUNCILS, getCouncilBySlug } from "@/data/councils";
import { Council } from "@/lib/types";

export function generateStaticParams() {
  return COUNCILS.map((c) => ({ council: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ council: string }>;
}): Promise<Metadata> {
  const { council: councilSlug } = await params;
  const council = getCouncilBySlug(councilSlug);
  if (!council) return { title: "Council Not Found" };

  return {
    title: council.seoTitle,
    description: council.seoDescription,
    alternates: {
      canonical: `https://appealafine.co.uk/councils/${council.slug}`,
    },
    openGraph: {
      title: council.seoTitle,
      description: council.seoDescription,
      url: `https://appealafine.co.uk/councils/${council.slug}`,
      type: "article",
    },
  };
}

function formatNumber(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${Math.round(n / 1000)}k`;
  return n.toString();
}

function formatCurrency(n: number): string {
  if (n >= 1000000) return `£${(n / 1000000).toFixed(0)}M`;
  if (n >= 1000) return `£${Math.round(n / 1000)}k`;
  return `£${n}`;
}

function getCouncilFAQs(council: Council) {
  const shortName = council.name.replace(/^(London Borough of |City of |Royal Borough of )/, "");

  return [
    {
      question: `How do I appeal a ${shortName} parking fine?`,
      answer: `You can appeal a ${shortName} parking fine in three stages. First, make an informal challenge within 14 days of receiving the PCN. If that is rejected and you receive a Notice to Owner, submit a formal representation within 28 days. If that is also rejected, you can appeal to ${council.tribunalBody} within 28 days. Each stage requires specific grounds and evidence.`,
    },
    {
      question: `What is the appeal success rate for ${shortName}?`,
      answer: council.appealSuccessRate
        ? `Based on available data, approximately ${council.appealSuccessRate}% of appeals against ${shortName} parking fines are successful at the tribunal stage. This is ${council.appealSuccessRate >= 45 ? "above" : "below"} the national average. Success rates tend to be higher for appeals based on procedural errors, unclear signage, or mitigating circumstances.`
        : `Specific success rate data is not currently available for ${shortName}. Nationally, council parking appeal success rates at tribunal range from 35% to 55% depending on the grounds of appeal.`,
    },
    {
      question: `How many parking fines does ${shortName} issue each year?`,
      answer: council.annualPCNs
        ? `${shortName} issues approximately ${formatNumber(council.annualPCNs)} Penalty Charge Notices per year. ${council.parkingSurplus ? `The council's parking operation generates a surplus of approximately ${formatCurrency(council.parkingSurplus)} annually, which by law must be spent on transport and environmental improvements.` : ""}`
        : `Specific PCN volume data is not currently available for ${shortName}.`,
    },
    {
      question: `What tribunal handles ${shortName} parking appeals?`,
      answer: `${shortName} parking appeals at the independent tribunal stage are handled by ${council.tribunalBody}${council.tribunalBody === "London Tribunals" ? " (formerly known as PATAS, the Parking and Traffic Appeals Service)" : " (Traffic Penalty Tribunal)"}. The tribunal is completely independent of the council. You can appeal online, by post, or in person. The tribunal's decision is binding on the council.`,
    },
    {
      question: `Can I get a 50% discount on a ${shortName} parking fine?`,
      answer: `Yes, most ${shortName} PCNs offer a 50% discount if you pay within 14 days. If you make an informal challenge within this period, the discount should be frozen while your challenge is being considered. If the challenge is rejected, you will usually be given another 14 days to pay at the discounted rate.`,
    },
    {
      question: `What are the common grounds for appealing a ${shortName} parking fine?`,
      answer: `Common grounds include: the PCN was not properly served or contains errors; the signs or road markings were missing, obscured, or unclear; you had a valid permit, ticket, or exemption; the vehicle had broken down; the penalty was incorrectly issued (wrong contravention code, wrong location); or there were mitigating circumstances that the council should consider.`,
    },
    {
      question: `What happens if I ignore a ${shortName} parking fine?`,
      answer: `If you do not pay or appeal, ${shortName} will escalate the charge through the enforcement process. You will receive a Notice to Owner, then a Charge Certificate (which increases the fine by 50%), and finally the debt may be registered at the Traffic Enforcement Centre. Enforcement agents (bailiffs) can then be sent to collect the debt, adding significant further costs. It is always better to appeal than to ignore a fine.`,
    },
  ];
}

export default async function CouncilPage({
  params,
}: {
  params: Promise<{ council: string }>;
}) {
  const { council: councilSlug } = await params;
  const council = getCouncilBySlug(councilSlug);
  if (!council) notFound();

  const shortName = council.name.replace(
    /^(London Borough of |City of |Royal Borough of )/,
    ""
  );
  const faqs = getCouncilFAQs(council);

  // Related councils: same region, or if London then other London boroughs
  const relatedCouncils = COUNCILS.filter(
    (c) =>
      c.slug !== council.slug &&
      (council.isLondon ? c.isLondon : c.region === council.region)
  ).slice(0, 6);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: council.seoTitle,
    description: council.seoDescription,
    publisher: {
      "@type": "Organization",
      name: "AppealAFine",
      url: "https://appealafine.co.uk",
    },
    mainEntityOfPage: `https://appealafine.co.uk/councils/${council.slug}`,
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
              { label: "Councils", href: "/councils" },
              { label: shortName, href: `/councils/${council.slug}` },
            ]}
            className="mb-6"
          />

          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Appeal a {shortName} Parking Fine
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                {council.name} uses civil parking enforcement to manage
                on-street and off-street parking.{" "}
                {council.annualPCNs
                  ? `They issue approximately ${formatNumber(council.annualPCNs)} Penalty Charge Notices each year. `
                  : ""}
                {council.appealSuccessRate
                  ? `Around ${council.appealSuccessRate}% of appeals at the tribunal stage are successful.`
                  : ""}
              </p>
            </div>

            {council.appealSuccessRate && (
              <div className="shrink-0">
                <div className="rounded-xl border-2 border-green-200 bg-green-50 px-6 py-4 text-center">
                  <p className="text-sm font-medium text-green-800">
                    Appeal Success Rate
                  </p>
                  <p className="text-4xl font-bold text-green-700">
                    {council.appealSuccessRate}%
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    at {council.tribunalBody}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Key Facts */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Facts About {shortName} Parking Enforcement
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <p className="text-sm text-gray-500">Region</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                {council.region}
              </p>
              {council.isLondon && (
                <Badge variant="info" className="mt-2">
                  London Borough
                </Badge>
              )}
            </Card>

            <Card>
              <p className="text-sm text-gray-500">Tribunal Body</p>
              <p className="text-lg font-semibold text-gray-900 mt-1">
                {council.tribunalBody}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {council.tribunalBody === "London Tribunals"
                  ? "Formerly PATAS"
                  : "Traffic Penalty Tribunal"}
              </p>
            </Card>

            {council.annualPCNs && (
              <Card>
                <p className="text-sm text-gray-500">Annual PCNs</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {council.annualPCNs.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Penalty Charge Notices per year
                </p>
              </Card>
            )}

            {council.appealSuccessRate && (
              <Card>
                <p className="text-sm text-gray-500">Appeal Success Rate</p>
                <p className="text-lg font-semibold text-green-700 mt-1">
                  {council.appealSuccessRate}%
                </p>
                <Badge
                  variant={
                    council.appealSuccessRate >= 45 ? "success" : "warning"
                  }
                  className="mt-2"
                >
                  {council.appealSuccessRate >= 45
                    ? "Above average"
                    : "Below average"}
                </Badge>
              </Card>
            )}

            {council.parkingSurplus && (
              <Card>
                <p className="text-sm text-gray-500">Parking Surplus</p>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {formatCurrency(council.parkingSurplus)}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Annual parking revenue surplus
                </p>
              </Card>
            )}

            <Card>
              <p className="text-sm text-gray-500">Enforcement Type</p>
              <p className="text-lg font-semibold text-gray-900 mt-1 capitalize">
                {council.enforcementType === "civil"
                  ? "Civil Enforcement"
                  : "Decriminalised Enforcement"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Parking contraventions are civil matters
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* How to Appeal */}
      <section className="bg-gray-50 py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How to Appeal a {shortName} Parking Fine
          </h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-teal-200 hidden sm:block" />

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative flex gap-4 sm:gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                  1
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-6 flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <h3 className="font-semibold text-gray-900">
                      Informal Challenge
                    </h3>
                    <Badge variant="accent">Within 14 days</Badge>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Submit an informal challenge to {council.name} as soon as
                    possible after receiving the PCN. Explain why you believe the
                    fine should be cancelled, and include any supporting evidence
                    such as photos, receipts, or medical documentation. During
                    this stage, your 50% early payment discount is preserved.
                  </p>
                  <div className="mt-3 rounded-lg bg-blue-50 p-3">
                    <p className="text-xs text-teal-700">
                      <strong>Tip:</strong> Even if you are not sure your
                      challenge will succeed, it costs nothing to try and
                      preserves your discount if you ultimately decide to pay.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-4 sm:gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                  2
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-6 flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <h3 className="font-semibold text-gray-900">
                      Formal Representation
                    </h3>
                    <Badge variant="accent">Within 28 days of NtO</Badge>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    If your informal challenge is rejected, {council.name} will
                    issue a Notice to Owner (NtO). You then have 28 days to
                    submit a formal representation. This must be based on one of
                    the statutory grounds of appeal. Include all evidence and be
                    specific about which ground applies to your case.
                  </p>
                  <div className="mt-3 rounded-lg bg-blue-50 p-3">
                    <p className="text-xs text-teal-700">
                      <strong>Key grounds include:</strong> procedural
                      impropriety, the contravention did not occur, the PCN has
                      been paid, the penalty exceeds the amount due, or the
                      vehicle was not in the location at the time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-4 sm:gap-6">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                  3
                </div>
                <div className="rounded-xl border border-gray-200 bg-white p-6 flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <h3 className="font-semibold text-gray-900">
                      Tribunal Appeal
                    </h3>
                    <Badge variant="accent">Within 28 days of rejection</Badge>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    If {council.name} rejects your formal representation, you
                    can appeal to {council.tribunalBody}. This is a free,
                    independent tribunal. You can submit your appeal online, and
                    most cases are decided on the paperwork without a hearing.
                    The tribunal&apos;s decision is final and binding on the
                    council. If you win, the PCN is cancelled.
                  </p>
                  <div className="mt-3 rounded-lg bg-green-50 p-3">
                    <p className="text-xs text-green-800">
                      <strong>Good news:</strong>{" "}
                      {council.appealSuccessRate
                        ? `${council.appealSuccessRate}% of appeals against ${shortName} succeed at this stage.`
                        : "Many appeals succeed at tribunal, especially those based on clear procedural failures."}{" "}
                      There is no cost to you, and no penalty if you lose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Your Rights */}
      <section className="py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Rights When Appealing to {shortName}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
              <div className="mt-0.5 shrink-0 rounded-full bg-green-100 p-1">
                <svg
                  className="h-4 w-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Right to challenge at every stage
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  You have three separate opportunities to challenge the PCN
                  before enforcement begins.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
              <div className="mt-0.5 shrink-0 rounded-full bg-green-100 p-1">
                <svg
                  className="h-4 w-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Discount protection during informal challenge
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Your 50% early payment discount should be preserved while the
                  council considers your informal challenge.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
              <div className="mt-0.5 shrink-0 rounded-full bg-green-100 p-1">
                <svg
                  className="h-4 w-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Free independent tribunal appeal
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Appealing to {council.tribunalBody} is completely free, and
                  there is no additional penalty if you lose.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
              <div className="mt-0.5 shrink-0 rounded-full bg-green-100 p-1">
                <svg
                  className="h-4 w-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Right to see evidence
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  You can request the council&apos;s evidence, including photos,
                  CEO notes, and CCTV footage, to support your appeal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
              <div className="mt-0.5 shrink-0 rounded-full bg-green-100 p-1">
                <svg
                  className="h-4 w-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Enforcement must follow due process
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  The council must follow strict procedural rules. Any failure
                  in the process can invalidate the entire PCN.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4">
              <div className="mt-0.5 shrink-0 rounded-full bg-green-100 p-1">
                <svg
                  className="h-4 w-4 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  No bailiffs until all appeals are exhausted
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Enforcement agents cannot be instructed while any appeal or
                  challenge is still in progress.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions About {shortName} Parking Fines
          </h2>
          <FAQ items={faqs} />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Appeal Your {shortName} Parking Fine Now
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Get a free assessment of your {shortName} PCN. Our tool checks
              the most common grounds for appeal and helps you build your
              strongest possible case.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/appeal" variant="accent" size="lg">
                Start Your Free Assessment
              </Button>
              {council.contactUrl && (
                <a
                  href={council.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  Visit {shortName} parking website
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
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Councils */}
      {relatedCouncils.length > 0 && (
        <section className="py-12">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Other {council.isLondon ? "London Boroughs" : `${council.region} Councils`}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCouncils.map((related) => (
                <Link
                  key={related.slug}
                  href={`/councils/${related.slug}`}
                >
                  <Card hover className="h-full">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {related.name}
                      </h3>
                      {related.appealSuccessRate && (
                        <Badge
                          variant={
                            related.appealSuccessRate >= 45
                              ? "success"
                              : "warning"
                          }
                        >
                          {related.appealSuccessRate}%
                        </Badge>
                      )}
                    </div>
                    {related.annualPCNs && (
                      <p className="mt-2 text-sm text-gray-500">
                        {formatNumber(related.annualPCNs)} PCNs/year
                      </p>
                    )}
                    <p className="mt-2 text-sm font-medium text-teal-600">
                      View appeal guide &rarr;
                    </p>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button href="/councils" variant="secondary">
                View All Councils
              </Button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
