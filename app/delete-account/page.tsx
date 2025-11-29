"use client";

import React from 'react';
import Link from 'next/link';
import { COLORS, TYPOGRAPHY } from '../lib/constants';

const DeleteAccountPage = () => {
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
                                DATA DELETION
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4"
                            style={{ fontFamily: TYPOGRAPHY.heading }}>
                            Account and Data Deletion Request
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="prose prose-invert max-w-none text-center">
                        <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-8 border border-[#262A31] mb-8">
                            <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                To request the deletion of your Vita Choice account and all associated data, please send an email to our support team at{' '}
                                <a href="mailto:support@thevitachoice.com" style={{ color: COLORS.accentTeal, textDecoration: 'underline' }}>
                                    support@thevitachoice.com
                                </a>
                                {' '}from the email address linked to your account. This is required to verify ownership.
                            </p>
                        </div>

                        <div className="space-y-8 text-left">
                            <section>
                                <h2 className="text-2xl font-bold mb-4 text-center" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.accentTeal }}>
                                    What Happens Next
                                </h2>
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <ol className="list-decimal list-inside space-y-3">
                                        <li>We will receive your request and queue it for processing.</li>
                                        <li>For security, we will reply to your email to verify your identity and confirm the deletion request.</li>
                                        <li>Once confirmed, we will permanently delete your account and all associated data, including your name, email, and any saved formulas. This action cannot be undone.</li>
                                        <li>The deletion process will be completed within 30 days of your confirmation.</li>
                                    </ol>
                                </div>
                            </section>

                            <div className="text-center pt-8">
                                <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    Your privacy is important to us. For more information, please review our{' '}
                                    <Link href="/privacy" style={{ color: COLORS.accentTeal, textDecoration: 'underline' }}>
                                        Privacy Policy
                                    </Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DeleteAccountPage;
