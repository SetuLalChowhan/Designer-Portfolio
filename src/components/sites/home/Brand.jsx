import React from 'react';
import Marquee from "react-fast-marquee";

// Note: Ensure these paths match your local folder structure
import Brand1 from "@/assets/images/b1.png";
import Brand2 from "@/assets/images/b2.png";
import Brand3 from "@/assets/images/b3.png";

const Brand = () => {
  // Array of brand logos for cleaner mapping
  const brands = [
    { id: 1, src: Brand1, alt: "Brand Logo 1" },
    { id: 2, src: Brand2, alt: "Brand Logo 2" },
    { id: 3, src: Brand3, alt: "Brand Logo 3" },
    { id: 4, src: Brand1, alt: "Brand Logo 4" },
    { id: 5, src: Brand2, alt: "Brand Logo 5" },
    { id: 6, src: Brand3, alt: "Brand Logo 6" },
  ];

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Text */}
        <div className="text-center mb-10">
          <p className="text-[rgba(42,42,42,0.75)] text-lg font-medium tracking-tight">
            Trusted by teams and founders around the world
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden">
          <Marquee 
            gradient={true} 
            gradientColor="white" 
            gradientWidth={100} 
            speed={40}
            pauseOnHover={true}
          >
            <div className="flex items-center gap-20 pr-20">
              {brands.map((brand) => (
                <div key={brand.id} className="flex-shrink-0">
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="h-10 md:h-12 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale brightness-0"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Brand;