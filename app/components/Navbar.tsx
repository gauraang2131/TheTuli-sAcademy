"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
    { name: "The Suite", href: "/home" },
    { name: "Academy", href: "/academy" },
    { name: "Research", href: "/writing-publishing-research" },
    { name: "Trips", href: "/student-immersion-trips" },
    { name: "Partners", href: "/schools-institutions" },
    { name: "Events", href: "/events-leadership" },
    { name: "Library", href: "/student-publications" },
    { name: "Media", href: "/media-community" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/home" className="flex items-center space-x-2">
                    <span className="font-phudu text-2xl font-black tracking-tighter text-black uppercase italic">
                        Tuli's <span className="text-brand-red">Academy</span>
                    </span>
                </Link>

                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[10px] font-phudu font-black tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? "text-brand-red" : "text-black/50 hover:text-brand-red"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center">
                    <Link
                        href="/book-a-consultation"
                        className="bg-black text-white px-10 py-3 rounded-full text-[10px] font-phudu font-black uppercase tracking-[0.2em] hover:bg-brand-red hover:scale-105 transition-all duration-500 shadow-xl"
                    >
                        Reservation
                    </Link>
                </div>
            </div>
        </nav>
    );
}
