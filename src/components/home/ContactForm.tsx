"use client";
import React, { useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import RecaptchaV3 from "../recaptchaV3";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleRecaptcha(token: string) {
    setRecaptchaToken(token);
    setVerified(!!token);
  }

  function validate() {
    if (!fields.name || !fields.email || !fields.message) {
      setError("All fields are required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    if (!recaptchaToken) {
      setError("Please verify you are human.");
      return;
    }
    setSubmitted(true);
    // Use recaptchaToken with your backend API
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
  <section className="w-full min-h-screen flex items-center justify-center px-6 pb-20 relative bg-[var(--canvas-0)]" id="contact">
        {/* Custom badge/branding for reCAPTCHA v3 */}
        <div className="absolute bottom-6 right-6 z-40 flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2 shadow-md border border-gray-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 48 48"
            fill="none"
            aria-label="reCAPTCHA logo"
          >
            <circle cx="24" cy="24" r="20" fill="#4285F4" />
            <path d="M24 8v4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M24 35.5V40" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 24h4.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M35.5 24H40" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="24" cy="24" r="13" fill="#fff" />
            <circle cx="24" cy="24" r="10" fill="#4285F4" />
          </svg>
          <span className="text-xs font-semibold text-gray-700">
            Protected by reCAPTCHA v3
          </span>
        </div>
  <div className="w-full max-w-md mx-auto rounded-2xl shadow-xl border border-[var(--canvas-50)] bg-[var(--canvas-0)]/80 backdrop-blur flex flex-col justify-center py-6 sm:py-8 px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-1 text-center text-[var(--ink-900)]">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base text-[var(--ink-800)] max-w-md mx-auto text-center mb-4">
              Have a question, suggestion, or need help? Fill out the form and our team will get back to you soon.
            </p>
          </div>
          <form
            className="w-full flex flex-col items-center gap-3"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="w-full flex flex-col gap-3">
              <input
                type="text"
                required
                className={`rounded-full border-2 ${
                  error && !fields.name ? "border-red-400" : "border-[var(--canvas-50)]"
                } focus:border-[var(--teal-hero)] focus:ring-2 focus:ring-[var(--canvas-50)] px-5 py-3 text-base outline-none transition placeholder-[var(--ink-800)] bg-[var(--canvas-0)] shadow-sm text-[var(--ink-900)]`}
                placeholder="Name"
                value={fields.name}
                onChange={(e) => setFields(f => ({ ...f, name: e.target.value }))}
                disabled={submitted}
              />
              <input
                type="email"
                required
                className={`rounded-full border-2 ${
                  error && !fields.email ? "border-red-400" : "border-[var(--canvas-50)]"
                } focus:border-[var(--teal-hero)] focus:ring-2 focus:ring-[var(--canvas-50)] px-5 py-3 text-base outline-none transition placeholder-[var(--ink-800)] bg-[var(--canvas-0)] shadow-sm text-[var(--ink-900)]`}
                placeholder="Email"
                value={fields.email}
                onChange={(e) => setFields(f => ({ ...f, email: e.target.value }))}
                disabled={submitted}
              />
              <textarea
                required
                rows={4}
                className={`rounded-2xl border-2 ${
                  error && !fields.message ? "border-red-400" : "border-[var(--canvas-50)]"
                } focus:border-[var(--teal-hero)] focus:ring-2 focus:ring-[var(--canvas-50)] px-5 py-3 text-base outline-none transition placeholder-[var(--ink-800)] bg-[var(--canvas-0)] shadow-sm resize-none text-[var(--ink-900)]`}
                placeholder="Your Message"
                value={fields.message}
                onChange={(e) => setFields(f => ({ ...f, message: e.target.value }))}
                disabled={submitted}
              />
            </div>
            {/* Recaptcha UI */}
            <div className="w-full flex items-center justify-center mt-2 mb-2">
              <RecaptchaV3 onVerify={handleRecaptcha} />
            </div>
            <button
              type="submit"
              className="rounded-full px-7 py-3 text-base font-semibold bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] text-white shadow-md transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--cyan-pop)] flex items-center justify-center w-full mt-2"
              disabled={submitted}
            >
              {submitted ? "Message Sent" : "Send Message"}
            </button>
            {error && (
              <div className="text-red-600 font-medium text-sm mt-1">{error}</div>
            )}
            {submitted && (
              <div className="text-green-600 font-medium text-sm mt-1">
                Thank you for contacting us, we will get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>
    </GoogleReCaptchaProvider>
  );
}