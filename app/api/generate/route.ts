import { generateCeliacItinerary } from "@/lib/ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { destination, dates, preferences } = await req.json();

  const result = await generateCeliacItinerary(destination, dates, preferences);

  return NextResponse.json({ result });
}
