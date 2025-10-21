"use client";
import React from "react";
import SplitText from "../SplitText";
// Import lucide icons
import { Send, ShieldCheck, FileText, Zap, Wrench } from "lucide-react";

// Updated features and icons as per your instructions
const featureIcons = [
  // Reach
  <div className="flex items-center justify-center w-16 h-16 rounded-full" style={{background: "rgba(20,184,166,0.08)"}}>
    <Send size={36} color="var(--teal-deep)" strokeWidth={2.2}/>
  </div>,
  // Hosted payments
  <div className="flex items-center justify-center w-16 h-16 rounded-full" style={{background: "rgba(20,184,166,0.08)"}}>
    <ShieldCheck size={36} color="var(--teal-deep)" strokeWidth={2.2}/>
  </div>,
  // Clean books
  <div className="flex items-center justify-center w-16 h-16 rounded-full" style={{background: "rgba(20,184,166,0.08)"}}>
    <FileText size={36} color="var(--teal-deep)" strokeWidth={2.2}/>
  </div>,
  // Setup simple
  <div className="flex items-center justify-center w-16 h-16 rounded-full" style={{background: "rgba(20,184,166,0.08)"}}>
    <Zap size={36} color="var(--teal-deep)" strokeWidth={2.2}/>
  </div>,
  // Fix issues
  <div className="flex items-center justify-center w-16 h-16 rounded-full" style={{background: "rgba(20,184,166,0.08)"}}>
    <Wrench size={36} color="var(--teal-deep)" strokeWidth={2.2}/>
  </div>,
];

const features = [
  {
    title: "Reach customers where they already are",
    description: "WhatsApp first, no extra application for customers to learn.",
  },
  {
    title: "Hosted payments, safe by design",
    description: "Stripe hosted pages handle card details. Simpliflo never touches them.",
  },
  {
    title: "Clean books with proof",
    description: "Amounts, fees, and net match Stripe. Each payout entry includes a proof file.",
  },
  {
    title: "Setup is simple",
    description: "Connect your accounts in minutes, run a safe dry run before anything touches your books.",
  },
  {
    title: "Fix issues in one place",
    description: "Simpliflo highlights likely fixes and mappings. You approve every change. Nothing posts without your say-so.",
  },
];

export default function WhySimpliflo() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[var(--canvas-0)] flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto text-center mb-10">
        <SplitText
          text="Why Simpliflo"
          className="text-3xl sm:text-4xl font-extrabold mb-4 font-[DM Serif Text] bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent"
        />
      </div>
      {/* Responsive grid: 1 on mobile, 2 on tablet, 3 on small desktop, 5 on large desktop */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-5
        gap-6
        w-full
        max-w-6xl
        mx-auto
      ">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center px-2 py-4"
          >
            <div className="mb-6">{featureIcons[idx]}</div>
            <h3 className="font-bold text-lg mb-2 text-[var(--ink-900)] font-[DM Serif Text]">
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