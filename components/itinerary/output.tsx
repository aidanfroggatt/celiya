
'use client';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

export function ItineraryOutput({
  result,
  loading
}: {
  result: string | null;
  loading: boolean;
}) {
  if (loading) return <p className="mt-6">Generating itinerary...</p>;
  if (!result) return null;

  return (
    <Card className="prose max-w-none">
      <ReactMarkdown>{result}</ReactMarkdown>
    </Card>
  );
}
