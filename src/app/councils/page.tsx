import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { COUNCILS, getLondonCouncils } from "@/data/councils";

export const metadata: Metadata = {
  title: "Appeal Your Council Parking Fine | FineCheck",
  description:
    "Find your council and learn how to appeal your parking fine. Covers all major UK councils including London boroughs, major cities, and regional authorities. Free appeal guides and success rates.",
  alternates: {
    canonical: "https://appealafine.co.uk/councils",
  },
};

const faqItems = [
  {
    question: "What is the difference between a council PCN and a private parking charge?",
    answer:
      "A council Penalty Charge Notice (PCN) is issued under statutory authority by local councils or their agents. It is a civil penalty backed by law, not a criminal fine. Private parking charges are contractual invoices issued by private companies on private land. Council PCNs generally carry stronger enforcement powers, including the ability to register unpaid charges as debt at the Traffic Enforcement Centre.",
  },
  {
    question: "How long do I have to appeal a council parking fine?",
    answer:
      "You have 14 days from the date of issue to make an informal challenge. If you pay within this period (and your challenge is unsuccessful), you usually get a 50% discount. If the informal challenge is rejected and you receive a Notice to Owner (NtO), you have 28 days to make a formal representation. If that is also rejected, you have a further 28 days to appeal to the independent tribunal.",
  },
  {
    question: "What is the difference between London Tribunals and TPT?",
    answer:
      "London Tribunals (formerly PATAS) handles appeals against London borough parking fines, while the Traffic Penalty Tribunal (TPT) handles appeals for councils outside London, as well as bus lane and moving traffic offences across England and Wales. Both are independent bodies whose decisions are binding on the council.",
  },
  {
    question: "Will I lose my 50% discount if I appeal?",
    answer:
      "If you make an informal challenge within the first 14 days, most councils will freeze the discount period. If your challenge is rejected, they should give you another 14 days to pay at the discounted rate. However, the exact rules vary by council, so check the wording on your PCN carefully.",
  },
  {
    question: "What happens if I do not pay a council parking fine?",
    answer:
      "If you do not pay or appeal, the council will issue a Notice to Owner (NtO), then a Charge Certificate (which increases the amount by 50%), and finally register the debt at the Traffic Enforcement Centre. Bailiffs (enforcement agents) may then be instructed to collect the debt, which adds significant further costs.",
  },
  {
    question: "Can I appeal a council parking fine online?",
    answer:
      "Most councils now offer online informal challenge and formal representation processes. Tribunal appeals to London Tribunals and TPT can also be submitted online. The online process is usually quicker than writing a letter, and you can upload evidence directly.",
  },
];

function formatNumber(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return n.toString();
}

function formatCurrency(n: number): string {
  if (n >= 1000000) return `£${(n / 1000000).toFixed(0)}M`;
  if (n >= 1000) return `£${(n / 1000).toFixed(0)}k`;
  return `£${n}`;
}

export default function CouncilsIndexPage() {
  const londonCouncils = getLondonCouncils();

  // Get unique regions excluding London
  const regions = [
    ...new Set(
      COUNCILS.filter((c) => !c.isLondon).map((c) => c.region)
    ),
  ].sort();

  const councilsByRegion = regions.map((region) => ({
    region,
    councils: COUNCILS.filter(
      (c) => c.region === region && !c.isLondon
    ),
  }));

  // Stats
  const totalPCNs = COUNCILS.reduce(
    (sum, c) => sum + (c.annualPCNs || 0),
    0
  );
  const totalSurplus = COUNCILS.reduce(
    (sum, c) => sum + (c.parkingSurplus || 0),
    0
  );
  const avgSuccessRate = Math.round(
    COUNCILS.reduce((sum, c) => sum + (c.appealSuccessRate || 0), 0) /
      COUNCILS.filter((c) => c.appealSuccessRate).length
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[{ label: "Councils", href: "/councils" }]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Appeal Your Council Parking Fine
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Council parking fines (PCNs) are the most common type of parking
              penalty in the UK. Each council has different enforcement
              practices, appeal success rates, and local rules. Find your council
              below to see exactly how to challenge your fine.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-teal-600">
                {COUNCILS.length}
              </p>
              <p className="text-sm text-gray-500">Councils Covered</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-teal-600">
                {formatNumber(totalPCNs)}
              </p>
              <p className="text-sm text-gray-500">Annual PCNs Issued</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-teal-600">
                {formatCurrency(totalSurplus)}
              </p>
              <p className="text-sm text-gray-500">Total Parking Surplus</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-green-700">
                {avgSuccessRate}%
              </p>
              <p className="text-sm text-gray-500">Avg Appeal Success</p>
            </div>
          </div>
        </Container>
      </section>

      {/* London Boroughs */}
      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            London Boroughs
          </h2>
          <p className="text-gray-600 mb-6">
            London boroughs issue more parking fines per capita than anywhere
            else in the UK. Appeals go to London Tribunals (formerly PATAS).
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {londonCouncils.map((council) => (
              <Link
                key={council.slug}
                href={`/councils/${council.slug}`}
              >
                <Card hover className="h-full">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-gray-900">
                      {council.name}
                    </h3>
                    {council.appealSuccessRate && (
                      <Badge
                        variant={
                          council.appealSuccessRate >= 45
                            ? "success"
                            : "warning"
                        }
                      >
                        {council.appealSuccessRate}% success
                      </Badge>
                    )}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                    {council.annualPCNs && (
                      <span>
                        {formatNumber(council.annualPCNs)} PCNs/year
                      </span>
                    )}
                    <span>{council.tribunalBody}</span>
                  </div>

                  {council.parkingSurplus && (
                    <p className="mt-2 text-xs text-gray-400">
                      Parking surplus: {formatCurrency(council.parkingSurplus)}
                    </p>
                  )}

                  <p className="mt-3 text-sm font-medium text-teal-600">
                    View appeal guide &rarr;
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Councils by Region */}
      {councilsByRegion.map(({ region, councils }) => (
        <section key={region} className="py-8">
          <Container>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {region}
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {councils.map((council) => (
                <Link
                  key={council.slug}
                  href={`/councils/${council.slug}`}
                >
                  <Card hover className="h-full">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-gray-900">
                        {council.name}
                      </h3>
                      {council.appealSuccessRate && (
                        <Badge
                          variant={
                            council.appealSuccessRate >= 45
                              ? "success"
                              : "warning"
                          }
                        >
                          {council.appealSuccessRate}% success
                        </Badge>
                      )}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                      {council.annualPCNs && (
                        <span>
                          {formatNumber(council.annualPCNs)} PCNs/year
                        </span>
                      )}
                      <span>{council.tribunalBody}</span>
                    </div>

                    {council.parkingSurplus && (
                      <p className="mt-2 text-xs text-gray-400">
                        Parking surplus:{" "}
                        {formatCurrency(council.parkingSurplus)}
                      </p>
                    )}

                    <p className="mt-3 text-sm font-medium text-teal-600">
                      View appeal guide &rarr;
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ))}

      {/* How Council Appeals Work */}
      <section className="bg-gray-50 py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            How Council Parking Appeals Work
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Council parking fines follow a strict legal process with clear
            deadlines. Understanding each stage gives you the best chance of a
            successful outcome.
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Informal Challenge (within 14 days)
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Your first opportunity to challenge the PCN. Write to the
                  council explaining why the fine should be cancelled. Your 50%
                  early payment discount is preserved during this stage.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Notice to Owner (NtO)
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  If you do not pay or your informal challenge is rejected, the
                  council sends a Notice to Owner. This is a formal document
                  that triggers the next stage of the process.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Formal Representation (within 28 days of NtO)
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  You have 28 days from the date of the NtO to submit a formal
                  representation. This must be based on one of the statutory
                  grounds of appeal set out in the legislation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Tribunal Appeal (within 28 days of rejection)
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  If the council rejects your formal representation, you can
                  appeal to the independent tribunal (London Tribunals for
                  London, TPT for the rest of England and Wales). The
                  tribunal&apos;s decision is binding on the council.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Appeal Your Council Parking Fine?
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Get a free assessment of your PCN in minutes. Our tool checks the
              most common grounds for appeal, including procedural errors,
              signage issues, and mitigating circumstances.
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
