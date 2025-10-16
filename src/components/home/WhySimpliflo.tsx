"use client";
import React from "react";
import SplitText from "../SplitText";

const features = [
  {
    title: "Reach customers where they already are",
    description: "WhatsApp first, no extra app to learn.",
  },
  {
    title: "Hosted payments, safe by design",
    description:
      "Stripe hosted pages handle card details. Simpliflo never touches them.",
  },
  {
    title: "Clean books with proof",
    description:
      "Amounts, fees, and net match Stripe. Each payout entry includes a proof file.",
  },
  {
    title: "Built-in guardrails and quick setup",
    description:
      "Signature verification, idempotent postings, quiet hours, opt in, Fix and repost, and a simple setup that keeps you in control.",
  },
];

export default function WhySimpliflo() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[var(--canvas-0)] flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto text-center mb-10">
        <SplitText
          text="Why Simpliflo"
          className="text-3xl sm:text-4xl font-extrabold text-[var(--ink-900)] mb-4 font-[DM Serif Text]"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
              className="bg-canvas-50 rounded-2xl shadow-md border border-[var(--canvas-50)] p-8 flex flex-col items-start text-left"
          >
            <h3 className="font-bold text-xl mb-2 text-[var(--ink-900)] font-[DM Serif Text]">
              {feature.title}
            </h3>
            <p className="text-base text-[var(--ink-800)] font-normal">
                {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
