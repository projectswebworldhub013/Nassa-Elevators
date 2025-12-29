// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Building } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

import t1 from "../assets/images/hero/h1.avif";
import t2 from "../assets/images/hero/h1.avif";
import t3 from "../assets/images/hero/h1.avif";
import t4 from "../assets/images/hero/h1.avif";

const slides = [
  {
    image: t1,
    tagline: "Precision in Every Lift",
  },
  {
    image: t2,
    tagline: "Engineering Vertical Excellence",
  },
  {
    image: t3,
    tagline: "Safe • Efficient • Reliable Elevators",
  },
  {
    image: t4,
    tagline: "Innovation That Moves You Up",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(true);
      }, 100);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[95vh] overflow-hidden flex items-center justify-center text-center">
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={slides[current].image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundAttachment: "fixed",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-black/25 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-6 md:px-10 max-w-4xl mx-auto">
        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-widest text-[#8EE6A1] text-sm md:text-base font-semibold mb-2"
        >
          Trusted Since 1984
        </motion.p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight text-white drop-shadow-md">
          Nassa Elevators
        </h1>

        {/* Type Animation */}
        <div className="h-[40px] md:h-[50px] flex items-center justify-center mb-6">
          <TypeAnimation
            key={current}
            sequence={[
              slides[current].tagline,
              5000,
            ]}
            speed={50}
            deletionSpeed={60}
            repeat={Infinity}
            className="text-[#39B54A] text-xl md:text-2xl font-semibold tracking-wide"
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed mb-8"
        >
          At <span className="font-semibold text-white">Nassa Elevators</span>, we design and deliver
          advanced vertical transportation solutions that combine safety, efficiency, and
          aesthetics. With over four decades of industry expertise, we are committed to redefining
          elevator experiences and supporting sustainable urban development.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#39B54A] hover:bg-[#2FA84F] text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300"
            >
              <PhoneCall size={18} /> Contact Us
            </motion.button>
          </Link>

          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-[#39B54A] hover:bg-[#39B54A] hover:text-white text-white font-semibold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300"
            >
              <Building size={18} /> Learn More
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
