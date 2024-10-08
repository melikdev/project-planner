import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] w-full">
      <SignUp />
    </div>
  );
}
