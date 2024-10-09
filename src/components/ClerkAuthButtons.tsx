import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const ClerkAuthButtonts = () => {
  return (
    <>
      <ClerkLoading>
        <Loader className="h-5 w-5 text-muted-foreground animate-spin dark:text-white" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <Button className="bg-sky-700 text-white">
            <Link href="/projects">Dashboard</Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button className="bg-sky-700 text-white">Get Started</Button>
          </SignUpButton>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
};

export default ClerkAuthButtonts;
