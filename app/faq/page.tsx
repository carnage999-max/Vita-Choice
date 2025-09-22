"use client";

import React, { useState } from 'react';
import { COLORS, TYPOGRAPHY } from '../lib/constants';

const FAQPage = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const faqCategories = [
        {
            title: "Getting Started",
            faqs: [
                {
                    question: "How does personalized nutrition work?",
                    answer: "Our process starts with comprehensive lab work (blood, saliva, or urine tests) that reveals your unique nutritional needs, genetic variations, and metabolic markers. We then formulate a liquid multivitamin specifically for your body's requirements, adjusting for factors like age, weight, health conditions, and absorption capabilities."
                },
                {
                    question: "What lab tests do you recommend?",
                    answer: "We work with standard comprehensive metabolic panels, vitamin D, B12, folate, iron studies, and genetic testing for methylation pathways (MTHFR, COMT, etc.). You can use existing lab results from your doctor or order tests through our partner laboratories. Our medical team reviews all results before formulation."
                },
                {
                    question: "How long before I see results?",
                    answer: "Most customers notice initial improvements in energy and mental clarity within 2-4 weeks. Full optimization typically occurs within 8-12 weeks as your body builds up optimal nutrient stores. We track progress through follow-up assessments and adjust formulations as needed."
                }
            ]
        },
        {
            title: "Product & Formulation",
            faqs: [
                {
                    question: "Why liquid instead of pills or capsules?",
                    answer: "Liquid formulations offer 95%+ bioavailability compared to 10-20% for most pills. Your body doesn't need to break down capsules or tablets, and nutrients are immediately available for absorption. Plus, we can include precise doses of each nutrient without the size constraints of pills."
                },
                {
                    question: "What makes your ingredients different?",
                    answer: "We exclusively use methylated, bioidentical forms of vitamins (like 5-MTHF instead of folic acid, methylcobalamin instead of cyanocobalamin). These bypass genetic variations that prevent many people from properly converting synthetic vitamins. All ingredients are third-party tested for purity and potency."
                },
                {
                    question: "Are there any artificial ingredients?",
                    answer: "Absolutely not. Our formulations contain zero artificial colors, flavors, sweeteners, or preservatives. We use natural fruit extracts for flavor and natural preservatives like vitamin E. Every ingredient serves a nutritional purpose—no fillers or binders."
                },
                {
                    question: "How do you ensure product quality?",
                    answer: "All products are manufactured in FDA-registered, cGMP-certified facilities. Every batch undergoes third-party testing for heavy metals, microorganisms, and nutrient potency. We maintain complete traceability from raw materials to your bottle."
                }
            ]
        },
        {
            title: "Safety & Medical",
            faqs: [
                {
                    question: "Is medical supervision required?",
                    answer: "While not required, we strongly recommend working with a healthcare provider. Our medical team reviews all formulations for safety, but your personal physician knows your complete medical history. We provide detailed ingredient lists and dosages for your doctor's review."
                },
                {
                    question: "Can I take this with medications?",
                    answer: "Our formulations are generally safe with most medications, but nutrient-drug interactions can occur. We flag potential concerns during formulation and recommend discussing with your prescribing physician. Common interactions include blood thinners (vitamin K), thyroid medications (iron, calcium), and certain antibiotics."
                },
                {
                    question: "What about pregnancy and breastfeeding?",
                    answer: "Pregnant and breastfeeding women have unique nutritional needs that require medical oversight. While our ingredients are high-quality and safe, we require consultation with your OB/GYN before creating prenatal formulations. We can adjust standard formulas for these special circumstances."
                },
                {
                    question: "Are there any side effects?",
                    answer: "Side effects are rare due to our personalized approach and high-quality ingredients. Some people may experience mild digestive adjustment during the first week. If you experience any concerns, contact our medical team immediately. We can adjust formulations to eliminate any issues."
                }
            ]
        },
        {
            title: "Ordering & Shipping",
            faqs: [
                {
                    question: "How does the ordering process work?",
                    answer: "1) Complete our health assessment, 2) Upload or order lab work, 3) Our medical team creates your personalized formula, 4) Receive your custom bottle within 7-10 business days. Each bottle is labeled with your name and specific formulation details."
                },
                {
                    question: "What are the shipping options?",
                    answer: "We offer free standard shipping (5-7 business days) within the US, Canada, EU, UK, and Australia. Express shipping (2-3 days) is available for additional cost. International orders may be subject to customs duties and take 10-14 business days."
                },
                {
                    question: "How often will I need to reorder?",
                    answer: "Each bottle contains a 30-day supply. We recommend subscription delivery to ensure you never run out. You can adjust, pause, or cancel anytime. We suggest retesting and formula updates every 6-12 months to optimize as your health evolves."
                },
                {
                    question: "What's your return policy?",
                    answer: "We offer a 60-day money-back guarantee. If you're not completely satisfied, return the bottle (even if empty) for a full refund. Custom formulations make returns rare, but your satisfaction is our priority."
                }
            ]
        },
        {
            title: "Pricing & Subscriptions",
            faqs: [
                {
                    question: "How much does Vita-Choice cost?",
                    answer: "Pricing varies based on your individual formulation complexity and ingredients needed. Most formulations range from $89-149 per month. While this may seem premium compared to generic multivitamins, you'd need multiple high-quality supplements to match what we provide in one bottle."
                },
                {
                    question: "Do you offer subscription discounts?",
                    answer: "Yes! Subscription customers save 15% on every order plus get free shipping. You maintain full control—modify, skip, or cancel anytime. Subscribers also get priority access to new features and free periodic formula optimizations."
                },
                {
                    question: "Are there additional costs for lab work?",
                    answer: "Lab work is separate from your supplement cost. If you have recent labs (within 6 months), there's no additional cost. If you need new testing, our partner labs offer discounted rates ($150-300 depending on tests needed). Many insurance plans cover basic nutritional testing."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Shop Pay. Subscription customers can also use bank transfers for additional savings. All transactions are encrypted and PCI-compliant."
                }
            ]
        }
    ];

    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-24 lg:py-32">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#2EA7FF]/8 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                        style={{
                            backgroundColor: `${COLORS.accentTeal}10`,
                            borderColor: `${COLORS.accentTeal}30`
                        }}>
                        <div className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: COLORS.accentTeal }} />
                        <span className="text-sm font-medium" style={{ color: COLORS.accentTeal }}>
                            FREQUENTLY ASKED QUESTIONS
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6"
                        style={{ fontFamily: TYPOGRAPHY.heading }}>
                        Got Questions?
                        <span className="block bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                            We Have Answers
                        </span>
                    </h1>

                    <p className="text-xl leading-relaxed max-w-2xl mx-auto"
                        style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
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
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3"
                                style={{ fontFamily: TYPOGRAPHY.heading }}>
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
                                        <div key={faqIndex}
                                            className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl border border-[#262A31] overflow-hidden transition-all duration-300 hover:border-[#2EE6D6]/30">
                                            <button
                                                onClick={() => toggleItem(globalIndex)}
                                                className="w-full p-6 text-left flex items-center justify-between group"
                                            >
                                                <h3 className="text-lg font-semibold pr-4 group-hover:text-[#2EE6D6] transition-colors duration-300"
                                                    style={{ fontFamily: TYPOGRAPHY.heading }}>
                                                    {faq.question}
                                                </h3>
                                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'rotate-45 border-[#2EE6D6] bg-[#2EE6D6]/10' : 'border-[#262A31] group-hover:border-[#2EE6D6]/50'
                                                    }`}>
                                                    <svg className="w-4 h-4" style={{ color: isOpen ? COLORS.accentTeal : COLORS.textMuted }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                                    </svg>
                                                </div>
                                            </button>

                                            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                } overflow-hidden`}>
                                                <div className="px-6 pb-6 border-t border-[#262A31]">
                                                    <p className="pt-4 leading-relaxed"
                                                        style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
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
                        <h2 className="text-3xl font-bold mb-4"
                            style={{ fontFamily: TYPOGRAPHY.heading }}>
                            Still Have Questions?
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto"
                            style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            Our medical team and customer success specialists are here to help.
                            Get personalized answers to your specific health questions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-8 py-4 rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] transition-all duration-300 hover:-translate-y-1">
                                Contact Our Team
                            </button>
                            <button className="px-8 py-4 rounded-xl border font-semibold transition-all duration-300 hover:border-white hover:bg-white/5"
                                style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}>
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;