"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
    { step: "01", title: "Strategic Audit", desc: "We listen to your global goals, challenges, and aspirations to create a high-performance baseline for growth." },
    { step: "02", title: "Custom Roadmap", desc: "A detailed strategy session where we map out precise steps for academic or institutional dominance." },
    { step: "03", title: "Sustained Mentorship", desc: "Continued engagement and tactical support to ensure your roadmap is executed to perfection." },
];

export default function BookConsultation() {
    return (
        <div className="bg-white min-h-screen text-black selection:bg-brand-gold selection:text-white">
            {/* Header */}
            <section className="py-40 bg-white/30 text-center relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="font-phudu font-black text-7xl md:text-9xl mb-10 tracking-tighter uppercase italic leading-none"
                    >
                        Reservation<span className="text-brand-red">.</span>
                    </motion.h1>
                    <p className="text-brand-red text-xs tracking-[0.6em] uppercase font-black border-t-2 border-b-2 border-brand-red/20 py-8 inline-block">
                        Personalised Guidance for Global Futures
                    </p>
                </div>
            </section>

            {/* Consultation Options */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white/50 backdrop-blur-md p-16 md:p-24 border-2 border-transparent hover:border-brand-red/30 transition-all duration-700 group relative rounded-[3rem] shadow-xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-3 h-0 bg-brand-red group-hover:h-full transition-all duration-700" />
                            <h3 className="font-phudu font-black text-5xl text-black mb-8 tracking-tighter uppercase leading-none">
                                Physical <br /><span className="text-brand-red italic font-hand normal-case tracking-normal">Atelier</span>
                            </h3>
                            <p className="text-black/70 mb-12 leading-relaxed font-sans font-medium text-xl">
                                Join us for an in-person session at our flagship learning space. Experience the curated
                                environment and discuss your vision face-to-face with our lead educators.
                            </p>
                            <Link href="/book-a-consultation/form" className="w-full py-8 bg-black text-white font-phudu font-black uppercase tracking-[0.4em] text-xs hover:bg-brand-red transition-all shadow-2xl rounded-full text-center block">
                                Continue to Selection
                            </Link>
                        </div>

                        <div className="bg-white/50 backdrop-blur-md p-16 md:p-24 border-2 border-transparent hover:border-brand-blue/30 transition-all duration-700 group relative rounded-[3rem] shadow-xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-3 h-0 bg-brand-blue group-hover:h-full transition-all duration-700" />
                            <h3 className="font-phudu font-black text-5xl text-black mb-8 tracking-tighter uppercase leading-none">
                                Digital <br /><span className="text-brand-blue italic font-hand normal-case tracking-normal">Suite</span>
                            </h3>
                            <p className="text-black/70 mb-12 leading-relaxed font-sans font-medium text-xl">
                                Connect with us from anywhere in the world. High-impact Zoom sessions designed to
                                provide absolute clarity and strategic roadmaps through digital excellence.
                            </p>
                            <Link href="/book-a-consultation/form" className="w-full py-8 border-2 border-black text-black font-phudu font-black uppercase tracking-[0.4em] text-xs hover:bg-black hover:text-white transition-all shadow-xl rounded-full text-center block">
                                Continue to Selection
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-40 bg-white/20">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="font-phudu font-black text-6xl md:text-8xl text-black mb-32 tracking-tighter uppercase italic leading-none">
                        The Master Plan
                    </h2>
                    <div className="grid gap-20 text-left">
                        {steps.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-12 items-start group">
                                <span className="font-phudu text-[120px] leading-none text-black font-black opacity-10 group-hover:opacity-100 group-hover:text-brand-red transition-all duration-700 select-none">
                                    {item.step}
                                </span>
                                <div className="border-l-4 border-black/10 pl-12 py-4 group-hover:border-brand-red transition-colors">
                                    <h3 className="font-phudu font-black text-4xl text-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                                    <p className="text-black/60 text-2xl leading-relaxed font-sans font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
