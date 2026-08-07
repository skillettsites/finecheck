"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { PRODUCTS } from "@/data/products";
import { trackBeginCheckout } from "@/lib/gtag";
import { getAttribution } from "@/lib/tracking";

// The Escalation Pack has no appeal form in front of it, so this optional
// details form is the buyer's chance to add their own information. Anything
// filled in here is pre-filled into all 5 documents by the webhook; anything
// left blank stays as a [BRACKETED] placeholder for them to complete. Details
// are never required, so a buyer in a hurry can still pay in one tap.
const FIELDS: { key: string; label: string; placeholder: string; type?: string }[] = [
  { key: "name", label: "Your full name", placeholder: "e.g., Carl Lewis" },
  { key: "address", label: "Your address", placeholder: "e.g., 12 High Street, Swansea, SA1 1AB", type: "textarea" },
  { key: "vehicleReg", label: "Vehicle registration", placeholder: "e.g., AB12 CDE" },
  { key: "pcnReference", label: "Parking charge / PCN reference", placeholder: "e.g., PE1234567" },
  { key: "operatorName", label: "Parking operator name", placeholder: "e.g., ParkingEye" },
  { key: "email", label: "Email for delivery", placeholder: "your@email.com", type: "email" },
];

export default function PurchaseSection() {
  const [loading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState<Record<string, string>>({});
  const product = PRODUCTS["escalation-pack"];

  const update = (key: string, value: string) =>
    setDetails((d) => ({ ...d, [key]: value }));

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    trackBeginCheckout(product.id, product.name, product.price);
    try {
      const cleaned = Object.fromEntries(
        Object.entries(details).filter(([, v]) => v && v.trim())
      );
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          ...(Object.keys(cleaned).length ? { details: cleaned } : {}),
          attribution: getAttribution(),
        }),
      });
      const data = await res.json();
      if (res.ok && data?.url) {
        window.location.href = data.url;
        return;
      }
      setLoading(false);
      alert("Could not start checkout. Please try again.");
    } catch {
      setLoading(false);
      alert("Could not start checkout. Please try again.");
    }
  };

  return (
    <div id="get-pack" className="w-full max-w-lg mx-auto scroll-mt-24">
      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5 text-left">
        <button
          type="button"
          onClick={() => setShowDetails((s) => !s)}
          className="flex w-full items-center justify-between text-sm font-semibold text-teal-300"
          aria-expanded={showDetails}
        >
          <span>Add your details so we pre-fill all 5 documents (optional)</span>
          <span className="text-teal-400">{showDetails ? "Hide" : "Add"}</span>
        </button>

        {showDetails && (
          <div className="mt-4 space-y-3">
            <p className="text-xs text-slate-400">
              Whatever you add here is filled into every letter for you. Leave anything blank and it
              stays as a placeholder you can complete yourself. Letter-specific details (their date,
              a court or claim number) are always left for you to add.
            </p>
            {FIELDS.map((f) => (
              <div key={f.key}>
                <label className="block text-xs font-medium text-slate-300 mb-1">{f.label}</label>
                {f.type === "textarea" ? (
                  <textarea
                    value={details[f.key] || ""}
                    onChange={(e) => update(f.key, e.target.value)}
                    placeholder={f.placeholder}
                    rows={2}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                ) : (
                  <input
                    type={f.type || "text"}
                    value={details[f.key] || ""}
                    onChange={(e) =>
                      update(f.key, f.key === "vehicleReg" ? e.target.value.toUpperCase() : e.target.value)
                    }
                    placeholder={f.placeholder}
                    className="w-full rounded-lg border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white placeholder-slate-500 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-center">
        <Button variant="accent" size="lg" onClick={handleClick} disabled={loading}>
          {loading ? "Opening secure checkout..." : "Get the Escalation Pack, £19.99"}
        </Button>
      </div>
    </div>
  );
}
