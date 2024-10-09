"use client";

import { Input } from "@/components/ui/input";
import ProjectList from "../components/ProjectList";
import NewProjectModal from "../components/atoms/NewProjectModal";

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">PROJECTS</h1>
      <div className="flex gap-2 items-center mt-10">
        <Input className="p-4 h-10" type="text" placeholder="Search projects" />
        <NewProjectModal />
      </div>
      <div className="projects">
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;
