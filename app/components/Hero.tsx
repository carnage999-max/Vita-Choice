"use client";

import Link from "next/link";
import Image from "next/image";
import { COLORS, TYPOGRAPHY, SPACING } from "../lib/constants";

export default function Hero({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
    return (
        <section
            className="grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden"
            style={{
                paddingTop: SPACING.sectionMobile,
                paddingBottom: SPACING.sectionMobile,
                backgroundColor: COLORS.background,
            }}
        >
            {/* Text Column */}
            <div className="relative z-10">
                <p
                    className="text-sm uppercase tracking-wide"
                    style={{
                        color: COLORS.accentBlue,
                        fontFamily: TYPOGRAPHY.body,
                        letterSpacing: TYPOGRAPHY.letterSpacingCTA,
                    }}
                >
                    Vita-Choice • Launching Soon
                </p>

                <h1
                    className="mt-4 font-extrabold leading-tight"
                    style={{
                        fontSize: TYPOGRAPHY.h1,
                        fontFamily: TYPOGRAPHY.heading,
                        color: COLORS.textPrimary,
                    }}
                >
                    Customizable Liquid Multivitamin
                </h1>

                <p
                    className="mt-5 max-w-xl"
                    style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                >
                    Every bottle is uniquely formulated for your body, based on ISB results
                    and doctor guidance. No fillers. No binders. Just real results.
                    <p className="mt-5 max-w-xl"
                        style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                        <ul className="mt-6 space-y-3 list-none">
                            {[
                                "Fully Liquid - superior absorption vs. pills",
                                "Made with real fruit extracts",
                                "Individually dosed for age, weight, and conditions",
                                "Doctor reviewed for safety and efficacy",
                                "Vegan, gluten-free, no artificial sweeteners"
                            ].map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    {/* Teal bullet with subtle glow */}
                                    <span
                                        className="mt-1 h-2 w-2 rounded-full flex-shrink-0"
                                        style={{
                                            backgroundColor: COLORS.accentTeal,
                                            boxShadow: `0 0 6px rgba(46,230,214,0.6), 0 0 12px rgba(46,230,214,0.3)`,
                                        }}
                                    />
                                    {/* Text */}
                                    <span
                                        className="text-sm sm:text-base leading-relaxed"
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
                    </p>
                </p>

                <div className="mt-8 flex gap-3 flex-wrap">
                    <Link
                        href={'/shop'}
                        style={{
                            backgroundColor: COLORS.accentTeal,
                            color: COLORS.background,
                            fontFamily: TYPOGRAPHY.body,
                            fontSize: TYPOGRAPHY.button,
                            letterSpacing: TYPOGRAPHY.letterSpacingCTA,
                        }}
                        className="px-5 py-3 rounded-md font-semibold shadow transition hover:opacity-90"
                    >
                        Shop Vita‑Choice
                    </Link>
                    <Link
                        href="/learn-more"
                        style={{
                            borderColor: COLORS.border,
                            color: COLORS.textPrimary,
                            fontFamily: TYPOGRAPHY.body,
                            fontSize: TYPOGRAPHY.button,
                        }}
                        className="px-5 py-3 rounded-md border text-sm transition hover:border-white text-center"
                    >
                        Learn More
                    </Link>
                </div>

                <div
                    className="mt-6 text-xs"
                    style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                >
                    No spam. Exclusive early access and launch offers only.
                </div>
            </div>

            {/* Image Column */}
            <div className="flex items-center justify-center relative z-10">
                {/* Blue glow — spread wider, offset upward */}
                <div
                    className="absolute -top-40 left-1/2 -translate-x-1/2 rounded-full"
                    style={{
                        width: "190%",
                        height: "700px",
                        background: `radial-gradient(circle, rgba(46,167,255,0.18) 0%, transparent 80%)`,
                        filter: "blur(140px)",
                    }}
                />
                {/* Teal glow — centered around image */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        width: "500px",
                        height: "500px",
                        background: `radial-gradient(circle, rgba(46,230,214,0.15) 0%, transparent 75%)`,
                        filter: "blur(110px)",
                    }}
                />
                {/* Product Image */}
                <Image
                    src="/hero-image-.png"
                    alt="Hero product mockup"
                    width={340}
                    height={340}
                    className="relative z-10 mx-auto drop-shadow-2xl"
                />
            </div>
        </section>
    );
}
