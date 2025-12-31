import React from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
import modernizationData from "../data/modernizationData";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaArrowRight,
  FaChevronRight,
  FaHome,
} from "react-icons/fa";
import { motion } from "framer-motion";
import CTASection from "../Components/CTASection";

const SingleModernization = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const modernization = modernizationData.find(
    (item) => item.path.split("/").pop() === slug
  );

  if (!modernization) return <Navigate to="/" replace />;

  return (
    <>
    <section className="bg-[#F7FAF8]">

      {/* ================= HEADER ================= */}
      <div className="pt-12 pb-10 px-6">
  <div className="max-w-6xl mx-auto text-center">

    {/* BREADCRUMB */}
    <div className="flex items-center justify-center gap-2 text-sm text-[#6B7280] mb-5">
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-[#39B54A] transition"
      >
        <FaHome className="text-xs" />
        Home
      </Link>

      

      <FaChevronRight className="text-xs opacity-60" />

      <span className="text-[#1F2933] font-medium">
        {modernization.title}
      </span>
    </div>

    {/* HERO CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative flex flex-col items-center"
    >
      {/* TOP ACCENT LINE */}
      <div className="h-[2px] w-16 bg-[#39B54A] mb-4" />

      <h1 className="text-2xl md:text-4xl font-bold text-[#1F2933] leading-tight">
        {modernization.title}
      </h1>

      {/* CENTER DIVIDER */}
      <div className="mt-3 h-[1.5px] w-24 bg-gradient-to-r from-transparent via-[#39B54A] to-transparent" />

      <p className="mt-4 max-w-3xl text-sm md:text-base text-[#6B7280] leading-relaxed">
        {modernization.shortDescription}
      </p>
    </motion.div>

  </div>
</div>



      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-stretch">

  {/* IMAGE SECTION — FULL HEIGHT */}
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative h-[450px] w-full"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl shadow-lg">
      <img
        src={modernization.image}
        alt={modernization.title}
        className="h-full w-full object-cover"
      />
    </div>

    {/* SUBTLE BORDER */}
    <div className="absolute inset-0 rounded-2xl ring-1 ring-[#E3EFE7]" />
  </motion.div>

  {/* CONTENT SECTION — MATCHES IMAGE HEIGHT */}
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-5 h-full"
  >

    {/* HEADER */}
    <div>
      <span className="block text-xs font-semibold tracking-widest text-[#39B54A] uppercase mb-1">
        Modernization Scope
      </span>

      <h2 className="text-xl md:text-2xl font-bold text-[#1F2933]">
        Modernization Overview
      </h2>

      <div className="mt-2 h-[1.5px] w-20 bg-gradient-to-r from-[#39B54A] to-transparent" />
    </div>

    {/* ABOUT LIST — FLEXIBLE HEIGHT */}
    <div className="flex-1 bg-white border border-[#E3EFE7] rounded-xl divide-y divide-[#E3EFE7] overflow-hidden">
      {modernization.about.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 px-5 py-4 hover:bg-[#F7FAF8] transition"
        >
          {/* ICON */}
          <span className="text-[#39B54A] text-lg mt-[2px]">
            {item.icon}
          </span>

          {/* TEXT */}
          <p className="text-sm md:text-base text-[#1F2933] leading-relaxed">
            {item.text}
          </p>
        </div>
      ))}
    </div>

  </motion.div>
</div>

      {/* ================= ADV / DISADV ================= */}
      <div className="bg-white py-8">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">

    {/* ADVANTAGES */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#F7FAF8] rounded-2xl p-6 border border-[#E3EFE7]"
    >
      <h3 className="text-lg font-semibold text-[#1F2933] mb-4">
        Key Advantages
      </h3>

      <ul className="space-y-3">
        {modernization.advantages.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaCheckCircle className="text-[#39B54A] text-sm mt-[3px]" />
            <span className="text-sm text-[#4B5563] leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>

    {/* DISADVANTAGES */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="bg-[#F7FAF8] rounded-2xl p-6 border border-[#E3EFE7]"
    >
      <h3 className="text-lg font-semibold text-[#1F2933] mb-4">
        Considerations
      </h3>

      <ul className="space-y-3">
        {modernization.disadvantages.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <FaCheckCircle className="text-[#ff1100] text-sm mt-[3px]" />
            <span className="text-sm text-[#4B5563] leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>

  </div>
</div>

    </section>
    <CTASection/>
    </>
  );
};

export default SingleModernization;
