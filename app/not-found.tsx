"use client";

import Link from "next/link";
import { COLORS, TYPOGRAPHY, CTA } from "./lib/constants";

export default function NotFound() {
    return (
        <section
            className="min-h-screen relative overflow-hidden flex items-center justify-center"
            style={{ backgroundColor: COLORS.background }}
        >
            {/* Background gradients & mesh */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/20 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#2EA7FF]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-radial from-[#F5A623]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(${COLORS.accentTeal}40 1px, transparent 1px), linear-gradient(90deg, ${COLORS.accentTeal}40 1px, transparent 1px)`,
                        backgroundSize: "50px 50px",
                    }} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 max-w-2xl px-4">
                {/* Floating 404 digits */}
                <div className="relative w-full h-64 flex items-center justify-center">
                    {["4", "0", "4"].map((digit, idx) => (
                        <span
                            key={idx}
                            className="absolute text-[120px] font-extrabold opacity-90 animate-float"
                            style={{
                                fontFamily: TYPOGRAPHY.heading,
                                left: `${20 + idx * 25}%`,
                                color: idx === 1 ? COLORS.accentTeal : COLORS.textPrimary,
                                animationDelay: `${idx * 0.6}s`,
                            }}
                        >
                            {digit}
                        </span>
                    ))}

                    {/* Floating orbs */}
                    <div className="absolute -top-6 left-1/3 w-12 h-12 bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] rounded-full opacity-40 animate-float-slow blur-sm" />
                    <div className="absolute bottom-0 right-1/3 w-10 h-10 bg-gradient-to-br from-[#F5A623] to-[#f39c12] rounded-full opacity-40 animate-float-delayed blur-sm" />
                    <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-[#737f78] to-[#27ae60] rounded-full opacity-35 animate-float-fast blur-sm" />

                    {/* Gradient streaks */}
                    <div className="absolute top-10 left-1/2 w-32 h-1 bg-gradient-to-r from-[#2EE6D6] to-transparent opacity-40 animate-slide" />
                    <div className="absolute bottom-10 right-1/2 w-40 h-1 bg-gradient-to-r from-[#2EA7FF] to-transparent opacity-40 animate-slide-delayed" />
                </div>

                <p
                    className="text-lg"
                    style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                >
                    Oops! The page you're looking for doesn’t exist.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Link
                        href="/"
                        className={`${CTA.button} flex items-center justify-center gap-2`}
                        style={{
                            fontFamily: TYPOGRAPHY.body,
                            fontSize: TYPOGRAPHY.button,
                            letterSpacing: TYPOGRAPHY.letterSpacingCTA,
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

            {/* Animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes slide {
          0% { transform: translateX(-50%); opacity: 0; }
          50% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(50%); opacity: 0; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 2.5s ease-in-out infinite; }
        .animate-float-delayed { animation: float-slow 5s ease-in-out infinite 2s; }
        .animate-slide { animation: slide 6s linear infinite; }
        .animate-slide-delayed { animation: slide 6s linear infinite 3s; }
      `}</style>
        </section>
    );
}
