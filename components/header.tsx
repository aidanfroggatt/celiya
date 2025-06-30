"use client";

import Icon from "@/components/icon";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Icon className="h-full w-auto" />
        </Link>

        <nav className="flex items-center space-x-4">
          <Link href="/plan">
            <Button className="cursor-pointer">Try now</Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
