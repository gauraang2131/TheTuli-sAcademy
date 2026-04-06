"use client";

import { motion } from "framer-motion";

export default function EventsLeadership() {
    return (
        <div className="bg-[#0A0A0A] min-h-screen text-white">
            <section className="py-40 bg-[#050505] text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 to-transparent" />
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[#D4AF37] font-bold uppercase tracking-[0.6em] text-[10px] mb-8 block"
                    >
                        Pluralistic Platforms
                    </motion.span>
                    <h1 className="font-serif text-7xl md:text-9xl font-bold mb-10 tracking-tighter leading-[0.85]">
                        Events & <br />
                        <span className="text-[#D4AF37]">Leadership.</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-light leading-relaxed border-l-2 border-r-2 border-[#D4AF37]/20 px-12 italic">
                        Fostering the next generation of global leaders through world-class
                        platforms and transformative intellectual events.
                    </p>
                </div>
            </section>

            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group relative overflow-hidden bg-[#050505] p-20 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-700">
                        <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">Global Voice</span>
                        <h2 className="font-serif text-5xl font-bold text-white mb-8 tracking-tighter">TEDx</h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-12 font-light">
                            Join us for independently organized TED events where ideas worth spreading
                            come to life. A stage for thinkers to share transformative insights.
                        </p>
                        <div className="flex gap-6">
                            <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#D4AF37]/30 pb-1">Public Speaking</span>
                            <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#D4AF37]/30 pb-1">Innovation</span>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden bg-[#0A0A0A] p-20 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-700">
                        <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] mb-8 block opacity-40 group-hover:opacity-100 transition-opacity">Diplomacy</span>
                        <h2 className="font-serif text-5xl font-bold text-white mb-8 tracking-tighter">MUN</h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-12 font-light">
                            Model United Nations. Negotiate, debate, and solve global issues. Empowering
                            students with the art of international relations and leadership.
                        </p>
                        <div className="flex gap-6">
                            <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#D4AF37]/30 pb-1">Diplomacy</span>
                            <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#D4AF37]/30 pb-1">Leadership</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
