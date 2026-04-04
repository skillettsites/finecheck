import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About FineCheck | How We Help You Appeal Parking Fines",
  description:
    "FineCheck is a UK parking fine appeal tool that uses AI to help drivers check their fines, understand their rights, and generate professional appeal letters.",
  alternates: {
    canonical: "https://finecheck.co.uk/about",
  },
};

const steps = [
  {
    number: "1",
    title: "Tell Us About Your Fine",
    description:
      "Enter the details of your parking fine, including the type (council or private), the operator, the date, and the circumstances.",
  },
  {
    number: "2",
    title: "Get a Free Assessment",
    description:
      "Our AI analyses your situation against UK parking law, checking for procedural errors, signage issues, and common grounds for appeal.",
  },
  {
    number: "3",
    title: "Receive Your Appeal Letter",
    description:
      "We generate a professional, personalised appeal letter that references the correct legislation, appeal bodies, and grounds for your specific case.",
  },
  {
    number: "4",
    title: "Submit Your Appeal",
    description:
      "Send your letter to the operator or council. We tell you exactly where to send it and what to include.",
  },
];

const trustSignals = [
  {
    title: "We Are Not a Law Firm",
    description:
      "FineCheck provides document preparation and legal information, not legal advice. Our guides and letters are based on publicly available UK parking law. For complex disputes or court proceedings, we recommend consulting a solicitor.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Your Data Is Secure",
    description:
      "We never store your personal details beyond what is needed to generate your letter. Payments are processed securely through Stripe. We do not sell or share your data with third parties.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Based on Real Law",
    description:
      "Our letters reference the Traffic Management Act 2004, the Protection of Freedoms Act 2012, the Private Parking Code of Practice, and relevant case law including ParkingEye v Beavis [2015] UKSC 67.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "Our basic assessment is free. If you want a professionally generated appeal letter, pricing is clear and upfront with no hidden fees. You only pay if you choose to proceed.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <Container size="md">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About FineCheck
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Over 25 million parking fines are issued in the UK every year. Studies show
            that 42-64% of appeals succeed at tribunal. Yet fewer than 1 in 20 fines are
            ever formally challenged. We built FineCheck to change that.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Parking enforcement in the UK is big business. Councils generated over
              £1 billion in parking revenue last year. Private operators issue millions
              of charges, often for minor infractions or on the basis of flawed
              procedures. The system relies on most people paying without question.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              FineCheck exists to level the playing field. We make it simple for
              anyone to understand their rights, check whether a fine is valid, and
              submit a well-crafted appeal. No legal jargon, no expensive solicitors,
              no guessing what to write.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our AI understands UK parking law, from the Protection of Freedoms Act
              2012 to the new Private Parking Code of Practice. It checks your specific
              circumstances against the relevant legislation and generates a
              personalised letter that gives you the best chance of success.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How FineCheck Works
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-800 text-white font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Signals */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Trust and Transparency
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-blue-800">{signal.icon}</div>
                  <h3 className="font-semibold text-gray-900">{signal.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-blue-800 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Check Your Fine for Free
          </h2>
          <p className="mt-3 text-blue-100 max-w-xl mx-auto">
            Find out if your parking fine has grounds for appeal. Our free assessment
            takes less than 2 minutes.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/appeal" variant="accent" size="lg">
              Start Your Free Assessment
            </Button>
            <Button href="/guides" variant="secondary" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Read Our Guides
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
