import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pricing | FineCheck",
  description:
    "Affordable parking fine appeal tools. Free assessment, professional appeal letters from £4.99, and full defence packages from £14.99. 30-day money-back guarantee.",
  alternates: {
    canonical: "https://finecheck.co.uk/pricing",
  },
};

const plans = [
  {
    name: "Free Assessment",
    price: "£0",
    priceNote: "always free",
    description:
      "Check if your parking fine has grounds for appeal. No payment required.",
    features: [
      "Instant fine validity check",
      "NtK timing analysis (private fines)",
      "Identify your appeal body (POPLA/IAS/Tribunal)",
      "Common grounds check for your operator or council",
      "Appeal strength rating (strong, moderate, weak)",
      "Step-by-step appeal guide",
    ],
    popular: false,
    buttonText: "Start Free Assessment",
    href: "/appeal",
  },
  {
    name: "Appeal Letter",
    price: "£4.99",
    priceNote: "one-time payment",
    description:
      "Get a professionally written appeal letter tailored to your specific case.",
    features: [
      "Everything in Free Assessment",
      "AI-generated personalised appeal letter",
      "Covers all relevant legal grounds",
      "Tailored to your specific operator or council",
      "References applicable legislation and case law",
      "Formatted for direct submission",
      "Includes appeal body escalation letter",
      "Unlimited revisions for 30 days",
    ],
    popular: true,
    buttonText: "Get Your Appeal Letter",
    href: "/appeal",
  },
  {
    name: "Full Defence Pack",
    price: "£14.99",
    priceNote: "one-time payment",
    description:
      "Complete appeal and defence package for complex cases and court threats.",
    features: [
      "Everything in Appeal Letter",
      "Multi-stage appeal letters (informal, formal, tribunal)",
      "Court defence document (if operator pursues court)",
      "Evidence checklist and collection guide",
      "Debt collector response templates",
      "Subject Access Request template",
      "Witness statement template",
      "Priority email support",
      "Lifetime access to your case documents",
    ],
    popular: false,
    buttonText: "Get Full Defence Pack",
    href: "/appeal",
  },
];

const comparisonFeatures = [
  { feature: "Instant fine validity check", free: true, letter: true, full: true },
  { feature: "NtK timing analysis", free: true, letter: true, full: true },
  { feature: "Appeal body identification", free: true, letter: true, full: true },
  { feature: "Common grounds check", free: true, letter: true, full: true },
  { feature: "Appeal strength rating", free: true, letter: true, full: true },
  { feature: "Step-by-step appeal guide", free: true, letter: true, full: true },
  { feature: "AI-personalised appeal letter", free: false, letter: true, full: true },
  { feature: "Legal grounds and case law references", free: false, letter: true, full: true },
  { feature: "Appeal body escalation letter", free: false, letter: true, full: true },
  { feature: "Unlimited revisions (30 days)", free: false, letter: true, full: true },
  { feature: "Multi-stage appeal letters", free: false, letter: false, full: true },
  { feature: "Court defence document", free: false, letter: false, full: true },
  { feature: "Debt collector response templates", free: false, letter: false, full: true },
  { feature: "Subject Access Request template", free: false, letter: false, full: true },
  { feature: "Witness statement template", free: false, letter: false, full: true },
  { feature: "Evidence checklist and guide", free: false, letter: false, full: true },
  { feature: "Priority email support", free: false, letter: false, full: true },
  { feature: "Lifetime document access", free: false, letter: false, full: true },
];

const faqItems = [
  {
    question: "Is the free assessment really free?",
    answer:
      "Yes, completely free with no strings attached. You can check your parking fine, see your appeal strength rating, and get a step-by-step guide without entering any payment details. You only pay if you want a professionally written appeal letter or full defence pack.",
  },
  {
    question: "What is included in the appeal letter?",
    answer:
      "The appeal letter is a professionally written, personalised document tailored to your specific parking fine. It covers all relevant legal grounds, references applicable legislation and case law (such as POFA 2012, Beavis v ParkingEye, or the relevant council enforcement regulations), and is formatted for direct submission to the operator or council. If your first appeal is rejected, you also get an escalation letter for the independent appeals body.",
  },
  {
    question: "When would I need the Full Defence Pack?",
    answer:
      "The Full Defence Pack is recommended if you are dealing with an operator that pursues court action (such as ParkingEye or UKPC), if you have received a Letter Before Claim, if you are getting aggressive debt collection letters, or if your case is complex and may go through multiple appeal stages. It includes court defence documents and templates for responding to debt collectors.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes. If you are not satisfied with the quality of your appeal letter or defence pack, contact us within 30 days for a full refund. We also refund your purchase if you discover that our assessment was incorrect about the grounds available for your case.",
  },
  {
    question: "How quickly will I receive my appeal letter?",
    answer:
      "Your appeal letter is generated instantly after you complete the assessment and make your purchase. You can download it immediately as a PDF or copy the text directly. If you need revisions, these are also processed within minutes.",
  },
  {
    question: "Can I use the letter for a tribunal appeal?",
    answer:
      "Yes. The Appeal Letter plan includes a letter suitable for the initial challenge to the operator or council, plus an escalation letter for the independent appeals body (POPLA, IAS, or the relevant tribunal). The Full Defence Pack includes separate letters optimised for each stage of the process.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "FineCheck provides legal information and document drafting tools, not regulated legal advice. Our tools are built on established UK parking law, tribunal decisions, and successful appeal strategies. For complex legal situations, particularly county court claims, we recommend consulting a solicitor alongside using our documents.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, American Express) through our secure payment processor, Stripe. Your payment details are never stored on our servers.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-green-600"
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
  );
}

function CrossIcon() {
  return (
    <svg
      className="h-5 w-5 text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[{ label: "Pricing", href: "/pricing" }]}
            className="mb-6"
          />

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Start with a free assessment. Only pay if you want a professionally
              written appeal letter or full defence pack. No subscriptions, no
              hidden fees.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border-2 bg-white p-8 ${
                  plan.popular
                    ? "border-amber-500 shadow-xl shadow-amber-100/50"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {plan.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    {plan.priceNote}
                  </span>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={plan.href}
                  variant={plan.popular ? "accent" : "primary"}
                  size="lg"
                  className="w-full justify-center"
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>

          {/* Money-back guarantee */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="rounded-full bg-green-200 p-2">
                  <svg
                    className="h-6 w-6 text-green-700"
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
              </div>
              <h3 className="text-lg font-semibold text-green-900">
                30-Day Money-Back Guarantee
              </h3>
              <p className="mt-2 text-sm text-green-700">
                Not satisfied with your appeal letter or defence pack? Get a full
                refund within 30 days, no questions asked. We also refund if our
                assessment turns out to be incorrect about the available grounds
                for your case.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-gray-50 py-12">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Feature Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 text-left text-sm font-semibold text-gray-900 pr-4">
                    Feature
                  </th>
                  <th className="py-3 text-center text-sm font-semibold text-gray-900 px-4 w-24">
                    Free
                  </th>
                  <th className="py-3 text-center text-sm font-semibold text-amber-600 px-4 w-24">
                    Letter
                    <br />
                    <span className="font-normal text-xs text-gray-500">
                      £4.99
                    </span>
                  </th>
                  <th className="py-3 text-center text-sm font-semibold text-gray-900 px-4 w-24">
                    Full Pack
                    <br />
                    <span className="font-normal text-xs text-gray-500">
                      £14.99
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="py-3 text-sm text-gray-700 pr-4">
                      {row.feature}
                    </td>
                    <td className="py-3 text-center">
                      {row.free ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className="py-3 text-center">
                      {row.letter ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className="py-3 text-center">
                      {row.full ? <CheckIcon /> : <CrossIcon />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Trust Signals */}
      <section className="py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                Secure Payments
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                All payments processed securely through Stripe
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                30-Day Guarantee
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Full refund if not satisfied with your documents
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                Based on UK Law
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Built on POFA 2012, case law, and tribunal decisions
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-6 w-6 text-blue-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                Instant Delivery
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Download your appeal letter immediately after purchase
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Pricing FAQ
          </h2>
          <FAQ items={faqItems} />
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-800 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Start With a Free Assessment
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Check your parking fine for free. No payment details required.
              Only pay if you want a professionally written appeal letter.
            </p>
            <div className="mt-6">
              <Button href="/appeal" variant="accent" size="lg">
                Check Your Fine For Free
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
