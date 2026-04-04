"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface SavedAppeal {
  form: {
    fineType: string;
    councilName?: string;
    operatorName?: string;
    pcnReference?: string;
    location?: string;
    vehicleReg?: string;
    fineAmount?: string;
    fineDate?: string;
    parkingEventDate?: string;
    ntkReceivedDate?: string;
    circumstances?: string;
    whatHappened?: string;
    contraventionDescription?: string;
    wasDriver?: string;
  };
  assessment: {
    overallStrength: string;
    successProbability: number;
    letterArguments: string[];
    grounds: { title: string; legalBasis: string }[];
    nextSteps: string[];
  };
  productId: string;
}

function generateLetterContent(data: SavedAppeal): string {
  const { form, assessment } = data;
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const isPrivate = form.fineType === "private";
  const recipient = isPrivate ? form.operatorName || "Private Parking Operator" : form.councilName || "Council Parking Services";
  const ref = form.pcnReference ? `\nReference: ${form.pcnReference}` : "";
  const reg = form.vehicleReg || "[YOUR REGISTRATION]";

  let letterBody = `${today}

${recipient}
Parking Appeals Department

Dear Sir/Madam,

RE: ${isPrivate ? "Parking Charge Notice" : "Penalty Charge Notice"} Appeal${ref}
Vehicle Registration: ${reg}
Location: ${form.location || "[LOCATION]"}
Date: ${isPrivate ? form.parkingEventDate || "[DATE]" : form.fineDate || "[DATE]"}

I am writing to formally challenge the above ${isPrivate ? "parking charge" : "Penalty Charge Notice"} on the following grounds.\n\n`;

  // Add each ground
  assessment.grounds.forEach((ground, i) => {
    letterBody += `${i + 1}. ${ground.title}\n`;
  });

  letterBody += "\n";

  // Detailed arguments
  if (isPrivate) {
    // Check POFA NtK
    if (form.parkingEventDate && form.ntkReceivedDate) {
      const eventDate = new Date(form.parkingEventDate);
      const ntkDate = new Date(form.ntkReceivedDate);
      const daysDiff = Math.floor((ntkDate.getTime() - eventDate.getTime()) / (1000 * 60 * 60 * 24));
      if (daysDiff > 14) {
        letterBody += `The Notice to Keeper was not received until ${new Date(form.ntkReceivedDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}, which is ${daysDiff} days after the alleged parking event on ${new Date(form.parkingEventDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}. Under the Protection of Freedoms Act 2012, Schedule 4, Paragraph 9, the Notice to Keeper must be served within 14 days of the relevant event for keeper liability to be established. As this requirement has not been met, you are unable to pursue the registered keeper for payment of this charge.\n\n`;
      }
    }

    if (form.wasDriver === "no" || form.wasDriver === "prefer-not-to-say") {
      letterBody += `I was not the driver of the vehicle at the time of the alleged contravention. Under the Protection of Freedoms Act 2012, keeper liability can only be established if the strict procedural requirements are met, including timely service of the Notice to Keeper with the correct prescribed wording.\n\n`;
    }
  }

  // Circumstances
  if (form.circumstances || form.whatHappened) {
    const circText = form.circumstances || form.whatHappened || "";
    letterBody += `The circumstances of this matter are as follows: ${circText}\n\n`;
  }

  // Legal references
  letterBody += "The relevant legal and procedural grounds for this appeal are:\n\n";
  assessment.grounds.forEach((ground) => {
    letterBody += `- ${ground.title} (${ground.legalBasis})\n`;
  });

  letterBody += `\nFor the reasons set out above, I respectfully request that this ${isPrivate ? "charge" : "PCN"} be cancelled in full.\n\n`;

  if (isPrivate) {
    letterBody += `If you do not cancel this charge, I will escalate my appeal to ${assessment.grounds.length > 0 ? "the independent appeals service" : "POPLA/IAS"} for independent adjudication.\n\n`;
  } else {
    letterBody += `If this informal challenge is rejected, I intend to make formal representations upon receipt of the Notice to Owner, and if necessary, appeal to the independent Traffic Penalty Tribunal.\n\n`;
  }

  letterBody += `I look forward to your response within 28 days.\n\nYours faithfully,\n\n[YOUR NAME]\n[YOUR ADDRESS]`;

  return letterBody;
}

export default function SuccessContent() {
  const [data, setData] = useState<SavedAppeal | null>(null);
  const [copied, setCopied] = useState(false);
  const [letterContent, setLetterContent] = useState("");

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("finecheck_appeal");
      if (stored) {
        const parsed = JSON.parse(stored) as SavedAppeal;
        setData(parsed);
        setLetterContent(generateLetterContent(parsed));
      }
    } catch {
      // sessionStorage might not be available
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(letterContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = letterContent;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([letterContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `appeal-letter-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="flex justify-center mb-4">
            <svg className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">No Appeal Data Found</h2>
          <p className="text-gray-600 mb-6">
            It looks like you arrived here directly. To generate your appeal letter, please start from the appeal form.
          </p>
          <Link
            href="/appeal"
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition-colors"
          >
            Start Your Appeal
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  const isPrivate = data.form.fineType === "private";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Appeal Letter is Ready</h1>
          <p className="text-gray-600">
            Your personalised appeal letter has been generated using the legal grounds identified in your assessment. Copy
            or download it below, then follow the next steps to submit your appeal.
          </p>
        </div>

        {/* Letter */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm mb-6">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-3">
            <h3 className="text-sm font-semibold text-gray-900">Appeal Letter</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  copied
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {copied ? (
                  <>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-800 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 transition-colors"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download
              </button>
            </div>
          </div>
          <div className="p-6">
            <pre className="whitespace-pre-wrap text-sm text-gray-800 leading-relaxed font-sans">{letterContent}</pre>
          </div>
        </div>

        {/* Important notice */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mb-6">
          <div className="flex items-start gap-3">
            <svg className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <div>
              <h4 className="text-sm font-semibold text-amber-900 mb-1">Before you send</h4>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>Replace [YOUR NAME] and [YOUR ADDRESS] with your real details</li>
                <li>Review the letter and adjust any details as needed</li>
                <li>Attach any supporting evidence (photos, receipts, screenshots)</li>
                <li>Keep a copy of everything you send</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next steps */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Submit Your Appeal</h3>

          {isPrivate ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Send to the operator</h4>
                  <p className="text-sm text-gray-600">
                    Send your appeal letter to{" "}
                    {data.form.operatorName || "the parking operator"} using the address on your parking charge notice.
                    Send by email and keep proof of postage if sending by post.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Wait for the operator's decision</h4>
                  <p className="text-sm text-gray-600">
                    The operator should respond within 28 days. Do not pay the charge while your appeal is being
                    considered; the discount period is paused.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">If rejected, escalate</h4>
                  <p className="text-sm text-gray-600">
                    If the operator rejects your appeal, they must offer you the right to appeal to an independent body.
                    For BPA members, this is POPLA (popla.co.uk). For IPC members, this is IAS
                    (theias.org). This second appeal is free and the decision is binding on the operator.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                  4
                </span>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Do not ignore debt collection letters</h4>
                  <p className="text-sm text-gray-600">
                    If you receive letters from a debt collection agency, respond calmly citing your appeal. Most private
                    operators (except ParkingEye) do not pursue cases to court. Do not be intimidated by threatening
                    language.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Submit an informal challenge</h4>
                  <p className="text-sm text-gray-600">
                    Send your appeal letter to{" "}
                    {data.form.councilName || "the council"} as an informal challenge within 28 days. Most councils accept
                    challenges online, by email, or by post.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">If rejected, wait for the Notice to Owner</h4>
                  <p className="text-sm text-gray-600">
                    If the informal challenge is rejected, the council will issue a Notice to Owner (NtO). You then have
                    28 days to make formal representations. Use similar arguments to your informal challenge.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">If rejected again, appeal to the tribunal</h4>
                  <p className="text-sm text-gray-600">
                    If formal representations are rejected, you have the right to appeal to an independent tribunal. In
                    London, this is London Tribunals. Outside London, it is the Traffic Penalty Tribunal (TPT). The appeal
                    is free and the decision is binding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-800">
                  4
                </span>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">The discounted amount</h4>
                  <p className="text-sm text-gray-600">
                    If your informal challenge is rejected and you decide not to continue, you can still pay the
                    discounted amount within 14 days of the rejection notice. The discount period is paused during the
                    informal challenge.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Timeline */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Expected Timeline</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              <strong>1-2 weeks:</strong> Operator or council acknowledges your appeal
            </p>
            <p>
              <strong>2-8 weeks:</strong> Decision on your initial appeal
            </p>
            {isPrivate ? (
              <p>
                <strong>4-12 weeks:</strong> If escalated to POPLA/IAS, independent decision
              </p>
            ) : (
              <p>
                <strong>4-12 weeks:</strong> If escalated to tribunal, hearing date and decision
              </p>
            )}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-800 hover:text-blue-700 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to FineCheck
          </Link>
        </div>
      </div>
    </div>
  );
}
