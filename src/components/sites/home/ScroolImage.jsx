import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image1 from "@/assets/images/p1.png";
import Image2 from "@/assets/images/p2.png";

const ScroolImage = () => {
  const targetRef = useRef(null);
  const images = [Image1, Image2, Image1, Image2, Image1, Image2];

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate movement
  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  // This adds the "Physical" weight to the scroll
  const x = useSpring(xTranslation, {
    stiffness: 50, // Lower stiffness = more "flowy"
    damping: 20,   // Prevents it from bouncing like a rubber band
    mass: 0.5      // Adds a sense of weight to the images
  });

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-20 flex h-screen items-start overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-[10vw]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative h-[500px] w-[750px] flex-shrink-0 overflow-hidden rounded-[40px]"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img 
                src={image} 
                alt="Project" 
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScroolImage;