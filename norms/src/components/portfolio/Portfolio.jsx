import card1 from "../../assets/images/portfolio-images/PLDT.jpg";
import card2 from "../../assets/images/portfolio-images/JAIROSOFT2.jpg";
import card3 from "../../assets/images/portfolio-images/CCAERC.jpg";
import card4 from "../../assets/images/portfolio-images/CERTIFICATE.jpg";
import card5 from "../../assets/images/portfolio-images/121EAST.png";
import card6 from "../../assets/images/portfolio-images/WSCROSSCERT.jpg";
import Projects from "./Projects";

export const projectData = [
  {
    id: 1,
    image: card1,
    category: "Experience",
    title: "PLDT and Vitro Inc. Tour",
    description:
      "Participated in an immersive tour of PLDT and Vitro Inc. facilities, gaining insights into cutting-edge telecommunications technology and infrastructure.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "Experience",
    title: "JAIROSOFT Company Tour",
    description:
      "Explored JAIROSOFT's innovative workspace and learned about their software development processes and company culture during an engaging tour.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "Experience",
    title: "Davao City Central Communications and Emergency Response Center Tour",
    description:
      "Visited the Davao City Central Communications and Emergency Response Center to understand their operations in managing emergency responses and public safety communications.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "Certificates",
    title: "Certificate of Completion - Davao Educational Tour",
    description:
      "Awarded for successfully completing the Davao Educational Tour, demonstrating active participation and engagement in learning about local industries and culture.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "UI DESIGN",
    title: "Disbursement Dashboard",
    description:
      "Designed an intuitive disbursement dashboard that simplifies financial tracking and reporting for users, enhancing overall usability and efficiency.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "Projects",
    title: "CROSSCERT: Web-based Event Management and Certificate Automation Platform",
    description:
      "Developed a web-based platform that streamlines event management and automates certificate generation, improving user experience and operational efficiency.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, certificates and history showcasing my overall experience.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
         <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
