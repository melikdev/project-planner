import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LoadingState from "./atoms/LoadingState";

const SingleProject = ({ project }: { project: any }) => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  if (project === undefined) {
    setIsLoading(true);
  }

  const { completed, name } = project;

  return (
    <div className="dark:bg-zinc-900 h-[180px] p-4 rounded-md relative border-solid border-2">
      {isLoading ? (
        <LoadingState />
      ) : (
        <div>
          <button className="absolute top-4 right-4 ">
            <EllipsisVertical className="size-4" />
          </button>
          <Link href={`/project/${project.id}`}>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold py-2">{name}</h1>
              <div className="bg-blue-500 rounded-full text-xs w-14 text-center text-white">
                Building
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex justify-between items-center text-sm">
                <div>{project?.completed}% completed</div>
                <div>1/2 Tasks</div>
              </div>
              <div className="dark:bg-zinc-500  border-2 w-full h-3 rounded-full">
                <div
                  style={{ width: `${completed}%` }}
                  className={`h-2 rounded-full bg-blue-500 `}
                />
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SingleProject;
