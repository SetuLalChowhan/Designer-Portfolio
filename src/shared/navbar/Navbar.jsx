import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/images/logo.png";

const navItems = ["Home", "Services", "Works", "Testimonials"];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Hide navbar on scroll down
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (item) => {
    setActiveTab(item);
    setMobileMenuOpen(false);

    const targetId = item.toLowerCase();
    const element = document.getElementById(targetId);

    if (element && window.lenis) {
      // Use Lenis scrollTo for perfect compatibility with smooth scroll
      window.lenis.scrollTo(element, {
        offset: -80, // Your navbar height
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (element) {
      // Fallback if lenis isn't initialized yet
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 md:px-10 py-4 w-full bg-white/80 backdrop-blur-md"
      >
        {/* Logo */}
        <Link to="/" className="z-50">
          <img
            src={Logo}
            alt="Logo"
            className="w-[120px] md:w-[175px] h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div
          style={{ boxShadow: "0 4px 37.3px rgba(0,0,0,0.04)" }}
          className="hidden md:flex bg-white rounded-full px-1.5 py-1.5 border"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative px-6 py-2 text-sm font-medium z-10 ${
                activeTab === item
                  ? "text-[#e85a2a]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeTab === item && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gray-50 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {item}

              {activeTab === item && (
                <motion.span
                  layoutId="active-dot"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#e85a2a] rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("Contact")}
          className="hidden md:block bg-[#e85a2a] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg"
        >
          Get in touch
        </motion.button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen((p) => !p)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 z-[55] bg-white pt-32 flex flex-col items-center gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-4xl font-bold ${
                  activeTab === item
                    ? "text-[#e85a2a] scale-110"
                    : "text-gray-900"
                }`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("Contact")}
              className="mt-10 bg-[#e85a2a] text-white px-10 py-5 rounded-full text-xl font-bold w-full max-w-xs"
            >
              Get in touch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
