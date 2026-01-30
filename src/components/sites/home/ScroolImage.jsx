import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image1 from "@/assets/images/p1.png";
import Image2 from "@/assets/images/p2.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ScroolImage = () => {
  const targetRef = useRef(null);
  const images = [Image1, Image2, Image1, Image2, Image1, Image2];

  // --- Desktop Scroll Logic ---
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const xTranslation = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const x = useSpring(xTranslation, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  return (
    <>
      {/* --- Desktop Version: Scroll Trigger (Visible on md and up) --- */}
      <section
        ref={targetRef}
        className="hidden md:block relative h-[300vh] bg-transparent"
      >
        <div className="sticky top-20 flex items-start overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 px-[10vw]">
            {images.map((image, index) => (
              <motion.div
                key={`desktop-${index}`}
                className="group relative h-[500px] w-[750px] flex-shrink-0 overflow-hidden rounded-[40px] shadow-2xl"
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay Gradient for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Mobile Version: Swiper Slider (Visible on small screens only) --- */}
      <section className="block md:hidden w-full section-padding py-10">
        <div className="w-full max-w-[1440px] mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={20}
            centeredSlides={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            slidesPerView={1}
            className="mySwiper w-full !pb-14"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={`mobile-${index}`}
                className="flex justify-center items-center"
              >
                <div className="relative group w-full h-[300px] sm:h-[400px] overflow-hidden rounded-[30px] shadow-xl">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Global styles for dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ccc;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #ff5733;
          width: 24px;
          border-radius: 4px;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default ScroolImage;
