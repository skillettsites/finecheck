"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const startTime = performance.now();

          function animate(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplay(value);
            }
          }

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: { stats: StatItem[] }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
      {/* Soft accent grid + glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 0%, transparent 75%)",
          }}
        />
        <div className="aaf-mesh-a absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-300 backdrop-blur-sm">
            The UK parking fine reality
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="bg-gradient-to-br from-teal-300 via-teal-200 to-emerald-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <div className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-[14rem] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-slate-500">
          Sources: DfT, BPA, RAC Foundation, Traffic Penalty Tribunal annual reports.
        </p>
      </div>
    </section>
  );
}
