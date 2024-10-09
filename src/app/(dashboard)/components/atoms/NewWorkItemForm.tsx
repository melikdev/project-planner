import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewWorkItemForm = () => {
  return (
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
  );
};

export default NewWorkItemForm;
