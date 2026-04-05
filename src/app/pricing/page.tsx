import { Metadata } from "next";
import Container from "@/components/ui/Container";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Pricing | FineCheck",
  description:
    "Affordable parking fine appeal tools. Free assessment, standard appeal letters from £5.99, and premium appeal packs from £9.99.",
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
    name: "Standard Letter",
    price: "£5.99",
    priceNote: "one-time payment",
    description:
      "A personalised appeal letter using the correct legal grounds for your specific situation.",
    features: [
      "Everything in Free Assessment",
      "AI-generated personalised appeal letter",
      "Correct legal references and case law",
      "Tailored to your specific operator or council",
      "Formatted and ready to submit",
      "PDF download",
    ],
    popular: false,
    buttonText: "Get Standard Letter",
    href: "/appeal",
  },
  {
    name: "Premium Pack",
    price: "£9.99",
    priceNote: "one-time payment",
    description:
      "Everything in Standard, plus escalation support and operator-specific strategies.",
    features: [
      "Everything in Standard Letter",
      "Escalation letter if rejected",
      "Evidence collection checklist",
      "Operator-specific strategy guide",
      "Second-stage appeal template",
      "Second-stage appeal template",
    ],
    popular: true,
    buttonText: "Get Premium Pack",
    href: "/appeal",
  },
];

const comparisonFeatures = [
  { feature: "Instant fine validity check", free: true, standard: true, premium: true },
  { feature: "NtK timing analysis", free: true, standard: true, premium: true },
  { feature: "Appeal body identification", free: true, standard: true, premium: true },
  { feature: "Common grounds check", free: true, standard: true, premium: true },
  { feature: "Appeal strength rating", free: true, standard: true, premium: true },
  { feature: "Step-by-step appeal guide", free: true, standard: true, premium: true },
  { feature: "AI-personalised appeal letter", free: false, standard: true, premium: true },
  { feature: "Legal grounds and case law references", free: false, standard: true, premium: true },
  { feature: "Formatted for submission + PDF", free: false, standard: true, premium: true },
  { feature: "Escalation letter if rejected", free: false, standard: false, premium: true },
  { feature: "Evidence collection checklist", free: false, standard: false, premium: true },
  { feature: "Operator-specific strategy guide", free: false, standard: false, premium: true },
  { feature: "Second-stage appeal template", free: false, standard: false, premium: true },
  { feature: "Second-stage appeal template", free: false, standard: false, premium: true },
];

const faqItems = [
  {
    question: "Is the free assessment really free?",
    answer:
      "Yes, completely free with no strings attached. You can check your parking fine, see your appeal strength rating, and get a step-by-step guide without entering any payment details. You only pay if you want a professionally written appeal letter.",
  },
  {
    question: "What is included in the appeal letter?",
    answer:
      "The appeal letter is a professionally written, personalised document tailored to your specific parking fine. It covers all relevant legal grounds, references applicable legislation and case law (such as POFA 2012, Beavis v ParkingEye, or the relevant council enforcement regulations), and is formatted for direct submission to the operator or council. If your first appeal is rejected, you also get an escalation letter for the independent appeals body.",
  },
  {
    question: "What is the difference between Free Assessment and Appeal Letter?",
    answer:
      "The Free Assessment checks your fine, identifies legal grounds, and tells you your chances of success. The Appeal Letter includes everything in the Free Assessment, plus a professionally written personalised letter, escalation letter, evidence checklist, and operator-specific strategy guidance.",
  },
  {
    question: "How quickly will I receive my appeal letter?",
    answer:
      "Your appeal letter is generated instantly after you complete the assessment and make your purchase. You can download it immediately as a PDF or copy the text directly. If you need revisions, these are also processed within minutes.",
  },
  {
    question: "Can I use the letter for a tribunal appeal?",
    answer:
      "Yes. The Appeal Letter plan includes a letter suitable for the initial challenge to the operator or council, plus an escalation letter for the independent appeals body (POPLA, IAS, or the relevant tribunal).",
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
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16">
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
              written appeal letter. No subscriptions, no
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
                className={`relative flex flex-col rounded-2xl border bg-white p-8 ${
                  plan.popular
                    ? "border-teal-500 shadow-lg shadow-teal-50"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-teal-600 px-4 py-1 text-sm font-semibold text-white shadow-sm">
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
                  <th className="py-3 text-center text-sm font-semibold text-gray-900 px-4 w-24">
                    Standard
                    <br />
                    <span className="font-normal text-xs text-gray-500">
                      £5.99
                    </span>
                  </th>
                  <th className="py-3 text-center text-sm font-semibold text-teal-600 px-4 w-24">
                    Premium
                    <br />
                    <span className="font-normal text-xs text-gray-500">
                      £9.99
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
                      {row.standard ? <CheckIcon /> : <CrossIcon />}
                    </td>
                    <td className="py-3 text-center">
                      {row.premium ? <CheckIcon /> : <CrossIcon />}
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
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                <svg
                  className="h-6 w-6 text-teal-600"
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
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                <svg
                  className="h-6 w-6 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                Personalised Letters
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Tailored to your specific case and operator
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                <svg
                  className="h-6 w-6 text-teal-600"
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
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                <svg
                  className="h-6 w-6 text-teal-600"
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
      <section className="bg-slate-50 border-t border-slate-100 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Start With a Free Assessment
            </h2>
            <p className="mt-3 text-lg text-slate-500">
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
