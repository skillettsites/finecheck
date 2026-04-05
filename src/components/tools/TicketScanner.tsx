"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

type Confidence = "high" | "medium" | "low";

interface FieldResult {
  value: string | number | null;
  confidence: Confidence;
}

interface ScanResult {
  fine_type: FieldResult;
  issuer_name: FieldResult;
  reference_number: FieldResult;
  date_of_contravention: FieldResult;
  fine_amount: FieldResult;
  discounted_amount: FieldResult;
  vehicle_registration: FieldResult;
  contravention_description: FieldResult;
  location: FieldResult;
}

const CONFIDENCE_STYLES: Record<Confidence, { dot: string; label: string }> = {
  high: { dot: "bg-green-500", label: "High confidence" },
  medium: { dot: "bg-amber-500", label: "Medium confidence" },
  low: { dot: "bg-red-500", label: "Low confidence" },
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];

export default function TicketScanner() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [editedValues, setEditedValues] = useState<Record<string, string | number | null>>({});
  const [error, setError] = useState<{ type: string; message: string } | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const processFile = useCallback(async (file: File) => {
    setError(null);
    setResult(null);
    setEditedValues({});

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError({
        type: "invalid_type",
        message: "Please upload a JPG, PNG, WebP, or HEIC image.",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError({
        type: "too_large",
        message: "File too large. Maximum size is 10MB.",
      });
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);

    // Send to API
    setScanning(true);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/scan-ticket", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError({
          type: data.error || "unknown",
          message: data.message || data.error || "Something went wrong. Please try again.",
        });
        setScanning(false);
        return;
      }

      setResult(data.data);
    } catch {
      setError({
        type: "network",
        message: "Could not connect to the server. Please check your connection and try again.",
      });
    } finally {
      setScanning(false);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const getValue = (key: string): string | number | null => {
    if (key in editedValues) return editedValues[key];
    if (result && key in result) return result[key as keyof ScanResult].value;
    return null;
  };

  const getConfidence = (key: string): Confidence => {
    if (key in editedValues) return "high";
    if (result && key in result) return result[key as keyof ScanResult].confidence;
    return "low";
  };

  const updateValue = (key: string, value: string | number | null) => {
    setEditedValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleStartAppeal = () => {
    if (!result) return;

    const data = {
      fineType: getValue("fine_type"),
      issuerName: getValue("issuer_name"),
      referenceNumber: getValue("reference_number"),
      fineDate: getValue("date_of_contravention"),
      fineAmount: getValue("fine_amount"),
      discountedAmount: getValue("discounted_amount"),
      vehicleReg: getValue("vehicle_registration"),
      contravention: getValue("contravention_description"),
      location: getValue("location"),
    };

    // Store in sessionStorage for the appeal page to pick up
    sessionStorage.setItem("scannedTicketData", JSON.stringify(data));
    router.push("/appeal?from=scanner");
  };

  const resetScanner = () => {
    setPreview(null);
    setResult(null);
    setEditedValues({});
    setError(null);
    setScanning(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (cameraInputRef.current) cameraInputRef.current.value = "";
  };

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      {!preview && !scanning && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`relative rounded-xl border-2 border-dashed p-8 sm:p-12 text-center transition-colors cursor-pointer ${
            dragOver
              ? "border-blue-800 bg-blue-50"
              : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/50"
          }`}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-8 w-8 text-blue-800"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">
                Drop your photo here or click to upload
              </p>
              <p className="mt-1 text-sm text-gray-500">
                JPG, PNG, WebP, or HEIC. Up to 10MB.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Choose File
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  cameraInputRef.current?.click();
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-blue-800 px-5 py-2.5 text-sm font-semibold text-blue-800 hover:bg-blue-50 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
                Take Photo
              </button>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
            onChange={handleFileChange}
            className="hidden"
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      )}

      {/* Scanning State */}
      {scanning && preview && (
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <div className="relative">
            <img
              src={preview}
              alt="Your parking ticket"
              className="w-full max-h-80 object-contain bg-gray-100"
            />
            {/* Scanning overlay */}
            <div className="absolute inset-0 bg-blue-800/10">
              <div className="absolute inset-x-0 h-1 bg-blue-500/60 animate-scan" />
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <svg
                className="h-5 w-5 text-blue-800 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <p className="text-base font-medium text-gray-900">
                Analysing your ticket...
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              This usually takes 5 to 10 seconds
            </p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          {preview && !scanning && (
            <img
              src={preview}
              alt="Uploaded image"
              className="w-full max-h-48 object-contain bg-gray-100 rounded-lg mb-4"
            />
          )}
          <div className="flex gap-3">
            <svg
              className="h-6 w-6 text-red-600 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            <div>
              <p className="font-medium text-red-900">{error.message}</p>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={resetScanner}
                  className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
                {(error.type === "not_a_ticket" || error.type === "parse_error") && (
                  <a
                    href="/appeal"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Enter Details Manually
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {result && !scanning && (
        <div className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          {/* Image preview with success badge */}
          <div className="relative">
            {preview && (
              <img
                src={preview}
                alt="Your parking ticket"
                className="w-full max-h-64 object-contain bg-gray-100"
              />
            )}
            <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Scan Complete
            </div>
          </div>

          {/* Extracted fields */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Extracted Details
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Review the details below and correct anything that looks wrong.
            </p>

            <div className="space-y-4">
              {/* Fine Type */}
              <FieldRow
                label="Fine Type"
                confidence={getConfidence("fine_type")}
              >
                <select
                  value={String(getValue("fine_type") || "")}
                  onChange={(e) => updateValue("fine_type", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select type</option>
                  <option value="council">Council PCN (Penalty Charge Notice)</option>
                  <option value="private">Private Parking Charge Notice</option>
                </select>
              </FieldRow>

              {/* Issuer Name */}
              <FieldRow
                label="Operator / Council"
                confidence={getConfidence("issuer_name")}
              >
                <input
                  type="text"
                  value={String(getValue("issuer_name") || "")}
                  onChange={(e) => updateValue("issuer_name", e.target.value)}
                  placeholder="e.g. ParkingEye or Westminster City Council"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </FieldRow>

              {/* Reference Number */}
              <FieldRow
                label="PCN / Reference Number"
                confidence={getConfidence("reference_number")}
              >
                <input
                  type="text"
                  value={String(getValue("reference_number") || "")}
                  onChange={(e) => updateValue("reference_number", e.target.value)}
                  placeholder="Reference number from the ticket"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </FieldRow>

              {/* Date */}
              <FieldRow
                label="Date of Contravention"
                confidence={getConfidence("date_of_contravention")}
              >
                <input
                  type="date"
                  value={String(getValue("date_of_contravention") || "")}
                  onChange={(e) => updateValue("date_of_contravention", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </FieldRow>

              {/* Fine Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldRow
                  label="Fine Amount"
                  confidence={getConfidence("fine_amount")}
                >
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                      £
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      value={getValue("fine_amount") ?? ""}
                      onChange={(e) =>
                        updateValue(
                          "fine_amount",
                          e.target.value ? parseFloat(e.target.value) : null
                        )
                      }
                      placeholder="0.00"
                      className="w-full rounded-lg border border-gray-300 pl-7 pr-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </FieldRow>

                <FieldRow
                  label="Discounted Amount"
                  confidence={getConfidence("discounted_amount")}
                >
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                      £
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      value={getValue("discounted_amount") ?? ""}
                      onChange={(e) =>
                        updateValue(
                          "discounted_amount",
                          e.target.value ? parseFloat(e.target.value) : null
                        )
                      }
                      placeholder="0.00"
                      className="w-full rounded-lg border border-gray-300 pl-7 pr-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </FieldRow>
              </div>

              {/* Vehicle Registration */}
              <FieldRow
                label="Vehicle Registration"
                confidence={getConfidence("vehicle_registration")}
              >
                <input
                  type="text"
                  value={String(getValue("vehicle_registration") || "")}
                  onChange={(e) =>
                    updateValue("vehicle_registration", e.target.value.toUpperCase())
                  }
                  placeholder="e.g. AB12 CDE"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm uppercase focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </FieldRow>

              {/* Contravention Description */}
              <FieldRow
                label="Contravention"
                confidence={getConfidence("contravention_description")}
              >
                <input
                  type="text"
                  value={String(getValue("contravention_description") || "")}
                  onChange={(e) =>
                    updateValue("contravention_description", e.target.value)
                  }
                  placeholder="What you are alleged to have done"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </FieldRow>

              {/* Location */}
              <FieldRow
                label="Location"
                confidence={getConfidence("location")}
              >
                <input
                  type="text"
                  value={String(getValue("location") || "")}
                  onChange={(e) => updateValue("location", e.target.value)}
                  placeholder="Where the alleged contravention occurred"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </FieldRow>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleStartAppeal}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors"
              >
                Looks Correct, Start My Appeal
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button
                onClick={resetScanner}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Scan a Different Ticket
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scanning animation CSS */}
      <style jsx global>{`
        @keyframes scan {
          0% {
            top: 0;
          }
          50% {
            top: calc(100% - 4px);
          }
          100% {
            top: 0;
          }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
          position: absolute;
        }
      `}</style>
    </div>
  );
}

function FieldRow({
  label,
  confidence,
  children,
}: {
  label: string;
  confidence: Confidence;
  children: React.ReactNode;
}) {
  const style = CONFIDENCE_STYLES[confidence];
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <span
          className="inline-flex items-center gap-1"
          title={style.label}
        >
          <span className={`h-2 w-2 rounded-full ${style.dot}`} />
          <span className="text-xs text-gray-400">{style.label}</span>
        </span>
      </div>
      {children}
    </div>
  );
}
