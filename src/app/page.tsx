import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FAQ from "@/components/ui/FAQ";
import StatsCounter from "@/components/StatsCounter";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Appeal Your Fine in Minutes | FineCheck",
  description:
    "AI-powered fine appeal tool for UK drivers. Challenge parking fines, bus lane PCNs, congestion charges, ULEZ fines, and red route penalties. Free assessment, then a personalised appeal letter. 42-64% of appeals succeed at tribunal.",
  alternates: {
    canonical: "https://appealafine.co.uk",
  },
};

const statsForCounter = [
  { value: 33, suffix: "M+", label: "Fines issued in the UK each year" },
  { value: 40, suffix: "%", label: "Of drivers think their fine is unfair" },
  { value: 64, suffix: "%", label: "Appeal success rate at tribunal" },
  { value: 5, suffix: "%", prefix: "0.", label: "Of fines are formally appealed" },
];

const fineTypes = [
  {
    name: "Council PCN",
    description:
      "Penalty Charge Notices issued by local councils for on-street and council car park offences.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    name: "Private Parking Charge",
    description:
      "Charges from private operators like ParkingEye, UKPC, Excel, and others on private land.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "Bus Lane Fine",
    description:
      "PCNs for driving in bus lanes, typically caught by camera. Usually £60-130 depending on area.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    name: "Congestion Charge",
    description:
      "Penalty for not paying London's Congestion Charge. £160 if you miss the deadline.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    name: "ULEZ Fine",
    description:
      "Ultra Low Emission Zone penalties for non-compliant vehicles. £180 in London.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    name: "Red Route PCN",
    description:
      "Fines for stopping on red routes in London, issued by TfL. Usually £130-160.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
];

const faqItems = [
  {
    question: "Is this legal?",
    answer:
      "Absolutely. Every driver has the legal right to appeal a fine. FineCheck helps you exercise that right by preparing your appeal using established legal grounds. We reference the Traffic Management Act 2004, the Protection of Freedoms Act 2012, and relevant case law.",
  },
  {
    question: "How does the AI work?",
    answer:
      "Our AI analyses your fine details against UK law, operator-specific rules, and thousands of successful appeal cases. It identifies the strongest legal grounds for your specific situation and generates a professionally worded letter tailored to your circumstances.",
  },
  {
    question: "What if my appeal fails?",
    answer:
      "If your first appeal is rejected, Premium Pack customers receive an escalation letter for the next stage. For private fines, this means appealing to POPLA or the IAS. For council fines, you can take your case to the Traffic Penalty Tribunal.",
  },
  {
    question: "How quickly do I get my letter?",
    answer:
      "Your personalised appeal letter is generated within minutes of completing your assessment. You can download it immediately as a PDF, ready to send to the parking operator or council.",
  },
  {
    question: "Do you guarantee success?",
    answer:
      "No service can guarantee the outcome of an appeal, and we would never make that claim. What we can tell you is that 42-64% of appeals succeed at tribunal, and our free assessment gives you an honest evaluation of your chances before you spend anything.",
  },
  {
    question: "What types of fines can you help with?",
    answer:
      "We cover council PCNs, private parking charges (ParkingEye, UKPC, Excel, Horizon, and many more), bus lane fines, congestion charge penalties, ULEZ fines, and red route PCNs. Our system is designed to handle the full range of UK parking and driving penalties.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use industry-standard encryption for all data. Your personal details and fine information are stored securely and never shared with third parties. We comply fully with UK GDPR requirements.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "If you purchase a letter and we are unable to generate one for your situation, you will receive a full refund. Please see our Terms of Service for complete details on our refund policy.",
  },
];

const pricingPlans = [
  {
    name: "Standard Letter",
    price: "£5.99",
    description:
      "A personalised appeal letter using the correct legal grounds for your specific situation.",
    features: [
      "Personalised to your circumstances",
      "Correct legal references",
      "Formatted and ready to submit",
      "Deadline reminder included",
      "PDF download",
    ],
    popular: false,
    href: "/appeal",
  },
  {
    name: "Premium Pack",
    price: "£9.99",
    description:
      "Everything in Standard, plus escalation support and operator-specific strategies.",
    features: [
      "Everything in Standard",
      "Escalation letter if rejected",
      "Evidence collection checklist",
      "Operator-specific strategy guide",
      "Second-stage appeal template",
      "Second-stage appeal template",
    ],
    popular: true,
    href: "/appeal",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Appeal Your Fine{" "}
              <span className="text-teal-600">in Minutes</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-500 sm:text-xl">
              Our AI analyses your fine and generates a personalised
              appeal letter using the exact legal grounds most likely to succeed.
              Works for parking fines, bus lane PCNs, congestion charges, ULEZ
              penalties, and more. 42-64% of appeals are successful.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/appeal"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Start Your Free Assessment
                <svg
                  className="h-5 w-5"
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
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-8 py-4 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Check Your Rights
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg
                  className="h-5 w-5 text-teal-500"
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
                42-64% appeal success rate
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg
                  className="h-5 w-5 text-teal-500"
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
                25M+ fines issued yearly
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg
                  className="h-5 w-5 text-teal-500"
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
                Trusted by UK drivers
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Three simple steps from fine to appeal. No legal knowledge needed.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Tell Us About Your Fine
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Enter your fine details. We will identify whether it is a
                council or private fine and route you to the right process.
              </p>
              {/* Connector line (desktop only) */}
              <div className="absolute top-8 left-[calc(50%+48px)] hidden h-0.5 w-[calc(100%-96px)] bg-slate-200 md:block" />
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Get Your Free Assessment
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Our AI analyses your situation against UK law and tells
                you your chances of a successful appeal. Completely free.
              </p>
              <div className="absolute top-8 left-[calc(50%+48px)] hidden h-0.5 w-[calc(100%-96px)] bg-slate-200 md:block" />
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">
                Download Your Appeal Letter
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Get a personalised appeal letter with the correct legal grounds,
                formatted and ready to submit. From just £5.99.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/appeal"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700"
            >
              Start Now
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* ==================== STATISTICS BAR ==================== */}
      <StatsCounter stats={statsForCounter} />

      {/* ==================== FREE TOOLS ==================== */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Free Tools
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Check your rights and deadlines before you appeal. Always free.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* POFA Checker */}
            <Link
              href="/tools/pofa-checker"
              className="group relative rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-teal-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg
                  className="h-6 w-6"
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
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                POFA Compliance Checker
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Check if your private parking fine is legally valid. The 14-day
                Notice to Keeper rule invalidates thousands of fines every year.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600 group-hover:gap-2 transition-all">
                Check now
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>

            {/* Deadline Calculator */}
            <Link
              href="/tools/deadline-calculator"
              className="group relative rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-teal-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Deadline Calculator
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Know exactly when each deadline expires and what happens if you
                miss it. Never lose your right to appeal by acting too late.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600 group-hover:gap-2 transition-all">
                Calculate deadlines
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ==================== WHAT WE COVER ==================== */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Cover
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From council PCNs to private parking charges, we handle the full
              range of UK parking and driving fines.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fineTypes.map((type) => (
              <div
                key={type.name}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="text-teal-600">{type.icon}</div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {type.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================== PRICING ==================== */}
      <section className="py-20 sm:py-24 bg-gray-50" id="pricing">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Your free assessment tells you your chances first. Only pay if you
              want to proceed with an appeal letter.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            All prices include VAT. Secure payment via Stripe.
          </p>
        </Container>
      </section>

      {/* ==================== WHY FINECHECK ==================== */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why FineCheck
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Built specifically for UK parking and traffic law, not a generic
              template generator.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Built on UK parking law */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
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
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Built on UK Parking Law
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Every letter references the Traffic Management Act 2004, the
                Protection of Freedoms Act 2012, and the new Parking Code of
                Practice. Real legal grounds, not guesswork.
              </p>
            </div>

            {/* Personalised, not generic */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
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
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Personalised, Not Generic
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Every letter uses your specific circumstances and the legal
                grounds most relevant to your case. No copy-paste templates that
                operators have seen a thousand times.
              </p>
            </div>

            {/* Know before you pay */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Know Before You Pay
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Your free assessment tells you your chances of success before
                you spend anything. We believe you deserve honest information,
                not a sales pitch.
              </p>
            </div>

            {/* Operator intelligence */}
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
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
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Operator Intelligence
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Letters are tailored to the specific parking company or council
                involved. We know which arguments work best against each
                operator and adapt accordingly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container size="md">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about using FineCheck to appeal your
              fine.
            </p>
          </div>

          <div className="mt-12">
            <FAQ items={faqItems} />
          </div>
        </Container>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="bg-slate-50 border-t border-slate-100">
        <Container className="py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Don&apos;t Pay an Unfair Fine
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Join thousands of UK drivers who have successfully appealed their
              fines. Your free assessment takes just a few minutes.
            </p>
            <div className="mt-10">
              <Link
                href="/appeal"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Start Your Free Assessment
                <svg
                  className="h-5 w-5"
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
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
