import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Appeal Letter Pricing: £5.99 Standard, £9.99 Premium",
  description:
    "Pay once per fine. Free assessment first. Standard letter £5.99, Premium pack £9.99. No subscription. Works for parking fines, bus lane PCNs, congestion charges and ULEZ penalties.",
  alternates: {
    canonical: "https://www.appealafine.co.uk/pricing",
  },
};

const plans = [
  {
    name: "Free Assessment",
    price: "£0",
    priceNote: "always free",
    description:
      "Check if your fine has grounds for appeal. No payment required.",
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
      "A unique legal letter written by our specialist AI, citing specific UK legislation and verified case law for your exact case.",
    features: [
      "Everything in Free Assessment",
      "Specialist AI-generated legal letter (not a template)",
      "Cites specific Acts of Parliament by section",
      "References verified case law (e.g. Beavis v ParkingEye)",
      "Tailored to your specific operator or council",
      "Professional PDF emailed to you",
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
      "Maximum chance of success. Two AI-generated legal letters, evidence checklist, and operator weakness analysis.",
    features: [
      "Everything in Standard Letter",
      "AI escalation letter for POPLA/IAS/Tribunal",
      "Personalised evidence checklist for your case",
      "Operator weakness analysis and strategy",
      "Second-stage appeal if first is rejected",
    ],
    popular: true,
    buttonText: "Get Premium Pack",
    href: "/appeal",
  },
];

const comparisonFeatures = [
  { feature: "Instant fine validity check", free: true, standard: true, premium: true },
  { feature: "NtK timing analysis (POFA 2012)", free: true, standard: true, premium: true },
  { feature: "Appeal body identification", free: true, standard: true, premium: true },
  { feature: "Legal grounds analysis", free: true, standard: true, premium: true },
  { feature: "Appeal strength rating", free: true, standard: true, premium: true },
  { feature: "Step-by-step appeal guide", free: true, standard: true, premium: true },
  { feature: "Specialist AI-written legal letter", free: false, standard: true, premium: true },
  { feature: "Specific legislation cited by section", free: false, standard: true, premium: true },
  { feature: "Verified case law references", free: false, standard: true, premium: true },
  { feature: "Professional PDF emailed to you", free: false, standard: true, premium: true },
  { feature: "AI escalation letter for POPLA/IAS/Tribunal", free: false, standard: false, premium: true },
  { feature: "Personalised evidence checklist", free: false, standard: false, premium: true },
  { feature: "Operator weakness analysis", free: false, standard: false, premium: true },
];

const faqItems = [
  {
    question: "Is the free assessment really free?",
    answer:
      "Yes, completely free with no strings attached. You can check your fine, see your appeal strength rating, and get a step-by-step guide without entering any payment details. You only pay if you want a professionally written appeal letter.",
  },
  {
    question: "What is included in the appeal letter?",
    answer:
      "The appeal letter is a professionally written, personalised document tailored to your specific fine. It covers all relevant legal grounds, references applicable legislation and case law (such as POFA 2012, Beavis v ParkingEye, or the relevant council enforcement regulations), and is formatted for direct submission to the operator or council. If your first appeal is rejected, you also get an escalation letter for the independent appeals body.",
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
      "AppealAFine provides legal information and document drafting tools, not regulated legal advice. Our tools are built on established UK parking law, tribunal decisions, and successful appeal strategies. For complex legal situations, particularly county court claims, we recommend consulting a solicitor alongside using our documents.",
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
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 font-medium text-green-700 ring-1 ring-green-200">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Free 60-second check first
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-700 ring-1 ring-slate-200">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-3.75 11.25h16.5a1.5 1.5 0 001.5-1.5V12a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 12v8.25a1.5 1.5 0 001.5 1.5z" /></svg>
                Stripe-secured payments
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-700 ring-1 ring-slate-200">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6z" /></svg>
                One-off payment, no subscription
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Guarantee strip */}
      <section className="bg-green-50 border-y border-green-100 py-6">
        <Container>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 text-center sm:text-left">
            <svg className="h-10 w-10 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <div className="max-w-2xl">
              <p className="text-base font-semibold text-green-900">Honest free check</p>
              <p className="text-sm text-green-800 mt-0.5">
                Free assessment first. If your fine has no defensible legal ground, we tell you and you pay nothing. We do not guarantee the outcome of your appeal because no service can — but you'll know your case strength before you spend a penny.
              </p>
            </div>
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

      {/* Sample Letter Preview */}
      <section className="bg-white py-12 sm:py-16 border-t border-gray-100">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700 ring-1 ring-teal-200">
                See exactly what you get
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                Sample appeal letter
              </h2>
              <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto">
                A real example of the letter we generate. Four substantive grounds, the
                exact statutes and case law that apply, formatted to print straight
                from your inbox.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Tailored to your case, not a template</p>
                      <p className="mt-0.5 text-sm text-gray-600">Operator, council, location, NtK timing, signage and your account of what happened are all woven into the letter.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Cites real statutes and case law correctly</p>
                      <p className="mt-0.5 text-sm text-gray-600">POFA 2012 Schedule 4, Consumer Rights Act 2015 s.62, the Private Parking Code of Practice 2024, ParkingEye v Beavis, Cavendish v Makdessi.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Professional PDF, ready to send</p>
                      <p className="mt-0.5 text-sm text-gray-600">Clean typography, signature block, footer reference. Print it or email it straight to the operator.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Plain text copy alongside</p>
                      <p className="mt-0.5 text-sm text-gray-600">Paste straight into the operator&apos;s appeal form or your own email if you prefer.</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/sample-appeal-letter.pdf"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download sample letter (PDF)
                  </a>
                  <Button href="/appeal" variant="secondary" size="lg">
                    Start your own appeal
                  </Button>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  3 pages, 12 KB · names and reference numbers fictional
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <a
                  href="/sample-appeal-letter.pdf"
                  target="_blank"
                  rel="noopener"
                  className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm transition-shadow hover:shadow-lg"
                  aria-label="Open sample appeal letter PDF in a new tab"
                >
                  <Image
                    src="/sample-letter-preview.png"
                    alt="First page of a sample AppealAFine appeal letter showing the addressee, reference, vehicle, date and location, with four numbered legal grounds."
                    width={1262}
                    height={1786}
                    priority={false}
                    className="block h-auto w-full"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-slate-900/85 via-slate-900/60 to-transparent py-4 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    Open full PDF
                  </span>
                </a>
              </div>
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
              Check your fine for free. No payment details required.
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
