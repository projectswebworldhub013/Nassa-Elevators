import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import servicesData from "../data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelopeOpenText } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaCheckCircle,
  FaQuestionCircle,
} from "react-icons/fa";
const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const service = servicesData.find(
    (item) => item.path.split("/").pop() === serviceSlug
  );

  if (!service) return <Navigate to="/" replace />;

  return (
    <section className="bg-[#F7FAF8]">
      {/* ================= HEADER ================= */}
      <div className="relative bg-gradient-to-r from-[#1F7A36] to-[#39B54A] py-14">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          {/* Decorative lines */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="h-[2px] w-16 bg-white/40"></span>
            <span className="h-3 w-3 rounded-full bg-white"></span>
            <span className="h-[2px] w-16 bg-white/40"></span>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            {service.title}
          </h1>

          <p className="mt-2 max-w-3xl mx-auto text-base md:text-lg text-[#E3EFE7]">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-12 space-y-24">

  {/* ================= ROW 1 : IMAGE + OVERVIEW ================= */}
  <div className="grid lg:grid-cols-2 gap-16 items-center">
    
    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-[420px] object-cover shadow-xl"
      />
      <div className="absolute inset-0 ring-1 ring-[#E3EFE7]" />
    </motion.div>

    {/* OVERVIEW */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-[#E3EFE7] text-[#1F7A36]">
        Service Overview
      </span>

      <h2 className="text-2xl md:text-3xl font-bold text-[#1F2933] mb-6">
        Engineered for Safety, Reliability & Performance
      </h2>

      <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
        {service.longDescription}
      </p>
    </motion.div>

  </div>

 {/* ================= ROW 2 : HIGHLIGHTS + TRUST (ENHANCED) ================= */}
<div className="grid lg:grid-cols-2 gap-6 items-stretch">

  {/* ================= LEFT : KEY HIGHLIGHTS ================= */}
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="relative bg-white border border-[#E3EFE7]  p-8 md:p-10 shadow-sm flex flex-col"
  >
    {/* Header */}
    <div className="mb-8">
      <h3 className="text-xl md:text-2xl font-semibold text-[#1F2933]">
        Key Service Highlights
      </h3>
      <p className="mt-2 text-sm text-[#6B7280] max-w-md">
        Carefully engineered features that ensure reliability, safety,
        and long-term performance.
      </p>
    </div>

    {/* Highlights Grid */}
    <div className="grid sm:grid-cols-2 gap-5 flex-1">
      {service.quickPoints.map((point, index) => (
        <div
          key={index}
          className="group relative flex gap-4 items-start p-5 rounded-2xl
                     bg-gradient-to-br from-[#F7FAF8] to-white
                     border border-[#E3EFE7]
                     hover:shadow-md hover:-translate-y-[2px]
                     transition-all duration-300"
        >
          {/* Icon */}
          <span className="flex-shrink-0 h-10 w-10 rounded-xl
                           bg-[#E3EFE7] text-[#1F7A36]
                           flex items-center justify-center text-lg
                           group-hover:bg-[#39B54A] group-hover:text-white
                           transition">
            {point.icon}
          </span>

          {/* Text */}
          <span className="text-[#1F2933] font-medium leading-snug">
            {point.label}
          </span>
        </div>
      ))}
    </div>

  </motion.div>

  {/* ================= RIGHT : TRUST + STATS + CTA ================= */}
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: 0.08 }}
    className="relative bg-gradient-to-br from-[#1F7A36] to-[#39B54A]
                p-8 md:p-10 text-white shadow-xl
               flex flex-col justify-between"
  >
    {/* Header */}
    <div>
      <h3 className="text-xl md:text-2xl font-semibold mb-3">
        Why Choose Nassa Elevators?
      </h3>
      <p className="text-white/85 text-sm md:text-base max-w-lg">
        A trusted partner delivering precision engineering, safety-driven
        execution, and dependable vertical mobility solutions.
      </p>
    </div>

    {/* Trust Points */}
    <ul className="mt-4 space-y-4">
      {[
        "Proven engineering & project expertise",
        "Strict safety, quality & compliance standards",
        "Reduced downtime & optimized lifecycle cost",
        "Trusted by commercial & infrastructure leaders",
      ].map((item, idx) => (
        <li key={idx} className="flex gap-4 items-start">
          <FaCheckCircle className="text-white/90 mt-1" />
          <span className="text-white/90 leading-relaxed text-sm md:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>

    {/* STATS */}
    <div className="grid grid-cols-3 gap-4 mt-5">
      {[
        { value: "40+", label: "Years Experience" },
        { value: "500+", label: "Installations" },
        { value: "24×7", label: "Support" },
      ].map((stat, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-sm rounded-2xl py-4 text-center border border-white/15"
        >
          <div className="text-xxl font-bold">{stat.value}</div>
          <div className="text-xs text-white/80 mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>

    {/* CTA BAR */}
    <div className="mt-5 flex flex-col sm:flex-row gap-4">
      {/* CALL NOW */}
      <a
        href="tel:+917982091097"
        className="flex-1 inline-flex items-center justify-center gap-3
                   bg-white text-[#1F7A36]
                   font-semibold px-2 py-3 rounded-xl
                   hover:bg-[#F7FAF8] transition shadow-md"
      >
        <FaPhoneAlt />
        Call Now
      </a>

      {/* GET ENQUIRY */}
      <Link
        to="/contact"
        className="flex-1 inline-flex items-center justify-center gap-3
                   bg-[#1F2933] text-white
                   font-semibold px-2 py-3 rounded-xl
                   hover:bg-[#111827] transition shadow-md"
      >
        <FaEnvelopeOpenText />
        Get Enquiry
      </Link>
    </div>
  </motion.div>

</div>
{/* ================= END ROW 2 ================= */}

</div>


      {/* ================= FAQ SECTION ================= */}
<div className="relative bg-[#f5f5f5] py-16 overflow-hidden">

  {/* BACKGROUND GRID LINES */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="gridLines"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 80 0 L 0 0 0 80"
          fill="none"
          stroke="#E3EFE7"
          strokeWidth="2"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#gridLines)" />
  </svg>

  <div className="relative max-w-6xl mx-auto px-6">

    {/* HEADING */}
    <div className="text-center mb-8">

      {/* TOP DIVIDER */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <span className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#39B54A] to-transparent"></span>
        <FaQuestionCircle className="text-[#39B54A] text-xl" />
        <span className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#39B54A] to-transparent"></span>
      </div>

      <h2 className="text-3xl md:text-5xl font-semibold text-[#1F7A36] leading-tight max-w-4xl mx-auto">
        “Everything You Should Know About Our Service Excellence”
      </h2>

      <p className="mt-6 text-[#6B7280] max-w-3xl mx-auto text-base md:text-lg">
        Clear, structured answers designed to help you make confident and
        informed decisions for your vertical mobility needs.
      </p>

    </div>

    {/* FAQ LIST */}
    <div className="space-y-6">
      {service.faqs.map((faq, index) => {
        const isOpen = openFaq === index;

        return (
          <motion.div
            key={index}
            layout
            transition={{ layout: { duration: 0.45, ease: "easeInOut" } }}
            className="bg-white border border-[#E3EFE7] rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {/* QUESTION */}
            <button
              onClick={() => setOpenFaq(isOpen ? null : index)}
              className="cursor-pointer w-full flex justify-between items-center p-4 text-left"
            >
              <span className="text-[#1F2933] font-semibold text-base md:text-lg">
                {faq.question}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#39B54A]"
              >
                <FaChevronDown />
              </motion.span>
            </button>

            {/* ANSWER */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="px-6 md:px-7 pb-7 text-[#6B7280] leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>

  </div>
</div>
{/* ================= END FAQ SECTION ================= */}

    </section>
  );
};

export default ServiceDetail;
