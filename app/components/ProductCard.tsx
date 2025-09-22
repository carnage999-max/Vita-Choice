"use client";

import Image from "next/image";

export default function ProductCard({
    product,
    onOpenWaitlist,
}: {
    product: { id: string; name: string; price: string; desc: string; src: string };
    onOpenWaitlist: () => void;
}) {
    return (
        <article className="bg-[#081014] border border-[#0f1720] rounded-2xl p-4">
            <div className="w-full h-48 bg-[#061018] rounded-lg mb-4 flex items-center justify-center text-xs text-[#9fb0c9]">
                <Image
                    src='/product-placeholder.png'
                    alt={product.name}
                    width={100}
                    height={100}
                    className=""
                />
            </div>
            <h3 className="text-sm font-semibold">{product.name}</h3>
            <p className="mt-1 text-xs text-[#9fb0c9]">{product.desc}</p>

            <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-medium">{product.price}</div>
                <div className="flex gap-2">
                    <button
                        onClick={onOpenWaitlist}
                        className="px-3 py-1 rounded-md bg-white text-[#071018] text-sm"
                    >
                        Notify
                    </button>
                    <button
                        onClick={() => window.location.assign("/coming-soon")}
                        className="px-3 py-1 rounded-md border border-[#1f2937] text-xs"
                    >
                        View
                    </button>
                </div>
            </div>
        </article>
    );
}
