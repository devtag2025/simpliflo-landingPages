"use client";
import React from "react";
import {
  MessageSquare,
  FileCheck2,
  Wrench,
  MailSearch,
  Users,
  SlidersHorizontal
} from "lucide-react";

// Features data
const features = [
  {
    icon: <MessageSquare size={24} className="text-[var(--teal-deep)]" />,
    title: "Remind and collect in WhatsApp",
    bullets: [
      "Send reminders that open the Stripe invoice page",
      "Turn on automatic reminders with quiet hours, stop when paid",
      "Capture opt in, respect opt out",
      "Pro can create and send a pay link after opt in"
    ]
  },
  {
    icon: <FileCheck2 size={24} className="text-[var(--teal-deep)]" />,
    title: "Keep books correct with proof",
    bullets: [
      "Post revenue, fees, and net to match Stripe totals",
      "Attach a payout proof file and confirm it is present",
      "Reverse VAT and amounts proportionally on refunds"
    ]
  },
  {
    icon: <Wrench size={24} className="text-[var(--teal-deep)]" />,
    title: "Fix issues fast",
    bullets: [
      "See clear reasons like missing mapping or VAT not set",
      "Use Fix and repost with an audit trail"
    ]
  },
  {
    icon: <MailSearch size={24} className="text-[var(--teal-deep)]" />,
    title: "Import history and stay on top of today",
    bullets: [
      "Import recent Stripe activity with a guided preview",
      "See a day at a glance, paid today, proof attached, messages sent"
    ]
  },
  {
    icon: <Users size={24} className="text-[var(--teal-deep)]" />,
    title: "Work smoothly with your accountant",
    bullets: [
      "Share payout proof in one tap",
      "Export your tenant configuration",
      "Delete tenant data in Settings, GDPR respected"
    ]
  },
  {
    icon: <SlidersHorizontal size={24} className="text-[var(--teal-deep)]" />,
    title: "Control limits and costs",
    bullets: [
      "Pro shows messaging spend and usage",
      "Pro adds scheduled backfills and higher limits"
    ]
  }
];

export default function WhatYouCanDo() {
  return (
    <section className="w-full py-10 px-2 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
  <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 font-[DM Serif Text] bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent">What you can do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[rgba(20,184,166,0.14)] shadow-sm p-6 flex flex-col gap-2 min-h-[250px]"
            >
              <div className="flex items-center gap-2 mb-2">
                {feature.icon}
                <span className="font-semibold text-[var(--teal-deep)] text-base">{feature.title}</span>
              </div>
              <ul className="list-disc list-inside ml-1 space-y-1 text-[var(--ink-800)] text-[15px] font-normal">
                {feature.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}