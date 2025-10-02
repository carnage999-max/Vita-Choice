import { COLORS, TYPOGRAPHY } from "@/app/lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: COLORS.surface }}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {/* Enhanced Brand Section - Spans 2 columns on mobile */}
                    <div className="col-span-2">
                        <div className="flex flex-col items-start gap-4">
                            {/* Logo and Main Tagline */}
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/logo.png"
                                    alt="Vita Choice"
                                    width={100}
                                    height={32}
                                    className="w-auto h-10 drop-shadow-lg"
                                />
                                <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-[#2EE6D6]/30 to-transparent"></div>
                                <div>
                                    <p 
                                        className="text-lg font-semibold bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent"
                                        style={{ fontFamily: TYPOGRAPHY.heading }}
                                    >
                                        The Choice is Yours
                                    </p>
                                    <p className="text-sm text-gray-400">Premium Liquid Multivitamins</p>
                                </div>
                            </div>
                            
                            <p
                                className="mt-2 text-sm"
                                style={{ color: COLORS.textMuted }}
                            >
                                Premium liquid multivitamins tailored to your unique health needs.
                                Science-backed formulations for optimal wellness.
                            </p>
                            
                            {/* Floating Pills Decoration */}
                            <div className="flex items-center gap-2 mt-4 opacity-60">
                                <div className="w-3 h-3 bg-gradient-to-br from-[#2EE6D6] to-[#2EA7FF] rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-gradient-to-br from-[#F5A623] to-[#f39c12] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#e74c3c] to-[#c0392b] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                <span className="text-xs text-gray-500 ml-2">Crafted for your wellness</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3
                            className="text-lg font-semibold"
                            style={{
                                color: COLORS.accentTeal,
                                fontFamily: TYPOGRAPHY.heading,
                            }}
                        >
                            Products
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/shop"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ color: COLORS.textMuted }}
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shop"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ color: COLORS.textMuted }}
                                >
                                    Vitamin Stacks
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company & Legal Links Combined */}
                    <div>
                        <h3
                            className="text-lg font-semibold"
                            style={{
                                color: COLORS.accentTeal,
                                fontFamily: TYPOGRAPHY.heading,
                            }}
                        >
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ color: COLORS.textMuted }}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ color: COLORS.textMuted }}
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/faq"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ color: COLORS.textMuted }}
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ color: COLORS.textMuted }}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ color: COLORS.textMuted }}
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shipping-policy"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ color: COLORS.textMuted }}
                                >
                                    Shipping Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/refund-policy"
                                    className="text-sm transition-colors hover:text-white"
                                    style={{ color: COLORS.textMuted }}
                                >
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Only */}
                <div
                    className="mt-8 border-t pt-8 text-center"
                    style={{ borderColor: COLORS.border }}
                >
                    <span className="text-sm" style={{ color: COLORS.textMuted }}>
                        &copy; 2024 VitaChoice. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
