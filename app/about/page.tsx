"use client";

import React from 'react';
import Image from 'next/image';
import { COLORS, TYPOGRAPHY, SPACING } from '../lib/constants';

const AboutPage = () => {
    const stats = [
        { number: "10,000+", label: "Lives Transformed" },
        { number: "500+", label: "Doctor Partners" },
        { number: "95%+", label: "Bioavailability Rate" },
        { number: "0", label: "Artificial Fillers" }
    ];

    const teamMembers = [
        {
            name: "Dr. Sarah Mitchell",
            role: "Chief Scientific Officer",
            specialty: "Nutritional Biochemistry, PhD",
            image: "/team/sarah-mitchell.jpg",
            bio: "15+ years developing personalized nutrition protocols for clinical settings."
        },
        {
            name: "Dr. James Chen",
            role: "Medical Director",
            specialty: "Internal Medicine, MD",
            image: "/team/james-chen.jpg",
            bio: "Former Mayo Clinic physician specializing in preventive medicine and metabolic health."
        },
        {
            name: "Dr. Maria Rodriguez",
            role: "Research Director",
            specialty: "Molecular Biology, PhD",
            image: "/team/maria-rodriguez.jpg",
            bio: "Leading researcher in methylation pathways and nutrient bioavailability optimization."
        }
    ];

    const values = [
        {
            title: "Science-First",
            description: "Every formula is backed by peer-reviewed research and clinical validation.",
            icon: "🔬"
        },
        {
            title: "Transparency",
            description: "Complete ingredient disclosure with exact forms and amounts—no proprietary blends.",
            icon: "🔍"
        },
        {
            title: "Personalization",
            description: "Your unique biology deserves a unique formula, not one-size-fits-all solutions.",
            icon: "🧬"
        },
        {
            title: "Purity",
            description: "Zero fillers, binders, or artificial additives. Only what your body needs.",
            icon: "✨"
        }
    ];

    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#2EA7FF]/8 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
                    <div className="text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                backgroundColor: `${COLORS.accentTeal}10`,
                                borderColor: `${COLORS.accentTeal}30`
                            }}>
                            <div className="w-2 h-2 rounded-full animate-pulse"
                                style={{ backgroundColor: COLORS.accentTeal }} />
                            <span className="text-sm font-medium" style={{ color: COLORS.accentTeal }}>
                                ABOUT VITA-CHOICE
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight"
                            style={{ fontFamily: TYPOGRAPHY.heading }}>
                            Redefining
                            <span className="block bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                                Nutritional Science
                            </span>
                        </h1>

                        <p className="text-xl leading-relaxed max-w-3xl mx-auto"
                            style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            We're not just another supplement company. We're pioneers in personalized nutrition,
                            combining cutting-edge science with individual biology to create formulas that actually work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-t border-b" style={{ borderColor: COLORS.border }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center space-y-2">
                                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-sm lg:text-base" style={{ color: COLORS.textMuted }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl lg:text-4xl font-bold leading-tight"
                                style={{ fontFamily: TYPOGRAPHY.heading }}>
                                Our Mission
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed"
                                style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                                <p>
                                    Traditional supplements are broken. Most pills contain more fillers than active ingredients,
                                    use inferior forms that your body can't absorb, and follow a one-size-fits-all approach
                                    that ignores your unique genetic makeup.
                                </p>
                                <p>
                                    <span style={{ color: COLORS.accentTeal, fontWeight: 600 }}>We're changing that.</span>
                                    {" "}Vita-Choice combines advanced nutrigenomics, fully methylated compounds, and liquid
                                    delivery systems to create supplements that work with your individual biology—not against it.
                                </p>
                                <p>
                                    Every bottle is formulated based on your lab results, medical history, and genetic markers.
                                    No guesswork. No wasted money. Just results you can feel.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-3xl p-8 border border-[#262A31]">
                                {/* Placeholder for mission illustration */}
                                <div className="aspect-square bg-gradient-to-br from-[#2EE6D6]/10 to-[#2EA7FF]/10 rounded-2xl flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="text-6xl">🧬</div>
                                        <p className="text-sm" style={{ color: COLORS.textMuted }}>
                                            Personalized Nutrition Visualization
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24" style={{ backgroundColor: COLORS.surface }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4"
                            style={{ fontFamily: TYPOGRAPHY.heading }}>
                            Our Values
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto"
                            style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            These principles guide everything we do, from research to formulation to delivery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index}
                                className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31] hover:border-[#2EE6D6]/30 transition-all duration-300 hover:-translate-y-2">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: TYPOGRAPHY.heading }}>
                                    {value.title}
                                </h3>
                                <p className="leading-relaxed" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4"
                            style={{ fontFamily: TYPOGRAPHY.heading }}>
                            Scientific Leadership
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto"
                            style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            Our team combines decades of clinical experience with cutting-edge research
                            in personalized nutrition and nutrigenomics.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index}
                                className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-[#14161A] to-[#262A31] border border-[#262A31] flex items-center justify-center group-hover:border-[#2EE6D6]/30 transition-all duration-300">
                                        {/* Placeholder for team member photo */}
                                        <div className="text-6xl">👨‍⚕️</div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: TYPOGRAPHY.heading }}>
                                    {member.name}
                                </h3>
                                <p className="font-medium mb-2" style={{ color: COLORS.accentTeal }}>
                                    {member.role}
                                </p>
                                <p className="text-sm mb-3" style={{ color: COLORS.textMuted }}>
                                    {member.specialty}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Science & Quality Section */}
            <section className="py-24" style={{ backgroundColor: COLORS.surface }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-3xl p-8 border border-[#262A31]">
                                {/* Placeholder for lab/quality visualization */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2ECC71] to-[#27ae60] flex items-center justify-center">
                                            <span className="text-white text-xl">✓</span>
                                        </div>
                                        <span className="font-medium">Third-Party Lab Testing</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] flex items-center justify-center">
                                            <span className="text-white text-xl">🔬</span>
                                        </div>
                                        <span className="font-medium">cGMP Certified Facilities</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5A623] to-[#f39c12] flex items-center justify-center">
                                            <span className="text-white text-xl">📋</span>
                                        </div>
                                        <span className="font-medium">Doctor Review Process</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl lg:text-4xl font-bold leading-tight"
                                style={{ fontFamily: TYPOGRAPHY.heading }}>
                                Uncompromising
                                <span className="block bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                                    Quality Standards
                                </span>
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed"
                                style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                                <p>
                                    Every Vita-Choice formula is manufactured in FDA-registered, cGMP-certified facilities
                                    and undergoes rigorous third-party testing for purity, potency, and safety.
                                </p>
                                <p>
                                    We use only the highest-grade, bioidentical forms of nutrients—like methylfolate
                                    instead of folic acid, and methylcobalamin instead of cyanocobalamin—ensuring
                                    your body can actually utilize what you're taking.
                                </p>
                                <p>
                                    <span style={{ color: COLORS.accentTeal, fontWeight: 600 }}>
                                        Before any formula reaches you
                                    </span>, it's reviewed by our medical team to ensure safety,
                                    efficacy, and compatibility with your individual health profile.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-[#14161A]/80 to-[#262A31]/80 rounded-3xl p-12 border border-[#2EE6D6]/20">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6"
                            style={{ fontFamily: TYPOGRAPHY.heading }}>
                            Ready to Experience
                            <span className="block bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                                Personalized Nutrition?
                            </span>
                        </h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto"
                            style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            Join thousands who've discovered what nutrition can do when it's designed specifically for their body.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-8 py-4 rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] transition-all duration-300 hover:-translate-y-1">
                                Start Your Assessment
                            </button>
                            <button className="px-8 py-4 rounded-xl border font-semibold transition-all duration-300 hover:border-white hover:bg-white/5"
                                style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}>
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;