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
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import CareerHero from "../Components/CareerHero";

// IMAGES
import workEnvImg from "../assets/images/c1.jpg";
import peopleDevImg from "../assets/images/pdf5.png";
import careerImg from "../assets/images/about2.jpg";

const Careers = () => {
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  role: "",
});

const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
  e.preventDefault();
  setShowSuccess(true);

  setTimeout(() => {
    setShowSuccess(false);
  }, 3500);

  setForm({ name: "", email: "", phone: "", role: "", resume: "" });
};

const isFormComplete =
  form.name.trim() &&
  form.email.trim() &&
  form.phone.trim() &&
  form.role.trim();

  return (
    <>
      <CareerHero />

      <main className="bg-white text-[#1F2933]">

        {/* ================= CAREER OPPORTUNITIES ================= */}
        <section className="py-10 px-6 md:px-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

            <img
              src={careerImg}
              alt="Career Opportunities"
              className="rounded-2xl shadow-lg w-full object-cover max-h-[420px]"
            />

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[#1F7A36] text-2xl">
                <FaBriefcase />
                <h3 className="font-semibold text-2xl">
                  Career Opportunities
                </h3>
              </div>

              <p className="text-[#6B7280] text-md md:text-lg">
                We aim to empower individuals by providing opportunities that
                enhance skills, align professional goals, and contribute to
                long-term organizational success.
              </p>

              <ul className="list-disc list-inside text-sm md:text-md text-[#1F2933]">
                <li>Skill enhancement & career progression</li>
                <li>Performance-driven growth culture</li>
                <li>Roles aligned with company objectives</li>
              </ul>
            </div>

          </div>
        </section>

        {/* ================= WORK ENVIRONMENT ================= */}
        <section className="py-10 md:py-12 bg-gradient-to-br from-[#f9f9f9] to-[#eef2ef]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">

    {/* CONTENT */}
    <div className="flex flex-col justify-between bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-[#E3EFE7]">

      {/* TOP CONTENT */}
      <div>
        {/* Heading */}
        <div className="flex items-start gap-3 mb-4 text-[#1F7A36]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Careers That Elevate <br />
            <span className="text-[#39B54A]">
              People, Purpose & Progress
            </span>
          </h2>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5 md:my-6">
          <span className="h-[2px] w-10 md:w-12 bg-[#39B54A]/40"></span>
          <span className="h-[6px] w-[6px] rounded-full bg-[#39B54A]"></span>
          <span className="h-[2px] w-10 md:w-12 bg-[#39B54A]/40"></span>
        </div>

        <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
          At{" "}
          <span className="font-semibold text-[#1F7A36]">
            NASSA Elevators
          </span>
          , we don’t just offer jobs — we create long-term careers powered by
          engineering excellence, ethical leadership, and a culture of
          continuous growth.
        </p>

        <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
          Our teams work on projects that redefine vertical mobility while
          growing professionally in a transparent, performance-driven
          environment.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-6 mt-8 md:mt-10 text-center">
        <div className="sm:border-r border-[#E3EFE7]">
          <p className="text-lg md:text-xl font-bold text-[#1F7A36]">37+</p>
          <p className="text-sm text-[#6B7280] mt-1">Years of Legacy</p>
        </div>

        <div className="sm:border-r border-[#E3EFE7]">
          <p className="text-lg md:text-xl font-bold text-[#1F7A36]">1000+</p>
          <p className="text-sm text-[#6B7280] mt-1">Installations</p>
        </div>

        <div>
          <p className="text-lg md:text-xl font-bold text-[#1F7A36]">
            Pan-India
          </p>
          <p className="text-sm text-[#6B7280] mt-1">Presence</p>
        </div>
      </div>

      {/* FEATURES */}
      <ul className="mt-8 md:mt-10 space-y-4 text-sm sm:text-base text-[#1F2933]">
        <li className="flex gap-3 items-start">
          <FaSeedling className="text-[#39B54A] mt-1 flex-shrink-0" />
          Continuous skill enhancement & leadership development
        </li>
        <li className="flex gap-3 items-start">
          <FaHandshake className="text-[#39B54A] mt-1 flex-shrink-0" />
          Ethical culture with transparent growth paths
        </li>
        <li className="flex gap-3 items-start">
          <FaBuilding className="text-[#39B54A] mt-1 flex-shrink-0" />
          Careers aligned with long-term company vision
        </li>
      </ul>
    </div>

    {/* IMAGE */}
    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl min-h-[260px] sm:min-h-[360px] md:min-h-full">
      <img
        src={workEnvImg}
        alt="Career at NASSA"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>

  </div>
</section>

        {/* ================= PEOPLE DEVELOPMENT ================= */}
<section className="py-16 md:py-24 bg-gradient-to-br from-[#ffffff] to-[#f5faf7] px-4 sm:px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">

    {/* IMAGE */}
    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl min-h-[260px] sm:min-h-[360px] md:min-h-full">
      <img
        src={peopleDevImg}
        alt="People Development at NASSA Elevators"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>

    {/* CONTENT */}
    <div className="flex flex-col justify-between bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-[#E3EFE7]">

      {/* HEADING */}
      <div>
        <div className="flex items-start gap-3 text-[#1F7A36] mb-3">
          <FaGraduationCap className="text-xl md:text-2xl mt-1" />
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            People Development <br />
            <span className="text-[#39B54A]">
              Empowering Growth, Skills & Leadership
            </span>
          </h3>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-5 md:my-6">
          <span className="h-[2px] w-10 md:w-12 bg-[#39B54A]/40"></span>
          <span className="h-[6px] w-[6px] rounded-full bg-[#39B54A]"></span>
          <span className="h-[2px] w-10 md:w-12 bg-[#39B54A]/40"></span>
        </div>

        {/* CONTENT */}
        <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed mb-4">
          At <span className="font-semibold text-[#1F7A36]">NASSA Elevators</span>,
          our people are our greatest strength. We invest deeply in structured
          training programs, technical workshops, and mentorship initiatives
          designed to unlock individual potential.
        </p>

        <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed">
          Development here is intentional — enabling employees to grow in
          confidence, leadership, and expertise while contributing to
          world-class vertical mobility solutions.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 md:mt-10 text-center">
        <div className="sm:border-r border-[#E3EFE7]">
          <p className="text-2xl md:text-3xl font-bold text-[#1F7A36]">Skill+</p>
          <p className="text-sm text-[#6B7280] mt-1">Focused Training</p>
        </div>

        <div className="sm:border-r border-[#E3EFE7]">
          <p className="text-2xl md:text-3xl font-bold text-[#1F7A36]">Mentor</p>
          <p className="text-sm text-[#6B7280] mt-1">Driven Growth</p>
        </div>

        <div>
          <p className="text-2xl md:text-3xl font-bold text-[#1F7A36]">Future</p>
          <p className="text-sm text-[#6B7280] mt-1">Leadership Ready</p>
        </div>
      </div>

    </div>

  </div>
</section>


        {/* ================= APPLY NOW ================= */}
{/* ================= APPLY NOW (CINEMATIC) ================= */}
<section className="py-8 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-[#f7faf8] to-[#eef4ef]">
  <div className="max-w-6xl mx-auto">

    {/* SECTION HEADER */}
    <div className="text-center mb-14">
      <div className="flex justify-center items-center gap-3 text-[#1F7A36] mb-4">
        <span className="h-[2px] w-10 bg-[#39B54A]/40"></span>
        <FaBriefcase className="text-xl" />
        <span className="h-[2px] w-10 bg-[#39B54A]/40"></span>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1F7A36] leading-tight">
        Build a Career That <br />
        <span className="text-[#39B54A]">Elevates Your Potential</span>
      </h2>

      <p className="mt-3 text-sm sm:text-base text-[#6B7280] max-w-xl mx-auto">
        Join NASSA Elevators and work with industry leaders shaping the future
        of vertical mobility.
      </p>
    </div>

    {/* CARD */}
    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-[#E3EFE7] bg-white/80 backdrop-blur-xl">

      {/* FORM SIDE */}
      <form
  onSubmit={handleSubmit}
  className="p-6 sm:p-8 md:p-10 flex flex-col justify-between relative"
>
  <div className="space-y-6">

    {/* INPUTS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="relative">
        <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-[#39B54A]" />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E3EFE7]
                     focus:outline-none focus:ring-2 focus:ring-[#39B54A]/50"
        />
      </div>

      <div className="relative">
        <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-[#39B54A]" />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E3EFE7]
                     focus:outline-none focus:ring-2 focus:ring-[#39B54A]/50"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="relative">
        <FaPhoneAlt className="absolute top-1/2 left-4 -translate-y-1/2 text-[#39B54A]" />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E3EFE7]"
        />
      </div>

      <div className="relative">
        <FaBriefcase className="absolute top-1/2 left-4 -translate-y-1/2 text-[#39B54A]" />
        <input
          type="text"
          name="role"
          placeholder="Position Applying For"
          value={form.role}
          onChange={handleChange}
          required
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E3EFE7]"
        />
      </div>
    </div>

    {/* RESUME UPLOAD */}
    <label className="flex items-center gap-4 border-2 border-dashed border-[#39B54A]/40
                      rounded-xl px-5 py-4 cursor-pointer hover:bg-[#39B54A]/5 transition">
      <FaFileUpload className="text-[#39B54A] text-xl" />
      <span className="text-sm text-[#1F2933]">
        Upload Resume <span className="text-[#6B7280]">(PDF / DOC)</span>
      </span>
      <input type="file" className="hidden" />
    </label>

    {/* ✅ AUTO SUCCESS MESSAGE */}
{isFormComplete && (
  <div className="flex items-start gap-3 p-4 rounded-xl
                  bg-[#EAF7EE] border border-[#39B54A]/30
                  text-[#1F7A36] animate-fadeIn">
    <FaCheckCircle className="text-xl mt-0.5" />
    <div>
      <p className="font-semibold text-sm sm:text-base">
        You’re all set!
      </p>
      <p className="text-xs sm:text-sm text-[#2F6B45] mt-1">
        All required details are filled. You can submit your application
        whenever you're ready.
      </p>
    </div>
  </div>
)}

  </div>

  {/* SUBMIT BUTTON */}
  <button
    type="submit"
    className={`mt-8 w-full flex items-center justify-center gap-2
                px-6 py-3 rounded-full text-white font-semibold
                transition shadow-lg hover:shadow-xl
                ${
                  isFormComplete
                    ? "bg-[#39B54A] hover:bg-[#2FA84F]"
                    : "bg-[#9ED9AF] cursor-not-allowed"
                }`}
    disabled={!isFormComplete}
  >
    Submit Application <FaArrowRight />
  </button>
</form>


      {/* IMAGE SIDE (HIDDEN ON MOBILE) */}
      <div className="relative hidden md:block">
        <img
          src={careerImg}
          alt="Careers at NASSA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-transparent"></div>

        {/* OVERLAY CONTENT */}
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h3 className="text-2xl font-semibold leading-snug">
            Engineering Futures.<br />Empowering People.
          </h3>
          <p className="text-sm text-gray-200 mt-3 max-w-sm">
            Be part of a team that values innovation, integrity, and long-term
            growth.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      </main>
      
    </>
  );
};

export default Careers;
