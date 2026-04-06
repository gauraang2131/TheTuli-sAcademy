"use client";

import { motion } from "framer-motion";

const books = [
    { title: "MBA for Children", desc: "A first-of-its-kind guide to business concepts for young minds.", coverColor: "bg-emerald-900" },
    { title: "Education Insights", desc: "A collection of educator-led reviews and future perspectives.", coverColor: "bg-black" },
];

export default function BooksLeadership() {
    return (
        <div className="bg-white min-h-screen text-black selection:bg-brand-red selection:text-white">
            <section className="py-40 max-w-7xl mx-auto px-6 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="max-w-2xl mb-32 relative z-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-brand-red font-phudu font-black uppercase tracking-[0.6em] text-[10px] mb-8 block"
                    >
                        Intellectual Legacy
                    </motion.span>
                    <h1 className="font-phudu text-7xl md:text-[9rem] font-black text-black leading-[0.85] mb-10 tracking-tighter uppercase italic">
                        Thought <br />
                        <span className="text-brand-red underline decoration-brand-blue decoration-8 underline-offset-[12px]">Leadership<span className="text-black">.</span></span>
                    </h1>
                    <p className="text-xl text-black/60 font-medium border-l-4 border-brand-red/20 pl-10 max-w-lg leading-relaxed font-sans">
                        Our publications are more than literature—they are blueprints for
                        the next generation of global thinkers and leaders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                    {books.map((book, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-12 items-center md:items-start group relative">
                            <motion.div
                                whileHover={{ rotateY: -20, scale: 1.05, x: 10 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className={`w-56 aspect-[3/4.5] ${book.coverColor} rounded-none shadow-2xl flex items-end p-8 border-l-[12px] border-white/5 relative overflow-hidden group-hover:shadow-[40px_40px_80px_rgba(0,0,0,0.2)] transition-all`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                                <span className="text-white font-phudu font-black uppercase italic text-lg leading-tight relative z-10">{book.title}</span>

                                {/* Stamp decoration */}
                                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center text-[10px] text-white/40 font-phudu font-black uppercase tracking-widest rotate-12">
                                    Tuli
                                </div>
                            </motion.div>
                            <div className="flex-1 space-y-8 text-center md:text-left pt-6">
                                <h3 className="font-phudu text-4xl font-black text-black group-hover:text-brand-red transition-colors tracking-tighter uppercase italic leading-none">{book.title}</h3>
                                <p className="text-black/60 leading-relaxed font-medium text-lg font-sans">{book.desc}</p>
                                <button className="text-brand-red font-phudu font-black uppercase tracking-[0.4em] text-[10px] border-b-2 border-brand-blue/30 pb-2 hover:border-brand-red transition-all">
                                    Explore Insights
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
