"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const areas = [
    { title: "Become a Published Author", desc: "A unique program for children to find their voice and see their work in print." },
    { title: "Research Paper Writing", desc: "Expert guidance on academic research, methodology, and scientific communication." },
    { title: "Amritsar Literature Festival", desc: "Our annual celebration of words, ideas, and the joy of reading." },
];

export default function WritingResearch() {
    return (
        <div className="bg-white min-h-screen text-black selection:bg-brand-gold selection:text-white">
            <section className="py-40 px-6 max-w-7xl mx-auto relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[140px] -z-10" />
                <div className="max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-brand-red font-phudu font-black uppercase tracking-[0.5em] text-[10px] mb-8 block"
                    >
                        Literary Excellence
                    </motion.span>
                    <h1 className="font-phudu text-6xl md:text-9xl font-black text-black leading-[0.85] tracking-tighter mb-12 uppercase italic">
                        Writing, <br />
                        <span className="text-brand-red">Publishing</span> <br />
                        & Research<span className="text-brand-red">.</span>
                    </h1>
                    <p className="text-xl text-black/60 font-medium leading-relaxed max-w-2xl border-l-[3px] border-brand-red/30 pl-10 font-sans">
                        From penning your first manuscript to conducting high-impact academic research,
                        we provide the mentorship and platform to make your voice heard globally.
                    </p>
                    <Link href="/publisher" className="inline-block mt-12 px-12 py-5 bg-black text-white font-phudu font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-red transition-all shadow-xl rounded-full">
                        Become a Publisher
                    </Link>
                </div>
            </section>

            <section className="py-32 bg-white/30 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-16">
                        {[
                            { title: "Become a Published Author", desc: "A comprehensive mentorship program for young writers to find their voice and see their work in print and on global platforms like Amazon." },
                            { title: "Research Paper Writing", desc: "Master the art of academic inquiry. We guide students through the selection, drafting, and submission of high-quality research papers." },
                        ].map((item, index) => (
                            <div key={index} className="space-y-6 group">
                                <h3 className="font-phudu text-4xl font-black text-black group-hover:text-brand-red transition-colors tracking-tighter uppercase italic">{item.title}</h3>
                                <p className="text-black/70 text-lg font-medium leading-relaxed font-sans">{item.desc}</p>
                                <div className="w-12 h-1 bg-brand-red/20 group-hover:w-full transition-all duration-700" />
                            </div>
                        ))}
                    </div>
                    <div className="bg-white/50 backdrop-blur-md p-20 border-2 border-transparent hover:border-brand-red/20 rounded-[3rem] shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden group transition-all duration-700">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <h3 className="font-phudu text-5xl font-black text-black mb-8 tracking-tighter uppercase italic leading-none">Amritsar <br />Literature <span className="text-brand-red">Festival</span></h3>
                        <p className="text-black/60 text-sm font-medium leading-relaxed mb-10 max-w-xs font-sans">
                            A flagship initiative bringing together voices, ideas, and the joy of literature to the heart of Punjab.
                        </p>
                        <button className="text-[10px] font-phudu font-black uppercase tracking-[0.4em] text-black border-b-2 border-brand-red/40 pb-2 hover:text-brand-red hover:border-brand-red transition-all">
                            Visit Festival site
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-40 bg-white border-t border-black/5 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-phudu text-5xl md:text-7xl font-black text-black mb-10 tracking-tighter uppercase italic">Your Legacy Begins<br /> with a Single Word.</h2>
                    <p className="text-black/60 text-lg font-medium mb-16 max-w-xl mx-auto font-sans">
                        Whether you're an aspiring young author or a research scholar, we provide the ultimate platform for your intellectual heritage.
                    </p>
                    <Link href="/contact" className="inline-block px-16 py-6 bg-black text-white font-phudu font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-red transition-all shadow-2xl rounded-full">
                        Continue to Book Service
                    </Link>
                </div>
            </section>
        </div>
    );
}
