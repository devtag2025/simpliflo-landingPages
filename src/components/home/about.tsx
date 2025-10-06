"use client";

import React from "react";
import { FaUserTie, FaCogs, FaShieldAlt } from "react-icons/fa";
import TextType from "../TextType";
import Carousel from "../Carousel";
import CurvedLoop from "../CurvedLoop";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Animated Title */}
        <div className="mb-8">
          <TextType
            text={["About Us", "Who We Are", "Our Mission"]}
            typingSpeed={75}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent"
          />
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-700 mb-2 font-semibold max-w-2xl">
          Empowering businesses with seamless automation.
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-12 max-w-xl">
          Simpliflow helps you focus on what matters—by connecting your workflows and simplifying your accounting.
        </p>

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
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl border border-purple-100 p-8 h-full flex flex-col items-center text-center">
                      <FaUserTie className="text-purple-500 text-2xl sm:text-3xl mb-2 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200" />
                <h2 className="font-bold text-2xl mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                  Who are we?
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  A passionate team of developers, accountants, and business professionals dedicated to transforming
                  accounting and business management through intelligent automation.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-xl border border-pink-100 p-8 h-full flex flex-col items-center text-center">
                      <FaCogs className="text-pink-500 text-2xl sm:text-3xl mb-2 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-200" />
                <h2 className="font-bold text-2xl mb-4 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                  What do we do?
                </h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  Our platform automates accounting tasks, reconciliations, reporting, and business workflows—connecting
                  all your tools so your team can focus on growth, not grunt work.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-xl border border-red-100 p-8 h-full flex flex-col items-center text-center">
                      <FaShieldAlt className="text-red-400 text-2xl sm:text-3xl mb-2 group-hover:scale-125 group-hover:text-red-600 transition-transform duration-200" />
                <h2 className="font-bold text-2xl mb-4 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
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
              marqueeText="Automate your accounting ✦ Accelerate your business ✦ "
              speed={2}
              curveAmount={250}
              direction="right"
              interactive={true}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 font-bold text-4xl sm:text-6xl uppercase"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
