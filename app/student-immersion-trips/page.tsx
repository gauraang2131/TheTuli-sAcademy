"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import StickyHeader from "../components/StickyHeader";
import ScrollySection from "../components/ScrollySection";

export default function ImmersionTrip() {
    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <main className="relative w-full min-h-screen bg-black text-white font-sans selection:bg-brand-red selection:text-white">
            <StickyHeader />

            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
                    {/* Background image effect (simulated with large blurred shapes for luxury feel) */}
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-gold/10 rounded-full blur-[150px] mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-brand-red/10 rounded-full blur-[150px] mix-blend-screen" />
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-red/30 bg-brand-red/5 backdrop-blur-md rounded-full mb-8">
                            <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                            <span className="text-[10px] md:text-xs font-phudu font-black uppercase tracking-[0.3em] text-brand-red">
                                Registrations open till 15th May
                            </span>
                        </div>

                        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl leading-tight mb-6">
                            The Immersion <br />
                            <span className="italic text-brand-gold">Trip is On.</span>
                        </h1>

                        <p className="text-lg md:text-2xl font-light tracking-wide text-white/70 max-w-3xl mx-auto mb-12">
                            A curated expedition to the United Kingdom’s most prestigious academic institutions.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="text-[10px] font-phudu font-bold uppercase tracking-[0.4em] text-white/40">Discover the Journey</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-brand-gold/50 to-transparent" />
                </motion.div>
            </section>

            {/* The Experience Section */}
            <section className="py-24 md:py-32 px-6 border-t border-white/5 relative">
                <div className="max-w-6xl mx-auto">
                    <ScrollySection className="mb-20 text-center">
                        <span className="text-brand-gold font-phudu font-black text-[10px] uppercase tracking-[0.5em] block mb-4">The Experience</span>
                        <h2 className="font-serif text-4xl md:text-6xl">Beyond the Classroom</h2>
                    </ScrollySection>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        <ScrollySection delay={0.1} className="space-y-6 bg-white/5 border border-white/10 p-8 md:p-12 hover:border-brand-gold/30 transition-colors duration-500">
                            <span className="text-4xl">🎓</span>
                            <h3 className="font-serif text-3xl">Elite Heritage</h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                Experience life and academics at the UK's top boarding schools. Immerse yourself in environments that have shaped global leaders for centuries.
                            </p>
                        </ScrollySection>

                        <ScrollySection delay={0.2} className="space-y-6 bg-white/5 border border-white/10 p-8 md:p-12 hover:border-brand-gold/30 transition-colors duration-500">
                            <span className="text-4xl">🏛️</span>
                            <h3 className="font-serif text-3xl">Oxford Excursion</h3>
                            <p className="text-white/60 font-light leading-relaxed">
                                Walk the hallowed halls of Oxford University. Engage directly with its legacy through exclusive campus tours and curated learning sessions.
                            </p>
                        </ScrollySection>

                        <ScrollySection delay={0.3} className="space-y-6 bg-white/5 border border-white/10 p-8 md:p-12 hover:border-brand-gold/30 transition-colors duration-500 md:col-span-2 max-w-4xl mx-auto text-center w-full">
                            <span className="text-4xl block mb-6">🤝</span>
                            <h3 className="font-serif text-3xl">Ivy & Oxbridge Intel</h3>
                            <p className="text-white/60 font-light leading-relaxed text-lg">
                                Gain unparalleled access to Oxbridge and Ivy League alumni and admission officers. Understand the intricacies of college applications, architect bespoke career pathways, and master the art of portfolio building directly from those who evaluate them.
                            </p>
                        </ScrollySection>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-24 md:py-32 px-6 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(206,17,38,0.05)_0%,transparent_60%)] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <ScrollySection className="text-center mb-20">
                        <span className="text-brand-red font-phudu font-black text-[10px] uppercase tracking-[0.5em] block mb-4">How to Apply</span>
                        <h2 className="font-serif text-4xl md:text-5xl">A Curated Selection Process</h2>
                        <p className="mt-6 text-white/60 font-light max-w-2xl mx-auto">We are looking for students who dare to look beyond the horizon. The process is transparent, definitive, and simple.</p>
                    </ScrollySection>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <ScrollySection delay={0.1} className="flex flex-col md:flex-row gap-6 p-8 border border-white/10 bg-white/[0.02] items-start md:items-center">
                            <div className="w-16 h-16 shrink-0 rounded-full border border-brand-gold flex items-center justify-center font-serif text-2xl text-brand-gold">
                                01
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl mb-2">Enrollment Initialization</h3>
                                <p className="text-white/60 font-light">
                                    Secure your application slot with an initial enrollment fee of <span className="text-white font-medium">₹10,000</span>.
                                </p>
                            </div>
                        </ScrollySection>

                        {/* Step 2 */}
                        <ScrollySection delay={0.2} className="flex flex-col md:flex-row gap-6 p-8 border border-white/10 bg-white/[0.02] items-start md:items-center">
                            <div className="w-16 h-16 shrink-0 rounded-full border border-brand-gold flex items-center justify-center font-serif text-2xl text-brand-gold">
                                02
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl mb-2">The Capability Interview</h3>
                                <p className="text-white/60 font-light">
                                    Participate in a one-on-one interview designed to assess your ambitions, intellectual curiosity, and readiness for a global stage.
                                </p>
                            </div>
                        </ScrollySection>

                        {/* Step 3 */}
                        <ScrollySection delay={0.3} className="flex flex-col md:flex-row gap-6 p-8 border border-white/10 bg-white/[0.02] items-start md:items-center">
                            <div className="w-16 h-16 shrink-0 rounded-full border border-brand-gold flex items-center justify-center font-serif text-2xl text-brand-gold">
                                03
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl mb-2">Selection & Security</h3>
                                <p className="text-white/60 font-light">
                                    If selected, you proceed to the trip. If you do not pass the interview, we stand by our commitment to fairness: <span className="text-brand-red font-medium">75% of your ₹10,000 enrollment fee will be unconditionally returned.</span>
                                </p>
                            </div>
                        </ScrollySection>
                    </div>
                </div>
            </section>

            {/* Urgency & Investment */}
            <section className="py-24 md:py-32 px-6 border-t border-white/10 relative">
                <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

                <div className="max-w-5xl mx-auto text-center">
                    <ScrollySection>
                        <div className="inline-block border border-brand-red p-1 mb-8">
                            <div className="bg-brand-red text-black font-phudu font-black text-xs md:text-sm uppercase tracking-widest px-6 py-2">
                                Highly Exclusive
                            </div>
                        </div>

                        <h2 className="font-serif text-5xl md:text-7xl mb-6">20 Slots. <span className="text-brand-red italic">90% Filled.</span></h2>

                        <p className="text-xl md:text-2xl text-white/50 font-light max-w-2xl mx-auto mb-16">
                            This is an unprecedented opportunity. With only 10% availability remaining, action is required.
                        </p>

                        <div className="p-8 md:p-12 border border-brand-gold/30 bg-gradient-to-br from-brand-gold/10 to-transparent max-w-2xl mx-auto backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 blur-[50px] -translate-y-1/2 translate-x-1/2" />

                            <h3 className="font-phudu text-[10px] md:text-xs text-brand-gold uppercase tracking-[0.5em] font-black mb-4">Total Investment</h3>

                            <div className="flex justify-center items-end gap-2 mb-6 text-white font-serif tracking-tighter">
                                <span className="text-3xl md:text-4xl pb-1">£</span>
                                <span className="text-6xl md:text-8xl leading-none">1,700</span>
                            </div>

                            <p className="text-white/80 font-light uppercase tracking-widest text-sm mb-4">Cheaper Than Ever Before</p>
                            <p className="text-brand-gold/60 text-xs uppercase tracking-[0.2em] font-phudu">Inclusive of Flights & Visas</p>
                        </div>

                        <div className="mt-16">
                            <Link
                                href="/student-immersion-trips/book"
                                className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-black font-phudu font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-300 hover:scale-105"
                            >
                                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Apply for the Immersion</span>
                                <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </Link>
                            <p className="mt-6 text-[10px] font-phudu uppercase tracking-widest text-white/40">Registrations close 15th May.</p>
                        </div>
                    </ScrollySection>
                </div>
            </section>

            {/* Footer Minimal */}
            <footer className="py-12 px-6 border-t border-white/5 text-center bg-black">
                <span className="font-serif text-2xl block mb-4 text-white">Rouble.</span>
                <p className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-phudu">
                    © {new Date().getFullYear()} Tuli's Academy. Defining Global Pathways.
                </p>
            </footer>
        </main>
    );
}
