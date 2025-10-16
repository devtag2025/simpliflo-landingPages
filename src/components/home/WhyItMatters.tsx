import React from 'react';
import { DollarSign, FileText, Wrench, Zap } from 'lucide-react';

const features = [
  {
    title: 'Get paid from WhatsApp',
    description:
      "Your customer taps Pay now in WhatsApp. We open Stripe’s hosted invoice page. No new tool for them to learn.",
    icon: <DollarSign className="text-teal-hero" size={36} aria-label="Get paid" />,
  },
  {
    title: 'Books update with proof',
    description:
      "We post amounts, fees, and net to match Stripe. We attach a proof file, a file that lists each payout, and we verify it after upload.",
    icon: <FileText className="text-cyan-pop" size={36} aria-label="Proof file" />,
  },
  {
    title: 'Fix issues in one place',
    description:
      "If something needs attention, you see an Exception with a clear reason. The Fix and repost wizard guides you and records every change.",
    icon: <Wrench className="text-teal-hero" size={36} aria-label="Fix issues" />,
  },
  {
    title: 'Setup is simple',
    description:
      "Connect WhatsApp and Stripe, choose VAT or No VAT, tell Simpliflo where each product goes in your accounts and which VAT code to use, then run a safe dry run before anything touches your books.",
    icon: <Zap className="text-teal-deep" size={36} aria-label="Setup" />,
  },
];

export default function WhyItMatters() {
  return (
    <section className="py-16 px-4 md:px-8 bg-[var(--canvas-0)] text-ink-900 font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-sans mb-8 text-teal-hero font-bold">Why it matters for you</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-[var(--canvas-50)] rounded-xl shadow-md p-6 flex items-start gap-4 border border-[var(--canvas-50)]"
            >
              <span aria-label="icon">{feature.icon}</span>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-teal-deep">{feature.title}</h3>
                <p className="text-ink-800 text-base leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
