import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "St. Martin Mwibale Senior School",
    template: "%s | St. Martin Mwibale Senior School",
  },
  description:
    "Nurturing academic excellence, discipline, character, and responsible future leaders at St. Martin Mwibale Senior School.",

  keywords: [
    "St. Martin Mwibale Senior School",
    "Mwibale School",
    "Senior School",
    "Secondary School",
    "Education",
    "Academic Excellence",
    "Kenya School",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}