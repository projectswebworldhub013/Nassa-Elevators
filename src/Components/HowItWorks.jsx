// src/components/HowItWorks.jsx
import React from "react";
import {
  FaDraftingCompass,
  FaTools,
  FaCubes,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Consultation & Intelligent Design",
    description:
      "We begin by understanding your building architecture, traffic flow, and safety requirements to engineer a lift solution that is efficient, compliant, and future-ready.",
    extra:
      "Every design balances performance, safety, and long-term operational value.",
    icon: <FaDraftingCompass className="text-4xl text-[#39B54A]" />,
  },
  {
    id: 2,
    title: "Precision Manufacturing",
    description:
      "Using high-grade components and advanced manufacturing practices, our elevators are built to deliver smooth operation, durability, and reliability.",
    extra:
      "Strict quality checks ensure global safety and engineering standards.",
    icon: <FaTools className="text-4xl text-[#39B54A]" />,
  },
  {
    id: 3,
    title: "Professional Installation",
    description:
      "Our certified technicians carry out seamless installation with minimal disruption, ensuring flawless alignment, calibration, and operational safety.",
    extra:
      "Installed to perform consistently in residential, commercial, and industrial spaces.",
    icon: <FaCubes className="text-4xl text-[#39B54A]" />,
  },
  {
    id: 4,
    title: "Maintenance & Lifecycle Support",
    description:
      "We provide proactive maintenance, inspections, and responsive support to keep your elevators operating safely and efficiently year after year.",
    extra:
      "Reliable service that protects your investment long-term.",
    icon: <FaCheckCircle className="text-4xl text-[#39B54A]" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-br from-[#f9f9f9] to-[#eef2ef] relative py-20 overflow-hidden shadow-black shadow-xl">
      

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-xs font-semibold text-[#39B54A]">
            Our Process
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-semibold text-[#1F7A36]">
            How Nassa Elevators Works
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-[#64748B] text-sm md:text-lg">
            Since 1984, Nassa Elevators has followed a proven, structured approach
            to deliver safe, efficient, and high-performance vertical
            transportation systems across diverse projects.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="group relative bg-white border border-[#E6F4EA] rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white border-2 border-[#39B54A] text-[#39B54A] font-semibold text-sm group-hover:bg-[#39B54A] group-hover:text-white transition shadow-md">
                  {index + 1}
                </div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mt-6 mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-center font-semibold text-base md:text-lg text-[#1E293B] group-hover:text-[#1F7A36] transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-center text-sm text-[#64748B] leading-relaxed">
                {step.description}
              </p>

              {/* Extra */}
              <p className="mt-4 text-center text-xs font-medium text-[#39B54A]">
                {step.extra}
              </p>

              {/* Button */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Link to="/contact">
                  <button className="w-full rounded-xl bg-[#1F7A36] text-white text-sm py-2 hover:bg-[#16632C] transition shadow-md">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <p className="text-base md:text-lg text-[#1E293B] font-medium mb-6">
            Nassa Elevators delivers{" "}
            <span className="text-[#1F7A36] font-semibold">
              safe, reliable, and energy-efficient elevator solutions
            </span>{" "}
            designed to elevate modern living and sustainable urban
            infrastructure.
          </p>

          <Link to="/contact">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#39B54A] to-[#1F7A36] text-white text-sm font-semibold hover:scale-105 transition shadow-lg">
              Talk to Our Experts
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
