// src/components/MovingServices.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Icons
import {
  FaTools,
  FaWrench,
  FaSyncAlt,
  FaArrowUp,
  FaSearch,
  FaUserTie,
} from "react-icons/fa";

// Images
import s1 from "../assets/images/s1.webp";
import s2 from "../assets/images/s2.webp";
import s3 from "../assets/images/s3.webp";
import s4 from "../assets/images/s4.webp";
import s5 from "../assets/images/s5.webp";
import s6 from "../assets/images/s6.webp";

// Services Data – Nassa Elevators
const elevatorServices = [
  {
    id: 1,
    name: "Elevator Installation",
    icon: <FaArrowUp />,
    image: s1,
    description:
      "Expert elevator installation with precise engineering for residential and commercial buildings.",
  },
  {
    id: 2,
    name: "Elevator Maintenance",
    icon: <FaTools />,
    image: s2,
    description:
      "Scheduled maintenance ensuring smooth operation, enhanced safety, and extended elevator lifespan.",
  },
  {
    id: 3,
    name: "Elevator Repair",
    icon: <FaWrench />,
    image: s3,
    description:
      "Quick and reliable elevator repair services minimizing downtime and restoring performance.",
  },
  {
    id: 4,
    name: "Elevator Modernization",
    icon: <FaSyncAlt />,
    image: s4,
    description:
      "Modernize elevators to improve safety, efficiency, aesthetics, and regulatory compliance.",
  },
  {
    id: 5,
    name: "Elevator Survey",
    icon: <FaSearch />,
    image: s5,
    description:
      "Comprehensive elevator surveys assessing safety standards, performance, and upgrade needs.",
  },
  {
    id: 6,
    name: "Elevator Consultancy",
    icon: <FaUserTie />,
    image: s6,
    description:
      "Professional consultancy for planning, designing, and optimizing elevator systems.",
  },
];


export default function MovingServices() {
  return (
    <section
      className="relative py-16 bg-fixed bg-cover bg-center  shadow-gray-200 shadow-xl"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95" />

      <div className="relative z-10 px-4 max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="uppercase tracking-widest text-xs font-semibold text-[#39B54A]">
          Our Expertise
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold text-[#1F7A36] mt-3">
          Nassa <span className="text-[#39B54A]">Elevator Services</span>
        </h2>

        <p className="text-[#64748B] max-w-3xl mx-auto mt-4 mb-12 text-sm sm:text-base leading-relaxed">
          Since 1984, Nassa Elevators has been delivering safe, reliable, and
          future-ready elevator solutions for residential, commercial, and
          industrial buildings—backed by engineering expertise and trusted
          service.
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {elevatorServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#E6F4EA] rounded-xl w-80 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-44 object-cover"
              />

              <div className="p-5 text-left flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[#39B54A] text-xl mb-2">
                  {service.icon}
                  <h4 className="text-sm font-bold text-[#1E293B] uppercase">
                    {service.name}
                  </h4>
                </div>

                <p className="text-sm text-[#64748B] leading-relaxed flex-1">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-5 inline-block text-center px-4 py-2 bg-gradient-to-r from-[#39B54A] to-[#1F7A36] text-white rounded-full font-semibold text-sm hover:scale-105 transition"
                >
                  Get Enquiry
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <p className="mt-12 text-[#1E293B] text-sm sm:text-base">
          Need expert elevator solutions?{" "}
          <Link
            to="/contact"
            className="text-[#1F7A36] font-semibold underline hover:text-[#145A2A]"
          >
            Contact Nassa Elevators
          </Link>
        </p>
      </div>
    </section>
  );
}
