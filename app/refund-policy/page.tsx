"use client";

import React from 'react';
import { COLORS, TYPOGRAPHY } from '../lib/constants';

const RefundPolicyPage = () => {
    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 lg:py-24">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[#2ECC71]/8 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                            style={{
                                backgroundColor: `${COLORS.success}10`,
                                borderColor: `${COLORS.success}30`
                            }}>
                            <span className="text-sm font-medium" style={{ color: COLORS.success }}>
                                REFUND POLICY
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4"
                            style={{ fontFamily: TYPOGRAPHY.heading }}>
                            Refund Policy
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
                    <div className="bg-gradient-to-br from-[#2ECC71]/10 to-[#27ae60]/5 rounded-2xl p-8 border border-[#2ECC71]/20 mb-8">
                        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.textPrimary }}>
                            Our Commitment to Your Satisfaction
                        </h2>
                        <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                            We stand behind the quality and effectiveness of our personalized supplements.
                            If you're not completely satisfied with your Vita-Choice experience, we offer a comprehensive
                            60-day money-back guarantee on your first order.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.success }}>
                                1. 60-Day Money-Back Guarantee
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <p>
                                    We offer a full 60-day money-back guarantee on your first Vita-Choice order.
                                    This gives you ample time to experience the benefits of personalized nutrition.
                                </p>

                                <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                    <h3 className="text-lg font-semibold mb-3" style={{ color: COLORS.textPrimary }}>What's Covered:</h3>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Full product cost refund (excluding shipping)</li>
                                        <li>Assessment and formulation fees</li>
                                        <li>Medical review charges</li>
                                        <li>Applies even if bottle is completely empty</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.success }}>
                                2. How to Request a Refund
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <p>Requesting a refund is simple and straightforward:</p>

                                <div className="grid md:grid-cols-3 gap-4 mt-6">
                                    <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-xl p-4 border border-[#262A31] text-center">
                                        <div className="w-12 h-12 rounded-full bg-[#2ECC71] flex items-center justify-center mx-auto mb-3">
                                            <span className="text-white font-bold">1</span>
                                        </div>
                                        <h3 className="font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Contact Us</h3>
                                        <p className="text-sm">Email support@vita-choice.com or call +1 (555) 123-4567</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-xl p-4 border border-[#262A31] text-center">
                                        <div className="w-12 h-12 rounded-full bg-[#2ECC71] flex items-center justify-center mx-auto mb-3">
                                            <span className="text-white font-bold">2</span>
                                        </div>
                                        <h3 className="font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Provide Details</h3>
                                        <p className="text-sm">Order number and reason for refund (optional but helpful)</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-xl p-4 border border-[#262A31] text-center">
                                        <div className="w-12 h-12 rounded-full bg-[#2ECC71] flex items-center justify-center mx-auto mb-3">
                                            <span className="text-white font-bold">3</span>
                                        </div>
                                        <h3 className="font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Get Refund</h3>
                                        <p className="text-sm">Receive full refund within 5-10 business days</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.success }}>
                                3. Refund Processing
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Processing Time</h3>
                                    <p>Once we receive your refund request, we process it within 24-48 hours. Refunds are issued to your original payment method within 5-10 business days.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Return Requirements</h3>
                                    <p>You do not need to return the product for a refund. Keep your bottle for your records or dispose of it safely according to local regulations.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Shipping Costs</h3>
                                    <p>Original shipping costs are not refundable unless the product was defective or we made an error. Return shipping is not required.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.success }}>
                                4. Subscription Refunds
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>First Subscription Order</h3>
                                    <p>Your first subscription order is covered by our 60-day money-back guarantee, just like one-time purchases.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Subsequent Orders</h3>
                                    <p>For subsequent subscription orders, refunds are available within 30 days of delivery if you're not satisfied with quality or effectiveness.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Cancellation</h3>
                                    <p>You can cancel your subscription at any time. Cancellations prevent future charges but don't automatically refund recent orders unless within the refund window.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.success }}>
                                5. Special Circumstances
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Product Defects</h3>
                                    <p>If you receive a defective product, contact us immediately. We'll provide a full refund plus shipping costs and expedite a replacement if desired.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Adverse Reactions</h3>
                                    <p>If you experience adverse reactions, stop use immediately and consult your healthcare provider. Contact us for a full refund and to report the reaction for safety monitoring.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Medical Contraindications</h3>
                                    <p>If your doctor advises discontinuing the supplement, we'll provide a full refund regardless of the time elapsed since purchase.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.success }}>
                                6. International Customers
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <p>International customers enjoy the same refund policies with these considerations:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Refunds are processed in the original currency charged</li>
                                    <li>Currency conversion fees (if any) are not refundable</li>
                                    <li>Processing times may be slightly longer due to international banking</li>
                                    <li>Customs duties and taxes are not refundable</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.success }}>
                                7. Refund Limitations
                            </h2>
                            <div className="bg-gradient-to-br from-[#FF5A5F]/10 to-[#FF5A5F]/5 rounded-2xl p-6 border border-[#FF5A5F]/20">
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p>While we strive to accommodate all reasonable refund requests, certain limitations apply:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Refunds are limited to one per customer for first-time orders</li>
                                        <li>Bulk or wholesale orders may have different refund terms</li>
                                        <li>Gift purchases are subject to special handling procedures</li>
                                        <li>Fraudulent or abusive refund requests may result in account suspension</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.success }}>
                                8. Alternative Solutions
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <p>Before requesting a refund, consider these alternatives:</p>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Formula Adjustment</h3>
                                    <p>Our medical team can modify your formulation based on your feedback and results.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Dosage Optimization</h3>
                                    <p>Sometimes adjusting the timing or amount can significantly improve results.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Extended Trial Period</h3>
                                    <p>We may extend your trial period if you need more time to evaluate effectiveness.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.success }}>
                                9. Contact Information
                            </h2>
                            <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    Questions about refunds or need to process a return? We're here to help:
                                </p>
                                <div className="mt-4 space-y-2" style={{ color: COLORS.textPrimary, fontFamily: TYPOGRAPHY.body }}>
                                    <p><strong>Email:</strong> <span style={{ color: COLORS.success }}>refunds@vita-choice.com</span></p>
                                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                                    <p><strong>Hours:</strong> Monday-Friday 9AM-6PM EST</p>
                                    <p><strong>Live Chat:</strong> Available on our website during business hours</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RefundPolicyPage;