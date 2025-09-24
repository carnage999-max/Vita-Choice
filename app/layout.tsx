'use client';

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import WaitlistModal from "./components/WaitlistModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        {/* Primary Meta */}
        <title>Vita-Choice — Advanced Nutritional Formulas</title>
        <meta
          name="description"
          content="Fully methylated, clean, science-driven supplements. International shipping. Shop Vita-Choice."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href="https://vita-choice.vercel.app" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vita-choice.vercel.app" />
        <meta property="og:title" content="Vita-Choice — Advanced Nutritional Formulas" />
        <meta
          property="og:description"
          content="Fully methylated, clean, science-driven supplements. International shipping. Shop Vita-Choice."
        />
        <meta property="og:site_name" content="Vita-Choice" />
        <meta
          property="og:image"
          content="https://vita-choice.vercel.app/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vita-Choice — Advanced Nutritional Formulas" />
        <meta
          name="twitter:description"
          content="Fully methylated, clean, science-driven supplements. International shipping. Shop Vita-Choice."
        />
        <meta name="twitter:image" content="https://vita-choice.vercel.app/og-image.png" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-[#0b0f12] text-[#e6eef8] antialiased">
        <Header onOpenWaitlist={() => setIsOpen(true)} />
        <main className="mx-auto px-6">{children}</main>
        <Footer />
        <WaitlistModal open={isOpen} onClose={() => setIsOpen(false)} />
      </body>
    </html>
  );
}
