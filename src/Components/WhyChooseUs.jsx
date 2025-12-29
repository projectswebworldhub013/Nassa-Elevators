import React from "react";
import {
  FaUsersCog,
  FaRupeeSign,
  FaHandsHelping,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full py-14 px-4 md:px-12 overflow-hidden bg-[#F7FAF8]">

      {/* CHESS GRID SVG BACKGROUND */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0,255,0)"
              strokeWidth="2.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* SOFT DECORATIVE BLOBS */}
      <svg
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] opacity-5"
        viewBox="0 0 200 200"
      >
        <path
          fill="#39B54A"
          d="M45.7,-62.2C59.2,-54.5,69.9,-39.7,72.8,-24.2C75.6,-8.7,70.6,7.5,63.2,22.3C55.8,37.1,46,50.5,32.8,57.9C19.6,65.3,2.9,66.7,-13.3,63.4C-29.5,60.1,-45.1,52.1,-54.6,39.2C-64.1,26.3,-67.6,8.4,-63.9,-6.4C-60.2,-21.2,-49.3,-33,-37,-42.1C-24.6,-51.2,-10.8,-57.6,3.9,-62.8C18.7,-68,37.4,-72,45.7,-62.2Z"
          transform="translate(100 100)"
        />
      </svg>

      <svg
        className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] opacity-5"
        viewBox="0 0 200 200"
      >
        <path
          fill="#1F7A36"
          d="M44.8,-59.3C58.5,-51.6,70.2,-39.3,73.7,-24.8C77.2,-10.4,72.4,6.2,64.5,21.3C56.6,36.4,45.6,50,31.8,57.4C18,64.9,1.4,66.2,-14.7,63.1C-30.9,60,-46.5,52.6,-56.2,39.8C-65.9,27,-69.8,8.9,-65.8,-6.7C-61.7,-22.4,-49.6,-35.6,-36.5,-43.7C-23.5,-51.8,-11.7,-54.8,2.1,-57.7C15.8,-60.6,31.7,-63.4,44.8,-59.3Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-xs font-semibold text-[#39B54A]">
            Our Strength
          </p>

          <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-[#1F7A36]">
            Why Choose Nassa Elevators
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-[#6B7280] leading-relaxed">
            For over four decades, Nassa Elevators has been delivering dependable,
            high-performance vertical transportation solutions. Our expertise,
            transparent pricing, and commitment to sustainability make us a trusted
            partner for residential, commercial, and industrial projects.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              icon: <FaUsersCog />,
              title: "Experienced Team",
              desc:
                "A highly skilled team of engineers and technicians with decades of hands-on experience in designing, installing, and maintaining elevator systems across diverse environments.",
            },
            {
              icon: <FaRupeeSign />,
              title: "Competitive Pricing",
              desc:
                "We deliver premium-quality elevator solutions with transparent and competitive pricing, ensuring maximum value without compromising safety or performance.",
            },
            {
              icon: <FaHandsHelping />,
              title: "Customer-Centric Approach",
              desc:
                "From initial consultation to after-sales AMC support, our processes are designed around responsiveness, reliability, and long-term client satisfaction.",
            },
            {
              icon: <FaLeaf />,
              title: "Eco-Friendly Solutions",
              desc:
                "Our systems are engineered with energy-efficient technologies and sustainable materials, supporting green buildings and reducing operational costs.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-xl border border-[#E3EFE7] rounded-xl p-5 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#39B54A]/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-xl md:text-2xl text-[#39B54A] group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-[#1F7A36]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link to="/contact">
            <button className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-[#39B54A] to-[#2FA84F] hover:scale-105 text-white text-sm font-semibold rounded-full shadow-lg transition">
              Get in Touch
              <HiOutlineArrowNarrowRight size={18} />
            </button>
          </Link>

          <div className="flex justify-center items-center gap-2 mt-4 text-xs text-[#6B7280]">
            <FaCheckCircle className="text-[#39B54A]" />
            Trusted elevator experts since 1984
          </div>
        </div>
      </div>
    </section>
  );
}
