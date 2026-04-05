import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import { SITUATIONS } from "@/data/situations";

export const metadata: Metadata = {
  title: "Parking Fine by Situation | Where Did You Get Your Fine?",
  description:
    "Find your specific parking fine situation and get expert appeal advice. Covers supermarkets, hospitals, retail parks, gyms, train stations, universities, airports, residential areas, schools, and hotels.",
  alternates: {
    canonical: "https://finecheck.co.uk/situations",
  },
};

const faqItems = [
  {
    question: "Does it matter where I got my parking fine?",
    answer:
      "Yes. The type of location affects your appeal grounds significantly. Hospital fines can be challenged on compassionate grounds. Supermarket fines often have grace period defences. University fines may not be enforceable at all. Understanding your specific situation helps you build the strongest possible appeal.",
  },
  {
    question: "Are private parking fines at supermarkets enforceable?",
    answer:
      "Private parking charges at supermarkets are technically enforceable as contractual claims. However, they have many common weaknesses including inadequate signage, failure to apply grace periods, ANPR errors, and late Notice to Keeper service. A well-prepared appeal has a good chance of success.",
  },
  {
    question: "Which parking situations have the highest appeal success rate?",
    answer:
      "Hospital parking fines and university parking fines tend to have high appeal success rates. Hospital fines benefit from compassionate grounds, while university-issued fines (as opposed to those from private operators on campus) are often not enforceable as commercial debts.",
  },
  {
    question: "Is a council parking fine the same as a private parking fine?",
    answer:
      "No. Council parking fines (PCNs) are issued under statutory powers and carry real consequences if ignored, including bailiff action. Private parking charges are contractual invoices. The appeal processes are completely different. Council fines go through formal representations and the Traffic Penalty Tribunal, while private charges go through POPLA or IAS.",
  },
];

const strengthColours: Record<string, string> = {
  strong: "text-green-700 bg-green-50 border-green-200",
  moderate: "text-amber-700 bg-amber-50 border-amber-200",
  weak: "text-red-700 bg-red-50 border-red-200",
};

export default function SituationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[{ label: "Situations", href: "/situations" }]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Parking Fine by Situation
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Where you received your parking fine matters. Different locations
              have different rules, common defences, and appeal success rates.
              Find your situation below and get specific advice for your type of
              charge.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-blue-800">
                {SITUATIONS.length}
              </p>
              <p className="text-sm text-gray-500">Situations Covered</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-blue-800">Free</p>
              <p className="text-sm text-gray-500">Appeal Guides</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-green-700">40-60%</p>
              <p className="text-sm text-gray-500">Avg Success Rate</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-blue-800">2 min</p>
              <p className="text-sm text-gray-500">Free Assessment</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Situation Cards */}
      <section className="py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SITUATIONS.map((situation) => (
              <Link
                key={situation.slug}
                href={`/situations/${situation.slug}`}
              >
                <Card hover className="h-full">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {situation.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {situation.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="accent">
                      {situation.typicalFineAmount}
                    </Badge>
                    <Badge variant="info">
                      {situation.commonDefences.length} defences
                    </Badge>
                  </div>

                  {/* Top defence */}
                  <div className="mt-4">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                      Strongest Defence
                    </p>
                    <p className="text-sm text-gray-700">
                      {situation.commonDefences.find((d) => d.strength === "strong")?.ground ||
                        situation.commonDefences[0].ground}
                    </p>
                  </div>

                  <div className="mt-4 text-sm font-medium text-blue-800">
                    View full guide &rarr;
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            How Your Situation Affects Your Appeal
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Every parking fine situation has unique characteristics that affect
            your appeal strategy. Here is why location matters.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <h3 className="font-semibold text-gray-900 mb-2">
                Private Parking Charges
              </h3>
              <p className="text-sm text-gray-600">
                Charges at supermarkets, retail parks, gyms, hospitals, airports,
                hotels, and universities are typically issued by private operators.
                These are contractual claims, not criminal fines. You can appeal to
                the operator and then to POPLA or IAS.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-gray-900 mb-2">
                Council Penalty Charge Notices
              </h3>
              <p className="text-sm text-gray-600">
                Charges for CPZ violations, yellow lines, and school keep-clear
                zones are council PCNs. These are statutory and carry real
                consequences. You appeal through informal challenge, formal
                representations, and the Traffic Penalty Tribunal.
              </p>
            </Card>
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
      <section className="bg-blue-800 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Appeal Your Parking Fine?
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Get a free assessment of your charge in under 2 minutes. Our tool
              checks for common defences based on your specific situation.
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
