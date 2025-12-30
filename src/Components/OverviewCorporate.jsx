// src/components/OverviewCorporate.jsx
import React from "react";
import { FaCheckCircle, FaCogs, FaShieldAlt, FaBolt } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import overviewImg from "../assets/images/o1.webp";
import img2 from "../assets/images/o2.webp";
import { Link } from "react-router-dom";

export default function OverviewCorporate() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#f9f9f9] to-[#eef2ef] py-20 px-6 md:px-16">
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Section Heading */}
        <div className="mb-16 relative">
          <p className="text-[#39B54A] font-medium uppercase tracking-widest mb-2">
            Since 1984
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#1F7A36] relative inline-block">
            <span className="before:content-['“'] before:text-[#8EE6A1] before:text-6xl before:absolute before:-left-8 before:top-0 
                             after:content-['”'] after:text-[#8EE6A1] after:text-6xl after:absolute after:-right-8 after:bottom-0">
              Nassa Elevators:{" "}
              <span className="font-semibold text-[#1F7A36]">
                Overview & Corporate Culture
              </span>
            </span>
          </h2>

          <p className="mt-6 text-[#1F2933] text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Established in 1984, <b>Nassa Elevators</b> is one of India’s fastest-growing
            elevator and escalator solution providers with in-house research,
            development, and manufacturing facilities. We combine decades of
            experience with modern engineering to deliver <b>safe, reliable, and
            future-ready mobility solutions</b> across the nation.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-24 h-1 bg-[#39B54A] rounded-full"></div>
            <div className="w-12 h-1 bg-[#E3EFE7] rounded-full"></div>
            <div className="w-24 h-1 bg-[#39B54A] rounded-full"></div>
          </div>
        </div>

        {/* Overview Row */}
        <div className="grid md:grid-cols-2 gap-12 items-center border-t border-b border-[#E3EFE7] py-16">

          {/* Image */}
          <div>
            <img
              src={overviewImg}
              alt="Nassa Elevators Operations"
              className="w-full h-[320px] md:h-[400px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="text-left leading-relaxed text-[#1F2933]">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1F7A36] mb-4 flex items-center gap-3">
              <FaCogs className="text-[#39B54A]" size={28} />
              Complete Elevator & Escalator Solutions
            </h3>

            <p className="text-base md:text-lg text-[#6B7280] mb-5">
              Nassa Elevators is a <b>Private Limited Company</b> powered by a skilled
              team of professionals, technocrats, and engineers across electrical,
              mechanical, and electronics disciplines. Our deep market insights
              allow us to evaluate and improve upon global elevator technologies.
            </p>

            

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-[#39B54A]" />
                <span>40+ Years Industry Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#1F7A36]" />
                <span>Government & Private Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <FaBolt className="text-[#39B54A]" />
                <span>Energy-Efficient Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCogs className="text-[#1F7A36]" />
                <span>In-House R&D & Manufacturing</span>
              </div>
            </div>

            <Link to="/contact">
              <button className="cursor-pointer px-6 py-3 bg-[#39B54A] text-white font-semibold rounded-lg shadow hover:bg-[#2FA84F] transition flex items-center gap-2">
                Get in Touch <HiOutlineArrowNarrowRight />
              </button>
            </Link>
          </div>
        </div>

        {/* Corporate Culture */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-8 mt-6">

          {/* Culture Content */}
          <div className="text-left leading-relaxed text-[#1F2933]">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1F7A36] mb-4 flex items-center gap-3">
              <FaCheckCircle className="text-[#39B54A]" size={26} />
              Our Corporate Culture
            </h3>

            <p className="text-base md:text-lg text-[#6B7280] mb-5">
              At Nassa Elevators, we follow a well-defined corporate culture built
              on <b>quality, integrity, collaboration, and continuous improvement</b>.
              Client requirements and partner ideas are treated as strategic
              inputs that fuel innovation and long-term success.
            </p>

            <p className="text-base md:text-lg text-[#6B7280] mb-6">
              Our business programs are driven by systematic processes, constant
              learning, and technology upgradation—enabling us to consistently
              exceed expectations while maintaining uncompromised standards of
              safety, reliability, and service excellence.
            </p>

            <Link to="/about">
              <button className="cursor-pointer px-6 py-3 bg-[#39B54A] text-white font-semibold rounded-lg shadow hover:bg-[#2FA84F] transition flex items-center gap-2">
                Know More About Us <HiOutlineArrowNarrowRight />
              </button>
            </Link>
          </div>

          {/* Image */}
          <div>
            <img
              src={img2}
              alt="Nassa Elevators Corporate Culture"
              className="w-full h-[320px] md:h-[400px] object-cover rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
