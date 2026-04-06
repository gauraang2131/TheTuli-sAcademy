"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function StickyHeader() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-3xl font-phudu font-black tracking-tight text-black uppercase">
                    Rouble<span className="text-brand-red">.</span><span className="text-brand-blue">Tuli</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {["About", "Possibilities", "Academics", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/#${item.toLowerCase()}`}
                            className="under-draw text-xs font-phudu font-black uppercase tracking-[0.2em] text-black hover:text-brand-red transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link href="/book-a-consultation">
                        <button className="px-10 py-4 bg-black text-white font-phudu font-black text-xs uppercase tracking-widest rounded-full hover:bg-brand-red hover:scale-105 transition-all duration-300 shadow-lg">
                            Inquire
                        </button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle (Placeholder) */}
                <button className="md:hidden text-black">
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>
        </motion.header>
    );
}
