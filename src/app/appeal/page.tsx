import type { Metadata } from "next";
import AppealFlow from "@/components/appeal/AppealFlow";

export const metadata: Metadata = {
  title: "Appeal Your Fine | Free Assessment",
  description:
    "Start your free fine appeal. Get an instant assessment of your PCN, identify legal grounds for appeal, and generate a professional appeal letter. Works for council PCNs, private parking charges, bus lane fines, congestion charges, ULEZ fines, and red route penalties.",
  alternates: {
    canonical: "https://appealafine.co.uk/appeal",
  },
  openGraph: {
    title: "Appeal Your Fine | FineCheck",
    description:
      "Free instant assessment of your fine. Identify legal grounds and generate a professional appeal letter in minutes.",
    url: "https://appealafine.co.uk/appeal",
  },
};

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
      name: "Appeal Your Fine",
      item: "https://appealafine.co.uk/appeal",
    },
  ],
};

export default function AppealPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <AppealFlow />
    </>
  );
}
