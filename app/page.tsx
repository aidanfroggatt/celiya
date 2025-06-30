'use client';


import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { LucideMapPin, LucideShieldCheck, LucideWand2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
            <Button size="lg" className='cursor-pointer'>
              Plan My Trip
            </Button>
          </Link>
        </div>
      </section>
      <Separator className="my-24" />


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

      <Separator className="my-24" />


<section className="mt-24">
  <h2 className="text-3xl font-bold text-center mb-10">How Celiya Works</h2>
  <Tabs defaultValue="step1" className="max-w-4xl mx-auto">
    <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="step1">1. Input</TabsTrigger>
      <TabsTrigger value="step2">2. Generate</TabsTrigger>
      <TabsTrigger value="step3">3. Explore</TabsTrigger>
    </TabsList>
    <TabsContent value="step1">
      <Card>
        <CardHeader>
          <CardTitle>Tell us where you&apos;re going</CardTitle>
          <CardDescription>Choose your destination, dates, and preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Enter any travel location and we&apos;ll search only verified gluten-free spots.</p>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="step2">
      <Card>
        <CardHeader>
          <CardTitle>Let AI build your itinerary</CardTitle>
          <CardDescription>No manual searching or cross-checking needed.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Celiya creates a safe, enjoyable trip with places to eat, visit, and explore — all 100% gluten-free.</p>
        </CardContent>
      </Card>
    </TabsContent>
    <TabsContent value="step3">
      <Card>
        <CardHeader>
          <CardTitle>Relax and enjoy your trip</CardTitle>
          <CardDescription>Save or print your plan — it’s yours to keep and use offline.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>All your stops are verified for gluten safety, so you can enjoy the experience worry-free.</p>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</section>

<Separator className="my-24" />

<section className="max-w-2xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is Celiya only for celiacs?</AccordionTrigger>
      <AccordionContent>
        While built for strict gluten-free safety, anyone avoiding gluten can benefit.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>What countries does it support?</AccordionTrigger>
      <AccordionContent>
        We currently support itineraries in over 30 countries, with new cities added monthly.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>How do you verify restaurants?</AccordionTrigger>
      <AccordionContent>
        We use multiple trusted databases, direct communication with venues, and real user reports.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>
    </main>
  );
}
