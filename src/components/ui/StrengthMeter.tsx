"use client";

import { useEffect, useState } from "react";

interface StrengthMeterProps {
  percentage: number;
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

function getStrengthLabel(pct: number): string {
  if (pct >= 70) return "Strong";
  if (pct >= 40) return "Moderate";
  return "Weak";
}

function getStrengthColor(pct: number): string {
  if (pct >= 70) return "bg-green-500";
  if (pct >= 40) return "bg-amber-500";
  return "bg-red-500";
}

function getStrengthTextColor(pct: number): string {
  if (pct >= 70) return "text-green-700";
  if (pct >= 40) return "text-amber-700";
  return "text-red-700";
}

function getStrengthBgColor(pct: number): string {
  if (pct >= 70) return "bg-green-50";
  if (pct >= 40) return "bg-amber-50";
  return "bg-red-50";
}

const sizeStyles = {
  sm: { bar: "h-2", text: "text-xs" },
  md: { bar: "h-3", text: "text-sm" },
  lg: { bar: "h-4", text: "text-base" },
};

export default function StrengthMeter({
  percentage,
  className = "",
  showLabel = true,
  size = "md",
}: StrengthMeterProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const clamped = Math.min(100, Math.max(0, percentage));
    const timer = setTimeout(() => setAnimatedWidth(clamped), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const label = getStrengthLabel(percentage);
  const barColor = getStrengthColor(percentage);
  const textColor = getStrengthTextColor(percentage);
  const bgColor = getStrengthBgColor(percentage);
  const styles = sizeStyles[size];

  return (
    <div className={`${className}`}>
      {showLabel && (
        <div className="flex items-center justify-between mb-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 ${styles.text} font-semibold ${textColor} ${bgColor}`}
          >
            {label === "Strong" && (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {label === "Moderate" && (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            )}
            {label === "Weak" && (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {label}
          </span>
          <span className={`${styles.text} font-bold ${textColor}`}>
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      <div className={`w-full ${styles.bar} rounded-full bg-gray-200 overflow-hidden`}>
        <div
          className={`${styles.bar} rounded-full ${barColor} transition-all duration-700 ease-out`}
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  );
}
