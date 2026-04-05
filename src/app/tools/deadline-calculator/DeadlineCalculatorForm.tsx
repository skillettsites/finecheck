"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

type FineType = "council" | "private" | "";

interface FormData {
  fineType: FineType;
  issuedDate: string;
  receivedDate: string;
  submittedChallenge: "yes" | "no" | "";
  challengeRejected: "yes" | "no" | "";
  rejectionDate: string;
}

interface Deadline {
  label: string;
  date: Date;
  daysRemaining: number;
  status: "passed" | "imminent" | "available";
  description: string;
  consequence: string;
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getDaysRemaining(date: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function getStatus(daysRemaining: number): "passed" | "imminent" | "available" {
  if (daysRemaining < 0) return "passed";
  if (daysRemaining <= 5) return "imminent";
  return "available";
}

function calculateDeadlines(data: FormData): Deadline[] {
  const issued = new Date(data.issuedDate);
  const received = data.receivedDate ? new Date(data.receivedDate) : issued;
  const deadlines: Deadline[] = [];

  if (data.fineType === "council") {
    // 14-day discount (from date of service)
    const discountDate = addDays(received, 14);
    const discountDays = getDaysRemaining(discountDate);
    deadlines.push({
      label: "50% Discount Period",
      date: discountDate,
      daysRemaining: discountDays,
      status: getStatus(discountDays),
      description:
        "Pay within 14 days of receiving the PCN to get a 50% reduction. This is usually the cheapest option if you do not plan to appeal.",
      consequence:
        "You will need to pay the full amount. The discount cannot be applied retrospectively.",
    });

    // 28-day informal challenge
    const informalDate = addDays(received, 28);
    const informalDays = getDaysRemaining(informalDate);
    deadlines.push({
      label: "Informal Challenge Deadline",
      date: informalDate,
      daysRemaining: informalDays,
      status: getStatus(informalDays),
      description:
        "You have 28 days from receiving the PCN to submit an informal challenge (representation) to the issuing council. If successful, the PCN is cancelled.",
      consequence:
        "You lose the opportunity for an informal challenge. The council will serve a Notice to Owner (NtO), which opens a new 28-day window for formal representation.",
    });

    // If challenge was submitted and rejected, show NtO-based deadlines
    if (data.submittedChallenge === "yes" && data.challengeRejected === "yes" && data.rejectionDate) {
      const rejection = new Date(data.rejectionDate);

      // 28-day formal representation (from NtO/rejection)
      const formalDate = addDays(rejection, 28);
      const formalDays = getDaysRemaining(formalDate);
      deadlines.push({
        label: "Formal Representation Deadline",
        date: formalDate,
        daysRemaining: formalDays,
        status: getStatus(formalDays),
        description:
          "After the Notice to Owner is served (or your informal challenge is rejected), you have 28 days to submit a formal representation. This is a separate process from the informal challenge.",
        consequence:
          "The council can issue a Charge Certificate, which adds 50% to the fine. After that, the debt can be registered at the Traffic Enforcement Centre (TEC).",
      });

      // 28-day tribunal appeal (after formal rejection)
      const tribunalDate = addDays(rejection, 56);
      const tribunalDays = getDaysRemaining(tribunalDate);
      deadlines.push({
        label: "Tribunal Appeal Deadline",
        date: tribunalDate,
        daysRemaining: tribunalDays,
        status: getStatus(tribunalDays),
        description:
          "If your formal representation is rejected, you have 28 days to appeal to the independent tribunal (Traffic Penalty Tribunal in England, or equivalent). This is a free, independent review.",
        consequence:
          "You lose your right to an independent review. The council can proceed with enforcement without further challenge.",
      });
    } else if (data.submittedChallenge !== "yes") {
      // Show estimated NtO deadlines
      const ntoEstimate = addDays(received, 42);
      const formalDate = addDays(ntoEstimate, 28);
      const formalDays = getDaysRemaining(formalDate);
      deadlines.push({
        label: "Formal Representation (estimated)",
        date: formalDate,
        daysRemaining: formalDays,
        status: getStatus(formalDays),
        description:
          "If you do not submit an informal challenge, the council will serve a Notice to Owner (NtO), typically 4 to 6 weeks after the PCN. You then have 28 days from the NtO to submit a formal representation.",
        consequence:
          "A Charge Certificate may be issued, adding 50% to the fine.",
      });
    }

    // Debt registration (56 days after NtO)
    const debtDate = addDays(received, 98);
    const debtDays = getDaysRemaining(debtDate);
    deadlines.push({
      label: "Debt Registration (estimated)",
      date: debtDate,
      daysRemaining: debtDays,
      status: getStatus(debtDays),
      description:
        "If no payment or successful appeal is made, the council can register the debt at the Traffic Enforcement Centre approximately 56 days after the NtO. Once registered, bailiffs can be instructed.",
      consequence:
        "The debt is registered and bailiff action can follow. Additional fees will be added. At this stage, options become much more limited.",
    });
  }

  if (data.fineType === "private") {
    // 14-day discount
    const discountDate = addDays(received, 14);
    const discountDays = getDaysRemaining(discountDate);
    deadlines.push({
      label: "Reduced Rate Period",
      date: discountDate,
      daysRemaining: discountDays,
      status: getStatus(discountDays),
      description:
        "Most private parking operators offer a reduced rate if you pay within 14 days. The discount amount varies by operator, typically around 40%.",
      consequence:
        "You will need to pay the full amount shown on the charge notice.",
    });

    // 28-day appeal to operator
    const appealDate = addDays(received, 28);
    const appealDays = getDaysRemaining(appealDate);
    deadlines.push({
      label: "Appeal to Operator Deadline",
      date: appealDate,
      daysRemaining: appealDays,
      status: getStatus(appealDays),
      description:
        "You have 28 days to submit an appeal directly to the parking operator. This is your first opportunity to challenge the charge. Include all evidence and grounds in your initial appeal.",
      consequence:
        "You may lose your right to a free appeal. Some operators accept late appeals, but they are not required to.",
    });

    // POPLA/IAS escalation
    if (data.submittedChallenge === "yes" && data.challengeRejected === "yes" && data.rejectionDate) {
      const rejection = new Date(data.rejectionDate);
      const poplaDate = addDays(rejection, 28);
      const poplaDays = getDaysRemaining(poplaDate);
      deadlines.push({
        label: "POPLA / IAS Escalation Deadline",
        date: poplaDate,
        daysRemaining: poplaDays,
        status: getStatus(poplaDays),
        description:
          "After the operator rejects your appeal, you have 28 days to escalate to POPLA (for BPA members) or the IAS (for IPC members). The operator's rejection letter must include a code for you to use. This independent review is free.",
        consequence:
          "You lose your right to an independent review. The operator may proceed to debt recovery or a County Court claim.",
      });
    } else if (data.submittedChallenge !== "yes") {
      const estimatedEscalation = addDays(received, 70);
      const escalationDays = getDaysRemaining(estimatedEscalation);
      deadlines.push({
        label: "POPLA / IAS Escalation (estimated)",
        date: estimatedEscalation,
        daysRemaining: escalationDays,
        status: getStatus(escalationDays),
        description:
          "If you appeal and the operator rejects it, you will typically have 28 days from the rejection to escalate to POPLA or the IAS for an independent review.",
        consequence:
          "Without an independent review, the operator may proceed to debt recovery.",
      });
    }

    // County Court limitation
    const courtDate = addDays(issued, 365 * 6);
    const courtDays = getDaysRemaining(courtDate);
    deadlines.push({
      label: "County Court Limitation Period",
      date: courtDate,
      daysRemaining: courtDays,
      status: getStatus(courtDays),
      description:
        "Private parking operators have up to 6 years to file a County Court claim for an unpaid charge. In practice, most operators act within 6 to 12 months, and many never pursue court action at all. This is the absolute outer limit.",
      consequence:
        "After 6 years, the claim becomes statute-barred and cannot be pursued through the courts.",
    });
  }

  return deadlines;
}

const statusStyles = {
  passed: {
    dot: "bg-red-500",
    line: "bg-red-200",
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-700",
    badge: "bg-red-100 text-red-800",
    label: "Expired",
  },
  imminent: {
    dot: "bg-amber-500",
    line: "bg-amber-200",
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-700",
    badge: "bg-amber-100 text-amber-800",
    label: "Expiring Soon",
  },
  available: {
    dot: "bg-green-500",
    line: "bg-green-200",
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-700",
    badge: "bg-green-100 text-green-800",
    label: "Available",
  },
};

export default function DeadlineCalculatorForm() {
  const [formData, setFormData] = useState<FormData>({
    fineType: "",
    issuedDate: "",
    receivedDate: "",
    submittedChallenge: "",
    challengeRejected: "",
    rejectionDate: "",
  });
  const [deadlines, setDeadlines] = useState<Deadline[]>([]);
  const [showResults, setShowResults] = useState(false);

  const isComplete =
    formData.fineType &&
    formData.issuedDate &&
    formData.submittedChallenge &&
    (formData.submittedChallenge === "no" ||
      (formData.challengeRejected &&
        (formData.challengeRejected === "no" ||
          formData.rejectionDate)));

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isComplete) return;
    setDeadlines(calculateDeadlines(formData));
    setShowResults(true);
  }

  function handleReset() {
    setFormData({
      fineType: "",
      issuedDate: "",
      receivedDate: "",
      submittedChallenge: "",
      challengeRejected: "",
      rejectionDate: "",
    });
    setDeadlines([]);
    setShowResults(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-bold text-gray-900">
            Calculate Your Deadlines
          </h2>

          {/* Fine Type */}
          <fieldset>
            <legend className="block text-sm font-medium text-gray-900 mb-1.5">
              Type of fine
            </legend>
            <div className="flex flex-wrap gap-3">
              {([
                { value: "council", label: "Council PCN" },
                { value: "private", label: "Private parking charge" },
              ] as const).map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                    formData.fineType === opt.value
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="fineType"
                    value={opt.value}
                    checked={formData.fineType === opt.value}
                    onChange={() =>
                      setFormData({ ...formData, fineType: opt.value })
                    }
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            {formData.fineType === "council" && (
              <p className="mt-2 text-xs text-gray-500">
                Issued by local councils, Transport for London, or civil enforcement officers.
              </p>
            )}
            {formData.fineType === "private" && (
              <p className="mt-2 text-xs text-gray-500">
                Issued by private companies like ParkingEye, APCOA, CP Plus, NCP, Excel Parking, etc.
              </p>
            )}
          </fieldset>

          {/* Issued Date */}
          <div>
            <label
              htmlFor="issuedDate"
              className="block text-sm font-medium text-gray-900 mb-1.5"
            >
              Date the fine was issued
            </label>
            <p className="text-xs text-gray-500 mb-2">
              The date printed on the fine or charge notice.
            </p>
            <input
              type="date"
              id="issuedDate"
              value={formData.issuedDate}
              onChange={(e) =>
                setFormData({ ...formData, issuedDate: e.target.value })
              }
              className="w-full sm:w-64 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
              required
            />
          </div>

          {/* Received Date */}
          <div>
            <label
              htmlFor="receivedDate"
              className="block text-sm font-medium text-gray-900 mb-1.5"
            >
              Date you received the fine (optional)
            </label>
            <p className="text-xs text-gray-500 mb-2">
              For postal fines, this may differ from the issue date. Leave blank if the same or if you are unsure.
            </p>
            <input
              type="date"
              id="receivedDate"
              value={formData.receivedDate}
              onChange={(e) =>
                setFormData({ ...formData, receivedDate: e.target.value })
              }
              className="w-full sm:w-64 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
            />
          </div>

          {/* Submitted Challenge */}
          <fieldset>
            <legend className="block text-sm font-medium text-gray-900 mb-1.5">
              Have you already submitted an informal challenge?
            </legend>
            <div className="flex gap-3">
              {(["yes", "no"] as const).map((val) => (
                <label
                  key={val}
                  className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                    formData.submittedChallenge === val
                      ? "border-teal-600 bg-teal-50 text-teal-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="submittedChallenge"
                    value={val}
                    checked={formData.submittedChallenge === val}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        submittedChallenge: val,
                        challengeRejected: val === "no" ? "" : formData.challengeRejected,
                        rejectionDate: val === "no" ? "" : formData.rejectionDate,
                      })
                    }
                    className="sr-only"
                  />
                  {val === "yes" ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Challenge Rejected */}
          {formData.submittedChallenge === "yes" && (
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900 mb-1.5">
                Was your informal challenge rejected?
              </legend>
              <div className="flex gap-3">
                {(["yes", "no"] as const).map((val) => (
                  <label
                    key={val}
                    className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                      formData.challengeRejected === val
                        ? "border-teal-600 bg-teal-50 text-teal-700"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="challengeRejected"
                      value={val}
                      checked={formData.challengeRejected === val}
                      onChange={() =>
                        setFormData({
                          ...formData,
                          challengeRejected: val,
                          rejectionDate: val === "no" ? "" : formData.rejectionDate,
                        })
                      }
                      className="sr-only"
                    />
                    {val === "yes" ? "Yes" : "No"}
                  </label>
                ))}
              </div>
            </fieldset>
          )}

          {/* Rejection Date */}
          {formData.submittedChallenge === "yes" &&
            formData.challengeRejected === "yes" && (
              <div>
                <label
                  htmlFor="rejectionDate"
                  className="block text-sm font-medium text-gray-900 mb-1.5"
                >
                  Date the rejection was received
                </label>
                <input
                  type="date"
                  id="rejectionDate"
                  value={formData.rejectionDate}
                  onChange={(e) =>
                    setFormData({ ...formData, rejectionDate: e.target.value })
                  }
                  className="w-full sm:w-64 rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                  required
                />
              </div>
            )}

          {/* Submit */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={!isComplete}
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Calculate Deadlines
            </button>
            {showResults && (
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
      {showResults && deadlines.length > 0 && (
        <div className="mt-8 space-y-6">
          {/* Summary bar */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Your Deadline Timeline
            </h3>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="text-gray-600">Expiring within 5 days</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="text-gray-600">Expired</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-0">
            {deadlines.map((deadline, i) => {
              const style = statusStyles[deadline.status];
              const isLast = i === deadlines.length - 1;

              return (
                <div key={i} className="relative flex gap-4">
                  {/* Timeline line and dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-4 w-4 rounded-full ${style.dot} shrink-0 ring-4 ring-white z-10`}
                    />
                    {!isLast && (
                      <div className="w-0.5 flex-1 bg-gray-200 min-h-[2rem]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pb-6 ${isLast ? "" : ""}`}>
                    <div
                      className={`rounded-xl border ${style.border} ${style.bg} p-5`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h4 className="text-base font-semibold text-gray-900">
                            {deadline.label}
                          </h4>
                          <p className="text-sm text-gray-600 mt-0.5">
                            {formatDate(deadline.date)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${style.badge}`}
                          >
                            {style.label}
                          </span>
                          {deadline.status !== "passed" && (
                            <span className={`text-sm font-bold ${style.text}`}>
                              {deadline.daysRemaining === 0
                                ? "Today"
                                : deadline.daysRemaining === 1
                                  ? "1 day left"
                                  : `${deadline.daysRemaining} days left`}
                            </span>
                          )}
                          {deadline.status === "passed" && (
                            <span className="text-sm font-bold text-red-700">
                              {Math.abs(deadline.daysRemaining)} day
                              {Math.abs(deadline.daysRemaining) === 1 ? "" : "s"} ago
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                        {deadline.description}
                      </p>
                      {deadline.status === "passed" && (
                        <div className="mt-3 rounded-lg bg-red-100/60 p-3">
                          <p className="text-xs font-medium text-red-800">
                            <strong>This deadline has passed.</strong>{" "}
                            {deadline.consequence}
                          </p>
                        </div>
                      )}
                      {deadline.status === "imminent" && (
                        <div className="mt-3 rounded-lg bg-amber-100/60 p-3">
                          <p className="text-xs font-medium text-amber-800">
                            <strong>Act now.</strong> This deadline expires very
                            soon. Do not wait until the last day.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Do Not Wait Until Your Deadlines Expire
            </h3>
            <p className="mt-2 text-sm text-gray-600 max-w-lg mx-auto">
              {deadlines.some((d) => d.status === "imminent")
                ? "You have deadlines expiring soon. Start your appeal now to make sure you do not miss your window."
                : deadlines.every((d) => d.status === "passed")
                  ? "Your main deadlines have passed, but there may still be options available. Get a full assessment to understand your remaining choices."
                  : "You still have time to appeal. Our AI-powered tool generates a professional appeal letter in minutes, citing the right grounds and case law for your situation."}
            </p>
            <Link
              href="/appeal"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              Start Your Appeal Now
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center">
            Deadlines are calculated based on standard time limits and the dates you provided.
            Some deadlines are estimates where the exact date depends on when the issuing
            authority takes action. Always check the dates on your actual notices. This is
            general guidance, not legal advice.
          </p>
        </div>
      )}
    </div>
  );
}
