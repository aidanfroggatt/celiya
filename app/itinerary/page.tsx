"use client";

import { ItineraryForm, ItineraryFormProps } from "@/components/itinerary/form";
import { ItineraryOutput } from "@/components/itinerary/output";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function ItineraryPage() {
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate(formData: ItineraryFormProps) {
    setLoading(true);
    setItinerary(null);

    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setItinerary(data.result);
    setLoading(false);
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Plan Your Celiac-Safe Trip</h1>
        <p className="text-muted-foreground text-lg">
          Get a 100% gluten-free itinerary tailored to you — powered by AI.
        </p>
      </div>

      <ItineraryForm onSubmit={handleGenerate} />

      <Separator className="my-12" />

      <ItineraryOutput result={itinerary} loading={loading} />
    </main>
  );
}
