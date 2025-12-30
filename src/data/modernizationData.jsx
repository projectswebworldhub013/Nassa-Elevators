// ================== IMAGE IMPORTS ==================
import gearedImg from "../assets/images/s5.jpg";
import gearlessImg from "../assets/images/s5.jpg";
import hydraulicImg from "../assets/images/s5.jpg";
import escalatorImg from "../assets/images/s5.jpg";

// ================== ICON IMPORTS ==================
import {
  FaCogs,
  FaBolt,
  FaShieldAlt,
  FaTools,
  FaChartLine,
  FaIndustry,
} from "react-icons/fa";

// ================== MODERNIZATION DATA ==================
const modernizationData = [
  {
    id: 1,
    path: "/modernization/geared-elevator",
    image: gearedImg,
    title: "Geared Elevator Modernization",
    shortDescription:
      "Upgrade traditional geared elevator systems with improved efficiency, safety, and operational reliability.",

    about: [
      {
        icon: <FaCogs />,
        text: "Replacement of outdated geared machines with high-performance drive systems.",
      },
      {
        icon: <FaBolt />,
        text: "Improved energy efficiency through optimized motor and control technology.",
      },
      {
        icon: <FaShieldAlt />,
        text: "Enhanced safety compliance with modern standards and regulations.",
      },
      {
        icon: <FaTools />,
        text: "Reduced maintenance requirements with upgraded mechanical components.",
      },
      {
        icon: <FaChartLine />,
        text: "Smoother ride quality and improved passenger comfort.",
      },
      {
        icon: <FaIndustry />,
        text: "Ideal for mid-rise commercial and residential buildings.",
      },
    ],

    advantages: [
      "Cost-effective modernization solution",
      "Proven and reliable technology",
      "Improved operational lifespan",
      "Compatible with existing shaft structures",
    ],

    disadvantages: [
      "Higher energy consumption than gearless systems",
      "More mechanical wear over time",
      "Requires periodic lubrication",
      "Slightly higher noise levels",
    ],
  },

  {
    id: 2,
    path: "/modernization/gearless-elevator",
    image: gearlessImg,
    title: "Gearless Elevator Modernization",
    shortDescription:
      "Advanced modernization solution delivering superior efficiency, silent operation, and long-term performance.",

    about: [
      {
        icon: <FaBolt />,
        text: "Integration of permanent magnet synchronous gearless machines.",
      },
      {
        icon: <FaChartLine />,
        text: "Exceptional energy efficiency with regenerative drive systems.",
      },
      {
        icon: <FaShieldAlt />,
        text: "Enhanced safety with intelligent braking and monitoring systems.",
      },
      {
        icon: <FaTools />,
        text: "Minimal mechanical wear due to fewer moving components.",
      },
      {
        icon: <FaIndustry />,
        text: "Ultra-smooth, vibration-free ride experience.",
      },
      {
        icon: <FaCogs />,
        text: "Ideal for high-rise and premium commercial buildings.",
      },
    ],

    advantages: [
      "Lowest energy consumption",
      "Silent and smooth operation",
      "Reduced maintenance cost",
      "Extended equipment lifespan",
    ],

    disadvantages: [
      "Higher initial investment",
      "Requires precise installation expertise",
      "Advanced electronic dependency",
      "Not always suitable for very old shafts",
    ],
  },

  {
    id: 3,
    path: "/modernization/hydraulic-elevator",
    image: hydraulicImg,
    title: "Hydraulic Elevator Modernization",
    shortDescription:
      "Modernize hydraulic elevator systems to improve safety, efficiency, and environmental compliance.",

    about: [
      {
        icon: <FaTools />,
        text: "Upgradation of hydraulic power units and control valves.",
      },
      {
        icon: <FaShieldAlt />,
        text: "Improved safety with advanced control and emergency systems.",
      },
      {
        icon: <FaBolt />,
        text: "Optimized power usage with modern pump and motor assemblies.",
      },
      {
        icon: <FaCogs />,
        text: "Enhanced oil management and leak prevention solutions.",
      },
      {
        icon: <FaIndustry />,
        text: "Best suited for low-rise buildings and freight elevators.",
      },
      {
        icon: <FaChartLine />,
        text: "Improved leveling accuracy and ride comfort.",
      },
    ],

    advantages: [
      "High load-handling capability",
      "Simple and robust design",
      "Lower installation complexity",
      "Reliable for industrial usage",
    ],

    disadvantages: [
      "Higher energy consumption",
      "Slower speed compared to traction elevators",
      "Requires hydraulic oil maintenance",
      "Limited suitability for high-rise buildings",
    ],
  },

  {
    id: 4,
    path: "/modernization/escalator-modernization",
    image: escalatorImg,
    title: "Escalator Modernization",
    shortDescription:
      "Comprehensive escalator modernization solutions ensuring safety, efficiency, and extended service life.",

    about: [
      {
        icon: <FaShieldAlt />,
        text: "Upgradation of safety components as per latest standards.",
      },
      {
        icon: <FaCogs />,
        text: "Replacement of step chains, handrails, and drive systems.",
      },
      {
        icon: <FaBolt />,
        text: "Energy-saving drives with intelligent speed control.",
      },
      {
        icon: <FaTools />,
        text: "Improved reliability with modernized control systems.",
      },
      {
        icon: <FaIndustry />,
        text: "Suitable for malls, metros, airports, and commercial hubs.",
      },
      {
        icon: <FaChartLine />,
        text: "Reduced downtime and operational interruptions.",
      },
    ],

    advantages: [
      "Enhanced passenger safety",
      "Lower operational costs",
      "Improved energy efficiency",
      "Extended escalator lifespan",
    ],

    disadvantages: [
      "Temporary shutdown during modernization",
      "Initial capital investment required",
      "Requires precise scheduling",
      "Complex installation coordination",
    ],
  },
];

export default modernizationData;
