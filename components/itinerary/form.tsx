'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function ItineraryForm({
  onSubmit
}: {
  onSubmit: (data: {
    destination: string;
    dates: string;
    preferences: string;
  }) => void;
}) {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [preferences, setPreferences] = useState('');

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ destination, dates, preferences });
      }}
    >
      <div>
        <label className="block text-sm font-medium">Destination</label>
        <input
          className="w-full border rounded p-2"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Travel Dates</label>
        <input
          className="w-full border rounded p-2"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Preferences (optional)
        </label>
        <textarea
          className="w-full border rounded p-2"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full">
        Generate Itinerary
      </Button>
    </form>
  );
}
