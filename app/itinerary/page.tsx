"use client";

import { ItineraryForm, ItineraryFormProps } from "@/components/itinerary/form";
import { ItineraryOutput } from "@/components/itinerary/output";
import { Separator } from "@/components/ui/separator";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
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
    <main>
      <section>
        <div className="text-center">
          <TypographyH1>Plan Your Celiac-Safe Trip</TypographyH1>
          <TypographyP>
            Get a 100% gluten-free itinerary tailored to you — powered by AI.
          </TypographyP>
        </div>
        <div className="flex flex-col gap-y-6">
          <ItineraryForm onSubmit={handleGenerate} />
          <Separator />
          <ItineraryOutput result={itinerary} loading={loading} />
        </div>
      </section>
    </main>
  );
}
