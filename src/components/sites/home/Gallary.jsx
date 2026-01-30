import React from "react";
import { motion } from "framer-motion";
import GallaryImage from "@/assets/images/g1.png";
import GallaryImage2 from "@/assets/images/g2.png";
import GallaryImage3 from "@/assets/images/g3.png";
import GallaryImage4 from "@/assets/images/g4.png";

const projects = [
  { id: 1, title: "Project 1", category: "Product Design", src: GallaryImage },
  { id: 2, title: "Project 2", category: "Product Design", src: GallaryImage2 },
  { id: 3, title: "Project 3", category: "Product Design", src: GallaryImage3 },
  { id: 4, title: "Project 4", category: "Product Design", src: GallaryImage4 },
];

const Gallary = () => {
  // Entrance Animations
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="section-padding-x  bg-white font-geist">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVars}
        className="text-center mb-16"
      >
        <motion.div
          variants={itemVars}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a] animate-pulse"></span>
          <span className="text-[#e85a2a] text-sm font-bold uppercase tracking-[0.3em]">
            Gallery
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e85a2a] animate-pulse"></span>
        </motion.div>

        <motion.h2
          variants={itemVars}
          className="text-5xl md:text-7xl text-[#1a1a1a] font-medium mb-6 tracking-tight"
        >
          Visit my{" "}
          <span className="font-playfair-display italic text-[#e85a2a]">
            Museum
          </span>
        </motion.h2>

        <motion.p
          variants={itemVars}
          className="text-[rgba(42,42,42,0.6)] text-lg max-w-2xl mx-auto leading-relaxed"
        >
          I specialize in creating thoughtful and impactful products,
          collaborating with startups and leading brands.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVars}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVars}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100 ">
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-[0.22, 1, 0.36, 1] group-hover:scale-105"
              />

              {/* The "Open" circle overlay */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-28 h-28 bg-[#e85a2a] rounded-full flex flex-col items-center justify-center text-white font-medium shadow-2xl transition-transform duration-500 group-hover:scale-100 group-hover:rotate-0"
                >
                  <span className="text-lg">Open</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Project Info */}
            <div style={{boxShadow:"0 4px 37.3px 0 rgba(0, 0, 0, 0.05)"}} className="flex justify-between items-center mt-6 p-5 rounded-[12px]">
              <h3 className="text-2xl font-semibold text-[#1a1a1a] tracking-tight">
                {project.title}
              </h3>
              <span className="text-[rgba(42,42,42,0.75)] text-sm font-medium tracking-wide uppercase">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center mt-24"
      >
        <button className="bg-[#e85a2a] text-white px-12 py-5 rounded-full font-bold text-lg transition-all hover:bg-[#cf4d21] hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(232,90,42,0.2)]">
          View more projects
        </button>
      </motion.div>
    </section>
  );
};

export default Gallary;
