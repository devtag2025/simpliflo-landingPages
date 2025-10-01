"use client";
import React, { useState, useRef } from "react";
import { Database, Cookie, Zap, Mail, Shield } from "lucide-react";

const valueProps = [
  {
    icon: <Database className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Postgres HA + PITR",
    description:
      "High availability with point-in-time recovery ensures 99.99% uptime and zero data loss protection through automated failover and continuous backup.",
    bg: "bg-gradient-to-r from-purple-200 via-purple-100 to-pink-100",
  },
  {
    icon: <Cookie className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Secure Cookies",
    description:
      "Enterprise-grade security with encrypted, httponly, and secure cookie policies by default to prevent XSS and CSRF attacks.",
    bg: "bg-gradient-to-r from-pink-100 via-pink-200 to-yellow-100",
  },
  {
    icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "n8n Cloud",
    description:
      "Automated workflow orchestration with built-in monitoring and error handling for mission-critical business processes.",
    bg: "bg-gradient-to-r from-yellow-100 via-green-100 to-blue-100",
  },
  {
    icon: <Mail className="w-8 h-8 sm:w-10 sm:h-10" />,
    title: "Deliverability Probes",
    description:
      "Real-time email deliverability monitoring with bounce prediction and optimization to ensure maximum inbox placement.",
    bg: "bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100",
  },
];

const CARD_HEIGHT_CLASSES = "min-h-[200px]"; // Adjust to just prevent flicker

const ValueSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % valueProps.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex]);

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % valueProps.length);
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + valueProps.length) % valueProps.length);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="w-full flex items-center justify-center py-10 px-6 mt-14">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-0">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Security & Reliability{" "}
            <span className="text-purple-600">
              Guardrails
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-md mx-auto">
            Enterprise-grade protection mechanisms that ensure your data stays secure and accessible.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative w-full flex flex-col items-center">
          <div className="relative flex items-stretch justify-center w-full">
            {valueProps.length > 0 && (
              <div
                key={activeIndex}
                className="w-full flex justify-center transition-all duration-700 ease-in-out"
              >
                <div
                  className={`w-full max-w-md sm:max-w-lg md:max-w-xl ${CARD_HEIGHT_CLASSES} ${valueProps[activeIndex].bg} bg-opacity-90 rounded-2xl shadow-xl border border-gray-100 px-4 py-6 flex flex-col justify-between h-full backdrop-blur`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white bg-opacity-30 flex items-center justify-center mr-4">
                      {valueProps[activeIndex].icon}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      {valueProps[activeIndex].title}
                    </h3>
                  </div>
                  <div className="text-gray-700 text-base md:text-lg">{valueProps[activeIndex].description}</div>
                </div>
              </div>
            )}
          </div>
          {/* Show controls only if more than one slide */}
          {valueProps.length > 1 && (
            <div className="flex justify-center gap-1 mt-6">
              {valueProps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`w-3 h-3 rounded-full focus:outline-none transition-all border-2 ${
                    idx === activeIndex
                      ? "bg-purple-500 border-purple-500 scale-110"
                      : "bg-purple-100 border-purple-200"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Info/Badge block */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 sm:p-6 border border-purple-100 w-full">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-4 md:mb-0">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                Multi-Layered Security Architecture
              </h3>
              <p className="text-gray-700 text-sm">
                All our guardrails work in unison to create a comprehensive security framework that protects your data at every touchpoint — from storage to transmission to processing.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center mt-2 md:mt-0">
              <div className="bg-white rounded-xl shadow p-3 border border-purple-200 flex items-center">
                <Shield className="text-green-500 w-5 h-5 mr-2" />
                <span className="font-medium text-gray-700 text-sm">SOC 2 Type II Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSlider;