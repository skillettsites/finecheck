import Link from "next/link";

const footerLinks = {
  freeTools: [
    { name: "POFA Checker", href: "/tools/pofa-checker" },
    { name: "Deadline Calculator", href: "/tools/deadline-calculator" },
    { name: "Appeal Guides", href: "/guides" },
  ],
  resources: [
    { name: "How Appeals Work", href: "/guides/how-appeals-work" },
    { name: "Your Rights", href: "/guides/your-rights" },
    { name: "Operator Guides", href: "/operators" },
    { name: "Council Guides", href: "/guides/council-fines" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700">
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
              Helping UK drivers challenge unfair parking fines. Check your PCN, understand your rights, and generate professional appeal letters.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              Trusted by thousands of UK drivers
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
