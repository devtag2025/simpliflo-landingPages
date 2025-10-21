"use client";


import CurvedLoop from "../CurvedLoop";
import TextType from "../TextType";
export default function AboutPage() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[var(--canvas-0)]"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Animated Gradient Headline */}
        <div className="mb-8">
          <TextType
            text="About Us"
            as="h2"
            typingSpeed={60}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent"
            showCursor={false}
          />
        </div>

        {/* About Content in Teal Outline Box */}
        <div className="w-full max-w-2xl mx-auto mb-12">
          <div className="border-2 border-[var(--teal-hero)] rounded-2xl bg-white/70 p-6 shadow-md">
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--ink-900)] mb-6">
              We are a team of passionate developers building plug and play automations that help owners get paid on time and keep accurate books with fewer clicks.
            </p>
            <p className="text-base sm:text-lg text-[var(--ink-800)] mb-4">
              Simpliflo ties it all together so you spend less time chasing and more time serving customers.
            </p>
            <p className="text-base sm:text-lg text-[var(--ink-800)] mb-4">
              <span className="font-semibold">UK and GBP only.</span>
            </p>
            <p className="text-base sm:text-lg text-[var(--ink-800)]">
              This platform will be continuously evolving, and we’re committed to introducing new features and innovations as we grow.
            </p>
          </div>
        </div>

        {/* Curved Loop Footer */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full ">
            <CurvedLoop
              marqueeText="Automate your accounting  ��� Accelerate your business  ��� "
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
