'use client';

import Link from 'next/link';
import ModeToggle from '@/components/mode-toggle';
import { CircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <CircleIcon className="h-6 w-6 text-green-500" />
          <span className="font-semibold text-lg">Celiya</span>
        </Link>

        <nav className="flex items-center space-x-4">
          <Link href="/itinerary">
            <Button className='cursor-pointer'>
                Try now
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
