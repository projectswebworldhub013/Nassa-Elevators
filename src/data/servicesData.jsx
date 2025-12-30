import {
  FaTools,
  FaSyncAlt,
  FaShieldAlt,
  FaCogs,
  FaClock,
  FaChartLine,
  FaWrench,
  FaLaptopCode,
  FaHeadset,
  FaIndustry,
  FaClipboardCheck,
  FaRegCalendarAlt,
} from "react-icons/fa";

/* IMAGES */
import repairImg from "../assets/images/repair2.jpg";
import technicalImg from "../assets/images/technical.jpg";
import maintenanceImg from "../assets/images/maintenance.jpg";

const servicesData = [
  /* -------------------------------------------------- */
  /* 1. REPAIRS & UPGRADES */
  /* -------------------------------------------------- */
  {
    id: 1,
    path: "/services/repairs-upgrades",
    image: repairImg,
    title: "Repairs & Upgrades",
    shortDescription:
      "Comprehensive elevator repair and modernization solutions to enhance safety, performance, and lifespan.",
    longDescription:
      "Nassa Elevators provides end-to-end repair and upgrade solutions for elevators and escalators of all makes and capacities. Our approach focuses on restoring optimal performance, improving safety compliance, and extending the life of aging systems. From minor component replacements to complete modernization projects, we ensure minimal downtime and maximum reliability. Our upgrade solutions are designed to meet current codes, improve energy efficiency, and enhance passenger comfort while offering a cost-effective alternative to full replacement.",

    faqs: [
      {
        question: "Do you repair elevators of other brands?",
        answer:
          "Yes. Nassa Elevators repairs and upgrades elevators and escalators of all makes, including legacy and imported systems, following a detailed technical audit.",
      },
      {
        question: "What type of upgrades do you offer?",
        answer:
          "We offer control system upgrades, door automation improvements, safety device enhancements, cabin modernization, and energy-efficient drive upgrades.",
      },
      {
        question: "Is modernization cheaper than replacement?",
        answer:
          "In most cases, yes. Upgrading key components significantly improves performance and safety at a fraction of the cost of a new installation.",
      },
      {
        question: "How long does an upgrade project take?",
        answer:
          "Timelines depend on scope, but most upgrade projects are completed within planned shutdown windows to minimize inconvenience.",
      },
      {
        question: "Will upgraded elevators comply with current safety norms?",
        answer:
          "Absolutely. All repairs and upgrades are executed in compliance with applicable safety standards and statutory requirements.",
      },
    ],

    quickPoints: [
      {
        icon: <FaWrench />,
        label: "Multi-brand repair expertise",
      },
      {
        icon: <FaSyncAlt />,
        label: "Modernization & retrofitting",
      },
      {
        icon: <FaShieldAlt />,
        label: "Enhanced safety compliance",
      },
      {
        icon: <FaChartLine />,
        label: "Improved performance & efficiency",
      },
      {
        icon: <FaClock />,
        label: "Reduced downtime execution",
      },
      {
        icon: <FaCogs />,
        label: "Extended equipment life",
      },
    ],
  },

  /* -------------------------------------------------- */
  /* 2. TECHNICAL SERVICES */
  /* -------------------------------------------------- */
  {
    id: 2,
    path: "/services/technical",
    image: technicalImg,
    title: "Technical Services",
    shortDescription:
      "Expert technical support, diagnostics, and consultancy for elevators and escalators.",
    longDescription:
      "Our Technical Services division provides specialized support covering diagnostics, troubleshooting, system audits, and engineering consultancy. Backed by decades of industry experience, our experts analyze complex technical challenges and deliver precise, actionable solutions. Whether it is fault analysis, performance optimization, compliance validation, or system redesign, Nassa Elevators ensures technically sound outcomes that enhance safety, reliability, and operational efficiency.",

    faqs: [
      {
        question: "What does technical consultancy include?",
        answer:
          "It includes system audits, fault diagnosis, performance analysis, compliance checks, and recommendations for improvement or upgrades.",
      },
      {
        question: "Can you support ongoing operational issues?",
        answer:
          "Yes. Our technical team assists with recurring faults, system inefficiencies, and complex operational challenges.",
      },
      {
        question: "Do you provide documentation and reports?",
        answer:
          "Detailed technical reports, audit findings, and solution roadmaps are provided after every engagement.",
      },
      {
        question: "Is this service available for old installations?",
        answer:
          "Yes. We specialize in evaluating and supporting aging and underperforming elevator systems.",
      },
      {
        question: "How does technical service improve safety?",
        answer:
          "By identifying hidden risks, non-compliance issues, and performance gaps before they escalate into failures.",
      },
    ],

    quickPoints: [
      {
        icon: <FaLaptopCode />,
        label: "Advanced diagnostics",
      },
      {
        icon: <FaIndustry />,
        label: "System audit & analysis",
      },
      {
        icon: <FaClipboardCheck />,
        label: "Compliance verification",
      },
      {
        icon: <FaCogs />,
        label: "Performance optimization",
      },
      {
        icon: <FaHeadset />,
        label: "Expert technical support",
      },
      {
        icon: <FaChartLine />,
        label: "Data-driven recommendations",
      },
    ],
  },

  /* -------------------------------------------------- */
  /* 3. MAINTENANCE PROGRAM */
  /* -------------------------------------------------- */
  {
    id: 3,
    path: "/services/maintenance",
    image: maintenanceImg,
    title: "Maintenance Program",
    shortDescription:
      "Structured preventive maintenance programs ensuring safety, uptime, and long-term reliability.",
    longDescription:
      "Nassa Elevators’ Maintenance Programs are designed to ensure uninterrupted operation, passenger safety, and optimized lifecycle cost. Our preventive and predictive maintenance strategies reduce breakdowns, improve uptime, and protect critical components. With scheduled inspections, systematic servicing, and responsive support, we help clients maintain peak performance while complying with statutory safety requirements.",

    faqs: [
      {
        question: "What types of maintenance programs are available?",
        answer:
          "We offer comprehensive, preventive, and customized maintenance programs based on usage, environment, and system age.",
      },
      {
        question: "How does preventive maintenance reduce costs?",
        answer:
          "By identifying wear and potential failures early, costly emergency repairs and downtime are avoided.",
      },
      {
        question: "Is maintenance available nationwide?",
        answer:
          "Yes. Our pan-India service network ensures consistent support and quick response times.",
      },
      {
        question: "Do you provide emergency support?",
        answer:
          "Emergency breakdown support is available as part of our maintenance contracts.",
      },
      {
        question: "Will maintenance improve elevator lifespan?",
        answer:
          "Regular maintenance significantly extends equipment life and maintains consistent performance.",
      },
    ],

    quickPoints: [
      {
        icon: <FaRegCalendarAlt />,
        label: "Scheduled inspections",
      },
      {
        icon: <FaShieldAlt />,
        label: "Safety-first approach",
      },
      {
        icon: <FaTools />,
        label: "Preventive maintenance",
      },
      {
        icon: <FaClock />,
        label: "High uptime assurance",
      },
      {
        icon: <FaCogs />,
        label: "Component life protection",
      },
      {
        icon: <FaChartLine />,
        label: "Lower ownership cost",
      },
    ],
  },
];

export default servicesData;