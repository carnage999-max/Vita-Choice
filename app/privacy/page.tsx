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
                            Global Privacy Policy
                        </h1>
                        <p className="text-lg" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            Gold Standard Edition — Last updated: November 2025
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
                                Introduction
                            </h2>
                            <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                This Global Privacy Policy (the "Policy") describes how Se7en incs ("Company," "we," "our," or "us") collects, uses, discloses, and safeguards personal information across all current and future websites, subdomains, and online services (collectively, the "Services"). This Policy sets a global standard for privacy compliance and data protection in accordance with the highest international legal frameworks, including but not limited to the General Data Protection Regulation (EU) 2016/679 ("GDPR"), the California Consumer Privacy Act and Privacy Rights Act (CCPA/CPRA), the Virginia Consumer Data Protection Act (VCDPA), the Canadian Personal Information Protection and Electronic Documents Act (PIPEDA), and the Brazilian General Data Protection Law (LGPD). It applies to all users regardless of geographic location.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    1. Scope and Applicability
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>This Policy applies to all visitors, customers, and users of our Services, and to all data collected online or offline through any form of interaction. By using our Services, you consent to the practices described herein.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    2. Information We Collect
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We collect personal data directly and automatically, including:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li><strong>Identifiers:</strong> Name, email, phone number, address</li>
                                        <li><strong>Commercial Data:</strong> Transactions, purchases, payment methods</li>
                                        <li><strong>Biometric and Health Data:</strong> Where applicable and with consent</li>
                                        <li><strong>Geolocation:</strong> Precise and approximate location data</li>
                                        <li><strong>Internet Activity:</strong> Browsing history, behavioral analytics</li>
                                        <li><strong>Device Identifiers:</strong> Device type, operating system, unique identifiers</li>
                                        <li><strong>Other Data:</strong> Any other data required for lawful and legitimate business operations</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    3. Automated and AI-Based Processing
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We utilize Artificial Intelligence and Machine Learning ("AI/ML") technologies to analyze behavioral data, enhance service personalization, detect fraud, and improve user experience. Automated decision-making may influence personalized recommendations or fraud prevention mechanisms, never without appropriate human oversight and legal safeguards.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    4. How We Use Information
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We process data for legitimate business purposes:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Service delivery and account management</li>
                                        <li>Communication and customer support</li>
                                        <li>Compliance with legal obligations</li>
                                        <li>Analytics and service improvement</li>
                                        <li>Marketing and personalization</li>
                                        <li>Platform security and fraud prevention</li>
                                    </ul>
                                    <p className="pt-4">Processing is always grounded in a lawful basis under applicable law.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    5. Disclosure and Data Sharing
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We do not sell personal data. We share information only with trusted service providers, payment processors, affiliates, analytics vendors, and legal authorities when required by law. Each third-party partner is contractually obligated to maintain equivalent data protection standards.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    6. International Data Transfers
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>Data may be processed and stored in the United States and other jurisdictions. All transfers comply with GDPR Chapter V and equivalent safeguards through Standard Contractual Clauses, adequacy decisions, or binding corporate rules.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    7. Data Retention
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>Personal data is retained only for as long as necessary to fulfill the purposes for which it was collected or as required by law. Retention schedules are periodically reviewed for compliance and minimization.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    8. Children's Privacy
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect data from children under 13 years old (or 16 in applicable jurisdictions) without verifiable parental consent. Parents may contact us to review or delete their child's data at any time.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    9. Your Rights
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>Depending on your jurisdiction, you may have the right to:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Access your personal data</li>
                                        <li>Correct inaccurate information</li>
                                        <li>Delete your data (right to be forgotten)</li>
                                        <li>Restrict processing</li>
                                        <li>Object to processing</li>
                                        <li>Port your data</li>
                                        <li>Withdraw consent</li>
                                    </ul>
                                    <p className="pt-4">Requests can be submitted using the contact information below.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    10. Security and Safeguards
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We employ administrative, technical, and physical safeguards that meet or exceed industry standards, including:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Encryption for data transmission and storage</li>
                                        <li>Pseudonymization of sensitive data</li>
                                        <li>Role-based access controls</li>
                                        <li>Multi-factor authentication</li>
                                        <li>Continuous threat monitoring</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    11. Cookies and Tracking Technologies
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We use cookies, web beacons, and similar tools for site functionality, analytics, and marketing. Users can control cookie preferences via browser settings or our Cookie Management Tool.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    12. Cross-Border Compliance
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>This Policy incorporates global privacy principles such as lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, integrity, and accountability. These principles apply uniformly across all operations and subsidiaries.</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    13. Data Protection Officer and Contact
                                </h2>
                                <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                    <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }} className="mb-4">
                                        We maintain a designated Data Protection Officer ("DPO") to oversee compliance. Users may exercise their rights or submit complaints via the contact information below:
                                    </p>
                                    <div className="space-y-2" style={{ color: COLORS.textPrimary, fontFamily: TYPOGRAPHY.body }}>
                                        <p><strong>Email:</strong> <span style={{ color: COLORS.accentTeal }}>info@thevitachoice.com</span></p>
                                        <p><strong>Mail:</strong> Se7en incs<br />PO Box 52<br />Detroit, ME 04929</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    14. Updates to This Policy
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>We may update this Policy to reflect legal, technical, or business developments. The latest version will always be available on our website, with a new 'Last Updated' date. Continued use of our Services constitutes acceptance of any modifications.</p>
                                </div>
                            </section>

                            <section>
                                <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-8 border border-[#262A31]">
                                    <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                        © 2025 Se7en incs. All rights reserved.
                                    </p>
                                    <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }} className="mt-4 text-sm">
                                        This Privacy Policy may be supplemented by a Data Processing Addendum (DPA) for enterprise clients, a Cookie Policy, and jurisdiction-specific addenda where required.
                                    </p>
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