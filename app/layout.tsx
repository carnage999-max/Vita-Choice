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

  const siteUrl = "https://vita-choice.vercel.app";
  const ogImage = `${siteUrl}/og-image.png`;

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
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Vita-Choice — Advanced Nutritional Formulas" />
        <meta
          property="og:description"
          content="Fully methylated, clean, science-driven supplements. International shipping. Shop Vita-Choice."
        />
        <meta property="og:site_name" content="Vita-Choice" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vita-Choice — Advanced Nutritional Formulas" />
        <meta
          name="twitter:description"
          content="Fully methylated, clean, science-driven supplements. International shipping. Shop Vita-Choice."
        />
        <meta name="twitter:image" content={ogImage} />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vita-Choice",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              sameAs: [
                "https://www.facebook.com/vitachoice",
                "https://www.instagram.com/vitachoice",
                "https://www.twitter.com/vitachoice",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Vita-Choice Advanced Nutritional Formulas",
              image: ogImage,
              description:
                "Fully methylated, clean, science-driven supplements. International shipping. Shop Vita-Choice.",
              brand: {
                "@type": "Organization",
                name: "Vita-Choice",
              },
              offers: {
                "@type": "Offer",
                url: `${siteUrl}/shop`,
                priceCurrency: "USD",
                availability: "https://schema.org/PreOrder",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
                { "@type": "ListItem", position: 2, name: "Shop", item: `${siteUrl}/shop` },
                { "@type": "ListItem", position: 3, name: "About", item: `${siteUrl}/about` },
                { "@type": "ListItem", position: 4, name: "FAQ", item: `${siteUrl}/faq` },
                { "@type": "ListItem", position: 5, name: "Contact", item: `${siteUrl}/contact` },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What makes Vita-Choice unique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our formulas are fully methylated, clean, and backed by science. Each supplement is designed for maximum bioavailability.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you ship internationally?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer international shipping on all Vita-Choice products.",
                  },
                },
              ],
            }),
          }}
        />
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
