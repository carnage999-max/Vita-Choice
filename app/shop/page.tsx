"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COLORS, TYPOGRAPHY, SPACING } from '../lib/constants';

// Product data based on specification document
const products = [
    {
        id: 1,
        name: "Vita‑Choice™ Core Liquid Multivitamin",
        subtitle: "Fully Methylated",
        price: 149,
        originalPrice: 179,
        category: "Daily Essentials",
        image: "/products/core-vitamin.png",
        rating: 4.9,
        reviewCount: 2847,
        description: "A premium, fully methylated, gluten‑free, vegan liquid multivitamin base with synergistic cofactors and superfoods (spirulina, seaweed). Designed for high bioavailability and gentle daily use.",
        shortDescription: "One premium liquid base. Fully methylated B‑complex, bioavailable minerals, and synergistic co‑factors for whole‑body support. Clean, efficient, daily.",
        benefits: [
            "Energy metabolism support",
            "Cognitive clarity enhancement",
            "Stress resilience building",
            "Immune system support"
        ],
        keyActives: "Methylfolate (5‑MTHF), methylcobalamin, P5P (B6), chelated magnesium, zinc, selenium, iodine, vitamin D baseline 2000 IU (adjustable), spirulina + seaweed complex",
        freeFrom: "Gluten, artificial colors/sweeteners",
        isPopular: true,
        isBestseller: true
    },
    {
        id: 2,
        name: "Diabetes Support Stack",
        subtitle: "Glucose Metabolism Support",
        price: 129,
        originalPrice: 159,
        category: "Targeted Stacks",
        image: "/products/diabetes-support-stack.png",
        rating: 4.7,
        reviewCount: 1293,
        description: "Targeted nutrients supporting insulin sensitivity, glucose metabolism, mitochondrial function, and gut balance. Includes specific pre‑/probiotics, cinnamon extract, chromium, and other evidence‑aligned actives.",
        shortDescription: "Designed to support healthy glucose metabolism, insulin sensitivity, and metabolic flexibility.",
        benefits: [
            "Insulin sensitivity support",
            "Glucose metabolism optimization",
            "Mitochondrial function enhancement",
            "Gut balance maintenance"
        ],
        keyActives: "Chromium (picolinate), Ceylon cinnamon extract, berberine HCl, ALA (R‑alpha‑lipoic acid), magnesium, inositol, pre‑/probiotics blend",
        usage: "Daily with meals; see label for dosing; consult physician if on medication",
        isSpecialized: true
    },
    {
        id: 3,
        name: "Microplastics Cleanse Stack",
        subtitle: "Environmental Defense System",
        price: 169,
        originalPrice: 199,
        category: "Targeted Stacks",
        image: "/products/microplastic-cleanse-stack.png",
        rating: 4.8,
        reviewCount: 876,
        description: "Supports binding, mobilization, and elimination pathways; promotes gut barrier integrity and antioxidant defense for modern environmental exposures.",
        shortDescription: "Supports binding and elimination pathways while reinforcing gut barrier and antioxidant systems.",
        benefits: [
            "Toxin binding & mobilization",
            "Elimination pathway support",
            "Gut barrier integrity",
            "Antioxidant defense enhancement"
        ],
        keyActives: "Soluble fiber complex, chlorella, activated charcoal (timed use), NAC, glutathione precursors, zinc‑carnosine, lactobacillus/bifido strains",
        usage: "Cyclic protocol; maintain hydration and mineral intake",
        isNew: true
    }
];

const collections = [
    { name: "All Products", slug: "all", count: 3 },
    { name: "Daily Essentials", slug: "daily-essentials", count: 1 },
    { name: "Targeted Stacks", slug: "targeted-stacks", count: 2 }
];

const ShopPage = () => {
    const [activeCollection, setActiveCollection] = useState("all");
    const [sortBy, setSortBy] = useState("popular");

    const filteredProducts = products.filter(product =>
        activeCollection === "all" ||
        product.category.toLowerCase().replace(" ", "-") === activeCollection
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price-low":
                return a.price - b.price;
            case "price-high":
                return b.price - a.price;
            case "rating":
                return b.rating - a.rating;
            default:
                return 0; // Keep original order for "popular"
        }
    });

    const ProductCard = ({ product }: { product: typeof products[0] }) => (
        <div className="group bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-3xl p-6 border border-[#262A31] hover:border-[#2EE6D6]/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
            {/* Product badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                {product.isBestseller && (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E]">
                        BESTSELLER
                    </span>
                )}
                {product.isNew && (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full"
                        style={{ backgroundColor: COLORS.success, color: COLORS.background }}>
                        NEW
                    </span>
                )}
                {product.isSpecialized && (
                    <span className="px-2 py-1 text-xs font-semibold rounded-full"
                        style={{ backgroundColor: COLORS.warning, color: COLORS.background }}>
                        SPECIALIZED
                    </span>
                )}
            </div>

            {/* Discount badge */}
            {product.originalPrice > product.price && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-[#FF5A5F] to-[#e74c3c] text-white">
                        SAVE ${product.originalPrice - product.price}
                    </span>
                </div>
            )}

            {/* Product image */}
            <div className="aspect-square bg-gradient-to-br from-[#0B0C0E] to-[#14161A] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2EE6D6]/10 to-[#2EA7FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Replace with actual product image */}
                <Image src={product.image} alt={product.name} fill className="object-contain" />
            </div>

            {/* Product info */}
            <div className="space-y-4">
                <div>
                    <p className="text-sm font-medium mb-1" style={{ color: COLORS.accentTeal }}>
                        {product.category}
                    </p>
                    <h3 className="text-lg font-bold leading-tight"
                        style={{ color: COLORS.textPrimary, fontFamily: TYPOGRAPHY.heading }}>
                        {product.name}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: COLORS.textMuted }}>
                        {product.subtitle}
                    </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex text-[#F5A623]">
                        {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-sm" style={{ color: COLORS.textMuted }}>
                        {product.rating} ({product.reviewCount} reviews)
                    </span>
                </div>

                {/* Short description */}
                <p className="text-sm leading-relaxed line-clamp-3"
                    style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                    {product.shortDescription}
                </p>

                {/* Key benefits */}
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wide"
                        style={{ color: COLORS.accentTeal }}>
                        Key Benefits
                    </p>
                    <ul className="space-y-1">
                        {product.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.accentTeal }} />
                                <span style={{ color: COLORS.textPrimary }}>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold" style={{ color: COLORS.textPrimary }}>
                        ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                        <span className="text-lg line-through" style={{ color: COLORS.textMuted }}>
                            ${product.originalPrice}
                        </span>
                    )}
                    <span className="text-sm" style={{ color: COLORS.textMuted }}>
                        /month
                    </span>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-2">
                    <Link
                        href={`/products/${product.id}`}
                        className="w-full bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-6 py-3 rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] transition-all duration-300 hover:-translate-y-1 text-center block"
                    >
                        View Details
                    </Link>
                    <button className="w-full px-6 py-3 rounded-xl border font-semibold transition-all duration-300 hover:border-[#2EE6D6] hover:bg-[#2EE6D6]/10 text-center"
                        style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}>
                        Quick Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Hero Section */}
            <section className="relative overflow-hidden"
                style={{ paddingTop: SPACING.sectionMobile, paddingBottom: SPACING.sectionMobile }}>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/10 to-transparent rounded-full blur-3xl" />
                </div>
                {/* Floating Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-60 w-12 h-12 rounded-full bg-[#2EE6D6]/20 animate-float-slow" />
                    <div className="absolute bottom-32 right-60 w-10 h-10 bg-[#2EA7FF]/20 rotate-12 animate-float-medium" />
                    <div
                        className="absolute top-1/2 left-1/3 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-[#2EE6D6]/30 animate-float-fast"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                            style={{
                                backgroundColor: `${COLORS.accentTeal}10`,
                                borderColor: `${COLORS.accentTeal}30`
                            }}>
                            <div className="w-2 h-2 rounded-full animate-pulse"
                                style={{ backgroundColor: COLORS.accentTeal }} />
                            <span className="text-sm font-medium" style={{ color: COLORS.accentTeal }}>
                                VITA-CHOICE SHOP
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: TYPOGRAPHY.h1,
                            fontFamily: TYPOGRAPHY.heading,
                            color: COLORS.textPrimary
                        }}
                            className="font-bold leading-tight mb-4">
                            Find Your Formula
                        </h1>
                        <p style={{
                            color: COLORS.textMuted,
                            fontFamily: TYPOGRAPHY.body,
                            fontSize: TYPOGRAPHY.base
                        }}
                            className="text-xl max-w-2xl mx-auto">
                            From daily essentials to targeted stacks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters & Collections */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        {/* Collection filters */}
                        <div className="flex flex-wrap gap-2">
                            {collections.map((collection) => (
                                <button
                                    key={collection.slug}
                                    onClick={() => setActiveCollection(collection.slug)}
                                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${activeCollection === collection.slug
                                            ? 'bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E]'
                                            : 'border hover:border-[#2EE6D6]/50'
                                        }`}
                                    style={activeCollection !== collection.slug ? {
                                        borderColor: COLORS.border,
                                        color: COLORS.textPrimary
                                    } : {}}
                                >
                                    {collection.name} ({collection.count})
                                </button>
                            ))}
                        </div>

                        {/* Sort dropdown */}
                        <div className="flex items-center gap-3">
                            <span className="text-sm" style={{ color: COLORS.textMuted }}>
                                Sort by:
                            </span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 rounded-xl border bg-[#14161A] transition-all duration-300 focus:border-[#2EE6D6] focus:outline-none"
                                style={{
                                    borderColor: COLORS.border,
                                    color: COLORS.textPrimary,
                                    fontFamily: TYPOGRAPHY.body
                                }}
                            >
                                <option value="popular">Most Popular</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Coming Soon Section */}
            <section className="py-16" style={{ backgroundColor: COLORS.surface }}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-[#14161A]/80 to-[#262A31]/80 rounded-3xl p-12 border border-[#2EE6D6]/20">
                        <div className="text-5xl mb-6">🔬</div>
                        <h2 style={{
                            fontSize: TYPOGRAPHY.h2,
                            fontFamily: TYPOGRAPHY.heading,
                            color: COLORS.textPrimary
                        }}
                            className="font-bold mb-4">
                            More Formulas Coming Soon
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto"
                            style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            We're constantly developing new personalized formulations based on the latest research
                            and customer feedback. Join our waitlist to be the first to know about new releases.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-8 py-4 rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] transition-all duration-300 hover:-translate-y-1">
                                Join Waitlist
                            </button>
                            <Link href="/about"
                                className="px-8 py-4 rounded-xl border font-semibold transition-all duration-300 hover:border-white hover:bg-white/5 text-center"
                                style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}>
                                Learn About Our Process
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopPage;