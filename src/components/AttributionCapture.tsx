"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/tracking";

/**
 * Captures first-touch attribution (landing page, referrer, UTMs) on the first
 * page of the session, whatever that page is.
 *
 * Mount this GLOBALLY in the root layout, not on /appeal or /escalation-pack.
 * HomeBuyerCheck learned the hard way that capturing only on the checkout page
 * records every sale as landing_page="/check" and loses the true entry page,
 * which for this site is almost always a blog post. captureAttribution() is a
 * no-op after the first call in a session, so mounting globally cannot
 * overwrite an earlier, truer value.
 */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
