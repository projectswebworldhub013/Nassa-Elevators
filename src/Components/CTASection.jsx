import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaCogs,
  FaBuilding,
  FaCity,
  FaShieldAlt,
} from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="relative bg-[#FFFFFF] py-10 overflow-hidden">

      {/* Soft Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8EE6A1]/20 blur-[110px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#39B54A]/10 blur-[90px] rounded-full" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <IconBubble icon={<FaCogs />} className="top-14 left-[10%]" />
        <IconBubble icon={<FaBuilding />} className="top-24 right-[12%]" />
        <IconBubble icon={<FaCity />} className="bottom-20 left-[12%]" />
        <IconBubble icon={<FaShieldAlt />} className="bottom-24 right-[10%]" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semiabold text-[#1F2933] leading-tight">
          Let’s Elevate Your{" "}
          <span className="text-[#39B54A]">Project Together</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-[#6B7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          From residential towers to complex infrastructure projects, Nassa
          Elevators delivers safe, reliable, and future-ready vertical mobility
          solutions across India.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Call Now */}
          <a
            href="tel:+917982091097"
            className="
              flex items-center gap-3
              px-7 py-3
              rounded-full
              bg-[#1F7A36]
              text-white
              font-semibold
              shadow-md
              hover:bg-[#2FA84F]
              transition-all duration-300
            "
          >
            <FaPhoneAlt className="text-sm" />
            Call Now
          </a>

          {/* Get Enquiry */}
          <Link
            to="/contact"
            className="
              flex items-center gap-3
              px-7 py-3
              rounded-full
              border border-[#39B54A]
              text-[#1F7A36]
              font-semibold
              hover:bg-[#39B54A]
              hover:text-white
              transition-all duration-300
            "
          >
            <FaEnvelopeOpenText className="text-base" />
            Get Enquiry
          </Link>
        </div>

        {/* Trust Line */}
        <p className="mt-6 text-sm text-[#6B7280]">
          Trusted by builders, developers, and institutions for over{" "}
          <span className="font-semibold text-[#1F7A36]">30+ years</span>.
        </p>
      </div>
    </section>
  );
};

/* Floating Icon Bubble */
const IconBubble = ({ icon, className }) => (
  <div
    className={`
      absolute ${className}
      w-12 h-12
      rounded-full
      bg-white
      border border-[#E3EFE7]
      shadow-sm
      flex items-center justify-center
      text-[#39B54A]
      text-lg
    `}
  >
    {icon}
  </div>
);

export default CTASection;
