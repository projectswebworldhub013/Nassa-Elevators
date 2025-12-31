import {
  FaUsers,
  FaHome,
  FaBoxes,
  FaHeartbeat,
  FaTruckLoading,
  FaCar,
  FaEye,
  FaBolt,
  FaShieldAlt,
  FaCogs,
  FaClock,
  FaTools,
} from "react-icons/fa";

// IMAGES
import passengerElevator from "../assets/images/s5.jpg";
import homeElevator from "../assets/images/s5.jpg";
import dumbwaiterElevator from "../assets/images/s5.jpg";
import stretcherElevator from "../assets/images/s5.jpg";
import goodsElevator from "../assets/images/s5.jpg";
import automobileElevator from "../assets/images/s5.jpg";
import observationElevator from "../assets/images/s5.jpg";

export const productsData = [
  {
    id: 1,
    path: "/products/passenger-elevator",
    image: passengerElevator,
    title: "Passenger Elevator",
    shortDesc:
      "Smooth and reliable passenger elevators ensuring safe, quiet, and efficient daily vertical transportation.",
    longDesc:
      "Passenger elevators by NASSA Elevators are thoughtfully engineered to deliver superior ride comfort, safety, and operational efficiency in residential and commercial buildings. Equipped with advanced control systems, precision-engineered motors, and modern cabin aesthetics, these elevators ensure smooth acceleration, accurate leveling, and quiet performance. Designed to handle varying passenger loads efficiently, they contribute to reduced energy consumption while enhancing overall building functionality, convenience, and long-term value.",
    stats: [
      { icon: <FaUsers />, label: "High Passenger Capacity" },
      { icon: <FaBolt />, label: "Energy Efficient Drive" },
      { icon: <FaShieldAlt />, label: "Advanced Safety Systems" },
      { icon: <FaCogs />, label: "Smooth & Silent Operation" },
      { icon: <FaClock />, label: "Fast & Reliable Performance" },
      { icon: <FaTools />, label: "Low Maintenance Design" },
    ],
  },

  {
    id: 2,
    path: "/products/home-elevator",
    image: homeElevator,
    title: "Home Elevator",
    shortDesc:
      "Compact residential elevators designed for comfort, accessibility, and elegant home integration.",
    longDesc:
      "Home elevators from NASSA Elevators are designed to provide effortless mobility within modern residences while maintaining aesthetics and comfort. With compact layouts, quiet operation, and customizable cabin finishes, these elevators seamlessly blend with interior spaces. They significantly improve accessibility for elderly family members and individuals with mobility challenges while maintaining safety, energy efficiency, and minimal structural impact on the home environment.",
    stats: [
      { icon: <FaHome />, label: "Residential Friendly Design" },
      { icon: <FaBolt />, label: "Low Power Consumption" },
      { icon: <FaShieldAlt />, label: "Child & Elder Safe" },
      { icon: <FaCogs />, label: "Compact Space Saving" },
      { icon: <FaClock />, label: "Quick Installation Time" },
      { icon: <FaTools />, label: "Easy Service Access" },
    ],
  },

  {
    id: 3,
    path: "/products/dumbwaiter-elevator",
    image: dumbwaiterElevator,
    title: "Dumbwaiter Elevator",
    shortDesc:
      "Compact dumbwaiter elevators for efficient movement of goods, food, and documents.",
    longDesc:
      "NASSA dumbwaiter elevators are purpose-built for the fast, secure, and hygienic transportation of small loads between floors. Widely used in hotels, restaurants, hospitals, and offices, these elevators reduce manual handling, improve operational efficiency, and enhance workplace safety. Their compact design, smooth operation, and reliable performance make them ideal for frequent, repetitive transportation tasks in demanding environments.",
    stats: [
      { icon: <FaBoxes />, label: "Perfect for Small Loads" },
      { icon: <FaBolt />, label: "Fast Vertical Movement" },
      { icon: <FaShieldAlt />, label: "Secure Load Handling" },
      { icon: <FaCogs />, label: "Compact Mechanism" },
      { icon: <FaClock />, label: "Time Saving Operation" },
      { icon: <FaTools />, label: "Minimal Maintenance" },
    ],
  },

  {
    id: 4,
    path: "/products/stretcher-elevator",
    image: stretcherElevator,
    title: "Stretcher Elevator",
    shortDesc:
      "Hospital-grade elevators ensuring smooth, safe, and reliable patient transportation.",
    longDesc:
      "Stretcher elevators by NASSA Elevators are engineered specifically for healthcare environments where reliability and safety are critical. Featuring spacious cabins, smooth leveling accuracy, and emergency-ready systems, they enable the safe transportation of patients, stretchers, medical staff, and equipment. Their vibration-free operation and precise control ensure patient comfort while meeting stringent hospital safety and operational standards.",
    stats: [
      { icon: <FaHeartbeat />, label: "Medical Grade Design" },
      { icon: <FaUsers />, label: "Spacious Cabin Layout" },
      { icon: <FaShieldAlt />, label: "Emergency Safety Systems" },
      { icon: <FaCogs />, label: "Smooth Ride Quality" },
      { icon: <FaClock />, label: "Reliable Emergency Response" },
      { icon: <FaTools />, label: "Easy Service & Inspection" },
    ],
  },

  {
    id: 5,
    path: "/products/goods-elevator",
    image: goodsElevator,
    title: "Goods Elevator",
    shortDesc:
      "Heavy-duty elevators designed for safe and efficient industrial material handling.",
    longDesc:
      "Goods elevators from NASSA Elevators are built to withstand demanding industrial and commercial environments. Designed with reinforced structures, powerful drive systems, and advanced safety features, they ensure stable and efficient vertical transportation of heavy materials. Ideal for factories, warehouses, and malls, these elevators enhance logistics efficiency while maintaining safety, durability, and long-term operational reliability.",
    stats: [
      { icon: <FaTruckLoading />, label: "High Load Capacity" },
      { icon: <FaShieldAlt />, label: "Industrial Safety Compliance" },
      { icon: <FaBolt />, label: "Powerful Drive System" },
      { icon: <FaCogs />, label: "Rugged Construction" },
      { icon: <FaClock />, label: "Continuous Duty Ready" },
      { icon: <FaTools />, label: "Long Service Life" },
    ],
  },

  {
    id: 6,
    path: "/products/automobile-elevator",
    image: automobileElevator,
    title: "Automobile Elevator",
    shortDesc:
      "Advanced automobile elevators enabling vertical vehicle movement with maximum safety.",
    longDesc:
      "Automobile elevators by NASSA Elevators provide an innovative solution for vertical vehicle transportation in residential and commercial buildings. Designed with reinforced platforms, precise control systems, and high load-bearing capacity, they optimize parking space while ensuring smooth and secure vehicle handling. These elevators improve convenience, enhance property value, and meet modern urban infrastructure demands.",
    stats: [
      { icon: <FaCar />, label: "Vehicle Safe Platform" },
      { icon: <FaShieldAlt />, label: "Advanced Locking Safety" },
      { icon: <FaBolt />, label: "Smooth Vertical Travel" },
      { icon: <FaCogs />, label: "Heavy-Duty Engineering" },
      { icon: <FaClock />, label: "Quick Parking Access" },
      { icon: <FaTools />, label: "High Durability Build" },
    ],
  },

  {
    id: 7,
    path: "/products/observation-elevator",
    image: observationElevator,
    title: "Observation Elevator",
    shortDesc:
      "Elegant glass elevators offering panoramic views with premium ride comfort.",
    longDesc:
      "Observation elevators from NASSA Elevators blend luxury aesthetics with advanced engineering. Featuring glass cabins and panoramic visibility, they enhance the architectural appeal of malls, hotels, and commercial spaces. Along with visual elegance, these elevators deliver smooth, safe, and quiet vertical transportation, creating an impressive experience while maintaining high safety and performance standards.",
    stats: [
      { icon: <FaEye />, label: "Panoramic Glass Design" },
      { icon: <FaBolt />, label: "Silent Drive Technology" },
      { icon: <FaShieldAlt />, label: "Premium Safety Systems" },
      { icon: <FaCogs />, label: "Luxury Cabin Finish" },
      { icon: <FaClock />, label: "Smooth Ride Experience" },
      { icon: <FaTools />, label: "Precision Engineering" },
    ],
  },
];

export default productsData;
