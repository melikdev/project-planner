import SingleProject from "./SingleProject";

const ProjectList = () => {
  return (
    <div className="gap-4 pb-10 grid lg:grid-cols-3 p-0 md:grid-cols-2 content-center ">
      <SingleProject />
      <SingleProject />
      <SingleProject />
    </div>
  );
};

export default ProjectList;
