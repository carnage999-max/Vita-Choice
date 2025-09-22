"use client";

import React from 'react';
import { COLORS, TYPOGRAPHY } from '../lib/constants';

const PrivacyPolicyPage = () => {
    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 lg:py-24">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/8 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                            style={{
                                backgroundColor: `${COLORS.accentTeal}10`,
                                borderColor: `${COLORS.accentTeal}30`
                            }}>
                            <span className="text-sm font-medium" style={{ color: COLORS.accentTeal }}>
                                PRIVACY POLICY
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4"
                            style={{ fontFamily: TYPOGRAPHY.heading }}>
                            Privacy Policy
                        </h1>
                        <p className="text-lg" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            Last updated: January 2024
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="prose prose-invert max-w-none">
                        <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-8 border border-[#262A31] mb-8">
                            <h2 className="text-xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.textPrimary }}>
                                Your Privacy Matters
                            </h2>
                            <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                At Vita-Choice, we understand that your health information is deeply personal. This Privacy Policy explains
                                how we collect, use, protect, and share your information when you use our services. We are committed to
                                maintaining the highest standards of data protection and transparency.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    1. Information We Collect
                                </h2>

                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Health Information</h3>
                                        <p>We collect health-related information you provide, including:</p>
                                        <ul className="list-disc ml-6 mt-2 space-y-1">
                                            <li>Medical history, current medications, and health conditions</li>
                                            <li>Laboratory test results and genetic testing data</li>
                                            <li>Dietary preferences, allergies, and lifestyle information</li>
                                            <li>Symptom tracking and health outcomes</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Personal Information</h3>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Name, email address, phone number, and mailing address</li>
                                            <li>Date of birth, gender, and emergency contact information</li>
                                            <li>Payment information and billing details</li>
                                            <li>Account credentials and preferences</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Technical Information</h3>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>IP address, browser type, and device information</li>
                                            <li>Website usage data and interaction patterns</li>
                                            <li>Cookies and similar tracking technologies</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    2. How We Use Your Information
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Personalized Formulations</h3>
                                        <p>We use your health information to create customized supplement formulations tailored to your unique biology, health goals, and laboratory results.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Medical Review</h3>
                                        <p>Our licensed healthcare providers review your information to ensure safety, identify potential interactions, and provide appropriate recommendations.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Service Delivery</h3>
                                        <p>We process your information to fulfill orders, process payments, provide customer support, and communicate about your account and services.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    3. Information Sharing and Disclosure
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We do not sell, rent, or trade your personal information. We may share your information only in these limited circumstances:</p>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Healthcare Providers</h3>
                                        <p>With your explicit consent, we may share relevant information with your personal healthcare providers to coordinate care.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Service Providers</h3>
                                        <p>We work with trusted third parties who help us provide our services, including:</p>
                                        <ul className="list-disc ml-6 mt-2 space-y-1">
                                            <li>Laboratory partners for test processing</li>
                                            <li>Manufacturing facilities for product creation</li>
                                            <li>Shipping and logistics providers</li>
                                            <li>Payment processors and technology providers</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Legal Requirements</h3>
                                        <p>We may disclose information when required by law, court order, or to protect the safety of our users or others.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    4. Data Security
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We implement industry-leading security measures to protect your information:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>End-to-end encryption for data transmission and storage</li>
                                        <li>HIPAA-compliant data handling procedures</li>
                                        <li>Multi-factor authentication and access controls</li>
                                        <li>Regular security audits and vulnerability assessments</li>
                                        <li>Secure data centers with 24/7 monitoring</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    5. Your Rights and Choices
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>You have the following rights regarding your personal information:</p>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Access and Portability</h3>
                                        <p>You can request a copy of all personal information we have about you in a portable format.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Correction and Updates</h3>
                                        <p>You can update or correct your information at any time through your account settings or by contacting us.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Deletion</h3>
                                        <p>You can request deletion of your account and associated data, subject to legal retention requirements.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Communication Preferences</h3>
                                        <p>You can opt out of marketing communications while still receiving essential service-related messages.</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    6. International Users
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We comply with applicable data protection laws in all jurisdictions where we operate:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li><strong>GDPR (European Union):</strong> We provide full compliance with European privacy rights</li>
                                        <li><strong>CCPA (California):</strong> California residents have additional privacy rights under state law</li>
                                        <li><strong>PIPEDA (Canada):</strong> We follow Canadian privacy principles for Canadian users</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    7. Contact Information
                                </h2>
                                <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                    <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                        If you have questions about this Privacy Policy or want to exercise your privacy rights, contact us:
                                    </p>
                                    <div className="mt-4 space-y-2" style={{ color: COLORS.textPrimary, fontFamily: TYPOGRAPHY.body }}>
                                        <p><strong>Email:</strong> <span style={{ color: COLORS.accentTeal }}>privacy@vita-choice.com</span></p>
                                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                                        <p><strong>Mail:</strong> Vita-Choice Privacy Officer<br />123 Health Plaza, Suite 450<br />New York, NY 10001</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;