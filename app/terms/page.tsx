"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const sections = [
    { id: "service", title: "Service Description" },
    { id: "medical", title: "Medical Disclaimer" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "conduct", title: "User Conduct" },
    { id: "termination", title: "Termination" },
    { id: "law", title: "Governing Law" },
];

const getSectionContent = (id: string) => {
    switch (id) {
        case "service":
            return "Vita-Choice provides personalized liquid nutritional supplements based on individual health assessments, laboratory results, and medical review. Our services include health assessments and nutritional analysis, custom liquid supplement formulation, medical review by licensed healthcare professionals, ongoing support and formula optimization, and educational resources and health guidance.";
        case "medical":
            return "⚠️ IMPORTANT: Vita-Choice products are dietary supplements, not medications. Our services do not constitute medical advice, diagnosis, or treatment. Always consult your healthcare provider before starting any supplement regimen. Do not stop prescribed medications without medical supervision. Inform your doctor about all supplements you're taking. Seek immediate medical attention for serious health concerns.";
        case "liability":
            return "To the maximum extent permitted by law: Vita-Choice provides services 'as is' without warranties of any kind. We are not liable for indirect, consequential, or punitive damages. Our total liability shall not exceed the amount you paid for services. We do not guarantee specific health outcomes or results.";
        case "conduct":
            return "You must provide accurate, complete, and current information about your health, medical history, and personal details. Inaccurate information may result in inappropriate formulations. You are responsible for maintaining the security of your account credentials and for all activities under your account. You agree to use our services only for lawful purposes and in accordance with these terms.";
        case "termination":
            return "Either party may terminate this agreement at any time. You may cancel your account and subscriptions through your account settings. We may suspend or terminate accounts for violations of these terms. All orders are subject to acceptance and medical review. We reserve the right to refuse or cancel orders for safety reasons or if medical review indicates potential concerns.";
        case "law":
            return "We may update these terms from time to time. We will notify you of material changes via email or through our website. Your continued use of our services after changes indicates acceptance of the new terms. These terms are governed by the laws of New York State. Any disputes will be resolved through binding arbitration in accordance with the American Arbitration Association rules, except for claims that may be brought in small claims court.";
        default:
            return "";
    }
};

export default function TermsPage() {
    const [selected, setSelected] = useState("");

    return (
        <main className="relative min-h-screen bg-[#0B0C0E] text-white overflow-x-hidden">
            {/* Enhanced floating background elements */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-[#2EE6D6]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-64 -right-32 w-96 h-96 bg-gradient-radial from-[#2EA7FF]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/2 w-64 h-64 bg-gradient-radial from-[#F5A623]/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Sidebar TOC (desktop) */}
                    <aside className="w-full lg:w-80 lg:sticky lg:top-20 lg:h-fit">
                        <div className="p-6 border border-[#262A31] bg-[#14161A]/50 backdrop-blur-sm rounded-2xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
                                 style={{
                                     backgroundColor: `rgba(46, 230, 214, 0.1)`,
                                     borderColor: `rgba(46, 230, 214, 0.3)`
                                 }}>
                                <span className="text-xs font-medium text-[#2EE6D6] uppercase tracking-wide">
                                    Table of Contents
                                </span>
                            </div>
                            <h2 className="text-lg font-semibold mb-6 text-[#F5F7FA]">On this page</h2>
                            <ul className="space-y-3">
                                {sections.map((s, index) => (
                                    <li key={s.id}>
                                        <a
                                            href={`#${s.id}`}
                                            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                                                selected === s.id
                                                    ? "text-[#2EE6D6] font-bold bg-[#2EE6D6]/10 border border-[#2EE6D6]/20"
                                                    : "text-[#B7C0CD] hover:text-[#F5F7FA] hover:bg-[#262A31]/50"
                                            }`}
                                            onClick={() => setSelected(s.id)}
                                        >
                                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                                                selected === s.id 
                                                    ? "bg-[#2EE6D6] text-[#0B0C0E]"
                                                    : "bg-[#262A31] text-[#B7C0CD]"
                                            }`}>
                                                {index + 1}
                                            </span>
                                            <span className="text-sm">{s.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="flex-1 py-16 space-y-16">
                {/* Header */}
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                         style={{
                             backgroundColor: `rgba(46, 167, 255, 0.1)`,
                             borderColor: `rgba(46, 167, 255, 0.3)`
                         }}>
                        <span className="text-sm font-medium text-[#2EA7FF] uppercase tracking-wide">
                            Terms of Service
                        </span>
                    </div>
                    
                    <h1
                        className="text-4xl md:text-5xl font-bold text-[#F5F7FA] leading-tight"
                    >
                        Terms of Service
                    </h1>
                    
                    <p className="text-[#B7C0CD] text-lg">Last updated: January 2024</p>
                </div>

                {/* Agreement Notice */}
                <div
                    className="p-8 rounded-2xl bg-[#14161A] border border-[#262A31]"
                >
                    <h2 className="text-xl font-semibold text-[#F5F7FA] mb-4">Agreement to Terms</h2>
                    <p className="text-[#B7C0CD] leading-relaxed">
                        By accessing and using Vita-Choice services, you agree to be bound by these Terms of Service. 
                        Please read them carefully. If you do not agree to these terms, you may not use our services.
                    </p>
                </div>

                {/* Sections */}
                {sections.map((s, i) => (
                    <section
                        key={s.id}
                        id={s.id}
                        className={`space-y-6 scroll-mt-24 p-8 rounded-2xl border transition-all duration-300 hover:border-[#2EE6D6]/30 ${
                            s.id === "medical" 
                                ? "bg-[#FF5A5F]/5 border-[#FF5A5F]/20" 
                                : "bg-[#14161A] border-[#262A31]"
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                                s.id === "medical"
                                    ? "bg-[#FF5A5F] text-white"
                                    : "bg-[#2EA7FF] text-[#0B0C0E]"
                            }`}>
                                {i + 1}
                            </div>
                            <h2 className="text-2xl font-bold text-[#F5F7FA]">{s.title}</h2>
                        </div>
                        
                        <div className={`leading-relaxed ${
                            s.id === "medical" ? "text-[#F5F7FA]" : "text-[#B7C0CD]"
                        }`}>
                            <p>{getSectionContent(s.id)}</p>
                        </div>
                    </section>
                ))}

                {/* Contact Information */}
                <div
                    className="p-8 rounded-2xl bg-[#14161A] border border-[#262A31]"
                >
                    <h2 className="text-xl font-semibold text-[#F5F7FA] mb-4">Contact Information</h2>
                    <p className="text-[#B7C0CD] mb-4">
                        Questions about these Terms of Service? Contact our legal team:
                    </p>
                    <div className="space-y-2 text-[#F5F7FA]">
                        <p><strong>Email:</strong> <span className="text-[#2EA7FF]">legal@vita-choice.com</span></p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Mail:</strong> Vita-Choice Legal Department<br />123 Health Plaza, Suite 450<br />New York, NY 10001</p>
                    </div>
                </div>

                {/* CTA card at bottom */}
                <div
                    className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-center shadow-2xl"
                >
                    <h3 className="text-3xl font-bold mb-4 text-[#0B0C0E]">Still have questions?</h3>
                    <p className="mb-8 text-[#0B0C0E]/80 text-lg">Reach out to our support team for clarifications.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-[#0B0C0E] text-white font-semibold rounded-xl shadow-lg hover:bg-[#14161A] transition-all duration-300 hover:-translate-y-1"
                        >
                            Contact Support
                        </a>
                        <a
                            href="mailto:legal@vita-choice.com"
                            className="px-8 py-4 bg-white/10 text-[#0B0C0E] font-semibold rounded-xl border-2 border-[#0B0C0E]/20 hover:bg-white/20 transition-all duration-300"
                        >
                            Email Legal Team
                        </a>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </main>
        
    );
}