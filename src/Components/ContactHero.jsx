// src/components/ContactHero.jsx
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import bg from "../assets/images/about2.jpg"; // replace with your contact image

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

const ContactHero = () => {
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
          Let’s <span className="text-[#39B54A]">Connect</span> With You
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-lg md:text-xl leading-relaxed text-[#E8F5EC]">
          Whether you need expert guidance, technical support, or a customized
          elevator solution — our team is ready to assist you at every step.
        </p>

        {/* Info Strip */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs sm:text-sm uppercase tracking-wide text-white/90">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#39B54A]" />
            Quick Support
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelopeOpenText className="text-[#39B54A]" />
            Expert Assistance
          </span>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#39B54A]" />
            Nationwide Service
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Call Now */}
          <a
            href="tel:+917982091097"
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
            <FaPhoneAlt />
            Call Now
          </a>

          {/* Get Enquiry */}
          <a
            href="#enquiry-form"
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
            Get Enquiry
            <FaArrowRight />
          </a>

        </div>

      </div>
    </section>
  );
};

export default ContactHero;
