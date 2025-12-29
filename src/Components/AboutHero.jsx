// src/components/OverviewHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/about-hero.avif";

const COLORS = {
  primary: "#39B54A",       // Nassa Green
  dark: "#1F7A36",          // Deep Nassa Green
  soft: "#8EE6A1",          // Soft Green
  hover: "#2FA84F",         // Emerald Green
  textPrimary: "#1F2933",   // Charcoal Black
  textSecondary: "#6B7280", // Soft Gray
  light: "#FFFFFF",         // Pure White
  border: "#E3EFE7",        // Light Green Gray
  overlay: "#00000066",
  shadow: "#00000033",
};

const OverviewHero = () => {
  return (
    <section
      className="relative h-[70vh] w-full bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/50" />

      {/* Content */}
      <div className="z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl">
        
        {/* Heading */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-snug"
          style={{ color: COLORS.light }}
        >
          Overview &{" "}
          <span style={{ color: COLORS.primary }}>
            Corporate Culture
          </span>
        </h1>

        {/* Sub Text */}
        <p
          className="mt-4 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{ color: COLORS.soft }}
        >
          Since 1984, Nassa Elevators has grown into a trusted leader in vertical
          mobility solutions by fostering a culture built on integrity, safety,
          innovation, and respect for people. Our corporate culture drives every
          decision — from engineering excellence to long-term partnerships.
        </p>

        {/* Feature Highlights */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 text-sm">
          <div className="flex items-center gap-2">
            <FaUsers className="text-xl" style={{ color: COLORS.primary }} />
            <span className="font-medium text-white">
              People-First Culture
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-xl" style={{ color: COLORS.primary }} />
            <span className="font-medium text-white">
              Ethics, Safety & Responsibility
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/about/insights"
            className="px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-md flex items-center gap-2 transition"
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
            Explore Our Values <FaArrowRight />
          </Link>

          <Link
            to="/about/management-address"
            className="px-6 py-3 text-sm sm:text-base font-semibold rounded-lg shadow-md flex items-center gap-2 transition border"
            style={{
              borderColor: COLORS.light,
              color: COLORS.light,
              boxShadow: `0 4px 6px ${COLORS.shadow}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.light;
              e.currentTarget.style.color = COLORS.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = COLORS.light;
            }}
          >
            Leadership Message <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OverviewHero;
