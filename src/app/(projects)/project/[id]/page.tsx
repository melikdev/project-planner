"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { data } from "../../mockData";
import { useState } from "react";
import { useParams } from "next/navigation";
import NewWorkItemModal from "../../components/NewWorkItemModal";

const Project = () => {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);

  const { id } = useParams();

  const parsedId = parseInt(id as string);

  const [project, setProject] = useState(data[parsedId - 1].properties);

  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">WORK ITEMS</h1>
        <NewWorkItemModal />
      </div>
      <div className="flex justify-between">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-64"
        />
        {checked && <Button variant="destructive">Delete item</Button>}
      </div>
      <div key={parsedId} className="w-full flex flex-col ">
        <div className="titles grid grid-cols-5 dark:bg-zinc-800 p-2 rounded-t-sm text-center border-2 relative">
          <input
            className="absolute top-3 left-3 size-4 bg-red-200"
            type="checkbox"
            onChange={() => setChecked(!checked)}
          />
          <span>Title</span>
          <span>Status</span>
          <span>Priority</span>
          <span>Type</span>
          <span>Target Date</span>
        </div>
        <div
          className={`${checked ? "bg-zinc-500" : null} grid grid-cols-5 items-center text-center rounded-b-sm p-2 place-items-center border-2 relative`}
        >
          <input
            onChange={() => setChecked(!checked)}
            checked={checked}
            className="absolute top-5 left-3 size-4 bg-red-200"
            type="checkbox"
          />
          <span>{project.title}</span>
          <span className="bg-red-500 p-2 w-20 rounded-sm">
            {project.status}
          </span>
          <span className="bg-yellow-500 p-2 w-20  rounded-sm">
            {project.priority}
          </span>
          <span className="bg-blue-500 p-2 w-20  rounded-sm">
            {project.type}
          </span>
          <span>{project.targetDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Project;
