import Roles from "./Roles";
import { Link } from "react-scroll";

const rolesData = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.",
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="profession"
    >
      <div
        className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto"
        data-aos="fade-right"
      >
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-sm sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in designing user experiences, crafting engaging
            interfaces, and building robust web applications that deliver value
            and usability.
          </p>
          <p className="text-sm sm:text-lg font-normal text-gray-400">
            My approach combines creativity and technical expertise to deliver
            solutions that are both visually appealing and highly functional for
            users.
          </p>
        </div>
        <Link
          to="work-process" smooth={true} duration={500} offset={50}
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          See my process
        </Link>
      </div>
      <div className="flex flex-col">
        {rolesData.map((role, index) => (
          <div key={index} data-aos="fade-left" data-aos-delay={index * 150}>
            <Roles role={role} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profession;
