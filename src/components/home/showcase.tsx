"use client";
import React, { useState, useEffect } from "react";

const screenshots = [
  "/download.png",
  "/dashboard-2.png",
  "/dashboard-1.png",
  "/dashboard-3.jpg",
];

export default function ShowcaseBlock() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setActive((prev) => (prev + 1) % screenshots.length),
      4000
    );
    return () => clearTimeout(timer);
  }, [active]);

  // Responsive: show carousel on md+, fade transition on small screens
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 767px)").matches;

  return (
    <section className="relative z-10 flex flex-col items-center py-8 sm:py-16 px-2 sm:px-6 overflow-hidden min-h-screen justify-center">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 z-0 w-[180px] h-[120px] sm:w-[320px] sm:h-[220px] rounded-full filter blur-3xl opacity-40 pointer-events-none bg-gradient-to-tr from-purple-200/40 via-pink-200/30 to-white" />
      <div className="absolute bottom-0 right-0 z-0 w-[100px] h-[70px] sm:w-[210px] sm:h-[160px] bg-gradient-to-tr from-pink-200/60 via-purple-200/40 to-white rounded-full filter blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 text-center mb-6 sm:mb-10">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3 tracking-tight">
          See the Power of{" "}
          <span className="text-purple-600">
            Simpliflow
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mx-auto">
          Lightning-fast, intuitive dashboards and automation—designed for modern teams.
        </p>
      </div>

      {/* Responsive animation: Carousel for md+, fade for mobile */}
      <div className="relative flex items-center justify-center w-full max-w-xs sm:max-w-md md:max-w-xl h-[110px] sm:h-[220px] md:h-[320px]">
        {/* On mobile: fade transition, only one image visible */}
        <div className="md:hidden w-full h-full flex items-center justify-center">
          {screenshots.map((src, idx) => (
            <div
              key={src}
              className={`absolute left-0 top-0 w-full h-full rounded-2xl shadow-xl border border-gray-100 bg-white overflow-hidden transition-opacity duration-700 ${
                idx === active ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"
              }`}
            >
              <img
                src={src}
                alt={`Dashboard Screenshot ${idx + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* On md+ screens: carousel animation */}
        <div className="hidden md:flex items-center justify-center w-full h-full">
          {screenshots.map((src, idx) => {
            let style = "absolute transition-all duration-700 ease-in-out";
            let z = 10;
            let opacity = "opacity-80";
            let w = "w-[120px] md:w-[180px]";
            let h = "h-[90px] md:h-[120px]";
            let transform = "";

            if (idx === active) {
              style = "relative z-20 transition-all duration-700 ease-in-out";
              opacity = "opacity-100";
              w = "w-[260px] md:w-[320px]";
              h = "h-[180px] md:h-[240px]";
              transform = "";
              z = 30;
            } else if ((active + 1) % screenshots.length === idx) {
              // Left
              style += " left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 scale-75";
              z = 10;
            } else if ((active + 2) % screenshots.length === idx) {
              // Bottom
              style +=
                " left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3 scale-50 md:scale-75";
              w = "w-[100px] md:w-[140px]";
              h = "h-[50px] md:h-[80px]";
              opacity = "opacity-70";
              z = 5;
            } else if ((active + 3) % screenshots.length === idx) {
              // Right
              style += " right-0 top-1/2 -translate-y-1/2 translate-x-1/3 scale-75";
              z = 10;
            } else {
              // Hide others
              opacity = "opacity-0 pointer-events-none";
              z = 1;
              w = "w-0";
              h = "h-0";
            }

            return (
              <div
                key={src}
                className={`${style} ${opacity} rounded-2xl shadow-xl border border-gray-100 bg-white overflow-hidden ${w} ${h}`}
                style={{ zIndex: z }}
              >
                <img
                  src={src}
                  alt={`Dashboard Screenshot ${idx + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}