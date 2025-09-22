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
              <p className="text-xs text-[#9fb0c9]">— launching soon</p>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="text-sm text-[#9fb0c9]">
          <h5 className="font-medium text-white">Company</h5>
          <ul className="mt-3 space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/press">Press</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="text-sm text-[#9fb0c9]">
          <h5 className="font-medium text-white">Support</h5>
          <ul className="mt-3 space-y-2">
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/policy">Policies</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-[#7f95a8] border-t border-[#0b1317] text-center md:text-left">
        © {new Date().getFullYear()} Vita-Choice. All rights reserved.
      </div>
    </footer>
  );
}
