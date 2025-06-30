import { NextRequest, NextResponse } from "next/server";

// Dummy data for demo; replace with real API integration
const demoPlaces = [
  {
    id: "1",
    name: "Olive Cafe",
    type: "restaurant",
    isDedicatedGF: true,
    hasGfMenu: false,
    googleMapsUrl: "https://maps.google.com/?q=Olive+Cafe",
    websiteUrl: "https://olivecafe.com",
    description:
      "A 100% dedicated gluten-free bakery and cafe with vegan options.",
  },
  {
    id: "2",
    name: "Safe Eats Grocery",
    type: "grocery",
    isDedicatedGF: false,
    hasGfMenu: false,
    googleMapsUrl: "https://maps.google.com/?q=Safe+Eats+Grocery",
    websiteUrl: "https://safeeats.com",
    description:
      "Large grocery store with a wide selection of gluten-free brands.",
  },
  {
    id: "3",
    name: "Celiac Bakery",
    type: "bakery",
    isDedicatedGF: true,
    hasGfMenu: false,
    googleMapsUrl: "https://maps.google.com/?q=Celiac+Bakery",
    websiteUrl: "https://celiacbakery.com",
    description:
      "Award-winning gluten-free bakery. All products are celiac safe.",
  },
  {
    id: "4",
    name: "Pasta House",
    type: "restaurant",
    isDedicatedGF: false,
    hasGfMenu: true,
    googleMapsUrl: "https://maps.google.com/?q=Pasta+House",
    websiteUrl: "https://pastahouse.com",
    description:
      "Italian restaurant with a dedicated gluten-free menu. Not 100% GF facility.",
  },
];

export async function POST(req: NextRequest) {
  // In a real app, use req.json() to get the destination and call an external API
  // const { destination } = await req.json();
  // ...fetch real data...
  return NextResponse.json({ places: demoPlaces });
}
