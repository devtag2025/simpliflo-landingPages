"use client";

import React from "react";
import { FaUserTie, FaCogs, FaShieldAlt } from "react-icons/fa";
import SplitText from "../SplitText";
import Carousel from "../Carousel";
import CurvedLoop from "../CurvedLoop";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[var(--canvas-0)]"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Animated Title */}
        <div className="mb-8">
          <SplitText
            text="Who are we?"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--ink-900)]"
            tag="h2"
          />
        </div>

        {/* Info Card for audience and use cases */}
        <div className="mb-12 w-full flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
          {/* Section 1: Who this is for */}
          <div className="flex-1 p-8 flex flex-col items-center text-center font-[DM Serif Text] bg-[var(--canvas-50)] rounded-2xl shadow-md">
            <h2 className="font-bold text-2xl mb-4 text-[var(--ink-900)]">Who this is for</h2>
            <p className="text-sm sm:text-base text-[var(--ink-800)] mb-4">
            Simpliflo fits most UK small businesses that send invoices or take card payments with Stripe, and keep accounts in Xero or QuickBooks.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-2">
            If your customers use WhatsApp, Simpliflo fits.<br />UK and GBP only.
            </p>
            <p className="text-sm sm:text-base text-gray-700">
            This platform will be continuously evolving, and we’re committed to introducing new features and innovations as we grow.
            </p>
          </div>
          {/* Section 2: Popular use cases */}
          <div className="flex-1 p-8 flex flex-col items-center text-center font-[DM Serif Text] bg-[var(--canvas-50)] rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-[var(--ink-900)]">Popular use cases</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
                Trades and home services, health and beauty, professional services, coaches and tutors, creative studios and agencies, ecommerce deposits and balance collections, hospitality and venues, repairs and field teams.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full flex justify-center items-center mb-12">
          <div className="max-w-4xl w-full flex justify-center">
            <Carousel
              baseWidth={350}
              autoplay={true}
              autoplayDelay={4000}
              pauseOnHover={true}
              loop={true}
              round={false}
            >
              {/* Card 1 */}
              <div className="bg-[var(--canvas-50)] rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center">
                      <FaUserTie className="text-[var(--canvas-50)] text-2xl sm:text-3xl mb-2 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200" />
                <h2 className="font-bold text-2xl mb-4 bg-gradient-to-r from-[var(--teal-hero)] to-[var(--teal-deep)] bg-clip-text text-[var(--ink-900)]">
                  Who are we?
                </h2>
                <p className="text-gray-700 text-base leading-relaxed ">
                  A passionate team of developers, accountants, and business professionals dedicated to transforming
                  accounting and business management through intelligent automation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[var(--canvas-50)] rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center">
                      <FaCogs className="text-[var(--canvas-50)] text-2xl sm:text-3xl mb-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-200" />
                <h2 className="font-bold text-2xl mb-4 bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-[var(--ink-900)]">
                  What do we do?
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  Our platform automates accounting tasks, reconciliations, reporting, and business workflows—connecting
                  all your tools so your team can focus on growth, not grunt work.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[var(--canvas-50)] rounded-2xl shadow-xl p-8 h-full flex flex-col items-center text-center">
                      <FaShieldAlt className="text-[var(--canvas-50)] text-2xl sm:text-3xl mb-2 group-hover:scale-125 group-hover:text-red-600 transition-transform duration-200" />
                <h2 className="font-bold text-2xl mb-4 bg-gradient-to-r from-[var(--teal-ocean)] to-[var(--teal-deep)] bg-clip-text text-[var(--ink-900)]">
                  Why choose us?
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  Simpliflow is secure, easy to use, and designed for real business needs. Whether you are a startup,
                  small business, or enterprise, our solutions scale with you and help you stay compliant and efficient.
                </p>
              </div>
            </Carousel>
          </div>
        </div>

        {/* Curved Loop Footer */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full ">
            <CurvedLoop
              marqueeText="Automate your accounting  Accelerate your business  "
              speed={2}
              curveAmount={250}
              direction="right"
              interactive={true}
              className=" bg-clip-text bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] font-bold text-4xl sm:text-6xl uppercase text-[var(--ink-900)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
