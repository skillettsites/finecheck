"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { OPERATORS } from "@/data/operators";

type TradeFilter = "all" | "BPA" | "IPC";

export default function OperatorsFilter() {
  const [filter, setFilter] = useState<TradeFilter>("all");

  const filteredOperators =
    filter === "all"
      ? OPERATORS
      : OPERATORS.filter((op) => op.tradeBody === filter);

  const bpaCount = OPERATORS.filter((op) => op.tradeBody === "BPA").length;
  const ipcCount = OPERATORS.filter((op) => op.tradeBody === "IPC").length;

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-gray-700">
          Filter by trade body:
        </span>
        {(["all", "BPA", "IPC"] as TradeFilter[]).map((option) => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === option
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {option === "all"
              ? `All Operators (${OPERATORS.length})`
              : `${option} (${option === "BPA" ? bpaCount : ipcCount})`}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredOperators.map((op) => (
          <Link key={op.slug} href={`/appeals/${op.slug}`}>
            <Card hover className="h-full">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {op.name}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">{op.fullName}</p>
                </div>
                <Badge
                  variant={op.averageSuccessRate >= 50 ? "success" : "warning"}
                >
                  {op.averageSuccessRate}% success
                </Badge>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="info">{op.tradeBody}</Badge>
                <Badge variant="default">Appeal to {op.appealBody}</Badge>
                {op.usesANPR && <Badge variant="accent">Uses ANPR</Badge>}
                {op.pursuesToCourt && (
                  <Badge variant="danger">Pursues Court</Badge>
                )}
              </div>

              <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                {op.description}
              </p>

              <div className="mt-4 text-sm font-medium text-teal-600">
                View appeal guide &rarr;
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
