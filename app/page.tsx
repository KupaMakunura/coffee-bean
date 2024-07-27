import AppNavBar from "@/components/core/AppNavbar";
import AboutSection from "@/components/home/AboutSection";
import MainSection from "@/components/home/MainSection";

const HomePage = () => {
  return (
    <div className="bg-[url('/images/bg.jpeg')] bg-cover bg-center ">
      <AppNavBar />
      <MainSection />
      <AboutSection />
    </div>
  );
};

export default HomePage;
