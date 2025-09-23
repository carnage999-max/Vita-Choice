"use client";

import React, { useState } from "react";
import { COLORS, TYPOGRAPHY } from "../lib/constants";
import Link from "next/link";
import WaitlistModal from "../components/WaitlistModal";
import Image from "next/image";

const AboutPage = () => {
    const stats = [
        { number: "10,000+", label: "Lives Transformed" },
        { number: "500+", label: "Doctor Partners" },
        { number: "95%+", label: "Bioavailability Rate" },
        { number: "0", label: "Artificial Fillers" },
    ];

    const values = [
        { title: "Science-First", description: "Backed by peer-reviewed research and clinical validation.", icon: "🔬" },
        { title: "Transparency", description: "Full ingredient disclosure—no proprietary blends.", icon: "🔍" },
        { title: "Personalization", description: "Formulas tailored to your unique biology.", icon: "🧬" },
        { title: "Purity", description: "No fillers, binders, or artificial additives.", icon: "✨" },
    ];

    const teamMembers = [
        { name: "Dr. Juliana Silva", role: "Chief Scientific Officer", specialty: "PhD, Nutritional Biochemistry", image: "/team/juliana-silva.png" },
        { name: "Dr. Claudia Alves", role: "Medical Director", specialty: "MD, Internal Medicine", image: "/team/claudia-alves.png" },
        { name: "Dr. Takehiro Kanegi", role: "Research Director", specialty: "PhD, Molecular Biology", image: "/team/takehiro-kanegi.png" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#2EA7FF]/8 to-transparent rounded-full blur-3xl" />
                </div>
                <div className="relative max-w-5xl mx-auto px-6 py-24 text-center space-y-8">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                        style={{ backgroundColor: `${COLORS.accentTeal}10`, borderColor: `${COLORS.accentTeal}30` }}
                    >
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accentTeal }} />
                        <span className="text-sm font-medium" style={{ color: COLORS.accentTeal }}>
                            ABOUT VITA-CHOICE
                        </span>
                    </div>
                    <h1
                        className="text-4xl lg:text-6xl font-bold leading-tight"
                        style={{ fontFamily: TYPOGRAPHY.heading }}
                    >
                        Redefining{" "}
                        <span className="block bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                            Nutritional Science
                        </span>
                    </h1>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                    >
                        We’re pioneers in personalized nutrition—combining science and individual biology
                        to create formulas that actually work.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="relative py-16 border-t border-b overflow-hidden" style={{ borderColor: COLORS.border }}>
                {/* Floating Icons + Glows */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* DNA */}
                    <div className="absolute top-10 left-12 flex items-center justify-center">
                        <span className="text-4xl animate-bounce-slow opacity-30 relative z-10">🧬</span>
                        <div className="absolute -inset-6 bg-cyan-400/30 blur-3xl rounded-full"></div>
                    </div>
                    {/* Microscope */}
                    <div className="absolute bottom-16 left-1/4 flex items-center justify-center">
                        <span className="text-5xl animate-float opacity-20 relative z-10">🔬</span>
                        <div className="absolute -inset-8 bg-blue-400/25 blur-3xl rounded-full"></div>
                    </div>
                    {/* Sparkle */}
                    <div className="absolute top-1/3 right-20 flex items-center justify-center">
                        <span className="text-5xl animate-bounce-slow opacity-25 relative z-10">✨</span>
                        <div className="absolute -inset-10 bg-purple-400/25 blur-3xl rounded-full"></div>
                    </div>
                    {/* Pill */}
                    <div className="absolute bottom-10 right-1/3 flex items-center justify-center">
                        <span className="text-4xl animate-float opacity-20 relative z-10">💊</span>
                        <div className="absolute -inset-7 bg-pink-400/25 blur-3xl rounded-full"></div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((s, i) => (
                        <div key={i} className="text-center space-y-2">
                            <div className="text-3xl font-bold bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                                {s.number}
                            </div>
                            <div className="text-sm" style={{ color: COLORS.textMuted }}>
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>




            {/* Mission */}
            <section className="py-24 max-w-5xl mx-auto px-6 text-center space-y-8">
                <h2
                    className="text-3xl lg:text-4xl font-bold"
                    style={{ fontFamily: TYPOGRAPHY.heading }}
                >
                    Our Mission
                </h2>
                <p
                    className="text-lg leading-relaxed max-w-3xl mx-auto"
                    style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                >
                    Forget shelves of pill bottles—our customizable liquid multivitamin replaces them all.
                    Each bottle is uniquely formulated for your body, using doctor guidance to personalize dosing by age, weight and condition.
                    Because it’s fully liquid, you absorb nutrients more efficiently and eliminate the binders, fillers and artificial ingredients found in pills.
                    Made from real fruit extracts and certified vegan, gluten-free and additive-free,
                    <span style={{ color: COLORS.accentTeal, fontWeight: 600 }}> this is the world’s first all-in-one multivitamin tailored to You</span>

                </p>
            </section>

            {/* Values */}
            <section className="py-24" style={{ backgroundColor: COLORS.surface }}>
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-3xl lg:text-4xl font-bold text-center mb-16"
                        style={{ fontFamily: TYPOGRAPHY.heading }}
                    >
                        Our Values
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31] hover:border-[#2EE6D6]/30 transition-all hover:-translate-y-2"
                            >
                                <div className="text-3xl mb-4">{v.icon}</div>
                                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: TYPOGRAPHY.heading }}>
                                    {v.title}
                                </h3>
                                <p className="text-sm" style={{ color: COLORS.textMuted }}>
                                    {v.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 max-w-6xl mx-auto px-6">
                <h2
                    className="text-3xl lg:text-4xl font-bold text-center mb-16"
                    style={{ fontFamily: TYPOGRAPHY.heading }}
                >
                    Scientific Leadership
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((m, i) => (
                        <div key={i} className="text-center space-y-2">
                            <div className="relative w-32 h-32 mx-auto rounded-2xl overflow-hidden border border-[#262A31]">
                                <Image
                                    src={m.image}
                                    alt={m.name}
                                    fill
                                    className="object-contain hover:scale-105 transition-transform"
                                />
                            </div>
                            <h3 className="text-lg font-semibold" style={{ fontFamily: TYPOGRAPHY.heading }}>
                                {m.name}
                            </h3>
                            <p className="text-sm" style={{ color: COLORS.accentTeal }}>
                                {m.role}
                            </p>
                            <p className="text-xs" style={{ color: COLORS.textMuted }}>
                                {m.specialty}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center">
                <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#14161A]/80 to-[#262A31]/80 rounded-3xl p-12 border border-[#2EE6D6]/20">
                    <h2
                        className="text-3xl lg:text-4xl font-bold mb-6"
                        style={{ fontFamily: TYPOGRAPHY.heading }}
                    >
                        Ready for{" "}
                        <span className="bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                            Personalized Nutrition?
                        </span>
                    </h2>
                    <p
                        className="text-lg mb-8"
                        style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}
                    >
                        Join thousands already experiencing formulas designed for their unique biology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-8 py-4 rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] hover:-translate-y-1 transition">
                            Start Your Assessment
                        </button>
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-xl border font-semibold transition hover:border-white hover:bg-white/5"
                            style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}
                        >
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </section>
            <WaitlistModal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export default AboutPage;
