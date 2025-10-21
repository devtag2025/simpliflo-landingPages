import React from "react";

// List of industries/services
const services = [
  "Traders",
  "Small businesses",
  "Home service providers",
  "Health & beauty professionals",
  "Professional service firms",
  "Coaches & tutors",
  "Creative studios & agencies",
  "Event venues & hospitality",
  "Ecommerce (deposits & balances)",
  "Repair & field teams",
];

export const WhoWeServe: React.FC = () => (
  <section className="py-14 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
  <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[var(--teal-hero)] to-[var(--cyan-pop)] bg-clip-text text-transparent">Who we serve</h2>
    <div className="mx-auto w-fit">
      <div className="flex flex-wrap gap-4">
        {services.map((service) => (
          <span
            key={service}
            className="text-[rgb(51,71,103)] px-4 py-2 rounded-full shadow-sm text-base font-normal border border-[var(--canvas-100)] hover:bg-[var(--canvas-50)] hover:text-[var(--teal-hero)] transition duration-200 cursor-pointer"
            style={{
              boxShadow: "0px 2px 8px 0px rgba(0,25,67,0.06)",
            }}
          >
            {service}
          </span>
        ))}
      </div>
    </div>
  </section>
);