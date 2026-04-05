import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FAQ from "@/components/ui/FAQ";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { TEMPLATES, AppealTemplate } from "@/data/templates";

export const metadata: Metadata = {
  title: "Free Parking Fine Appeal Letter Templates",
  description:
    "Free parking fine appeal letter templates for ParkingEye, UKPC, APCOA, Smart Parking, council PCNs, POPLA, and IAS. Copy, customise, and send. Legally accurate templates with real legal arguments.",
  alternates: {
    canonical: "https://finecheck.co.uk/templates",
  },
  openGraph: {
    title: "Free Parking Fine Appeal Letter Templates | FineCheck",
    description:
      "Free parking fine appeal letter templates for all major UK operators and councils. Copy, customise, and send.",
    url: "https://finecheck.co.uk/templates",
    type: "website",
  },
};

const categoryConfig: Record<
  AppealTemplate["category"],
  { label: string; variant: "info" | "success" | "warning" | "accent" }
> = {
  operator: { label: "Operator", variant: "info" },
  council: { label: "Council", variant: "success" },
  defence: { label: "Defence", variant: "warning" },
  escalation: { label: "Escalation", variant: "accent" },
};

const categoryDescriptions: Record<AppealTemplate["category"], string> = {
  operator:
    "Templates for appealing directly to private parking operators like ParkingEye, UKPC, and APCOA.",
  council:
    "Templates for challenging council-issued Penalty Charge Notices under the Traffic Management Act.",
  defence:
    "Specialised templates for specific defence grounds, including ANPR evidence challenges and mitigating circumstances.",
  escalation:
    "Templates for escalating rejected appeals to POPLA (BPA operators) or the IAS (IPC operators).",
};

function TemplateCard({ template }: { template: AppealTemplate }) {
  const cat = categoryConfig[template.category];
  return (
    <Link href={`/templates/${template.slug}`} className="block group">
      <Card hover padding="md" className="h-full">
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between gap-3 mb-3">
            <Badge variant={cat.variant}>{cat.label}</Badge>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-800 transition-colors mb-2">
            {template.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {template.description}
          </p>
          <div className="mt-4 flex items-center text-sm font-medium text-blue-800">
            View template
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </div>
        </div>
      </Card>
    </Link>
  );
}

const faqItems = [
  {
    question: "Are these appeal letter templates really free?",
    answer:
      "Yes, completely free. You can copy any template, fill in your details, and send it to the operator or council. There is no catch and no signup required.",
  },
  {
    question: "Will a generic template be enough to win my appeal?",
    answer:
      "Generic templates cover the most common legal arguments and can be effective, especially for procedural failures like late NtK service or poor signage. However, a personalised letter that addresses your specific circumstances, the exact operator, and the particular weaknesses of your case will always be stronger. FineCheck offers personalised appeal letters from just \u00a35.99.",
  },
  {
    question:
      "What is the difference between POPLA and the IAS?",
    answer:
      "POPLA handles appeals against operators who are members of the BPA (British Parking Association), such as ParkingEye, UKPC, and APCOA. The IAS handles appeals against operators who are members of the IPC (International Parking Community), such as Smart Parking. Both are free to use and their decisions are binding on the operator.",
  },
  {
    question: "How long do I have to appeal a parking fine?",
    answer:
      "For private parking charges, you typically have 28 days to appeal to the operator from the date the charge was issued. If rejected, you have a further 28 days to escalate to POPLA or the IAS. For council PCNs, you should make an informal challenge within 14 days to preserve the discounted payment option.",
  },
  {
    question: "Can I use these templates for council parking fines?",
    answer:
      "Yes. The Council PCN Informal Challenge template is specifically designed for council-issued Penalty Charge Notices. Council fines follow a different legal framework (the Traffic Management Act 2004) from private charges, so make sure you use the correct template.",
  },
  {
    question: "What evidence should I include with my appeal?",
    answer:
      "Include photographs of the signage (or lack of it), the PCN itself, any payment receipts or permits, ANPR images (obtained via a Subject Access Request), medical evidence if applicable, and any correspondence with the operator. The more evidence you provide, the stronger your appeal.",
  },
];

export default function TemplatesPage() {
  const categories: AppealTemplate["category"][] = [
    "operator",
    "council",
    "defence",
    "escalation",
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
        <Container size="lg" className="py-12 sm:py-16">
          <Breadcrumbs
            items={[{ label: "Appeal Templates", href: "/templates" }]}
            className="mb-6"
          />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Free Parking Fine Appeal Letter Templates
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Professionally written appeal letter templates for every major UK
              parking operator and council. Each template includes real legal
              arguments, proper formatting, and clear placeholders. Copy,
              customise with your details, and send.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex gap-3">
                <svg
                  className="h-6 w-6 text-amber-600 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-amber-800">
                    These templates are a solid starting point, but generic by
                    nature.
                  </p>
                  <p className="text-sm text-amber-700 mt-1">
                    A personalised letter that addresses your exact
                    circumstances, the specific operator&apos;s weaknesses, and
                    the precise legal grounds for your case is significantly more
                    likely to succeed.{" "}
                    <Link
                      href="/appeal"
                      className="font-semibold underline hover:text-amber-900"
                    >
                      Get a personalised appeal letter from &pound;5.99
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {categories.map((category) => {
        const templates = TEMPLATES.filter((t) => t.category === category);
        const config = categoryConfig[category];
        return (
          <section key={category} className="py-12 sm:py-16" id={category}>
            <Container size="lg">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant={config.variant}>{config.label}</Badge>
                  <span className="text-sm text-gray-500">
                    {templates.length}{" "}
                    {templates.length === 1 ? "template" : "templates"}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {config.label} Templates
                </h2>
                <p className="text-gray-600">
                  {categoryDescriptions[category]}
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {templates.map((template) => (
                  <TemplateCard key={template.slug} template={template} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <section className="py-12 sm:py-16 bg-blue-800">
        <Container size="md" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Want a Letter Written Specifically for Your Case?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our personalised appeal letters analyse your specific situation,
            reference the exact legal grounds that apply, and target the known
            weaknesses of your operator. Much stronger than a generic template.
          </p>
          <Button href="/appeal" variant="accent" size="lg">
            Get a Personalised Appeal Letter from &pound;5.99
          </Button>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </Container>
      </section>
    </>
  );
}
