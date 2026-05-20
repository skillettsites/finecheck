"use client";

import { useEffect, useRef } from "react";

const OPERATORS = [
  { name: "ParkingEye", colour: "from-rose-500/15 to-rose-500/5 text-rose-700 ring-rose-200" },
  { name: "UKPC", colour: "from-amber-500/15 to-amber-500/5 text-amber-700 ring-amber-200" },
  { name: "APCOA", colour: "from-sky-500/15 to-sky-500/5 text-sky-700 ring-sky-200" },
  { name: "Excel Parking", colour: "from-fuchsia-500/15 to-fuchsia-500/5 text-fuchsia-700 ring-fuchsia-200" },
  { name: "Smart Parking", colour: "from-violet-500/15 to-violet-500/5 text-violet-700 ring-violet-200" },
  { name: "NCP", colour: "from-emerald-500/15 to-emerald-500/5 text-emerald-700 ring-emerald-200" },
  { name: "Council PCN", colour: "from-blue-500/15 to-blue-500/5 text-blue-700 ring-blue-200" },
  { name: "ULEZ / TfL", colour: "from-teal-500/15 to-teal-500/5 text-teal-700 ring-teal-200" },
  { name: "POPLA / IAS", colour: "from-indigo-500/15 to-indigo-500/5 text-indigo-700 ring-indigo-200" },
  { name: "Tribunal", colour: "from-slate-500/15 to-slate-500/5 text-slate-700 ring-slate-300" },
];

const SPEED = 0.4; // px per frame (~24px/s at 60fps)

export default function OperatorMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const step = () => {
      if (!pausedRef.current) {
        const half = el.scrollWidth / 2; // one copy width (content rendered twice)
        el.scrollLeft += SPEED;
        if (half > 0 && el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const pause = () => {
      pausedRef.current = true;
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
    const resumeSoon = () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => {
        pausedRef.current = false;
      }, 1200);
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resumeSoon);
    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", resumeSoon);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resumeSoon, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resumeSoon);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", resumeSoon);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resumeSoon);
    };
  }, []);

  // Rendered twice so the scroll can loop seamlessly.
  const pills = [...OPERATORS, ...OPERATORS];

  return (
    <div
      ref={scrollerRef}
      className="aaf-marquee-scroll aaf-marquee-mask w-full overflow-x-auto lg:flex-1"
    >
      <div className="flex w-max items-center gap-2 pb-1">
        {pills.map((op, i) => (
          <span
            key={i}
            aria-hidden={i >= OPERATORS.length}
            className={`shrink-0 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${op.colour} px-3 py-1 text-xs font-semibold ring-1`}
          >
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            {op.name}
          </span>
        ))}
      </div>
    </div>
  );
}
