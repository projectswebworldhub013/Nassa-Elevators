// src/components/SupportedHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaHandsHelping, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/about2.jpg";

const COLORS = {
  primary: "#39B54A",
  dark: "#1F7A36",
  soft: "#8EE6A1",
  hover: "#2FA84F",
  textPrimary: "#1F2933",
  textSecondary: "#6B7280",
  light: "#FFFFFF",
  border: "#E3EFE7",
  overlay: "#00000066",
  shadow: "#00000033",
};

const SupportedHero = () => {
  return (
    <section
      className="
        relative h-[85vh] w-full
        flex items-center justify-center
        bg-center bg-cover
        bg-fixed
        sm:bg-scroll
      "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl">

        {/* Decorative Lines */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-16 bg-[#8EE6A1]" />
          <span className="h-2 w-2 rounded-full bg-[#39B54A]" />
          <div className="h-px w-16 bg-[#8EE6A1]" />
        </div>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-snug"
          style={{ color: COLORS.light }}
        >
          Supported{" "}
          <span style={{ color: COLORS.primary }}>
            Initiative
          </span>
        </h1>

        {/* Sub Text */}
        <p
          className="mt-5 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{ color: COLORS.soft }}
        >
          At Nassa Elevators, corporate social responsibility is not an
          obligation—it is a commitment. Guided by our core values, we actively
          support initiatives that strengthen communities, protect the
          environment, and create long-term social and economic impact.
        </p>

        {/* Value Strip */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs sm:text-sm tracking-wide uppercase text-white/90">
          {["People", "Planet", "Responsibility"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#39B54A] rounded-full" />
              {item}
            </span>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm">
          <div className="flex items-center gap-2">
            <FaHandsHelping
              className="text-xl"
              style={{ color: COLORS.primary }}
            />
            <span className="font-medium text-white">
              Community Development
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaLeaf
              className="text-xl"
              style={{ color: COLORS.primary }}
            />
            <span className="font-medium text-white">
              Environmental Sustainability
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/about/insights"
            className="
              px-7 py-3
              text-sm sm:text-base
              font-semibold
              rounded-full
              shadow-md
              flex items-center gap-2
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
            Our Impact in Action <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SupportedHero;
