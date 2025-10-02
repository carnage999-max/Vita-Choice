"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { COLORS, CTA, TYPOGRAPHY } from "../lib/constants";

export default function Header({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLElement>(null);

    // Track scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle click outside menu to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuOpen && 
                headerRef.current && 
                !headerRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            // Restore body scroll when menu is closed
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <>
            {/* Blur Background Overlay for Mobile Menu */}
            {menuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            
            <header
                ref={headerRef}
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
                    {/* Enhanced Logo - Image on desktop, styled text on mobile */}
                    <Link href="/" className="flex items-center gap-3 group">
                        {/* Desktop Logo with Image */}
                        <div className="hidden md:flex items-center gap-3">
                            <Image
                                src="/logo.png"
                                alt="Vita Choice"
                                width={100}
                                height={32}
                                className="w-auto h-8 lg:h-10 drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                                priority
                            />
                            <div className="hidden lg:flex flex-col">
                                <span
                                    className="text-sm font-semibold bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent"
                                    style={{ fontFamily: TYPOGRAPHY.heading }}
                                >
                                    The Choice is Yours
                                </span>
                            </div>
                        </div>
                        
                        {/* Mobile Styled Text Logo */}
                        <div className="flex md:hidden flex-col items-start">
                            <span
                                className="text-lg font-bold"
                                style={{
                                    color: COLORS.accentTeal,
                                    fontFamily: TYPOGRAPHY.heading,
                                }}
                            >
                                VitaChoice
                            </span>
                            <span className="text-xs font-medium bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] bg-clip-text text-transparent -mt-0.5">
                                The Choice is Yours
                            </span>
                        </div>
                    </Link>                {/* Desktop Nav */}
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
                ref={menuRef}
                className={`md:hidden fixed inset-x-0 top-14 bg-[rgba(11,12,14,0.95)] backdrop-blur-md transition-all duration-300 z-50 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
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
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            onOpenWaitlist();
                            setMenuOpen(false);
                        }}
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
        </>
    );
}
