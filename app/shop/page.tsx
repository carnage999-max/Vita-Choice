"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COLORS, TYPOGRAPHY, SPACING } from '../lib/constants';

// Interface for API product response
interface ApiProduct {
    id: string;
    name: string;
    subtitle: string | null;
    price: string;
    original_price: string | null;
    category: string;
    image: string;
    rating: string;
    review_count: number;
    description: string;
    short_description: string;
    key_actives: string[];
    free_from: string[];
    benefits: string[];
    serving_size: string | null;
    servings_per_bottle: string | null;
    faqs: Array<{ question: string; answer: string }>;
    usage: string;
    created_at: string;
    updated_at: string;
}

// Interface for internal product structure
interface Product {
    id: number | string;
    name: string;
    subtitle: string;
    price: number;
    originalPrice: number;
    category: string;
    image: string;
    rating: number;
    reviewCount: number;
    description: string;
    shortDescription: string;
    benefits: string[];
    keyActives: string[];
    freeFrom?: string[];
    usage?: string;
    isPopular?: boolean;
    isBestseller?: boolean;
    isNew?: boolean;
    isSpecialized?: boolean;
}

// Fallback product data based on specification document
const fallbackProducts: Product[] = [
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
        keyActives: ["Methylfolate (5‑MTHF)", "methylcobalamin", "P5P (B6)", "chelated magnesium", "zinc", "selenium", "iodine", "vitamin D baseline 2000 IU (adjustable)", "spirulina + seaweed complex"],
        freeFrom: ["Gluten", "artificial colors/sweeteners"],
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
        keyActives: ["Chromium (picolinate)", "Ceylon cinnamon extract", "berberine HCl", "ALA (R‑alpha‑lipoic acid)", "magnesium", "inositol", "pre‑/probiotics blend"],
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
        keyActives: ["Soluble fiber complex", "chlorella", "activated charcoal (timed use)", "NAC", "glutathione precursors", "zinc‑carnosine", "lactobacillus/bifido strains"],
        usage: "Cyclic protocol; maintain hydration and mineral intake",
        isNew: true
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
        description: "A precision-engineered device designed for accurate daily liquid supplement dosing. Ensures consistent serving size and minimal mess, perfect for maintaining your supplement routine.",
        shortDescription: "Accurate, mess-free, and convenient liquid dosing for daily supplement use.",
        benefits: [
            "Precise liquid measurement",
            "Mess-free dispensing",
            "Durable, medical-grade materials",
            "Easy cleaning & maintenance"
        ],
        keyActives: ["Engineered dispenser mechanism with calibrated markings", "BPA-free, food-safe materials"],
        usage: "Use to measure and dispense the exact serving size of liquid supplements daily.",
        isNew: true
    }

];

// Function to transform API product to internal product structure
// Helper function to parse stringified arrays from API
const parseStringArray = (value: string[] | string | null | undefined): string[] => {
    if (!value) return [];
    
    // If it's an array, check if it contains stringified arrays
    if (Array.isArray(value)) {
        // Handle case where array contains stringified arrays like ["['item1', 'item2']"]
        if (value.length === 1 && typeof value[0] === 'string') {
            const singleItem = value[0];
            
            // Replace single quotes with double quotes for proper JSON parsing
            let jsonString = singleItem;
            if (singleItem.startsWith('[') && singleItem.endsWith(']')) {
                // Convert single quotes to double quotes for JSON parsing
                jsonString = singleItem.replace(/'/g, '"');
                
                try {
                    const jsonParsed = JSON.parse(jsonString);
                    if (Array.isArray(jsonParsed)) {
                        // Clean up each item to remove any remaining brackets or quotes
                        const cleaned = jsonParsed
                            .filter(item => item && typeof item === 'string' && item.length > 0)
                            .map(item => item.replace(/^[\[\]'"\s]+|[\[\]'"\s]+$/g, '').trim())
                            .filter(item => item.length > 0);
                        
                        return cleaned;
                    }
                } catch (jsonError) {
                    // Fallback to manual parsing
                    try {
                        const cleanedValue = singleItem.slice(1, -1); // Remove brackets
                        const result = cleanedValue
                            .split(',')
                            .map(item => item.trim().replace(/^['"\[\]]+|['"\[\]]+$/g, ''))
                            .filter(item => item.length > 0);
                        
                        return result;
                    } catch (error) {
                        console.warn('Manual parsing also failed:', error);
                        return [singleItem];
                    }
                }
            }
            // If it's just a regular string in an array, clean it up
            return [singleItem.replace(/^[\[\]'"\s]+|[\[\]'"\s]+$/g, '').trim()].filter(item => item.length > 0);
        }
        // If it's already a proper array with multiple items, clean each item
        return value
            .filter(item => item && typeof item === 'string' && item.length > 0)
            .map(item => item.replace(/^[\[\]'"\s]+|[\[\]'"\s]+$/g, '').trim())
            .filter(item => item.length > 0);
    }
    
    // If it's a string, try JSON parsing first
    if (typeof value === 'string') {
        // Convert single quotes to double quotes for JSON parsing
        let jsonString = value.replace(/'/g, '"');
        
        try {
            const jsonParsed = JSON.parse(jsonString);
            if (Array.isArray(jsonParsed)) {
                return jsonParsed
                    .filter(item => item && typeof item === 'string' && item.length > 0)
                    .map(item => item.replace(/^[\[\]'"\s]+|[\[\]'"\s]+$/g, '').trim())
                    .filter(item => item.length > 0);
            }
        } catch (jsonError) {
            // If JSON parsing fails, continue with manual parsing
        }
        
        try {
            // Handle string arrays like "['item1', 'item2']"
            if (value.startsWith('[') && value.endsWith(']')) {
                // Remove brackets and parse
                const cleanedValue = value.slice(1, -1);
                // Split by comma and clean up quotes and brackets
                return cleanedValue
                    .split(',')
                    .map(item => item.trim().replace(/^['"\[\]]+|['"\[\]]+$/g, ''))
                    .filter(item => item.length > 0);
            }
            // Handle comma-separated strings
            if (value.includes(',')) {
                return value.split(',').map(item => item.trim().replace(/^[\[\]'"\s]+|[\[\]'"\s]+$/g, '')).filter(item => item.length > 0);
            }
            // Single item
            return [value.replace(/^[\[\]'"\s]+|[\[\]'"\s]+$/g, '').trim()].filter(item => item.length > 0);
        } catch (error) {
            console.warn('Failed to parse array string:', value, error);
            return [value];
        }
    }
    
    return [];
};

const transformApiProduct = (apiProduct: ApiProduct): Product => ({
    id: apiProduct.id,
    name: apiProduct.name,
    subtitle: apiProduct.subtitle || "",
    price: parseFloat(apiProduct.price),
    originalPrice: apiProduct.original_price ? parseFloat(apiProduct.original_price) : parseFloat(apiProduct.price),
    category: apiProduct.category,
    image: apiProduct.image,
    rating: parseFloat(apiProduct.rating),
    reviewCount: apiProduct.review_count,
    description: apiProduct.description,
    shortDescription: apiProduct.short_description,
    benefits: parseStringArray(apiProduct.benefits),
    keyActives: parseStringArray(apiProduct.key_actives),
    freeFrom: parseStringArray(apiProduct.free_from),
    usage: apiProduct.usage,
    // Add some default properties for UI display
    isPopular: false,
    isBestseller: false,
    isNew: false,
    isSpecialized: false
});

const ShopPage = () => {
    const [activeCollection, setActiveCollection] = useState("all");
    const [sortBy, setSortBy] = useState("popular");
    const [products, setProducts] = useState<Product[]>(fallbackProducts);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('https://vita-choice-backend.onrender.com/api/product/');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const apiProducts: ApiProduct[] = await response.json();
                
                // Transform API products to internal format
                const transformedProducts = apiProducts.map(transformApiProduct);
                
                // If we have products from API, use them; otherwise keep fallback
                if (transformedProducts.length > 0) {
                    setProducts(transformedProducts);
                }
                
            } catch (err) {
                console.error('Failed to fetch products from API:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch products');
                // Keep using fallback products on error
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Dynamic collections based on actual products
    const collections = [
        { name: "All Products", slug: "all", count: products.length },
        { name: "Daily Essentials", slug: "daily-essentials", count: products.filter((p: Product) => p.category.toLowerCase().includes("daily")).length },
        { name: "Targeted Stacks", slug: "targeted-stacks", count: products.filter((p: Product) => p.category.toLowerCase().includes("stack") || p.category.toLowerCase().includes("target")).length }
    ];

    const filteredProducts = products.filter((product: Product) =>
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

    const ProductCard = ({ product }: { product: Product }) => (
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
                    {/* Loading State */}
                    {loading && (
                        <div className="text-center py-16">
                            <div className="animate-spin w-8 h-8 border-2 border-[#2EE6D6] border-t-transparent rounded-full mx-auto mb-4" />
                            <p style={{ color: COLORS.textMuted }}>Loading products...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="text-center py-16">
                            <div className="bg-[#FF5A5F]/10 border border-[#FF5A5F]/30 rounded-xl p-6 max-w-md mx-auto mb-4">
                                <div className="text-4xl mb-4">⚠️</div>
                                <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                                    API Connection Issue
                                </h3>
                                <p className="text-sm mb-4" style={{ color: COLORS.textMuted }}>
                                    We're having trouble connecting to our servers. Showing sample products instead.
                                </p>
                                <p className="text-xs" style={{ color: COLORS.textMuted }}>
                                    Error: {error}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Products Grid */}
                    {!loading && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}

                    {/* No Products State */}
                    {!loading && sortedProducts.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">📦</div>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
                                No Products Found
                            </h3>
                            <p style={{ color: COLORS.textMuted }}>
                                No products match your current filter selection.
                            </p>
                        </div>
                    )}
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