import {
  AdobeIcon,
  FigmaIcon,
  FramerIcon,
} from "@/components/common/CustomIcon";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

// --- Count Up Logic ---
const Counter = ({ value, direction = "up" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest);
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const About = () => {
  const skills = [
    {
      name: "Figma",
      category: "Design & Development tool",
      percentage: 100,
      icon: <FigmaIcon />,
    },
    {
      name: "Framer",
      category: "Design & Development tool",
      percentage: 98,
      icon: <FramerIcon />,
    },
    {
      name: "Adobe Creative Suite",
      category: "Design tool",
      percentage: 99,
      icon: <AdobeIcon />,
    },
  ];

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVars}
      className="section-padding-x font-geist bg-white text-[#1a1a1a] overflow-hidden"
    >
      {/* Header with Expanding Line */}
      <div className="flex items-center gap-4 mb-16">
        <motion.h2
          variants={itemVars}
          className="text-3xl md:text-4xl italic font-playfair-display"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-[1px] bg-gray-200 flex-grow origin-left"
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <motion.p
            variants={itemVars}
            className="text-lg md:text-2xl leading-relaxed text-[rgba(42,42,42,0.85)] font-geist max-w-lg"
          >
            My craft lives where design meets code, merging elegant visuals with
            solid engineering to deliver web experiences that feel effortless,
            engaging, and alive on every device.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVars}
            className="flex gap-8 md:gap-16 mt-16 lg:mt-0"
          >
            <div>
              <h3 className="text-5xl md:text-7xl font-playfair-display italic text-[#e85a2a] flex">
                <Counter value={10} />+
              </h3>
              <p className="text-gray-400 font-medium tracking-wide uppercase text-xs mt-3">
                Satisfied Client
              </p>
            </div>
            <div>
              <h3 className="text-5xl md:text-7xl font-playfair-display italic text-[#e85a2a] flex">
                <Counter value={97} />%
              </h3>
              <p className="text-gray-400 font-medium tracking-wide uppercase text-xs mt-3">
                Return clients
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          <motion.p
            variants={itemVars}
            className="text-[rgba(42,42,42,0.7)] text-base md:text-lg font-normal leading-relaxed mb-12 font-geist"
          >
            I'm Seeam Ahmod, a Product & UI/UX Designer who's turning complex
            product problems into clean, user-first solutions. I don't just
            design screens, I craft experiences that balance usability, beauty,
            and business impact. Think of me as the bridge between strategy and
            design, where every pixel has a purpose.
          </motion.p>

          {/* Skill Cards */}
          <div className="space-y-5">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVars}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 group cursor-default"
              >
                <div className="flex items-center gap-5">
                  <div
                    style={{
                      boxShadow: "0 4.364px 4.364px 0 rgba(0, 0, 0, 0.10)",
                    }}
                    className="w-14 h-14 rounded-xl bg-[#2A2A2A] flex items-center justify-center p-3 transition-transform group-hover:scale-110"
                  >
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl tracking-tight">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-400 font-medium">
                      {skill.category}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-bold text-lg text-gray-800">
                    <Counter value={skill.percentage} />%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
