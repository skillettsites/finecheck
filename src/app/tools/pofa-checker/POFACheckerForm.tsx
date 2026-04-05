"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import StrengthMeter from "@/components/ui/StrengthMeter";

type Answer = "yes" | "no" | "not-sure" | "";
type DriverAnswer = "yes" | "no" | "prefer-not-to-say" | "";

interface FormData {
  eventDate: string;
  ntkDate: string;
  addressedToKeeper: Answer;
  containsKeeperStatement: Answer;
  noticeOnWindscreen: Answer;
  wasDriver: DriverAnswer;
}

interface Result {
  status: "invalid" | "issues" | "compliant";
  daysBetween: number;
  strength: number;
  headline: string;
  explanation: string;
  details: string[];
}

function calculateResult(data: FormData): Result {
  const event = new Date(data.eventDate);
  const ntk = new Date(data.ntkDate);

  // Calculate days: starts day after event
  const diffMs = ntk.getTime() - event.getTime();
  const daysBetween = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const issues: string[] = [];
  let strength = 0;

  // Check 14-day rule (the most important check)
  const isLate = daysBetween > 14;

  if (isLate) {
    strength = 85;
    issues.push(
      `The NtK was served ${daysBetween} days after the event, exceeding the 14-day limit by ${daysBetween - 14} day${daysBetween - 14 === 1 ? "" : "s"}.`
    );
  }

  // Check if addressed to keeper
  if (data.addressedToKeeper === "no") {
    strength = Math.max(strength, 75);
    issues.push(
      "The NtK was not addressed to the registered keeper. Under POFA 2012, the notice must be served on the keeper for keeper liability to apply."
    );
  }

  // Check keeper liability statement
  if (data.containsKeeperStatement === "no") {
    strength = Math.max(strength, 65);
    issues.push(
      "The NtK does not appear to contain the prescribed statement about keeper liability. This is a required element under Schedule 4."
    );
  } else if (data.containsKeeperStatement === "not-sure") {
    strength = Math.max(strength, 45);
    issues.push(
      "You are unsure whether the NtK contains the required keeper liability statement. Check for wording that states the keeper is liable unless they name the driver."
    );
  }

  // Check Notice to Driver
  if (data.noticeOnWindscreen === "no" && isLate) {
    strength = Math.min(strength + 5, 95);
    issues.push(
      "No Notice to Driver was left on the windscreen. While not always required, the absence of an NtD combined with a late NtK strengthens the non-compliance argument."
    );
  } else if (data.noticeOnWindscreen === "no") {
    issues.push(
      "No Notice to Driver was left on the windscreen. If no NtD was given, the 14-day period runs from the date of the alleged contravention itself."
    );
  }

  // Driver status
  if (data.wasDriver === "no" && isLate) {
    strength = Math.min(strength + 5, 95);
    issues.push(
      "You were not the driver. Since the NtK was late, keeper liability does not apply and the operator must identify and pursue the actual driver."
    );
  } else if (data.wasDriver === "no" && !isLate) {
    issues.push(
      "You were not the driver. However, the NtK timing appears compliant, so keeper liability may still transfer to you unless you formally name the driver."
    );
  }

  // Determine overall status
  if (isLate || data.addressedToKeeper === "no") {
    return {
      status: "invalid",
      daysBetween,
      strength,
      headline: "Your fine may be INVALID",
      explanation: isLate
        ? `The operator appears to have failed the 14-day Notice to Keeper requirement under POFA 2012 Schedule 4. The NtK was served ${daysBetween} days after the event, which is ${daysBetween - 14} day${daysBetween - 14 === 1 ? "" : "s"} beyond the legal limit. This means keeper liability does not apply, and the operator must prove who was driving.`
        : "The NtK was not properly addressed to the registered keeper, which is a fundamental requirement under POFA 2012 Schedule 4 for keeper liability to transfer.",
      details: issues,
    };
  }

  if (
    data.containsKeeperStatement === "no" ||
    data.containsKeeperStatement === "not-sure"
  ) {
    return {
      status: "issues",
      daysBetween,
      strength: Math.max(strength, 45),
      headline: "Potential compliance issues found",
      explanation:
        "The timing of the NtK appears to be within the 14-day limit, but there may be issues with the required content. The NtK must contain specific prescribed text about keeper liability. If this wording is missing or incorrect, the notice may not comply with POFA 2012.",
      details: issues,
    };
  }

  return {
    status: "compliant",
    daysBetween,
    strength: 20,
    headline: "The NtK appears to comply with POFA requirements",
    explanation:
      "Based on the information provided, the Notice to Keeper appears to meet the basic POFA 2012 requirements for timing and content. However, there may be other grounds for appeal that are not covered by this checker, such as signage issues, disproportionate charges, or legitimate mitigating circumstances.",
    details:
      issues.length > 0
        ? issues
        : [
            "The NtK was served within 14 days.",
            "The notice was addressed to the registered keeper.",
            "The required keeper liability statement appears to be present.",
          ],
  };
}

export default function POFACheckerForm() {
  const [formData, setFormData] = useState<FormData>({
    eventDate: "",
    ntkDate: "",
    addressedToKeeper: "",
    containsKeeperStatement: "",
    noticeOnWindscreen: "",
    wasDriver: "",
  });
  const [result, setResult] = useState<Result | null>(null);
  const [showResult, setShowResult] = useState(false);

  const isComplete =
    formData.eventDate &&
    formData.ntkDate &&
    formData.addressedToKeeper &&
    formData.containsKeeperStatement &&
    formData.noticeOnWindscreen &&
    formData.wasDriver;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isComplete) return;
    const res = calculateResult(formData);
    setResult(res);
    setShowResult(true);
  }

  function handleReset() {
    setFormData({
      eventDate: "",
      ntkDate: "",
      addressedToKeeper: "",
      containsKeeperStatement: "",
      noticeOnWindscreen: "",
      wasDriver: "",
    });
    setResult(null);
    setShowResult(false);
  }

  const resultColors = {
    invalid: {
      bg: "bg-green-50",
      border: "border-green-300",
      icon: "text-green-600",
      badge: "bg-green-100 text-green-800",
    },
    issues: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      icon: "text-amber-600",
      badge: "bg-amber-100 text-amber-800",
    },
    compliant: {
      bg: "bg-red-50",
      border: "border-red-300",
      icon: "text-red-600",
      badge: "bg-red-100 text-red-800",
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">
            Check Your Notice to Keeper
          </h2>

          {/* Event Date */}
          <div>
            <label
              htmlFor="eventDate"
              className="block text-sm font-medium text-gray-900 mb-1.5"
            >
              Date of the alleged parking event
            </label>
            <p className="text-xs text-gray-500 mb-2">
              This is the date printed on the ticket or charge notice as the date of the contravention.
            </p>
            <input
              type="date"
              id="eventDate"
              value={formData.eventDate}
              onChange={(e) =>
                setFormData({ ...formData, eventDate: e.target.value })
              }
              className="w-full sm:w-64 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              required
            />
          </div>

          {/* NtK Date */}
          <div>
            <label
              htmlFor="ntkDate"
              className="block text-sm font-medium text-gray-900 mb-1.5"
            >
              Date you received the Notice to Keeper
            </label>
            <p className="text-xs text-gray-500 mb-2">
              Check the date printed on the NtK letter, or use the postmark date if available. If you only know when it arrived, use that date.
            </p>
            <input
              type="date"
              id="ntkDate"
              value={formData.ntkDate}
              onChange={(e) =>
                setFormData({ ...formData, ntkDate: e.target.value })
              }
              className="w-full sm:w-64 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              required
            />
          </div>

          {/* Addressed to Keeper */}
          <fieldset>
            <legend className="block text-sm font-medium text-gray-900 mb-1.5">
              Was the NtK addressed to the registered keeper?
            </legend>
            <p className="text-xs text-gray-500 mb-3">
              The letter should be addressed to the person registered as the keeper with the DVLA.
            </p>
            <div className="flex gap-3">
              {(["yes", "no"] as const).map((val) => (
                <label
                  key={val}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                    formData.addressedToKeeper === val
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="addressedToKeeper"
                    value={val}
                    checked={formData.addressedToKeeper === val}
                    onChange={() =>
                      setFormData({ ...formData, addressedToKeeper: val })
                    }
                    className="sr-only"
                  />
                  {val === "yes" ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Keeper Liability Statement */}
          <fieldset>
            <legend className="block text-sm font-medium text-gray-900 mb-1.5">
              Did the NtK contain the statement about keeper liability?
            </legend>
            <p className="text-xs text-gray-500 mb-3">
              Look for wording that says the keeper will be liable for the charge unless they
              provide the name and address of the driver.
            </p>
            <div className="flex flex-wrap gap-3">
              {(["yes", "no", "not-sure"] as const).map((val) => (
                <label
                  key={val}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                    formData.containsKeeperStatement === val
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="containsKeeperStatement"
                    value={val}
                    checked={formData.containsKeeperStatement === val}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        containsKeeperStatement: val,
                      })
                    }
                    className="sr-only"
                  />
                  {val === "yes" ? "Yes" : val === "no" ? "No" : "Not sure"}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Notice on Windscreen */}
          <fieldset>
            <legend className="block text-sm font-medium text-gray-900 mb-1.5">
              Was a Notice to Driver left on your windscreen at the time?
            </legend>
            <p className="text-xs text-gray-500 mb-3">
              This is the physical ticket sometimes placed on the vehicle at the time of the
              alleged contravention.
            </p>
            <div className="flex flex-wrap gap-3">
              {(["yes", "no", "not-sure"] as const).map((val) => (
                <label
                  key={val}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                    formData.noticeOnWindscreen === val
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="noticeOnWindscreen"
                    value={val}
                    checked={formData.noticeOnWindscreen === val}
                    onChange={() =>
                      setFormData({ ...formData, noticeOnWindscreen: val })
                    }
                    className="sr-only"
                  />
                  {val === "yes" ? "Yes" : val === "no" ? "No" : "Not sure"}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Were you the driver */}
          <fieldset>
            <legend className="block text-sm font-medium text-gray-900 mb-1.5">
              Were you the driver?
            </legend>
            <div className="flex flex-wrap gap-3">
              {(["yes", "no", "prefer-not-to-say"] as const).map((val) => (
                <label
                  key={val}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                    formData.wasDriver === val
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="wasDriver"
                    value={val}
                    checked={formData.wasDriver === val}
                    onChange={() =>
                      setFormData({ ...formData, wasDriver: val })
                    }
                    className="sr-only"
                  />
                  {val === "yes"
                    ? "Yes"
                    : val === "no"
                      ? "No"
                      : "Prefer not to say"}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Submit */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={!isComplete}
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              Check POFA Compliance
            </button>
            {showResult && (
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Results */}
      {showResult && result && (
        <div className="mt-8 space-y-6">
          {/* Main result card */}
          <div
            className={`rounded-xl border-2 ${resultColors[result.status].border} ${resultColors[result.status].bg} p-6 sm:p-8`}
          >
            <div className="flex items-start gap-4">
              {result.status === "invalid" && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              )}
              {result.status === "issues" && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <svg className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
              )}
              {result.status === "compliant" && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100">
                  <svg className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {result.headline}
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {result.explanation}
                </p>
              </div>
            </div>

            {/* Strength meter */}
            <div className="mt-6">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Appeal Strength (POFA grounds)
              </p>
              <StrengthMeter percentage={result.strength} size="lg" />
            </div>

            {/* Detail points */}
            {result.details.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Findings
                </h4>
                <ul className="space-y-2">
                  {result.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Timeline info */}
            <div className="mt-6 rounded-lg bg-white/60 p-4">
              <p className="text-sm text-gray-700">
                <strong>Timeline:</strong> {result.daysBetween} day
                {result.daysBetween === 1 ? "" : "s"} between the parking event
                and the NtK.{" "}
                {result.daysBetween <= 14
                  ? "This is within the 14-day limit."
                  : `This exceeds the 14-day limit by ${result.daysBetween - 14} day${result.daysBetween - 14 === 1 ? "" : "s"}.`}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Get a Full Assessment
            </h3>
            <p className="mt-2 text-sm text-gray-600 max-w-lg mx-auto">
              {result.status === "invalid"
                ? "You have strong grounds to appeal. Let our AI generate a professional appeal letter citing POFA non-compliance, relevant case law, and the specific failures identified above."
                : result.status === "issues"
                  ? "There are potential compliance issues worth exploring. Our full assessment checks additional grounds beyond POFA, including signage, proportionality, and mitigating circumstances."
                  : "While the NtK appears POFA-compliant, there may be other valid grounds for appeal. Our full assessment checks signage, proportionality, procedural fairness, and more."}
            </p>
            <Link
              href="/appeal"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              Start Your Appeal
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center">
            This tool provides general guidance based on the information you entered. It is not
            legal advice. Results may vary depending on specific circumstances, additional
            evidence, and the appeals body involved. Always review the original documents
            carefully.
          </p>
        </div>
      )}
    </div>
  );
}
