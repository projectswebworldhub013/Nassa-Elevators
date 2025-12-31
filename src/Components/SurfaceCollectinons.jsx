import React, { useRef, useState } from "react";
import { FaFilePdf, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// PDFs
import cataloguePdf from "../assets/catalogue.pdf";
import ceilingPdf from "../assets/ceiling.pdf";
import flooringPdf from "../assets/flooring.pdf";
import gearlessPdf from "../assets/gearless.pdf";
import profilePdf from "../assets/profile.pdf";

// Images
import img1 from "../assets/images/pdf1.png";
import img2 from "../assets/images/pdf2.png";
import img3 from "../assets/images/pdf3.png";
import img4 from "../assets/images/pdf4.png";
import img5 from "../assets/images/pdf5.png";


const collections = [
  {
    title: "Master Catalogue",
    subtitle: "Complete NASSA Elevator Range",
    description:
      "Explore our complete portfolio of elevators, interiors, finishes, and modern vertical mobility solutions.",
    image: img1,
    pdf: cataloguePdf,
  },
  {
    title: "Ceiling Designs",
    subtitle: "Luxury Elevator Ceilings",
    description:
      "Premium ceiling panels crafted with stainless steel, glass, lighting patterns, and designer finishes.",
    image: img2,
    pdf: ceilingPdf,
  },
  {
    title: "Flooring Solutions",
    subtitle: "Durable Elevator Flooring",
    description:
      "High-strength flooring options including marble, granite, PVC, and anti-skid designer surfaces.",
    image: img3,
    pdf: flooringPdf,
  },
  {
    title: "Gearless Elevators",
    subtitle: "Advanced Drive Technology",
    description:
      "Energy-efficient gearless elevator systems ensuring silent operation, smooth travel, and reliability.",
    image: img4,
    pdf: gearlessPdf,
  },
  {
    title: "Company Profile",
    subtitle: "About NASSA Elevators",
    description:
      "Discover our journey, manufacturing expertise, certifications, and commitment to safety and innovation.",
    image: img5,
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
        <div className="mb-14 relative">

  {/* Decorative Top Line */}
  <div className="flex items-center gap-4 mb-4">
    <span className="h-[2px] w-10 bg-[#8EE6A1]" />
    <span className="h-[2px] w-20 bg-[#39B54A]" />
    <span className="h-[2px] w-10 bg-[#8EE6A1]" />
  </div>

  {/* Main Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#1F2933] max-w-4xl">
    Explore Our Complete Range of{" "}
    <span className="text-[#39B54A]">Elevator Catalogues</span> &
    Technical Showcases
  </h2>

  {/* Subtitle */}
  <p className="mt-4 text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl leading-relaxed">
    Download professionally curated catalogues featuring advanced elevator
    technologies, premium interiors, ceiling designs, flooring solutions,
    and engineering excellence from NASSA Elevators.
  </p>

  {/* Bottom Accent Line */}
  <div className="mt-6 flex items-center gap-3">
    <span className="h-[3px] w-14 rounded-full bg-[#39B54A]" />
    <span className="h-[3px] w-6 rounded-full bg-[#8EE6A1]" />
  </div>

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
                className="min-w-[100%] sm:min-w-[50%] lg:min-w-[31.7%] snap-start"
              >
                <div className="relative h-[420px] rounded-2xl overflow-hidden bg-white
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
