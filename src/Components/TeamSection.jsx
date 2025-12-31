// src/components/TeamSection.jsx
import React from "react";
import { motion } from "framer-motion";

// Team Images
import t1 from "../assets/images/team/t1.webp";
import t2 from "../assets/images/team/t2.webp";
import t3 from "../assets/images/team/t3.webp";
import t4 from "../assets/images/team/t4.webp";

// Background Image
import teamBg from "../assets/images/bg-team.avif"; // add a professional team/workplace image

const teamMembers = [
  {
    name: "Muhammad Shakil",
    role: "Proprietor",
    image: t1,
    quote:
      "Building trust through quality, safety, and innovation is the foundation of our success.",
  },
  {
    name: "Aneesh Khan",
    role: "Coordinator Manager",
    image: t2,
    quote:
      "Strong coordination ensures every project runs smoothly, efficiently, and on time.",
  },
  {
    name: "Shumaila Saifi",
    role: "HR",
    image: t3,
    quote:
      "Empowering people and nurturing talent drives growth, culture, and long-term excellence.",
  },
  {
    name: "Anam Khan",
    role: "Accounts Department",
    image: t4,
    quote:
      "Accurate financial management ensures stability, transparency, and sustainable business growth.",
  },
];

export default function TeamSection() {
  return (
    <section
      className="
        relative py-20 px-6 md:px-16
        bg-cover bg-center bg-fixed
      "
      style={{
        backgroundImage: `url(${teamBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#0f3d24]/80 to-black/70" />

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Decorative Lines */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[-10px] flex items-center gap-2">
            <div className="w-16 h-[3px] bg-[#39B54A] rounded-full"></div>
            <div className="w-6 h-[3px] bg-[#8EE6A1] rounded-full"></div>
            <div className="w-3 h-[3px] bg-white rounded-full"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            <span className="text-[#39B54A]">Our Dedicated </span>
            <span className="text-[#8EE6A1]">Leadership</span>{" "}
            <span className="text-white">Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#E3EFE7] text-base md:text-lg max-w-3xl mx-auto font-light italic leading-relaxed"
          >
            “At Nassa Elevators, our strength lies in a team committed to safety,
            innovation, and excellence in vertical transportation.”
          </motion.p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="
                relative bg-white backdrop-blur-md
                rounded-xl shadow-md hover:shadow-2xl
                p-6 flex flex-col items-center text-center
                transition-all duration-300 group overflow-hidden
              "
            >
              {/* Hover Border */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#39B54A]"
                transition={{ duration: 0.5 }}
              />

              {/* Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-5 shadow-md border-2 border-[#004116]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-[#1F7A36] mb-1">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-[#1F2933] text-sm font-medium mb-3">
                {member.role}
              </p>

              {/* Quote */}
              <p className="text-[#6B7280] text-xs leading-relaxed italic max-w-[220px]">
                “{member.quote}”
              </p>

              {/* Bottom Accent */}
              <div className="mt-5 w-10 h-[3px] bg-[#39B54A] rounded-full group-hover:w-16 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
