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
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">What I Build With</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I use these applications and platforms to design and develop my projects.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {techLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-25" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;
