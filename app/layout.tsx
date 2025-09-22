'use client';

import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import WaitlistModal from "./components/WaitlistModal";

// export const metadata: Metadata = {
//   title: "VitaChoice",
//   description: "Clinical skincare — launching soon",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>Vita‑Choice — Advanced Nutritional Formulas</title>
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
