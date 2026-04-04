import type { Metadata } from "next";
import SuccessContent from "@/components/appeal/SuccessContent";

export const metadata: Metadata = {
  title: "Your Appeal Letter is Ready",
  description:
    "Your personalised parking fine appeal letter has been generated. Copy or download it and submit your appeal.",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return <SuccessContent />;
}
