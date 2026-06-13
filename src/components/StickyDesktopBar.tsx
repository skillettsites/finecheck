"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SavedAppeal {
  form?: {
    fineType?: string;
    fineDate?: string;
    parkingEventDate?: string;
  };
}

interface DeadlineInfo {
  days: number;
  label: string;
}

// Mirrors StickyMobileCTA's deadline logic; kept inline to avoid a shared
// client module that next/font's RSC tree would unnecessarily traverse.
function nextDeadline(appeal: SavedAppeal | null): DeadlineInfo | null {
  if (!appeal?.form) return null;
  const f = appeal.form;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const parseDate = (s?: string) => {
    if (!s) return null;
    const d = new Date(s);
    if (Number.isNaN(d.getTime())) return null;
    d.setHours(0, 0, 0, 0);
    return d;
  };
  const daysBetween = (a: Date, b: Date) => Math.floor((a.getTime() - b.getTime()) / 86_400_000);

  if (f.fineType === "private") {
    const event = parseDate(f.parkingEventDate) || parseDate(f.fineDate);
    if (event) {
      const discountEnds = new Date(event);
      discountEnds.setDate(discountEnds.getDate() + 14);
      const formalEnds = new Date(event);
      formalEnds.setDate(formalEnds.getDate() + 28);
      const d1 = daysBetween(discountEnds, today);
      const d2 = daysBetween(formalEnds, today);
      if (d1 > 0) return { days: d1, label: "left to appeal at the reduced rate" };
      if (d2 > 0) return { days: d2, label: "to send your formal challenge" };
    }
  }
  if (f.fineType === "council") {
    const issued = parseDate(f.fineDate);
    if (issued) {
      const discountEnds = new Date(issued);
      discountEnds.setDate(discountEnds.getDate() + 14);
      const formalEnds = new Date(issued);
      formalEnds.setDate(formalEnds.getDate() + 28);
      const d1 = daysBetween(discountEnds, today);
      const d2 = daysBetween(formalEnds, today);
      if (d1 > 0) return { days: d1, label: "left on the 50% discount" };
      if (d2 > 0) return { days: d2, label: "to send your informal challenge" };
    }
  }
  return null;
}

const HIDE_ON_PREFIXES = ["/appeal", "/api"];

export default function StickyDesktopBar() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [deadline, setDeadline] = useState<DeadlineInfo | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("finecheck_appeal");
      if (raw) setDeadline(nextDeadline(JSON.parse(raw)));
    } catch {
      // ignore
    }
    try {
      if (sessionStorage.getItem("aaf_sticky_dismissed") === "1") setDismissed(true);
    } catch {
      // ignore
    }
    const onScroll = () => setScrolled(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on the appeal funnel itself and on every API route.
  if (HIDE_ON_PREFIXES.some((p) => pathname.startsWith(p))) return null;
  if (dismissed) return null;
  if (!scrolled) return null;

  const hasDeadline = deadline !== null && deadline.days <= 60;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 hidden sm:flex justify-center px-4">
      <div className="pointer-events-auto flex w-full max-w-3xl items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/95 px-3 py-2.5 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl">
        <div className="flex-1 min-w-0">
          {hasDeadline ? (
            <p className="text-sm text-slate-700 truncate">
              <span className="font-semibold tabular-nums text-amber-700">
                {deadline!.days} day{deadline!.days === 1 ? "" : "s"}
              </span>{" "}
              {deadline!.label}. Letter ready in minutes.
            </p>
          ) : (
            <p className="text-sm text-slate-700 truncate">
              Free 60-second check.{" "}
              <span className="font-semibold text-slate-900">Letter from £2.99.</span>{" "}
              <span className="text-slate-500">No subscription.</span>
            </p>
          )}
        </div>
        <Link
          href="/appeal"
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(13,148,136,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(13,148,136,0.7)]"
        >
          {hasDeadline ? "Get my letter" : "Check my fine — free"}
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => {
            try {
              sessionStorage.setItem("aaf_sticky_dismissed", "1");
            } catch {
              // ignore
            }
            setDismissed(true);
          }}
          className="shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
