'use client';

import Link from 'next/link';
import ModeToggle from '@/components/mode-toggle';
import { CircleIcon } from 'lucide-react';


const NAV_ROUTES = [
  { href: '/', label: 'Home' },
  { href: '/itinerary', label: 'Itinerary' },
];

const Header = () => {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <CircleIcon className="h-6 w-6 text-green-500" />
          <span className="font-semibold text-lg">Celiya</span>
        </Link>

        <nav className="flex items-center space-x-4">
          {NAV_ROUTES.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {route.label}
            </Link>
          ))}

          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
