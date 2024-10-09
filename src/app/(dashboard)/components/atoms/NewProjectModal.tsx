"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import NewProjectModalForm from "./NewProjectModalForm";

const NewProjectModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center z-50">
      <Button
        onClick={() => setShow(true)}
        className="h-10 bg-blue-500 w-24 rounded-md text-white"
      >
        New Project
      </Button>
      {show && (
        <div className="modal-container transition-all ease-in-out ">
          <div
            onClick={() => setShow(false)}
            className="fixed w-screen h-screen top-0 left-0 bg-black/50 flex justify-center items-center"
          ></div>
          <div className="fixed left-1/3 dark:bg-zinc-900 bg-white md:w-[30%] min-h-[40%] rounded-lg ">
            <XIcon
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-white cursor-pointer"
            />
            <NewProjectModalForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProjectModal;
