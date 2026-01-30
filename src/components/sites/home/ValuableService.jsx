import React from "react";
import { motion } from "framer-motion";
import { Figma, UserCircle, Framer, Star } from "lucide-react";

const services = [
  {
    title: "Product Design",
    description:
      "Designing stylish, user-centric layouts that embody your brand and guide visitors smoothly.",
    icon: <Figma className="w-6 h-6 text-white/80" />,
  },
  {
    title: "UX Consultant",
    description:
      "Building accessible React interfaces with Tailwind to deliver fluid visuals on each device.",
    icon: <UserCircle className="w-6 h-6 text-white/80" />,
  },
  {
    title: "Framer Design",
    description:
      "Integrating Framer CMS or WordPress, enabling content updates fast through a visual editor.",
    icon: <Framer className="w-6 h-6 text-white/80" />,
  },
  {
    title: "Landing Page Design",
    description:
      "Optimizing code, images, and markup to boost search rankings and keep pages loading swift.",
    icon: <Star className="w-6 h-6 text-white/80" />,
  },
];

const ValuableService = () => {
  // Container for staggered entrance
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Professional slide-up with custom cubic bezier
  const itemVars = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
    },
  };

  return (
    <section className="bg-[#2A2A2A] py-20 px-4 md:px-10 lg:px-20 font-geist overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVars}
        className="text-center mb-16 md:mb-24"
      >
        <motion.div
          variants={itemVars}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a] animate-pulse"></span>
          <span className="text-[#e85a2a] text-sm font-bold uppercase tracking-[0.3em]">
            Services
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a] animate-pulse"></span>
        </motion.div>

        <motion.h2
          variants={itemVars}
          className="text-4xl md:text-6xl lg:text-7xl text-white font-medium mb-6 md:mb-8 tracking-tight"
        >
          Valuable{" "}
          <span className="font-playfair-display italic text-[#e85a2a]">
            Services
          </span>
        </motion.h2>

        <motion.p
          variants={itemVars}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
        >
          My expert areas that create value to my clients desires
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVars}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVars}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="group relative bg-[#2E2E2E] p-8 md:p-12 rounded-[30px] md:rounded-[40px] border border-white/5 cursor-pointer overflow-hidden"
          >
            {/* Hover Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e85a2a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Box */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.1 }}
              className="w-14 h-14 bg-[#262626] border border-white/10 rounded-2xl flex items-center justify-center mb-8 md:mb-10 shadow-xl group-hover:border-[#e85a2a]/40 group-hover:shadow-[#e85a2a]/10 transition-all duration-300"
            >
              {service.icon}
            </motion.div>

            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4 md:mb-5 tracking-tight group-hover:text-[#e85a2a] transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light group-hover:text-gray-300 transition-colors duration-300">
              {service.description}
            </p>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#e85a2a] group-hover:w-full transition-all duration-500 ease-in-out" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ValuableService;
