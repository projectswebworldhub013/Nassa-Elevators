// src/components/FloatingButtons.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Headphones, X } from "lucide-react";
import { FaMailBulk, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">

      {/* Buttons when open */}
      <AnimatePresence>
        {open && (
          <>
            {/* Call Button */}
            <motion.a
              href="tel:+918005661797"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 flex items-center justify-center rounded-full
                         bg-white text-[#374151]
                         shadow-[0_8px_20px_rgba(0,0,0,0.1)]
                         hover:bg-[#F3F4F6]
                         hover:scale-110 transition-all"
              title="Call Now"
            >
              <Phone size={22} />
            </motion.a>

            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/+918005661797"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className="w-12 h-12 flex items-center justify-center rounded-full
                         bg-[#0eb44b]
                         shadow-[0_8px_20px_rgba(0,0,0,0.1)]
                         hover:bg-[#F3F4F6]
                         hover:scale-110 transition-all"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={22} className="text-[#ffffff] hover:text-green-600" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer w-16 h-16 flex items-center justify-center
                   rounded-full bg-[#1F2937]
                   text-white
                   shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                   hover:scale-110 transition-transform"
      >
        {open ? (
          <X size={26} className="text-white" />
        ) : (
          <FaMailBulk size={26} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default FloatingButtons;
