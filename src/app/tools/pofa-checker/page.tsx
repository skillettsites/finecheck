import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import POFACheckerForm from "./POFACheckerForm";

export const metadata: Metadata = {
  title: "POFA Compliance Checker | Is Your Private Parking Fine Valid? | FineCheck",
  description:
    "Check if the Notice to Keeper was served within the legal 14-day time limit under POFA 2012. If the operator missed the deadline, your private parking fine may be unenforceable.",
  alternates: {
    canonical: "https://appealafine.co.uk/tools/pofa-checker",
  },
  openGraph: {
    title: "POFA Compliance Checker | Is Your Private Parking Fine Valid?",
    description:
      "Check if the Notice to Keeper was served within the legal 14-day time limit. Free instant results.",
    url: "https://appealafine.co.uk/tools/pofa-checker",
  },
};

const faqItems = [
  {
    question: "What is POFA 2012?",
    answer:
      "The Protection of Freedoms Act 2012 (POFA) is the law that governs private parking enforcement in the UK. Schedule 4 of POFA sets out the conditions a private parking operator must meet before they can hold the registered keeper liable for a parking charge. Without meeting these conditions, the operator can only pursue the driver, and if they cannot identify the driver, they have no one to claim against.",
  },
  {
    question: "What is the 14-day rule?",
    answer:
      "Under POFA 2012 Schedule 4, a private parking operator must serve a Notice to Keeper (NtK) on the registered keeper of the vehicle within 14 days of the alleged parking event. This 14-day period starts the day after the event. If the operator misses this deadline, keeper liability does not transfer and the charge becomes very difficult to enforce.",
  },
  {
    question: "What must the Notice to Keeper contain?",
    answer:
      "The NtK must include several prescribed elements: the amount of the charge, the grounds for the charge, details of how to pay or appeal, and a specific statement that the keeper is liable unless they name the driver. The notice must also state that representations can be made to the operator. If any of these elements are missing, the NtK may be non-compliant.",
  },
  {
    question: "What happens if the NtK is late?",
    answer:
      "If the NtK was served more than 14 days after the parking event, keeper liability does not apply. This means the operator must prove who was driving the vehicle at the time. If you were not the driver, or if the operator cannot prove you were, they have no valid claim against you as the registered keeper.",
  },
  {
    question: "Does this apply to council parking fines?",
    answer:
      "No. POFA 2012 Schedule 4 only applies to private parking charges issued by companies like ParkingEye, APCOA, CP Plus, and similar operators. Council-issued Penalty Charge Notices (PCNs) are governed by different legislation and have their own rules about service and time limits.",
  },
  {
    question: "What is the difference between a Notice to Driver and a Notice to Keeper?",
    answer:
      "A Notice to Driver (NtD) is usually the ticket left on your windscreen or posted to the driver shortly after the event. A Notice to Keeper (NtK) is a separate document sent to the registered keeper of the vehicle via the DVLA. They are different notices with different legal requirements, and both may be needed for keeper liability to apply.",
  },
  {
    question: "Can I use this checker for a fine I already paid?",
    answer:
      "While you can check the compliance of any fine, recovering money already paid is significantly more difficult than challenging a fine before payment. If you discover the NtK was non-compliant after paying, you may have grounds for a claim, but you should seek legal advice for your specific situation.",
  },
  {
    question: "What is ParkingEye v Beavis and why does it matter?",
    answer:
      "ParkingEye Ltd v Beavis [2015] UKSC 67 is a Supreme Court case that confirmed private parking charges can be enforceable if they are not extravagant or unconscionable. However, the court also confirmed that operators must still comply with POFA requirements, including the 14-day NtK rule. This case set the precedent that a charge of around £85 is not a penalty, but it did not remove the need for POFA compliance.",
  },
];

export default function POFACheckerPage() {
  return (
    <div className="py-8 sm:py-12">
      <Container size="md">
        <Breadcrumbs
          items={[
            { label: "Free Tools", href: "/tools" },
            { label: "POFA Checker", href: "/tools/pofa-checker" },
          ]}
        />

        {/* Hero */}
        <div className="mt-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Is Your Private Parking Fine Legally Valid?
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl">
            Under the Protection of Freedoms Act 2012, private parking operators must serve a
            Notice to Keeper (NtK) within <strong>14 days</strong> of the alleged parking event.
            If they missed this deadline, keeper liability does not apply and the fine may be
            unenforceable against you.
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-lg bg-teal-50 border border-teal-200 p-4">
            <svg className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-teal-900">
              <strong>Important:</strong> This checker applies to private parking charges only
              (e.g., ParkingEye, APCOA, CP Plus, Excel Parking). Council-issued PCNs are
              governed by different legislation.
            </p>
          </div>
        </div>

        {/* Checker Form */}
        <div className="mt-10">
          <POFACheckerForm />
        </div>

        {/* Educational Content */}
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Understanding POFA 2012 and Your Rights
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  What is POFA 2012?
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  The Protection of Freedoms Act 2012 regulates how private parking companies
                  can enforce charges. Schedule 4 of the Act created a framework allowing
                  operators to hold the registered keeper liable for unpaid charges, but only if
                  they follow strict procedural requirements.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  The 14-Day Rule
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  The operator must serve the NtK within 14 days of the parking event (starting
                  the day after). This is calculated by calendar days, not working days. If a
                  Notice to Driver was left on the windscreen, the 14-day period starts from
                  the date the NtD was given. If no NtD was issued, the clock starts from the
                  date of the alleged contravention.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  What the NtK Must Contain
                </h3>
                <ul className="mt-2 text-sm text-gray-600 leading-relaxed space-y-1.5">
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    The amount of the parking charge
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    The grounds for the charge
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    How to pay or appeal the charge
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    A statement that the keeper is liable unless they name the driver
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    That representations can be made to the operator
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Key Case Law
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  <strong>ParkingEye Ltd v Beavis [2015] UKSC 67:</strong> The Supreme Court
                  confirmed that private parking charges can be enforceable if they are
                  proportionate and not extravagant. However, this case also reinforced that
                  operators must comply with POFA requirements. A charge of around £85 was held
                  to be legitimate, but POFA compliance remains mandatory for keeper liability.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              What Happens if the NtK is Late or Non-Compliant?
            </h2>
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-6">
              <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                <p>
                  If the parking operator failed to serve the NtK within 14 days, the
                  consequences are significant. Keeper liability under POFA 2012 does not
                  transfer to you. The operator can only pursue the actual driver.
                </p>
                <p>
                  In practice, this means:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">1.</span>
                    You are not liable as the registered keeper if you were not the driver.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">2.</span>
                    The operator must identify and prove who was driving, which is often difficult.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">3.</span>
                    If taken to court, you can raise the POFA non-compliance as a defence.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-600">4.</span>
                    Many operators will drop the case at the appeals stage if POFA non-compliance is clearly demonstrated.
                  </li>
                </ul>
                <p>
                  Even if you were the driver, raising POFA non-compliance in your appeal puts
                  the operator on the back foot, as it demonstrates they failed to follow their
                  own regulatory framework.
                </p>
              </div>
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
