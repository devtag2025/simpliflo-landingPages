"use client";
import React, { useState, useEffect } from "react";
import { MessageSquare, Repeat, Link, FileText, CheckCircle2, RefreshCw, LayoutDashboard } from "lucide-react";

const screenshots = [
  "/sc-1.png",
  "/sc-2.png",
  "/sc-3.png",
  "/sc-4.png",
];

export default function ShowcaseBlock() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % screenshots.length);
    }, 4000); // Slower interval for smoother animation
    return () => clearInterval(interval);
  }, []);

  // Feature list for the right side
  const features = [
    {
      icon: <MessageSquare className="text-teal-hero" size={28} />,
      title: "Send invoice reminders in WhatsApp",
      description:
        "Pick an open invoice and click Send reminder. Messages respect opt in and quiet hours. Customers can reply STOP at any time. The reminder opens the Stripe hosted invoice page.",
    },
    {
      icon: <Repeat className="text-cyan-pop" size={28} />,
      title: "Turn on automatic reminders when ready",
      description:
        "After a quick checklist in Stripe, you can enable automatic reminders for due invoices. We send at a sensible cadence and stop when paid.",
    },
    {
      icon: <Link className="text-teal-deep" size={28} />,
      title: "Create a pay link in Pro, optional",
      description:
        "If you enable Quick Pay in Settings, you can create a simple pay link and send it in WhatsApp. If you do not opt in, reminders use hosted invoices by default.",
    },
    {
      icon: <FileText className="text-cyan-pop" size={28} />,
      title: "Share payout proof with your accountant",
      description:
        "Each payout entry has a proof file attached and verified. Copy a link and share it in one click.",
    },
    {
      icon: <CheckCircle2 className="text-teal-hero" size={28} />,
      title: "Clear exceptions and move on",
      description:
        "See the cause, fix it, and repost safely. Every entry has a unique reference, so your books do not get double postings.",
    },
    {
      icon: <RefreshCw className="text-teal-deep" size={28} />,
      title: "Backfill recent Stripe activity",
      description:
        "Pull recent charges, refunds, and payouts into your books with safe batching and duplicate protection.",
    },
    {
      icon: <LayoutDashboard className="text-cyan-pop" size={28} />,
      title: "See your day at a glance",
      description:
        "The dashboard shows paid today, proof attached, message delivery, and any exceptions to clear.",
    },
  ];

  return (
    <section className="relative z-10 flex flex-col items-center py-8 sm:py-16 px-2 sm:px-6 overflow-hidden min-h-screen justify-center bg-[var(--canvas-0)]">
      <div className="relative z-10 text-center mb-6 sm:mb-10">
        <h2 className="bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 tracking-tight">
          See the Power of Simpliflo
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[var(--ink-800)] max-w-xl mx-auto">
          Lightning-fast, intuitive dashboards and automation—designed for modern teams.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full">
        {/* Animated image and feature card sync, both same size and slide in from sides */}
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="relative flex items-center justify-center mx-auto w-[360px] h-[240px] sm:w-[420px] sm:h-[280px] md:w-[480px] md:h-[320px]">
            {screenshots.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Screenshot ${idx + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-contain rounded-2xl shadow-xl border border-[var(--canvas-50)] bg-[var(--canvas-50)] transition-all duration-1200
                  ${active === idx ? 'opacity-100 scale-100 z-10 translate-x-0' : 'opacity-0 scale-95 z-0 -translate-x-[120%]'}
                `}
                style={{ transitionProperty: 'opacity, transform', position: 'absolute' }}
                draggable={false}
                loading="eager"
                decoding="async"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto">
          <div className="relative flex items-center justify-center mx-auto w-[360px] h-[240px] sm:w-[420px] sm:h-[280px] md:w-[480px] md:h-[320px]">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 bg-[var(--canvas-50)] rounded-xl shadow p-4 border border-[var(--canvas-50)] absolute w-full transition-all duration-1200
                  ${active === idx ? 'opacity-100 scale-100 z-10 translate-x-0' : 'opacity-0 scale-95 z-0 translate-x-[120%]'}
                `}
                style={{ transitionProperty: 'opacity, transform', position: 'absolute' }}
              >
                <span>{feature.icon}</span>
                <div>
                  <h3 className="bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent font-semibold text-base sm:text-lg mb-1">{feature.title}</h3>
                  <p className="text-[var(--ink-800)] text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}