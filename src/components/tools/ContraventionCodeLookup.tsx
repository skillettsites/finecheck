"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { CONTRAVENTION_CODES, type ContraventionCode } from "@/data/contravention-codes";

type CategoryFilter = 'all' | ContraventionCode['category'];

const CATEGORY_LABELS: Record<CategoryFilter, string> = {
  all: 'All Categories',
  'on-street': 'On-Street',
  'off-street': 'Off-Street',
  'bus-lane': 'Bus Lane',
  'moving-traffic': 'Moving Traffic',
};

const SEVERITY_STYLES = {
  higher: { bg: 'bg-red-50', text: 'text-red-700', label: 'Higher' },
  lower: { bg: 'bg-amber-50', text: 'text-amber-700', label: 'Lower' },
};

const CATEGORY_STYLES: Record<ContraventionCode['category'], { bg: string; text: string }> = {
  'on-street': { bg: 'bg-blue-50', text: 'text-blue-700' },
  'off-street': { bg: 'bg-purple-50', text: 'text-purple-700' },
  'bus-lane': { bg: 'bg-teal-50', text: 'text-teal-700' },
  'moving-traffic': { bg: 'bg-orange-50', text: 'text-orange-700' },
};

function formatCurrency(amount: number): string {
  return `£${amount}`;
}

export default function ContraventionCodeLookup() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const filteredCodes = useMemo(() => {
    return CONTRAVENTION_CODES.filter((code) => {
      const matchesCategory = categoryFilter === 'all' || code.category === categoryFilter;
      const searchLower = search.toLowerCase().trim();
      const matchesSearch =
        !searchLower ||
        code.code.includes(searchLower) ||
        code.description.toLowerCase().includes(searchLower) ||
        code.commonDefences.some((d) => d.toLowerCase().includes(searchLower));
      return matchesCategory && matchesSearch;
    });
  }, [search, categoryFilter]);

  const toggleExpand = (code: string) => {
    setExpandedCode(expandedCode === code ? null : code);
  };

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by code number (e.g. 01) or keyword (e.g. loading, disabled, meter)..."
            className="w-full rounded-xl border border-gray-300 bg-white py-3.5 pl-11 pr-4 text-base text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {(Object.keys(CATEGORY_LABELS) as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                categoryFilter === cat
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="mb-4 text-sm text-gray-500">
        Showing {filteredCodes.length} of {CONTRAVENTION_CODES.length} contravention codes
      </p>

      {/* Results */}
      {filteredCodes.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-gray-600">No contravention codes match your search. Try a different code number or keyword.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredCodes.map((code) => {
            const isExpanded = expandedCode === code.code;
            const severity = SEVERITY_STYLES[code.severity];
            const catStyle = CATEGORY_STYLES[code.category];

            return (
              <div
                key={code.code}
                className={`rounded-xl border transition-all ${
                  isExpanded ? 'border-blue-200 shadow-md' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                {/* Header (always visible) */}
                <button
                  onClick={() => toggleExpand(code.code)}
                  className="flex w-full items-start gap-4 p-4 text-left sm:items-center"
                  aria-expanded={isExpanded}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-sm font-bold text-white">
                    {code.code}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 sm:text-base">
                      {code.description}
                    </p>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${severity.bg} ${severity.text}`}>
                        {severity.label}
                      </span>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${catStyle.bg} ${catStyle.text}`}>
                        {CATEGORY_LABELS[code.category]}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                        {formatCurrency(code.discountedAmount.outside)} - {formatCurrency(code.fineAmount.london)}
                      </span>
                    </div>
                  </div>
                  <svg
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-gray-100 px-4 pb-5 pt-4 sm:px-6">
                    {/* Fine Amounts */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">London</h4>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm text-gray-700">
                            Full amount: <span className="font-semibold">{formatCurrency(code.fineAmount.london)}</span>
                          </p>
                          <p className="text-sm text-gray-700">
                            Discounted (14 days): <span className="font-semibold text-green-700">{formatCurrency(code.discountedAmount.london)}</span>
                          </p>
                        </div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-4">
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">Outside London</h4>
                        <div className="mt-2 space-y-1">
                          <p className="text-sm text-gray-700">
                            Full amount: <span className="font-semibold">{formatCurrency(code.fineAmount.outside)}</span>
                          </p>
                          <p className="text-sm text-gray-700">
                            Discounted (14 days): <span className="font-semibold text-green-700">{formatCurrency(code.discountedAmount.outside)}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Common Defences */}
                    <div className="mt-5">
                      <h4 className="text-sm font-semibold text-gray-900">Common Defences</h4>
                      <ul className="mt-2 space-y-2">
                        {code.commonDefences.map((defence, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            {defence}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Appeal Tips */}
                    <div className="mt-5">
                      <h4 className="text-sm font-semibold text-gray-900">Appeal Tips</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                        {code.appealTips}
                      </p>
                    </div>

                    {/* Related Guide */}
                    {code.relatedGuide && (
                      <div className="mt-4">
                        <Link
                          href={`/guides/${code.relatedGuide}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                          </svg>
                          Read the full appeal guide
                        </Link>
                      </div>
                    )}

                    {/* Appeal CTA */}
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/appeal"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
                      >
                        Appeal This Fine
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                      <Link
                        href="/templates"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                      >
                        Browse Letter Templates
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
