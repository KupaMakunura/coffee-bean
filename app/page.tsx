import AppNavBar from "@/components/core/AppNavbar";
import AboutSection from "@/components/home/AboutSection";
import AppFooter from "@/components/home/AppFooter";
import AppMiniFooter from "@/components/home/AppMiniFooter";
import MainSection from "@/components/home/MainSection";

const HomePage = () => {
  return (
    <div className=" w-full">
      <div className="bg-[url('/images/bg.jpeg')] bg-cover bg-center">
        <AppNavBar />
        <MainSection />
      </div>

      <AboutSection />
      <AppFooter />
      <AppMiniFooter />
    </div>
  );
};

export default HomePage;
