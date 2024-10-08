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

type SignUpCardProps = {
  setState: (state: SignInFlow) => void;
};

const SignUpCard = ({ setState }: SignUpCardProps) => {
  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign up to your account</CardDescription>
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
          <Input
            disabled={false}
            value=""
            onChange={() => {}}
            placeholder="Cofirm Password"
            type="password"
            required
          />
          <Button type="submit" className="w-full" size="lg" disabled={false}>
            Sign Up
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
            Already have an account?{" "}
            <span
              onClick={() => setState("signIn")}
              className="text-sky-700 hover:underline cursor-pointer"
            >
              Sign In
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
