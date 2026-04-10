import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    template: "FineCheck | %s",
    default: "FineCheck | Appeal Your Fine",
  },
  description:
    "Appeal your UK fine for free. FineCheck helps you challenge parking fines, bus lane PCNs, congestion charges, ULEZ penalties, and red route fines. Check if your PCN is valid, generate professional appeal letters, and understand your rights.",
  keywords: [
    "parking fine appeal",
    "PCN appeal",
    "parking charge notice",
    "appeal parking ticket",
    "POFA",
    "parking fine help",
    "UK parking fine",
    "private parking fine",
    "council parking fine",
    "bus lane fine appeal",
    "congestion charge appeal",
    "ULEZ fine appeal",
    "red route PCN",
  ],
  metadataBase: new URL("https://appealafine.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://appealafine.co.uk",
    siteName: "FineCheck",
    title: "FineCheck | Appeal Your Fine",
    description:
      "Appeal your UK fine for free. Challenge parking fines, bus lane PCNs, congestion charges, ULEZ penalties, and more. Generate professional appeal letters.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FineCheck - Appeal Your Fine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FineCheck | Appeal Your Fine",
    description:
      "Appeal your UK fine for free. Challenge parking fines, bus lane PCNs, congestion charges, ULEZ penalties, and more. Generate professional appeal letters.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://appealafine.co.uk",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FineCheck",
  url: "https://appealafine.co.uk",
  logo: "https://appealafine.co.uk/logo.png",
  description:
    "UK fine appeal tool. Challenge parking fines, bus lane PCNs, congestion charges, ULEZ penalties, and more.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FineCheck",
  url: "https://appealafine.co.uk",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://appealafine.co.uk/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1 pb-16 sm:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <Analytics />
      </body>
    </html>
  );
}
