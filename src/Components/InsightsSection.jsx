// src/pages/InsightsSection.jsx
import React from "react";
import {
  FaIndustry,
  FaChartLine,
  FaBullseye,
} from "react-icons/fa";
import insightImg from "../assets/images/insights2.jpg";
import insightImg2 from "../assets/images/insights.jpg";
import insightImg3 from "../assets/images/innovation2.jpg";
import insightImg4 from "../assets/images/insights3.jpg"; // ✅ NEW IMAGE
import { Link } from "react-router-dom";

const InsightsSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f9f9f9] to-[#eef2ef] py-20 px-6 md:px-20 text-gray-800">

      {/* SECTION HEADER */}
      <div className="text-center mb-20 relative">

  {/* Decorative top line */}
  <div className="flex justify-center mb-6">
    <span className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#1F7A36] to-transparent"></span>
  </div>

  {/* Heading */}
  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-800 leading-tight">
    Insights That Power Our Journey in{" "}
    <span className="text-[#1F7A36]">Vertical Mobility Excellence</span>
  </h2>

  {/* Subheading */}
  <p className="text-gray-600 max-w-4xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
    Discover the principles, performance benchmarks, and long-term vision that
    have shaped Nassa Elevators into a globally trusted name—delivering safe,
    innovative, and future-ready elevator and escalator solutions across
    industries and geographies.
  </p>

  {/* Decorative bottom lines */}
  <div className="flex justify-center items-center gap-3 mt-8">
    <span className="h-[2px] w-12 bg-[#1F7A36]/40"></span>
    <span className="h-[6px] w-[6px] rounded-full bg-[#1F7A36]"></span>
    <span className="h-[2px] w-12 bg-[#1F7A36]/40"></span>
  </div>

</div>


      {/* BLOCK 1 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <img
          src={insightImg}
          alt="Nassa Elevators Manufacturing"
          className="rounded-2xl shadow-lg w-full object-cover max-h-[420px]"
        />

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#1F7A36] text-2xl">
            <FaIndustry />
            <h3 className="font-semibold text-2xl text-gray-800">
              Manufacturing Excellence & Global Presence
            </h3>
          </div>

          <p className="text-gray-600 text-md md:text-lg">
            Nassa Elevators is one of India’s major manufacturers and exporters
            of elevators, escalators, car parking lifts, and advanced control
            devices, with numerous installations across India and abroad.
          </p>

          <p className="text-gray-600 text-md md:text-lg">
            Established over{" "}
            <span className="font-semibold text-[#1F7A36]">
              37 years ago
            </span>
            , the company’s rise reflects superior management, innovation,
            stringent quality control, and a smart work culture.
          </p>

          <ul className="list-disc list-inside text-sm md:text-md text-gray-700">
            <li>Advanced indigenous manufacturing capabilities</li>
            <li>Exports to international markets</li>
            <li>Process-driven engineering excellence</li>
          </ul>
        </div>
      </div>

      {/* BLOCK 2 */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#1F7A36] text-2xl">
            <FaChartLine />
            <h3 className="font-semibold text-2xl text-gray-800">
              Performance, Stability & Trust
            </h3>
          </div>

          <p className="text-gray-600 text-md md:text-lg">
            The strong fundamentals of Nassa Elevators are validated by the
            NSIC–CRISIL performance report with an
            <span className="font-semibold text-[#1F7A36]">
              {" "}SE1B rating
            </span>
            , reflecting superior performance and financial stability.
          </p>

          <p className="text-gray-600 text-md md:text-lg">
            Over decades, customer confidence has steadily strengthened,
            establishing Nassa Elevators as a trusted name in safe vertical
            transportation.
          </p>

          <ul className="list-disc list-inside text-sm md:text-md text-gray-700 ">
            <li>Robust financial discipline</li>
            <li>Customer-centric quality systems</li>
            <li>Long-standing market credibility</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={insightImg2}
            alt="Quality & Certification"
            className="rounded-xl shadow-md object-cover h-[240px] w-full"
          />
          <img
            src={insightImg3}
            alt="Engineering Excellence"
            className="rounded-xl shadow-md object-cover h-[240px] w-full"
          />
        </div>
      </div>

      {/* BLOCK 3 – IMAGE INSTEAD OF ICON */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-[#1F7A36] text-2xl">
            <FaBullseye />
            <h3 className="font-semibold text-2xl text-gray-800">
              Vision, Mission & Modernization
            </h3>
          </div>
 
          <p className="text-gray-600 text-md md:text-lg">
            A journey guided by a clear vision and a well-executed mission is
            what defines the evolution of Nassa Elevators—from a domestic
            manufacturer to a world-class organization.
          </p>

          <p className="text-gray-600 text-md md:text-lg">
            Beyond new installations, we provide modernization solutions for
            aging and under-capacity elevator and escalator systems, offering
            consultancy-driven, cost-effective upgrades.
          </p>

          <ul className="list-disc list-inside text-sm md:text-md text-gray-700">
            <li>Pan-India branch network with local support</li>
            <li>End-to-end solutions: design to maintenance</li>
            <li>Modernization & upgradation expertise</li>
          </ul>

          <Link
            to="/contact"
            className="mt-4 inline-block bg-[#39B54A] text-white px-6 py-2 rounded-md hover:bg-[#2FA84F] transition duration-300 w-max"
          >
            Connect With Us
          </Link>
        </div>

        {/* IMAGE REPLACEMENT */}
        <img
          src={insightImg4}
          alt="Vision & Modernization"
          className="rounded-2xl shadow-lg w-full object-cover max-h-[420px]"
        />

      </div>
    </section>
  );
};

export default InsightsSection;
