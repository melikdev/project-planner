"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { FolderOpenDot, Gitlab, Loader } from "lucide-react";
import Link from "next/link";
import { data } from "../mockData";

import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { revalidatePath } from "next/cache";

const Header = () => {
  const { id } = useParams();
  const parsedId = parseInt(id as string);

  const [project, setProject] = useState(data[parsedId - 1]);

  useEffect(() => {
    setProject(data[parsedId - 1]);
  }, [parsedId]);

  return (
    <header className="flex justify-between items-center h-16 w-full border-b-2 border-slate-600 px-10">
      <div className="left flex gap-10 ">
        <div className="logo ">
          <Gitlab />
        </div>
        <div>/</div>
        <div className="projects">
          <Link className="flex gap-2" href="/projects">
            <FolderOpenDot />
            Projects
          </Link>
        </div>
        <div>/</div>
        <div className="projects">
          {project && (
            <div className="flex items-center gap-2">
              <FolderOpenDot />
              {project.name}
            </div>
          )}
        </div>
      </div>
      <div className="right flex gap-6">
        <ThemeToggle />
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin dark:text-white" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
