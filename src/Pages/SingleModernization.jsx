import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import modernizationData from "../data/modernizationData";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SingleModernization = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const modernization = modernizationData.find(
    (item) => item.path.split("/").pop() === slug
  );

  if (!modernization) return <Navigate to="/" replace />;

  return (
    <section className="bg-[#F7FAF8]">

      {/* ================= HEADER ================= */}
      <div className="bg-gradient-to-br from-[#1F7A36] to-[#39B54A] pt-12 pb-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            {modernization.title}
          </motion.h1>

          <p className="mt-6 text-[#E8F5EC] text-lg max-w-3xl mx-auto">
            {modernization.shortDescription}
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 grid lg:grid-cols-2 gap-16 items-start">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={modernization.image}
            alt={modernization.title}
            className="rounded-3xl shadow-xl w-full object-cover"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-[#E3EFE7]" />
        </motion.div>

        {/* CONTENT */}
        <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="flex flex-col gap-5"
>
  {/* SECTION HEADER */}
  <div>
    <span className="block text-xs font-semibold tracking-widest text-[#39B54A] uppercase mb-1">
      Modernization Scope
    </span>

    <h2 className="text-xl md:text-2xl font-bold text-[#1F2933]">
      Modernization Overview
    </h2>

    <div className="mt-2 h-[1.5px] w-20 bg-gradient-to-r from-[#39B54A] to-transparent" />
  </div>

  {/* ABOUT LIST – SINGLE STRUCTURED BLOCK */}
  <div className="bg-white border border-[#E3EFE7] rounded-xl divide-y divide-[#E3EFE7]">
    {modernization.about.map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-5 px-5 py-4 hover:bg-[#F7FAF8] transition"
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
  );
};

export default SingleModernization;
