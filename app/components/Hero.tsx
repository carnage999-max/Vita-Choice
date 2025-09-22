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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Content flows naturally on mobile */}
                        {/* Background Pattern - Enhanced for seamless blending */}
                        <div className="absolute">
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

                        {/* Text Column */}
                        <div className="relative z-10 space-y-8">
                            {/* Badge */}
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

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1
                                    className="font-extrabold leading-tight"
                                    style={{
                                        fontSize: TYPOGRAPHY.h1,
                                        fontFamily: TYPOGRAPHY.heading,
                                        color: COLORS.textPrimary,
                                    }}
                                >
                                    Customizable Liquid Multivitamin
                                </h1>

                                <p
                                    className="max-w-xl"
                                    style={{
                                        color: COLORS.textMuted,
                                        fontFamily: TYPOGRAPHY.body
                                    }}
                                >
                                    Every bottle is uniquely formulated for your body, based on ISB results
                                    and doctor guidance. No fillers. No binders. Just real results.
                                </p>
                            </div>

                            {/* Feature List */}
                            <div className="space-y-4">
                                <ul className="space-y-4">
                                    {[
                                        "Fully Liquid - superior absorption vs. pills",
                                        "Made with real fruit extracts",
                                        "Individually dosed for age, weight, and conditions",
                                        "Doctor reviewed for safety and efficacy",
                                        "Vegan, gluten-free, no artificial sweeteners"
                                    ].map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-4 group">
                                            {/* Enhanced bullet */}
                                            <div className="relative flex-shrink-0 mt-2">
                                                <div
                                                    className="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                                    style={{
                                                        borderColor: COLORS.accentTeal,
                                                        backgroundColor: `${COLORS.accentTeal}20`,
                                                    }}
                                                >
                                                    <div
                                                        className="w-2 h-2 rounded-full"
                                                        style={{ backgroundColor: COLORS.accentTeal }}
                                                    />
                                                </div>
                                            </div>
                                            {/* Enhanced text */}
                                            <span
                                                className="text-base leading-relaxed group-hover:text-white transition-colors duration-300"
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

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Link
                                    href={'/shop'}
                                    style={{
                                        backgroundColor: COLORS.accentTeal,
                                        color: COLORS.background,
                                        fontFamily: TYPOGRAPHY.body,
                                        fontSize: TYPOGRAPHY.button,
                                        letterSpacing: TYPOGRAPHY.letterSpacingCTA,
                                    }}
                                    className={`${CTA.button} flex items-center justify-center gap-2`}
                                >
                                    Shop Vita‑Choice
                                </Link>

                                <Link
                                    href="/learn-more"
                                    className="px-8 py-4 rounded-xl border text-center font-semibold transition-all duration-300 hover:border-white hover:bg-white/5 hover:shadow-lg flex items-center justify-center gap-2"
                                    style={{
                                        borderColor: COLORS.border,
                                        color: COLORS.textPrimary,
                                        fontFamily: TYPOGRAPHY.body,
                                        fontSize: TYPOGRAPHY.button,
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

                        {/* Enhanced Image Column */}
                        <div className="flex items-center justify-center relative z-10">
                            {/* Enhanced background effects */}
                            <div
                                className="absolute -top-40 left-1/2 -translate-x-1/2 rounded-full"
                                style={{
                                    width: "200%",
                                    height: "800px",
                                    background: `conic-gradient(from 180deg at 50% 50%, rgba(46,167,255,0.1) 0deg, rgba(46,230,214,0.15) 120deg, rgba(46,167,255,0.1) 240deg, rgba(46,230,214,0.1) 360deg)`,
                                    filter: "blur(120px)",
                                    animation: "spin 20s linear infinite",
                                }}
                            />

                            {/* Product container with enhanced styling */}
                            <div className="relative group">
                                {/* Product Image */}
                                <div className="relative z-20 transition-transform duration-700 group-hover:scale-105">
                                    <Image
                                        src="/hero-image-.png"
                                        alt="VitaChoice Liquid Multivitamin"
                                        width={340}
                                        height={340}
                                        className="mx-auto drop-shadow-2xl"
                                        priority
                                    />
                                </div>

                                {/* Enhanced floating elements */}
                                <div className="absolute -top-6 -left-12 w-20 h-20 bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] 
                              rounded-3xl opacity-30 animate-float blur-sm" />
                                <div className="absolute -bottom-8 -right-4 w-16 h-16 bg-gradient-to-br from-[#737f78] to-[#27ae60] 
                              rounded-2xl opacity-40 animate-float-delayed blur-sm" />
                                <div className="absolute top-1/3 -right-8 w-12 h-12 bg-gradient-to-br from-[#F5A623] to-[#f39c12] 
                              rounded-xl opacity-35 animate-bounce blur-sm" />

                                {/* DNA helix elements */}
                                <div className="absolute top-1/4 -left-16 opacity-20">
                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS.accentTeal }} />
                                </div>
                                <div className="absolute bottom-1/3 -right-12 opacity-25">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS.accentBlue }} />
                                </div>
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