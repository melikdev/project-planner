import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { XIcon } from "lucide-react";

const NewProjectModal = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center items-center z-50">
      <Button
        onClick={() => setShow(true)}
        className="h-10 bg-blue-500 w-24 rounded-md text-white"
      >
        Open
      </Button>
      {show && (
        <div className="modal-container transition-all ease-in-out ">
          <div
            onClick={() => setShow(false)}
            className="fixed w-screen h-screen top-0 left-0 bg-black/50 flex justify-center items-center"
          ></div>
          <div className="fixed top-1/1 left-1/3 bg-zinc-900 w-[30%] h-[40%] rounded-lg ">
            <XIcon
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-white cursor-pointer"
            />
            <div className="flex flex-col gap-4 p-6">
              <h1>Create New Project</h1>
              <form className="flex flex-col gap-6 p-4">
                <label>Project name</label>
                <Input placeholder="Recipe app" />
                <label>Describe your project</label>
                <Input placeholder="Recipe app to track recipes" />
                <Button size="lg">Add project</Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProjectModal;
