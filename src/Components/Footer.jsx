// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaHome,
  FaPhoneAlt,
  FaImage,
  FaInfoCircle,
  FaBriefcase,
  FaBuilding,
  FaCar,
  FaEye,
  FaBox,
  FaUserTie,
  FaWheelchair,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaSkype,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import bgImg from "../assets/images/bg5.jpg";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

/* Products */
const productsData = [
  { name: "Passenger Elevator", path: "/products/passenger-elevator", icon: FaUserTie },
  { name: "Home Elevator", path: "/products/home-elevator", icon: FaHome },
  { name: "Dumbwaiter Elevator", path: "/products/dumbwaiter-elevator", icon: FaBox },
  { name: "Stretcher Elevator", path: "/products/stretcher-elevator", icon: FaWheelchair },
  { name: "Goods Elevator", path: "/products/goods-elevator", icon: FaBuilding },
  { name: "Automobile Elevator", path: "/products/automobile-elevator", icon: FaCar },
  { name: "Observation Elevator", path: "/products/observation-elevator", icon: FaEye },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-20 pb-10 px-6 md:px-16 text-[#6B7280] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">

        {/* About */}
        <div className="space-y-3">
          <h4 className="text-3xl font-bold text-[#1F7A36] font-[italiana]">
            About Nassa Elevators
          </h4>
          <p className="leading-relaxed text-[#6B7280]">
            Nassa Elevators is a trusted name in vertical transportation,
            delivering safe, reliable, and innovative elevator solutions.
            We specialize in design, manufacturing, installation, and
            maintenance of elevators for residential, commercial, and
            industrial applications.
          </p>

          <p className="text-xs text-[#6B7280] mt-3">
            <strong>GSTIN:</strong> 09DZGPS2539G2ZY
          </p>

          {/* Webmail Button */}
          <a
            href="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 rounded-full bg-[#39B54A] text-white text-xs font-semibold hover:bg-[#2FA84F] transition"
          >
            Access Webmail
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-[#1F7A36] font-[italiana]">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              ["Home", "/", <FaHome />],
              ["About", "/about", <FaInfoCircle />],
              ["Careers", "/careers", <FaBriefcase />],
              ["Gallery", "/gallery", <FaImage />],
              ["Contact Us", "/contact", <FaPhoneAlt />],
            ].map(([label, path, icon], i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="flex items-center gap-2 hover:text-[#39B54A] transition"
                >
                  {icon} {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Emails */}
          <h4 className="mt-6 text-2xl font-bold text-[#1F7A36] font-[italiana]">
            Email
          </h4>
          <ul className="mt-2 space-y-2">
            {["Info@nassaelevators.co.in", "nassaelevators@gmail.com"].map(
              (email, i) => (
                <li key={i}>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 hover:text-[#39B54A]"
                  >
                    <FaEnvelope /> {email}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-[#1F7A36] font-[italiana]">
            Our Products
          </h4>
          <ul className="space-y-2">
            {productsData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="flex items-center gap-2 hover:text-[#39B54A] transition"
                >
                  <Icon /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
  <h4 className="text-2xl font-bold mb-4 text-[#1F7A36] font-[italiana]">
    Contact Information & Social Links
  </h4>
  <address className="not-italic leading-relaxed text-[#6B7280] mb-2">
    Shop No. 17, Ground Floor,
    <br />
    Anupshahr – Aligarh Road,
    <br />
    Jamalpur, Aligarh
  </address>

  {/* Clickable Phone Numbers */}
  <div className="mb-4 text-[#6B7280]">
    <p>
      <a href="tel:+917982091097" className="hover:text-[#1F7A36] transition-colors">
        +91 79820 91097
      </a>
    </p>
    <p>
      <a href="tel:+919897261910" className="hover:text-[#1F7A36] transition-colors">
        +91 98972 61910
      </a>
    </p>
  </div>

  {/* Social Icons */}
  <div className="flex flex-wrap gap-4 text-xl mt-4">
    <a href="https://www.instagram.com/nassaelevatorsservices/" target="_blank" rel="noreferrer">
      <FaInstagram className="text-[#E4405F]" />
    </a>
    <a href="https://www.facebook.com/people/Nassa-elevators/100089786106584/" target="_blank" rel="noreferrer">
      <FaFacebookF className="text-[#1877F2]" />
    </a>
    <a href="https://x.com/NassaElevators" target="_blank" rel="noreferrer">
      <FaTwitter className="text-[#1DA1F2]" />
    </a>
    <a href="https://www.youtube.com/channel/UCQ9ji5f0QsHCzV4kOHu1aWw" target="_blank" rel="noreferrer">
      <FaYoutube className="text-[#FF0000]" />
    </a>
    <a href="https://www.linkedin.com/in/nassa-elevators-4a6418263/" target="_blank" rel="noreferrer">
      <FaLinkedinIn className="text-[#0A66C2]" />
    </a>
    <a href="https://in.pinterest.com/nassaelevatorsservices/" target="_blank" rel="noreferrer">
      <FaPinterestP className="text-[#E60023]" />
    </a>
    <a href="https://join.skype.com/invite/yhGjEKpAyCT9" target="_blank" rel="noreferrer">
      <FaSkype className="text-[#00AFF0]" />
    </a>
  </div>

  <div className="mt-4 flex">
    <Translator />
    <div className="w-36"></div>
  </div>
</div>

      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-6 pt-4 border-t border-[#E3EFE7] text-center text-xs text-[#6B7280] space-y-2">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Nassa Elevators. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#39B54A]"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
