import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import MidContentCTA from "@/components/ui/MidContentCTA";
import {
  LOCATION_PAGES,
  getLocationPageBySlug,
  getLocationPagesByCategory,
} from "@/data/location-pages";

export const dynamicParams = false;

export async function generateStaticParams() {
  return LOCATION_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getLocationPageBySlug(slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: {
      canonical: `https://www.appealafine.co.uk/${p.slug}`,
    },
    openGraph: {
      title: p.seoTitle,
      description: p.seoDescription,
      url: `https://www.appealafine.co.uk/${p.slug}`,
      type: "article",
    },
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  "toll-zone": "Toll & Zone Fine",
  "police-speeding": "Police Speeding Fine",
  "bus-lane": "Bus Lane Fine",
  "operator-venue": "Private Parking Fine",
  "london-new": "London Moving Traffic Fine",
  hyperlocal: "Local Camera Fine",
  "average-speed": "Average Speed Fine",
  "ai-camera": "AI Camera Fine",
};

const CATEGORY_BADGE_VARIANT: Record<string, "info" | "warning" | "success" | "accent"> = {
  "toll-zone": "info",
  "police-speeding": "warning",
  "bus-lane": "warning",
  "operator-venue": "accent",
  "london-new": "info",
  hyperlocal: "info",
  "average-speed": "warning",
  "ai-camera": "success",
};

export default async function LocationFinePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getLocationPageBySlug(slug);
  if (!p) notFound();

  const relatedPages = (
    p.relatedSlugs && p.relatedSlugs.length > 0
      ? (p.relatedSlugs
          .map((s) => getLocationPageBySlug(s))
          .filter(Boolean) as typeof LOCATION_PAGES)
      : getLocationPagesByCategory(p.category).filter((x) => x.slug !== p.slug)
  ).slice(0, 6);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.h1,
    description: p.seoDescription,
    url: `https://www.appealafine.co.uk/${p.slug}`,
    publisher: {
      "@type": "Organization",
      name: "AppealAFine",
      url: "https://www.appealafine.co.uk",
    },
    about: {
      "@type": "Thing",
      name: `${p.location} ${p.fineTypeLabel}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".aaf-speakable", "h1"],
    },
  };

  return (
    <div className="py-8 sm:py-12">
      <Container size="md">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Breadcrumbs
          items={[
            { label: "Local fines", href: "/local-fines" },
            { label: p.title, href: `/${p.slug}` },
          ]}
          className="mb-6"
        />

        <div className="mb-8 rounded-xl bg-teal-600 p-6 sm:p-8 text-white">
          <h2 className="text-xl font-bold sm:text-2xl">
            Got a {p.fineTypeLabel.toLowerCase()} in {p.location}?
          </h2>
          <p className="mt-2 text-teal-100">
            Free 60-second assessment tells you if you have grounds to appeal,
            with the exact statute references for your situation.
          </p>
          <div className="mt-4">
            <Link
              href="/appeal"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50"
            >
              Start free assessment
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

        <div className="mb-8">
          <Badge variant={CATEGORY_BADGE_VARIANT[p.category]} className="mb-3">
            {CATEGORY_LABELS[p.category]}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {p.h1}
          </h1>
          <p className="aaf-speakable mt-3 text-lg text-gray-600">
            {p.description}
          </p>
        </div>

        <section className="mb-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Quick facts
          </h2>
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Issued by
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{p.factBox.issuer}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Appeal to
              </dt>
              <dd className="mt-1 text-sm text-gray-900">{p.factBox.appealTo}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Discount window
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {p.factBox.discountWindow}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Formal challenge window
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {p.factBox.formalChallengeWindow}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Standard fine
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {p.factBox.standardFine}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Fastest appeal route
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {p.factBox.fastestRoute}
              </dd>
            </div>
          </dl>
        </section>

        <article className="min-w-0 prose-content">
          <p className="text-base text-gray-700 leading-relaxed">{p.intro}</p>

          <h2 className="mt-10 mb-4 text-2xl font-bold text-gray-900">
            Grounds that work for {p.location} {p.fineTypeLabel.toLowerCase()}s
          </h2>
          <div className="space-y-6">
            {p.grounds.map((g, idx) => (
              <div key={idx}>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {g.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{g.body}</p>
              </div>
            ))}
          </div>

          <MidContentCTA
            headline={`Got a ${p.location} ${p.fineTypeLabel.toLowerCase()}?`}
            description="Our tool checks your specific notice details and tells you in 60 seconds whether you have grounds to appeal."
            buttonText="Check my fine free"
            href="/appeal"
            variant="teal"
          />

          {p.localNotes.length > 0 && (
            <>
              <h2 className="mt-12 mb-4 text-2xl font-bold text-gray-900">
                Local detail: {p.location}
              </h2>
              <ul className="my-4 space-y-2 pl-6 list-disc text-gray-700">
                {p.localNotes.map((note, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
            </>
          )}
        </article>

        {p.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Frequently asked questions
            </h2>
            <FAQ items={p.faqs} />
          </section>
        )}

        {relatedPages.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Related local fine appeals
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedPages.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/${rp.slug}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:border-teal-300 hover:text-teal-600 hover:shadow-sm"
                >
                  {rp.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 rounded-xl bg-slate-900 p-8 text-center text-white">
          <h2 className="text-xl font-bold sm:text-2xl">
            Ready to appeal your {p.location} {p.fineTypeLabel.toLowerCase()}?
          </h2>
          <p className="mt-2 text-slate-300">
            Free 60-second assessment first. Pay £5.99 only if you want us to
            write the letter for you.
          </p>
          <div className="mt-5">
            <Button href="/appeal" variant="accent" size="lg">
              Start free assessment
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
