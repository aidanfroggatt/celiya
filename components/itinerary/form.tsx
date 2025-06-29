"use client";

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
import { Textarea } from "../ui/textarea";

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      dates: "",
      preferences: "",
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    onSubmit({
      ...values,
      preferences: values.preferences ?? "",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormDescription>
          Fill out the form below to generate a personalized, celiac-friendly travel itinerary.
        </FormDescription>
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <Input className="w-full border rounded p-2" placeholder="e.g. Paris" {...field} />
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
                <Input className="w-full border rounded p-2" placeholder="e.g. July 1-7, 2025" {...field} />
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
                <Textarea className="w-full border rounded p-2" placeholder="e.g. vegan, museums, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Generate Itinerary
        </Button>
      </form>
    </Form>
  );
}
