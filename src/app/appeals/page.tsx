"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import FAQ from "@/components/ui/FAQ";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { OPERATORS } from "@/data/operators";

const faqItems = [
  {
    question: "What is the difference between BPA and IPC operators?",
    answer:
      "The BPA (British Parking Association) and IPC (International Parking Community) are the two trade bodies that accredit private parking companies. BPA operators use POPLA as their independent appeals service, while IPC operators use IAS. Both must follow a Code of Practice, but there are differences in how they handle appeals and what rules they must follow.",
  },
  {
    question: "Can private parking companies take me to court?",
    answer:
      "Most private operators will not take you to court over an unpaid charge. However, a few larger operators like ParkingEye and UKPC do pursue some cases through the County Court. Even in these cases, many drivers successfully defend themselves. The court process is a civil matter, not a criminal one, so you will not get a criminal record.",
  },
  {
    question: "What is the POFA 14-day rule?",
    answer:
      "Under the Protection of Freedoms Act 2012 (POFA), private parking operators must send a Notice to Keeper (NtK) to the registered keeper within 14 days of the alleged contravention if the driver was not identified at the time. If they miss this deadline, they lose the right to pursue the keeper for payment.",
  },
  {
    question: "How long do I have to appeal a private parking fine?",
    answer:
      "You typically have 28 days to appeal to the operator directly. If your appeal is rejected, you then have 28 days to escalate to the independent appeals service (POPLA or IAS). During the appeal process, the charge is frozen and no debt collection action should be taken.",
  },
  {
    question: "What is the average success rate for private parking appeals?",
    answer:
      "Success rates vary by operator and the grounds for appeal, but across all operators the average success rate at the independent appeals stage (POPLA/IAS) is around 40-55%. Appeals based on procedural failures like late NtK service or inadequate signage tend to have the highest success rates.",
  },
  {
    question: "Do I have to pay the fine while my appeal is being considered?",
    answer:
      "No. While your appeal is in progress, the operator should freeze the charge. You should not receive any debt collection letters or threats of court action during this period. If you do, mention in your correspondence that an appeal is active.",
  },
];

type TradeFilter = "all" | "BPA" | "IPC";

export default function OperatorsIndexPage() {
  const [filter, setFilter] = useState<TradeFilter>("all");

  const filteredOperators =
    filter === "all"
      ? OPERATORS
      : OPERATORS.filter((op) => op.tradeBody === filter);

  const bpaCount = OPERATORS.filter((op) => op.tradeBody === "BPA").length;
  const ipcCount = OPERATORS.filter((op) => op.tradeBody === "IPC").length;

  return (
    <>
      <head>
        <title>Appeal Your Parking Fine by Operator | FineCheck</title>
        <meta
          name="description"
          content="Find your private parking operator and learn how to appeal your charge. Covers all major UK operators including ParkingEye, UKPC, APCOA, NCP, and more. Free appeal guides and success rates."
        />
        <link
          rel="canonical"
          href="https://finecheck.co.uk/appeals"
        />
      </head>

      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <Container>
          <Breadcrumbs
            items={[{ label: "Operators", href: "/appeals" }]}
            className="mb-6"
          />

          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Appeal Your Parking Fine by Operator
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Every private parking company has different processes, appeal bodies,
              and legal weaknesses. Knowing your operator is the first step to a
              successful appeal. Select your operator below to see a detailed
              breakdown of how to challenge their charges.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-blue-800">
                {OPERATORS.length}
              </p>
              <p className="text-sm text-gray-500">Operators Covered</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-blue-800">{bpaCount}</p>
              <p className="text-sm text-gray-500">BPA Members</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-blue-800">{ipcCount}</p>
              <p className="text-sm text-gray-500">IPC Members</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center">
              <p className="text-2xl font-bold text-green-700">42-57%</p>
              <p className="text-sm text-gray-500">Avg Success Rate</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-700">
              Filter by trade body:
            </span>
            {(["all", "BPA", "IPC"] as TradeFilter[]).map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  filter === option
                    ? "bg-blue-800 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {option === "all"
                  ? `All Operators (${OPERATORS.length})`
                  : `${option} (${option === "BPA" ? bpaCount : ipcCount})`}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredOperators.map((op) => (
              <Link key={op.slug} href={`/appeals/${op.slug}`}>
                <Card hover className="h-full">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {op.name}
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        {op.fullName}
                      </p>
                    </div>
                    <Badge
                      variant={
                        op.averageSuccessRate >= 50 ? "success" : "warning"
                      }
                    >
                      {op.averageSuccessRate}% success
                    </Badge>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="info">{op.tradeBody}</Badge>
                    <Badge variant="default">
                      Appeal to {op.appealBody}
                    </Badge>
                    {op.usesANPR && (
                      <Badge variant="accent">Uses ANPR</Badge>
                    )}
                    {op.pursuesToCourt && (
                      <Badge variant="danger">Pursues Court</Badge>
                    )}
                  </div>

                  <p className="mt-4 text-sm text-gray-600 line-clamp-2">
                    {op.description}
                  </p>

                  <div className="mt-4 text-sm font-medium text-blue-800">
                    View appeal guide &rarr;
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Understanding Private Parking Operators
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Private parking charges are not the same as council fines. They are
            invoices for an alleged breach of contract. This gives you specific
            rights and grounds for appeal that do not apply to council PCNs.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <h3 className="font-semibold text-gray-900 mb-2">
                BPA Operators (appeal to POPLA)
              </h3>
              <p className="text-sm text-gray-600">
                The British Parking Association is the larger of the two trade
                bodies. BPA members must follow the BPA Code of Practice and use
                POPLA (Parking on Private Land Appeals) as their independent
                appeals service. POPLA decisions are binding on the operator but
                not on you, so if you lose you can still refuse to pay.
              </p>
            </Card>
            <Card>
              <h3 className="font-semibold text-gray-900 mb-2">
                IPC Operators (appeal to IAS)
              </h3>
              <p className="text-sm text-gray-600">
                The International Parking Community is the newer trade body. IPC
                members use the IAS (Independent Appeals Service) for independent
                appeals. The IPC Code of Practice has similar requirements to the
                BPA Code, but there are some differences in enforcement standards
                and appeal procedures.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container size="md">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQ items={faqItems} />
        </Container>
      </section>

      <section className="bg-blue-800 py-12">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to Appeal Your Parking Fine?
            </h2>
            <p className="mt-3 text-lg text-blue-100">
              Get a free assessment of your fine in minutes. Our tool checks the
              most common grounds for appeal and helps you build your case.
            </p>
            <div className="mt-6">
              <Button href="/appeal" variant="accent" size="lg">
                Start Your Free Assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
