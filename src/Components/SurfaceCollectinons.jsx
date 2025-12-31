import React, { useRef, useState } from "react";
import { FaFilePdf, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// PDFs
import cataloguePdf from "../assets/catalogue.pdf";
import ceilingPdf from "../assets/ceiling.pdf";
import flooringPdf from "../assets/flooring.pdf";
import gearlessPdf from "../assets/gearless.pdf";
import profilePdf from "../assets/profile.pdf";

// Images
import s5 from "../assets/images/s5.jpg";

const collections = [
  {
    title: "Master Catalogue",
    subtitle: "Complete NASSA Elevator Range",
    description:
      "Explore our complete portfolio of elevators, interiors, finishes, and modern vertical mobility solutions.",
    image: s5,
    pdf: cataloguePdf,
  },
  {
    title: "Ceiling Designs",
    subtitle: "Luxury Elevator Ceilings",
    description:
      "Premium ceiling panels crafted with stainless steel, glass, lighting patterns, and designer finishes.",
    image: s5,
    pdf: ceilingPdf,
  },
  {
    title: "Flooring Solutions",
    subtitle: "Durable Elevator Flooring",
    description:
      "High-strength flooring options including marble, granite, PVC, and anti-skid designer surfaces.",
    image: s5,
    pdf: flooringPdf,
  },
  {
    title: "Gearless Elevators",
    subtitle: "Advanced Drive Technology",
    description:
      "Energy-efficient gearless elevator systems ensuring silent operation, smooth travel, and reliability.",
    image: s5,
    pdf: gearlessPdf,
  },
  {
    title: "Company Profile",
    subtitle: "About NASSA Elevators",
    description:
      "Discover our journey, manufacturing expertise, certifications, and commitment to safety and innovation.",
    image: s5,
    pdf: profilePdf,
  },
];

export default function SurfaceCollections() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.offsetWidth / 3;
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const scroll = (dir) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F7FAF8] py-20 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2933]">
            NASSA <span className="text-[#39B54A]">Catalogues</span>
          </h2>
          <p className="text-[#6B7280] mt-2 max-w-md">
            Download detailed product catalogues showcasing design,
            technology, and engineering excellence.
          </p>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative">

          {/* LEFT NAV (Desktop only) */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-[-22px] top-1/2 -translate-y-1/2 z-20
                       w-11 h-11 rounded-full bg-white border border-[#E3EFE7]
                       text-[#1F7A36] items-center justify-center
                       hover:bg-[#39B54A] hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT NAV (Desktop only) */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-[-22px] top-1/2 -translate-y-1/2 z-20
                       w-11 h-11 rounded-full bg-white border border-[#E3EFE7]
                       text-[#1F7A36] items-center justify-center
                       hover:bg-[#39B54A] hover:text-white transition"
          >
            <FaChevronRight />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6
                       [-ms-overflow-style:none] [scrollbar-width:none]
                       [&::-webkit-scrollbar]:hidden"
          >
            {collections.map((item, index) => (
              <div
                key={index}
                className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.333%] snap-start"
              >
                <div className="relative h-[380px] rounded-2xl overflow-hidden bg-white
                                border border-[#E3EFE7] group shadow-sm hover:shadow-lg transition">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover
                               transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t
                                  from-black/90 via-black/50 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-[#8EE6A1]">{item.subtitle}</p>

                    <p className="text-xs mt-2 text-[#E3EFE7] leading-relaxed">
                      {item.description}
                    </p>

                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full
                                 bg-[#39B54A] text-white text-xs font-medium
                                 hover:bg-[#2FA84F] transition"
                    >
                      <FaFilePdf />
                      View PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-6">
            {collections.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-8 bg-[#39B54A]"
                    : "w-2 bg-[#8EE6A1]"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
