import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectData } from "./Portfolio";

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id.toString() === id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) return <p className="text-center mt-10">Project not found</p>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
        </div>
        <div>
          <p className="text-sm text-gray-400 uppercase tracking-wide">{project.category}</p>
          <h1 className="text-3xl font-bold mt-2 mb-4">{project.title}</h1>
          <p className="text-gray-700 leading-relaxed mt-2 mb-4">{project.description}</p>
          <p className="text-gray-700 leading-relaxed mt-2 mb-4">{project.paragraph}</p>
          <p className="text-gray-700 leading-relaxed mt-2 mb-4">{project.paragraph2}</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail;
