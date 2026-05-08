import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Gallery from "../components/gallery/Gallery";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="pt-36 sm:pt-28">
      <HappyClients />           {/* Tech Stack - right after hero */}
      </div>
      <div className="bg-soft-white pt-30">
        <Profession />           {/* What I Do */}
      </div>
      <div className="bg-soft-white">
        <WorkProcess />
      </div>
      <Portfolio />
      <Testimonial />            {/* Right after Portfolio */}
      <div className="bg-[#1B3C53]">
        <WorkTogether />
      </div>
      <div className="blog-background">
        <Gallery />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
