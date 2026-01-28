import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/Logo.png";

const navItems = ["Home", "Services", "Works", "Testimonials"];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(navItems[0]);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 w-full bg-white/80 backdrop-blur-md"
    >
      {/* Logo Section */}
      <Link to={`/`} className="flex items-center gap-2">
        <img
          src={Logo}
          alt="Logo"
          className="w-[175px] h-[60px] object-cover"
        />
      </Link>

      {/* Center Navigation Pill */}
      <div
        style={{ boxShadow: "0 4px 37.3px 0 rgba(0, 0, 0, 0.04)" }}
        className="relative flex items-center bg-white rounded-full px-1.5 py-1.5 border border-neutral-100"
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 z-10 ${
              activeTab === item ? "text-Primary" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            {item}
            
            {/* Sliding Pill Background Animation */}
            {activeTab === item && (
              <motion.div
                layoutId="active-pill-bg"
                className="absolute inset-0 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}

            {/* The Dot Animation */}
            {activeTab === item && (
              <motion.div
                layoutId="active-dot"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-Primary rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "var(--primary-hover-color)", // Adjust if you have a hover var
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-Primary text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-orange-200/50"
      >
        Get in touch
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;