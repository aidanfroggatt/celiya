import Header from "@/components/header";
import { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Celiya — Gluten-Free Travel Itineraries",
  description:
    "Plan safe, celiac-friendly travel with Celiya. Instantly generate personalized itineraries for your next gluten-free adventure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
