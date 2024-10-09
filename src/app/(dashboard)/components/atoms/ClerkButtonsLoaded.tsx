import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";

const ClerkButtons = () => {
  return (
    <>
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
    </>
  );
};

export default ClerkButtons;
