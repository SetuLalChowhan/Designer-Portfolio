import React from "react";
import { motion } from "framer-motion";
import People from "@/assets/images/people.png";
import { Rating, Schedule } from "@/components/common/CustomIcon";
import Shadin from "@/assets/images/s.png";
import Sky from "@/assets/images/sky.png";

const Banner = () => {
  // Animation variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Smooth "Expo" ease
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="section-padding-top section-padding-x "
    >
      <div className="max-w-[750px] mx-auto flex flex-col justify-center items-center gap-8 text-center">
        {/* Social Proof */}
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <img src={People} alt="People" />
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Rating key={i} className="inline-block" />
              ))}
              <span className="bg-[#E64A19] px-[8px] py-[2px] text-white font-medium rounded-full text-xs">
                4.9
              </span>
            </div>
            <p className="text-gray-500 text-sm">10+ Scaled Brands</p>
          </div>
        </motion.div>

        {/* Headline Section */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <img src={Shadin} alt="Shadin" className="w-16 h-16" />
            <h1 className="text-[88px] font-geist text-Secondary leading-[1] tracking-[-3.08px] font-medium">
              I’m Seeam
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 flex-wrap justify-center"
          >
            <p className="text-[88px] font-playfair-display italic text-Secondary leading-[1] tracking-[-2.22px]">
              Product
            </p>
            <motion.img
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              src={Sky}
              alt="Sky"
              className="w-20"
            />
            <p className="text-[88px] font-playfair-display italic text-Secondary leading-[1] tracking-[-2.22px]">
              Designer
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-[500px] text-gray-600 text-lg font-medium leading-[1.5]"
          >
            Design subscription, made for those who move fast and scale faster.
          </motion.p>
        </div>

        {/* Buttons */}
        {/* Buttons Section Update */}
        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(230, 74, 25, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-[30px] py-[16px] rounded-full bg-Primary flex items-center gap-2 text-white text-lg font-medium transition-all"
          >
            <Schedule />
            <span>Book a schedule</span>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f3f4f6",
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)" }}
            className="px-[30px] py-[16px] rounded-full bg-white text-Secondary text-lg font-medium flex items-center gap-2 border border-transparent hover:border-neutral-200 transition-all"
          >
            View projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
