"use client";
import { useParams } from "next/navigation";
import * as React from "react";

const pageContent: Record<
  string,
  { title: string; description: React.ReactElement }
> = {
  overview: {
    title: "Overview",
    description: <>This is the overview page.</>,
  },
  features: {
    title: "Features",
    description: <>All about features.</>,
  },
  integrations: {
    title: "Integrations",
    description: <>Integration details.</>,
  },
  teams: {
    title: "For Teams",
    description: <>Solutions for teams.</>,
  },
  individuals: {
    title: "For Individuals",
    description: <>Solutions for individuals.</>,
  },
  docs: {
    title: "Docs",
    description: <>Documentation resources.</>,
  },
  blog: {
    title: "Blog",
    description: <>Our blog posts.</>,
  },
  community: {
    title: "Community",
    description: <>Join our community.</>,
  },
  pricing: {
    title: "Pricing",
    description: <>See pricing details.</>,
  },
  about: {
    title: "About Us",
    description: (
      <div className="space-y-3">
        <p>
          Welcome to Simpliflow—where automation meets accounting and business excellence.
          <br />
          Our mission is to empower organizations to streamline financial operations, reduce manual workload, and make smarter, faster decisions.
        </p>
        <div>
          <strong className="text-purple-500">Who are we?</strong>
          <br />
          We are a passionate team of developers, accountants, and business professionals dedicated to transforming accounting and business management through intelligent automation.
        </div>
        <div>
          <strong className="text-purple-500">What do we do?</strong>
          <br />
          Our platform automates accounting tasks, reconciliations, reporting, and business workflows—connecting all your tools so your team can focus on growth, not grunt work.
        </div>
        <div>
          <strong className="text-purple-500">Why choose us?</strong>
          <br />
          Simpliflow is secure, easy to use, and designed for real business needs. Whether you are a startup, small business, or enterprise, our solutions scale with you and help you stay compliant and efficient.
        </div>
        <div className="mt-4 text-center">
          <span className="inline-block text-purple-500 font-semibold bg-purple-50 rounded-full px-4 py-2 text-xs sm:text-sm shadow transition hover:bg-purple-100 hover:scale-105">
            Automate your accounting. Accelerate your business.
          </span>
        </div>
      </div>
    ),
  },
};

export default function DynamicPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const content = slug ? pageContent[slug] : undefined;

  return (
    <main className="w-full flex justify-center items-center min-h-[70vh] py-6 sm:py-10 md:py-16 bg-transparent">
      <div className="w-full max-w-lg mx-auto px-2 sm:px-4">
        {content ? (
          <div
            className="rounded-2xl shadow-xl border border-gray-100 bg-white/80 backdrop-blur px-4 py-7 sm:px-8 md:px-10 md:py-12 flex flex-col items-center overflow-auto max-h-[80vh] animate-fadein"
            style={{
              animation: "fadeInUp 0.7s cubic-bezier(.17,.67,.83,.67)",
            }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-center bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg transition-all duration-300">
              {content.title}
            </h1>
            <div className="text-base sm:text-lg text-gray-700 max-w-md mx-auto text-center mb-5 transition-all">
              {content.description}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl shadow-xl border border-gray-100 bg-white/80 backdrop-blur px-4 py-7 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4 text-center">Page Not Found</h1>
            <p className="text-base text-gray-600 text-center">
              Sorry, this page does not exist.
            </p>
          </div>
        )}
      </div>
      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadein {
          animation: fadeInUp 0.7s cubic-bezier(.17,.67,.83,.67);
        }
      `}</style>
    </main>
  );
}