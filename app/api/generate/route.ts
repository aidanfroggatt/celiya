import { generateCeliacItinerary } from "@/lib/ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { destination, startDate, endDate, preferences } = await req.json();

  const result = await generateCeliacItinerary(
    destination,
    startDate,
    endDate,
    preferences
  );

  return NextResponse.json({ result });
}
