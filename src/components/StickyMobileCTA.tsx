"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface SavedAppeal {
  form?: {
    fineType?: string;
    fineDate?: string;
    parkingEventDate?: string;
    ntkReceivedDate?: string;
    operatorName?: string;
    councilName?: string;
  };
}

interface DeadlineInfo {
  // Days remaining until the next meaningful deadline based on fine type + dates.
  days: number;
  // Short label of what the deadline is, used in the sticky bar copy.
  label: string;
}

// Compute the next legally meaningful deadline from saved appeal data.
// Returns null if no usable date is available.
function nextDeadline(appeal: SavedAppeal | null): DeadlineInfo | null {
  if (!appeal?.form) return null;
  const f = appeal.form;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const parseDate = (s?: string): Date | null => {
    if (!s) return null;
    const d = new Date(s);
    if (Number.isNaN(d.getTime())) return null;
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const daysBetween = (later: Date, earlier: Date) =>
    Math.floor((later.getTime() - earlier.getTime()) / 86_400_000);

  // For private parking charges (NtK-driven), the 14-day discount window is
  // the critical lever. Fallback: 28-day formal challenge window.
  if (f.fineType === "private") {
    const event = parseDate(f.parkingEventDate) || parseDate(f.fineDate);
    if (event) {
      const discountEnds = new Date(event);
      discountEnds.setDate(discountEnds.getDate() + 14);
      const formalEnds = new Date(event);
      formalEnds.setDate(formalEnds.getDate() + 28);
      const discountDaysLeft = daysBetween(discountEnds, today);
      const formalDaysLeft = daysBetween(formalEnds, today);
      if (discountDaysLeft > 0) return { days: discountDaysLeft, label: "for the 40% discount" };
      if (formalDaysLeft > 0) return { days: formalDaysLeft, label: "to send your formal challenge" };
    }
  }

  // Council PCN: 14-day discount, 28-day informal challenge.
  if (f.fineType === "council") {
    const issued = parseDate(f.fineDate);
    if (issued) {
      const discountEnds = new Date(issued);
      discountEnds.setDate(discountEnds.getDate() + 14);
      const formalEnds = new Date(issued);
      formalEnds.setDate(formalEnds.getDate() + 28);
      const discountDaysLeft = daysBetween(discountEnds, today);
      const formalDaysLeft = daysBetween(formalEnds, today);
      if (discountDaysLeft > 0) return { days: discountDaysLeft, label: "for the 50% discount" };
      if (formalDaysLeft > 0) return { days: formalDaysLeft, label: "to send your informal challenge" };
    }
  }

  return null;
}

export default function StickyMobileCTA() {
  const [deadline, setDeadline] = useState<DeadlineInfo | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("finecheck_appeal");
      if (!raw) return;
      const parsed = JSON.parse(raw) as SavedAppeal;
      setDeadline(nextDeadline(parsed));
    } catch {
      // sessionStorage unavailable or JSON malformed; show the generic CTA.
    }
  }, []);

  const hasDeadline = deadline !== null && deadline.days <= 60;

  return (
    <div
      role="region"
      aria-label="Appeal call to action"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.18)] sm:hidden"
    >
      {hasDeadline && (
        <div className="border-b border-slate-100 bg-amber-50/80 px-4 py-1.5 text-center text-[11px] font-semibold text-amber-800">
          <span className="tabular-nums">{deadline!.days} day{deadline!.days === 1 ? "" : "s"}</span>{" "}
          left {deadline!.label}
        </div>
      )}
      <div className="px-3 py-2.5">
        <Link
          href="/appeal"
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(13,148,136,0.5)] transition-all active:scale-[0.99]"
        >
          {hasDeadline ? "Get my letter — £5.99" : "Check my fine — free"}
          <svg
            className="h-4 w-4 transition-transform group-active:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
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
  );
}
