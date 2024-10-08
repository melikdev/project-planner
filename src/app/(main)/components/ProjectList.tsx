import SingleProject from "./SingleProject";

const ProjectList = () => {
  return (
    <div className="p-10 gap-10 grid lg:grid-cols-3 lg:p-0 md:grid-cols-2">
      <SingleProject />
      <SingleProject />
      <SingleProject />
      <SingleProject />
      <SingleProject />
      <SingleProject />
    </div>
  );
};

export default ProjectList;
