'use client';

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const formSchema = z.object({
  destination: z.string().min(2, { message: "Destination is required." }),
  dates: z.string().min(2, { message: "Travel dates are required." }),
  preferences: z.string().optional(),
});

export function ItineraryForm({
  onSubmit,
}: {
  onSubmit: (data: {
    destination: string;
    dates: string;
    preferences: string;
  }) => void;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      dates: "",
      preferences: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await onSubmit({
      ...values,
      preferences: values.preferences ?? "",
    });
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormDescription className="text-center text-muted-foreground mb-4">
          Enter your trip details below and we&apos;ll generate your gluten-free itinerary.
        </FormDescription>

        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Paris" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dates"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Travel Dates</FormLabel>
              <FormControl>
                <Input placeholder="e.g. July 1-7, 2025" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferences"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferences (optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g. vegan, loves museums, hates hiking"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Generating..." : "Generate Itinerary"}
        </Button>
      </form>
    </Form>
  );
}
