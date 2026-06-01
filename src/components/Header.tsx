"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navigation = [
  { name: "Appeal Now", href: "/appeal" },
  {
    name: "Free Tools",
    href: "#",
    children: [
      { name: "POFA Checker", href: "/tools/pofa-checker", description: "Check if the Protection of Freedoms Act applies to your fine" },
      { name: "Ticket Scanner", href: "/tools/ticket-scanner", description: "Upload a photo of your ticket and extract the details with AI" },
      { name: "Deadline Calculator", href: "/tools/deadline-calculator", description: "Find out how long you have to appeal your PCN" },
      { name: "Contravention Codes", href: "/tools/contravention-codes", description: "Look up any UK parking contravention code" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    children: [
      { name: "Appeal Guides", href: "/guides", description: "Step-by-step guides for every type of parking fine" },
      { name: "Appeal Grounds", href: "/grounds", description: "Legal defences you can use to challenge your fine" },
      { name: "Template Letters", href: "/templates", description: "Ready-to-use appeal letter templates" },
      { name: "Local Fines & Cameras", href: "/local-fines", description: "Speed cameras, bus gates, toll and average-speed fines by location" },
      { name: "Statistics & Data", href: "/data", description: "UK parking fine statistics, success rates, and rankings" },
    ],
  },
  { name: "Operators", href: "/appeals" },
  { name: "By City", href: "/parking-fines" },
  { name: "Pricing", href: "/pricing" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl shadow-[0_1px_0_0_rgba(15,23,42,0.06),0_8px_24px_-12px_rgba(15,23,42,0.12)] border-b border-white/40"
          : "bg-white/90 backdrop-blur-md border-b border-slate-100/80"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 shadow-[0_4px_12px_-2px_rgba(13,148,136,0.45)] transition-transform group-hover:scale-105 group-active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 via-white/0 to-transparent" aria-hidden="true" />
              <svg
                className="relative h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              Appeal<span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">AFine</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {item.name}
                    <svg
                      className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 top-full mt-1 w-72 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-200 animate-in fade-in slide-in-from-top-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block rounded-lg px-3 py-2.5 hover:bg-slate-50 transition-colors"
                        >
                          <div className="text-sm font-medium text-slate-900">{child.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/appeal"
              className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-br from-teal-600 to-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_-4px_rgba(13,148,136,0.55)] transition-all hover:shadow-[0_6px_20px_-4px_rgba(13,148,136,0.7)] hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" aria-hidden="true" />
              <span className="relative">Start Your Appeal</span>
              <svg className="relative h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {item.name}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-3 border-t border-gray-100">
              <Link
                href="/appeal"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-lg bg-teal-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
              >
                Start Your Appeal
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
