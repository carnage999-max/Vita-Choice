"use client";

import { motion } from "framer-motion";

export default function ShippingPolicyPage() {
    return (
        <main className="relative min-h-screen bg-[#0B0C0E] text-white overflow-x-hidden">
            {/* Floating Background */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-64 -right-32 w-96 h-96 bg-gradient-radial from-[#2EA7FF]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/2 w-64 h-64 bg-gradient-radial from-[#F5A623]/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex-1 py-16 space-y-16">
                    {/* Header */}
                    <div className="text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                            style={{
                                backgroundColor: `rgba(46, 230, 214, 0.1)`,
                                borderColor: `rgba(46, 230, 214, 0.3)`
                            }}>
                            <span className="text-sm font-medium text-[#2EE6D6] uppercase tracking-wide">
                                Shipping Policy
                            </span>
                        </div>

                        <h1
                            className="text-4xl md:text-5xl font-bold text-[#F5F7FA] leading-tight"
                        >
                            Shipping Policy
                        </h1>

                        <p className="text-[#B7C0CD] text-lg">Last updated: January 2024</p>
                    </div>

                    {/* Sections */}
                    {[
                        {
                            id: 1,
                            title: "Processing Time",
                            text: "Orders are processed within 1-3 business days after payment confirmation. Custom formulations may require additional preparation time. We do not ship on weekends or holidays."
                        },
                        {
                            id: 2,
                            title: "Shipping Methods",
                            text: "We partner with reliable carriers including USPS, UPS, and FedEx. At checkout, you may select from standard, expedited, or overnight shipping (where available)."
                        },
                        {
                            id: 3,
                            title: "Shipping Rates",
                            text: "Shipping costs are calculated at checkout based on your location, selected method, and order weight. Promotional free shipping offers may apply to qualifying orders."
                        },
                        {
                            id: 4,
                            title: "Delivery Estimates",
                            text: "Standard shipping within the continental US typically takes 3-7 business days. Expedited shipping averages 2-3 business days, while overnight options are delivered next business day."
                        },
                        {
                            id: 5,
                            title: "International Shipping",
                            text: "We currently ship to select countries. International delivery times vary by destination and may be impacted by customs delays. Customers are responsible for duties, taxes, and import fees."
                        },
                        {
                            id: 6,
                            title: "Order Tracking",
                            text: "Once your order ships, you will receive an email with tracking details. You can monitor your package in real-time through the carrier’s website."
                        },
                        {
                            id: 7,
                            title: "Damaged or Lost Packages",
                            text: "If your order arrives damaged or does not arrive within the estimated timeframe, please contact us immediately. We will work with carriers to resolve issues or issue replacements."
                        },
                        {
                            id: 8,
                            title: "Shipping Restrictions",
                            text: "We are unable to deliver to P.O. Boxes, APO/FPO addresses, or regions restricted by law. Certain products may have additional shipping limitations due to regulatory requirements."
                        }
                    ].map((s, i) => (
                        <section
                            key={s.id}
                            className="space-y-6 scroll-mt-24 p-8 rounded-2xl bg-[#14161A] border border-[#262A31] transition-all duration-300 hover:border-[#2EE6D6]/30"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold bg-[#2EE6D6] text-[#0B0C0E]">
                                    {s.id}
                                </div>
                                <h2 className="text-2xl font-bold text-[#F5F7FA]">{s.title}</h2>
                            </div>
                            <p className="text-[#B7C0CD] leading-relaxed">{s.text}</p>
                        </section>
                    ))}

                    {/* Contact */}
                    <div
                        className="p-8 rounded-2xl bg-[#14161A] border border-[#262A31]"
                    >
                        <h2 className="text-xl font-semibold text-[#F5F7FA] mb-4">Contact Information</h2>
                        <p className="text-[#B7C0CD] mb-4">
                            Questions about our shipping policy? Contact our support team:
                        </p>
                        <div className="space-y-2 text-[#F5F7FA]">
                            <p><strong>Email:</strong> <span className="text-[#2EE6D6]">shipping@vita-choice.com</span></p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>Hours:</strong> Monday–Friday, 9AM–6PM EST</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
