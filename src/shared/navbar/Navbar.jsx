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
      window.lenis.scrollTo(element, {
        offset: -80,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Variants for Staggered Mobile Menu Animation
  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
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
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between section-padding-x max-w-[1440px] mx-auto py-4 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 md:border-none"
      >
        {/* Logo */}
        <Link to="/" className="z-[70]">
          <img
            src={Logo}
            alt="Logo"
            className="w-[110px] md:w-[175px] h-auto"
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

        {/* CTA Desktop */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("Contact")}
          className="hidden md:block bg-[#e85a2a] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#e85a2a]/20"
        >
          Get in touch
        </motion.button>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden z-[70] p-2 bg-gray-50 rounded-full border border-gray-100"
          onClick={() => setMobileMenuOpen((p) => !p)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-gray-800" />
          ) : (
            <Menu size={24} className="text-gray-800" />
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[55] bg-white flex flex-col p-8 md:hidden"
          >
            <div className="mt-24 flex flex-col gap-6">
              <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">
                Navigation
              </p>
              {navItems.map((item) => (
                <motion.button
                  variants={itemVariants}
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left text-3xl font-semibold tracking-tight ${
                    activeTab === item ? "text-[#e85a2a]" : "text-gray-900"
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-auto mb-10">
              <button
                onClick={() => scrollToSection("Contact")}
                className="bg-[#e85a2a] text-white px-8 py-4 rounded-2xl text-lg font-bold w-full shadow-xl shadow-[#e85a2a]/30"
              >
                Get in touch
              </button>
              <p className="text-center text-gray-400 text-sm mt-6">
                © 2026 Seeam Design
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
