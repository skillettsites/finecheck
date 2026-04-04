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
      className={`relative flex flex-col rounded-2xl border-2 bg-white p-8 ${
        popular
          ? "border-amber-500 shadow-xl shadow-amber-100/50"
          : "border-gray-200"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white shadow-sm">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-sm text-gray-500 ml-1">one-time</span>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
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
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`block w-full rounded-lg py-3 text-center text-sm font-semibold transition-colors ${
          popular
            ? "bg-amber-500 text-white hover:bg-amber-600 shadow-sm"
            : "bg-blue-800 text-white hover:bg-blue-700"
        }`}
      >
        Start Your Appeal
      </Link>
    </div>
  );
}
