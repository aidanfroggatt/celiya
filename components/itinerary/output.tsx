'use client';

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
    <div className="mt-6 whitespace-pre-line bg-gray-50 p-4 rounded border">
      {result}
    </div>
  );
}
