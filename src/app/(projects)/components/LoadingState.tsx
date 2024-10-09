const LoadingState = () => {
  return (
    <div className=" animate-pulse">
      <button className="absolute top-4 right-4">
        <div className="size-4" />
      </button>
      <div className="space-y-2">
        <h1 className="py-2 w-40 bg-zinc-800 rounded-md"></h1>
        <div className="py-2 w-10 bg-zinc-800 rounded-md"></div>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex justify-between items-center mt-6">
          <div className="py-2 w-12 bg-zinc-800 rounded-md"></div>
          <div className="py-2 w-8 bg-zinc-800 rounded-md"></div>
        </div>
        <div className="bg-zinc-800 w-full rounded-full h-4" />
      </div>
    </div>
  );
};

export default LoadingState;
