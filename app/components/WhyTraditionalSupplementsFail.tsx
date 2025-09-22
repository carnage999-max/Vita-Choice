import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhySupplementsFail = () => {
    return (
        <section className="py-24 bg-[#0B0C0E]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#F5F7FA] mb-6">
                                Why Traditional
                                <span className="block bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent">
                                    Supplements Fail
                                </span>
                            </h2>

                            <div className="w-16 h-1 bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] mb-8"></div>

                            <p className="text-lg text-[#B7C0CD] leading-relaxed">
                                Most pills are packed with fillers, dyes, binders and casings. Only a small portion is the actual nutrient.
                                <span className="text-[#2EE6D6] font-medium"> You'd need $2.30, or even $4 pills per day</span> to match what
                                Vita-Choice delivers in one premium liquid serving.
                            </p>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                        {/* Main pill visual container */}
                        <div className="relative bg-gradient-to-br from-[#14161A] to-[#262A31] rounded-3xl p-6 border border-[#262A31]">
                            {/* Pill comparison visual placeholder */}
                            <Image
                                src="/tomato.png"
                                alt="Pill Comparison"
                                width={360}
                                height={100}
                                className="rounded-2xl mx-auto mb-8"
                            />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#FF5A5F] to-[#e74c3c] rounded-lg opacity-60 animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-[#2ECC71] to-[#27ae60] rounded-xl opacity-40 animate-bounce"></div>
                        <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-[#2EA7FF] to-[#2980b9] rounded-full opacity-50 animate-ping"></div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-20 text-center">
                    <div className="bg-gradient-to-r from-[#14161A]/50 to-[#262A31]/50 rounded-2xl p-8 border border-[#2EE6D6]/10">
                        <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                            Stop Wasting Money on Ineffective Supplements
                        </h3>
                        <p className="text-[#B7C0CD] mb-6 max-w-2xl mx-auto">
                            Experience the difference of scientifically optimized, fully methylated nutrition
                            that your body can actually use.
                        </p>
                        <Link
                            href="/about"
                            className="bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-8 py-4 rounded-xl font-semibold hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] transition-all duration-300 hover:-translate-y-1">
                            Discover
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySupplementsFail;