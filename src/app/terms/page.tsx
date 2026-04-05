import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service | FineCheck",
  description:
    "FineCheck terms of service. The legal terms governing use of our parking fine appeal letter generation service.",
  alternates: {
    canonical: "https://finecheck.co.uk/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="sm">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: April 2026
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              These terms of service (&quot;Terms&quot;) govern your use of the FineCheck
              website at finecheck.co.uk (&quot;the Service&quot;), operated by FineCheck
              (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By using the Service, you agree to these Terms.
              If you do not agree, please do not use the Service.
            </p>
          </section>

          {/* Nature of Service */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. Nature of Service
            </h2>
            <p className="mb-3">
              FineCheck is a document preparation service. We provide:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Information about UK parking law and your rights as a motorist.
              </li>
              <li>
                Assessment of parking fines based on the details you provide.
              </li>
              <li>
                AI-generated appeal letters personalised to your circumstances.
              </li>
              <li>
                Guidance on the appeal process for council PCNs and private parking charges.
              </li>
            </ul>
            <p className="mt-3 font-semibold text-gray-900">
              Important: FineCheck does not provide legal advice. We are not a law
              firm, and no solicitor-client relationship is created by using our
              service. The information and documents we provide are based on publicly
              available UK parking legislation and case law. For complex legal
              disputes, court proceedings, or situations requiring professional legal
              advice, we recommend consulting a qualified solicitor.
            </p>
          </section>

          {/* No Guarantee */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. No Guarantee of Outcome
            </h2>
            <p>
              We do not and cannot guarantee that your appeal will be successful. Appeal
              outcomes depend on many factors, including the specific circumstances of
              your fine, the evidence available, the operator or council involved, and
              the decision-maker reviewing your appeal. Our assessment of appeal strength
              is an estimate based on common patterns and should not be treated as a
              prediction. You use our service at your own discretion and risk.
            </p>
          </section>

          {/* Your Responsibilities */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Your Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You must provide accurate and truthful information about your parking
                fine. Our appeal letters are only as good as the details you give us.
                Providing false or misleading information may undermine your appeal
                and could have legal consequences.
              </li>
              <li>
                You are responsible for submitting your appeal to the correct body
                (the operator, council, or tribunal) within the applicable deadlines.
                We provide guidance on where and how to submit, but the responsibility
                for timely submission is yours.
              </li>
              <li>
                You must be at least 18 years old to use the Service.
              </li>
              <li>
                You must not use the Service for any unlawful purpose or in a manner
                that could damage, disable, or impair the Service.
              </li>
            </ul>
          </section>

          {/* Pricing and Payment */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Pricing and Payment
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Our free assessment provides an initial evaluation of your parking fine
                at no cost. No payment information is required for the free assessment.
              </li>
              <li>
                Paid products (appeal letters and premium appeal packs)
                are priced as displayed at the point of purchase. All prices include VAT
                where applicable.
              </li>
              <li>
                Payment is processed securely by Stripe. We accept all major credit and
                debit cards.
              </li>
              <li>
                Your appeal letter is generated and delivered immediately after successful
                payment. Due to the digital nature of the product, once it has been
                generated and delivered, it is considered fully provided.
              </li>
            </ul>
          </section>

          {/* Refund Policy */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. Refund Policy
            </h2>
            <p className="mb-3">
              Because our products are digital documents generated instantly upon
              purchase, we generally do not offer refunds once a letter has been
              generated and delivered. However, we will consider refund requests in
              the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-gray-900">Technical failure:</strong> If we failed to deliver your
                letter due to a technical error on our end.
              </li>
              <li>
                <strong className="text-gray-900">Duplicate purchase:</strong> If you were charged twice for
                the same product.
              </li>
              <li>
                <strong className="text-gray-900">Material error:</strong> If the generated letter contains a
                significant factual error that renders it unusable (e.g., incorrect
                legislation referenced for your fine type).
              </li>
            </ul>
            <p className="mt-3">
              To request a refund, contact us at{" "}
              <a
                href="mailto:support@finecheck.co.uk"
                className="text-blue-800 underline hover:text-blue-600"
              >
                support@finecheck.co.uk
              </a>{" "}
              within 14 days of purchase. Refund requests are assessed on a case-by-case
              basis.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. Intellectual Property
            </h2>
            <p className="mb-3">
              All content on the FineCheck website, including text, guides, designs,
              logos, and code, is owned by FineCheck or licensed to us. You may not
              copy, reproduce, or distribute our content without our written permission.
            </p>
            <p>
              Appeal letters generated for you are licensed for your personal use in
              connection with your parking fine appeal. You may not resell, redistribute,
              or commercially exploit generated letters. You may share your letter with
              relevant parties (the operator, council, tribunal, or a solicitor you
              engage) as needed for your appeal.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. Limitation of Liability
            </h2>
            <p className="mb-3">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                FineCheck is provided &quot;as is&quot; without warranties of any kind, whether
                express or implied, including warranties of merchantability, fitness
                for a particular purpose, or non-infringement.
              </li>
              <li>
                We do not warrant that our assessment of your fine is complete, accurate,
                or up to date. Parking law changes, and individual circumstances vary.
              </li>
              <li>
                Our total liability to you for any claim arising from or related to the
                Service shall not exceed the amount you paid to us for the specific
                product giving rise to the claim.
              </li>
              <li>
                We are not liable for any indirect, incidental, consequential, or punitive
                damages, including loss of profits, missed deadlines, increased fines,
                or County Court Judgments that may result from reliance on our Service.
              </li>
            </ul>
            <p className="mt-3">
              Nothing in these Terms excludes or limits our liability for death or
              personal injury caused by our negligence, fraud, or any other liability
              that cannot be excluded by law.
            </p>
          </section>

          {/* Availability */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Service Availability
            </h2>
            <p>
              We aim to keep the Service available at all times but do not guarantee
              uninterrupted access. We may suspend or restrict access for maintenance,
              updates, or other reasons. We are not liable for any loss caused by
              temporary unavailability of the Service.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service
              if you breach these Terms or use the Service in a manner we reasonably
              consider to be harmful, abusive, or fraudulent. Termination does not
              affect any rights or obligations that accrued before termination.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              10. Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws
              of England and Wales. Any disputes arising from or in connection with
              these Terms shall be subject to the exclusive jurisdiction of the courts
              of England and Wales.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              11. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Any changes will be posted
              on this page with an updated date. Continued use of the Service after
              changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              12. Contact
            </h2>
            <p>
              If you have questions about these Terms, contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:support@finecheck.co.uk"
                className="text-blue-800 underline hover:text-blue-600"
              >
                support@finecheck.co.uk
              </a>
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
