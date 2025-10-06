"use client";

import React, { useState, useRef, useEffect } from "react";
import { Database, Cookie, Zap, Mail, Shield } from "lucide-react";
import SpotlightCard from "../SpotlightCard";
import TextType from "../TextType";

const valueProps = [
  {
    icon: <Database className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
    title: "Postgres HA + PITR",
    description:
      "High availability with point-in-time recovery ensures 99.99% uptime and zero data loss protection through automated failover and continuous backup.",
  },
  {
    icon: <Cookie className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
    title: "Secure Cookies",
    description:
      "Enterprise-grade security with encrypted, httponly, and secure cookie policies by default to prevent XSS and CSRF attacks.",
  },
  {
    icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
    title: "n8n Cloud",
    description:
      "Automated workflow orchestration with built-in monitoring and error handling for mission-critical business processes.",
  },
  {
    icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
    title: "Deliverability Probes",
    description:
      "Real-time email deliverability monitoring with bounce prediction and optimization to ensure maximum inbox placement.",
  },
];

const CARD_HEIGHT_CLASSES = "min-h-[280px] sm:min-h-[320px] md:min-h-[360px]";

export default function ValueSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 3 seconds (faster transitions)
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % valueProps.length);
    }, 3000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center  px-6 sm:px-8 py-20 relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Typing Title */}
        <div className="mb-8">
          <TextType
            text={[
              "Security & Reliability",
              "Your Data. Protected.",
              "Enterprise-Grade Guardrails",
            ]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent"
          />
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mb-12">
          Enterprise-grade protection mechanisms ensuring your data stays secure and accessible.
        </p>

        {/* Spotlight Cards */}
        <div className="relative w-full flex flex-col items-center justify-center">
          <div className="relative flex justify-center w-full">
            {valueProps.length > 0 && (
              <div
                key={activeIndex}
                className="w-full flex justify-center transition-all duration-700 ease-in-out"
              >
                <SpotlightCard
                  className={`w-full max-w-md sm:max-w-lg md:max-w-xl ${CARD_HEIGHT_CLASSES} rounded-2xl shadow-xl border border-purple-100 px-6 py-8 flex flex-col justify-between bg-gradient-to-br from-purple-50 to-pink-50 backdrop-blur`}
                  spotlightColor="rgba(168, 85, 247, 0.15)"
                >
                  <div className="flex items-center mb-6 justify-center">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mr-4">
                      {valueProps[activeIndex].icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                      {valueProps[activeIndex].title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {valueProps[activeIndex].description}
                  </p>
                </SpotlightCard>
              </div>
            )}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {valueProps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all border-2 ${
                  idx === activeIndex
                    ? "bg-pink-400 border-transparent scale-110 shadow-md"
                    : "bg-purple-100 border-purple-200"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Info Badge */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 w-full max-w-3xl shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Multi-Layered Security Architecture
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                All our guardrails work together to build a comprehensive security framework,
                protecting your data at every step — from storage to transmission to processing.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white rounded-xl shadow p-3 border border-purple-200 flex items-center">
                <Shield className="text-green-500 w-5 h-5 mr-2" />
                <span className="font-medium text-gray-700 text-sm sm:text-base">
                  SOC 2 Type II Certified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
