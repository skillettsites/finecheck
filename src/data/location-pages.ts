import { LOCATION_PAGES_TOLL } from "./location-pages-toll";
import { LOCATION_PAGES_SPEEDING } from "./location-pages-speeding";
import { LOCATION_PAGES_BUS_LANE } from "./location-pages-bus-lane";
import { LOCATION_PAGES_OPERATOR_VENUE } from "./location-pages-operator-venue";
import { LOCATION_PAGES_LONDON_NEW } from "./location-pages-london-new";
import { LOCATION_PAGES_HYPERLOCAL } from "./location-pages-hyperlocal";
import { LOCATION_PAGES_AVG_SPEED } from "./location-pages-avg-speed";
import { LOCATION_PAGES_AI_CAMERA } from "./location-pages-ai-camera";

export type LocationFineCategory =
  | "toll-zone"
  | "police-speeding"
  | "bus-lane"
  | "operator-venue"
  | "london-new"
  | "hyperlocal"
  | "average-speed"
  | "ai-camera";

export interface LocationFinePage {
  slug: string;
  category: LocationFineCategory;
  location: string;
  fineTypeLabel: string;
  title: string;
  h1: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  searchVolume: number;
  factBox: {
    issuer: string;
    appealTo: string;
    discountWindow: string;
    formalChallengeWindow: string;
    standardFine: string;
    fastestRoute: string;
  };
  intro: string;
  grounds: {
    title: string;
    body: string;
  }[];
  localNotes: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs?: string[];
}

export const LOCATION_PAGES: LocationFinePage[] = [
  ...LOCATION_PAGES_TOLL,
  ...LOCATION_PAGES_SPEEDING,
  ...LOCATION_PAGES_BUS_LANE,
  ...LOCATION_PAGES_OPERATOR_VENUE,
  ...LOCATION_PAGES_LONDON_NEW,
  ...LOCATION_PAGES_HYPERLOCAL,
  ...LOCATION_PAGES_AVG_SPEED,
  ...LOCATION_PAGES_AI_CAMERA,
];

export function getLocationPageBySlug(slug: string): LocationFinePage | undefined {
  return LOCATION_PAGES.find((p) => p.slug === slug);
}

export function getLocationPagesByCategory(
  category: LocationFineCategory
): LocationFinePage[] {
  return LOCATION_PAGES.filter((p) => p.category === category);
}

export function getAllLocationSlugs(): string[] {
  return LOCATION_PAGES.map((p) => p.slug);
}
