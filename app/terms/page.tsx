"use client";

import React from 'react';
import { COLORS, TYPOGRAPHY, SPACING } from '../lib/constants';

const TermsOfServicePage = () => {
    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Hero Section */}
            <section className="relative overflow-hidden"
                style={{ paddingTop: SPACING.sectionMobile, paddingBottom: SPACING.sectionMobile }}>
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[#2EA7FF]/8 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                            style={{
                                backgroundColor: `${COLORS.accentBlue}10`,
                                borderColor: `${COLORS.accentBlue}30`
                            }}>
                            <span className="text-sm font-medium" style={{ color: COLORS.accentBlue }}>
                                TERMS OF SERVICE
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: TYPOGRAPHY.h1,
                            fontFamily: TYPOGRAPHY.heading,
                            color: COLORS.textPrimary
                        }}
                            className="font-bold leading-tight mb-4">
                            Terms of Service
                        </h1>
                        <p style={{
                            color: COLORS.textMuted,
                            fontFamily: TYPOGRAPHY.body,
                            fontSize: TYPOGRAPHY.base
                        }}>
                            Last updated: January 2024
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section style={{ paddingTop: SPACING.sectionMobile, paddingBottom: SPACING.sectionMobile }}>
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="rounded-2xl p-8 border mb-8"
                        style={{
                            backgroundColor: COLORS.surface,
                            borderColor: COLORS.border
                        }}>
                        <h2 style={{
                            fontSize: TYPOGRAPHY.h3,
                            fontFamily: TYPOGRAPHY.heading,
                            color: COLORS.textPrimary
                        }}
                            className="font-bold mb-4">
                            Agreement to Terms
                        </h2>
                        <p style={{
                            color: COLORS.textMuted,
                            fontFamily: TYPOGRAPHY.body,
                            fontSize: TYPOGRAPHY.base,
                            lineHeight: '1.7'
                        }}>
                            By accessing and using Vita-Choice services, you agree to be bound by these Terms of Service.
                            Please read them carefully. If you do not agree to these terms, you may not use our services.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 style={{
                                fontSize: TYPOGRAPHY.h2,
                                fontFamily: TYPOGRAPHY.heading,
                                color: COLORS.accentBlue
                            }}
                                className="font-bold mb-6">
                                1. Service Description
                            </h2>
                            <div style={{
                                color: COLORS.textMuted,
                                fontFamily: TYPOGRAPHY.body,
                                fontSize: TYPOGRAPHY.base,
                                lineHeight: '1.7'
                            }}
                                className="space-y-4">
                                <p>
                                    Vita-Choice provides personalized liquid nutritional supplements based on individual health assessments,
                                    laboratory results, and medical review. Our services include health assessments, custom formulations,
                                    medical review by licensed healthcare professionals, and ongoing support.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 style={{
                                fontSize: TYPOGRAPHY.h2,
                                fontFamily: TYPOGRAPHY.heading,
                                color: COLORS.accentBlue
                            }}
                                className="font-bold mb-6">
                                2. Medical Disclaimer
                            </h2>
                            <div className="rounded-2xl p-6 border mb-6"
                                style={{
                                    backgroundColor: `${COLORS.error}10`,
                                    borderColor: `${COLORS.error}20`
                                }}>
                                <div style={{
                                    color: COLORS.textMuted,
                                    fontFamily: TYPOGRAPHY.body,
                                    fontSize: TYPOGRAPHY.base,
                                    lineHeight: '1.7'
                                }}
                                    className="space-y-4">
                                    <p><strong style={{ color: COLORS.error }}>IMPORTANT:</strong> Vita-Choice products are dietary supplements, not medications. Our services do not constitute medical advice, diagnosis, or treatment.</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Always consult your healthcare provider before starting any supplement regimen</li>
                                        <li>Do not stop prescribed medications without medical supervision</li>
                                        <li>Inform your doctor about all supplements you're taking</li>
                                        <li>Seek immediate medical attention for serious health concerns</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 style={{
                                fontSize: TYPOGRAPHY.h2,
                                fontFamily: TYPOGRAPHY.heading,
                                color: COLORS.accentBlue
                            }}
                                className="font-bold mb-6">
                                3. User Responsibilities
                            </h2>
                            <div style={{
                                color: COLORS.textMuted,
                                fontFamily: TYPOGRAPHY.body,
                                fontSize: TYPOGRAPHY.base,
                                lineHeight: '1.7'
                            }}
                                className="space-y-6">
                                <div>
                                    <h3 style={{
                                        fontSize: TYPOGRAPHY.h3,
                                        color: COLORS.textPrimary,
                                        fontFamily: TYPOGRAPHY.heading
                                    }}
                                        className="font-semibold mb-2">
                                        Accurate Information
                                    </h3>
                                    <p>You must provide accurate, complete health information. Inaccurate information may result in inappropriate formulations.</p>
                                </div>

                                <div>
                                    <h3 style={{
                                        fontSize: TYPOGRAPHY.h3,
                                        color: COLORS.textPrimary,
                                        fontFamily: TYPOGRAPHY.heading
                                    }}
                                        className="font-semibold mb-2">
                                        Account Security
                                    </h3>
                                    <p>You are responsible for maintaining account security and all activities under your account.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 style={{
                                fontSize: TYPOGRAPHY.h2,
                                fontFamily: TYPOGRAPHY.heading,
                                color: COLORS.accentBlue
                            }}
                                className="font-bold mb-6">
                                4. Orders and Payment
                            </h2>
                            <div style={{
                                color: COLORS.textMuted,
                                fontFamily: TYPOGRAPHY.body,
                                fontSize: TYPOGRAPHY.base,
                                lineHeight: '1.7'
                            }}
                                className="space-y-4">
                                <p>
                                    All orders are subject to medical review and acceptance. We reserve the right to refuse orders for safety reasons.
                                    Prices are subject to change without notice. Payment is required at time of order placement.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 style={{
                                fontSize: TYPOGRAPHY.h2,
                                fontFamily: TYPOGRAPHY.heading,
                                color: COLORS.accentBlue
                            }}
                                className="font-bold mb-6">
                                5. Limitation of Liability
                            </h2>
                            <div style={{
                                color: COLORS.textMuted,
                                fontFamily: TYPOGRAPHY.body,
                                fontSize: TYPOGRAPHY.base,
                                lineHeight: '1.7'
                            }}
                                className="space-y-4">
                                <p>To the maximum extent permitted by law:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Vita-Choice provides services "as is" without warranties of any kind</li>
                                    <li>We are not liable for indirect, consequential, or punitive damages</li>
                                    <li>Our total liability shall not exceed the amount you paid for services</li>
                                    <li>We do not guarantee specific health outcomes or results</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 style={{
                                fontSize: TYPOGRAPHY.h2,
                                fontFamily: TYPOGRAPHY.heading,
                                color: COLORS.accentBlue
                            }}
                                className="font-bold mb-6">
                                6. Changes and Termination
                            </h2>
                            <div style={{
                                color: COLORS.textMuted,
                                fontFamily: TYPOGRAPHY.body,
                                fontSize: TYPOGRAPHY.base,
                                lineHeight: '1.7'
                            }}
                                className="space-y-4">
                                <p>
                                    We may update these terms from time to time with notice. Either party may terminate this agreement at any time.
                                    You may cancel through your account settings. We may suspend accounts for violations of these terms.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 style={{
                                fontSize: TYPOGRAPHY.h2,
                                fontFamily: TYPOGRAPHY.heading,
                                color: COLORS.accentBlue
                            }}
                                className="font-bold mb-6">
                                7. Contact Information
                            </h2>
                            <div className="rounded-2xl p-6 border"
                                style={{
                                    backgroundColor: COLORS.surface,
                                    borderColor: COLORS.border
                                }}>
                                <p style={{
                                    color: COLORS.textMuted,
                                    fontFamily: TYPOGRAPHY.body,
                                    fontSize: TYPOGRAPHY.base,
                                    lineHeight: '1.7'
                                }}>
                                    Questions about these Terms of Service? Contact our legal team:
                                </p>
                                <div className="mt-4 space-y-2"
                                    style={{
                                        color: COLORS.textPrimary,
                                        fontFamily: TYPOGRAPHY.body,
                                        fontSize: TYPOGRAPHY.base
                                    }}>
                                    <p><strong>Email:</strong> <span style={{ color: COLORS.accentBlue }}>legal@vita-choice.com</span></p>
                                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                                    <p><strong>Mail:</strong> Vita-Choice Legal Department<br />123 Health Plaza, Suite 450<br />New York, NY 10001</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfServicePage;