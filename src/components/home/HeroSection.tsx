"use client";
import React, { useState } from "react";
import Link from "next/link";
import Captcha from "../recaptchaV3";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!gdprConsent) {
      setError("You must consent to data processing (GDPR).");
      return;
    }
    if (!captchaToken) {
      setError("Please complete the captcha.");
      return;
    }
    setSubmitted(true);
  }

  return (
    <section className="relative flex flex-col items-center justify-center w-full overflow-hidden py-8 mb-5">
      <div className="relative z-10 flex flex-col items-center w-full px-2 sm:px-6">
        <span className="mb-2 mt-6 sm:mb-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-center tracking-widest text-purple-600 uppercase">
          Simpliflow
        </span>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-gray-900 leading-tight">
          Automate Your Outbound With an <br className="hidden sm:block" />
          AI-First Platform{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-pink-300 bg-clip-text text-transparent">
            Powered by AI Employees
          </span>
        </h1>
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-center text-gray-700 max-w-xl">
            Empower your sales team with advanced outbound tools and AI automation, streamlining every step of your workflow for better results.
        </p>

        {/* Email Capture Form */}
        <form
          className="mt-8 w-full max-w-md flex flex-col items-center gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            required
            className="w-full rounded-full border-2 border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 px-4 py-2 text-base outline-none transition placeholder-gray-400 bg-white shadow-md"
            placeholder="Enter Work Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={submitted}
          />

          {/* Checkboxes: GDPR + Captcha, vertically aligned */}
          <div className="w-full flex flex-col gap-3 mt-2">
            {/* GDPR */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="gdpr"
                checked={gdprConsent}
                onChange={(e) => setGdprConsent(e.target.checked)}
                disabled={submitted}
                className="accent-purple-500 w-4 h-4"
                required
              />
              <div className="flex flex-col ml-2 text-xs sm:text-sm text-gray-700">
              <label htmlFor="gdpr" className="">
                I consent to having my email processed for early access (per{" "}
              </label>
              <label>
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-purple-600"
                >
                  Privacy Policy
                </Link>
                {" & "}
                <Link
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-purple-600"
                >
                  Terms & Conditions
                </Link>
                ).
              </label>
              </div>
            </div>
            {/* Captcha */}
            <div className="flex items-center">
              <Captcha onVerify={(token: string) => setCaptchaToken(token)} />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-full px-6 py-2 text-base font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-md transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-200"
            disabled={submitted}
          >
            {submitted ? "Submitted" : "Get Started"}
          </button>
        </form>

        {error && (
          <div className="mt-3 text-red-600 font-medium text-sm">
            {error}
          </div>
        )}
        {submitted && (
          <div className="mt-3 text-green-600 font-medium text-sm">
            Thanks for signing up!
          </div>
        )}
      </div>
    </section>
  );
}