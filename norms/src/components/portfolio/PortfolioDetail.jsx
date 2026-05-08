import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectData } from "./Portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.id.toString() === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBack = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("portfolio");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }, 100);
  };

  const isExperience = project?.category?.toLowerCase() === "experience";

  if (!project) return (
    <div className="text-center mt-20">
      <p className="text-gray-400 text-lg">Project not found</p>
      <button onClick={handleBack} className="btn btn-primary mt-4 text-white">
        Go Back
      </button>
    </div>
  );

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">

      {/* Back button */}
      <button
        onClick={handleBack}
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-picto-primary transition-all duration-300 mb-10 group"
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="group-hover:-translate-x-1 transition-all duration-300"
        />
        Back to Portfolio
      </button>

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-sm text-picto-primary uppercase tracking-widest font-medium mb-2">
            {project.category}
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 leading-snug">
            {project.title}
          </h1>
          <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
            {project.description}
          </p>

          {project.paragraph && (
            <div className="border-l-4 border-picto-primary pl-4 mb-5 bg-gray-50 py-3 rounded-r-lg">
              {isExperience && (
                <p className="text-xs text-picto-primary uppercase tracking-wide font-medium mb-1">
                  Observations
                </p>
              )}
              <p className="text-gray-700 leading-relaxed text-sm">
                {project.paragraph}
              </p>
            </div>
          )}

          {project.paragraph2 && (
            <div className="border-l-4 border-picto-primary pl-4 mb-5 bg-gray-50 py-3 rounded-r-lg">
              {isExperience && (
                <p className="text-xs text-picto-primary uppercase tracking-wide font-medium mb-1">
                  Learnings
                </p>
              )}
              <p className="text-gray-700 leading-relaxed text-sm">
                {project.paragraph2}
              </p>
            </div>
          )}

          {project.link && project.link !== "#!" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-white mt-4"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;