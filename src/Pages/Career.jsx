// src/pages/Careers.jsx
import React, { useState } from "react";
import {
  FaBriefcase,
  FaUsers,
  FaHandshake,
  FaSeedling,
  FaGraduationCap,
  FaBuilding,
  FaArrowRight,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaFileUpload,
} from "react-icons/fa";

// IMAGES (replace with real images anytime)
import careerHeroImg from "../assets/images/about2.jpg";
import workEnvImg from "../assets/images/c1.jpg";
import peopleDevImg from "../assets/images/s5.jpg";
import CareerHero from "../Components/CareerHero";

const COLORS = {
  primary: "#39B54A",
  dark: "#1F7A36",
  soft: "#8EE6A1",
  hover: "#2FA84F",
  bg: "#FFFFFF",
  bgAlt: "#F7FAF8",
  border: "#E3EFE7",
  textPrimary: "#1F2933",
  textSecondary: "#6B7280",
};

const Careers = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    resume: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setForm({ name: "", email: "", phone: "", role: "", resume: "" });
  };

  return (
    <>
    <CareerHero/>
    <main className="bg-white text-[#1F2933]">

      {/* ================= CAREER OPPORTUNITIES ================= */}
      <section className="py-20 bg-[#F7FAF8]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaBriefcase className="text-[#39B54A] text-xl" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1F7A36]">
                Career Opportunities
              </h2>
            </div>

            <p className="text-[#6B7280] leading-relaxed mb-6">
              At NASSA Elevators, we welcome skilled, passionate, and driven
              individuals who aspire to grow professionally. We aim to create
              opportunities that allow employees to enhance their abilities
              while aligning personal career goals with organizational growth.
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaSeedling className="text-[#39B54A] mt-1" />
                Skill development and long-term career growth
              </li>
              <li className="flex gap-3">
                <FaHandshake className="text-[#39B54A] mt-1" />
                Transparent growth and performance-driven culture
              </li>
              <li className="flex gap-3">
                <FaBuilding className="text-[#39B54A] mt-1" />
                Opportunities aligned with company objectives
              </li>
            </ul>
          </div>

          <img
            src={workEnvImg}
            alt="Career Opportunities"
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* ================= WORK ENVIRONMENT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <img
            src={workEnvImg}
            alt="Work Environment"
            className="rounded-2xl shadow-md"
          />

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaUsers className="text-[#39B54A] text-xl" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1F7A36]">
                Work Environment
              </h2>
            </div>

            <p className="text-[#6B7280] leading-relaxed mb-4">
              We believe a positive work environment is essential when spending
              8–9 hours a day at work. At NASSA Elevators, we foster a reliable,
              friendly, and culturally inclusive atmosphere that encourages
              collaboration and innovation.
            </p>

            <p className="text-[#6B7280] leading-relaxed">
              We regularly invest in people, infrastructure, ambiance, and
              facilities to ensure a workplace where individuals can grow,
              develop, and multiply their skills while enjoying their journey
              with us.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PEOPLE DEVELOPMENT ================= */}
      <section className="py-20 bg-[#F7FAF8]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-[#39B54A] text-xl" />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1F7A36]">
                People Development
              </h2>
            </div>

            <p className="text-[#6B7280] leading-relaxed mb-4">
              At NASSA Elevators, people are our most valuable asset. Our success
              is driven by a talented, inventive, and energetic team that
              continuously strives for excellence.
            </p>

            <p className="text-[#6B7280] leading-relaxed">
              We actively support learning through training programs and
              professional development initiatives, encouraging employees to
              constantly upgrade their skills and grow confidently within the
              organization.
            </p>
          </div>

          <img
            src={peopleDevImg}
            alt="People Development"
            className="rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* ================= APPLY NOW FORM ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1F7A36]">
              Apply Now
            </h2>
            <p className="mt-2 text-[#6B7280]">
              Take the next step in your career with NASSA Elevators
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#F7FAF8] border border-[#E3EFE7] rounded-2xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#E3EFE7] focus:outline-none focus:ring-2 focus:ring-[#39B54A]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#E3EFE7] focus:outline-none focus:ring-2 focus:ring-[#39B54A]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E3EFE7]"
              />

              <input
                type="text"
                name="role"
                placeholder="Position Applying For"
                value={form.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#E3EFE7]"
              />
            </div>

            <input
              type="file"
              name="resume"
              className="w-full text-sm text-[#6B7280]"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition"
              style={{ backgroundColor: COLORS.primary }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.hover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = COLORS.primary)
              }
            >
              Submit Application <FaArrowRight />
            </button>
          </form>
        </div>
      </section>

    </main>
    </>
  );
};

export default Careers;
