import { useState } from "react";
import SingleProject from "./SingleProject";
import { data } from "../mockData";

const ProjectList = () => {
  const [projects, setProjects] = useState(data);

  return (
    <div className="gap-4 pb-10 grid lg:grid-cols-3 p-0 md:grid-cols-2 content-center mt-10">
      {projects.map((project) => (
        <SingleProject project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;
