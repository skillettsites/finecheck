import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  LOCATION_PAGES,
  getLocationPagesByCategory,
  type LocationFineCategory,
} from "@/data/location-pages";

export const metadata: Metadata = {
  title: "Local Fine Appeals: Tolls, Bus Lanes, Speeding, Cameras | AppealAFine",
  description:
    "Pick your exact fine type and location. Dart Charge, ULEZ, Mersey Gateway, ParkingEye venues, police speeding tickets and average-speed cameras, all with appeal guides.",
  alternates: {
    canonical: "https://www.appealafine.co.uk/local-fines",
  },
};

const CATEGORY_HEADERS: { key: LocationFineCategory; label: string; blurb: string }[] = [
  {
    key: "toll-zone",
    label: "Tolls and zones",
    blurb: "Dart Charge, ULEZ, Mersey Gateway, Tyne Tunnel, M6 Toll and other automatic charge fines.",
  },
  {
    key: "police-speeding",
    label: "Police speeding tickets",
    blurb: "Notices of Intended Prosecution from the major UK police forces.",
  },
  {
    key: "bus-lane",
    label: "Bus lane fines outside London",
    blurb: "Camera enforcement under Part 6 of the Traffic Management Act 2004 in northern cities.",
  },
  {
    key: "operator-venue",
    label: "Private parking by venue",
    blurb: "ParkingEye, UKPC and Excel at supermarkets, retail parks, fast-food outlets and hospitals.",
  },
  {
    key: "london-new",
    label: "London moving-traffic offences",
    blurb: "Yellow boxes, bus gates, banned turns, LTNs and school streets across the boroughs.",
  },
  {
    key: "hyperlocal",
    label: "Hyperlocal camera spots",
    blurb: "Named routes and crossings where enforcement is heaviest.",
  },
  {
    key: "average-speed",
    label: "Average-speed corridors",
    blurb: "Managed motorway and A-road stretches with continuous ANPR speed enforcement.",
  },
  {
    key: "ai-camera",
    label: "AI camera enforcement",
    blurb: "Mobile phone, seatbelt and dashboard AI camera detections.",
  },
];

export default function LocalFinesHubPage() {
  return (
    <div className="py-10 sm:py-14">
      <Container size="lg">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Local fine appeals
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-gray-600">
          Pick the exact fine you got and the place it happened. Every page has
          the legal basis, the appeal route, the deadlines and the grounds that
          actually work.
        </p>
        <p className="mt-2 max-w-2xl text-sm text-gray-500">
          {LOCATION_PAGES.length} pages covering tolls, zones, bus lanes,
          camera enforcement, police speeding tickets and private parking by
          venue.
        </p>

        <div className="mt-10 space-y-12">
          {CATEGORY_HEADERS.map((cat) => {
            const pages = getLocationPagesByCategory(cat.key);
            if (pages.length === 0) return null;
            return (
              <section key={cat.key}>
                <h2 className="text-2xl font-bold text-gray-900">
                  {cat.label}
                </h2>
                <p className="mt-1 text-sm text-gray-600">{cat.blurb}</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {pages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/${p.slug}`}
                        className="block rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-teal-300 hover:shadow-sm"
                      >
                        <div className="text-sm font-semibold text-gray-900">
                          {p.title}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          {p.location}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
