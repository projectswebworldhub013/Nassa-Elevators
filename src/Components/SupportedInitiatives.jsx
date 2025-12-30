import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLeaf, FaHandsHelping } from "react-icons/fa";

import mainImage from "../assets/images/about1.jpg"; // main image
import img1 from "../assets/images/one.webp";
import img2 from "../assets/images/two.webp";
import img3 from "../assets/images/three.webp";
import img4 from "../assets/images/four.webp";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function SupportedInitiatives() {
  return (
    <section className="relative bg-gradient-to-br from-[#f9f9f9] to-[#eef2ef] py-16 px-6 md:px-12 overflow-hidden">

      

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >

        {/* ================= LEFT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className=" rounded-3xl overflow-hidden shadow-xl border border-[#E3EFE7]"
        >
          <img
            src={mainImage}
            alt="Nassa Elevators CSR Initiatives"
            className="w-full hidden md:flex  h-[620px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0"></div>

          {/* TRUST BADGE */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg border-l-4 border-[#39B54A]">
            <p className="text-sm text-[#6B7280] italic">
              “Giving back responsibly, building sustainably.”
            </p>
            <p className="mt-1 text-sm font-semibold text-[#1F7A36]">
              — Nassa Elevators
            </p>
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
<div className="text-center lg:text-left relative">

  {/* Section Label */}
  <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
    <span className="w-10 h-[2px] bg-[#8EE6A1]" />
    <p className="text-[#39B54A] uppercase tracking-widest text-xs font-semibold">
      Supported Initiatives
    </p>
  </div>

  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-light leading-tight text-[#1F2933]">
    Responsibility Beyond
    <br />
    <span className="text-[#1F7A36] font-medium">
      Vertical Mobility
    </span>
  </h2>

  {/* Decorative Divider */}
  <div className="mt-5 flex items-center justify-center lg:justify-start gap-3">
    <span className="w-14 h-[2px] bg-[#39B54A]" />
    <span className="w-3 h-3 rounded-full bg-[#1F7A36]" />
    <span className="w-6 h-[2px] bg-[#8EE6A1]" />
  </div>

  {/* Content Card */}
  <div className="mt-8 bg-white/70 backdrop-blur-sm border border-[#E3EFE7] rounded-2xl p-6 md:p-8 shadow-sm max-w-xl mx-auto lg:mx-0">

    <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
      Corporate Social Responsibility and the principle of giving back to
      society are fundamental to{" "}
      <span className="font-semibold text-[#1F7A36]">
        Nassa Elevators’ culture and core values
      </span>
      . These values guide our approach toward inclusive growth and long-term
      sustainability.
    </p>

    {/* Highlight Points */}
    <div className="mt-6 space-y-4">

      <div className="flex items-start gap-3">
        <FaHandsHelping className="mt-1 text-[#39B54A]" />
        <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
          We actively support national CSR priorities including education,
          preventive healthcare, gender equality, environmental sustainability,
          and rural development through responsible business practices.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <FaLeaf className="mt-1 text-[#39B54A]" />
        <p className="text-[#6B7280] text-base md:text-lg leading-relaxed">
          Our commitment extends to maintaining safe workplaces, minimizing
          environmental impact, and delivering solutions that create positive
          social value.
        </p>
      </div>

    </div>
  </div>

  
</div>

      </motion.div>

      {/* ================= IMAGE GALLERY ================= */}
      <div className="relative mt-16 max-w-7xl mx-auto">

        <div className="mb-12 text-center flex flex-col items-center">
  {/* Top Line */}
  <div className="w-20 h-[2px] bg-[#8EE6A1] mb-3" />

  {/* Main Heading */}
  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1F7A36] leading-snug">
    Turning Purpose into Impact Through
    <span className="text-[#39B54A]"> Meaningful Action</span>
  </h3>

  {/* Subtitle */}
  <p className="mt-3 max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
    Our supported initiatives reflect a deep commitment to people, progress,
    and responsibility — translating values into real-world change.
  </p>

  {/* Bottom Decorative Lines */}
  <div className="mt-6 flex items-center gap-3">
    <span className="w-10 h-[2px] bg-[#39B54A]" />
    <span className="w-4 h-4 rounded-full bg-[#1F7A36]" />
    <span className="w-10 h-[2px] bg-[#39B54A]" />
  </div>
</div>


        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {[img1, img2, img3, img4].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-md border border-[#E3EFE7]"
            >
              <img
                src={img}
                alt={`Initiative ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {[img1, img2, img3, img4].map((img, index) => (
            <div
              key={index}
              className="min-w-[75%] snap-center rounded-2xl overflow-hidden shadow-md border border-[#E3EFE7]"
            >
              <img
                src={img}
                alt={`Initiative ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= CENTER STATEMENT ================= */}
      <div className="relative mt-14 text-center max-w-3xl mx-auto">
        <p className="text-lg md:text-xl font-light text-[#6B7280]">
          Sustainable growth begins with responsible actions.
        </p>
        <p className="text-lg md:text-xl font-light text-[#6B7280] mt-1">
          Technology with purpose. Progress with responsibility.
        </p>
        <p className="text-lg md:text-xl font-medium text-[#39B54A] mt-3">
          Elevating communities — not just buildings.
        </p>
      </div>

    </section>
  );
}
