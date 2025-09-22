"use client";

import { COLORS, TYPOGRAPHY, CTA } from "../lib/constants";

export default function Newsletter() {
    return (
        <section
            className="relative py-20 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: COLORS.background }}
        >
            <div className="max-w-3xl mx-auto text-center space-y-8">
                {/* Heading */}
                <h2
                    className="font-extrabold"
                    style={{
                        fontSize: TYPOGRAPHY.h2,
                        fontFamily: TYPOGRAPHY.heading,
                        color: COLORS.textPrimary,
                    }}
                >
                    Stay in the Loop
                </h2>
                <p
                    className="max-w-2xl mx-auto"
                    style={{
                        color: COLORS.textMuted,
                        fontFamily: TYPOGRAPHY.body,
                    }}
                >
                    Join our early access list to get launch updates, exclusive discounts,
                    and clinical insights. No spam — only what matters.
                </p>

                {/* Form */}
                <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full sm:w-auto flex-1 px-6 py-4 rounded-xl bg-[#0B0C0E] border focus:outline-none focus:ring-2 transition text-white placeholder-[#B7C0CD]"
                        style={{
                            borderColor: COLORS.border,
                            fontFamily: TYPOGRAPHY.body,
                        }}
                    />
                    <button
                        type="submit"
                        className={`${CTA.button} flex items-center justify-center`}
                    >
                        Subscribe
                    </button>
                </form>

                {/* Subtext */}
                <div
                    className="text-xs opacity-75"
                    style={{
                        color: COLORS.textMuted,
                        fontFamily: TYPOGRAPHY.body,
                    }}
                >
                    You can unsubscribe anytime. Your privacy is always protected.
                </div>
            </div>
        </section>
    );
}
