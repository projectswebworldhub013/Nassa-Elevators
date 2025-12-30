// src/components/InnovationsSection.jsx
import React from "react";
import imgMain from "../assets/images/innovation.jpg";

const InnovationsSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f9f9f9] to-[#eef2ef] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={imgMain}
              alt="Nassa Elevator Innovation"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-semibold text-[#1F2933] leading-tight">
            Innovations That Shape the{" "}
            <span className="text-[#39B54A]">Future of Vertical Mobility</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl">
            At <span className="font-semibold text-[#1F7A36]">Nassa Elevators</span>,
            innovation is a continuous pursuit. We are always on the hunt for
            new technologies and smarter service solutions that push the
            elevator industry forward.
          </p>

          <p className="mt-4 text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl">
            With the advent of the{" "}
            <span className="font-medium text-[#1F7A36]">
              Internet of Things (IoT)
            </span>
            , elevators today are powered by intelligent sensors and connected
            systems that reduce breakdowns, improve response times, and extend
            component life—enhancing the overall customer experience.
          </p>

          <p className="mt-4 text-[#6B7280] text-base md:text-lg leading-relaxed max-w-xl">
            Together with our partners, we reinforce our position as industry
            pioneers by understanding urbanization, improving service delivery,
            and enhancing the infrastructure that supports modern cities.
          </p>

          

        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;
