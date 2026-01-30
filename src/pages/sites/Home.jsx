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
      <div className=" flex flex-col gap-[150px]">
        <Banner />
        <ScroolImage />

        <Brand />

        <About />

        <ValuableService />

        <Gallary />

        <Testimonial />

        <FAQ />

        <DesignWork />
      </div>
    </div>
  );
};

export default Home;
