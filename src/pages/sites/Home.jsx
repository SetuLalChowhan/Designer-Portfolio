import Banner from "@/components/sites/home/Banner";
import ScroolImage from "@/components/sites/home/ScroolImage";
import { useUserProfile } from "@/hooks/fetchUserProfile";

const Home = () => {
  return (
    <div className="flex flex-col gap-20 pt-20">
      <div className=" flex flex-col gap-[150px]">
        <Banner />
        <ScroolImage />
      </div>
    </div>
  );
};

export default Home;
