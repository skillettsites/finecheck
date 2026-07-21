import { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import { ESCALATION_DOCUMENTS } from "@/data/escalation-pack";
import PurchaseSection from "./PurchaseSection";

export const metadata: Metadata = {
  title: "Escalation Pack: Debt Collector, Court Claim and CCJ Letters, £19.99",
  description:
    "Past the appeal stage? Get all 5 escalation documents: debt collector response (DCBL, DRP, Trace, ZZPS), POPLA/IAS rejection next steps, Letter Before Claim reply, and a full court defence pack. £19.99 one-off, emailed instantly.",
  alternates: {
    canonical: "https://www.appealafine.co.uk/escalation-pack",
  },
  openGraph: {
    title: "Escalation Pack: Debt Collector, Court Claim and CCJ Letters, £19.99",
    description:
      "The 5 documents for parking charges past the appeal stage: debt collector reply, POPLA/IAS rejection next steps, Letter Before Claim response, and full court defence preparation.",
    url: "https://www.appealafine.co.uk/escalation-pack",
    type: "website",
  },
};

const situations = [
  {
    title: "A DCBL, DRP, Trace or ZZPS letter arrived",
    body: "A debt collector is chasing an unpaid parking charge with inflated fees and 14-day deadlines. They have no court powers and no bailiff powers, but silence or a phone call are both mistakes. The pack's response letter disputes the debt, demands the evidence, and rejects the added costs.",
  },
  {
    title: "POPLA or the IAS rejected my appeal",
    body: "A lost independent appeal is not a debt, a judgment, or a credit file entry. The operator still has to win in court. The pack explains your four options and includes a letter that puts the operator on notice that any claim will be defended.",
  },
  {
    title: "I got a Letter Before Claim from solicitors",
    body: "DCB Legal, BW Legal or Gladstones have sent the formal pre-court letter. You have 30 days to reply under the Pre-Action Protocol for Debt Claims. The pack includes a protocol-compliant response and a checklist of everything their letter must legally contain.",
  },
  {
    title: "A County Court claim form arrived",
    body: "This is real litigation with 14-day deadlines. The pack's defence preparation checklist covers the standard grounds parking claims fail on, plus a witness statement skeleton with the correct statement of truth wording.",
  },
];

const flowchartStages = [
  {
    stage: "Debt recovery letters (DCBL, DRP, Trace, ZZPS)",
    verdict: "Respond once, in writing",
    color: "teal",
    detail:
      "Send one firm dispute letter demanding the evidence, then stop engaging with repeat templates. Never phone, never part-pay. They cannot send bailiffs or touch your credit file.",
  },
  {
    stage: "POPLA or IAS rejection",
    verdict: "Hold, or put them on notice",
    color: "slate",
    detail:
      "The decision does not bind you and creates no debt. Either hold your position and wait, or send the pack's letter requiring their evidence before any claim. Pay only if you now accept the charge was properly issued.",
  },
  {
    stage: "Letter Before Claim",
    verdict: "Respond within 30 days, always",
    color: "amber",
    detail:
      "This is the one letter you must never ignore. A protocol-compliant reply with document requests protects your position on costs and often ends the case commercially.",
  },
  {
    stage: "County Court claim form",
    verdict: "Acknowledge in 14 days, defend in 28",
    color: "amber",
    detail:
      "Ignoring a claim form is how a £100 charge becomes a CCJ by default, without any judge looking at the case. Acknowledge service immediately, then file your defence.",
  },
  {
    stage: "Default CCJ at an old address",
    verdict: "Apply to set aside, fast",
    color: "amber",
    detail:
      "If judgment was entered without your knowledge after you moved, an N244 set-aside application can reopen the case. Paid in full within one month, a CCJ comes off the register entirely.",
  },
];

const faqItems = [
  {
    question: "Is this different from the £4.99 Premium Appeal Pack?",
    answer:
      "Yes. The Standard and Premium products are for the appeal stage: they generate a personalised appeal letter for your specific fine. The Escalation Pack is for what comes after a failed or missed appeal: debt collectors, rejected POPLA or IAS decisions, Letters Before Claim, and County Court claims. It is a fixed set of five documents covering every escalation stage.",
  },
  {
    question: "Will a debt collector actually back off if I send the response letter?",
    answer:
      "No outcome can be guaranteed, but debt collectors are commission-paid letter writers with no court powers of their own. A written dispute that demands evidence of POFA compliance, landowner authority and signage, and rejects the added fees, changes the economics: pushing a disputed, defended charge is rarely worth their commission. Most letter chains stop after a proper dispute.",
  },
  {
    question: "Can DCBL send bailiffs to my house?",
    answer:
      "Not for a private parking charge that has not been to court. Bailiff enforcement requires a court judgment you have then failed to pay. At the debt collection stage there is no judgment, so there are no enforcement powers, no right of entry, and no effect on your credit file.",
  },
  {
    question: "I lost at POPLA. Do I now have to pay?",
    answer:
      "No. A POPLA or IAS decision against you is not binding on you; it only ends the free appeal route. To force payment the operator must issue a County Court claim and prove its case. Many operators drop cases rather than litigate. The pack explains your options and includes the letter for exactly this situation.",
  },
  {
    question: "The Letter Before Claim deadline is close. Is the pack instant?",
    answer:
      "Yes. All five PDFs are emailed to you immediately after payment. Fill in the bracketed placeholders, delete the guidance notes, and send. The Letter Before Claim response is designed to be completed and sent the same day.",
  },
  {
    question: "Is this legal advice?",
    answer:
      "No. AppealAFine provides legal information and document preparation tools, not regulated legal advice. The documents are built on established UK parking law: POFA 2012 Schedule 4, the Pre-Action Protocol for Debt Claims, and the leading case law. For complex situations, particularly once court proceedings are issued, we recommend consulting a solicitor alongside using these documents.",
  },
  {
    question: "What if my fine is still at the appeal stage?",
    answer:
      "Then do not buy this pack yet. Use our free assessment first: it checks your fine in 2 minutes, and if you have grounds, a personalised appeal letter is £2.99. The Escalation Pack is for charges that are past the appeal stage.",
  },
];

const verdictStyles: Record<string, string> = {
  teal: "bg-teal-100 text-teal-800",
  amber: "bg-amber-100 text-amber-800",
  slate: "bg-slate-200 text-slate-800",
};

export default function EscalationPackPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Escalation Pack",
    description:
      "Five UK private parking escalation documents: debt collector response letter, POPLA/IAS rejection next steps, Letter Before Claim response with protocol checklist, court defence preparation pack, and a stage-by-stage decision guide.",
    brand: { "@type": "Brand", name: "AppealAFine" },
    offers: {
      "@type": "Offer",
      price: "19.99",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://www.appealafine.co.uk/escalation-pack",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <section className="bg-white border-b border-gray-200 py-6">
        <Container>
          <Breadcrumbs items={[{ label: "Escalation Pack", href: "/escalation-pack" }]} />
        </Container>
      </section>

      {/* Hero */}
      <section className="bg-slate-900 py-14 sm:py-20">
        <Container size="md">
          <div className="text-center">
            <Badge variant="warning" className="mb-4">
              Past the appeal stage?
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Debt collectors. Court threats. CCJs.
              <span className="block text-teal-400 mt-2">Here is the paperwork that answers them.</span>
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-300">
              Five ready-to-use documents covering every stage after a failed or missed appeal:
              the debt collector reply, the POPLA and IAS rejection letter, the Letter Before Claim
              response, and a full court defence pack. One payment, emailed instantly.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <PurchaseSection />
              <p className="text-sm text-slate-400">
                £19.99 one-off. No subscription. All 5 PDFs in your inbox within minutes.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span>Secure payment via Stripe</span>
              <span>Built on POFA 2012 and the CPR Pre-Action Protocol</span>
              <span>Instant email delivery</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Situations */}
      <section className="py-14 bg-gray-50">
        <Container size="md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Which letter has landed on your doormat?
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            The pack covers all four of the situations below. If your fine is still at the first
            appeal stage, start with our <a href="/appeal" className="text-teal-600 font-medium hover:underline">free 2-minute check</a> instead.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {situations.map((s) => (
              <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What's inside */}
      <section className="py-14 bg-white">
        <Container size="md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            What is in the pack
          </h2>
          <p className="mt-3 text-center text-gray-600">
            Five PDFs, emailed the moment your payment completes.
          </p>
          <div className="mt-10 space-y-4">
            {ESCALATION_DOCUMENTS.map((doc, i) => (
              <div key={doc.id} className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">{doc.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{doc.summary}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="#get-pack" variant="accent" size="lg">
              Add your details and get the pack, £19.99
            </Button>
          </div>
        </Container>
      </section>

      {/* Decision flowchart */}
      <section className="py-14 bg-gray-50">
        <Container size="md">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Ignore, respond or pay? The honest answer at every stage
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            This is the short version of the decision guide included in the pack. The full PDF
            walks through all eight stages with deadlines and the exact document to use.
          </p>
          <div className="mt-10 space-y-4">
            {flowchartStages.map((f) => (
              <div key={f.stage} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-gray-900">{f.stage}</h3>
                  <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${verdictStyles[f.color]}`}>
                    {f.verdict}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <strong>When paying is right:</strong> if the signage was clear, the notice was
            POFA-compliant and on time, and the terms were genuinely breached, paying caps the
            matter. The pack helps you fight the chargeable errors operators make; it is not a way
            to avoid debts that are genuinely owed.
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <Container size="sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-slate-900">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Answer the scary letter properly, tonight
            </h2>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto">
              All five documents, the deadlines that matter, and the exact wording to send back.
              £19.99, one-off, in your inbox in minutes.
            </p>
            <div className="mt-6">
              <Button href="#get-pack" variant="accent" size="lg">
                Add your details and get the pack, £19.99
              </Button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              AppealAFine is a document preparation service, not a law firm. These documents are
              legal information, not legal advice. For complex situations, particularly county
              court claims, consider consulting a solicitor alongside using them.
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Still at the appeal stage?{" "}
              <Button href="/appeal" variant="secondary" size="sm" className="ml-2">
                Check your fine free
              </Button>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
