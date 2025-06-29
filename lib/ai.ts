import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

export async function generateCeliacItinerary(
  destination: string,
  dates: string,
  preferences: string
): Promise<string> {
  const prompt = `Create a celiac-friendly travel itinerary for someone visiting ${destination} on ${dates}. Include 100% gluten-free restaurants, activities, and romantic or scenic spots. ${
    preferences ? 'Additional preferences: ' + preferences : ''
  }`;


  const response = await openai.chat.completions.create({
    model: 'llama3-8b-8192', // or another Groq-supported model
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
    max_tokens: 1000
  });

  return response.choices[0].message.content || 'No itinerary generated.';
}
