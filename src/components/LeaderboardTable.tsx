"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface CouncilRow {
  slug: string;
  name: string;
  region: string;
  annualPCNs: number;
  appealSuccessRate: number;
  parkingSurplus: number;
  fairnessScore: number;
}

type SortKey = "annualPCNs" | "appealSuccessRate" | "parkingSurplus" | "fairnessScore";
type SortDir = "asc" | "desc";

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

function getAppealRateColour(rate: number): string {
  if (rate >= 50) return "text-green-700 bg-green-50";
  if (rate >= 30) return "text-amber-700 bg-amber-50";
  return "text-red-700 bg-red-50";
}

function SortArrow({ active, direction }: { active: boolean; direction: SortDir }) {
  if (!active) {
    return (
      <svg className="ml-1 h-4 w-4 text-gray-300 inline-block" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
      </svg>
    );
  }
  return (
    <svg className="ml-1 h-4 w-4 text-blue-800 inline-block" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      {direction === "desc" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      )}
    </svg>
  );
}

export default function LeaderboardTable({ councils }: { councils: CouncilRow[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("annualPCNs");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const sorted = useMemo(() => {
    return [...councils].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      return sortDir === "desc" ? bVal - aVal : aVal - bVal;
    });
  }, [councils, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir(sortDir === "desc" ? "asc" : "desc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  const headerButton = (label: string, key: SortKey) => (
    <button
      onClick={() => handleSort(key)}
      className="inline-flex items-center font-semibold text-gray-700 hover:text-blue-800 transition-colors whitespace-nowrap"
    >
      {label}
      <SortArrow active={sortKey === key} direction={sortDir} />
    </button>
  );

  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-4 py-3 text-left font-semibold text-gray-700 w-12">#</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Council</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Region</th>
              <th className="px-4 py-3 text-right">{headerButton("Annual PCNs", "annualPCNs")}</th>
              <th className="px-4 py-3 text-right">{headerButton("Appeal Rate", "appealSuccessRate")}</th>
              <th className="px-4 py-3 text-right">{headerButton("Surplus", "parkingSurplus")}</th>
              <th className="px-4 py-3 text-right">{headerButton("Fairness", "fairnessScore")}</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((council, index) => (
              <tr
                key={council.slug}
                className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-4 py-3 text-gray-500 font-medium">{index + 1}</td>
                <td className="px-4 py-3">
                  <Link
                    href={`/councils/${council.slug}`}
                    className="font-medium text-blue-800 hover:underline"
                  >
                    {council.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-gray-600">{council.region}</td>
                <td className="px-4 py-3 text-right font-medium text-gray-900">
                  {formatNumber(council.annualPCNs)}
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${getAppealRateColour(council.appealSuccessRate)}`}>
                    {council.appealSuccessRate}%
                  </span>
                </td>
                <td className="px-4 py-3 text-right font-medium text-gray-900">
                  {formatCurrency(council.parkingSurplus)}
                </td>
                <td className="px-4 py-3 text-right">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${getAppealRateColour(council.fairnessScore)}`}>
                    {council.fairnessScore}/100
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {(["annualPCNs", "appealSuccessRate", "parkingSurplus", "fairnessScore"] as SortKey[]).map((key) => {
            const labels: Record<SortKey, string> = {
              annualPCNs: "PCNs",
              appealSuccessRate: "Appeal Rate",
              parkingSurplus: "Surplus",
              fairnessScore: "Fairness",
            };
            return (
              <button
                key={key}
                onClick={() => handleSort(key)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                  sortKey === key
                    ? "bg-blue-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {labels[key]} {sortKey === key ? (sortDir === "desc" ? "↓" : "↑") : ""}
              </button>
            );
          })}
        </div>
        {sorted.map((council, index) => (
          <div
            key={council.slug}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <span className="text-xs font-medium text-gray-400 mr-2">#{index + 1}</span>
                <Link
                  href={`/councils/${council.slug}`}
                  className="font-semibold text-blue-800 hover:underline"
                >
                  {council.name}
                </Link>
              </div>
              <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${getAppealRateColour(council.fairnessScore)}`}>
                {council.fairnessScore}/100
              </span>
            </div>
            <p className="text-xs text-gray-500 mb-3">{council.region}</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-xs text-gray-500">PCNs/yr</p>
                <p className="font-semibold text-gray-900">{formatNumber(council.annualPCNs)}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Appeal Rate</p>
                <p className={`font-semibold ${council.appealSuccessRate >= 50 ? "text-green-700" : council.appealSuccessRate >= 30 ? "text-amber-700" : "text-red-700"}`}>
                  {council.appealSuccessRate}%
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Surplus</p>
                <p className="font-semibold text-gray-900">{formatCurrency(council.parkingSurplus)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
