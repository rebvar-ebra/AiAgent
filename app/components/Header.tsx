"use client";
import Link from "next/link";
import React from "react";
import Agentpules from "./Agentpules";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-16 px-6">
        {/* Left section - Logo and Agent Pulse */}
        <div className="flex items-center gap-4">
          <Agentpules size="small" color="green" />
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              AgentTube
            </h1>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <SignedIn>
            <Link href="/manage-plan">
              <Button
                className="mr-4 bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
                variant={"outline"}
              >
                Manage Plan
              </Button>
            </Link>
            <div
              className="p-2 w-10 h-10 flex items-center justify-center rounded-full border
			 bg-blue-100 border-blue-200"
            >
              <UserButton />
            </div>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant={"ghost"}
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

export default Header;
