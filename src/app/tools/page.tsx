import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Free Parking Fine Tools | Check Your PCN for Free | FineCheck",
  description:
    "Free tools to check if your parking fine is valid. Use our POFA compliance checker, deadline calculator, and appeal strength assessor to understand your options before you pay.",
  alternates: {
    canonical: "https://finecheck.co.uk/tools",
  },
  openGraph: {
    title: "Free Parking Fine Tools | FineCheck",
    description:
      "Free tools to check if your parking fine is valid. POFA checker, deadline calculator, and more.",
    url: "https://finecheck.co.uk/tools",
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
];

export default function ToolsIndexPage() {
  return (
    <div className="py-8 sm:py-12">
      <Container size="md">
        <Breadcrumbs items={[{ label: "Free Tools", href: "/tools" }]} />

        <div className="mt-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Free Parking Fine Tools
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Check your parking fine for free before you pay. Over 50% of appealed fines are
            overturned. Use our tools to find out if you have grounds to challenge yours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg hover:border-blue-200"
            >
              {tool.tag && (
                <span className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-blue-800 px-3 py-1 text-xs font-semibold text-white">
                  {tool.tag}
                </span>
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-800 group-hover:bg-blue-100 transition-colors">
                {tool.icon}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                {tool.name}
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {tool.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-800">
                Use this tool
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-2xl bg-blue-800 p-8 sm:p-10 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to Appeal Your Fine?
          </h2>
          <p className="mt-3 text-blue-100 max-w-lg mx-auto">
            Our free tools can tell you if you have a case. When you are ready, our AI-powered
            appeal generator creates a professional letter in minutes.
          </p>
          <Link
            href="/appeal"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
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
