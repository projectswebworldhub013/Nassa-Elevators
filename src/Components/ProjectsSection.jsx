import React from "react";
import { FaFilePdf, FaBuilding } from "react-icons/fa";

/* ================= PROJECT IMAGES ================= */
import project1 from "../assets/images/project1.jfif";
import project2 from "../assets/images/project2.avif";
import project3 from "../assets/images/project3.jfif";
import project4 from "../assets/images/project4.jfif";
import { FaPhotoFilm } from "react-icons/fa6";
import { Link } from "react-router-dom";

/* ================= PROJECTS DATA ================= */
const collections = [
  {
    title: "Luxury Residential Tower",
    subtitle: "High-Speed Passenger Elevators",
    description:
      "Advanced vertical mobility solutions designed for premium residential living with smooth rides, silent operation, and elegant cabin finishes.",
    image: project1,
    pdf: "/assets/pdfs/project-1.pdf",
  },
  {
    title: "Corporate Business Hub",
    subtitle: "Smart Commercial Elevators",
    description:
      "Efficient elevator systems optimized for heavy footfall, intelligent traffic management, and seamless integration with modern architecture.",
    image: project2,
    pdf: "/assets/pdfs/project-2.pdf",
  },
  {
    title: "Healthcare Facility",
    subtitle: "Hospital & Stretcher Elevators",
    description:
      "Precision-engineered elevators ensuring hygiene, safety, and reliability for critical healthcare environments and patient transport.",
    image: project3,
    pdf: "/assets/pdfs/project-3.pdf",
  },
  {
    title: "Industrial Complex",
    subtitle: "Freight & Service Elevators",
    description:
      "Heavy-duty elevator systems built for industrial performance, high load capacity, and long-term operational durability.",
    image: project4,
    pdf: "/assets/pdfs/project-4.pdf",
  },
];

/* ================= COMPONENT ================= */
export default function ProjectsSection() {
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

        {/* ================= PROJECT CARDS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item, index) => (
            <div key={index} className="group">
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
                <div className="absolute inset-0 bg-gradient-to-t
                                from-black/90 via-black/55 to-transparent" />

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
                    to='/gallery'
                    target="_blank"
                    rel="noopener noreferrer"
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
          ))}
        </div>

      </div>
    </section>
  );
}
