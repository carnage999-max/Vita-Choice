"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import NewsletterSignup from "./components/NewsLetterSignup";
import WaitlistModal from "./components/WaitlistModal";
import ProofBenefits from "./components/ProofBenefits";
import WhySupplementsFail from "./components/WhyTraditionalSupplementsFail";
import { COLORS, TYPOGRAPHY } from "./lib/constants";
import Link from "next/link";

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

  const processSteps = [
    {
      step: "01",
      title: "Pick Your Ingredients",
      description: "Choose your ingredients on the web or in our mobile app for a personalized experience.",
      cta: "Open App",
      ctaLink: "#", // Replace with actual app link
      features: ["Web interface", "Mobile app", "Ingredient library"]
    },
    {
      step: "02", 
      title: "Upload Your Labs",
      description: "Upload your most recent labs, if you choose. This helps with contraindications and optimize your formula.",
      cta: "Learn More",
      ctaLink: "/about",
      features: ["Lab analysis", "Contraindications check", "Personalized insights"]
    },
    {
      step: "03",
      title: "Custom Liquid Multi",
      description: "We customize your liquid multi for the month and ship it to you. Change your stack every month or keep it saved for next month.",
      cta: "Get Started",
      ctaLink: "/shop",
      features: ["Monthly customization", "Direct shipping", "Flexible changes"]
    }
  ];

  return (
    <>
      <Hero onOpenWaitlist={() => setIsOpen(true)} />

      {/* How It Works Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: COLORS.surface }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-radial from-[#2EE6D6]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-[#2EA7FF]/15 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
              style={{
                backgroundColor: `${COLORS.accentTeal}10`,
                borderColor: `${COLORS.accentTeal}30`
              }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accentTeal }} />
              <span
                className="text-sm font-medium"
                style={{ color: COLORS.accentTeal, fontFamily: TYPOGRAPHY.body }}
              >
                HOW IT WORKS
              </span>
            </div>
            
            <h2
              className="text-3xl lg:text-5xl font-bold mb-6"
              style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.textPrimary }}
            >
              Your Custom Stack,{" "}
              <span className="bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                Your Way
              </span>
            </h2>
            
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
            >
              Three simple steps to get your personalized liquid multivitamin, tailored to your specific needs.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {processSteps.map((process, index) => (
              <div key={index} className="relative group">
                {/* Connecting Line - Desktop Only */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-6 w-12 h-px bg-gradient-to-r from-[#2EE6D6]/50 to-[#2EA7FF]/50 z-10" />
                )}

                {/* Step Card */}
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[#14161A] to-[#1a1d23] border border-[#262A31] hover:border-[#2EE6D6]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2EE6D6]/10">
                  
                  {/* Step Number */}
                  <div className="flex items-center mb-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] flex items-center justify-center text-black font-bold text-lg"
                      style={{ fontFamily: TYPOGRAPHY.heading }}
                    >
                      {process.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.textPrimary }}
                  >
                    {process.title}
                  </h3>
                  
                  <p
                    className="text-base mb-6 leading-relaxed"
                    style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                  >
                    {process.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {process.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.accentTeal }} />
                        <span
                          className="text-sm"
                          style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={process.ctaLink}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2EE6D6]/30 hover:border-[#2EE6D6] hover:bg-[#2EE6D6]/10 transition-all duration-300 group"
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: COLORS.accentTeal, fontFamily: TYPOGRAPHY.body }}
                    >
                      {process.cta}
                    </span>
                    <span className="text-xs group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p
              className="text-lg font-medium mb-6"
              style={{ color: COLORS.textPrimary, fontFamily: TYPOGRAPHY.heading }}
            >
              Your custom stack, your way, your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] hover:-translate-y-1 transition-all duration-300"
                style={{ fontFamily: TYPOGRAPHY.body }}
              >
                Start Your Assessment
              </button>
              <Link
                href="/about"
                className="px-8 py-4 rounded-xl border border-[#262A31] hover:border-white hover:bg-white/5 transition-all duration-300 font-semibold"
                style={{ color: COLORS.textPrimary, fontFamily: TYPOGRAPHY.body }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

        <ProofBenefits />

        <WhySupplementsFail />

      {/* <section aria-labelledby="featured-products" className="mt-14">
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
      </section> */}

      <section className="mt-16">
        <NewsletterSignup />
      </section>

      <WaitlistModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
