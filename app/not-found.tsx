"use client";

import Link from "next/link";
import { COLORS, TYPOGRAPHY, CTA } from "./lib/constants";

export default function NotFound() {
    return (
        <section
            className="min-h-screen relative overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: COLORS.background }}
        >
            {/* Background gradients & floating radial elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/20 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#2EA7FF]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-radial from-[#F5A623]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(${COLORS.accentTeal}40 1px, transparent 1px), linear-gradient(90deg, ${COLORS.accentTeal}40 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 max-w-2xl px-4">
                {/* Floating 404 digits */}
                <div className="relative w-full h-64">
                    {["4", "0", "4"].map((digit, idx) => (
                        <span
                            key={idx}
                            className="absolute text-[100px] font-extrabold text-white opacity-80 animate-float"
                            style={{
                                fontFamily: TYPOGRAPHY.heading,
                                left: `${20 + idx * 30}%`,
                                top: `${20 + idx * 10}%`,
                                color: idx === 1 ? COLORS.accentTeal : COLORS.textPrimary,
                                animationDelay: `${idx * 0.5}s`,
                            }}
                        >
                            {digit}
                        </span>
                    ))}
                </div>

                <p
                    className="text-lg"
                    style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                >
                    Oops! The page you're looking for doesn't exist.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link
                        href="/"
                        className={`${CTA.button} flex items-center justify-center gap-2`}
                        style={{
                            fontFamily: TYPOGRAPHY.body,
                            fontSize: TYPOGRAPHY.button,
                            letterSpacing: TYPOGRAPHY.letterSpacingCTA
                        }}
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/shop"
                        className="px-8 py-4 rounded-xl border text-center font-semibold transition-all duration-300 hover:border-white hover:bg-white/5 hover:shadow-lg flex items-center justify-center gap-2"
                        style={{
                            borderColor: COLORS.border,
                            color: COLORS.textPrimary,
                            fontFamily: TYPOGRAPHY.body,
                            fontSize: TYPOGRAPHY.button,
                        }}
                    >
                        Visit Shop
                    </Link>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}
