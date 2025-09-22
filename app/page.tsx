"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import NewsletterSignup from "./components/NewsLetterSignup";
import WaitlistModal from "./components/WaitlistModal";
import ProofBenefits from "./components/ProofBenefits";

const PRODUCTS = [
  {
    id: "p-1",
    name: "Vita‑Choice™ Core Liquid Multivitamin (Fully Methylated)",
    price: "$20",
    src: "/placeholder-1.jpg",
    desc: "A premium, fully methylated, gluten‑free, vegan liquid multivitamin base with synergistic cofactors and superfoods(spirulina, seaweed).Designed for high bioavailability and gentle daily use.",
  },
  {
    id: "p-2",
    name: "Diabetes Support Stack",
    price: "$100",
    src: "/placeholder-2.jpg",
    desc: "Targeted nutrients supporting insulin sensitivity, glucose metabolism, mitochondrial function, and gut balance. Includes specific pre‑/probiotics, cinnamon extract, chromium,and other evidence‑aligned actives.",
  },
  {
    id: "p-3",
    name: "Microplastics Cleanse Stack",
    price: "$200",
    src: "/placeholder-3.jpg",
    desc: "Supports binding, mobilization, and elimination pathways; promotes gut barrier integrity and antioxidant defense for modern environmental exposures.",
  },
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hero onOpenWaitlist={() => setIsOpen(true)} />

        <ProofBenefits />

      <section aria-labelledby="featured-products" className="mt-14">
        <h2
          id="featured-products"
          className="text-2xl font-semibold tracking-tight mb-6"
        >
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onOpenWaitlist={() => setIsOpen(true)}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <NewsletterSignup />
      </section>

      <WaitlistModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
