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
    { name: "Pricing", href: "/pricing" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Soft ambient lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[26rem] w-[26rem] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[22rem] w-[22rem] rounded-full bg-emerald-400/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust signal strip */}
        <div className="grid grid-cols-1 gap-4 border-b border-white/5 py-6 sm:grid-cols-3">
          {[
            {
              label: "Refund if we can't write you a valid letter",
              sub: "Honest free check first. If your fine has no defensible ground, you pay nothing.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
            },
            {
              label: "Stripe-secured payments",
              sub: "Your card details never touch our servers.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-3.75 11.25h16.5a1.5 1.5 0 001.5-1.5V12a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 12v8.25a1.5 1.5 0 001.5 1.5z" />
              ),
            },
            {
              label: "Real legal grounds",
              sub: "POFA 2012, CRA 2015, Beavis. No fabricated citations.",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              ),
            },
          ].map((t) => (
            <div key={t.label} className="flex items-start gap-3 rounded-xl bg-white/[0.025] px-4 py-3 ring-1 ring-white/5">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/30 to-emerald-500/20 text-teal-300">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                  {t.icon}
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t.label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-between gap-4 border-b border-white/5 py-8 sm:flex-row sm:items-center">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-white">Got an unfair fine?</h3>
            <p className="mt-1 text-sm text-slate-400">Free assessment in under 2 minutes. No obligation.</p>
          </div>
          <Link
            href="/appeal"
            className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(13,148,136,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(13,148,136,0.85)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" aria-hidden="true" />
            <span className="relative">Start your free assessment</span>
            <svg className="relative h-4 w-4 transition-transform group-hover/cta:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 shadow-[0_4px_12px_-2px_rgba(13,148,136,0.45)]">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-white/0 to-transparent" aria-hidden="true" />
                <svg
                  className="relative h-5 w-5 text-white"
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
              <span className="text-lg font-semibold tracking-tight text-white">
                Appeal<span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">AFine</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Helping UK drivers challenge unfair parking, bus lane, congestion charge and ULEZ fines with letters that cite the law correctly.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Free Tools</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.freeTools.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Resources</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Popular</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.popular.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col items-start gap-4 border-t border-white/5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} AppealAFine. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <a href="mailto:support@appealafine.co.uk" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <svg className="h-3.5 w-3.5 text-teal-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              support@appealafine.co.uk
            </a>
          </div>
        </div>

        {/* Compliance */}
        <p className="border-t border-white/5 py-6 text-[11px] leading-relaxed text-slate-500">
          AppealAFine provides document preparation services. We are not a law firm and do not provide legal advice. Our letters are drafted using established UK parking law and tribunal patterns, then personalised to your circumstances. If you need legal advice â€” particularly if your case has reached a county court claim â€” please consult a qualified solicitor. Appeal outcomes are never guaranteed.
        </p>
      </div>
    </footer>
  );
}
