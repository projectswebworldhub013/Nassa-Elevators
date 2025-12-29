// src/components/MilestonesSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaCogs,
  FaIndustry,
  FaLightbulb,
  FaAward,
  FaChartLine,
  FaBuilding,
  FaCity,
} from "react-icons/fa";

const milestones = [
  {
    icon: <FaIndustry />,
    title: "Early Industry Pioneers",
    description:
      "Among the first in India to adopt advanced elevator manufacturing practices, setting new benchmarks in quality, safety, and engineering reliability.",
  },
  {
    icon: <FaCogs />,
    title: "Advanced Engineering Systems",
    description:
      "Modern production processes, precision engineering, and intelligent control systems form the backbone of every Nassa Elevator.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation-Led Culture",
    description:
      "Creativity drives every milestone — from smarter designs to energy-efficient, future-ready vertical mobility solutions.",
  },
  {
    icon: <FaAward />,
    title: "Multiple Industry Firsts",
    description:
      "A legacy built on innovation, with several industry-first introductions that reshaped elevator technology in India.",
  },
  {
    icon: <FaBuilding />,
    title: "Pan-India Trust",
    description:
      "Trusted across residential, commercial, institutional, and infrastructure projects for consistent performance and safety.",
  },
  {
    icon: <FaChartLine />,
    title: "Sustained Leadership",
    description:
      "Decades of steady growth and technical excellence have positioned Nassa Elevators as a respected industry leader.",
  },
  
];

const stats = [
  { icon: <FaRocket />, value: "40+", label: "Years of Excellence" },
  { icon: <FaBuilding />, value: "10,000+", label: "Installations" },
  { icon: <FaCity />, value: "250+", label: "Cities Served" },
  { icon: <FaAward />, value: "Industry Firsts", label: "Innovation Legacy" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const MilestonesSection = () => {
  return (
    <section className="relative bg-[#F7FAF8] py-16 px-4 md:px-10 overflow-hidden">

      {/* Subtle Divider Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E3EFE7] to-transparent" />
        <div className="absolute bottom-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E3EFE7] to-transparent" />
      </div>

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative max-w-6xl mx-auto text-center mb-12"
      >
        <p className="text-[#39B54A] uppercase tracking-widest text-xs font-semibold mb-3">
          Our Milestones
        </p>

        <h2 className="text-2xl md:text-4xl font-light text-[#1F2933] leading-snug">
          A Legacy of{" "}
          <span className="text-[#1F7A36] font-medium">
            Innovation & Leadership
          </span>
        </h2>

        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-[#8EE6A1]" />
          <span className="h-2 w-2 rounded-full bg-[#39B54A]" />
          <span className="h-px w-12 bg-[#8EE6A1]" />
        </div>
      </motion.div>

      {/* Stats */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white border border-[#E3EFE7] rounded-xl px-4 py-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-center text-2xl text-[#39B54A] mb-2">
              {stat.icon}
            </div>
            <p className="text-xl font-semibold text-[#1F7A36]">
              {stat.value}
            </p>
            <p className="mt-1 text-xs md:text-sm text-[#6B7280]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Milestones Cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {milestones.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group relative bg-white border border-[#E3EFE7] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >

            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F7FAF8] border border-[#E3EFE7] text-[#39B54A] text-xl mb-4 group-hover:scale-105 transition-transform">
              {item.icon}
            </div>

            <h3 className="text-base md:text-lg font-semibold text-[#1F2933] mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-[#6B7280] leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative mt-14 max-w-3xl mx-auto text-center"
      >
        <FaRocket className="mx-auto text-3xl text-[#39B54A] mb-4" />
        <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
          Every milestone reflects our commitment to innovation, safety, and
          excellence in vertical mobility.
        </p>
        <p className="mt-2 text-base md:text-lg font-medium text-[#1F7A36]">
          Nassa Elevators — Elevating India with Innovation.
        </p>
      </motion.div>

    </section>
  );
};

export default MilestonesSection;
