"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TulisAcademy() {
    return (
        <section className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black font-sans overflow-hidden py-24">

            {/* Hero Section */}
            <div className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-center gap-16 px-6 lg:px-24">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 space-y-10 relative z-10"
                >
                    <div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "4rem" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-[1px] bg-brand-gold mb-6"
                        />
                        <h2 className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-4 font-medium opacity-80">The Crown Jewel</h2>
                        <h1 className="text-6xl lg:text-8xl font-serif font-medium leading-[0.9] text-white">
                            Tuli's <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold italic">The Academy</span>
                        </h1>
                    </div>

                    <p className="text-lg text-gray-500/70 max-w-lg leading-relaxed font-light font-sans tracking-wide">
                        Celebrating years of fostering curiosity, creativity, and meaningful education. An institution designed for <span className="text-white font-serif italic">excellence</span>.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="pt-6"
                    >
                        <Link
                            href="/home"
                            className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/80 hover:text-brand-gold transition-colors duration-500"
                        >
                            <span className="border-b border-white/20 pb-2 group-hover:border-brand-gold transition-colors duration-500">Explore Academy</span>
                            <span className="pb-2 group-hover:translate-x-2 transition-transform duration-500">→</span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Image Showcase */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 relative"
                >
                    <div className="relative z-10">
                        {/* Elegant Border Frame */}
                        <div className="absolute -inset-4 border border-brand-gold/20 rounded-sm -z-10 translate-x-4 translate-y-4" />

                        <div className="relative overflow-hidden rounded-sm shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]">
                            <img
                                src="/tulis-academy.png"
                                alt="Tuli's The Academy"
                                className="w-full h-auto object-contain bg-[#0a0a0a]"
                            />
                            {/* Cinematic Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40 mix-blend-overlay pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Benefits Section */}
            <div className="relative py-32 px-6 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center mb-24"
                    >
                        <span className="text-brand-gold/60 text-[10px] uppercase tracking-[0.5em] mb-4">Values</span>
                        <h3 className="font-playfair text-4xl lg:text-5xl text-white">The Pillars of Excellence</h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                        {[
                            {
                                title: "Curiosity",
                                description: "Igniting the spark of inquiry in every student, encouraging them to question, explore, and discover the world with fresh eyes.",
                                number: "01"
                            },
                            {
                                title: "Creativity",
                                description: "Providing a canvas for imagination, where artistic expression and innovative thinking are nurtured and celebrated.",
                                number: "02"
                            },
                            {
                                title: "Meaningful Education",
                                description: "Going beyond textbooks to impart wisdom, values, and skills that resonate throughout a lifetime of achievement.",
                                number: "03"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="group relative p-8 hover:bg-white/5 transition-colors duration-700 rounded-sm"
                            >
                                <span className="absolute top-0 left-8 text-xs font-mono text-brand-gold/40 transform -translate-y-1/2 bg-[#0a0a0a] px-2">{item.number}</span>

                                <h4 className="text-2xl font-serif text-white mb-6 group-hover:text-brand-gold transition-colors duration-500">{item.title}</h4>
                                <p className="text-gray-500/60 leading-relaxed font-light text-sm">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Refined Footer Stripe */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent opacity-50" />
        </section>
    );
}
