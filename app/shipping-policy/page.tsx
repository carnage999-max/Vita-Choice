"use client";

import React from 'react';
import { COLORS, TYPOGRAPHY } from '../lib/constants';

const ShippingPolicyPage = () => {
    const shippingZones = [
        {
            region: "United States",
            standardTime: "3-5 business days",
            standardCost: "Free on orders $75+",
            expressTime: "1-2 business days",
            expressCost: "$15.99",
            cutoffTime: "2:00 PM EST"
        },
        {
            region: "Canada",
            standardTime: "5-7 business days",
            standardCost: "Free on orders $100+",
            expressTime: "2-3 business days",
            expressCost: "$24.99",
            cutoffTime: "1:00 PM EST"
        },
        {
            region: "European Union",
            standardTime: "7-10 business days",
            standardCost: "Free on orders €100+",
            expressTime: "3-5 business days",
            expressCost: "€29.99",
            cutoffTime: "12:00 PM EST"
        },
        {
            region: "United Kingdom",
            standardTime: "5-8 business days",
            standardCost: "Free on orders £75+",
            expressTime: "2-4 business days",
            expressCost: "£19.99",
            cutoffTime: "12:00 PM EST"
        },
        {
            region: "Australia & New Zealand",
            standardTime: "10-14 business days",
            standardCost: "Free on orders $150+",
            expressTime: "5-7 business days",
            expressCost: "$39.99",
            cutoffTime: "11:00 AM EST"
        }
    ];

    return (
        <div style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 lg:py-24">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C0E] via-[#0B0C0E] to-[#14161A]" />
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-[#F5A623]/8 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                            style={{
                                backgroundColor: `${COLORS.warning}10`,
                                borderColor: `${COLORS.warning}30`
                            }}>
                            <span className="text-sm font-medium" style={{ color: COLORS.warning }}>
                                SHIPPING POLICY
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4"
                            style={{ fontFamily: TYPOGRAPHY.heading }}>
                            Shipping Policy
                        </h1>
                        <p className="text-lg" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body }}>
                            Last updated: January 2024
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-8">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-[#F5A623]/10 to-[#f39c12]/5 rounded-2xl p-8 border border-[#F5A623]/20 mb-8">
                        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.textPrimary }}>
                            Global Shipping & Delivery
                        </h2>
                        <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                            We ship personalized liquid supplements worldwide with care and precision. Every order is custom-formulated
                            and requires 3-5 business days for medical review and preparation before shipping.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.warning }}>
                                Shipping Zones & Times
                            </h2>

                            <div className="overflow-x-auto">
                                <div className="grid gap-4">
                                    {shippingZones.map((zone, index) => (
                                        <div key={index} className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                            <div className="grid md:grid-cols-5 gap-4 items-center">
                                                <div>
                                                    <h3 className="font-semibold text-lg mb-1" style={{ color: COLORS.warning }}>
                                                        {zone.region}
                                                    </h3>
                                                    <p className="text-sm" style={{ color: COLORS.textMuted }}>
                                                        Order by {zone.cutoffTime}
                                                    </p>
                                                </div>

                                                <div className="text-center">
                                                    <p className="font-medium" style={{ color: COLORS.textPrimary }}>Standard</p>
                                                    <p className="text-sm" style={{ color: COLORS.textMuted }}>{zone.standardTime}</p>
                                                    <p className="text-sm font-semibold" style={{ color: COLORS.success }}>{zone.standardCost}</p>
                                                </div>

                                                <div className="text-center">
                                                    <p className="font-medium" style={{ color: COLORS.textPrimary }}>Express</p>
                                                    <p className="text-sm" style={{ color: COLORS.textMuted }}>{zone.expressTime}</p>
                                                    <p className="text-sm font-semibold" style={{ color: COLORS.warning }}>{zone.expressCost}</p>
                                                </div>

                                                <div className="md:col-span-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-3 h-3 rounded-full bg-[#2ECC71]"></div>
                                                        <span className="text-sm" style={{ color: COLORS.textMuted }}>
                                                            Tracked & Insured
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <div className="w-3 h-3 rounded-full bg-[#2EA7FF]"></div>
                                                        <span className="text-sm" style={{ color: COLORS.textMuted }}>
                                                            Temperature Controlled
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.warning }}>
                                Order Processing
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-xl p-6 border border-[#262A31] text-center">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] flex items-center justify-center mx-auto mb-4">
                                            <span className="text-[#0B0C0E] text-xl font-bold">1</span>
                                        </div>
                                        <h3 className="font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Medical Review</h3>
                                        <p className="text-sm">Licensed physicians review your health profile and approve formulation (1-2 days)</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-xl p-6 border border-[#262A31] text-center">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F5A623] to-[#f39c12] flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-xl font-bold">2</span>
                                        </div>
                                        <h3 className="font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Custom Formulation</h3>
                                        <p className="text-sm">Your unique liquid supplement is precisely formulated and quality tested (2-3 days)</p>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-xl p-6 border border-[#262A31] text-center">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2ECC71] to-[#27ae60] flex items-center justify-center mx-auto mb-4">
                                            <span className="text-white text-xl font-bold">3</span>
                                        </div>
                                        <h3 className="font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Secure Packaging</h3>
                                        <p className="text-sm">Temperature-controlled packaging with tracking and insurance included</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.warning }}>
                                Packaging & Handling
                            </h2>
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Lost or Stolen Packages</h3>
                                        <p>We provide tracking for all shipments. If a package shows delivered but you didn't receive it, contact us within 48 hours for investigation.</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Delivery Delays</h3>
                                        <p>Weather, holidays, and carrier issues can cause delays. We'll proactively notify you of any significant delays and provide updated tracking.</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                    <h3 className="text-lg font-semibold mb-4" style={{ color: COLORS.textPrimary }}>
                                        Tracking Your Order
                                    </h3>
                                    <div className="space-y-3 text-sm" style={{ color: COLORS.textMuted }}>
                                        <div className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></span>
                                            <p>Order confirmation email sent immediately</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></span>
                                            <p>Medical review completion notification</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></span>
                                            <p>Shipping confirmation with tracking number</p>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#F5A623] mt-2 flex-shrink-0"></span>
                                            <p>Delivery confirmation and follow-up</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.warning }}>
                                Special Handling
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Temperature-Sensitive Products</h3>
                                    <p>Certain formulations require refrigerated shipping. These orders are shipped Monday-Wednesday to avoid weekend delays and include additional temperature monitoring.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Expedited Medical Orders</h3>
                                    <p>If your healthcare provider requests expedited delivery for medical reasons, contact our medical team. We offer priority processing at no additional cost for medical necessities.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Multiple Address Shipping</h3>
                                    <p>Need to ship to multiple addresses? Contact customer service. We can accommodate family members, vacation addresses, or office delivery with advance notice.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.warning }}>
                                Shipping Restrictions
                            </h2>
                            <div className="bg-gradient-to-br from-[#FF5A5F]/10 to-[#FF5A5F]/5 rounded-2xl p-6 border border-[#FF5A5F]/20">
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <p><strong style={{ color: COLORS.error }}>We cannot ship to:</strong></p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Countries where dietary supplements are prohibited</li>
                                        <li>P.O. boxes for international orders (domestic P.O. boxes accepted)</li>
                                        <li>Military APO/FPO addresses (contact us for alternatives)</li>
                                        <li>Addresses flagged for fraudulent activity</li>
                                        <li>Regions with active shipping embargos or restrictions</li>
                                    </ul>

                                    <p className="mt-4">
                                        <strong>Note:</strong> Some regions may have additional restrictions on specific ingredients.
                                        We'll contact you if your formulation cannot be shipped to your location and offer alternatives.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.warning }}>
                                Shipping Costs
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Free Shipping Thresholds</h3>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>USA: Free on orders $75+</li>
                                            <li>Canada: Free on orders $100+</li>
                                            <li>EU: Free on orders €100+</li>
                                            <li>UK: Free on orders £75+</li>
                                            <li>Australia/NZ: Free on orders $150+</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Additional Fees</h3>
                                        <p>Express shipping, signature delivery, and weekend delivery incur additional charges. Temperature-controlled shipping is included at no extra cost.</p>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                    <h3 className="text-lg font-semibold mb-4" style={{ color: COLORS.textPrimary }}>
                                        Shipping Calculator
                                    </h3>
                                    <p className="text-sm mb-4" style={{ color: COLORS.textMuted }}>
                                        Exact shipping costs are calculated at checkout based on:
                                    </p>
                                    <ul className="text-sm space-y-2" style={{ color: COLORS.textMuted }}>
                                        <li>• Destination address</li>
                                        <li>• Product weight and size</li>
                                        <li>• Shipping speed selected</li>
                                        <li>• Special handling requirements</li>
                                        <li>• Current promotions or discounts</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.warning }}>
                                Holiday & Weather Delays
                            </h2>
                            <div className="space-y-4" style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Holiday Shipping Schedule</h3>
                                    <p>During major holidays, processing and shipping times may be extended. We'll notify customers of any delays and update our website with holiday schedules.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Weather-Related Delays</h3>
                                    <p>Severe weather conditions may delay shipments. For temperature-sensitive products, we may hold shipments until conditions improve to ensure product integrity.</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2" style={{ color: COLORS.textPrimary }}>Peak Season Notice</h3>
                                    <p>During peak shipping seasons (holidays, back-to-school), allow additional processing and delivery time. Consider placing orders early to avoid delays.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: TYPOGRAPHY.heading, color: COLORS.warning }}>
                                Contact Shipping Support
                            </h2>
                            <div className="bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-2xl p-6 border border-[#262A31]">
                                <p style={{ color: COLORS.textMuted, fontFamily: TYPOGRAPHY.body, lineHeight: '1.7' }}>
                                    Questions about shipping, tracking, or delivery? Our shipping specialists are here to help:
                                </p>
                                <div className="mt-4 space-y-2" style={{ color: COLORS.textPrimary, fontFamily: TYPOGRAPHY.body }}>
                                    <p><strong>Email:</strong> <span style={{ color: COLORS.warning }}>shipping@vita-choice.com</span></p>
                                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                                    <p><strong>Hours:</strong> Monday-Friday 8AM-7PM EST, Saturday 10AM-4PM EST</p>
                                    <p><strong>Emergency Line:</strong> For urgent shipping issues, call +1 (555) 987-6543</p>
                                </div>
                                <div className="mt-6 p-4 bg-[#0B0C0E] rounded-xl">
                                    <p className="text-sm" style={{ color: COLORS.textMuted }}>
                                        <strong>Pro Tip:</strong> Save our phone number in your contacts and enable SMS notifications
                                        for real-time shipping updates and delivery alerts.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShippingPolicyPage;