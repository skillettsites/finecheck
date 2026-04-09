import Link from "next/link";

interface MidContentCTAProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  variant?: "teal" | "amber" | "slate";
}

const variantStyles = {
  teal: {
    wrapper: "border-teal-200 bg-teal-50",
    headline: "text-teal-900",
    description: "text-teal-700",
    button: "bg-teal-600 hover:bg-teal-700 text-white",
  },
  amber: {
    wrapper: "border-amber-200 bg-amber-50",
    headline: "text-amber-900",
    description: "text-amber-700",
    button: "bg-amber-600 hover:bg-amber-700 text-white",
  },
  slate: {
    wrapper: "border-slate-700 bg-slate-900",
    headline: "text-white",
    description: "text-slate-300",
    button: "bg-teal-600 hover:bg-teal-700 text-white",
  },
};

export default function MidContentCTA({
  headline = "Got a fine like this?",
  description = "Get a free assessment in under 2 minutes. Our AI checks your fine against UK law and tells you your chances.",
  buttonText = "Start Your Free Assessment",
  href = "/appeal",
  variant = "teal",
}: MidContentCTAProps) {
  const styles = variantStyles[variant];

  return (
    <div className={`my-8 rounded-xl border-2 p-6 sm:p-8 ${styles.wrapper}`}>
      <h3 className={`text-lg font-bold ${styles.headline}`}>{headline}</h3>
      <p className={`mt-2 text-sm ${styles.description}`}>{description}</p>
      <div className="mt-4">
        <Link
          href={href}
          className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${styles.button}`}
        >
          {buttonText}
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
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
