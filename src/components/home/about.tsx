"use client";
import React from "react";
import { FaUserTie, FaCogs, FaShieldAlt } from "react-icons/fa";

const cards = [
  {
    title: "Who are we?",
    icon: (
      <FaUserTie className="text-purple-500 text-2xl sm:text-3xl mb-2 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
    ),
    bg: "bg-purple-50",
    text: "A passionate team of developers, accountants, and business professionals dedicated to transforming accounting and business management through intelligent automation.",
  },
  {
    title: "What do we do?",
    icon: (
      <FaCogs className="text-pink-500 text-2xl sm:text-3xl mb-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
    ),
    bg: "bg-pink-50",
    text: "Our platform automates accounting tasks, reconciliations, reporting, and business workflows—connecting all your tools so your team can focus on growth, not grunt work.",
  },
  {
    title: "Why choose us?",
    icon: (
      <FaShieldAlt className="text-red-400 text-2xl sm:text-3xl mb-2 group-hover:scale-125 group-hover:text-red-600 transition-transform duration-300" />
    ),
    bg: "bg-red-50",
    text: "Simpliflow is secure, easy to use, and designed for real business needs. Whether you are a startup, small business, or enterprise, our solutions scale with you and help you stay compliant and efficient.",
  },
];

export default function AboutPage() {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center py-10 mt-10 min-h-[60vh] scroll-mt-16"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center px-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-purple-600 drop-shadow text-center">
          About Us
        </h1>
        <div className="text-sm sm:text-base text-gray-700 mb-1 text-center font-medium">
          Empowering businesses with seamless automation.
        </div>
        <div className="text-xs sm:text-sm text-gray-600 mb-6 text-center">
          Simpliflow helps you focus on what matters—by connecting your workflows and simplifying your accounting.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {cards.map(card => (
            <div
              key={card.title}
              className={`group rounded-lg shadow-md border border-gray-100 ${card.bg} px-6 py-5 flex flex-col items-start justify-between text-left transition-all duration-300 hover:scale-[1.03] hover:shadow-xl h-full`}
              style={{ minHeight: '260px' }}
            >
              <div>
                {card.icon}
                <h2 className="font-bold text-sm sm:text-base mb-2 bg-gradient-to-r from-purple-500 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  {card.title}
                </h2>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mt-2">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <footer className="max-w-xl mx-auto text-center mt-8">
          <span className="inline-block text-purple-500 font-semibold bg-purple-50 rounded-full px-4 py-2 text-xs sm:text-sm shadow transition hover:bg-purple-100 hover:scale-105">
            Automate your accounting. Accelerate your business.
          </span>
        </footer>
      </div>
    </section>
  );
}