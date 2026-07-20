"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { PRODUCTS } from "@/data/products";
import { trackBeginCheckout } from "@/lib/gtag";

interface BuyButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

export default function BuyButton({ size = "lg", className = "", label }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const product = PRODUCTS["escalation-pack"];

  const handleClick = async () => {
    if (loading) return;
    setLoading(true);
    trackBeginCheckout(product.id, product.name, product.price);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id }),
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
    <Button variant="accent" size={size} className={className} onClick={handleClick} disabled={loading}>
      {loading ? "Opening secure checkout..." : label || "Get the Escalation Pack, £19.99"}
    </Button>
  );
}
