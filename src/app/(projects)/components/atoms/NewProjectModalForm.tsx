import { LoaderCircle } from "lucide-react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewProjectModalForm = () => {
  const onSubmit: SubmitHandler<formSchema> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", { message: "Invalid projectName" });
    }
  };

  const formSchema = z.object({
    projectName: z
      .string()
      .min(2, { message: "Project name must be at least 2 characters" }),
    idea: z
      .string()
      .min(8, { message: "Description must be at least 8 characters" }),
  });

  type formSchema = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      idea: "",
    },
  });

  return (
    <div className="flex flex-col gap-4 p-6 ">
      <h1>Create New Project</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[480px] mx-auto flex justify-center flex-col align-center mt-4 gap-4 "
      >
        <label>Project Name: </label>
        <Input
          className={`outline-none ${errors.projectName && "border-red-500"}`}
          {...register("projectName")}
          placeholder="Project name"
          type="projectName"
        />
        {errors.projectName && (
          <p className="text-red-500">{errors.projectName.message}</p>
        )}
        <label>idea</label>
        <Input
          className={`outline-none ${errors.idea && "border-red-500"}`}
          {...register("idea")}
          placeholder="idea"
          type="idea"
        />
        {errors.idea && <p className="text-red-500">{errors.idea.message}</p>}
        <Button
          disabled={isSubmitting}
          type="submit"
          className="dark:text-white bg-blue-500"
        >
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Submit"}
        </Button>
        {errors.root && <p className="text-red-500">{errors.root.message}</p>}
      </form>
    </div>
  );
};

export default NewProjectModalForm;
