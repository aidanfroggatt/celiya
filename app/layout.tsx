import Header from "@/components/header";
import { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Baloo_2, Work_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Celiya — Gluten-Free Travel Itineraries",
  description:
    "Plan safe, celiac-friendly travel with Celiya. Instantly generate personalized itineraries for your next gluten-free adventure.",
};

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-body',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${baloo2.variable} ${workSans.variable}`}>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
