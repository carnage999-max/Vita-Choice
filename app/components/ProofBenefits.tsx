"use client";

import { COLORS, TYPOGRAPHY, SPACING } from "../lib/constants";

export default function ProofBenefits() {
    const benefits = [
        "Fully methylated forms for superior uptake",
        "Clean label: gluten-free, no artificial colors/sweeteners",
        "Vegan-friendly, science-led formulations",
        "Global shipping; money-back guarantee",
    ];

    return (
        <section
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
            style={{
                paddingTop: SPACING.sectionMobile,
                paddingBottom: SPACING.sectionMobile,
            }}
        >
            <h2
                className="text-center font-bold"
                style={{
                    fontSize: TYPOGRAPHY.h2,
                    fontFamily: TYPOGRAPHY.heading,
                    color: COLORS.textPrimary,
                }}
            >
                Proof + Benefits
            </h2>

            <ul className="mt-8 space-y-5 list-none max-w-2xl mx-auto">
                {benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        {/* Teal glow bullet */}
                        <span
                            className="mt-1 h-2 w-2 rounded-full flex-shrink-0"
                            style={{
                                backgroundColor: COLORS.accentTeal,
                                boxShadow: `0 0 6px rgba(46,230,214,0.6), 0 0 12px rgba(46,230,214,0.3)`,
                            }}
                        />
                        {/* Text */}
                        <span
                            className="text-base leading-relaxed"
                            style={{
                                color: COLORS.textPrimary,
                                fontFamily: TYPOGRAPHY.body,
                            }}
                        >
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
