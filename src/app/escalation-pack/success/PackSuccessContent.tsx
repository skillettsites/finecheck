"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ESCALATION_DOCUMENTS } from "@/data/escalation-pack";
import { PRODUCTS } from "@/data/products";
import { trackPurchase } from "@/lib/gtag";

export default function PackSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id") || "";

  useEffect(() => {
    // GA4 purchase key event, deduped per Stripe session inside trackPurchase.
    if (sessionId.startsWith("cs_")) {
      const product = PRODUCTS["escalation-pack"];
      trackPurchase(sessionId, product.id, product.name, product.price);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Your Escalation Pack is on its way
          </h1>
          <p className="text-gray-600">
            Payment received. All five PDFs are being emailed to the address you entered at
            checkout. They usually arrive within a couple of minutes; check your spam folder if
            not.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white shadow-sm mb-6">
          <div className="border-b border-gray-200 px-6 py-3">
            <h2 className="text-sm font-semibold text-gray-900">What you will receive</h2>
          </div>
          <ul className="divide-y divide-gray-100">
            {ESCALATION_DOCUMENTS.map((doc, i) => (
              <li key={doc.id} className="flex items-start gap-3 px-6 py-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-semibold text-teal-700">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{doc.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{doc.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 mb-6">
          <h3 className="text-sm font-semibold text-teal-900 mb-2">Do this first</h3>
          <ol className="list-decimal pl-5 text-sm text-teal-900 space-y-1">
            <li>Open the Escalation Decision Guide and find your current stage</li>
            <li>Open the matching letter and fill in every [BRACKETED] placeholder</li>
            <li>Delete the guidance notes section before sending</li>
            <li>Send in writing and keep a copy of everything</li>
          </ol>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mb-8">
          <p className="text-sm text-amber-900">
            <strong>No email after 10 minutes?</strong> Check spam, then contact{" "}
            <a href="mailto:support@appealafine.co.uk" className="font-medium underline">
              support@appealafine.co.uk
            </a>{" "}
            with your payment receipt and we will resend the pack.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to AppealAFine
          </Link>
        </div>
      </div>
    </div>
  );
}
