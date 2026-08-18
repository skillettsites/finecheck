import Link from "next/link";

interface FirstScreenCTAProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}

export default function FirstScreenCTA({
  headline = "Get a ready-to-send appeal letter",
  description = "Free 60-second check first. If you have grounds, the personalised letter is £2.99, delivered by email in minutes.",
  buttonText = "Check my fine, then get the letter",
  href = "/appeal",
}: FirstScreenCTAProps) {
  return (
    <div className="rounded-xl border-2 border-teal-200 bg-teal-50 px-5 py-4">
      <p className="text-sm font-semibold text-gray-900">{headline}</p>
      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        {buttonText}
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}
