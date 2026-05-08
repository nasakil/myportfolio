import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Projects = ({ data }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out", willChange: "transform" }}
      className="w-full rounded-lg overflow-hidden hover:shadow-2xl duration-300 shadow-gray-300 border border-gray-200 flex flex-col h-full"
    >
      <div className="overflow-hidden h-70 shrink-0">
        <img
          src={data?.image}
          alt={`${data?.title} image`}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="p-4 xs:p-8 flex flex-col flex-1">
        <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">
          {data?.category}
        </p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap flex-1"
        >
          {data?.description}
        </p>
        <Link
          to={`/portfolio/${data.id}`}
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full flex items-center justify-center"
        >
          Read More
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;