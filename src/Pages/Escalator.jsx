import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaIndustry,
  FaLeaf,
  FaCogs,
} from "react-icons/fa";

import CTASection from "../Components/CTASection";

/* ================= ESCALATOR IMAGE ================= */
import escalatorImage from "../assets/images/escalator.jpg";

/* ================= COMPONENT ================= */
const Escalator = () => {
  return (
    <section className="bg-[#FFFFFF] text-[#1F2933]">

      {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[70vh] flex items-end"
        style={{
          backgroundImage: `url(${escalatorImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 p-8 md:p-16 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            Escalators & Autowalks
          </h1>

          <p className="mt-3 text-[#E5E7EB] text-md md:text-lg leading-relaxed">
            Advanced escalator and autowalk solutions engineered for
            continuous movement, high safety, and energy-efficient
            performance across commercial and public spaces.
          </p>
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-16">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold
                     text-[#1F7A36] hover:text-[#2FA84F] transition"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* ================= OVERVIEW ================= */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Escalator & Autowalk Solutions by NASSA
          </h2>

          <div className="space-y-5 max-w-5xl text-[#6B7280]
                          text-md md:text-lg leading-relaxed">
            <p>
              NASSA Elevators is a leading supplier of Escalators and
              Autowalks designed for both indoor and outdoor applications.
              Every system is equipped with the latest technologies that
              enable high power savings, low noise operation, and best-in-
              class safety features.
            </p>

            <p>
              Escalators ensure continuous movement of commuters between
              floors without any waiting time, making them ideal for
              shopping malls, hospitals, airports, metro stations, and
              commercial complexes.
            </p>

            <p>
              Autowalks are widely used in large transit areas such as
              airports and railway stations, allowing passengers to travel
              long distances effortlessly while carrying luggage, trolleys,
              or shopping carts.
            </p>

            <p>
              An escalator is a power-driven, continuously moving stairway
              designed to transport passengers efficiently over short
              vertical distances. They are globally used where elevators
              are impractical due to heavy footfall and time constraints.
            </p>
          </div>

          {/* ================= STATS ================= */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaBolt />, label: "High Power Saving Technology" },
              { icon: <FaShieldAlt />, label: "Advanced Safety & Sensors" },
              { icon: <FaUsers />, label: "Ideal for Heavy Footfall Areas" },
              { icon: <FaIndustry />, label: "Indoor & Outdoor Applications" },
              { icon: <FaLeaf />, label: "Low Noise & Eco-Friendly Design" },
              { icon: <FaCogs />, label: "Long Product Life & Durability" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="flex items-start gap-4 bg-white
                           border border-[#E3EFE7]
                           p-6 rounded-2xl shadow-sm
                           hover:shadow-xl hover:border-[#39B54A] transition"
              >
                <div className="text-[#39B54A] text-2xl">
                  {item.icon}
                </div>
                <p className="font-medium text-[#1F2933]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= WHY CHOOSE ================= */}
        <div className="bg-gradient-to-r from-[#1F7A36] to-[#39B54A]
                        text-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose NASSA Escalators?
          </h2>

          <p className="mb-8 max-w-4xl leading-relaxed text-[#F7FAF8]">
            Our escalators and autowalks are engineered to deliver
            uninterrupted passenger movement with maximum safety,
            durability, and operational efficiency. Designed to meet
            international standards, NASSA solutions ensure long-term
            reliability even in the most demanding environments.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Continuous & Smooth Passenger Flow",
              "Weatherproof Options for Outdoor Use",
              "High Load Capacity & Stability",
              "Minimal Maintenance & Downtime",
              "Smart Energy Saving Modes",
              "Expert Installation & Support Team",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-[#EAFBF0]"
              >
                <FaCheckCircle className="text-[#8EE6A1]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= CTA ================= */}
        <CTASection />
      </div>
    </section>
  );
};

export default Escalator;
