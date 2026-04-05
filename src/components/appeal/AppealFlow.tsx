"use client";

import { useState, useCallback, useMemo } from "react";
import { PRODUCTS } from "@/data/products";
import { ALL_COUNCIL_OPTIONS, ALL_OPERATOR_OPTIONS } from "@/data/dropdown-options";
import { assessFine, type AssessmentInput, type AssessmentResult } from "@/lib/assessment";
import { LocationAutocomplete } from "@/components/ui/LocationAutocomplete";
import SearchableSelect from "@/components/ui/SearchableSelect";

type FineType = "council" | "private" | "bus-lane" | "congestion";
type Step = 1 | 2 | 3 | 4;

const STEP_LABELS = ["Fine Type", "Details", "Assessment", "Get Your Letter"];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function CouncilIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  );
}

function PrivateIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

function BusLaneIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CongestionIcon() {
  return (
    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-5 w-5"} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-4 w-4"} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Progress Bar                                                       */
/* ------------------------------------------------------------------ */

function ProgressBar({ currentStep }: { currentStep: Step }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {STEP_LABELS.map((label, i) => {
          const stepNum = (i + 1) as Step;
          const isActive = stepNum === currentStep;
          const isComplete = stepNum < currentStep;
          return (
            <div key={label} className="flex flex-col items-center flex-1">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  isComplete
                    ? "bg-blue-800 text-white"
                    : isActive
                    ? "bg-amber-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {isComplete ? <CheckIcon className="h-4 w-4" /> : stepNum}
              </div>
              <span
                className={`mt-1.5 text-xs font-medium hidden sm:block ${
                  isActive ? "text-blue-800" : isComplete ? "text-blue-800" : "text-gray-400"
                }`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-blue-800 rounded-full transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (STEP_LABELS.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 1: Fine Type                                                  */
/* ------------------------------------------------------------------ */

const FINE_TYPES: { id: FineType; title: string; subtitle: string; description: string; icon: React.ReactNode }[] = [
  {
    id: "council",
    title: "Council Parking Fine (PCN)",
    subtitle: "Issued by the council or their enforcement officers",
    description:
      "This is a Penalty Charge Notice issued by your local council for on-street parking, residents parking, or council-run car parks. Usually has a council logo and reference number starting with letters.",
    icon: <CouncilIcon />,
  },
  {
    id: "private",
    title: "Private Parking Charge",
    subtitle: "From companies like ParkingEye, UKPC, APCOA",
    description:
      "A charge from a private company managing a car park at a supermarket, retail park, hospital, or similar. These are NOT fines; they are invoices based on an alleged breach of contract.",
    icon: <PrivateIcon />,
  },
  {
    id: "bus-lane",
    title: "Bus Lane / Moving Traffic Fine",
    subtitle: "Captured by council CCTV cameras",
    description:
      "A PCN for driving in a bus lane, making a prohibited turn, or entering a restricted zone. Usually issued by post with CCTV images of your vehicle.",
    icon: <BusLaneIcon />,
  },
  {
    id: "congestion",
    title: "Congestion Charge / ULEZ Fine",
    subtitle: "London congestion, ULEZ, or Clean Air Zone charges",
    description:
      "A penalty for not paying the London Congestion Charge, ULEZ charge, or a regional Clean Air Zone fee. Issued by TfL or the local authority.",
    icon: <CongestionIcon />,
  },
];

function StepFineType({ onSelect }: { onSelect: (type: FineType) => void }) {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">What type of fine did you receive?</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Select the type of parking fine or charge you want to appeal. Not sure? A council PCN usually has a council
          logo, while private charges come from companies like ParkingEye or UKPC.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {FINE_TYPES.map((ft) => (
          <button
            key={ft.id}
            onClick={() => onSelect(ft.id)}
            className="group relative flex flex-col items-start text-left rounded-xl border-2 border-gray-200 bg-white p-5 transition-all hover:border-blue-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-800 mb-3 group-hover:bg-blue-800 group-hover:text-white transition-colors">
              {ft.icon}
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">{ft.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{ft.subtitle}</p>
            <p className="text-xs text-gray-400 leading-relaxed">{ft.description}</p>
            <div className="absolute top-4 right-4 text-gray-300 group-hover:text-blue-800 transition-colors">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5 text-sm text-blue-800">
          <ShieldCheckIcon className="h-5 w-5 flex-shrink-0" />
          <span>Your information is secure and never shared with the operator or council</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 2: Fine Details                                               */
/* ------------------------------------------------------------------ */

const CIRCUMSTANCE_PROMPTS: Record<FineType, string[]> = {
  council: [
    "Was the Pay and Display machine broken?",
    "Were the signs or road markings unclear?",
    "Did you have a valid ticket or permit?",
    "Were you loading or unloading?",
    "Was there a medical emergency?",
    "Is your vehicle a Blue Badge holder?",
  ],
  private: [
    "Was the payment machine broken or the app not working?",
    "Were the car park signs unclear or hidden?",
    "Did you have a valid ticket or pay for parking?",
    "Were you only a few minutes over the time limit?",
    "Was there a medical emergency?",
    "Do you think the ANPR camera misread your plate?",
  ],
  "bus-lane": [
    "Were the bus lane signs unclear or missing?",
    "Did you move into the lane to avoid an emergency vehicle?",
    "Were you turning left at a junction?",
    "Was the road layout confusing?",
  ],
  congestion: [
    "Did you pay or attempt to pay the charge?",
    "Is your vehicle exempt (electric, disabled, etc.)?",
    "Were the zone boundary signs unclear?",
    "Was there a system or payment error?",
  ],
};

interface FormData {
  fineType: FineType;
  // Council
  councilName: string;
  pcnReference: string;
  contraventionDescription: string;
  // Private
  operatorName: string;
  parkingEventDate: string;
  ntkReceivedDate: string;
  whatHappened: string;
  // Common
  fineDate: string;
  fineAmount: string;
  location: string;
  vehicleReg: string;
  wasDriver: "yes" | "no" | "prefer-not-to-say";
  circumstances: string;
}

const INITIAL_FORM: FormData = {
  fineType: "council",
  councilName: "",
  pcnReference: "",
  contraventionDescription: "",
  operatorName: "",
  parkingEventDate: "",
  ntkReceivedDate: "",
  whatHappened: "",
  fineDate: "",
  fineAmount: "",
  location: "",
  vehicleReg: "",
  wasDriver: "yes",
  circumstances: "",
};

function StepDetails({
  fineType,
  form,
  onChange,
  onNext,
  onBack,
  errors,
}: {
  fineType: FineType;
  form: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  errors: Partial<Record<keyof FormData, string>>;
}) {
  const fieldClass = (field: keyof FormData) =>
    `w-full rounded-lg border ${
      errors[field] ? "border-red-400 ring-1 ring-red-400" : "border-gray-300"
    } px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition-colors`;

  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your fine</h2>
        <p className="text-gray-600">
          The more detail you provide, the more accurate your assessment will be. All fields marked with * are required.
        </p>
      </div>

      <div className="space-y-6">
        {/* Type-specific fields */}
        {fineType === "council" && (
          <>
            <div>
              <label className={labelClass}>Council name *</label>
              <SearchableSelect
                options={ALL_COUNCIL_OPTIONS}
                value={form.councilName}
                onChange={(val) => onChange("councilName", val)}
                placeholder="Search for your council..."
                className={fieldClass("councilName")}
                allowCustom
              />
              {errors.councilName && <p className="mt-1 text-xs text-red-600">{errors.councilName}</p>}
            </div>
            <div>
              <label className={labelClass}>PCN reference number</label>
              <input
                type="text"
                value={form.pcnReference}
                onChange={(e) => onChange("pcnReference", e.target.value)}
                placeholder="Found on your penalty charge notice"
                className={fieldClass("pcnReference")}
              />
            </div>
            <div>
              <label className={labelClass}>What do they say you did? *</label>
              <input
                type="text"
                value={form.contraventionDescription}
                onChange={(e) => onChange("contraventionDescription", e.target.value)}
                placeholder="e.g., Parked in a residents bay without a permit"
                className={fieldClass("contraventionDescription")}
              />
              {errors.contraventionDescription && (
                <p className="mt-1 text-xs text-red-600">{errors.contraventionDescription}</p>
              )}
            </div>
          </>
        )}

        {fineType === "private" && (
          <>
            <div>
              <label className={labelClass}>Parking company name *</label>
              <SearchableSelect
                options={ALL_OPERATOR_OPTIONS}
                value={form.operatorName}
                onChange={(val) => onChange("operatorName", val)}
                placeholder="Search for the parking company..."
                className={fieldClass("operatorName")}
                allowCustom
              />
              {errors.operatorName && <p className="mt-1 text-xs text-red-600">{errors.operatorName}</p>}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Date of parking event *</label>
                <input
                  type="date"
                  value={form.parkingEventDate}
                  onChange={(e) => onChange("parkingEventDate", e.target.value)}
                  className={fieldClass("parkingEventDate")}
                />
                {errors.parkingEventDate && <p className="mt-1 text-xs text-red-600">{errors.parkingEventDate}</p>}
              </div>
              <div>
                <label className={labelClass}>
                  Date you received the Notice to Keeper *
                </label>
                <input
                  type="date"
                  value={form.ntkReceivedDate}
                  onChange={(e) => onChange("ntkReceivedDate", e.target.value)}
                  className={fieldClass("ntkReceivedDate")}
                />
                <p className="mt-1 text-xs text-gray-500">
                  This is the date the letter arrived, not the date on the letter. Critical for checking the 14-day POFA rule.
                </p>
                {errors.ntkReceivedDate && <p className="mt-1 text-xs text-red-600">{errors.ntkReceivedDate}</p>}
              </div>
            </div>
            <div>
              <label className={labelClass}>What happened?</label>
              <textarea
                value={form.whatHappened}
                onChange={(e) => onChange("whatHappened", e.target.value)}
                placeholder="Briefly describe the parking event. Were you a customer? How long were you parked?"
                rows={3}
                className={fieldClass("whatHappened")}
              />
            </div>
          </>
        )}

        {(fineType === "bus-lane" || fineType === "congestion") && (
          <>
            <div>
              <label className={labelClass}>Issuing authority *</label>
              <SearchableSelect
                options={ALL_COUNCIL_OPTIONS}
                value={form.councilName}
                onChange={(val) => onChange("councilName", val)}
                placeholder={fineType === "congestion" ? "Search for authority (e.g., TfL)..." : "Search for council..."}
                className={fieldClass("councilName")}
                allowCustom
              />
              {errors.councilName && <p className="mt-1 text-xs text-red-600">{errors.councilName}</p>}
            </div>
            <div>
              <label className={labelClass}>PCN reference number</label>
              <input
                type="text"
                value={form.pcnReference}
                onChange={(e) => onChange("pcnReference", e.target.value)}
                placeholder="Found on your penalty charge notice"
                className={fieldClass("pcnReference")}
              />
            </div>
          </>
        )}

        {/* Common fields */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Fine details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fineType !== "private" && (
              <div>
                <label className={labelClass}>Date of fine *</label>
                <input
                  type="date"
                  value={form.fineDate}
                  onChange={(e) => onChange("fineDate", e.target.value)}
                  className={fieldClass("fineDate")}
                />
                {errors.fineDate && <p className="mt-1 text-xs text-red-600">{errors.fineDate}</p>}
              </div>
            )}
            <div>
              <label className={labelClass}>Fine amount (pounds) *</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">£</span>
                <input
                  type="number"
                  value={form.fineAmount}
                  onChange={(e) => onChange("fineAmount", e.target.value)}
                  placeholder="e.g., 100"
                  className={`${fieldClass("fineAmount")} pl-7`}
                />
              </div>
              {errors.fineAmount && <p className="mt-1 text-xs text-red-600">{errors.fineAmount}</p>}
            </div>
          </div>
        </div>

        <div>
          <label className={labelClass}>Location *</label>
          <LocationAutocomplete
            value={form.location}
            onChange={(val) => onChange("location", val)}
            placeholder={
              fineType === "private"
                ? "e.g., Tesco Extra car park, High Street, Manchester"
                : "e.g., High Street, near the junction with Park Road"
            }
            className={fieldClass("location")}
          />
          {errors.location && <p className="mt-1 text-xs text-red-600">{errors.location}</p>}
        </div>

        <div>
          <label className={labelClass}>Vehicle registration *</label>
          <input
            type="text"
            value={form.vehicleReg}
            onChange={(e) => onChange("vehicleReg", e.target.value.toUpperCase())}
            placeholder="e.g., AB12 CDE"
            maxLength={8}
            className={`${fieldClass("vehicleReg")} uppercase tracking-wider`}
          />
          {errors.vehicleReg && <p className="mt-1 text-xs text-red-600">{errors.vehicleReg}</p>}
        </div>

        <div>
          <label className={labelClass}>Were you the driver?</label>
          <div className="flex gap-3">
            {(["yes", "no", "prefer-not-to-say"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => onChange("wasDriver", opt)}
                className={`flex-1 rounded-lg border-2 px-3 py-2.5 text-sm font-medium transition-colors ${
                  form.wasDriver === opt
                    ? "border-blue-800 bg-blue-50 text-blue-800"
                    : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {opt === "yes" ? "Yes" : opt === "no" ? "No" : "Prefer not to say"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClass}>What were the circumstances? *</label>
          <p className="text-xs text-gray-500 mb-2">Consider the following:</p>
          <ul className="text-xs text-gray-500 mb-3 space-y-0.5">
            {CIRCUMSTANCE_PROMPTS[fineType].map((prompt) => (
              <li key={prompt} className="flex items-start gap-1.5">
                <span className="text-blue-800 mt-0.5">&#8250;</span>
                {prompt}
              </li>
            ))}
          </ul>
          <textarea
            value={form.circumstances}
            onChange={(e) => onChange("circumstances", e.target.value)}
            placeholder="Describe what happened in your own words. Include any relevant details about signs, machines, timing, or circumstances."
            rows={4}
            className={fieldClass("circumstances")}
          />
          {errors.circumstances && <p className="mt-1 text-xs text-red-600">{errors.circumstances}</p>}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </button>
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        >
          Get Free Assessment
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step 3: Assessment                                                 */
/* ------------------------------------------------------------------ */

function StrengthBadge({ strength }: { strength: "strong" | "moderate" | "weak" }) {
  const config = {
    strong: { bg: "bg-green-100", text: "text-green-800", border: "border-green-200", label: "Strong Case" },
    moderate: { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-200", label: "Moderate Case" },
    weak: { bg: "bg-red-100", text: "text-red-800", border: "border-red-200", label: "Weaker Case" },
  };
  const c = config[strength];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border ${c.border} ${c.bg} px-3 py-1 text-sm font-semibold ${c.text}`}>
      <span
        className={`h-2 w-2 rounded-full ${
          strength === "strong" ? "bg-green-500" : strength === "moderate" ? "bg-amber-500" : "bg-red-500"
        }`}
      />
      {c.label}
    </span>
  );
}

function ProbabilityRing({ value }: { value: number }) {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (value / 100) * circumference;
  const colour = value >= 55 ? "#16a34a" : value >= 35 ? "#d97706" : "#dc2626";

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="h-28 w-28 -rotate-90">
        <circle cx="56" cy="56" r="42" strokeWidth="8" stroke="#e5e7eb" fill="none" />
        <circle
          cx="56"
          cy="56"
          r="42"
          strokeWidth="8"
          stroke={colour}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold text-gray-900">{value}%</span>
        <span className="text-[10px] text-gray-500 uppercase tracking-wider">success</span>
      </div>
    </div>
  );
}

function StepAssessment({
  assessment,
  form,
  onBack,
  onSelectProduct,
}: {
  assessment: AssessmentResult;
  form: FormData;
  onBack: () => void;
  onSelectProduct: (productId: string) => void;
}) {
  const products = Object.values(PRODUCTS);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Free Appeal Assessment</h2>
        <p className="text-gray-600">
          Based on the details you provided, here is our analysis of your case.
        </p>
      </div>

      {/* Summary card */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <ProbabilityRing value={assessment.successProbability} />
          <div className="flex-1 text-center sm:text-left">
            <div className="mb-2">
              <StrengthBadge strength={assessment.overallStrength} />
            </div>
            <p className="text-sm text-gray-600">
              Based on similar cases, we estimate a{" "}
              <strong>
                {assessment.successProbability - 5}-{Math.min(assessment.successProbability + 10, 95)}% chance of
                success
              </strong>{" "}
              with a well-crafted appeal using the legal grounds identified below.
            </p>
            {assessment.deadlineDays !== null && assessment.deadlineDays > 0 && (
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-800">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                You have approximately {assessment.deadlineDays} days remaining to appeal
              </div>
            )}
            {assessment.deadlineDays !== null && assessment.deadlineDays <= 0 && (
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-800">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                Your initial appeal deadline may have passed. Check if you can still make formal representations.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Defence grounds */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Legal Grounds Identified ({assessment.grounds.length})
        </h3>
        <div className="space-y-4">
          {assessment.grounds.map((ground) => (
            <div
              key={ground.id}
              className={`rounded-lg border-l-4 p-4 ${
                ground.strength === "strong"
                  ? "border-l-green-500 bg-green-50"
                  : ground.strength === "moderate"
                  ? "border-l-amber-500 bg-amber-50"
                  : "border-l-gray-400 bg-gray-50"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-1.5">
                <h4 className="text-sm font-semibold text-gray-900">{ground.title}</h4>
                <span
                  className={`shrink-0 rounded px-2 py-0.5 text-xs font-medium uppercase tracking-wide ${
                    ground.strength === "strong"
                      ? "bg-green-200 text-green-800"
                      : ground.strength === "moderate"
                      ? "bg-amber-200 text-amber-800"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {ground.strength}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-1.5">{ground.description}</p>
              <p className="text-xs text-gray-500">Legal basis: {ground.legalBasis}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next steps */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">What to do next</h3>
        <ol className="space-y-2">
          {assessment.nextSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Upsell */}
      <div className="rounded-xl border-2 border-blue-800 bg-blue-50/50 p-6 mb-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Personalised Appeal Letter</h3>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Your letter will include the specific legal arguments identified in your assessment, tailored to your
            {form.fineType === "private" && form.operatorName ? ` ${form.operatorName}` : ""} case, with correct
            formatting and legal references.
          </p>
          {assessment.letterArguments.length > 0 && (
            <div className="mt-4 text-left max-w-md mx-auto">
              <p className="text-xs font-semibold text-gray-700 mb-2">Your letter will address:</p>
              <ul className="space-y-1">
                {assessment.letterArguments.map((arg, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckIcon className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                    {arg}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => {
            const isRecommended = product.id === assessment.recommendedProduct;
            return (
              <div
                key={product.id}
                className={`relative rounded-xl border-2 bg-white p-5 transition-all ${
                  isRecommended ? "border-amber-500 shadow-lg" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-0.5 text-xs font-semibold text-white">
                    Recommended
                  </div>
                )}
                <h4 className="text-sm font-semibold text-gray-900 mb-1">{product.name}</h4>
                <div className="text-2xl font-bold text-blue-800 mb-2">
                  £{(product.price / 100).toFixed(2)}
                </div>
                <p className="text-xs text-gray-600 mb-3">{product.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckIcon className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onSelectProduct(product.id)}
                  className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    isRecommended
                      ? "bg-amber-500 text-white hover:bg-amber-600"
                      : "bg-blue-800 text-white hover:bg-blue-700"
                  }`}
                >
                  Select
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Edit Details
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main AppealFlow                                                    */
/* ------------------------------------------------------------------ */

export default function AppealFlow() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [assessment, setAssessment] = useState<AssessmentResult | null>(null);

  const handleFineTypeSelect = useCallback((type: FineType) => {
    setForm((prev) => ({ ...prev, fineType: type }));
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleFieldChange = useCallback((field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const validateStep2 = useCallback((): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (form.fineType === "council" || form.fineType === "bus-lane" || form.fineType === "congestion") {
      if (!form.councilName.trim()) errs.councilName = "Please enter the council or issuing authority name";
      if (!form.fineDate) errs.fineDate = "Please enter the date of the fine";
    }

    if (form.fineType === "council" && !form.contraventionDescription.trim()) {
      errs.contraventionDescription = "Please describe what they say you did";
    }

    if (form.fineType === "private") {
      if (!form.operatorName.trim()) errs.operatorName = "Please enter the parking company name";
      if (!form.parkingEventDate) errs.parkingEventDate = "Please enter the date of the parking event";
      if (!form.ntkReceivedDate) errs.ntkReceivedDate = "Please enter when you received the Notice to Keeper";
    }

    if (!form.fineAmount.trim()) errs.fineAmount = "Please enter the fine amount";
    if (!form.location.trim()) errs.location = "Please enter the location";
    if (!form.vehicleReg.trim()) errs.vehicleReg = "Please enter your vehicle registration";
    if (!form.circumstances.trim()) errs.circumstances = "Please describe the circumstances";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }, [form]);

  const handleStep2Next = useCallback(() => {
    if (!validateStep2()) {
      // Scroll to first error
      const firstError = document.querySelector("[class*='text-red-600']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Run assessment
    const input: AssessmentInput = {
      fineType: form.fineType,
      councilName: form.councilName,
      pcnReference: form.pcnReference,
      contraventionDescription: form.contraventionDescription,
      operatorName: form.operatorName,
      parkingEventDate: form.parkingEventDate,
      ntkReceivedDate: form.ntkReceivedDate,
      whatHappened: form.whatHappened,
      fineDate: form.fineDate || form.parkingEventDate,
      fineAmount: form.fineAmount ? parseFloat(form.fineAmount) : undefined,
      location: form.location,
      vehicleReg: form.vehicleReg,
      wasDriver: form.wasDriver,
      circumstances: form.circumstances,
    };

    const result = assessFine(input);
    setAssessment(result);
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [form, validateStep2]);

  const handleSelectProduct = useCallback(
    (productId: string) => {
      // Save form data to sessionStorage for the success page
      try {
        sessionStorage.setItem(
          "finecheck_appeal",
          JSON.stringify({
            form,
            assessment,
            productId,
            timestamp: new Date().toISOString(),
          })
        );
      } catch {
        // sessionStorage might not be available
      }

      // Redirect to Stripe Checkout
      const params = new URLSearchParams({
        product: productId,
        fineType: form.fineType,
      });
      window.location.href = `/api/checkout?${params.toString()}`;
    },
    [form, assessment]
  );

  const handleBack = useCallback(() => {
    setStep((prev) => Math.max(1, prev - 1) as Step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <ProgressBar currentStep={step} />

        {step === 1 && <StepFineType onSelect={handleFineTypeSelect} />}

        {step === 2 && (
          <StepDetails
            fineType={form.fineType}
            form={form}
            onChange={handleFieldChange}
            onNext={handleStep2Next}
            onBack={handleBack}
            errors={errors}
          />
        )}

        {step === 3 && assessment && (
          <StepAssessment
            assessment={assessment}
            form={form}
            onBack={handleBack}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {/* Trust signals */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="flex justify-center mb-2">
                <ShieldCheckIcon className="h-8 w-8 text-blue-800" />
              </div>
              <h4 className="text-sm font-semibold text-gray-900">Secure and Confidential</h4>
              <p className="text-xs text-gray-500 mt-1">Your data is encrypted and never shared with operators or councils</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <svg className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-gray-900">Based on UK Law</h4>
              <p className="text-xs text-gray-500 mt-1">All assessments reference the correct legislation, case law, and Codes of Practice</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                <svg className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold text-gray-900">Free Assessment</h4>
              <p className="text-xs text-gray-500 mt-1">Check your fine and see your chances for free, with no obligation to purchase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
