import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function generateCeliacItinerary(
  destination: string,
  startDate: Date,
  endDate: Date,
  preferences: string
): Promise<string> {
  const start = startDate instanceof Date ? startDate : new Date(startDate);
  const end = endDate instanceof Date ? endDate : new Date(endDate);

  const formattedStartDate = start.toISOString().split("T")[0];
  const formattedEndDate = end.toISOString().split("T")[0];

  const prompt = `You are a celiac travel food planner. Your job is to create a detailed, day-by-day gluten-free food itinerary for someone visiting ${destination} from ${formattedStartDate} to ${formattedEndDate}.

Instructions:
- Only include restaurants that are 100% dedicated gluten free. If none are available for a meal, then and only then, include a restaurant with a dedicated gluten free menu that is highly reviewed as safe for celiacs. Clearly mark these as "dedicated GF menu, not 100% GF".
- If no safe restaurant can be found, suggest a trusted grocery store or safe snack/meal brands.
- This is a food itinerary: focus on breakfast, lunch, dinner, and snacks. Only add activities if they are directly related to food (e.g., gluten-free bakeries, food tours).
- For each restaurant, provide:
  - The restaurant name
  - A link to the restaurant on Google Maps
  - A link to the restaurant's official website
  - A short note on why it is safe (e.g., "100% dedicated GF" or "dedicated GF menu, highly rated by celiacs")
- Format the output in clear Markdown, using headings for each day, and bullet points for each meal. Use bold for restaurant names. Place links in markdown format: [text](url).
- If you must include a non-100% GF restaurant, add a warning note in italics.
- At the end, add a section for grocery stores and safe brands if needed.
${preferences ? `- Additional preferences: ${preferences}` : ""}

Example output:

## Day 1
- **Breakfast:** Olive Cafe ([Google Maps](https://maps.google.com/?q=Olive+Cafe)) ([Website](https://olivecafe.com))  
  100% dedicated GF bakery and cafe.
- **Lunch:** ...

---`;

  const response = await openai.chat.completions.create({
    model: "llama3-8b-8192",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 3000,
  });

  return response.choices[0].message.content || "No itinerary generated.";
}
