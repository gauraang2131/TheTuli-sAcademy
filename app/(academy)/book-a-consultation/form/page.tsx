"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function ConsultationForm() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black">
            <Navbar />
            <section className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-[#0A3161]/5 rounded-full blur-[150px]" />
                </div>

                <div className="max-w-3xl w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <span className="text-[#D4AF37] font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Concierge Service</span>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tighter mb-6">Book Your Consultation</h1>
                        <p className="text-white/60 font-light text-lg max-w-xl mx-auto">
                            Bypass the waitlist. Schedule a direct strategic roadmap session with our lead educators.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-[#050505] border border-[#D4AF37]/20 p-12 md:p-20 shadow-2xl relative inline-block mx-auto w-full max-w-2xl group"
                    >
                        <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-1000" />

                        <div className="mb-10 text-6xl">🗓️</div>

                        <h2 className="font-phudu text-2xl uppercase tracking-widest text-white mb-8 font-black">
                            Select Your Time
                        </h2>

                        <div className="block w-full py-6 bg-[#D4AF37] text-black font-phudu font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.2)] mt-8 cursor-pointer text-center">
                            Open Calendly
                        </div>

                        <Link href="/book-a-consultation" className="inline-block mt-8 text-[10px] font-phudu uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors">
                            Return to details
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
