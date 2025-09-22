"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { COLORS, CTA, TYPOGRAPHY } from "../lib/constants";

export default function Header({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Track scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-md"
                }`}
            style={{
                backgroundColor: scrolled
                    ? "rgba(11,12,14,0.95)"
                    : "rgba(11,12,14,0.75)",
                backdropFilter: "blur(10px)",
            }}
        >
            <div
                className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"
                    }`}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold"
                    style={{
                        color: COLORS.accentTeal,
                        fontFamily: TYPOGRAPHY.heading,
                    }}
                >
                    VitaChoice
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {["Shop", "About", "FAQ", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="transition-colors hover:text-[var(--color-accent-blue)]"
                            style={{
                                color: COLORS.textPrimary,
                                fontFamily: TYPOGRAPHY.body,
                            }}
                        >
                            {item}
                        </Link>
                    ))}
                    <button
                        onClick={onOpenWaitlist}
                        className={CTA.button}
                        style={{
                            backgroundColor: COLORS.accentTeal,
                            color: COLORS.background,
                            fontFamily: TYPOGRAPHY.body,
                        }}
                    >
                        Notify Me
                    </button>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center relative z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />
                    <span
                        className={`h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-x-0 top-14 bg-[rgba(11,12,14,0.95)] backdrop-blur-md transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="px-6 py-6 flex flex-col gap-6">
                    {["Shop", "About", "FAQ", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-lg transition-colors hover:text-[var(--color-accent-blue)]"
                            style={{
                                color: COLORS.textPrimary,
                                fontFamily: TYPOGRAPHY.body,
                            }}
                        >
                            {item}
                        </Link>
                    ))}
                    <button
                        onClick={onOpenWaitlist}
                        className={CTA.button}
                        style={{
                            backgroundColor: COLORS.accentTeal,
                            color: COLORS.background,
                            fontFamily: TYPOGRAPHY.body,
                        }}
                    >
                        Notify Me
                    </button>
                </div>
            </div>
        </header>
    );
}
