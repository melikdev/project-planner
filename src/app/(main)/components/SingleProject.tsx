import { TrashIcon } from "lucide-react";
import Link from "next/link";

const SingleProject = () => {
  return (
    <div className="dark:bg-zinc-900 h-[180px] p-4 rounded-md relative border-solid border-2">
      <Link href="/project/1">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold py-2">Project name</h1>
          <div className="bg-blue-500 rounded-full text-xs w-14 text-center">
            Building
          </div>
        </div>
        <button className="absolute top-4 right-4 ">
          <TrashIcon className="bg-red-400 size-6 p-1 rounded-full" />
        </button>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex justify-between items-center text-sm">
            <div>50% completed</div>
            <div>1/2 Tasks</div>
          </div>
          <div className="bg-zinc-500 w-full h-2 rounded-full">
            <div className="w-1/2 h-2 rounded-full bg-blue-500 " />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleProject;
