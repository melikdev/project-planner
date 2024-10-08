"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProjectList from "../components/ProjectList";
import NewProjectModal from "../components/NewProjectModal";
import { XIcon } from "lucide-react";

const Projects = () => {
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  return (
    <div className="w-[420px] lg:w-[1024px] md:w-[800px] mx-auto space-y-8 mt-14 relative">
      <div
        className={`${
          showNewProjectModal ? "block" : "hidden"
        } absolute top-96 z-50 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="absolute top-4 right-4 ">
          <XIcon onClick={() => setShowNewProjectModal(false)} />
        </div>
        <NewProjectModal />
      </div>
      <h1 className="text-3xl font-bold">PROJECTS</h1>
      <div className="flex gap-2 items-center">
        <Input className="p-4 h-10" type="text" placeholder="Search projects" />
        <Button
          onClick={() => setShowNewProjectModal(true)}
          className="h-10 bg-blue-500 text-white hover:bg-blue-400"
        >
          New project
        </Button>
      </div>
      <div className="projects">
        <ProjectList />
      </div>
    </div>
  );
};

export default Projects;
