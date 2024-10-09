type Props = {
  checked: boolean;
  project: any;
  setChecked: any;
};

const SingleWork = ({ checked, project, setChecked }: Props) => {
  return (
    <div className="">
      {project.length > 0 ? (
        project.map((item: any, index: number) => (
          <div
            key={index}
            className={`${checked ? "bg-zinc-500" : null} grid grid-cols-5 items-center text-center rounded-b-sm p-2 place-items-center border-2 relative`}
          >
            <input
              onChange={() => setChecked(!checked)}
              checked={checked}
              className="absolute top-5 left-3 size-4 bg-red-200"
              type="checkbox"
            />
            <span>{item.title}</span>
            <span className="bg-red-500 p-2 w-20 rounded-sm text-white">
              {item.status}
            </span>
            <span className="bg-yellow-500 p-2 w-20  rounded-sm text-white">
              {item.priority}
            </span>
            <span className="bg-blue-500 p-2 w-20  rounded-sm text-white">
              {item.type}
            </span>
            <span>{item.targetDate}</span>
          </div>
        ))
      ) : (
        <div
          key={project.id}
          className={`${checked ? "bg-zinc-500" : null} grid grid-cols-5 items-center text-center rounded-b-sm p-2 place-items-center border-2 relative`}
        >
          <input
            onChange={() => setChecked(!checked)}
            checked={checked}
            className="absolute top-5 left-3 size-4 bg-red-200"
            type="checkbox"
          />
          <span>{project.title}</span>
          <span className="bg-red-500 p-2 w-20 rounded-sm text-white">
            {project.status}
          </span>
          <span className="bg-yellow-500 p-2 w-20  rounded-sm text-white">
            {project.priority}
          </span>
          <span className="bg-blue-500 p-2 w-20  rounded-sm text-white">
            {project.type}
          </span>
          <span>{project.targetDate}</span>
        </div>
      )}
    </div>
  );
};

export default SingleWork;
