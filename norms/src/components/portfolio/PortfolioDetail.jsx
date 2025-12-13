import { useParams } from "react-router-dom";
import { projectData } from "./Portfolio"; 

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id.toString() === id);

  if (!project) return <p>Project not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-400 mb-2">{project.category}</p>
      <img src={project.image} alt={project.title} className="w-full h-auto mb-4" />
      <p>{project.description}</p>
    </div>
  );
};

export default PortfolioDetail;
