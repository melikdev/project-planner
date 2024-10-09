import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XIcon } from "lucide-react";
import { useState } from "react";

const NewWorkItemModal = () => {
  const [show, setShow] = useState(false);

  const closeModalButton = () => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setShow(false);
      }
    });
  };

  closeModalButton();

  return (
    <div className="flex justify-center items-center z-50">
      <Button
        onClick={() => setShow(true)}
        className="h-10 bg-blue-500 rounded-md text-white"
        size="lg"
      >
        New work item
      </Button>
      {show && (
        <div className="modal-container transition-all ease-in-out ">
          <div
            onClick={() => setShow(false)}
            className="fixed w-screen h-screen top-0 left-0 bg-black/50 flex justify-center items-center"
          ></div>
          <div className="fixed top-1/1 left-1/3 dark:bg-zinc-900 bg-white md:w-[30%] md:h-[50%]   rounded-lg ">
            <XIcon
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-white cursor-pointer"
            />
            <div className="flex flex-col gap-4 p-6">
              <h1>Create New Project</h1>
              <form className="flex flex-col gap-4 p-4">
                <label>Title*</label>
                <Input required placeholder="Add dark mode" />
                <label>Target date *</label>
                <Input required placeholder="Oct 17, 2024" />
                <div className="space-y-2">
                  <div className="grid grid-cols-3 ">
                    <label>Status</label>
                    <label>Priority</label>
                    <label>Type</label>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      className="dark:bg-zinc-800 border-2 p-2 rounded-md "
                      name="status"
                      id="status"
                    >
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </select>
                    <select
                      className="dark:bg-zinc-800 border-2 p-2 rounded-md"
                      name="priority"
                      id="priority"
                    >
                      <option value="High">High</option>
                      <option value="Normal">Normal</option>
                      <option value="Low">Low</option>
                    </select>
                    <select
                      className="dark:bg-zinc-800 border-2 p-2 rounded-md"
                      name="type"
                      id="type"
                    >
                      <option value="Bug">Bug</option>
                      <option value="Feature">Feature</option>
                      <option value="Task">Task</option>
                    </select>
                  </div>
                </div>
                <Button className="mt-4 dark:text-white bg-blue-500" size="lg">
                  Add project
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewWorkItemModal;
