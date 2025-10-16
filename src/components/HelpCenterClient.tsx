"use client";
import React, { useState } from "react";

// Sample articles data (markdown/HTML supported)
const articles = [
  {
    id: "getting-started-1",
    title: "Welcome to Simpliflow!",
    category: "Getting Started",
    content: `
      <h3 id="welcome-to-simpliflow">Welcome to Simpliflow!</h3>
      <p>Simpliflow helps you automate outbound with AI-first tools. To get started, sign up for early access and check your email for instructions.</p>
      <ul>
        <li>Sign up with your work email.</li>
        <li>Verify your account.</li>
        <li>Start exploring features!</li>
      </ul>
    `,
    popular: true,
    more: `
      <p><b>Pro Tip:</b> Explore our integrations with WhatsApp, Stripe, and accounting platforms for maximum automation.</p>
      <p>If you have any issues, reach out to support for personal onboarding assistance.</p>
    `
  },
  {
    id: "account-setup-1",
    title: "Setting Up Your Account",
    category: "Account Setup",
    content: `
      <h3 id="setting-up-your-account">Setting Up Your Account</h3>
      <ol>
        <li>Go to <b>Settings &gt; Account</b>.</li>
        <li>Add your company info and logo.</li>
        <li>Connect integrations (WhatsApp, Stripe, QBO, Xero).</li>
        <li>Set notification preferences.</li>
      </ol>
    `,
    popular: true,
    more: `
      <p><b>Advanced:</b> You can customize user roles and permissions for your team under Account &gt; Roles.</p>
      <p>Set up 2FA for extra security.</p>
    `
  },
  {
    id: "faq-1",
    title: "How do I reset my password?",
    category: "FAQs",
    content: `
      <h3 id="how-do-i-reset-my-password">Resetting Your Password</h3>
      <p>Go to the login page and click <b>Forgot Password?</b>. Enter your email, and you'll receive a reset link.</p>
    `,
    popular: true,
    more: `
      <p>If you don't receive the email within 5 minutes, check your spam folder or contact support.</p>
    `
  },
  {
    id: "troubleshooting-1",
    title: "Troubleshooting Login Issues",
    category: "Troubleshooting",
    content: `
      <h3 id="troubleshooting-login-issues">Troubleshooting Login Issues</h3>
      <ul>
        <li>Check your internet connection.</li>
        <li>Ensure your email and password are correct.</li>
        <li>Try resetting your password.</li>
        <li>Contact support if the issue persists.</li>
      </ul>
    `,
    popular: false,
    more: `
      <p>Common error codes: <b>401</b> = Unauthorized, <b>403</b> = Forbidden.</p>
      <p>Try clearing your browser cache and cookies if login fails repeatedly.</p>
    `
  },
  {
    id: "faq-2",
    title: "Where do I find my invoices?",
    category: "FAQs",
    content: `
      <h3 id="where-do-i-find-my-invoices">Finding Your Invoices</h3>
      <p>Invoices are in the <b>Billing</b> section of your dashboard. Download or print them anytime.</p>
    `,
    popular: false,
    more: `
      <p>If you need custom invoices, contact billing@simpliflow.com.</p>
    `
  },
];

const categories = [
  "Getting Started",
  "Account Setup",
  "FAQs",
  "Troubleshooting",
];


export default function HelpCenterClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Filtering logic
  const filteredArticles = articles.filter((a) => {
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.content.toLowerCase().includes(search.toLowerCase()) ||
      (a.more && a.more.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = category ? a.category === category : true;
    return matchesSearch && matchesCategory;
  });

  const popularArticles = articles.filter((a) => a.popular);

  const searchInputRef = React.useRef<HTMLInputElement>(null);
  function handleSearchIconClick() {
    searchInputRef.current?.focus();
  }

  return (
    <main className="relative z-10 w-full min-h-screen flex flex-col items-center bg-[var(--canvas-0)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": articles.map(article => ({
              "@type": "Question",
              "name": article.title,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": (article.content + (article.more || "")).replace(/<[^>]+>/g, '')
              }
            }))
          }),
        }}
      />
  <section className="w-full max-w-3xl mx-auto flex flex-col items-center px-4 sm:px-8 py-16 mt-10 sm:mt-16 rounded-3xl shadow-xl bg-gradient-to-br from-[var(--canvas-50)] via-white to-[var(--canvas-0)] border border-[var(--canvas-50)]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent drop-shadow-sm text-center">Help Center</h1>
        <p className="mb-8 text-base sm:text-lg text-[var(--ink-800)] text-center max-w-2xl">
          Find answers, guides, and troubleshooting tips for <span className="font-bold text-[var(--teal-hero)]">Simpliflow</span>. Use the search or browse by category.
        </p>

        {/* Search Bar with Search Icon */}
        <div className="w-full mb-8 flex items-center gap-2">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-full border border-[var(--canvas-50)] px-5 py-3 text-base outline-none focus:border-[var(--teal-hero)] focus:ring-2 focus:ring-[var(--teal-hero)]/20 shadow bg-white text-[var(--ink-900)]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search help articles"
          />
          <button
            type="button"
            onClick={handleSearchIconClick}
            aria-label="Focus search"
            className="p-3 rounded-full bg-[var(--canvas-50)] hover:bg-[var(--teal-hero)] transition border border-[var(--canvas-50)]"
          >
            {/* Search Icon SVG */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="#14B8A6" strokeWidth="2" />
              <path d="M20 20l-4.2-4.2" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Category Selector */}
        <nav className="w-full mb-8 flex flex-wrap gap-3 justify-center" aria-label="Help categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(category === cat ? null : cat)}
              className={`px-4 py-2 rounded-full border font-semibold text-sm transition shadow-sm ${
                category === cat
                  ? "bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] text-white border-[var(--teal-hero)]"
                  : "bg-white text-[var(--teal-hero)] border-[var(--canvas-50)] hover:bg-[var(--canvas-50)]"
              }`}
              aria-pressed={category === cat}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Popular Articles */}
        {popularArticles.length > 0 && (
          <div className="w-full mb-10">
            <h2 className="text-lg font-bold mb-3 text-[var(--teal-hero)] text-center">Popular Articles</h2>
            <div className="flex flex-col gap-4">
              {popularArticles
                .filter(a => filteredArticles.some(fa => fa.id === a.id))
                .map((a) => (
                  <article key={a.id} className="border border-[var(--canvas-50)] rounded-2xl px-6 py-5 bg-gradient-to-br from-[var(--canvas-0)] via-white to-[var(--canvas-50)] shadow-xl" aria-labelledby={a.id + "-title"}>
                    <h3 id={a.id + "-title"} className="text-base font-bold bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent mb-2">{a.title}</h3>
                    <div
                      className="text-sm text-[var(--ink-800)] mt-1"
                      dangerouslySetInnerHTML={{ __html: a.content }}
                    />
                    <button
                      className="mt-3 text-xs text-[var(--teal-hero)] underline focus:outline-none"
                      onClick={() => setExpanded(expanded === a.id ? null : a.id)}
                      aria-expanded={expanded === a.id}
                    >
                      {expanded === a.id ? "Show less" : "Show more"}
                    </button>
                    {expanded === a.id && a.more && (
                      <div
                        className="text-xs text-[var(--ink-800)] mt-2"
                        dangerouslySetInnerHTML={{ __html: a.more }}
                      />
                    )}
                  </article>
                ))}
            </div>
          </div>
        )}

        {/* Articles List */}
        <section className="w-full flex flex-col gap-6" aria-label="Help articles">
          {filteredArticles.length === 0 ? (
            <div className="text-[var(--ink-700)] italic text-center">No articles found.</div>
          ) : (
            filteredArticles.map((a) => (
              <article key={a.id} className="border border-[var(--canvas-50)] rounded-2xl px-6 py-5 bg-white shadow-xl" aria-labelledby={a.id + "-title"}>
                <h3 id={a.id + "-title"} className="text-base font-bold bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent mb-2">{a.title}</h3>
                <div
                  className="text-sm text-[var(--ink-800)] mt-1"
                  dangerouslySetInnerHTML={{ __html: a.content }}
                />
                <button
                  className="mt-3 text-xs text-[var(--teal-hero)] underline focus:outline-none"
                  onClick={() => setExpanded(expanded === a.id ? null : a.id)}
                  aria-expanded={expanded === a.id}
                >
                  {expanded === a.id ? "Show less" : "Show more"}
                </button>
                {expanded === a.id && a.more && (
                  <div
                    className="text-xs text-[var(--ink-800)] mt-2"
                    dangerouslySetInnerHTML={{ __html: a.more }}
                  />
                )}
                <span className="mt-2 text-[11px] text-[var(--ink-700)] block">
                  Category: {a.category}
                </span>
              </article>
            ))
          )}
        </section>
      </section>
    </main>
  );
}