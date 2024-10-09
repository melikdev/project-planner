"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8)
    .includes("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$"),
});

type formSchema = z.infer<typeof formSchema>;

const FormTest = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<formSchema> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", { message: "Invalid email" });
    }
  };

  return (
    <div className="max-w-[720px] mx-auto ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[480px] mx-auto flex justify-center flex-col align-center mt-32 gap-4"
      >
        <label>Email</label>
        <Input
          className={`outline-none ${errors.email && "border-red-500"}`}
          {...register("email")}
          placeholder="email"
          type="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <label>Password</label>
        <Input
          className={`outline-none ${errors.password && "border-red-500"}`}
          {...register("password")}
          placeholder="password"
          type="password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? <LoaderCircle className="animate-spin" /> : "Submit"}
        </Button>
        {errors.root && <p className="text-red-500">{errors.root.message}</p>}
      </form>
    </div>
  );
};

export default FormTest;
