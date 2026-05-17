import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  href: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  popular = false,
  href,
}: PricingCardProps) {
  return (
    <div
      className={`group relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
        popular
          ? "border border-teal-200 bg-gradient-to-br from-white via-teal-50/30 to-white shadow-[0_30px_60px_-30px_rgba(13,148,136,0.45)] hover:-translate-y-1 hover:shadow-[0_40px_80px_-30px_rgba(13,148,136,0.55)]"
          : "border border-slate-200 bg-white hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_40px_-24px_rgba(15,23,42,0.25)]"
      }`}
    >
      {popular && (
        <>
          {/* Soft glow ring */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-teal-400/30 via-transparent to-emerald-400/30 opacity-60 blur-[2px]"
          />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_8px_24px_-6px_rgba(13,148,136,0.6)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Most popular
            </span>
          </div>
        </>
      )}

      <div className="relative">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
        </div>

        <div className="mb-6 flex items-baseline gap-2">
          <span className="text-5xl font-semibold tracking-tight text-slate-900">{price}</span>
          <span className="text-sm text-slate-500">one-time</span>
        </div>

        <ul className="mb-8 flex-1 space-y-3.5">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  popular ? "bg-teal-600 text-white" : "bg-emerald-100 text-emerald-700"
                }`}
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className={`relative block w-full overflow-hidden rounded-xl py-3 text-center text-sm font-semibold transition-all ${
            popular
              ? "bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-[0_10px_24px_-10px_rgba(13,148,136,0.55)] hover:shadow-[0_14px_32px_-10px_rgba(13,148,136,0.7)] hover:-translate-y-0.5"
              : "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5"
          }`}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
          <span className="relative">Start Your Appeal</span>
        </Link>
      </div>
    </div>
  );
}
