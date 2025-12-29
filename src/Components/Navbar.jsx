import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaAngleDown,
  FaEnvelope,
  FaPhoneAlt,
  FaFileInvoiceDollar,
  FaHome,
  FaInfoCircle,
  FaTools,
  FaIndustry,
  FaCogs,
  FaImages,
  FaBriefcase,
  FaPhone,
} from "react-icons/fa";

import logo from "../assets/images/nassa-logo.png";

/* ================= DATA ================= */

const services = [
  { name: "Repairs & Upgrades", path: "/services/repairs-upgrades" },
  { name: "Technical Services", path: "/services/technical" },
  { name: "Maintenance Programs", path: "/services/maintenance" },
];

const elevators = [
  "Passenger Elevator",
  "Home Elevator",
  "Dumbwaiter Elevator",
  "Stretcher Elevator",
  "Goods Elevator",
  "Automobile Elevator",
  "Observation Elevator",
];

const modernization = [
  "Geared Elevator",
  "Gearless Elevator",
  "Hydraulic Elevator",
  "Escalator Modernization",
];
const aboutMenu = [
  { name: "Overview & Corporate Culture", path: "/about/overview-culture" },
  { name: "Supported Initiative", path: "/about/supported-initiative" },
  { name: "Milestones", path: "/about/milestones" },
  { name: "Innovations", path: "/about/innovations" },
  { name: "Insights", path: "/about/insights" },
  { name: "Management Address", path: "/about/management-address" },
];

/* ================= COMPONENT ================= */

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  const toggleMobile = (key) =>
    setMobileDropdown(mobileDropdown === key ? null : key);
const navClass = (path) =>
  `relative font-semibold text-sm transition
   ${pathname === path
     ? "text-[#1F7A36]"
     : "text-[#1F2933] hover:text-[#39B54A]"}`;

  return (
    <>
      {/* ================= TOP MARQUEE ================= */}
      <div className="bg-[#1F7A36] text-white text-sm overflow-hidden">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          className="whitespace-nowrap flex gap-12 px-6 py-2 font-medium"
        >
          <span>Welcome to Nassa Elevators — Elevating Excellence Since 1984</span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> info@nassaelevators.co.in
          </span>
          <span className="flex items-center gap-2">
            <FaPhoneAlt /> +91 7982091097
          </span>
          <span>GSTIN : 09DZGPS2539G2ZY</span>
        </motion.div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">

    {/* Logo */}
    <Link to="/">
      <img src={logo} className="h-14 md:h-18" />
    </Link>

    {/* ================= DESKTOP MENU ================= */}
<ul className="hidden md:flex items-center gap-9 ">
  <li>
    <Link to="/" className={navClass("/")}>
      Home
    </Link>
  </li>

  <DesktopDropdown
  label="About Us"
  active={openDropdown === "about"}
  onOpen={() => setOpenDropdown("about")}
  onClose={() => setOpenDropdown(null)}
>
  {aboutMenu.map((item) => (
    <DropdownItem
      key={item.name}
      to={item.path}
      label={item.name}
    />
  ))}
</DesktopDropdown>


  {/* Services */}
  <DesktopDropdown
    label="Services"
    active={openDropdown === "services"}
    onOpen={() => setOpenDropdown("services")}
    onClose={() => setOpenDropdown(null)}
  >
    {services.map((s) => (
      <DropdownItem key={s.name} to={s.path} label={s.name} />
    ))}
  </DesktopDropdown>

  {/* Products */}
  <DesktopDropdown
    label="Products"
    active={openDropdown === "products"}
    onOpen={() => setOpenDropdown("products")}
    onClose={() => setOpenDropdown(null)}
    wide
  >
    <div className="grid grid-cols-2 gap-6 p-6">
      <div>
        <h4 className="font-semibold text-[#1F7A36] mb-3">Elevators</h4>
        {elevators.map((e) => (
          <Link
            key={e}
            to={`/products/elevators/${e.toLowerCase().replace(/\s+/g, "-")}`}
            className="block text-sm text-[#1F2933] hover:text-[#39B54A]"
          >
            {e}
          </Link>
        ))}
      </div>

      <div>
        <h4 className="font-semibold text-[#1F7A36] mb-3">Escalators</h4>
        <Link
          to="/products/escalators"
          className="text-sm text-[#1F2933] hover:text-[#39B54A]"
        >
          Escalator Systems
        </Link>
      </div>
    </div>
  </DesktopDropdown>

  {/* Modernization */}
  <DesktopDropdown
    label="Modernization"
    active={openDropdown === "modernization"}
    onOpen={() => setOpenDropdown("modernization")}
    onClose={() => setOpenDropdown(null)}
  >
    {modernization.map((m) => (
      <DropdownItem
        key={m}
        to={`/modernization/${m.toLowerCase().replace(/\s+/g, "-")}`}
        label={m}
      />
    ))}
  </DesktopDropdown>

  <li>
    <Link to="/careers" className={navClass("/careers")}>
      Careers
    </Link>
  </li>

  <li>
    <Link to="/gallery" className={navClass("/gallery")}>
      Gallery
    </Link>
  </li>

  <li>
    <Link to="/contact" className={navClass("/contact")}>
      Contact Us
    </Link>
  </li>
</ul>

    {/* CTA + Mobile Toggle */}
    <div className="flex items-center gap-4">
      <Link
        to="/contact"
        className="hidden md:flex items-center gap-2 bg-[#39B54A] text-white px-5 py-2.5 rounded-full font-semibold"
      >
        <FaFileInvoiceDollar /> Get a Quote
      </Link>

      <FaBars
        className="md:hidden text-xl cursor-pointer"
        onClick={() => setMenuOpen(true)}
      />
    </div>

  </div>
</nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto"
            ref={panelRef}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <img src={logo} className="h-10" />
              <FaTimes onClick={() => setMenuOpen(false)} className="text-xl" />
            </div>

            {/* MENU ITEMS */}
            <div className="space-y-2 text-[#1F2933]">

              <MobileItem icon={<FaHome />} title="Home" to="/" />
              <Divider />

             <MobileAccordion
  icon={<FaInfoCircle />}
  title="About Us"
  open={mobileDropdown === "about"}
  onClick={() => toggleMobile("about")}
>
  {aboutMenu.map((item) => (
    <SubItem
      key={item.name}
      to={item.path}
      label={item.name}
    />
  ))}
</MobileAccordion>

<Divider />


              <MobileAccordion
                icon={<FaTools />}
                title="Services"
                open={mobileDropdown === "services"}
                onClick={() => toggleMobile("services")}
              >
                {services.map((s) => (
                  <SubItem key={s.name} to={s.path} label={s.name} />
                ))}
              </MobileAccordion>

              <Divider />

              <MobileAccordion
                icon={<FaIndustry />}
                title="Products"
                open={mobileDropdown === "products"}
                onClick={() => toggleMobile("products")}
              >
                {elevators.map((e) => (
                  <SubItem
                    key={e}
                    to={`/products/elevators/${e.toLowerCase().replace(/\s+/g, "-")}`}
                    label={e}
                  />
                ))}
                <SubItem to="/products/escalators" label="Escalator Systems" />
              </MobileAccordion>

              <Divider />

              <MobileAccordion
                icon={<FaCogs />}
                title="Modernization"
                open={mobileDropdown === "modernization"}
                onClick={() => toggleMobile("modernization")}
              >
                {modernization.map((m) => (
                  <SubItem
                    key={m}
                    to={`/modernization/${m.toLowerCase().replace(/\s+/g, "-")}`}
                    label={m}
                  />
                ))}
              </MobileAccordion>

              <Divider />

              <MobileItem icon={<FaBriefcase />} title="Careers" to="/careers" />
              <MobileItem icon={<FaImages />} title="Gallery" to="/gallery" />
              <MobileItem icon={<FaPhone />} title="Contact Us" to="/contact" />

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ================= REUSABLE ================= */

const Divider = () => <div className="border-t my-2" />;

const MobileItem = ({ icon, title, to }) => (
  <Link
    to={to}
    className="flex items-center gap-3 py-3 text-[15px] font-semibold"
  >
    {icon} {title}
  </Link>
);

const MobileAccordion = ({ icon, title, open, onClick, children }) => (
  <div>
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-3 font-semibold"
    >
      <span className="flex items-center gap-3">
        {icon} {title}
      </span>
      <FaAngleDown className={`transition ${open ? "rotate-180" : ""}`} />
    </button>

    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="pl-8 space-y-3 pb-3 text-sm"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const SubItem = ({ to, label }) => (
  <Link
    to={to}
    className="block py-1.5 text-[#4B5563] hover:text-[#39B54A]"
  >
    {label}
  </Link>
);

const DesktopDropdown = ({
  label,
  active,
  onOpen,
  onClose,
  wide,
  children,
}) => (
  <li
    className="relative"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    <button className="flex items-center gap-1 font-semibold text-sm text-[#1F2933] hover:text-[#39B54A]">
      {label} <FaAngleDown size={12} />
    </button>

    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-full left-0 mt-4 bg-white border rounded-xl shadow-xl ${
            wide ? "w-[420px]" : "w-64"
          }`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </li>
);

const DropdownItem = ({ to, label }) => (
  <Link
    to={to}
    className="block px-4 py-3 text-sm text-[#1F2933] hover:bg-[#F7FAF8] hover:text-[#39B54A]"
  >
    {label}
  </Link>
);
