"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { COLORS, TYPOGRAPHY, SPACING } from "@/app/lib/constants";

const products = [
    {
        id: 1,
        name: "Vita-Choice™ Core Liquid Multivitamin",
        subtitle: "Fully Methylated",
        price: 149,
        originalPrice: 179,
        category: "Daily Essentials",
        image: "/products/core-vitamin.png",
        rating: 4.9,
        reviewCount: 2847,
        description:
            "A premium, fully methylated, gluten-free, vegan liquid multivitamin base with synergistic cofactors and superfoods (spirulina, seaweed). Designed for high bioavailability and gentle daily use.",
        shortDescription:
            "One premium liquid base. Fully methylated B-complex, bioavailable minerals, and synergistic co-factors for whole-body support. Clean, efficient, daily.",
        benefits: [
            "Energy metabolism support",
            "Cognitive clarity enhancement",
            "Stress resilience building",
            "Immune system support",
        ],
        keyActives: [
            "Methylfolate (5-MTHF) - 400mcg",
            "Methylcobalamin (B12) - 500mcg",
            "P5P (Active B6) - 25mg",
            "Chelated Magnesium - 200mg",
            "Zinc (Bisglycinate) - 15mg",
            "Selenium (Methionine) - 200mcg",
            "Iodine (Kelp) - 150mcg",
            "Vitamin D3 - 2000 IU (adjustable)",
            "Spirulina Complex - 500mg",
            "Seaweed Blend - 300mg",
        ],
        freeFrom: [
            "Gluten",
            "Artificial colors",
            "Artificial sweeteners",
            "GMOs",
            "Dairy",
            "Soy",
        ],
        servingSize: "1 tablespoon (15ml)",
        servingsPerBottle: 30,
        usage:
            "Take 1 tablespoon daily with food, preferably in the morning. Can be taken directly or mixed with water or juice.",
        isBestseller: true,
        faqs: [
            {
                question: "How is this different from regular multivitamins?",
                answer:
                    "Our liquid formula uses fully methylated forms of vitamins that bypass genetic variations (like MTHFR) that prevent proper absorption of synthetic vitamins. Plus, liquid absorption is 95%+ vs 10-20% for pills.",
            },
            {
                question: "Is this safe to take with medications?",
                answer:
                    "While generally safe, we recommend consulting your healthcare provider before starting any new supplement, especially if you take medications or have health conditions.",
            },
            {
                question: "Can I customize the dosage?",
                answer:
                    "Yes! Based on your health assessment and lab work, our medical team can adjust concentrations of key nutrients like Vitamin D, B12, and minerals to meet your specific needs.",
            },
        ],
    },
    {
        id: 2,
        name: "Diabetes Support Stack",
        subtitle: "Targeted Nutritional Formula",
        price: 179,
        originalPrice: 199,
        category: "Condition Support",
        image: "/products/diabetes-support-stack.png",
        rating: 4.7,
        reviewCount: 1132,
        description:
            "Targeted nutrients supporting insulin sensitivity, glucose metabolism, mitochondrial function, and gut balance. Includes specific pre-/probiotics, cinnamon extract, chromium, and other evidence-aligned actives.",
        shortDescription:
            "A complete, evidence-based support system for healthy glucose metabolism and energy balance.",
        benefits: [
            "Improves insulin sensitivity",
            "Supports glucose metabolism",
            "Enhances mitochondrial efficiency",
            "Promotes gut microbiome balance",
        ],
        keyActives: [
            "Cinnamon Extract - 500mg",
            "Chromium Picolinate - 200mcg",
            "Berberine - 300mg",
            "Probiotic Blend - 10B CFU",
            "Alpha Lipoic Acid - 200mg",
        ],
        freeFrom: ["Gluten", "Dairy", "Soy", "Artificial additives"],
        servingSize: "2 capsules daily",
        servingsPerBottle: 60,
        usage: "Take 2 capsules daily with meals, or as directed by your healthcare provider.",
        isBestseller: false,
        faqs: [
            {
                question: "Can this replace my diabetes medication?",
                answer:
                    "No. This stack is intended as a nutritional support supplement. Always continue prescribed medication unless your doctor advises otherwise.",
            },
            {
                question: "How soon can I expect results?",
                answer:
                    "Many users report improved energy and glucose stability within 4–6 weeks, though individual results vary.",
            },
        ],
    },
    {
        id: 3,
        name: "Microplastics Cleanse Stack",
        subtitle: "Environmental Detox Formula",
        price: 189,
        originalPrice: 209,
        category: "Detox & Cleanse",
        image: "/products/microplastic-cleanse-stack.png",
        rating: 4.8,
        reviewCount: 894,
        description:
            "Supports binding, mobilization, and elimination pathways; promotes gut barrier integrity and antioxidant defense for modern environmental exposures.",
        shortDescription:
            "Science-based detox formulation targeting microplastic and toxin exposure.",
        benefits: [
            "Binds and removes microplastics",
            "Strengthens gut barrier integrity",
            "Boosts antioxidant defenses",
            "Supports liver detox pathways",
        ],
        keyActives: [
            "Chlorella - 1000mg",
            "Activated Charcoal - 500mg",
            "Glutathione - 250mg",
            "Quercetin - 150mg",
            "L-Glutamine - 1g",
        ],
        freeFrom: ["GMOs", "Artificial additives", "Soy", "Dairy"],
        servingSize: "3 capsules daily",
        servingsPerBottle: 90,
        usage:
            "Take 3 capsules daily with water. For intensive detox protocols, consult a healthcare provider.",
        isBestseller: false,
        faqs: [
            {
                question: "Is this safe for daily use?",
                answer:
                    "Yes, but we recommend periodic use (8–12 weeks) followed by breaks, depending on exposure and lifestyle factors.",
            },
            {
                question: "Can I combine this with probiotics?",
                answer:
                    "Absolutely. Probiotics may further support gut barrier health alongside the cleanse.",
            },
        ],
    },
    {
        id: 4,
        name: "Daily Dosing Device",
        subtitle: "Precision Liquid Dispenser",
        price: 89,
        originalPrice: 109,
        category: "Accessories",
        image: "/products/daily-dosing-device.png",
        rating: 4.6,
        reviewCount: 542,
        description:
            "A precision-engineered device designed for accurate daily liquid supplement dosing. Ensures consistent serving size and minimal mess, perfect for maintaining your supplement routine.",
        shortDescription:
            "Accurate, mess-free, and convenient liquid dosing for daily supplement use.",
        benefits: [
            "Precise liquid measurement",
            "Mess-free dispensing",
            "Durable, medical-grade materials",
            "Easy cleaning & maintenance",
        ],
        keyActives: [
            "Engineered dispenser mechanism",
            "Calibrated markings",
            "BPA-free, food-safe materials",
        ],
        freeFrom: ["BPA", "Phthalates", "Lead"],
        servingSize: "Variable per use",
        servingsPerBottle: null,
        usage: "Use to measure and dispense the exact serving size of liquid supplements daily.",
        isBestseller: false,
        faqs: [
            {
                question: "Is this dishwasher safe?",
                answer: "Yes, it is fully dishwasher safe for easy cleaning.",
            },
            {
                question: "Can it be used for other liquids?",
                answer:
                    "Yes, it can be used for most dietary supplement liquids, oils, or tinctures.",
            },
        ],
    },
];

const ProductDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const id = params?.id ? Number(params.id) : NaN;

    const product = products.find((p) => p.id === id);

    // redirect to shop if invalid id
    useEffect(() => {
        if (!isFinite(id) || !product) {
            router.replace("/shop");
        }
    }, [id, product, router]);

    // local UI state
    const [activeTab, setActiveTab] = useState("overview");
    const [quantity, setQuantity] = useState(1);

    // if product is not yet available while redirect fires, render nothing
    if (!product) return null;

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "ingredients", label: "Ingredients" },
        { id: "usage", label: "How to Use" },
        { id: "reviews", label: `Reviews (${product.reviewCount})` },
        { id: "faqs", label: "FAQs" },
    ];

    // derive related products if needed (exclude current)
    const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 2);

    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Breadcrumb */}
            <section className="py-4 border-b" style={{ borderColor: COLORS.border }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <nav className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="hover:text-[#2EE6D6] transition-colors" style={{ color: COLORS.textMuted }}>
                            Home
                        </Link>
                        <span style={{ color: COLORS.textMuted }}>/</span>
                        <Link href="/shop" className="hover:text-[#2EE6D6] transition-colors" style={{ color: COLORS.textMuted }}>
                            Shop
                        </Link>
                        <span style={{ color: COLORS.textMuted }}>/</span>
                        <span style={{ color: COLORS.textPrimary }}>{product.name}</span>
                    </nav>
                </div>
            </section>

            {/* Product Header */}
            <section style={{ paddingTop: SPACING.sectionMobile, paddingBottom: SPACING.sectionMobile }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Product Image */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-3xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2EE6D6]/10 to-[#2EA7FF]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                <Image src={product.image} alt={product.name} fill className="object-contain" />
                            </div>

                            {/* Product badges */}
                            <div className="flex gap-2">
                                {product.isBestseller && (
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E]">
                                        BESTSELLER
                                    </span>
                                )}
                                <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: COLORS.success, color: COLORS.background }}>
                                    IN STOCK
                                </span>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm font-medium mb-2" style={{ color: COLORS.accentTeal }}>
                                    {product.category}
                                </p>
                                <h1
                                    style={{
                                        fontSize: TYPOGRAPHY.h1,
                                        fontFamily: TYPOGRAPHY.heading,
                                        color: COLORS.textPrimary,
                                    }}
                                    className="font-bold leading-tight mb-2"
                                >
                                    {product.name}
                                </h1>
                                <p className="text-lg" style={{ color: COLORS.textMuted }}>
                                    {product.subtitle}
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-4">
                                <div className="flex text-[#F5A623] text-lg">
                                    {"★".repeat(Math.floor(product.rating))}
                                    {"☆".repeat(5 - Math.floor(product.rating))}
                                </div>
                                <span style={{ color: COLORS.textMuted }}>
                                    {product.rating} ({product.reviewCount.toLocaleString()} reviews)
                                </span>
                            </div>

                            {/* Short Description */}
                            <p className="text-lg leading-relaxed" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                                {product.shortDescription}
                            </p>

                            {/* Key Benefits */}
                            <div>
                                <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.textPrimary }}>
                                    Key Benefits
                                </h3>
                                <ul className="space-y-2">
                                    {product.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.accentTeal }} />
                                            <span style={{ color: COLORS.textPrimary }}>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pricing */}
                            <div className="space-y-4 p-6 rounded-2xl border" style={{ backgroundColor: COLORS.surface, borderColor: COLORS.border }}>
                                <div className="flex items-center gap-4">
                                    <span style={{ fontSize: TYPOGRAPHY.h2, fontFamily: TYPOGRAPHY.heading, color: COLORS.textPrimary }} className="font-bold">
                                        ${product.price}
                                    </span>
                                    {product.originalPrice > product.price && (
                                        <>
                                            <span className="text-xl line-through" style={{ color: COLORS.textMuted }}>
                                                ${product.originalPrice}
                                            </span>
                                            <span className="px-2 py-1 text-xs font-bold rounded-full bg-[#FF5A5F] text-white">
                                                SAVE ${product.originalPrice - product.price}
                                            </span>
                                        </>
                                    )}
                                </div>
                                <p className="text-sm" style={{ color: COLORS.textMuted }}>
                                    per month • {product.servingsPerBottle ?? "—"} servings • Cancel anytime
                                </p>

                                {/* Quantity and Add to Cart */}
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center">
                                        <label className="text-sm font-medium mr-3" style={{ color: COLORS.textPrimary }}>
                                            Quantity:
                                        </label>
                                        <div className="flex items-center border rounded-lg" style={{ borderColor: COLORS.border }}>
                                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-[#262A31] transition-colors" style={{ color: COLORS.textPrimary }}>
                                                -
                                            </button>
                                            <span className="px-4 py-2 min-w-[60px] text-center" style={{ color: COLORS.textPrimary }}>
                                                {quantity}
                                            </span>
                                            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-[#262A31] transition-colors" style={{ color: COLORS.textPrimary }}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <button className="w-full bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-8 py-4 rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] transition-all duration-300 hover:-translate-y-1">
                                        Add to Cart - ${product.price * quantity}
                                    </button>
                                    <button className="w-full px-8 py-4 rounded-xl border font-semibold transition-all duration-300 hover:border-[#2EE6D6] hover:bg-[#2EE6D6]/10" style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}>
                                        Subscribe & Save 15%
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Tabs */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Tab Navigation */}
                    <div className="border-b mb-8" style={{ borderColor: COLORS.border }}>
                        <nav className="flex space-x-8 overflow-x-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${activeTab === tab.id ? "border-[#2EE6D6] text-[#2EE6D6]" : "border-transparent hover:text-[#2EE6D6]"}`}
                                    style={{ color: activeTab === tab.id ? COLORS.accentTeal : COLORS.textMuted }}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-8">
                        {activeTab === "overview" && (
                            <div className="prose prose-invert max-w-none">
                                <h3 style={{ color: COLORS.textPrimary, fontFamily: TYPOGRAPHY.heading }}>What it does</h3>
                                <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>{product.description}</p>
                            </div>
                        )}

                        {activeTab === "ingredients" && (
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.textPrimary }}>
                                        Active Ingredients
                                    </h3>
                                    <div className="space-y-3">
                                        {Array.isArray(product.keyActives) ? (
                                            product.keyActives.map((active, index) => (
                                                <div key={index} className="flex justify-between items-center py-2 border-b" style={{ borderColor: COLORS.border }}>
                                                    <span style={{ color: COLORS.textPrimary }}>{active.split(" - ")[0]}</span>
                                                    <span style={{ color: COLORS.accentTeal }} className="font-medium">
                                                        {active.split(" - ")[1] ?? ""}
                                                    </span>
                                                </div>
                                            ))
                                        ) : (
                                            <p style={{ color: COLORS.textMuted }}>{product.keyActives}</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.textPrimary }}>
                                        Free From
                                    </h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {product.freeFrom.map((item, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <span style={{ color: COLORS.success }}>✓</span>
                                                <span style={{ color: COLORS.textPrimary }}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "usage" && (
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                    <h3 className="text-xl font-semibold mb-4" style={{ color: COLORS.textPrimary }}>
                                        How to Use
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <strong style={{ color: COLORS.accentTeal }}>Serving Size:</strong>
                                            <span style={{ color: COLORS.textPrimary }}> {product.servingSize}</span>
                                        </div>
                                        <div>
                                            <strong style={{ color: COLORS.accentTeal }}>Instructions:</strong>
                                            <p style={{ color: COLORS.textMuted }}>{product.usage}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "reviews" && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">⭐</div>
                                <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
                                    Reviews Coming Soon
                                </h3>
                                <p style={{ color: COLORS.textMuted }}>We're setting up our review system. Be the first to leave a review!</p>
                            </div>
                        )}

                        {activeTab === "faqs" && (
                            <div className="space-y-4">
                                {product.faqs.map((faq, index) => (
                                    <div key={index} className="bg-gradient-to-r from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                        <h4 className="font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                                            {faq.question}
                                        </h4>
                                        <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-16" style={{ backgroundColor: COLORS.surface }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12" style={{ color: COLORS.textPrimary, fontFamily: TYPOGRAPHY.heading }}>
                        You might also like
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {relatedProducts.map((relatedProduct) => (
                            <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-3xl p-6 border border-[#262A31] hover:border-[#2EE6D6]/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="aspect-square bg-[#0B0C0E] rounded-2xl mb-4 flex items-center justify-center">
                                    <Image src={relatedProduct.image} alt={relatedProduct.name} width={300} height={300} className="object-contain" />
                                </div>
                                <h3 className="font-semibold mb-2" style={{ color: COLORS.textPrimary }}>{relatedProduct.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold" style={{ color: COLORS.textPrimary }}>${relatedProduct.price}</span>
                                    <div className="flex text-[#F5A623]">{"★".repeat(Math.floor(relatedProduct.rating))}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailPage;
