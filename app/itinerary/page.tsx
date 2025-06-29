'use client';

import { ItineraryForm } from '@/components/itinerary/form';
import { ItineraryOutput } from '@/components/itinerary/output';
import { useState } from 'react';

export default function ItineraryPage() {
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleGenerate(formData: {
    destination: string;
    dates: string;
    preferences: string;
  }) {
    setLoading(true);
    setItinerary(null);

    const res = await fetch('/api/generate', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();
    setItinerary(data.result);
    setLoading(false);
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Plan Your Celiac-Safe Trip</h1>
      <ItineraryForm onSubmit={handleGenerate} />
      <ItineraryOutput result={itinerary} loading={loading} />
    </main>
  );
}
