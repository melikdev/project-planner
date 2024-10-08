"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProjectList from "../components/ProjectList";
import NewProjectModal from "../components/NewProjectModal";

const Projects = () => {
  return (
    <div className="w-[480px] lg:w-[1024px] md:w-[740px] mx-auto space-y-8 mt-14 relative">
      <h1 className="text-3xl font-bold">PROJECTS</h1>
      <div className="flex gap-2 items-center">
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
