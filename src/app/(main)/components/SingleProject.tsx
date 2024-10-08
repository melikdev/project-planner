import { TrashIcon } from "lucide-react";
import Link from "next/link";

const SingleProject = () => {
  return (
    <div className="dark:bg-zinc-900 max-w-[400px] h-[194px] max-h-[230px] p-6 rounded-md relative border-solid border-2">
      <Link href="/project/1">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold py-2">Project name</h1>
          <div className="text-xs bg-blue-500 w-16 h-5 rounded-full flex justify-center  items-center p-1 gap-1">
            <div className="bg-white h-2 w-2 rounded-full animate-pulse"></div>
            <div>Building</div>
          </div>
        </div>
        <button className="absolute top-4 right-4 ">
          <TrashIcon className="bg-red-400 size-8 p-1 rounded-full" />
        </button>
        <div className="mt-6">Progress</div>
      </Link>
    </div>
  );
};

export default SingleProject;
