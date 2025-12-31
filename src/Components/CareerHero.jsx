// src/components/CareerHero.jsx
import React from "react";
import {
  FaBriefcase,
  FaUsers,
  FaGraduationCap,
  FaArrowRight,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import bg from "../assets/images/career-hero.avif"; // replace with career-specific image if available

const COLORS = {
  primary: "#39B54A",
  dark: "#1F7A36",
  soft: "#8EE6A1",
  hover: "#2FA84F",
  textPrimary: "#1F2933",
  textSecondary: "#6B7280",
  light: "#FFFFFF",
  border: "#E3EFE7",
  shadow: "#00000033",
};

const CareerHero = () => {
  return (
    <section
      className="
        relative h-[80vh] w-full
        flex items-center justify-center
        bg-center bg-cover
        bg-fixed sm:bg-scroll
      "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">

        {/* Decorative Accent */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <span className="h-px w-14 bg-[#8EE6A1]" />
          <span className="h-2 w-2 rounded-full bg-[#39B54A]" />
          <span className="h-px w-14 bg-[#8EE6A1]" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white">
          Build Your <span className="text-[#39B54A]">Career</span> With Us
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-lg md:text-xl leading-relaxed text-[#E8F5EC]">
          Join a team driven by innovation, engineering excellence, and growth.
          At NASSA Elevators, we empower talent to build meaningful careers and
          shape the future of vertical mobility.
        </p>

        {/* Info Strip */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs sm:text-sm uppercase tracking-wide text-white/90">
          <span className="flex items-center gap-2">
            <FaBriefcase className="text-[#39B54A]" />
            Career Growth
          </span>
          <span className="flex items-center gap-2">
            <FaUsers className="text-[#39B54A]" />
            Supportive Team
          </span>
          <span className="flex items-center gap-2">
            <FaGraduationCap className="text-[#39B54A]" />
            Learning Culture
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* View Openings */}
          <a
            href="#open-positions"
            className="
              inline-flex items-center gap-3
              px-7 py-3
              rounded-full
              text-sm sm:text-base
              font-semibold
              shadow-md
              transition-all duration-300
            "
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.light,
              boxShadow: `0 4px 6px ${COLORS.shadow}`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.hover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = COLORS.primary)
            }
          >
            <FaBriefcase />
            View Openings
          </a>

          {/* Apply Now */}
          <a
            href="#apply-now"
            className="
              inline-flex items-center gap-3
              px-7 py-3
              rounded-full
              text-sm sm:text-base
              font-semibold
              border
              transition-all duration-300
            "
            style={{
              borderColor: COLORS.primary,
              color: COLORS.primary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primary;
              e.currentTarget.style.color = COLORS.light;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = COLORS.primary;
            }}
          >
            <FaEnvelopeOpenText />
            Apply Now
            <FaArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
};

export default CareerHero;
