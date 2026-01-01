import React, { useRef, useState } from "react";
import { FaBuilding } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* ================= PROJECT IMAGES ================= */
import project1 from "../assets/images/project1.jfif";
import project2 from "../assets/images/project2.avif";
import project3 from "../assets/images/project6.png";
import project4 from "../assets/images/v2.jpg";

/* ================= PROJECTS DATA ================= */
const collections = [
  {
    title: "Income Tax Department, Aligarh",
    subtitle: "Government Office Elevators",
    description:
      "Reliable passenger elevator systems installed for smooth daily operations in a high-traffic government facility, ensuring safety, efficiency, and long-term durability.",
    image: project1,
  },
  {
    title: "HP Petrol Pump, Andala (Aligarh)",
    subtitle: "Commercial Utility Elevators",
    description:
      "Compact and efficient elevator solutions designed for commercial infrastructure, supporting staff movement with robust performance and minimal maintenance.",
    image: project2,
  },
  {
    title: "BSF Society, Greater Noida",
    subtitle: "Residential Society Elevators",
    description:
      "Modern passenger elevators engineered for residential communities, delivering smooth rides, silent operation, and enhanced safety features for daily use.",
    image: project3,
  },
  {
    title: "V2 Store",
    subtitle: "Retail & Shopping Complex Elevators",
    description:
      "Efficient and customer-friendly elevator solutions installed for a busy retail environment, ensuring smooth vertical movement, safety, and reliable performance during peak hours.",
    image: project4,
  },
];

/* ================= COMPONENT ================= */
export default function ProjectsSection() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const index = Math.round(slider.scrollLeft / slider.offsetWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.offsetWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-[#F7FAF8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#E3EFE7]" />
            <FaBuilding className="text-[#39B54A]" />
            <span className="w-10 h-[2px] bg-[#E3EFE7]" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F7A36]">
            Landmark Projects by{" "}
            <span className="text-[#39B54A]">NASSA Elevators</span>
          </h2>

          <p className="mt-4 text-[#6B7280] max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            From luxury residences to industrial infrastructure, our projects
            reflect engineering excellence, reliability, and precision-driven
            vertical mobility solutions.
          </p>

          <div className="flex justify-center mt-6">
            <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#39B54A] to-transparent" />
          </div>
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div className="sm:hidden">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {collections.map((item, index) => (
              <div
                key={index}
                className="min-w-full snap-center px-2"
              >
                <ProjectCard item={item} />
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {collections.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  activeIndex === index
                    ? "bg-[#39B54A] scale-125"
                    : "bg-[#CFE9D6]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */
function ProjectCard({ item }) {
  return (
    <div className="group">
      <div
        className="relative h-[420px] rounded-2xl overflow-hidden bg-white
                   border border-[#E3EFE7]
                   shadow-sm hover:shadow-xl transition"
      >
        {/* IMAGE */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover
                     transition-transform duration-700 group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <h3 className="text-lg font-semibold leading-snug">
            {item.title}
          </h3>

          <p className="text-sm text-[#8EE6A1] mt-1">
            {item.subtitle}
          </p>

          <p className="text-xs mt-3 text-[#E3EFE7] leading-relaxed">
            {item.description}
          </p>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full
                       bg-[#39B54A] text-white text-xs font-medium
                       hover:bg-[#2FA84F] transition"
          >
            <FaPhotoFilm />
            View more
          </Link>
        </div>
      </div>
    </div>
  );
}
