import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ✅ Partner Logos (NASSA Trusted Brands / Suppliers) */
import kajaria from "../assets/images/partners/kajariya.webp";
import somany from "../assets/images/partners/somany.png";
import rak from "../assets/images/partners/rak.png";
import johnson from "../assets/images/partners/johnson.png";
import orientbell from "../assets/images/partners/orientbell.png";
import hindware from "../assets/images/partners/hindware.png";
import asianGranito from "../assets/images/partners/granito.png";
import nitco from "../assets/images/partners/nitco.jfif";

const logos = [
  kajaria,
  somany,
  rak,
  johnson,
  orientbell,
  hindware,
  asianGranito,
  nitco,
];

export default function PartnersMarquee() {
  const [speed, setSpeed] = useState(30);

  /* ✅ Responsive marquee speed */
  useEffect(() => {
    const handleResize = () => {
      setSpeed(window.innerWidth < 768 ? 18 : 30);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full py-20 bg-[#F7FAF8] overflow-hidden">
      {/* ================= HEADER ================= */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-6 relative">

        {/* Decorative divider */}
        <div className="flex items-center justify-center mb-5">
          <span className="w-12 h-[2px] bg-[#E3EFE7]" />
          <span className="mx-3 w-3 h-3 rounded-full bg-[#39B54A]" />
          <span className="w-12 h-[2px] bg-[#E3EFE7]" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F7A36] leading-tight">
          Trusted Partners Powering <br />
          <span className="text-[#39B54A]">NASSA Elevators</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#6B7280] mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          We collaborate with globally recognized brands and suppliers to ensure
          superior materials, refined finishes, and long-lasting performance
          across every elevator solution we deliver.
        </p>

        {/* Bottom gradient line */}
        <div className="flex justify-center mt-7">
          <span className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#39B54A] to-transparent" />
        </div>
      </div>

      {/* ================= INFINITE MARQUEE ================= */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
          }}
        >
          {/* 🔁 Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 sm:w-36 md:w-40 h-20 md:h-24
                         bg-[#FFFFFF] rounded-2xl
                         border border-[#E3EFE7]
                         shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                         flex items-center justify-center
                         hover:shadow-[0_14px_35px_rgba(57,181,74,0.18)]
                         transition"
            >
              <img
                src={logo}
                alt="NASSA Partner Brand"
                className="max-h-12 md:max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                draggable="false"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
