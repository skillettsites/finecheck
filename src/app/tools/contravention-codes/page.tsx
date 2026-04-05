import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import ContraventionCodeLookup from "@/components/tools/ContraventionCodeLookup";

export const metadata: Metadata = {
  title: "Parking Contravention Code Lookup | Find Your Code | FineCheck",
  description:
    "Look up any UK parking contravention code to find out what it means, how much the fine is, and your best options for appealing. Covers all on-street, off-street, bus lane, and moving traffic codes.",
  alternates: {
    canonical: "https://finecheck.co.uk/tools/contravention-codes",
  },
  openGraph: {
    title: "Parking Contravention Code Lookup | FineCheck",
    description:
      "Find out what your parking contravention code means and how to appeal. Free lookup tool with fine amounts, defences, and tips.",
    url: "https://finecheck.co.uk/tools/contravention-codes",
  },
};

const faqItems = [
  {
    question: "What is a contravention code?",
    answer:
      "A contravention code is a two-digit number printed on your Penalty Charge Notice (PCN) that identifies the specific parking rule you are alleged to have broken. Each code corresponds to a defined offence under the Traffic Management Act 2004 or local Traffic Regulation Orders. Knowing your code helps you understand the charge and identify the best grounds for appeal.",
  },
  {
    question: "Where do I find my contravention code?",
    answer:
      "The contravention code is printed on the front of your PCN, usually near the description of the alleged offence. It is typically a two-digit number (e.g. 01, 05, 12, 40). On council-issued PCNs, it will be clearly labelled. On private parking charges, the code may not always be shown, as private operators use different systems.",
  },
  {
    question: "What is the difference between higher and lower level contraventions?",
    answer:
      "Contraventions are split into two severity levels. Higher level offences are considered more serious (such as parking in a disabled bay without a badge, or on a red route) and carry higher fines. Lower level offences are less serious (such as overstaying on a meter) and carry lower fines. In London, higher level fines are £160 (£80 if paid within 14 days) and lower level fines are £110 (£55 if paid within 14 days).",
  },
  {
    question: "Do contravention codes apply to private parking charges?",
    answer:
      "No. Contravention codes are used by councils and local authorities for Penalty Charge Notices issued under the Traffic Management Act 2004. Private parking operators (such as ParkingEye, APCOA, and UKPC) issue parking charge notices under contract law, which do not use the same coding system. If you have a private parking charge, use our operator-specific appeal templates instead.",
  },
  {
    question: "Can I appeal a parking fine based on the wrong contravention code?",
    answer:
      "Yes. If the wrong contravention code is printed on your PCN, this is a procedural error that can be grounds for cancellation. The code must accurately describe the alleged offence. If the code does not match what you were actually doing, mention this in your appeal as the PCN does not correctly identify the contravention.",
  },
  {
    question: "How long do I have to appeal a council parking fine?",
    answer:
      "You should make an informal challenge as soon as possible, ideally within 14 days of receiving the PCN. This preserves your right to the discounted payment if your challenge is rejected. If the council rejects your challenge and issues a Notice to Owner, you then have 28 days to make formal representations. If formal representations are rejected, you can appeal to the independent Traffic Penalty Tribunal (outside London) or London Tribunals.",
  },
  {
    question: "Are fine amounts the same everywhere in the UK?",
    answer:
      "No. London boroughs and Transport for London charge higher fines than councils outside London. London higher level fines are £160 (£80 discounted) and lower level fines are £110 (£55 discounted). Outside London, fines are typically £50 to £70 for lower level and £70 for higher level offences, though exact amounts vary by council.",
  },
  {
    question: "What should I do if I cannot find my contravention code?",
    answer:
      "If your code is not listed here, it may be a less common local code or a code used by a specific Transport for London scheme. Check the full list on your council's website or contact their parking services team. For private parking charges that do not use contravention codes, use our free appeal tools to assess your case.",
  },
];

export default function ContraventionCodesPage() {
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
    <div className="py-8 sm:py-12">
      <Container size="md">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs
          items={[
            { label: "Free Tools", href: "/tools" },
            { label: "Contravention Codes", href: "/tools/contravention-codes" },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            What Does Your Contravention Code Mean?
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Every council parking fine has a contravention code that identifies the alleged offence.
            Look up your code to understand the charge, see the fine amounts, and find the best
            grounds for your appeal.
          </p>
        </div>

        {/* Lookup Tool */}
        <div className="mt-10">
          <ContraventionCodeLookup />
        </div>

        {/* Info Section */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
              <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-gray-900">Higher Level</h3>
            <p className="mt-1 text-sm text-gray-600">
              More serious offences like parking in disabled bays, on red routes, or on zigzag lines. Higher fines apply.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
              <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-gray-900">Lower Level</h3>
            <p className="mt-1 text-sm text-gray-600">
              Less serious offences like overstaying on a meter, not displaying a ticket, or parking beyond bay markings.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="mt-3 text-sm font-semibold text-gray-900">14-Day Discount</h3>
            <p className="mt-1 text-sm text-gray-600">
              Pay within 14 days (21 if posted) for a 50% discount. Appealing pauses this deadline so you do not lose the discount.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-6">
            <FAQ items={faqItems} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-blue-800 p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Appeal Your Fine?
          </h2>
          <p className="mt-3 text-blue-100 max-w-lg mx-auto">
            Now you know what your contravention code means, use our AI-powered appeal generator
            to create a professional appeal letter in minutes.
          </p>
          <a
            href="/appeal"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
          >
            Start Your Free Assessment
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </Container>
    </div>
  );
}
