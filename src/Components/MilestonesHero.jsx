// src/components/MilestonesHero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaChartLine, FaIndustry, FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/about3.jpg";

const COLORS = {
  primary: "#39B54A",
  dark: "#1F7A36",
  soft: "#8EE6A1",
  hover: "#2FA84F",
  light: "#FFFFFF",
  shadow: "#00000033",
};

const MilestonesHero = () => {
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
      <div className="absolute inset-0 z-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl">

        {/* Decorative Lines */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-16 bg-[#8EE6A1]" />
          <span className="h-2 w-2 rounded-full bg-[#39B54A]" />
          <div className="h-px w-16 bg-[#8EE6A1]" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-snug text-white">
          Our{" "}
          <span className="text-[#39B54A]">
            Milestones
          </span>
        </h1>

        {/* Sub Text */}
        <p className="mt-5 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-[#8EE6A1]">
          From our inception to becoming a trusted name in vertical mobility,
          Nassa Elevators’ journey is defined by innovation, reliability, and
          continuous progress. Each milestone represents our commitment to
          engineering excellence and long-term partnerships.
        </p>

        {/* Timeline Values */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs sm:text-sm tracking-wide uppercase text-white/90">
          {["Legacy", "Growth", "Innovation"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#39B54A] rounded-full" />
              {item}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm">
          <div className="flex items-center gap-2 text-white">
            <FaIndustry className="text-xl text-[#39B54A]" />
            <span className="font-medium">
              Decades of Engineering Expertise
            </span>
          </div>

          <div className="flex items-center gap-2 text-white">
            <FaChartLine className="text-xl text-[#39B54A]" />
            <span className="font-medium">
              Consistent Growth & Innovation
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/about/journey"
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
            Explore Our Journey <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MilestonesHero;
