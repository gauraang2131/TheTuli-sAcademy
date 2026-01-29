"use client";

import { motion } from "framer-motion";

export default function Publications() {
    return (
        <section className="relative z-20 w-full min-h-[120vh] bg-[#050505] py-40 px-4 md:px-12 flex items-center overflow-hidden">
            {/* Background luxury accents - Gold/Neutral */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-800/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Side: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col justify-center order-2 lg:order-1"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-16 bg-amber-500/40"></div>
                        <span className="text-amber-500/80 uppercase tracking-[0.25em] text-xs font-medium">Publications</span>
                    </div>

                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tight font-serif leading-none">
                        On the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">Shelf</span>
                    </h2>

                    <div className="space-y-8 text-lg md:text-xl text-neutral-400 font-light leading-relaxed font-sans max-w-xl">
                        <p>
                            <span className="text-white font-serif italic text-2xl mr-1">Rouble Tuli</span> is an educator and accomplished author, recognised for translating complex ideas into thoughtful, engaging narratives for young minds.
                        </p>
                        <p>
                            His writing reflects a refined balance of insight and imagination, shaped by a deep understanding of how children learn.
                        </p>
                        <p>
                            He holds a Master’s degree in Biotechnology and a certificate in Shakespeare from the <span className="text-amber-200/60 font-serif italic">University of Oxford</span>.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-16"
                    >
                        <a
                            href="https://notionpress.com/in/read/mba-for-children/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 text-white/80 border-b border-white/20 pb-2 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 uppercase tracking-widest text-xs group"
                        >
                            View Publication
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Side: Book Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2"
                >
                    {/* Simplified Luxury Glow */}
                    <div className="absolute inset-0 bg-amber-500/10 blur-[80px] rounded-full transform scale-90" />

                    <div className="relative group perspective-1000">
                        <div className="relative z-10 w-[320px] md:w-[450px] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] transition-all duration-700 ease-out group-hover:scale-[1.01] group-hover:-translate-y-2">
                            <img
                                src="/mba-for-children.jpg"
                                alt="MBA for Children - Book Cover"
                                className="w-full h-auto rounded-sm object-cover shadow-2xl ring-1 ring-white/5"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
