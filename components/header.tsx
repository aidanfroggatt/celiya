"use client";

import Icon from "@/components/icon";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Icon className="h-full w-auto" />
          <span className="font-semibold text-lg">Celiya</span>
        </Link>

        <nav className="flex items-center space-x-4">
          <Link href="/itinerary">
            <Button className="cursor-pointer">Try now</Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
