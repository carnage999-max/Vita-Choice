import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-[#0f1720]">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Logo / Brand */}
                <div className="col-span-2 md:col-span-1">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#0ea5a6] to-[#2dd4bf] flex items-center justify-center text-[#021012] font-bold">
                            VC
                        </div>
                        <div>
                            <p className="font-semibold text-white">VitaChoice</p>
                            <p className="text-xs text-[#9fb0c9]">Advanced Nutritional Formulas — launching soon</p>
                        </div>
                    </div>
                </div>

                {/* Company Links */}
                <div className="text-sm text-[#9fb0c9]">
                    <h5 className="font-medium text-white">Company</h5>
                    <ul className="mt-3 space-y-2">
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/privacy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div className="text-sm text-[#9fb0c9]">
                    <h5 className="font-medium text-white">Support</h5>
                    <ul className="mt-3 space-y-2">
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/refund-policy">Refund Policy</Link></li>
                        <li><Link href="/shipping-policy">Shipping Policy</Link></li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="col-span-2 md:col-span-1">
                    <h5 className="font-medium text-white">Stay Updated</h5>
                    <p className="text-xs text-[#9fb0c9] mt-2 mb-4">
                        Subscribe for launch updates and exclusive offers.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-md bg-[#14161A] text-white placeholder-[#7f95a8] border border-[#262A31] focus:outline-none focus:border-[#2EE6D6]"
                        />
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#2EE6D6] to-[#2EA7FF] text-[#0B0C0E] px-6 py-2 rounded-md font-semibold hover:shadow-[0_8px_20px_rgba(46,230,214,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-[#7f95a8] border-t border-[#0b1317] text-center md:text-left">
                © {new Date().getFullYear()} VitaChoice. All rights reserved.
            </div>
        </footer>
    );
}
