"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { FolderOpenDot, Gitlab, Loader } from "lucide-react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const LandingHeader = () => {
  return (
    <header className="flex justify-around items-center h-20 w-full border-b-2 border-slate-600 px-10">
      <div className="left flex gap-10 ">
        <div className="logo">
          <Link className="flex gap-2 items-center" href="/">
            <Gitlab />
          </Link>
        </div>
      </div>
      <div className="right flex gap-6">
        <div className="flex gap-2 items-center">
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
