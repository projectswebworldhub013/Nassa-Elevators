import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import mainImage from "../assets/images/about1.jpg"; // main image
import img1 from "../assets/images/s5.jpg";
import img2 from "../assets/images/s5.jpg";
import img3 from "../assets/images/s5.jpg";
import img4 from "../assets/images/s5.jpg";

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
    <section className="relative bg-[#F7FAF8] py-16 px-6 md:px-12 overflow-hidden">

      {/* ================= SUBTLE GRID BACKGROUND ================= */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.25]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="42" height="42" patternUnits="userSpaceOnUse">
            <path
              d="M 42 0 L 0 0 0 42"
              fill="none"
              stroke="#E3EFE7"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
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
          className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E3EFE7]"
        >
          <img
            src={mainImage}
            alt="Nassa Elevators CSR Initiatives"
            className="w-full h-[520px] object-cover"
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
        <div className="text-center lg:text-left">

          <p className="text-[#39B54A] uppercase tracking-widest text-sm mb-4 font-semibold">
            Supported Initiatives
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight text-[#1F2933]">
            Responsibility Beyond
            <br />
            <span className="text-[#1F7A36] font-medium">
              Vertical Mobility
            </span>
          </h2>

          <p className="mt-6 text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Corporate Social Responsibility and the principle of giving back to
            society are fundamental to{" "}
            <span className="font-semibold text-[#1F7A36]">
              Nassa Elevators’ culture and core values
            </span>
            . These values reflect our commitment to social and environmental
            sustainability for our clients, employees, and communities.
          </p>

          <p className="mt-4 text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            In India, organizations are encouraged to contribute toward key CSR
            initiatives such as education, preventive healthcare, gender
            equality, environmental sustainability, and rural development.
            Nassa Elevators actively supports these initiatives through
            responsible business practices.
          </p>

          <p className="mt-4 text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            We are committed to maintaining a safe and healthy workplace,
            operating in an environmentally responsible manner, and delivering
            products and services that contribute positively to society.
          </p>

          {/* CTA */}
          <div className="mt-7 flex justify-center lg:justify-start">
            <Link
              to="/contact"
              className="
                px-10 py-3 rounded-full text-sm md:text-base font-semibold
                text-white bg-[#39B54A]
                hover:bg-[#2FA84F]
                transition-all duration-300
              "
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ================= IMAGE GALLERY ================= */}
      <div className="relative mt-16 max-w-7xl mx-auto">

        <h3 className="text-center text-2xl md:text-3xl font-medium text-[#1F7A36] mb-8">
          Our Commitment in Action
        </h3>

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
