import Link from "next/link";

const footerLinks = {
  freeTools: [
    { name: "POFA Checker", href: "/tools/pofa-checker" },
    { name: "Deadline Calculator", href: "/tools/deadline-calculator" },
    { name: "Ticket Scanner", href: "/tools/ticket-scanner" },
    { name: "Contravention Codes", href: "/tools/contravention-codes" },
  ],
  resources: [
    { name: "Appeal Guides", href: "/guides" },
    { name: "Operator Guides", href: "/appeals" },
    { name: "Council Guides", href: "/councils" },
    { name: "Appeal Grounds", href: "/grounds" },
    { name: "Template Letters", href: "/templates" },
    { name: "Parking Fines by City", href: "/parking-fines" },
    { name: "Statistics & Data", href: "/data" },
  ],
  popular: [
    { name: "ParkingEye Appeal", href: "/appeals/parkingeye" },
    { name: "UKPC Appeal", href: "/appeals/ukpc" },
    { name: "Supermarket Fine", href: "/situations/supermarket-parking-fine" },
    { name: "Hospital Fine", href: "/situations/hospital-parking-fine" },
    { name: "London Parking Fines", href: "/parking-fines/london" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "About", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        {/* Footer CTA */}
        <div className="py-8 border-b border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Got an unfair fine?</h3>
              <p className="text-sm text-gray-400">Free assessment in under 2 minutes. No obligation.</p>
            </div>
            <Link
              href="/appeal"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
            >
              Start Your Free Assessment
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-600">
                <svg
                  className="h-4.5 w-4.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Fine<span className="text-gray-300">Check</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Helping UK drivers challenge unfair fines. Professional appeal letters for parking fines, bus lane PCNs, congestion charges, and more.
            </p>
          </div>

          {/* Free Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white">Free Tools</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.freeTools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h3 className="text-sm font-semibold text-white">Popular</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.popular.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t border-gray-800 py-6">
          <p className="text-xs leading-relaxed text-gray-500">
            FineCheck provides document preparation services. We are not a law firm and do not provide legal advice. Our letters are templates personalised to your circumstances. If you need legal advice, please consult a qualified solicitor. Success rates vary depending on the specifics of each case.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} FineCheck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
