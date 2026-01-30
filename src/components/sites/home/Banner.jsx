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
      className="section-padding-top px-4 sm:px-6 md:px-10 lg:px-20"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center items-center gap-6 md:gap-8 text-center">
        {/* Social Proof */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white/50 backdrop-blur-sm p-3 rounded-2xl "
        >
          <img src={People} alt="People" className="h-10 w-auto sm:h-12" />
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Rating
                  key={i}
                  className="inline-block w-4 h-4 text-[#E64A19]"
                />
              ))}
              <span className="bg-[#E64A19] px-2.5 py-0.5 text-white font-medium rounded-full text-[10px] sm:text-xs">
                4.9
              </span>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm font-medium">
              10+ Scaled Brands
            </p>
          </div>
        </motion.div>

        {/* Headline Section */}
        <div className="flex flex-col items-center gap-3 sm:gap-6 w-full">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6"
          >
            <img
              src={Shadin}
              alt="Shadin"
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            />
            <h1 className="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-geist text-Secondary leading-[1] tracking-tighter font-medium">
              I’m Seeam
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6 w-full"
          >
            <span className="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-playfair-display italic text-Secondary leading-[1] tracking-tighter">
              Product
            </span>
            <motion.img
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              src={Sky}
              alt="Sky"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
            />
            <span className="text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-playfair-display italic text-Secondary leading-[1] tracking-tighter">
              Designer
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-[300px] sm:max-w-[450px] md:max-w-[600px] text-gray-600 text-sm sm:text-base md:text-xl font-medium leading-[1.6] mt-4"
          >
            Design subscription, made for those who move fast and scale faster.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(230, 74, 25, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-Primary flex justify-center items-center gap-2 text-white text-base sm:text-lg font-medium transition-all shadow-lg hover:shadow-xl"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Schedule className="w-5 h-5" />
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
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-white text-Secondary text-base sm:text-lg font-medium flex justify-center items-center gap-2 border border-transparent hover:border-neutral-200 transition-all"
            onClick={() => {
              const element = document.getElementById("works");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
