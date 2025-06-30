'use client';

import { Card, CardContent } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import { Skeleton } from '@/components/ui/skeleton';

export function ItineraryOutput({
  result,
  loading
}: {
  result: string | null;
  loading: boolean;
}) {
  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  if (!result) return null;

  return (
    <Card>
      <CardContent className="prose dark:prose-invert max-w-none pt-6 pb-8">
        <ReactMarkdown>{result}</ReactMarkdown>
      </CardContent>
    </Card>
  );
}
