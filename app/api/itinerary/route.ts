import { generateCeliacItinerary } from "@/lib/ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { destination, startDate, endDate, placeIds } = await req.json();

  // In a real app, fetch the selected places' details and pass as context to the LLM
  // For demo, just pass the destination and dates
  const preferences = `User selected these places: ${placeIds?.join(", ")}`;
  const result = await generateCeliacItinerary(
    destination,
    startDate,
    endDate,
    preferences
  );
  return NextResponse.json({ result });
}
