import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DeadlineCalculatorForm from "./DeadlineCalculatorForm";

export const metadata: Metadata = {
  title: "Parking Fine Deadline Calculator | Know Your Time Limits | FineCheck",
  description:
    "Calculate exactly when your parking fine appeal deadlines expire. See discount windows, informal challenge periods, tribunal deadlines, and more for both council and private fines.",
  alternates: {
    canonical: "https://appealafine.co.uk/tools/deadline-calculator",
  },
  openGraph: {
    title: "Parking Fine Deadline Calculator | Know Your Time Limits",
    description:
      "Calculate exactly when your parking fine appeal deadlines expire. Free instant results for council and private fines.",
    url: "https://appealafine.co.uk/tools/deadline-calculator",
  },
};

const faqItems = [
  {
    question: "What happens if I miss the 14-day discount period?",
    answer:
      "If you miss the 14-day discount period, you will need to pay the full amount of the fine. For council PCNs, the discounted amount is typically 50% of the full charge. For private parking charges, the discount varies by operator but is usually a reduction of around 40%. Missing this deadline does not affect your right to appeal.",
  },
  {
    question: "Can I still appeal after the 28-day deadline?",
    answer:
      "For council PCNs, missing the 28-day informal challenge deadline means you must wait for the Notice to Owner (NtO) and then submit a formal representation. For private parking charges, some operators accept late appeals, but they are not obliged to. If your informal challenge is rejected, you typically get a further 28 days to escalate to POPLA or the IAS.",
  },
  {
    question: "What is the difference between an informal and formal challenge?",
    answer:
      "An informal challenge (sometimes called a representation) is made directly to the issuing authority or operator before any formal enforcement action. A formal representation is made after you receive a Notice to Owner (for council fines) or after your informal challenge is rejected. Formal representations have specific legal protections and must be responded to within set timeframes.",
  },
  {
    question: "What is POPLA and what is the IAS?",
    answer:
      "POPLA (Parking on Private Land Appeals) handles appeals against members of the British Parking Association (BPA). The IAS (Independent Appeals Service) handles appeals against members of the International Parking Community (IPC). When a private parking operator rejects your appeal, you can escalate to whichever body the operator is registered with. Both services are free to use.",
  },
  {
    question: "Can I be taken to court over a parking fine?",
    answer:
      "Council PCNs follow an administrative enforcement route through the Traffic Enforcement Centre, not the normal courts. Private parking charges can potentially lead to a County Court claim, but the operator has up to 6 years to file one (though most act within 12 months if they act at all). Many private operators do not pursue County Court claims for individual charges, especially if there are procedural issues with their case.",
  },
  {
    question: "Do weekends and bank holidays count towards the deadlines?",
    answer:
      "For most parking fine deadlines, calendar days are used, meaning weekends and bank holidays do count. However, if a deadline falls on a weekend or bank holiday, some authorities accept submissions on the next working day. Our calculator uses calendar days to give you the earliest possible deadline, so you always have a safe margin.",
  },
  {
    question: "I received my fine late in the post. Does that change the deadline?",
    answer:
      "For council PCNs served by post, the 14-day discount period starts from the date the notice was served (posted), not when you received it. However, if there was a significant postal delay, some councils will honour the discount if you contact them with evidence. For private charges, the date on the NtK letter is what matters for calculating the 14-day POFA window.",
  },
];

export default function DeadlineCalculatorPage() {
  return (
    <div className="py-8 sm:py-12">
      <Container size="md">
        <Breadcrumbs
          items={[
            { label: "Free Tools", href: "/tools" },
            { label: "Deadline Calculator", href: "/tools/deadline-calculator" },
          ]}
        />

        {/* Hero */}
        <div className="mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Know Exactly When Your Deadlines Expire
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Parking fines have strict time limits for discounts, appeals, and escalation. Missing
            a deadline can cost you money or remove your right to challenge. Enter your details
            below to see a complete timeline with every deadline that applies to your situation.
          </p>
        </div>

        {/* Calculator Form */}
        <div className="mt-10">
          <DeadlineCalculatorForm />
        </div>

        {/* Educational Content */}
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Understanding Parking Fine Deadlines
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-3 w-3 rounded-full bg-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Council PCN Deadlines
                  </h3>
                </div>
                <ul className="text-sm text-gray-600 leading-relaxed space-y-2">
                  <li><strong>14 days:</strong> Pay at 50% discount</li>
                  <li><strong>28 days:</strong> Submit informal challenge</li>
                  <li><strong>28 days after NtO:</strong> Submit formal representation</li>
                  <li><strong>28 days after rejection:</strong> Appeal to tribunal</li>
                  <li><strong>56 days after NtO:</strong> Debt registration at TEC</li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Private Parking Deadlines
                  </h3>
                </div>
                <ul className="text-sm text-gray-600 leading-relaxed space-y-2">
                  <li><strong>14 days:</strong> Pay at reduced rate (varies by operator)</li>
                  <li><strong>28 days:</strong> Appeal to the operator</li>
                  <li><strong>28 days after rejection:</strong> Escalate to POPLA or IAS</li>
                  <li><strong>6 years:</strong> County Court limitation period</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              What Happens if You Miss a Deadline?
            </h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                <strong>Missing the discount window</strong> means you pay the full amount if you
                choose to pay. This does not affect your right to appeal.
              </p>
              <p>
                <strong>Missing the informal challenge deadline</strong> for a council PCN means
                you wait for the Notice to Owner. For private charges, you may lose the
                opportunity for a free internal appeal, though some operators are flexible.
              </p>
              <p>
                <strong>Missing the formal representation deadline</strong> after a council NtO
                can result in a Charge Certificate being issued, which adds 50% to the fine.
                After that, the debt can be registered at the Traffic Enforcement Centre.
              </p>
              <p>
                <strong>Missing the tribunal or POPLA/IAS deadline</strong> means you lose your
                right to an independent review. You would then need to wait and defend against
                any County Court claim (for private charges) or apply for a late appeal with
                good reason.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
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
                }),
              }}
            />
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-gray-200 bg-white"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
