"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TypographyP } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Place {
  id: string;
  name: string;
  type: "restaurant" | "bakery" | "grocery";
  isDedicatedGF: boolean;
  hasGfMenu: boolean;
  googleMapsUrl: string;
  websiteUrl: string;
  description: string;
}

interface Step {
  label: string;
  value: string;
}

const STEPS: Step[] = [
  { label: "1. Location", value: "location" },
  { label: "2. Select Places", value: "select" },
  { label: "3. Dates", value: "dates" },
  { label: "4. Itinerary", value: "itinerary" },
];

export default function PlanPage() {
  const [step, setStep] = useState<Step["value"]>("location");
  const [destination, setDestination] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<Set<string>>(new Set());
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [itinerary, setItinerary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    setPlaces([]);
    setSelectedPlaces(new Set());
    setItinerary(null);
    const res = await fetch("/api/places", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ destination }),
    });
    const data = await res.json();
    setPlaces(data.places);
    setLoading(false);
    setStep("select");
  }

  function handleSelectPlace(id: string) {
    setSelectedPlaces((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  function handleContinueFromSelect() {
    setStep("dates");
  }

  function handleContinueFromDates() {
    setStep("itinerary");
    handleGenerateItinerary();
  }

  async function handleGenerateItinerary() {
    setLoading(true);
    setItinerary(null);
    const res = await fetch("/api/itinerary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination,
        startDate,
        endDate,
        placeIds: Array.from(selectedPlaces),
      }),
    });
    const data = await res.json();
    setItinerary(data.result);
    setLoading(false);
  }

  return (
    <main>
      <section>
        <div className="mb-8">
          <Progress
            value={
              ((STEPS.findIndex((s) => s.value === step) + 1) / STEPS.length) *
              100
            }
          />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            {STEPS.map((s, idx) => (
              <span
                key={s.value}
                className={cn(
                  idx === STEPS.findIndex((st) => st.value === step)
                    ? "text-primary font-semibold"
                    : ""
                )}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
        <Tabs value={step}>
          <TabsContent value="location">
            <Card>
              <CardHeader>
                <CardTitle>Where are you going?</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                  }}
                  className="flex flex-col gap-4"
                >
                  <Input
                    placeholder="Enter a city or destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={loading || !destination}
                  >
                    {loading ? "Searching..." : "Find Gluten-Free Places"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="select">
            <Card>
              <CardHeader>
                <CardTitle>Select your places</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    {places.length === 0 && (
                      <TypographyP>No places found.</TypographyP>
                    )}
                    {places.map((place) => (
                      <div
                        key={place.id}
                        className="flex items-start gap-3 border rounded-lg p-3"
                      >
                        <Checkbox
                          checked={selectedPlaces.has(place.id)}
                          onCheckedChange={() => handleSelectPlace(place.id)}
                          id={place.id}
                        />
                        <div className="flex-1">
                          <label htmlFor={place.id} className="font-semibold">
                            {place.name}
                          </label>
                          <div className="text-xs text-muted-foreground">
                            {place.type.charAt(0).toUpperCase() +
                              place.type.slice(1)}
                            {place.isDedicatedGF && " • 100% GF"}
                            {!place.isDedicatedGF &&
                              place.hasGfMenu &&
                              " • Dedicated GF Menu"}
                          </div>
                          <div className="flex gap-2 mt-1">
                            <a
                              href={place.googleMapsUrl}
                              target="_blank"
                              rel="noopener"
                              className="underline text-xs"
                            >
                              Google Maps
                            </a>
                            <a
                              href={place.websiteUrl}
                              target="_blank"
                              rel="noopener"
                              className="underline text-xs"
                            >
                              Website
                            </a>
                          </div>
                          <div className="text-xs mt-1">
                            {place.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <Button
                  className="w-full mt-6"
                  onClick={handleContinueFromSelect}
                  disabled={selectedPlaces.size === 0}
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dates">
            <Card>
              <CardHeader>
                <CardTitle>Select your travel dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DatePicker
                    value={startDate}
                    onChange={setStartDate}
                    placeholder="Start date"
                  />
                  <DatePicker
                    value={endDate}
                    onChange={setEndDate}
                    placeholder="End date"
                  />
                </div>
                <Button
                  className="w-full mt-6"
                  onClick={handleContinueFromDates}
                  disabled={!startDate || !endDate}
                >
                  Generate Itinerary
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="itinerary">
            <Card>
              <CardHeader>
                <CardTitle>Your Gluten-Free Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ) : (
                  <div className="prose dark:prose-invert max-w-none pt-2">
                    {itinerary ? (
                      <ReactMarkdown>{itinerary}</ReactMarkdown>
                    ) : null}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
