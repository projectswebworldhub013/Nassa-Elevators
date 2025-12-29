import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aboutImg from "../assets/images/s5.jpg";
import valuesImg from "../assets/images/s5.jpg";
import bgImg from "../assets/images/bg5.jpg";
import { Link } from "react-router-dom";
import {
  FaIndustry,
  FaTools,
  FaUserShield,
  FaLeaf,
  FaCheckCircle,
} from "react-icons/fa";

const OurStory = () => {
  /* Parallax effect using scroll */
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], ["0%", "20%"]);

  return (
    <section className="relative overflow-hidden">
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      {/* CONTENT */}
      <div className="relative z-10 text-[#1F2933] py-16 px-6 md:px-16 font-sans">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#1F7A36]">
              About Nassa Elevators
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-[#6B7280]">
              Since <strong>1984</strong>, Nassa Elevators has been shaping
              skylines with safe, reliable, and innovative vertical transportation
              solutions trusted across India.
            </p>
          </motion.div>

          {/* Our Journey */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold text-[#1F7A36]">
                Our Journey
              </h2>

              <p className="text-base leading-relaxed">
                Founded in 1984, Nassa Elevators began with a simple goal — to
                build elevators that people could trust every single day. Over
                the years, we have grown into a comprehensive elevator solutions
                provider across residential, hospital, commercial, and industrial
                sectors.
              </p>

              <p className="text-base leading-relaxed">
                Our journey is defined by innovation, engineering precision, and
                uncompromising safety standards. From installations to
                modernization and AMC services, every project reflects our
                commitment to long-term reliability.
              </p>

              <p className="text-base leading-relaxed">
                Today, backed by decades of experience and a skilled technical
                workforce, we continue to elevate spaces and expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <img
                src={aboutImg}
                alt="Nassa Elevators Journey"
                className="w-64 h-64 md:w-84 md:h-84 rounded-full object-cover shadow-xl border-4 border-[#39B54A]"
              />
            </motion.div>
          </div>

          {/* Who We Are */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center order-1 md:order-none"
            >
              <img
                src={valuesImg}
                alt="Who We Are"
                className="w-64 h-64 md:w-84 md:h-84 rounded-full object-cover shadow-xl border-4 border-[#1F7A36]"
              />
            </motion.div>

            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-5"
            >
              <h2 className="text-2xl font-semibold text-[#1F7A36]">
                Who We Are
              </h2>

              <p className="text-base leading-relaxed">
                We are a dedicated team of engineers, technicians, and industry
                professionals committed to delivering safe, efficient, and
                future-ready elevator systems.
              </p>

              <ul className="space-y-3">
                {[
                  "Over 4 decades of industry experience",
                  "Strict adherence to safety & compliance",
                  "Tailor-made solutions for every building",
                  "Energy-efficient & eco-conscious systems",
                  "Reliable after-sales and AMC support",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-base">
                    <FaCheckCircle className="text-[#39B54A] mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Strength Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <FaIndustry />,
                title: "Industry Expertise",
                desc: "Decades of proven elevator engineering excellence.",
              },
              {
                icon: <FaTools />,
                title: "Advanced Technology",
                desc: "High-performance systems built to last.",
              },
              {
                icon: <FaUserShield />,
                title: "Safety First",
                desc: "Unmatched focus on passenger safety.",
              },
              {
                icon: <FaLeaf />,
                title: "Sustainability",
                desc: "Energy-efficient solutions for modern buildings.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-6 rounded-xl shadow-md border border-[#E3EFE7] text-center"
              >
                <div className="flex w-full justify-center items-center text-3xl text-[#39B54A] mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-[#1F7A36]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6B7280] mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold text-[#1F7A36]"
            >
              Let’s Elevate the Future Together
            </motion.h3>

            <p className="text-base text-[#6B7280] max-w-xl mx-auto mt-3 mb-5">
              Partner with Nassa Elevators for dependable performance, innovative
              engineering, and long-term trust.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-7 py-3 bg-[#39B54A] hover:bg-[#2FA84F] text-white font-semibold rounded-md shadow transition"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
