import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | FineCheck",
  description:
    "FineCheck privacy policy. How we collect, use, and protect your personal data when you use our parking fine appeal service.",
  alternates: {
    canonical: "https://finecheck.co.uk/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="sm">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: April 2026
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              FineCheck (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your
              privacy. This policy explains what personal data we collect, how we use it,
              and your rights under the UK General Data Protection Regulation (UK GDPR)
              and the Data Protection Act 2018.
            </p>
            <p className="mt-3">
              By using FineCheck at finecheck.co.uk, you agree to the collection and use
              of data as described in this policy. If you do not agree, please do not use
              our service.
            </p>
          </section>

          {/* What We Collect */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. What Data We Collect
            </h2>
            <p className="mb-3">
              We collect the minimum data necessary to provide our service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-900">Fine details:</strong> The type of fine (council or private),
                operator name, vehicle registration, fine date, fine amount, location,
                and your description of the circumstances. We need this to assess your
                fine and generate an appeal letter.
              </li>
              <li>
                <strong className="text-gray-900">Contact information:</strong> Your name and email address, used
                to deliver your appeal letter and any follow-up correspondence.
              </li>
              <li>
                <strong className="text-gray-900">Payment information:</strong> We do not store credit card or
                debit card numbers. All payments are processed by Stripe, a PCI-compliant
                payment processor. We receive confirmation of payment from Stripe, but we
                never see or store your full card details.
              </li>
              <li>
                <strong className="text-gray-900">Photos you upload:</strong> If you upload photos of your parking
                ticket, signage, or location, we process these solely to improve your
                appeal letter. Photos are not shared with third parties.
              </li>
              <li>
                <strong className="text-gray-900">Usage data:</strong> We use Google Analytics to collect
                anonymised usage data such as pages visited, time on site, and referral
                source. This data is aggregated and cannot identify you personally.
              </li>
            </ul>
          </section>

          {/* How We Use It */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-900">Service delivery:</strong> To assess your parking fine,
                generate your appeal letter, and provide the documents you purchased.
              </li>
              <li>
                <strong className="text-gray-900">Communication:</strong> To send you your appeal letter by email
                and any essential service updates (e.g., if we discover an issue with
                your order).
              </li>
              <li>
                <strong className="text-gray-900">Service improvement:</strong> To understand how our service is
                used and make improvements. We analyse aggregated, anonymised data only.
              </li>
            </ul>
            <p className="mt-3">
              We do not use your data for marketing. We do not send promotional emails
              unless you explicitly opt in. We do not sell your data to anyone.
            </p>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Third Parties
            </h2>
            <p className="mb-3">
              We share data with a limited number of trusted third parties, solely to
              operate our service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-900">Stripe</strong> (payment processing): Receives your payment
                details to process transactions securely. Stripe is PCI DSS Level 1
                certified. See{" "}
                <a
                  href="https://stripe.com/gb/privacy"
                  className="text-teal-600 underline hover:text-teal-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stripe&apos;s privacy policy
                </a>.
              </li>
              <li>
                <strong className="text-gray-900">Anthropic</strong> (AI letter generation): Your fine details
                (not your payment information) are sent to Anthropic&apos;s Claude API to
                generate your appeal letter. Anthropic does not use API inputs for
                training. See{" "}
                <a
                  href="https://www.anthropic.com/privacy"
                  className="text-teal-600 underline hover:text-teal-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anthropic&apos;s privacy policy
                </a>.
              </li>
              <li>
                <strong className="text-gray-900">Vercel</strong> (hosting): Our website is hosted on Vercel.
                See{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  className="text-teal-600 underline hover:text-teal-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel&apos;s privacy policy
                </a>.
              </li>
              <li>
                <strong className="text-gray-900">Google Analytics</strong> (usage analytics): Collects
                anonymised browsing data. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-teal-600 underline hover:text-teal-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s privacy policy
                </a>.
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Cookies
            </h2>
            <p>
              We use essential cookies required for the website to function (e.g.,
              session management). We also use Google Analytics cookies to understand
              site usage. These cookies do not contain personally identifiable
              information. You can disable cookies in your browser settings, but
              some features of the site may not work correctly.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. Data Retention
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-900">Fine details and appeal letters:</strong> Retained for 12
                months after generation to allow you to access them, then automatically
                deleted.
              </li>
              <li>
                <strong className="text-gray-900">Payment records:</strong> Retained for 6 years as required by
                UK tax and accounting regulations.
              </li>
              <li>
                <strong className="text-gray-900">Analytics data:</strong> Google Analytics data is retained for
                14 months (the default retention period).
              </li>
              <li>
                <strong className="text-gray-900">Uploaded photos:</strong> Deleted within 30 days of your appeal
                letter being generated.
              </li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. Your Rights Under UK GDPR
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-900">Access</strong> the personal data we hold about you.
              </li>
              <li>
                <strong className="text-gray-900">Rectify</strong> inaccurate personal data.
              </li>
              <li>
                <strong className="text-gray-900">Erase</strong> your personal data (the &quot;right to be forgotten&quot;).
              </li>
              <li>
                <strong className="text-gray-900">Restrict</strong> processing of your personal data.
              </li>
              <li>
                <strong className="text-gray-900">Object</strong> to processing of your personal data.
              </li>
              <li>
                <strong className="text-gray-900">Data portability:</strong> Receive your personal data in a
                structured, commonly used format.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@finecheck.co.uk"
                className="text-teal-600 underline hover:text-teal-700"
              >
                privacy@finecheck.co.uk
              </a>. We will respond within 30 days.
            </p>
            <p className="mt-3">
              If you are not satisfied with our response, you have the right to
              complain to the Information Commissioner&apos;s Office (ICO) at{" "}
              <a
                href="https://ico.org.uk"
                className="text-teal-600 underline hover:text-teal-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                ico.org.uk
              </a>.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. International Data Transfers
            </h2>
            <p>
              Some of our third-party providers (Anthropic, Vercel, Stripe) may
              process data outside the UK. Where this occurs, appropriate safeguards
              are in place, including Standard Contractual Clauses and adequacy
              decisions, to ensure your data receives equivalent protection.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Children
            </h2>
            <p>
              Our service is not directed at individuals under the age of 18. We do
              not knowingly collect personal data from children. If you believe we
              have collected data from a child, please contact us and we will delete
              it promptly.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will
              be posted on this page with an updated date. We encourage you to review
              this page periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or your personal
              data, please contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:privacy@finecheck.co.uk"
                className="text-teal-600 underline hover:text-teal-700"
              >
                privacy@finecheck.co.uk
              </a>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
