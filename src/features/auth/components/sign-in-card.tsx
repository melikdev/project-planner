import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInFlow } from "../types";
import { Input } from "@/components/ui/input";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type SignInCardProps = {
  setState: (state: SignInFlow) => void;
};

const SignInCard = ({ setState }: SignInCardProps) => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Sign In
          </Button>
        </form>
        <div className="flex flex-col gap-y-2.5">
          <Button
            className="w-full relative"
            variant="outline"
            size="lg"
            disabled={false}
          >
            <FcGoogle className="absolute left-4 size-5" />
            Continue with Google
          </Button>
          <Button
            className="w-full relative"
            variant="outline"
            size="lg"
            disabled={false}
          >
            <FaGithub className="absolute left-4 size-5" />
            Continue with Github
          </Button>
          <p className="text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <span
              onClick={() => setState("signUp")}
              className="text-sky-700 hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
