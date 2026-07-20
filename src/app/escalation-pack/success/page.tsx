import type { Metadata } from "next";
import { Suspense } from "react";
import PackSuccessContent from "./PackSuccessContent";

export const metadata: Metadata = {
  title: "Your Escalation Pack is on its way",
  description:
    "Your Escalation Pack purchase is complete. All five documents are being emailed to you now.",
  robots: { index: false, follow: false },
};

export default function EscalationPackSuccessPage() {
  return (
    <Suspense>
      <PackSuccessContent />
    </Suspense>
  );
}
