"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LucideMapPin, LucideShieldCheck, LucideWand2 } from "lucide-react";
import Link from "next/link";

interface CardType {
  icon: React.ElementType;
  title: string;
  description?: string;
  content: string;
  color?: string;
}

interface StepType {
  value: string;
  label: string;
  title: string;
  description?: string;
  content: string;
}

interface FaqType {
  question: string;
  answer: string;
}

const CARDS: CardType[] = [
  {
    icon: LucideMapPin,
    title: "Tailored Itineraries",
    description: undefined,
    content:
      "Get instant itineraries curated specifically for celiac-safe travel — no generic suggestions, only what you can eat and explore.",
    color: "text-terracotta",
  },
  {
    icon: LucideShieldCheck,
    title: "Verified Safe Spots",
    description: undefined,
    content:
      "Every restaurant and activity is checked for 100% gluten-free compatibility. Trust your trip with data-driven safety.",
    color: "text-leafy",
  },
  {
    icon: LucideWand2,
    title: "AI-Powered Planning",
    description: undefined,
    content:
      "Our intelligent planner learns your preferences and crafts the perfect trip with just a few clicks. Magic, not spreadsheets.",
    color: "text-radish",
  },
];

const STEP_ITEMS: StepType[] = [
  {
    value: "step1",
    label: "1. Input",
    title: "Tell us where you're going",
    description: "Choose your destination, dates, and preferences.",
    content:
      "Enter any travel location and we'll search only verified gluten-free spots.",
  },
  {
    value: "step2",
    label: "2. Generate",
    title: "Let AI build your itinerary",
    description: "No manual searching or cross-checking needed.",
    content:
      "Celiya creates a safe, enjoyable trip with places to eat, visit, and explore — all 100% gluten-free.",
  },
  {
    value: "step3",
    label: "3. Explore",
    title: "Relax and enjoy your trip",
    description:
      "Save or print your plan — it's yours to keep and use offline.",
    content:
      "All your stops are verified for gluten safety, so you can enjoy the experience worry-free.",
  },
];

const FAQ_ITEMS: FaqType[] = [
  {
    question: "Is Celiya only for celiacs?",
    answer:
      "While built for strict gluten-free safety, anyone avoiding gluten can benefit.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>Travel Without Fear — Celiya has your back</h1>
        <p>
          Celiya is your AI-powered travel planner for celiacs. Discover 100%
          gluten-free itineraries tailored to your destination, preferences, and
          safety needs — in seconds.
        </p>
        <Link href="/itinerary">
          <Button size="lg" className="cursor-pointer">
            Plan My Trip
          </Button>
        </Link>
      </section>
      <Separator />

      <section>
        {CARDS.map(
          ({ icon: Icon, title, description, content, color }: CardType) => (
            <Card key={title}>
              <CardHeader>
                <Icon className={`${color} h-8 w-8 mb-4`} />
                <CardTitle>{title}</CardTitle>
                {description && (
                  <CardDescription>{description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p>{content}</p>
              </CardContent>
            </Card>
          )
        )}
      </section>

      <Separator />

      <section>
        <h2>How Celiya Works</h2>
        <Tabs defaultValue="step1">
          <TabsList>
            {STEP_ITEMS.map(({ value, label }: StepType) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          {STEP_ITEMS.map(
            ({ value, title, description, content }: StepType) => (
              <TabsContent key={value} value={value}>
                <Card>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    {description && (
                      <CardDescription>{description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p>{content}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            )
          )}
        </Tabs>
      </section>

      <Separator />

      <section>
        <h2>Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          {FAQ_ITEMS.map(({ question, answer }: FaqType) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
