import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { XIcon } from "lucide-react";

const NewProjectModal = () => {
  return (
    <div className="w-[480px] bg-zinc-900 border-4 ">
      <h1 className="text-3xl text-center mt-4">Add new project</h1>
      <form className="flex justify-center flex-col p-10 gap-4">
        <label>Project name</label>
        <Input placeholder="The recipe tracker" />
        <label>Your idea</label>
        <Input placeholder="ann app to help track recipes" />
        <label>Target user</label>
        <Input placeholder="My family" />
        <Button className="mt-4">Add new project</Button>
      </form>
    </div>
  );
};

export default NewProjectModal;
