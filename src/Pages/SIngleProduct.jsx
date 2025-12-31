import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

import { productsData } from "../data/productsData";
import CTASection from "../Components/CTASection";

/* ================= COLORS ================= */
const COLORS = {
  brand: "#39B54A",
  brandDark: "#1F7A36",
  brandLight: "#8EE6A1",
  brandHover: "#2FA84F",
  bgWhite: "#FFFFFF",
  bgAlt: "#F7FAF8",
  border: "#E3EFE7",
  textPrimary: "#1F2933",
  textMuted: "#6B7280",
};

/* ================= COMPONENT ================= */
const SingleProduct = () => {
  const { slug } = useParams();
  const product = productsData.find(
    (p) => p.path === `/products/${slug}`
  );

  if (!product) {
    return (
      <div className="text-center py-20 text-[#39B54A] font-semibold text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <section className="bg-[#FFFFFF] text-[#1F2933]">
      {/* ================= HERO ================= */}
      <div
        className="relative w-full h-[70vh] flex items-end"
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 p-8 md:p-16 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            {product.title}
          </h1>
          <p className="mt-2 text-[#E5E7EB] text-md md:text-lg leading-relaxed">
            {product.shortDesc}
          </p>
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 space-y-16">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold text-[#1F7A36] hover:text-[#2FA84F] transition"
        >
          <FaArrowLeft /> Back to Home
        </Link>

        {/* ================= ABOUT ================= */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F2933] mb-6">
            About {product.title}
          </h2>

          <p className="text-[#6B7280] text-md md:text-lg leading-relaxed max-w-5xl">
            {product.longDesc}
          </p>

          {/* Stats Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="flex items-start gap-4 bg-[#FFFFFF] border border-[#E3EFE7] p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#39B54A] transition"
              >
                <div className="text-[#39B54A] text-2xl">
                  {stat.icon}
                </div>
                <p className="font-medium text-[#1F2933]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= WHY CHOOSE ================= */}
        <div className="bg-gradient-to-r from-[#1F7A36] to-[#39B54A] text-white rounded-3xl p-12 shadow-xl">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose NASSA Elevators?
          </h2>

          <p className="mb-8 max-w-4xl leading-relaxed text-[#F7FAF8]">
            At NASSA Elevators, we focus on precision engineering,
            uncompromised safety, and elegant design. Every elevator
            is built to deliver long-lasting performance, energy
            efficiency, and superior ride comfort — making us a
            trusted choice for residential, commercial, and
            industrial projects.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Advanced Safety & Control Systems",
              "Energy Efficient Technology",
              "Custom Design & Cabin Finishes",
              "Reliable After-Sales Support",
              "Industry-Compliant Standards",
              "Expert Installation Team",
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

        {/* ================= CONTACT ================= */}
        <CTASection/>
      </div>
    </section>
  );
};

export default SingleProduct;
