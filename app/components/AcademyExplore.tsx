"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LuxuryAesthetic from "./LuxuryAesthetic";

const routes = [
    { name: "Global Home", href: "/home", description: "Where architectural vision meets academic legacy.", icon: "🏛️" },
    { name: "Advanced Academy", href: "/academy", description: "The pinnacle of intellectual character and growth.", icon: "🕍" },
    { name: "Literary Arts", href: "/writing-publishing-research", description: "Etching your legacy through the written word.", icon: "✒️" },
    { name: "Institutional Partnerships", href: "/schools-institutions", description: "Collaborative excellence on a global scale.", icon: "🤝" },
    { name: "Leadership Platforms", href: "/events-leadership", description: "Where voices define the future.", icon: "🏆" },
    { name: "Curated Knowledge", href: "/books-thought-leadership", description: "Insightful narratives for the next generation.", icon: "📖" },
    { name: "Infinite Ecosystem", href: "/media-community", description: "A digital landscape of shared insights.", icon: "🌐" },
    { name: "Strategic Advisory", href: "/book-a-consultation", description: "Personalised roadmaps to excellence.", icon: "⏳" },
];

export default function AcademyExplore() {
    return (
        <section className="relative z-20 w-full min-h-screen bg-[#050505] py-32 px-4 md:px-12 overflow-hidden">
            {/* Ambient Background Elements - Very Deep & Subtle */}
            <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[250px] pointer-events-none opacity-40 mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-black/10 rounded-full blur-[200px] pointer-events-none opacity-50 mix-blend-screen" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center mb-32 relative"
                >

                    <h2 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] mb-6 font-medium opacity-80">The Ecosystem</h2>
                    <h1 className="text-6xl md:text-8xl font-serif font-medium text-white mb-8 tracking-tighter leading-none">
                        Infinite <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold italic">
                            Possibilities
                        </span>
                    </h1>

                    {/* Minimal Separator - Stillness */}
                    <div className="h-[1px] w-[120px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {routes.map((route, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.8, ease: "easeOut" }}
                        >
                            <Link
                                id={route.name === "Literary Arts" ? "research" : undefined}
                                href={route.href}
                                className="group block h-full p-8 border border-white/5 bg-[#080808] hover:border-brand-gold/20 transition-all duration-1000 rounded-sm relative overflow-hidden"
                            >
                                {/* Active Glow on Hover - Controlled */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Inner Content */}
                                <div className="relative z-10 h-full flex flex-col items-center text-center">
                                    <div className="relative text-4xl mb-6 text-brand-gold/80 group-hover:scale-105 transition-transform duration-700 opacity-90">
                                        {route.icon}
                                    </div>

                                    <h3 className="text-lg font-serif font-medium text-white mb-4 group-hover:text-brand-gold transition-colors duration-700 tracking-wide">
                                        {route.name}
                                    </h3>

                                    <p className="text-gray-500/50 text-xs leading-relaxed font-light mb-8 flex-grow max-w-[200px]">
                                        {route.description}
                                    </p>

                                    <div className="w-full flex items-center justify-center pt-6 border-t border-white/5 group-hover:border-brand-gold/10 transition-colors duration-700">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-brand-gold/80 transition-colors duration-700">
                                            Discover
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <LuxuryAesthetic />
        </section>
    );
}
