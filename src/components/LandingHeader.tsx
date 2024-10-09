"use client";

import { Gitlab } from "lucide-react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import ClerkAuthButtonts from "./ClerkAuthButtons";

const LandingHeader = () => {
  return (
    <header className="flex justify-around items-center h-20 w-full sticky top-0 left-0 border-slate-600 px-10">
      <div className="left flex gap-10 ">
        <div className="logo">
          <Link className="flex gap-2 items-center" href="/">
            <Gitlab />
          </Link>
        </div>
      </div>
      <div className="right flex gap-6">
        <div className="flex gap-2 items-center">
          <ClerkAuthButtonts />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
