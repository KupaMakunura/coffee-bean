import AppNavBar from "@/components/core/AppNavbar";
import MainSection from "@/components/home/MainSection";

const HomePage = () => {
  return (
    <div className="bg-[url('/images/bg.jpeg')] bg-cover bg-center ">
      <AppNavBar />
      <MainSection />
    </div>
  );
};

export default HomePage;
