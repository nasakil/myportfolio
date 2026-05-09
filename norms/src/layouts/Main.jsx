import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Main = () => {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,       
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <div data-theme={"light"} className="relative">
      <NavBar />
      <Outlet />
      <div className="bg-[#1B3C53]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
