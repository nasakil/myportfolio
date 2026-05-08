import Marquee from "react-fast-marquee";
const commonSVGClass = "h-8 sm:h-10 md:h-25";
import ReactLogo from "../../assets/icons/react-svgrepo-com.svg";
import PythonLogo from "../../assets/icons/python-svgrepo-com.svg";
import VscodeLogo from "../../assets/icons/vscode-svgrepo-com.svg";
import FigmaLogo from "../../assets/icons/figma-svgrepo-com.svg";
import GitLogo from "../../assets/icons/git-svgrepo-com.svg";
import TailwindLogo from "../../assets/icons/tailwind-svgrepo-com.svg";
import JavascriptLogo from "../../assets/icons/javascript-svgrepo-com.svg";

const techLogos = [
  <img src={ReactLogo} className={commonSVGClass} alt="React" />,
  <img src={VscodeLogo} className={commonSVGClass} alt="VS Code" />,
  <img src={FigmaLogo} className={commonSVGClass} alt="Firebase" />,
  <img src={PythonLogo} className={commonSVGClass} alt="Tailwind" />,
  <img src={GitLogo} className={commonSVGClass} alt="Git" />,
  <img src={TailwindLogo} className={commonSVGClass} alt="Python" />,
  <img src={JavascriptLogo} className={commonSVGClass} alt="JavaScript" />,
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2" id="tech-stack">
      <div className="max-w-144.25 text-center" data-aos="fade-up">
        <p className="section-title mb-6">My Tech Stack</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          These are the tools and technologies I use to design and build my projects.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" className="w-full">
        <Marquee pauseOnHover={true} speed={100}>
          <p className="flex items-center pt-4 md:pt-10">
            {techLogos?.map((logo, index) => (
              <span className="ps-5 sm:ps-10 md:ps-25" key={index}>
                {logo}
              </span>
            ))}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default HappyClients;
