import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { getCitiesByRegion, getAllCities } from "@/data/cities";

export const metadata: Metadata = {
  title: "Parking Fines by City | Appeal a Fine",
  description:
    "Find parking fine information for your city. Check appeal success rates, common hotspots, and local tips for 50 UK cities. Free PCN assessment and appeal letter generation.",
  alternates: {
    canonical: "https://appealafine.co.uk/parking-fines",
  },
  openGraph: {
    title: "Parking Fines by City | Appeal a Fine",
    description:
      "Find parking fine information for your city. Check appeal success rates, common hotspots, and local tips for 50 UK cities.",
    url: "https://appealafine.co.uk/parking-fines",
    type: "website",
  },
};

const regionOrder = [
  "London",
  "South East",
  "South West",
  "East of England",
  "East Midlands",
  "West Midlands",
  "North West",
  "North East",
  "Yorkshire and the Humber",
  "Wales",
  "Scotland",
  "Northern Ireland",
];

const regionBadgeVariant: Record<string, "info" | "success" | "warning" | "danger" | "accent" | "default"> = {
  London: "danger",
  "South East": "info",
  "South West": "success",
  "East of England": "accent",
  "East Midlands": "warning",
  "West Midlands": "danger",
  "North West": "info",
  "North East": "success",
  "Yorkshire and the Humber": "accent",
  Wales: "warning",
  Scotland: "info",
  "Northern Ireland": "success",
};

export default function ParkingFinesPage() {
  const citiesByRegion = getCitiesByRegion();
  const allCities = getAllCities();

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
        name: "Parking Fines by City",
        item: "https://appealafine.co.uk/parking-fines",
      },
    ],
  };

  return (
    <div className="py-8 sm:py-12">
      <Container>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Parking Fines by City", href: "/parking-fines" },
          ]}
          className="mb-6"
        />

        {/* Hero */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Parking Fines by City
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Find specific parking fine information for your city. Local hotspots,
            appeal tips, council details, and success rates for{" "}
            {allCities.length} UK cities and towns.
          </p>
          <div className="mt-6">
            <Button href="/appeal" variant="accent" size="lg">
              Check Your Fine Now
            </Button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-3xl font-bold text-teal-600">{allCities.length}</p>
            <p className="mt-1 text-sm text-gray-600">Cities Covered</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-3xl font-bold text-teal-600">~43%</p>
            <p className="mt-1 text-sm text-gray-600">Average Appeal Success Rate</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <p className="text-3xl font-bold text-teal-600">Free</p>
            <p className="mt-1 text-sm text-gray-600">To Appeal at TPT / London Tribunals</p>
          </div>
        </div>

        {/* Cities by Region */}
        {regionOrder.map((region) => {
          const cities = citiesByRegion[region];
          if (!cities || cities.length === 0) return null;

          return (
            <section key={region} className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-gray-900">{region}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/parking-fines/${city.slug}`}
                    className="group rounded-xl border border-gray-200 bg-white p-5 transition-all hover:border-teal-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                          {city.name}
                        </h3>
                        <p className="mt-0.5 text-sm text-gray-500">
                          {city.councilName}
                        </p>
                      </div>
                      <Badge variant={regionBadgeVariant[region] || "default"}>
                        {region}
                      </Badge>
                    </div>
                    <div className="mt-3 flex items-center gap-4 text-sm">
                      <span className="text-gray-600">
                        <span className="font-semibold text-gray-900">{city.annualPCNs}</span>{" "}
                        PCNs/year
                      </span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-600">
                        Pop. {city.population}
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {city.majorOperators.slice(0, 3).map((op) => (
                        <span
                          key={op}
                          className="inline-block rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                        >
                          {op}
                        </span>
                      ))}
                      {city.majorOperators.length > 3 && (
                        <span className="inline-block rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                          +{city.majorOperators.length - 3} more
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Bottom CTA */}
        <div className="mt-12 rounded-xl bg-slate-900 p-8 text-center text-white">
          <h2 className="text-xl font-bold sm:text-2xl">
            Got a Parking Fine? Check It Now
          </h2>
          <p className="mt-2 text-slate-300">
            No matter which city you received your fine in, our tool checks your
            PCN details and generates a professional appeal letter tailored to
            your specific situation.
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
