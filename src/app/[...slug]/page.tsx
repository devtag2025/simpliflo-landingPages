"use client";
import { useParams } from "next/navigation";
import * as React from "react";

const pageContent: Record<
  string,
  { title: string; description: React.ReactElement }
> = {
  overview: { title: "Overview", description: <>This is the overview page.</> },
  features: { title: "Features", description: <>All about features.</> },
  integrations: { title: "Integrations", description: <>Integration details.</> },
  teams: { title: "For Teams", description: <>Solutions for teams.</> },
  individuals: { title: "For Individuals", description: <>Solutions for individuals.</> },
  docs: { title: "Docs", description: <>Documentation resources.</> },
  blog: { title: "Blog", description: <>Our blog posts.</> },
  community: { title: "Community", description: <>Join our community.</> },
  about: {
    title: "About Us",
    description: (
      <section className="w-full flex flex-col items-center text-center gap-6 py-2">
        <div className="mb-2">
          <span className="inline-block text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent drop-shadow-sm mb-2">Welcome to Simpliflow</span>
          <p className="mt-2 text-base sm:text-lg text-[var(--ink-900)] max-w-xl mx-auto">
            Where automation meets accounting and business excellence.<br />
            Our mission is to empower organizations to streamline financial operations, reduce manual workload, and make smarter, faster decisions.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[var(--canvas-50)] via-white to-[var(--cyan-pop)] rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg mx-auto">
          <h3 className="font-bold text-lg sm:text-xl mb-2 bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent">Who are we?</h3>
          <p className="text-sm sm:text-base text-[var(--ink-900)]">
            We are a passionate team of developers, accountants, and business professionals dedicated to transforming accounting and business management through intelligent automation.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[var(--canvas-50)] via-white to-[var(--cyan-pop)] rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg mx-auto">
          <h3 className="font-bold text-lg sm:text-xl mb-2 bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent">What do we do?</h3>
          <p className="text-sm sm:text-base text-[var(--ink-900)]">
            Our platform automates accounting tasks, reconciliations, reporting, and business workflows—connecting all your tools so your team can focus on growth, not grunt work.
          </p>
        </div>
        <div className="bg-gradient-to-br from-[var(--canvas-50)] via-white to-[var(--cyan-pop)] rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg mx-auto">
          <h3 className="font-bold text-lg sm:text-xl mb-2 bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent">Why choose us?</h3>
          <p className="text-sm sm:text-base text-[var(--ink-900)]">
            Simpliflow is secure, easy to use, and designed for real business needs. Whether you are a startup, small business, or enterprise, our solutions scale with you and help you stay compliant and efficient.
          </p>
        </div>
        {/* Trust signals */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] text-white text-xs sm:text-sm font-semibold shadow">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
            GDPR Compliant
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] text-white text-xs sm:text-sm font-semibold shadow">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
            99.99% Uptime
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] text-white text-xs sm:text-sm font-semibold shadow">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            Trusted by 100+ Businesses
          </span>
        </div>
      </section>
    ),
  },

  product: { 
    title: "Product", 
    description: <>Product information coming soon.</> 
  },
};

// Custom Not Found component (can be extended for other routes)
const NotFoundPage = ({ slug }: { slug?: string }) => {
  const message =
    slug === "blog"
      ? "Sorry, this blog post does not exist."
      : "Sorry, this page does not exist.";

  return (
    <div className="rounded-2xl shadow-xl border border-gray-100 bg-white/80 backdrop-blur px-6 py-8 flex flex-col items-center animate-fadein">
      <h1 className="text-2xl font-bold mb-4 text-center">Page Not Found</h1>
      <p className="text-base text-gray-600 text-center">{message}</p>
    </div>
  );
};

export default function DynamicPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const content = slug ? pageContent[slug] : undefined;

  return (
    <main className="w-full flex justify-center items-center min-h-[70vh] py-6 sm:py-10 md:py-16 bg-transparent">
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
        {content ? (
          <div className="rounded-2xl shadow-xl border border-gray-100 bg-white/80 backdrop-blur px-4 py-7 sm:px-8 md:px-10 md:py-12 flex flex-col items-center animate-fadein">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-center text-[var(--teal-hero)] drop-shadow-lg transition-all duration-300">
              {content.title}
            </h1>
            <div className="text-base sm:text-lg text-gray-700 w-full mx-auto text-center mb-5 transition-all">
              {content.description}
            </div>
          </div>
        ) : (
          <NotFoundPage slug={slug} />
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
          animation: fadeInUp 0.7s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        }
      `}</style>
    </main>
  );
}
