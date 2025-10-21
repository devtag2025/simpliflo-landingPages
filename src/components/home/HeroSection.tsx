"use client";

import React, { useState } from "react";
import LogoLoop from "@/components/LogoLoop";
// Use cloudLogo images for LogoLoop
const cloudLogos = [
  { src: "/cloudLogo1.png", alt: "Cloud Logo 1", href: "#" },
  { src: "/cloudLogo2.png", alt: "Cloud Logo 2", href: "#" },
  { src: "/cloudLogo3.png", alt: "Cloud Logo 3", href: "#" },
  { src: "/cloudLogo4.png", alt: "Cloud Logo 4", href: "#" },
];
import Link from "next/link";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import ResponsiveDialog from "../ResponsiveDialog";
import Threads from "../Threads";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export const HeroSection: React.FC = () => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your submit logic here
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setEmail("");
      setGdprConsent(false);
    }, 2000);
  };

  return (
    <main className="overflow-hidden relative min-h-screen inset-0 -z-10 size-full">
      {/* LiquidEther animated background */}
      <div className="absolute inset-0 -z-20 w-full h-full pointer-events-none">
        <Threads amplitude={1} distance={0} />
      </div>
      {/* Existing radial gradients (optional, can remove if not needed) */}
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative pt-20 sm:pt-25 md:pt-30">
          <div
            aria-hidden
            className="absolute"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 100%, var(--color-background) 0%, var(--color-background) 100%)",
            }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              {/* Teal Bubble Above Title */}
              <div className="mx-auto mb-4 w-fit px-4 py-1 rounded-full bg-[rgba(20,184,166,0.08)] shadow-sm">
                <span className="font-semibold text-lg text-[var(--teal-hero)]">
                  For the UK SMB
                </span>
              </div>
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mx-auto mt-8 max-w-2xl sm:max-w-3xl md:max-w-4xl text-balance text-3xl sm:text-5xl md:text-7xl max-md:font-semibold lg:mt-16 xl:text-[5.25rem]"
                segmentWrapperClassName="wavy-gradient-text"
              >
                Stop Losing Evenings to Admin.
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-6 max-w-md sm:max-w-xl md:max-w-2xl text-balance text-base sm:text-lg"
              >
                Send WhatsApp reminders customers read, share Stripe pay links,
                and keep Xero or QuickBooks up to date automatically.
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-4 max-w-md sm:max-w-xl md:max-w-2xl text-balance text-base sm:text-lg"
              >
                No chasing. Just correct books. No
                spreadsheets.
              </TextEffect>
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 md:flex-row"
              >
                <div key={1}>
                  {/* Early Access Modal Button */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#0E7C86] hover:bg-[#14B8A6] text-white rounded-full px-8 py-3 text-base sm:text-lg font-semibold transition-transform hover:scale-105 shadow-lg"
                  >
                    Get Early Access
                  </button>
                </div>

                {/* Responsive Modal (Dialog/Drawer) */}
                <ResponsiveDialog
                  isOpen={isModalOpen}
                  onChange={setIsModalOpen}
                >
                  <div className="p-6 sm:p-8 bg-white rounded-t-2xl sm:rounded-2xl shadow-lg w-full max-w-lg mx-auto border border-ink-900">
                    <h2 className="text-2xl font-bold text-center mb-6 text-ink-900">
                      Join the Early Access
                    </h2>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      {/* Email Field */}
                      <input
                        type="email"
                        required
                        className="w-full rounded-full border border-ink-900 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 px-4 py-2 text-base outline-none placeholder-gray-400"
                        placeholder="Enter Work Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={submitted}
                      />

                      {/* GDPR Consent */}
                      <div className="flex items-start text-sm text-ink-900">
                        <input
                          type="checkbox"
                          id="gdpr"
                          checked={gdprConsent}
                          onChange={(e) => setGdprConsent(e.target.checked)}
                          disabled={submitted}
                          className="mt-1 accent-[#0E7C86]"
                          required
                        />
                        <label htmlFor="gdpr" className="ml-2">
                          I consent to having my email processed for early
                          access (per{" "}
                          <Link
                            href="/privacy-policy"
                            target="_blank"
                            className="underline text-[#0E7C86]"
                          >
                            Privacy Policy
                          </Link>{" "}
                          &{" "}
                          <Link
                            href="/terms"
                            target="_blank"
                            className="underline text-[#0E7C86]"
                          >
                            Terms & Conditions
                          </Link>
                          ).
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="bg-[#0E7C86] hover:bg-[#14B8A6] text-white rounded-full px-8 py-3 text-base font-semibold transition-transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={submitted}
                      >
                        {submitted ? "Submitting..." : "Request Early Access"}
                      </button>
                    </form>
                  </div>
                </ResponsiveDialog>
              </AnimatedGroup>
            </div>
          </div>
        </div>
      </section>
      {/* LogoLoop at the bottom with gap above and below */}
      <div className="my-16">
        <LogoLoop
          logos={cloudLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Cloud partners"
        />
      </div>
    </main>
  );
};
