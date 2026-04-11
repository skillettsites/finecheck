import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FAQ from "@/components/ui/FAQ";
import StatsCounter from "@/components/StatsCounter";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Appeal Your Fine in Minutes | FineCheck",
  description:
    "AI-powered fine appeal tool for UK drivers. Challenge parking fines, bus lane PCNs, congestion charges, ULEZ fines, and red route penalties. Free assessment, then a personalised appeal letter. 55-80% of appeals succeed at tribunal.",
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
      "No service can guarantee the outcome of an appeal, and we would never make that claim. What we can tell you is that 55-80% of appeals succeed at tribunal, and our free assessment gives you an honest evaluation of your chances before you spend anything.",
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
      "A unique appeal letter written by our specialist AI, citing the exact legislation and case law relevant to your fine.",
    features: [
      "AI-generated legal letter (not a template)",
      "Cites specific Acts of Parliament",
      "References verified case law",
      "Tailored to your operator or council",
      "Professional PDF delivered by email",
    ],
    popular: false,
    href: "/appeal",
  },
  {
    name: "Premium Pack",
    price: "£9.99",
    description:
      "Everything in Standard, plus an escalation letter, evidence checklist, and operator-specific strategy for maximum success.",
    features: [
      "Everything in Standard",
      "Escalation letter for POPLA/IAS/tribunal",
      "Personalised evidence checklist",
      "Operator weakness analysis",
      "Second-stage appeal if first is rejected",
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
              Our specialist legal AI has been trained on every aspect of UK
              parking law: the Traffic Management Act 2004, POFA 2012,
              the Private Parking Code of Practice, and thousands of
              tribunal decisions. It writes you a professional appeal letter
              that cites the exact legislation and case law your fine violates.
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
                Cites real UK legislation
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
                55-80% appeal success rate
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
                Professional PDF delivered by email
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
                Get Your Legal Letter
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Our AI writes a professional appeal letter citing specific Acts of
                Parliament, case law, and Codes of Practice. Delivered as a PDF
                to your email. From just £5.99.
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

      {/* ==================== WHAT'S IN YOUR LETTER ==================== */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700 mb-4">
              Specialist Legal AI
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Not a Template. A Legal Document.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI has been specifically trained on UK parking and traffic law,
              including every relevant Act of Parliament, Code of Practice,
              tribunal ruling, and operator-specific tactic. It does not give
              generic advice. It writes a formal legal letter tailored to your
              exact situation, the same way a parking law solicitor would.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            {/* Sample letter preview */}
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              {/* Left: What the letter contains */}
              <div className="space-y-6">
                {[
                  {
                    title: "Specific Legislation by Section",
                    desc: "Cites the Traffic Management Act 2004, Protection of Freedoms Act 2012 (Schedule 4, Paragraph 9), the Consumer Rights Act 2015, and the Private Parking Code of Practice. Every reference is accurate and verifiable.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    ),
                  },
                  {
                    title: "Verified Case Law",
                    desc: "Cites ParkingEye Ltd v Beavis [2015] UKSC 67 and other Supreme Court and tribunal precedents. Our AI only uses real, verified case references that adjudicators recognise. Generic AI tools cannot guarantee this.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Operator-Specific Intelligence",
                    desc: "Our AI knows the track record, weaknesses, and appeal patterns of ParkingEye, UKPC, APCOA, NCP, and 70+ other operators. It uses arguments that have worked against your specific operator at POPLA and IAS.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "POFA Compliance Check",
                    desc: "Automatically checks whether the Notice to Keeper was served within the 14-day statutory deadline. If it was late, your letter argues that keeper liability does not apply.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Professional Format",
                    desc: "Delivered as a professionally formatted PDF, ready to print or email. Includes your case reference, vehicle details, and a formal structure that councils and operators take seriously.",
                    icon: (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Sample letter snippet */}
              <div className="rounded-xl border-2 border-gray-200 bg-white shadow-lg overflow-hidden">
                <div className="bg-slate-900 px-5 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-slate-400 ml-2">appeal-letter.pdf</span>
                </div>
                <div className="p-6 text-sm text-gray-700 leading-relaxed font-serif space-y-3">
                  <p className="text-xs text-gray-400 border-b pb-2 mb-3 font-sans">Sample extract from a generated letter:</p>
                  <p>[Your Name]<br />[Your Address]</p>
                  <p>10 April 2026</p>
                  <p><strong>ParkingEye Limited</strong><br />Parking Appeals Department</p>
                  <p><strong>RE: Parking Charge Notice</strong><br />Vehicle: AB12 CDE<br />Location: Aldi, High Street, Reading<br />Date: 5 April 2026</p>
                  <p>Dear Sir/Madam,</p>
                  <p>I am writing to formally challenge the above parking charge on the following grounds.</p>
                  <p><strong>1. Failure to comply with the Protection of Freedoms Act 2012, Schedule 4, Paragraph 9</strong></p>
                  <p>The Notice to Keeper was received on 8 April 2026, which is 3 days after the alleged contravention. While this falls within the 14-day statutory period, the notice fails to contain the prescribed wording required under POFA 2012...</p>
                  <p className="text-teal-600 font-sans text-xs font-semibold mt-4 pt-3 border-t">
                    Each letter continues for 1-2 pages with specific legal arguments tailored to your case.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/appeal"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-sm transition-all hover:bg-teal-700"
            >
              Get Your Legal Letter
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="mt-3 text-sm text-gray-500">Free assessment first. Only pay if you want the letter.</p>
          </div>
        </Container>
      </section>

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
              Why a Specialist Tool Matters
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Generic AI tools do not understand the nuances of UK parking law.
              Our AI was built specifically for this purpose, and it shows in
              every letter.
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
                Trained on UK Parking Law
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Our AI has been trained on every relevant statute, regulation,
                and Code of Practice. It knows the difference between a council
                PCN and a private charge notice, and it applies the right law
                to each. A generic chatbot cannot do this reliably.
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
                Written for Your Exact Case
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Your letter is generated from scratch using your specific
                circumstances, dates, operator, and location. Operators and
                councils can spot generic templates immediately. Our letters
                are unique to each case.
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
                Knows Every Operator
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Our system knows the appeal track record, enforcement patterns,
                and known weaknesses of over 70 private parking operators and
                every UK council. It selects arguments that have succeeded
                against your specific operator at independent appeal.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== POPULAR APPEALS ==================== */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Appeal Guides
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find specific help for your situation, operator, or location.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "ParkingEye Appeal", href: "/appeals/parkingeye", desc: "The UK's largest private operator. ANPR cameras, supermarkets, retail parks." },
              { title: "UKPC Appeal", href: "/appeals/ukpc", desc: "Known for hospitals and shopping centres. IPC member, appeals to IAS." },
              { title: "Supermarket Fine", href: "/situations/supermarket-parking-fine", desc: "Aldi, Lidl, Tesco, Morrisons. Most have 90min to 2hr limits." },
              { title: "Hospital Fine", href: "/situations/hospital-parking-fine", desc: "Patient or visitor? Strong grounds if appointment ran over." },
              { title: "Appeal Grounds", href: "/grounds", desc: "10 proven legal defences: signage, grace period, ANPR errors, and more." },
              { title: "Template Letters", href: "/templates", desc: "20 ready-to-use appeal letter templates for every situation." },
              { title: "London Parking Fines", href: "/parking-fines/london", desc: "3.5 million PCNs per year. London Tribunals appeal process." },
              { title: "Statistics & Data", href: "/data", desc: "UK parking fine statistics, success rates, worst operators ranked." },
              { title: "Council vs Private", href: "/data/council-vs-private-parking-fine", desc: "Key differences in law, enforcement, and how to appeal each." },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-md"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal-600">
                  Read guide
                  <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
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
