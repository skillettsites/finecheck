import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Free Fine Appeal Tools | Check Your PCN for Free | FineCheck",
  description:
    "Free tools to check if your fine is valid. Use our POFA compliance checker, deadline calculator, and appeal strength assessor to understand your options before you pay.",
  alternates: {
    canonical: "https://appealafine.co.uk/tools",
  },
  openGraph: {
    title: "Free Fine Appeal Tools | FineCheck",
    description:
      "Free tools to check if your fine is valid. POFA checker, deadline calculator, and more.",
    url: "https://appealafine.co.uk/tools",
  },
};

const tools = [
  {
    name: "POFA Compliance Checker",
    href: "/tools/pofa-checker",
    description:
      "Check if a private parking operator served the Notice to Keeper within the legal 14-day time limit. If they missed it, keeper liability does not transfer and the fine may be unenforceable.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    tag: "Most Popular",
  },
  {
    name: "Smart Ticket Scanner",
    href: "/tools/ticket-scanner",
    description:
      "Upload a photo of your parking ticket and our AI extracts all the key details automatically. No typing required. Works with council PCNs and private parking charge notices.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    tag: "New",
  },
  {
    name: "Deadline Calculator",
    href: "/tools/deadline-calculator",
    description:
      "Find out exactly when your appeal deadlines expire. See which time limits are still available, which are approaching, and what happens if you miss each one.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tag: null,
  },
  {
    name: "Contravention Code Lookup",
    href: "/tools/contravention-codes",
    description:
      "Look up your parking contravention code to find out what it means, how much the fine is, and the best grounds for appealing. Covers all UK on-street, off-street, bus lane, and moving traffic codes.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    tag: "New",
  },
];

export default function ToolsIndexPage() {
  return (
    <div className="py-8 sm:py-12">
      <Container size="md">
        <Breadcrumbs items={[{ label: "Free Tools", href: "/tools" }]} />

        <div className="mt-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Free Fine Appeal Tools
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Check your fine for free before you pay. Over 50% of appealed fines are
            overturned. Use our tools to find out if you have grounds to challenge yours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg hover:border-teal-200"
            >
              {tool.tag && (
                <span className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                  {tool.tag}
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100 transition-colors">
                {tool.icon}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                {tool.name}
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {tool.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-600">
                Use this tool
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl bg-slate-900 p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Appeal Your Fine?
          </h2>
          <p className="mt-3 text-slate-300 max-w-lg mx-auto">
            Our free tools can tell you if you have a case. When you are ready, our AI-powered
            appeal generator creates a professional letter in minutes.
          </p>
          <Link
            href="/appeal"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
          >
            Start Your Free Assessment
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </div>
  );
}
