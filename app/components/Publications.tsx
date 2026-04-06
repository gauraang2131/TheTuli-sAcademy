"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import LuxuryAesthetic from "./LuxuryAesthetic";

export default function Publications() {
    return (
        <section id="publications" className="relative z-20 w-full min-h-[120vh] bg-white py-40 px-4 md:px-12 flex items-center overflow-hidden border-t border-black/5">
            {/* Background luxury accents - Refined for light theme */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none opacity-40" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none opacity-40" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-center order-2 lg:order-1"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-[1px] w-12 bg-brand-red"></div>
                        <span className="text-brand-red font-phudu font-black uppercase tracking-[0.3em] text-[10px]">Selected Publication</span>
                    </div>

                    <h2 className="text-6xl md:text-9xl font-phudu font-black text-black mb-10 tracking-tighter uppercase leading-[0.85] italic">
                        On the <br />
                        <span className="text-brand-red normal-case font-hand tracking-normal">Shelf</span>
                    </h2>

                    <div className="space-y-8 text-xl md:text-2xl text-black/70 font-medium leading-relaxed font-sans max-w-xl">
                        <p>
                            <span className="text-black font-phudu font-black italic text-2xl mr-1">Rouble Tuli</span> is an educator and accomplished author, recognised for translating complex ideas into thoughtful, engaging narratives for young minds.
                        </p>
                        <p>
                            His writing reflects a refined balance of insight and imagination, shaped by a deep understanding of how children learn.
                        </p>
                        <p>
                            He holds a Master’s degree in Biotechnology and a certificate in Shakespeare from the <span className="text-brand-red font-hand">University of Oxford</span>.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-16"
                    >
                        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
                            <a
                                href="https://notionpress.com/in/read/mba-for-children/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-4 text-black font-phudu font-black uppercase tracking-widest text-[10px] hover:text-brand-red transition-all duration-300"
                            >
                                <span className="border-b-2 border-black pb-1 group-hover:border-brand-red transition-colors">View Publication</span>
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </a>

                            <Link
                                href="/student-publications"
                                className="group inline-flex items-center gap-4 text-black font-phudu font-black uppercase tracking-widest text-[10px] hover:text-brand-red transition-all duration-300"
                            >
                                <span className="border-b-2 border-black pb-1 group-hover:border-brand-red transition-colors">View Academy Library</span>
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Book Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2"
                >
                    <div className="relative group perspective-1000">
                        <div className="relative z-10 w-[300px] md:w-[450px] shadow-2xl transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-4 stamp-shape overflow-hidden">
                            <img
                                src="/mba-for-children.jpg"
                                alt="MBA for Children - Book Cover"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative background glow */}
                        <div className="absolute -inset-10 bg-brand-blue/20 rounded-full blur-3xl -z-10 group-hover:bg-brand-red/20 transition-all duration-700" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
