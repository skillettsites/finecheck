import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  getAllBoroughs,
  getBoroughFinesByBorough,
  getFineTypeLabel,
} from "@/data/borough-fines";

export const metadata: Metadata = {
  title: "London Fine Appeals by Borough | Appeal a Fine",
  description:
    "Appeal parking fines, bus lane fines, congestion charges, and ULEZ penalties across all 33 London boroughs. Free assessment and personalised appeal letters.",
  alternates: {
    canonical: "https://appealafine.co.uk/london",
  },
  openGraph: {
    title: "London Fine Appeals by Borough | Appeal a Fine",
    description:
      "Appeal parking fines, bus lane fines, congestion charges, and ULEZ penalties across all 33 London boroughs.",
    url: "https://appealafine.co.uk/london",
    type: "website",
  },
};

const fineTypeColors: Record<string, string> = {
  parking: "bg-blue-50 text-blue-700",
  "bus-lane": "bg-amber-50 text-amber-700",
  congestion: "bg-purple-50 text-purple-700",
  ulez: "bg-green-50 text-green-700",
};

export default function LondonPage() {
  const boroughs = getAllBoroughs();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://appealafine.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "London",
        item: "https://appealafine.co.uk/london",
      },
    ],
  };

  return (
    <div className="py-8 sm:py-12">
      <Container size="lg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <Breadcrumbs
          items={[{ label: "London", href: "/london" }]}
          className="mb-6"
        />

        {/* Hero */}
        <div className="mb-10">
          <Badge variant="accent" className="mb-3">
            London
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            London Parking Fines &amp; Appeals
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-gray-600">
            Find your borough below and get a free assessment of your fine.
            Whether it is a parking PCN, bus lane fine, congestion charge, or
            ULEZ penalty, we can help you build your appeal.
          </p>
          <div className="mt-6">
            <Button href="/appeal" variant="primary" size="lg">
              Start Your Free Assessment
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-3xl font-bold text-teal-600">6.2M+</p>
            <p className="mt-1 text-sm text-gray-500">
              PCNs issued in London every year
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-3xl font-bold text-teal-600">33</p>
            <p className="mt-1 text-sm text-gray-500">
              London boroughs covered
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-3xl font-bold text-teal-600">Free</p>
            <p className="mt-1 text-sm text-gray-500">
              Assessment and appeal guidance
            </p>
          </div>
        </div>

        {/* Mid CTA */}
        <div className="mb-12 rounded-xl border-2 border-teal-200 bg-teal-50 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-teal-900">
            Got a fine in London?
          </h2>
          <p className="mt-2 text-sm text-teal-700">
            Our tool checks your PCN details and tells you whether you have
            grounds to appeal. It takes less than two minutes and is completely
            free.
          </p>
          <div className="mt-4">
            <Button href="/appeal" variant="accent" size="md">
              Check Your Fine Now
            </Button>
          </div>
        </div>

        {/* Borough Grid */}
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Browse by Borough
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {boroughs.map((borough) => {
            const fines = getBoroughFinesByBorough(borough);
            return (
              <div
                key={borough}
                className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {borough}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {fines.map((fine) => (
                    <Link
                      key={fine.slug}
                      href={`/london/${fine.slug}`}
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-opacity hover:opacity-80 ${fineTypeColors[fine.fineType] || "bg-gray-50 text-gray-700"}`}
                    >
                      {getFineTypeLabel(fine.fineType)}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Final CTA */}
        <div className="mt-12 rounded-xl bg-slate-900 p-8 text-center text-white">
          <h2 className="text-xl font-bold sm:text-2xl">
            Ready to Appeal Your London Fine?
          </h2>
          <p className="mt-2 text-slate-300">
            Our tool analyses your specific circumstances and generates a
            professional appeal letter referencing the correct legislation,
            appeal bodies, and local rules for your borough.
          </p>
          <div className="mt-5">
            <Button href="/appeal" variant="accent" size="lg">
              Start Your Free Assessment
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
