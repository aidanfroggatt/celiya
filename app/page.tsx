'use client';


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { LucideMapPin, LucideShieldCheck, LucideWand2 } from 'lucide-react';

const CARDS: {
  icon: React.ElementType;
  title: string;
  description?: string;
  content: string;
}[] = [
  {
    icon: LucideMapPin,
    title: 'Tailored Itineraries',
    description: undefined,
    content:
      'Get instant itineraries curated specifically for celiac-safe travel — no generic suggestions, only what you can eat and explore.'
  },
  {
    icon: LucideShieldCheck,
    title: 'Verified Safe Spots',
    description: undefined,
    content:
      'Every restaurant and activity is checked for 100% gluten-free compatibility. Trust your trip with data-driven safety.'
  },
  {
    icon: LucideWand2,
    title: 'AI-Powered Planning',
    description: undefined,
    content:
      'Our intelligent planner learns your preferences and crafts the perfect trip with just a few clicks. Magic, not spreadsheets.'
  }
];

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Travel Without Fear — <span className="text-green-500">Celiya</span> has your back
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Celiya is your AI-powered travel planner for celiacs. Discover 100% gluten-free itineraries tailored to your destination, preferences, and safety needs — in seconds.
        </p>
        <div className="flex justify-center">
          <Link href="/itinerary">
            <Button size="lg" className="rounded-full text-base">
              Plan My Trip
            </Button>
          </Link>
        </div>
      </section>

      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {CARDS.map(({ icon: Icon, title, description, content }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="text-green-500 h-8 w-8 mb-4" />
              <CardTitle>{title}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">{content}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
