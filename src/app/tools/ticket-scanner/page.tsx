import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/ui/FAQ";
import TicketScanner from "@/components/tools/TicketScanner";

export const metadata: Metadata = {
  title:
    "Smart Ticket Scanner | Upload Your Parking Fine Photo | FineCheck",
  description:
    "Upload a photo of your parking ticket and our AI will extract all the key details automatically. Works with council PCNs and private parking charge notices. Free, fast, and secure.",
  alternates: {
    canonical: "https://appealafine.co.uk/tools/ticket-scanner",
  },
  openGraph: {
    title: "Smart Ticket Scanner | Upload Your Parking Fine Photo",
    description:
      "Upload a photo of your parking ticket and our AI will extract all the key details automatically. Free, fast, and secure.",
    url: "https://appealafine.co.uk/tools/ticket-scanner",
  },
};

const faqItems = [
  {
    question: "What types of tickets can the scanner read?",
    answer:
      "The scanner works with both council Penalty Charge Notices (PCNs) and private Parking Charge Notices from companies like ParkingEye, UKPC, Euro Car Parks, and others. It can read windscreen tickets, letters through the post, and ANPR-based notices.",
  },
  {
    question: "Is my photo stored anywhere?",
    answer:
      "No. Your photo is processed securely to extract the text, then immediately discarded. We do not store, share, or retain your ticket images. The extracted text data is only kept in your browser session until you complete your appeal.",
  },
  {
    question: "What if the scanner gets something wrong?",
    answer:
      "Every extracted field is shown with a confidence indicator, and you can edit any field before proceeding. If the scanner cannot read your ticket clearly, you can always enter the details manually on the appeal page.",
  },
  {
    question: "What photo formats are supported?",
    answer:
      "The scanner accepts JPG, PNG, WebP, and HEIC images up to 10MB. For best results, take a clear, well-lit photo with the full ticket visible. Avoid shadows and glare.",
  },
  {
    question: "Does this work on my phone?",
    answer:
      "Yes. On mobile devices, you can use the Take Photo button to open your camera directly. Take a photo of the ticket and the scanner will process it straight away.",
  },
  {
    question: "Is the ticket scanner free?",
    answer:
      "Yes, the ticket scanner is completely free to use. You can scan as many tickets as you need. The appeal letter generation service has separate pricing, but scanning is always free.",
  },
];

const extractedFields = [
  {
    name: "Fine Type",
    description: "Council PCN or private parking charge",
  },
  {
    name: "Operator / Council",
    description: "Who issued the ticket",
  },
  {
    name: "Reference Number",
    description: "The PCN or charge reference",
  },
  {
    name: "Date",
    description: "When the alleged contravention happened",
  },
  {
    name: "Fine Amount",
    description: "Full amount and discounted early payment amount",
  },
  {
    name: "Vehicle Registration",
    description: "Your number plate from the ticket",
  },
  {
    name: "Contravention Code",
    description: "What the driver is alleged to have done",
  },
  {
    name: "Location",
    description: "Where the alleged offence took place",
  },
];

export default function TicketScannerPage() {
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
            { label: "Ticket Scanner", href: "/tools/ticket-scanner" },
          ]}
        />

        {/* Hero */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-600 mb-4">
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
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
              />
            </svg>
            AI-Powered
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Upload Your Parking Fine
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Take a photo of your ticket and we will extract all the details
            automatically. No typing, no squinting at small print.
          </p>
        </div>

        {/* Scanner Component */}
        <div className="mt-10">
          <TicketScanner />
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            How It Works
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-4">
            {[
              {
                step: "1",
                title: "Take a Photo",
                description:
                  "Snap a clear photo of your parking ticket, or upload one from your gallery.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                ),
              },
              {
                step: "2",
                title: "AI Reads It",
                description:
                  "Our AI analyses every detail on the ticket in seconds.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                  />
                ),
              },
              {
                step: "3",
                title: "Review and Edit",
                description:
                  "Check the extracted details with confidence indicators. Fix anything that is wrong.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                ),
              },
              {
                step: "4",
                title: "Start Your Appeal",
                description:
                  "All details flow into the appeal form. Start building your case immediately.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50">
                  <svg
                    className="h-7 w-7 text-teal-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div className="mt-1 text-xs font-bold text-teal-600">
                  Step {item.step}
                </div>
                <h3 className="mt-2 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Extract */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            What We Extract
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-lg mx-auto">
            The scanner reads your ticket and pulls out every piece of
            information you need for an appeal.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {extractedFields.map((field) => (
              <div
                key={field.name}
                className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4"
              >
                <svg
                  className="h-5 w-5 text-teal-600 mt-0.5 shrink-0"
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
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {field.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {field.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-12 rounded-xl bg-gray-50 border border-gray-200 p-6 flex gap-4">
          <svg
            className="h-6 w-6 text-teal-600 shrink-0 mt-0.5"
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
          <div>
            <p className="font-medium text-gray-900">Your Privacy Matters</p>
            <p className="mt-1 text-sm text-gray-600">
              Your photo is processed securely and not stored after extraction.
              We never share your data with third parties. The extracted details
              stay in your browser session only.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-slate-900 p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Already Know Your Ticket Details?
          </h2>
          <p className="mt-3 text-slate-300 max-w-lg mx-auto">
            Skip the scanner and go straight to the appeal form. Enter your
            details manually and let our AI draft your appeal letter.
          </p>
          <a
            href="/appeal"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
          >
            Start Your Appeal
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
          </a>
        </div>
      </Container>
    </div>
  );
}
