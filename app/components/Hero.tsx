"use client";

import Link from "next/link";
import Image from "next/image";
import { COLORS, TYPOGRAPHY, SPACING, CTA } from "../lib/constants";

export default function Hero({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
    return (
        <section
            className="min-h-screen relative overflow-hidden"
            style={{
                backgroundColor: COLORS.background,
            }}
        >
            {/* Full-width container with edge-to-edge design */}
            <div className="relative min-h-screen flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Mobile-first: Image first, desktop: text first */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">{/* Background Pattern - Enhanced for seamless blending */}
                        <div className="absolute inset-0">
                            {/* Primary gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />

                            {/* Dynamic mesh gradient */}
                            <div className="absolute inset-0 opacity-40">
                                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/20 to-transparent rounded-full blur-3xl animate-pulse" />
                                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#2EA7FF]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                                <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-radial from-[#F5A623]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
                            </div>

                            {/* Subtle grid pattern */}
                            <div className="absolute inset-0 opacity-5"
                                style={{
                                    backgroundImage: `linear-gradient(${COLORS.accentTeal}40 1px, transparent 1px), linear-gradient(90deg, ${COLORS.accentTeal}40 1px, transparent 1px)`,
                                    backgroundSize: '50px 50px'
                                }} />

                            {/* Edge fade for seamless blending */}
                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0C0E] to-transparent" />
                            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0B0C0E] to-transparent" />
                        </div>

                        {/* Image Column - Prominent Bottle & Pills Display */}
                        <div className="flex items-center justify-center relative z-10 order-1 lg:order-2">
                            {/* Enhanced background effects */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                style={{
                                    width: "clamp(300px, 80vw, 600px)",
                                    height: "clamp(300px, 80vw, 600px)",
                                    background: `conic-gradient(from 180deg at 50% 50%, rgba(46,167,255,0.15) 0deg, rgba(46,230,214,0.25) 120deg, rgba(46,167,255,0.15) 240deg, rgba(46,230,214,0.15) 360deg)`,
                                    filter: "blur(120px)",
                                    animation: "spin 20s linear infinite",
                                }}
                            />

                            {/* Product container - Larger and more prominent */}
                            <div className="relative group">
                                {/* Product Image - Responsive with different images */}
                                <div className="relative z-20 transition-transform duration-700 group-hover:scale-105">
                                    {/* Desktop Image */}
                                    <Image
                                        src="/new-hero.png"
                                        alt="VitaChoice Liquid Multivitamin - Premium Bottle with Pills"
                                        width={400}
                                        height={400}
                                        className="hidden sm:block mx-auto rounded-2xl drop-shadow-2xl w-full max-w-[280px] sm:max-w-[350px] md:max-w-[380px] lg:max-w-[400px] h-auto"
                                        priority
                                    />
                                    
                                    {/* Mobile Image - Product Placeholder */}
                                    <Image
                                        src="/product-placeholder.png"
                                        alt="VitaChoice Products"
                                        width={280}
                                        height={280}
                                        className="block sm:hidden mx-auto rounded-2xl drop-shadow-2xl w-full max-w-[280px] h-auto"
                                        priority
                                    />
                                </div>

                                {/* Enhanced floating pill elements */}
                                <div className="absolute -top-6 -left-8 sm:-top-8 sm:-left-12 lg:-top-8 lg:-left-16 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] 
                                  rounded-full opacity-40 animate-float blur-sm" />
                                <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 lg:-bottom-10 lg:-right-8 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#737f78] to-[#27ae60] 
                                  rounded-full opacity-50 animate-float-delayed blur-sm" />
                                <div className="absolute top-1/3 -right-6 sm:-right-8 lg:-right-12 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#F5A623] to-[#f39c12] 
                                  rounded-full opacity-45 animate-bounce blur-sm" />
                                  
                                {/* Additional pill elements for "pills" emphasis */}
                                <div className="absolute top-1/4 -left-4 sm:-left-6 lg:-left-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#e74c3c] to-[#c0392b] 
                                  rounded-full opacity-35 animate-pulse" />
                                <div className="absolute bottom-1/4 -right-2 sm:-right-4 lg:-right-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#9b59b6] to-[#8e44ad] 
                                  rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }} />

                                {/* DNA/molecular elements */}
                                <div className="absolute top-1/4 -left-12 sm:-left-16 lg:-left-20 opacity-30">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full" style={{ backgroundColor: COLORS.accentTeal }} />
                                </div>
                                <div className="absolute bottom-1/3 -right-8 sm:-right-12 lg:-right-16 opacity-35">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: COLORS.accentBlue }} />
                                </div>
                            </div>
                        </div>

                        {/* Text Column - Second on mobile, first on desktop */}
                        <div className="relative z-10 space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                            {/* Badge - centered on mobile */}
                            <div className="flex justify-center lg:justify-start">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                                    style={{
                                        backgroundColor: `${COLORS.accentTeal}10`,
                                        borderColor: `${COLORS.accentTeal}30`
                                    }}>
                                    <div className="w-2 h-2 rounded-full animate-pulse"
                                        style={{ backgroundColor: COLORS.accentTeal }} />
                                    <span
                                        className="text-sm font-medium"
                                        style={{
                                            color: COLORS.accentTeal,
                                            fontFamily: TYPOGRAPHY.body,
                                            letterSpacing: TYPOGRAPHY.letterSpacingCTA,
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Nutrition, Elevated
                                    </span>
                                </div>
                            </div>

                            {/* Main Heading - responsive sizing */}
                            <div className="space-y-4">
                                <h1
                                    className="font-extrabold leading-tight"
                                    style={{
                                        fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', // Responsive between 28px and 44px
                                        fontFamily: TYPOGRAPHY.heading,
                                        color: COLORS.textPrimary,
                                    }}
                                >
                                    Customizable Liquid Multivitamin
                                </h1>

                                <p
                                    className="max-w-xl mx-auto lg:mx-0"
                                    style={{
                                        color: COLORS.textMuted,
                                        fontFamily: TYPOGRAPHY.body,
                                        fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' // 14px to 16px responsive
                                    }}
                                >
                                    One patented liquid multivitamin—over 5,000 ingredients in one simple drink, 
                                    replacing handfuls of pills for complete body and mind nutrition.
                                </p>
                            </div>

                            {/* Feature List - mobile optimized */}
                            <div className="space-y-3 sm:space-y-4">
                                <ul className="space-y-3 sm:space-y-4 max-w-md mx-auto lg:max-w-none lg:mx-0">
                                    {[
                                        "Fully Liquid - superior absorption vs. pills",
                                        "Made with real fruit extracts",
                                        "Individually dosed for age, weight, and conditions",
                                        "Doctor reviewed for safety and efficacy",
                                        "Vegan, gluten-free, no artificial sweeteners"
                                    ].map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 sm:gap-4 group text-left">
                                            {/* Enhanced bullet - smaller on mobile */}
                                            <div className="relative flex-shrink-0 mt-1 sm:mt-2">
                                                <div
                                                    className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                                    style={{
                                                        borderColor: COLORS.accentTeal,
                                                        backgroundColor: `${COLORS.accentTeal}20`,
                                                    }}
                                                >
                                                    <div
                                                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                                                        style={{ backgroundColor: COLORS.accentTeal }}
                                                    />
                                                </div>
                                            </div>
                                            {/* Enhanced text - smaller on mobile */}
                                            <span
                                                className="text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300"
                                                style={{
                                                    color: COLORS.textPrimary,
                                                    fontFamily: TYPOGRAPHY.body,
                                                }}
                                            >
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Buttons - mobile optimized */}
                            <div className="flex flex-col gap-3 sm:gap-4 pt-4 max-w-sm mx-auto lg:max-w-none lg:mx-0 lg:flex-row">
                                <Link
                                    href={'/shop'}
                                    style={{
                                        backgroundColor: COLORS.accentTeal,
                                        color: COLORS.background,
                                        fontFamily: TYPOGRAPHY.body,
                                        fontSize: 'clamp(0.875rem, 2vw, 1rem)', // 14px to 16px responsive
                                        letterSpacing: TYPOGRAPHY.letterSpacingCTA,
                                    }}
                                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] text-center"
                                >
                                    Shop Vita‑Choice
                                </Link>

                                <Link
                                    href="/about"
                                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl border text-center font-semibold transition-all duration-300 hover:border-white hover:bg-white/5 hover:shadow-lg"
                                    style={{
                                        borderColor: COLORS.border,
                                        color: COLORS.textPrimary,
                                        fontFamily: TYPOGRAPHY.body,
                                        fontSize: 'clamp(0.875rem, 2vw, 1rem)', // 14px to 16px responsive
                                    }}
                                >
                                    Learn More
                                </Link>
                            </div>

                            <div
                                className="text-xs opacity-75"
                                style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                            >
                                No spam. Exclusive early access and launch offers only.
                            </div>
                        </div>
                    </div>

                    {/* Bottom Decorative Section */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0C0E] to-transparent" />
                </div>
            </div>
        </section>
    );
}