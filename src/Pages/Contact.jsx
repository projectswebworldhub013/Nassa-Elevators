// src/Pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaTwitter,
  FaSkype,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import bgContact from "../assets/images/modern.jpg";
import MapSection from "../Components/MapSection";
import ContactHero from '../Components/ContactHero'
import SurfaceCollections from "../Components/SurfaceCollectinons";
const ContactPage = () => {
  return (
    <>
      {/* HERO */}
      <ContactHero/>

      {/* MAIN SECTION */}
      <section className="w-full min-h-screen py-16 flex flex-col lg:flex-row bg-[#F7FAF8] text-[#1F2933] shadow-gray-800 shadow-xl">

        {/* LEFT INFO */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-5 border-b-4 border-[#39B54A] inline-block pb-2">
              Let’s Connect
            </h1>

            <p className="text-base text-[#6B7280] mb-10 max-w-xl">
              Reach out to <strong>Nassa Elevators</strong> for installation,
              modernization, maintenance, and technical elevator solutions
              designed for safety, efficiency, and long-term reliability.
            </p>

            <div className="space-y-6 text-sm sm:text-base text-[#1F2933]">
              <div>
                <h4 className="font-semibold flex items-center gap-2">
                  <FaPhoneAlt className="text-[#39B54A]" /> Phone
                </h4>
                <p className="text-[#6B7280]">+91 79820 91097</p>
                <p className="text-[#6B7280]">+91 98972 61910</p>
              </div>

              <div>
                <h4 className="font-semibold flex items-center gap-2">
                  <FaEnvelope className="text-[#39B54A]" /> Email
                </h4>
                <p className="text-[#6B7280]">info@nassaelevators.co.in</p>
                <p className="text-[#6B7280]">nassaelevators@gmail.com</p>
              </div>

              <div>
                <h4 className="font-semibold flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#39B54A]" /> Address
                </h4>
                <p className="text-[#6B7280] leading-relaxed">
                  Shop No. 17, Ground Floor,<br />
                  Anupshahr – Aligarh Road,<br />
                  Jamalpur, Aligarh
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL ICONS */}
<div className="mt-10 flex flex-wrap gap-5 text-xl text-[#1F2933]">

  <a
    href="https://www.instagram.com/nassaelevatorsservices/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <FaInstagram className="text-[#E4405F]" />
  </a>

  <a
    href="https://www.facebook.com/people/Nassa-elevators/100089786106584/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <FaFacebookF className="text-[#1877F2]" />
  </a>

  <a
    href="https://x.com/NassaElevators"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <FaTwitter className="text-[#1DA1F2]" />
  </a>

  <a
    href="https://www.youtube.com/channel/UCQ9ji5f0QsHCzV4kOHu1aWw"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <FaYoutube className="text-[#FF0000]" />
  </a>

  <a
    href="https://www.linkedin.com/in/nassa-elevators-4a6418263/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <FaLinkedinIn className="text-[#0A66C2]" />
  </a>

  <a
    href="https://in.pinterest.com/nassaelevatorsservices/"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <FaPinterestP className="text-[#E60023]" />
  </a>

  <a
    href="https://join.skype.com/invite/yhGjEKpAyCT9"
    target="_blank"
    rel="noreferrer"
    className="transition hover:scale-110"
  >
    <FaSkype className="text-[#00AFF0]" />
  </a>

</div>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center"
        >
          {/* BACKGROUND */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
          />
          <div className="absolute inset-0 bg-[#000000]/55" />

          {/* FORM */}
          <form
            action="https://formsubmit.co/info@nassaelevators.co.in"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16 text-white"
            id="enquiry-form"
          >
            <h3 className="text-xl font-semibold uppercase border-b border-[#8EE6A1] pb-2 mb-6">
              Contact Form
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="bg-transparent border-b border-white/60 p-2 focus:outline-none placeholder-white/70"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="bg-transparent border-b border-white/60 p-2 focus:outline-none placeholder-white/70"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="bg-transparent border-b border-white/60 p-2 focus:outline-none placeholder-white/70"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-white/60 p-2 focus:outline-none placeholder-white/70"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-white/60 p-2 focus:outline-none resize-none h-24 placeholder-white/70"
              />

              <button
                type="submit"
                className="
                  col-span-1 sm:col-span-2
                  mt-4 py-3
                  rounded-full
                  bg-[#39B54A]
                  font-semibold
                  hover:bg-[#2FA84F]
                  transition-all duration-300
                "
              >
                Send Message
              </button>
            </div>

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://nassaelevators.co.in/" />
          </form>
        </motion.div>
      </section>

      {/* MAP */}
      <MapSection />
      <SurfaceCollections/>
    </>
  );
};

export default ContactPage;
