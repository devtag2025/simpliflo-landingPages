"use client";

import React, { useState } from "react";
import Link from "next/link";
import Plasma from "../Plasma";
import ResponsiveDialog from "../ResponsiveDialog";
import { Button } from "@/components/ui/button";
import Captcha from "../recaptchaV3";
import SplitText from "../SplitText";
import ShinyText from "../ShinyText";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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
  };

  const handleAnimationComplete = () => {
    console.log("Main headline animation complete!");
  };

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* 🌌 Animated Plasma Background */}
      <div className="absolute inset-0 -z-10">
        <Plasma
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl">
        {/* Animated Headline */}
        <SplitText
          text="Automate Your Outbound with an"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        {/* Shiny AI Text */}
        <div className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          <ShinyText
            text="AI-First Platform"
            disabled={false}
            speed={2.8}
            className=""
          />
        </div>

        {/* Supporting Paragraph */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
          Empower your sales team with advanced outbound tools and AI automation,
          streamlining every step of your workflow for better results.
        </p>
        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-400 hover:opacity-90 text-white rounded-full px-8 py-3 text-base sm:text-lg font-semibold transition-transform hover:scale-105 shadow-lg"
          >
            Get Early Access
          </Button>
        </div>
      </div>

      {/* 🧩 Responsive Modal (Dialog/Drawer) */}
      <ResponsiveDialog isOpen={isModalOpen} onChange={setIsModalOpen}>
        <div className="p-6 sm:p-8 bg-white rounded-t-2xl sm:rounded-2xl shadow-lg w-full max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Join the Early Access
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Field */}
            <input
              type="email"
              required
              className="w-full rounded-full border border-gray-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 px-4 py-2 text-base outline-none placeholder-gray-400"
              placeholder="Enter Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={submitted}
            />

            {/* GDPR Consent */}
            <div className="flex items-start text-sm text-gray-600">
              <input
                type="checkbox"
                id="gdpr"
                checked={gdprConsent}
                onChange={(e) => setGdprConsent(e.target.checked)}
                disabled={submitted}
                className="mt-1 accent-purple-500"
                required
              />
              <label htmlFor="gdpr" className="ml-2">
                I consent to having my email processed for early access (per{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="underline text-purple-600"
                >
                  Privacy Policy
                </Link>{" "}
                &{" "}
                <Link
                  href="/terms"
                  target="_blank"
                  className="underline text-purple-600"
                >
                  Terms & Conditions
                </Link>
                ).
              </label>
            </div>

            {/* Captcha */}
            <Captcha onVerify={(token: string) => setCaptchaToken(token)} />

            {/* Submit */}
            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-400 hover:opacity-90 text-white rounded-full px-6 py-2 text-base font-semibold transition-transform hover:scale-105"
              disabled={submitted}
            >
              {submitted ? "Submitted" : "Get Started"}
            </Button>
          </form>

          {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
          {submitted && (
            <p className="mt-4 text-green-600 text-center">
              Thanks for signing up!
            </p>
          )}
        </div>
      </ResponsiveDialog>
    </section>
  );
}