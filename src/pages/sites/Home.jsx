import About from "@/components/sites/home/About";
import Banner from "@/components/sites/home/Banner";
import Brand from "@/components/sites/home/Brand";
import DesignWork from "@/components/sites/home/DesignWork";
import FAQ from "@/components/sites/home/FAQ";
import Gallary from "@/components/sites/home/Gallary";
import ScroolImage from "@/components/sites/home/ScroolImage";
import Testimonial from "@/components/sites/home/Testimonial";
import ValuableService from "@/components/sites/home/ValuableService";
import { useUserProfile } from "@/hooks/fetchUserProfile";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 pt-20 max-w-[1440px] mx-auto">
      {/* Container spacing adjusted for responsiveness */}
      <div className="flex flex-col gap-16 md:gap-24 lg:gap-[150px]">
        {/* Added scroll-mt-32 to all sections to prevent navbar overlap on scroll */}
        <section id="home" className="scroll-mt-32">
          <Banner />
        </section>

        <ScroolImage />

        <Brand />

        <About />

        <section id="services" className="scroll-mt-32">
          <ValuableService />
        </section>

        <section id="works" className="scroll-mt-32">
          <Gallary />
        </section>

        <section id="testimonials" className="scroll-mt-32">
          <Testimonial />
        </section>

        <FAQ />

        <section id="contact" className="scroll-mt-32">
          <DesignWork />
        </section>
      </div>
    </div>
  );
};

export default Home;
