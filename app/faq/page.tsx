"use client";

import React, { useState } from "react";
import { COLORS, TYPOGRAPHY } from "../lib/constants";

const FAQPage = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const faqCategories = [
        {
            title: "Getting Started",
            faqs: [
                {
                    question: "How does personalized nutrition work?",
                    answer:
                        "Our process starts with comprehensive lab work (blood, saliva, or urine tests) that reveals your unique nutritional needs, genetic variations, and metabolic markers. We then formulate a liquid multivitamin specifically for your body's requirements, adjusting for factors like age, weight, health conditions, and absorption capabilities.",
                },
                {
                    question: "What lab tests do you recommend?",
                    answer:
                        "We work with standard comprehensive metabolic panels, vitamin D, B12, folate, iron studies, and genetic testing for methylation pathways (MTHFR, COMT, etc.). You can use existing lab results from your doctor or order tests through our partner laboratories. Our medical team reviews all results before formulation.",
                },
                {
                    question: "How long before I see results?",
                    answer:
                        "Most customers notice initial improvements in energy and mental clarity within 2-4 weeks. Full optimization typically occurs within 8-12 weeks as your body builds up optimal nutrient stores. We track progress through follow-up assessments and adjust formulations as needed.",
                },
            ],
        },
        // ... keep rest of your faqCategories as before
    ];

    return (
        <div
            style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}
        >
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 lg:py-32">
                {/* Gradient backdrop */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                </div>

                {/* Floating Orbs */}
                <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-[#2EE6D6]/20 rounded-full blur-3xl animate-spin-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2EA7FF]/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute top-1/2 left-1/5 w-64 h-64 bg-[#7B61FF]/15 rounded-full blur-3xl animate-bounce-slow" />

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                        style={{
                            backgroundColor: `${COLORS.accentTeal}10`,
                            borderColor: `${COLORS.accentTeal}30`,
                        }}
                    >
                        <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: COLORS.accentTeal }}
                        />
                        <span
                            className="text-sm font-medium"
                            style={{ color: COLORS.accentTeal }}
                        >
                            FREQUENTLY ASKED QUESTIONS
                        </span>
                    </div>

                    <h1
                        className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
                        style={{ fontFamily: TYPOGRAPHY.heading }}
                    >
                        Got Questions?
                        <span className="block bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                            We Have Answers
                        </span>
                    </h1>

                    <p
                        className="text-xl leading-relaxed max-w-2xl mx-auto"
                        style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                    >
                        Everything you need to know about personalized nutrition, our process,
                        and how Vita-Choice can transform your health.
                    </p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {faqCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-16">
                            <h2
                                className="text-2xl font-bold mb-8 flex items-center gap-3"
                                style={{ fontFamily: TYPOGRAPHY.heading }}
                            >
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] flex items-center justify-center">
                                    <span className="text-[#0B0C0E] text-sm font-bold">
                                        {categoryIndex + 1}
                                    </span>
                                </div>
                                {category.title}
                            </h2>

                            <div className="space-y-4">
                                {category.faqs.map((faq, faqIndex) => {
                                    const globalIndex = categoryIndex * 100 + faqIndex;
                                    const isOpen = openItems.includes(globalIndex);

                                    return (
                                        <div
                                            key={faqIndex}
                                            className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl border border-[#262A31] overflow-hidden transition-all duration-300 hover:border-[#2EE6D6]/30"
                                        >
                                            <button
                                                onClick={() => toggleItem(globalIndex)}
                                                className="w-full p-6 text-left flex items-center justify-between group"
                                            >
                                                <h3
                                                    className="text-lg font-semibold pr-4 group-hover:text-[#2EE6D6] transition-colors duration-300"
                                                    style={{ fontFamily: TYPOGRAPHY.heading }}
                                                >
                                                    {faq.question}
                                                </h3>
                                                <div
                                                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen
                                                            ? "rotate-45 border-[#2EE6D6] bg-[#2EE6D6]/10"
                                                            : "border-[#262A31] group-hover:border-[#2EE6D6]/50"
                                                        }`}
                                                >
                                                    <svg
                                                        className="w-4 h-4"
                                                        style={{
                                                            color: isOpen
                                                                ? COLORS.accentTeal
                                                                : COLORS.textMuted,
                                                        }}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        />
                                                    </svg>
                                                </div>
                                            </button>

                                            <div
                                                className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                                    } overflow-hidden`}
                                            >
                                                <div className="px-6 pb-6 border-t border-[#262A31]">
                                                    <p
                                                        className="pt-4 leading-relaxed"
                                                        style={{
                                                            color: COLORS.textMuted,
                                                            fontFamily: TYPOGRAPHY.body,
                                                        }}
                                                    >
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="py-24" style={{ backgroundColor: COLORS.surface }}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-[#14161A]/80 to-[#262A31]/80 rounded-3xl p-12 border border-[#2EE6D6]/20">
                        <div className="text-5xl mb-6">💬</div>
                        <h2
                            className="text-3xl font-bold mb-4"
                            style={{ fontFamily: TYPOGRAPHY.heading }}
                        >
                            Still Have Questions?
                        </h2>
                        <p
                            className="text-lg mb-8 max-w-2xl mx-auto"
                            style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                        >
                            Our medical team and customer success specialists are here to help.
                            Get personalized answers to your specific health questions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-8 py-4 rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] transition-all duration-300 hover:-translate-y-1">
                                Contact Our Team
                            </button>
                            <button
                                className="px-8 py-4 rounded-xl border font-semibold transition-all duration-300 hover:border-white hover:bg-white/5"
                                style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}
                            >
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .animate-spin-slow {
          animation: spin 40s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 6s ease-in-out infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
        </div>
    );
};

export default FAQPage;
