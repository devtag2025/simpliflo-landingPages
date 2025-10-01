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

  // For accessible search icon button: triggers search but here just focus input
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  function handleSearchIconClick() {
    searchInputRef.current?.focus();
  }

  return (
    <main className="relative z-10 w-full min-h-screen flex flex-col items-center">
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
      <div className="w-full max-w-2xl mx-auto flex flex-col items-start px-2 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-6 text-purple-700">Help Center</h1>
        <p className="mb-6 text-gray-600 text-sm">
          Find answers, guides, and troubleshooting tips for Simpliflow. Use the search or browse by category.
        </p>

        {/* Search Bar with Search Icon */}
        <div className="w-full mb-6 flex items-center gap-2">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-full border px-4 py-2 text-base outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 shadow bg-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search help articles"
          />
          <button
            type="button"
            onClick={handleSearchIconClick}
            aria-label="Focus search"
            className="p-2 rounded-full bg-white hover:bg-purple-100 transition border border-gray-200"
          >
            {/* Search Icon SVG */}
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="#7C3AED" strokeWidth="2" />
              <path d="M20 20l-4.2-4.2" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Category Selector */}
        <nav className="w-full mb-6 flex flex-wrap gap-2" aria-label="Help categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(category === cat ? null : cat)}
              className={`px-3 py-1 rounded-full border ${
                category === cat
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-purple-700 border-purple-200"
              } font-semibold text-xs transition`}
              aria-pressed={category === cat}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Popular Articles */}
        {popularArticles.length > 0 && (
          <div className="w-full mb-8">
            <h2 className="text-base font-semibold mb-2 text-gray-800">Popular Articles</h2>
            <div className="flex flex-col gap-3">
              {popularArticles
                .filter(a => filteredArticles.some(fa => fa.id === a.id)) // Only show if filtered
                .map((a) => (
                  <article key={a.id} className="border rounded-lg px-4 py-3 bg-purple-50 shadow-lg" aria-labelledby={a.id + "-title"}>
                    <h3 id={a.id + "-title"} className="text-sm font-bold text-purple-700">{a.title}</h3>
                    <div
                      className="text-xs text-gray-700 mt-1"
                      dangerouslySetInnerHTML={{ __html: a.content }}
                    />
                    <button
                      className="mt-2 text-xs text-purple-600 underline focus:outline-none"
                      onClick={() => setExpanded(expanded === a.id ? null : a.id)}
                      aria-expanded={expanded === a.id}
                    >
                      {expanded === a.id ? "Show less" : "Show more"}
                    </button>
                    {expanded === a.id && a.more && (
                      <div
                        className="text-xs text-gray-600 mt-2"
                        dangerouslySetInnerHTML={{ __html: a.more }}
                      />
                    )}
                  </article>
                ))}
            </div>
          </div>
        )}

        {/* Articles List */}
        <section className="w-full flex flex-col gap-4" aria-label="Help articles">
          {filteredArticles.length === 0 ? (
            <div className="text-gray-500 italic">No articles found.</div>
          ) : (
            filteredArticles.map((a) => (
              <article key={a.id} className="border rounded-lg px-4 py-3 bg-white shadow-lg" aria-labelledby={a.id + "-title"}>
                <h3 id={a.id + "-title"} className="text-sm font-bold text-purple-700">{a.title}</h3>
                <div
                  className="text-xs text-gray-700 mt-1"
                  dangerouslySetInnerHTML={{ __html: a.content }}
                />
                <button
                  className="mt-2 text-xs text-purple-600 underline focus:outline-none"
                  onClick={() => setExpanded(expanded === a.id ? null : a.id)}
                  aria-expanded={expanded === a.id}
                >
                  {expanded === a.id ? "Show less" : "Show more"}
                </button>
                {expanded === a.id && a.more && (
                  <div
                    className="text-xs text-gray-600 mt-2"
                    dangerouslySetInnerHTML={{ __html: a.more }}
                  />
                )}
                <span className="mt-2 text-[11px] text-gray-400 block">
                  Category: {a.category}
                </span>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
}