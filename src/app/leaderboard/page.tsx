import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import LeaderboardTable from "@/components/LeaderboardTable";
import { COUNCILS } from "@/data/councils";

export const metadata: Metadata = {
  title: "UK Parking Fine Leaderboard 2026 | Which Councils Issue the Most Fines?",
  description:
    "See which UK councils issue the most parking fines, earn the most revenue, and have the best or worst appeal success rates. Data-driven rankings updated for 2026.",
  alternates: {
    canonical: "https://finecheck.co.uk/leaderboard",
  },
  openGraph: {
    title: "UK Parking Fine Leaderboard 2026 | Which Councils Issue the Most Fines?",
    description:
      "See which UK councils issue the most parking fines, earn the most revenue, and have the best or worst appeal success rates.",
    url: "https://finecheck.co.uk/leaderboard",
    type: "article",
  },
};

function formatNumber(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return n.toString();
}

function formatCurrency(n: number): string {
  if (n >= 1000000) return `£${(n / 1000000).toFixed(0)}M`;
  if (n >= 1000) return `£${(n / 1000).toFixed(0)}k`;
  return `£${n}`;
}

function computeFairnessScore(appealRate: number): number {
  // Scale: 0-100 where higher appeal success = fairer council
  // Base: appeal rate itself (0-100 scale), weighted and capped
  const score = Math.round(Math.min(100, (appealRate / 60) * 100));
  return score;
}

function getCouncilsWithStats() {
  return COUNCILS.filter((c) => c.annualPCNs && c.appealSuccessRate && c.parkingSurplus).map(
    (c) => ({
      slug: c.slug,
      name: c.name,
      region: c.region,
      isLondon: c.isLondon,
      annualPCNs: c.annualPCNs!,
      appealSuccessRate: c.appealSuccessRate!,
      parkingSurplus: c.parkingSurplus!,
      fairnessScore: computeFairnessScore(c.appealSuccessRate!),
    })
  );
}

export default function LeaderboardPage() {
  const councils = getCouncilsWithStats();

  const totalPCNs = councils.reduce((sum, c) => sum + c.annualPCNs, 0);
  const totalSurplus = councils.reduce((sum, c) => sum + c.parkingSurplus, 0);
  const avgAppealRate = Math.round(
    councils.reduce((sum, c) => sum + c.appealSuccessRate, 0) / councils.length
  );

  const topByPCNs = [...councils].sort((a, b) => b.annualPCNs - a.annualPCNs).slice(0, 5);
  const topByAppealRate = [...councils]
    .sort((a, b) => b.appealSuccessRate - a.appealSuccessRate)
    .slice(0, 5);
  const topBySurplus = [...councils]
    .sort((a, b) => b.parkingSurplus - a.parkingSurplus)
    .slice(0, 5);

  const londonCouncils = councils.filter((c) => c.isLondon);
  const restCouncils = councils.filter((c) => !c.isLondon);

  const londonAvgPCNs = Math.round(
    londonCouncils.reduce((s, c) => s + c.annualPCNs, 0) / londonCouncils.length
  );
  const restAvgPCNs = Math.round(
    restCouncils.reduce((s, c) => s + c.annualPCNs, 0) / restCouncils.length
  );
  const londonAvgAppeal = Math.round(
    londonCouncils.reduce((s, c) => s + c.appealSuccessRate, 0) / londonCouncils.length
  );
  const restAvgAppeal = Math.round(
    restCouncils.reduce((s, c) => s + c.appealSuccessRate, 0) / restCouncils.length
  );
  const londonAvgSurplus = Math.round(
    londonCouncils.reduce((s, c) => s + c.parkingSurplus, 0) / londonCouncils.length
  );
  const restAvgSurplus = Math.round(
    restCouncils.reduce((s, c) => s + c.parkingSurplus, 0) / restCouncils.length
  );

  const faqItems = [
    {
      question: "Where does this data come from?",
      answer:
        "Our data is compiled from the RAC Foundation Parking Finances reports, London Councils annual data, Freedom of Information (FOI) requests to individual councils, and the Traffic Penalty Tribunal annual reports. We cross-reference multiple sources to ensure accuracy.",
    },
    {
      question: "How often is the leaderboard updated?",
      answer:
        "We update the leaderboard annually when new council financial data is published, typically between July and October. Individual council pages may be updated more frequently as FOI responses come in.",
    },
    {
      question: "Which council issues the most parking fines in the UK?",
      answer:
        "The City of Westminster consistently issues more Penalty Charge Notices than any other council in the UK, with approximately 480,000 PCNs per year. This is largely due to the density of parking restrictions and CCTV enforcement in central London.",
    },
    {
      question: "What is the fairness score?",
      answer:
        "The fairness score is calculated based on a council's appeal success rate. A higher appeal success rate suggests the council is more willing to overturn fines when drivers have legitimate grounds, which we consider fairer. The score runs from 0 to 100.",
    },
    {
      question: "Do councils make a profit from parking fines?",
      answer:
        "Councils are not supposed to use parking enforcement for revenue generation. By law, any surplus must be reinvested in transport and highways. However, many councils generate significant surpluses. This data shows the parking surplus each council reports, which includes both penalty charge income and pay-and-display revenue.",
    },
    {
      question: "Can I appeal my parking fine?",
      answer:
        "Yes. Every driver has the right to appeal a parking fine, whether issued by a council or a private operator. Our data shows that appeal success rates range from 37% to 53% depending on the council. FineCheck can help you assess your chances and generate an appeal letter.",
    },
    {
      question: "Why do London councils issue so many more fines?",
      answer:
        "London boroughs issue significantly more PCNs than councils elsewhere in the UK for several reasons. London has denser parking restrictions, more controlled parking zones, wider use of CCTV enforcement cameras, and higher traffic volumes. London also uses a separate tribunal system (London Tribunals) rather than the Traffic Penalty Tribunal, and fine levels in London are generally higher than in the rest of England and Wales.",
    },
    {
      question: "What happens to the money councils make from parking fines?",
      answer:
        "Under the Road Traffic Regulation Act 1984, councils must use any surplus from on-street parking enforcement for transport and highway purposes. This includes road maintenance, public transport improvements, and environmental measures. Councils are required to publish their parking account annually. However, critics argue that some councils have become reliant on parking income to fund general transport budgets, creating an incentive to issue more fines rather than improve signage or road layouts.",
    },
  ];

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "UK Parking Fine Leaderboard 2026",
    description:
      "Council-by-council data on parking fines issued, appeal success rates, and parking surplus across the UK.",
    url: "https://finecheck.co.uk/leaderboard",
    creator: {
      "@type": "Organization",
      name: "FineCheck",
      url: "https://finecheck.co.uk",
    },
    datePublished: "2026-01-15",
    dateModified: "2026-04-01",
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: [
      "parking fines",
      "PCN data",
      "council parking",
      "appeal rates",
      "UK parking enforcement",
    ],
    spatialCoverage: {
      "@type": "Place",
      name: "United Kingdom",
    },
    variableMeasured: [
      {
        "@type": "PropertyValue",
        name: "Annual PCNs",
        description: "Number of Penalty Charge Notices issued per year",
      },
      {
        "@type": "PropertyValue",
        name: "Appeal Success Rate",
        description: "Percentage of appeals upheld in favour of the driver",
      },
      {
        "@type": "PropertyValue",
        name: "Parking Surplus",
        description: "Annual surplus from parking operations in GBP",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-16 sm:py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              UK Parking Fine Leaderboard 2026
            </h1>
            <p className="text-lg sm:text-xl text-slate-300">
              Which councils issue the most fines, make the most money, and have the worst appeal rates?
            </p>
          </div>
        </Container>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-white border-b border-gray-200 py-8">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-teal-600">
                {formatNumber(totalPCNs)}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Total fines across {councils.length} councils
              </p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-teal-600">
                {formatCurrency(totalSurplus)}
              </p>
              <p className="text-sm text-gray-600 mt-1">Total parking surplus</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-teal-600">{avgAppealRate}%</p>
              <p className="text-sm text-gray-600 mt-1">Average appeal success rate</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Sortable Table */}
      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Council Rankings</h2>
          <p className="text-gray-600 mb-8">
            Click any column header to sort. Councils are ranked by the number of PCNs issued by default.
          </p>
          <LeaderboardTable councils={councils} />
        </Container>
      </section>

      {/* Worst Offenders */}
      <section className="py-12 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Worst Offenders: Most Fines Issued</h2>
          <p className="text-gray-600 mb-8">
            These five councils issue more parking fines than anywhere else in the UK.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {topByPCNs.map((council, i) => (
              <Link
                key={council.slug}
                href={`/councils/${council.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-800">
                    {i + 1}
                  </span>
                  <span className="text-xs text-gray-500">{council.region}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{council.name}</h3>
                <p className="text-2xl font-bold text-red-700">{formatNumber(council.annualPCNs)}</p>
                <p className="text-xs text-gray-500">PCNs per year</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Westminster alone issues nearly half a million parking tickets each year, more than many
            entire regions combined. Central London boroughs dominate this list due to heavy CCTV
            enforcement, dense traffic restrictions, and high vehicle volumes. If you have received a
            fine from one of these councils, the chances of a successful appeal are still significant.
          </p>
        </Container>
      </section>

      {/* Most Driver-Friendly */}
      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Most Driver-Friendly Councils</h2>
          <p className="text-gray-600 mb-8">
            These councils have the highest appeal success rates, suggesting fairer enforcement.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {topByAppealRate.map((council, i) => (
              <Link
                key={council.slug}
                href={`/councils/${council.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-800">
                    {i + 1}
                  </span>
                  <span className="text-xs text-gray-500">{council.region}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{council.name}</h3>
                <p className="text-2xl font-bold text-green-700">{council.appealSuccessRate}%</p>
                <p className="text-xs text-gray-500">Appeal success rate</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Councils outside London generally have higher appeal success rates. This could reflect
            more proportionate enforcement, clearer signage, or a more reasonable approach to borderline
            cases. If your council appears on this list, you have a better than average chance of winning
            an appeal.
          </p>
        </Container>
      </section>

      {/* Biggest Revenue Generators */}
      <section className="py-12 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Biggest Revenue Generators</h2>
          <p className="text-gray-600 mb-8">
            Councils with the largest parking surpluses. Remember, this money is supposed to be
            reinvested in transport and highways.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {topBySurplus.map((council, i) => (
              <Link
                key={council.slug}
                href={`/councils/${council.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
                    {i + 1}
                  </span>
                  <span className="text-xs text-gray-500">{council.region}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{council.name}</h3>
                <p className="text-2xl font-bold text-amber-700">
                  {formatCurrency(council.parkingSurplus)}
                </p>
                <p className="text-xs text-gray-500">Annual parking surplus</p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Westminster tops the revenue table by a wide margin, generating an estimated £68M in parking
            surplus annually. Kensington and Chelsea follows with £35M. These figures include both penalty
            charges and pay-and-display income, but the sheer scale raises questions about whether
            enforcement is truly about traffic management or revenue.
          </p>
        </Container>
      </section>

      {/* London vs Rest of UK */}
      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">London vs Rest of UK</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                London Boroughs ({londonCouncils.length} councils)
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Average PCNs per council</p>
                  <p className="text-2xl font-bold text-gray-900">{formatNumber(londonAvgPCNs)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average appeal success rate</p>
                  <p className="text-2xl font-bold text-red-700">{londonAvgAppeal}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average parking surplus</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(londonAvgSurplus)}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Rest of UK ({restCouncils.length} councils)
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Average PCNs per council</p>
                  <p className="text-2xl font-bold text-gray-900">{formatNumber(restAvgPCNs)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average appeal success rate</p>
                  <p className="text-2xl font-bold text-green-700">{restAvgAppeal}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Average parking surplus</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {formatCurrency(restAvgSurplus)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            London councils issue significantly more fines per authority than the rest of the UK, with
            lower appeal success rates and much higher surpluses. This gap reflects the density of
            restrictions, the prevalence of CCTV enforcement, and higher fine levels in the capital.
            Drivers outside London are more likely to win an appeal on average.
          </p>
        </Container>
      </section>

      {/* Appeal CTA */}
      <section className="py-12 bg-slate-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Think Your Council Is Unfair?
            </h2>
            <p className="text-slate-300 mb-6">
              If you have received a parking fine, you have the right to appeal. Our free tool helps you
              check your PCN and generate a professional appeal letter in minutes.
            </p>
            <Button href="/appeal" variant="accent" size="lg">
              Appeal Your Parking Fine
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </Container>
      </section>

      {/* Methodology */}
      <section className="py-12 bg-gray-50">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Methodology</h2>
          <div className="prose prose-gray max-w-none text-sm text-gray-600 space-y-4">
            <p>
              This leaderboard is compiled from publicly available data on parking enforcement across UK
              councils. Our primary sources include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>RAC Foundation</strong>: Annual parking finances reports covering council income,
                expenditure, and surplus from parking operations across England.
              </li>
              <li>
                <strong>London Councils</strong>: Published data on PCN volumes, challenge rates, and
                outcomes for all London boroughs through the London Tribunals annual report.
              </li>
              <li>
                <strong>Traffic Penalty Tribunal (TPT)</strong>: Annual statistical reports covering
                appeal volumes and outcomes for councils in England (outside London) and Wales.
              </li>
              <li>
                <strong>Freedom of Information (FOI) requests</strong>: Direct requests to individual
                councils for PCN data, appeal outcomes, and enforcement details not available through
                published reports.
              </li>
            </ul>
            <p>
              The fairness score is derived primarily from each council&apos;s appeal success rate. A higher
              success rate at tribunal suggests the council is issuing fines that are more frequently
              overturned, which may indicate overzealous enforcement, unclear signage, or unreasonable
              restrictions.
            </p>
            <p>
              All financial figures represent the most recent full year of published data. PCN volumes
              may vary slightly from other published analyses due to differences in reporting periods
              and the inclusion or exclusion of bus lane and moving traffic offences.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
