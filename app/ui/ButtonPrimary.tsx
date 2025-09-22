"use client";

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export default function PrimaryButton({
    children,
    className,
    ...props
}: PrimaryButtonProps) {
    return (
        <button
            {...props}
            className={clsx(
                "bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-8 py-4 rounded-xl font-semibold transition-all duration-300",
                "hover:shadow-[0_10px_25px_rgba(46,230,214,0.3)] hover:-translate-y-1",
                className
            )}
        >
            {children}
        </button>
    );
}
