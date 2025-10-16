"use client";

const scrollToSection = (sectionId: string) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
  <footer className="relative w-full py-10 sm:py-16 flex flex-col items-center bg-gradient-to-b from-[var(--canvas-0)] via-[var(--canvas-50)] to-[var(--canvas-0)]">
  <div className="relative w-full max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
        {/* Main footer layout */}
  <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-12 mb-8 w-full">
          {/* Left side - Newsletter signup */}
          <div className="w-full lg:w-2/3 mb-6 lg:mb-0">
            <h3 className="text-left text-base sm:text-lg leading-snug font-normal text-[var(--ink-900)] mb-3 sm:mb-4">
              Join our newsletter for the{" "}
              <em className="italic font-normal">
                latest updates, pro design tips, and exclusive offers
              </em>{" "}
              — straight to your inbox.
            </h3>
            {/* Email input with button */}
            <form className="mt-2 w-full" onSubmit={handleSubscribe}>
              <div className="flex items-center w-full border-b border-[var(--champagne)] focus-within:border-[var(--teal-hero)]">
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email address"
                  className="w-full px-0 py-2 text-xs sm:text-sm bg-transparent placeholder-[var(--ink-800)] text-[var(--ink-900)] focus:outline-none"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={subscribed}
                />
                <button
                  type="submit"
                  className="p-2"
                  aria-label="Subscribe"
                  disabled={subscribed}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="var(--teal-hero)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {subscribed && (
                <div className="mt-2 text-[var(--teal-hero)] text-xs font-medium">Thanks for subscribing!</div>
              )}
            </form>
          </div>
          {/* Right side - Navigation columns */}
          <div className="w-full lg:w-1/3 flex flex-col sm:flex-row gap-6 justify-between">
            {/* Company column */}
            <div className="flex flex-col items-start text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-[var(--ink-900)] mb-3">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    type="button"
                    className="text-xs sm:text-sm text-[var(--ink-800)] hover:text-[var(--teal-hero)] transition-colors bg-transparent p-0"
                    onClick={() => scrollToSection("about")}
                  >
                    About us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-xs sm:text-sm text-[var(--ink-800)] hover:text-[var(--teal-hero)] transition-colors bg-transparent p-0"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact us
                  </button>
                </li>
                <li>
                  <a
                    href="/help-center"
                    className="text-xs sm:text-sm text-[var(--ink-800)] hover:text-[var(--teal-hero)] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-xs sm:text-sm text-[var(--ink-800)] hover:text-[var(--teal-hero)] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-xs sm:text-sm text-[var(--ink-800)] hover:text-[var(--teal-hero)] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section - Social & Copyright */}
  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[var(--champagne)] text-xs">
          <div className="flex items-center gap-4 mb-2 sm:mb-0">
            {/* Social icons */}
            <a href="https://twitter.com/simpliflo" target="_blank" rel="noopener noreferrer" className="text-[var(--champagne)] hover:text-[var(--teal-hero)] transition-colors" aria-label="Twitter">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M22 5.92a8.38 8.38 0 01-2.36.65A4.15 4.15 0 0021.4 4.1a8.28 8.28 0 01-2.62 1A4.13 4.13 0 0012 8.09a11.71 11.71 0 01-8.53-4.32 4.13 4.13 0 001.28 5.5A4.1 4.1 0 012 8.15v.05a4.13 4.13 0 003.32 4.05c-.4.11-.82.17-1.26.17-.31 0-.6-.03-.89-.08a4.15 4.15 0 003.85 2.87A8.32 8.32 0 012 19.54 11.74 11.74 0 008.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0022 5.92z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://github.com/simpliflo" target="_blank" rel="noopener noreferrer" className="text-[var(--champagne)] hover:text-[var(--teal-hero)] transition-colors" aria-label="GitHub">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.49 11.49 0 008 10.94c.58.1.79-.25.79-.56v-2c-3.26.7-3.95-1.57-3.95-1.57-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.6-.3-5.34-1.3-5.34-5.77 0-1.28.46-2.32 1.19-3.14-.12-.3-.52-1.52.11-3.17 0 0 .98-.32 3.21 1.2a11.27 11.27 0 012.93-.39c.99 0 2 .13 2.93.39 2.23-1.52 3.21-1.2 3.21-1.2.63 1.65.23 2.87.11 3.17.74.82 1.19 1.86 1.19 3.14 0 4.48-2.75 5.47-5.37 5.76.41.35.77 1.04.77 2.09v3.1c0 .31.21.67.8.56A11.49 11.49 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" fill="currentColor" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/simpliflo" target="_blank" rel="noopener noreferrer" className="text-[var(--champagne)] hover:text-[var(--teal-hero)] transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M19.5 3A2.5 2.5 0 0 1 22 5.5v13A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-13A2.5 2.5 0 0 1 4.5 3h15zm-11 5.75A1.25 1.25 0 1 0 7.75 10 1.25 1.25 0 0 0 8.5 8.75zm-.25 2.25H4.75v7h3.5zm5.75 0h-3.5v7h3.5zm-.25-2.25A1.25 1.25 0 1 0 15.75 10 1.25 1.25 0 0 0 16.5 8.75zm-.25 2.25h-3.5v7h3.5z" fill="currentColor" />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-[var(--ink-800)]">
              © 2025 <span className="font-bold text-[var(--teal-hero)]">simpliflo</span>. All rights reserved.
            </p>
            {/* Scroll to top button */}
            <button
              onClick={() => scrollToSection("top")}
              className="w-8 h-8 bg-[var(--teal-hero)] text-white rounded-full flex items-center justify-center hover:bg-[var(--cyan-pop)] transition-colors"
              aria-label="Scroll to top"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 19V5M12 5L5 12M12 5L19 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;