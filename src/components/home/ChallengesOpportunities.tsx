"use client";
import React from "react";
import { MessageSquare, Clock, BookText, FileCheck2, Zap, Layers, Shield, Timer } from "lucide-react";

// Challenge/opportunity data
const items = [
  {
    icon: <MessageSquare size={24} className="text-[var(--teal-deep)]" />,
    challenge: "Invoice emails get ignored",
    opportunity: "Remind in WhatsApp. Pay now opens the Stripe invoice page.",
  },
  {
    icon: <Clock size={24} className="text-[var(--teal-deep)]" />,
    challenge: "Chasing burns evenings",
    opportunity: "Automatic reminders with quiet hours. We stop when Stripe shows paid.",
  },
  {
    icon: <BookText size={24} className="text-[var(--teal-deep)]" />,
    challenge: "Books do not match Stripe",
    opportunity: "Post from Stripe Balance Transactions so amounts match Stripe.",
  },
  {
    icon: <FileCheck2 size={24} className="text-[var(--teal-deep)]" />,
    challenge: "Accountants want payout evidence",
    opportunity: "Attach a payout proof file to each payout and confirm it is present.",
  },
  // New items from your screenshot
  {
    icon: <Zap size={24} className="text-[var(--teal-deep)]" />,
    challenge: "DIY automations take time",
    opportunity: "One portal for reminders and posting. No fragile Zaps to babysit.",
  },
  {
    icon: <Layers size={24} className="text-[var(--teal-deep)]" />,
    challenge: "Too many tools",
    opportunity: "Payments on Stripe, books in Xero or QuickBooks, control in Simpliflo.",
  },
  {
    icon: <Shield size={24} className="text-[var(--teal-deep)]" />,
    challenge: "VAT feels risky",
    opportunity: "Choose a default VAT code or No VAT. Override per product. Refunds reverse proportionally.",
  },
  {
    icon: <Timer size={24} className="text-[var(--teal-deep)]" />,
    challenge: "Setup drags for days",
    opportunity: "Connect, choose VAT, map products, run a Test run. Usually under ten minutes.",
  },
];

export default function ChallengesOpportunities() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 font-[DM Serif Text] text-center bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent">
          Challenges and Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm border border-[rgba(20,184,166,0.14)] p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="uppercase text-xs text-gray-500 tracking-wide">
                  Challenge
                </span>
              </div>
              <h3 className="text-[var(--ink-900)] text-base font-semibold mb-2">
                {item.challenge}
              </h3>
              <div className="border border-[var(--teal-hero)] rounded-xl p-4 bg-white/50">
                <div className="uppercase text-xs font-semibold text-[var(--teal-hero)] mb-1 tracking-wide">
                  Opportunity
                </div>
                <div className="text-[var(--ink-900)] text-base font-normal">
                  {item.opportunity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}