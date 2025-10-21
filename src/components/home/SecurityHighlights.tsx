"use client";
import React from "react";
import Link from "next/link";

const features = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path d="M12 4l7 3v4c0 5-3.5 9-7 9s-7-4-7-9V7l7-3z" stroke="#14B8A6" strokeWidth="2"/>
      </svg>
    ),
    title: "Signature verified webhooks",
    description: "Every inbound event is checked.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path d="M17 8V7a5 5 0 10-10 0v1a2 2 0 00-2 2v5a7 7 0 0014 0V10a2 2 0 00-2-2z" stroke="#14B8A6" strokeWidth="2"/>
        <rect x="9" y="13" width="6" height="2" rx="1" fill="#14B8A6"/>
      </svg>
    ),
    title: "Durable idempotency",
    description: "Unique references prevent duplicate postings.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <ellipse cx="12" cy="7" rx="7" ry="3" stroke="#14B8A6" strokeWidth="2"/>
        <path d="M5 7v10c0 1.7 3.1 3 7 3s7-1.3 7-3V7" stroke="#14B8A6" strokeWidth="2"/>
      </svg>
    ),
    title: "Environment separation",
    description: "Keys and data are isolated by environment.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <rect x="6.5" y="9" width="11" height="6" rx="2" stroke="#14B8A6" strokeWidth="2"/>
        <path d="M17 10l-2 2m0 0l-2-2m2 2V7" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "GDPR delete",
    description: "Delete tenant data in Settings.",
  },
];

export default function SecurityHighlights() {
  return (
    <section className="w-full max-w-5xl mx-auto px-2 sm:px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="flex flex-col bg-white rounded-xl border px-6 py-7 items-start min-h-[130px] shadow-sm"
            style={{
              borderColor: "rgba(20, 184, 166, 0.13)",
              boxShadow: "0 1px 6px 0 rgba(20, 184, 166, 0.08)"
            }}
          >
            <div className="mb-3">{f.icon}</div>
            <div>
              <div className="font-semibold text-base mb-1" style={{ color: "#0B5351" }}>
                {f.title}
              </div>
              <div className="text-gray-700 text-sm">{f.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <Link
          href="/privacy-policy"
          className="text-sm font-medium hover:underline"
          style={{
            color: "#14B8A6",
          }}
        >
          Read the full Security and Privacy page
        </Link>
      </div>
      <style jsx>{`
        :root {
          --teal-hero: #14B8A6;
          --teal-deep: #0E7C86;
          --teal-ocean: #0B5351;
          --cyan-pop: #22D3EE;
        }
      `}</style>
    </section>
  );
}