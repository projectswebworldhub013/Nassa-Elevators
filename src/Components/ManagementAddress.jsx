// src/components/ManagementAddress.jsx
import React from "react";
import {
  FaBuilding,
  FaHandshake,
  FaShieldAlt,
  FaCogs,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";

const ManagementAddress = () => {
  return (
    <section className="bg-gradient-to-br from-[#f9f9f9] to-[#eef2ef] py-18 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
<div className="text-center mb-24 relative">

  {/* Decorative Top Accent */}
  <div className="flex justify-center mb-6">
    <span className="h-[3px] w-28 bg-gradient-to-r from-transparent via-[#39B54A] to-transparent rounded-full"></span>
  </div>

  {/* Eyebrow Text */}
  <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#005813] font-semibold mb-4">
    Management Address
  </p>

  {/* Main Heading */}
  <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold text-[#1F7A36] leading-tight">
    Leading With Vision & Trust
  </h2>

  {/* Supporting Description */}
  <p className="mt-8 max-w-4xl mx-auto text-[#6B7280] text-base md:text-lg leading-relaxed">
    A message from the leadership of Nassa Elevators reflecting our philosophy,
    long-term vision, and commitment to delivering safe, reliable, and
    future-ready vertical mobility solutions.
  </p>

  {/* Bottom Decorative Divider */}
  <div className="flex justify-center items-center gap-4 mt-10">
    <span className="h-[2px] w-16 bg-[#E3EFE7]"></span>
    <span className="h-2.5 w-2.5 rounded-full bg-[#39B54A]"></span>
    <span className="h-[2px] w-16 bg-[#E3EFE7]"></span>
  </div>

</div>


        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT – ADDRESS TEXT */}
          <div className="space-y-6 text-[#1F2933]">

            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-[#1F7A36]">
                Nassa Elevators
              </span>{" "}
              is a leading supplier of elevators and escalators in India. Over
              the past <span className="font-medium">30+ years</span>, we have
              consistently worked towards becoming one of the most sought-after
              partners for the real estate and infrastructure segments across
              the country.
            </p>

            <p className="text-[#6B7280] leading-relaxed">
              We are proud collaborators to some of the most respected names in
              the industry and deeply value the confidence placed in us to
              deliver seamless vertical mobility solutions. Our focus remains
              on sustaining leadership through quality, innovation, and
              disciplined execution.
            </p>

            <p className="text-[#6B7280] leading-relaxed">
              Our diversified portfolio spans{" "}
              <span className="font-medium text-[#1F7A36]">
                Residential, Commercial, Retail, Healthcare, Hospitality, Car
                Parking, and Goods Elevators
              </span>
              , making us one of the most well-rounded solution providers in the
              industry.
            </p>

            <p className="text-[#6B7280] leading-relaxed">
              We continue to invest in innovation and remain at the forefront
              of adopting advanced technologies that make movement within
              buildings safer, smoother, and more efficient.
            </p>
          </div>

          {/* RIGHT – VALUE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div className="bg-white border border-[#E3EFE7] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <FaBuilding className="text-3xl text-[#39B54A] mb-4" />
              <h4 className="font-semibold text-lg text-[#1F7A36] mb-2">
                Industry Leadership
              </h4>
              <p className="text-sm text-[#6B7280]">
                Trusted partner for large-scale real estate and infrastructure
                developments across India.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-[#E3EFE7] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <FaShieldAlt className="text-3xl text-[#39B54A] mb-4" />
              <h4 className="font-semibold text-lg text-[#1F7A36] mb-2">
                Safety & Reliability
              </h4>
              <p className="text-sm text-[#6B7280]">
                Proven performance on safety, uptime, reliability, and lower
                cost of ownership.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-[#E3EFE7] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <FaCogs className="text-3xl text-[#39B54A] mb-4" />
              <h4 className="font-semibold text-lg text-[#1F7A36] mb-2">
                Robust Engineering
              </h4>
              <p className="text-sm text-[#6B7280]">
                Indigenous design, manufacturing excellence, and a strong
                supply-chain ecosystem.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white border border-[#E3EFE7] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <FaHandshake className="text-3xl text-[#39B54A] mb-4" />
              <h4 className="font-semibold text-lg text-[#1F7A36] mb-2">
                Partnership & Trust
              </h4>
              <p className="text-sm text-[#6B7280]">
                Long-standing customer relationships built on transparency,
                timely delivery, and support.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ManagementAddress;
