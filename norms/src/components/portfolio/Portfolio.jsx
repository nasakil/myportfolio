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
    paragraph: "Observations: From what I observed so far, I noticed that they are correlated to some companies that I recognize which I didnt know. Vitro on the other hand is a company that own and handle components for a data center. When I went through their data center, it was filled with security measures such as biometric scanners, CCTV cameras, and security personnel to ensure the safety and integrity of the data stored within their servers. They also own UPS systems to provide backup power in case of electrical outages, ensuring continuous operation of their data center.",
    paragraph2: "Learnings: The PLDT have their own databases and servers to handle their services. The difference between their data center and cloud services is that PLDT is for internet providers while Vitro is for businesses and companies that need data storage and management. Vitro Data Center also has multiple branches that is away from high risk hazards or disaster, which made them prepared and cautious about their data center operations. Overall, the tour provided valuable insights into the telecommunications industry and the critical role that data centers play in supporting modern communication networks.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "Experience",
    title: "JAIROSOFT Company Tour",
    description:
      "Explored JAIROSOFT's innovative workspace and learned about their software development processes and company culture during an engaging tour.",
    paragraph: "Observations: From what I noticed in first glance, I wasnt expecting a small building to be a software company. When I entered the building, I saw that they have a very organized and clean working space. Their workstations are equipped with multiple monitors and ergonomic chairs, promoting productivity and comfort for their employees. The office layout encourages collaboration, with open spaces and meeting rooms designed for team discussions and brainstorming sessions. They also own an application that can help users. And lastly they use AI as a tool to create an application which made me amazed.",
    paragraph2: "Learnings: The Artificial Intelligence wont be able to replace humans as they dont possess human capabilities and that they are only used to make life better. The tour provided valuable insights into the software development industry and highlighted the importance of a positive work environment in fostering creativity and innovation.",
    link: "#!",

  },
  {
    id: 3,
    image: card3,
    category: "Experience",
    title: "Davao City Central Communications and Emergency Response Center Tour",
    description:
      "Visited the Davao City Central Communications and Emergency Response Center to understand their operations in managing emergency responses and public safety communications.",
    paragraph: "Observations: I thought its an emergency response center that only handle 911 calls. But when I entered the center, I saw that they have a very organized and clean working space. Their workstations are equipped with multiple monitors and technologies. I have also noticed that they have a big screen that shows the live CCTV footage around the city which helps them monitor any weather status, disasters or incidents in real-time. They also have a seismology monitoring system that tracks earthquake activities in the region.",
    paragraph2: "Learnings: They also handle non-emergency calls such as traffic updates, public inquiries, and community assistance requests. They have additional responders for each areas that is vulnerable to disasters. They have a reserved vehicle that has all the same equipments just incase their center gets in disaster as well so that they will still be able to take action, report and respond to emergencies.",
  },
  {
    id: 4,
    image: card4,
    category: "Certificates",
    title: "Certificate of Completion - Davao Educational Tour",
    description:
      "Awarded for successfully completing the Davao Educational Tour, demonstrating active participation and engagement in learning about local industries and culture.",
    paragraph: "A certificate of completion is a document that recognizes an individual's successful participation in a specific program, course, or activity. It serves as proof that the individual has met the requirements and objectives set forth by the organizing entity. Certificates of completion are often awarded in educational settings, training programs, workshops, and professional development courses.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "UI DESIGN",
    title: "Disbursement Dashboard",
    description:
      "Designed an intuitive disbursement dashboard that simplifies financial tracking and reporting for users, enhancing overall usability and efficiency.",
    paragraph: "A project for my current subject IM101 - Database Systems. The disbursement dashboard is a user interface that provides an overview of financial disbursements within an organization. It is designed to help users track, manage, and analyze disbursement activities in a streamlined and efficient manner.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "Projects",
    title: "CROSSCERT: Web-based Event Management and Certificate Automation Platform",
    description:
      "Developed a web-based platform that streamlines event management and automates certificate generation, improving user experience and operational efficiency.",
    paragraph: "A project for my current subject WS101 - Web Systems and Technologies. We have successfully created a web-based event management and certificate automation platform called CROSSCERT. This platform is designed to streamline the process of organizing events and generating certificates for participants. It offers features such as event registration, scheduling, and automated certificate generation, making it easier for event organizers to manage their events efficiently.",
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
