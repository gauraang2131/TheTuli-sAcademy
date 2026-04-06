"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function ImmersionBookingSlot() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black">
            <Navbar />
            <section className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
                {/* Background luxury elements */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-[#CE1126]/5 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-3xl w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#050505] border border-[#D4AF37]/20 p-10 md:p-16 text-center shadow-2xl relative"
                    >
                        {/* Decorative corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#D4AF37]/40" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#D4AF37]/40" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#D4AF37]/40" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#D4AF37]/40" />

                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8">
                            <span className="text-2xl">📅</span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            The Capability Interview
                        </h1>

                        <p className="font-sans text-white/70 font-light text-lg mb-4 max-w-xl mx-auto leading-relaxed">
                            To ensure the global success of the cohort, admission to the UK Immersion Trip requires a one-on-one capability assessment.
                        </p>

                        <div className="w-12 h-[1px] bg-[#CE1126] mx-auto my-8" />

                        <p className="font-phudu text-xs text-[#D4AF37] uppercase tracking-[0.4em] font-bold mb-12">
                            Secure your priority slot below
                        </p>

                        <div className="flex flex-col gap-6 items-center">
                            <div className="w-full sm:w-auto relative group overflow-hidden px-12 py-5 bg-[#D4AF37] text-black font-phudu font-black uppercase tracking-[0.3em] text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)] mt-8 cursor-pointer">
                                <span className="relative z-10">Schedule with Calendly</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </div>

                            <Link href="/student-immersion-trips" className="text-[10px] uppercase font-phudu tracking-[0.3em] text-white/40 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                                Return to details
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
