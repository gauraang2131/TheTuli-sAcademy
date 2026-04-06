"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const workshops = [
    { title: "Learning Difficulties", target: "Parents & Teachers", icon: "🧠" },
    { title: "Modern Parenting", target: "Parents", icon: "👨‍👩‍👧" },
    { title: "Future Careers", target: "Students & Parents", icon: "🚀" },
    { title: "Communication Skills", target: "Teachers & Students", icon: "🎙️" },
];

export default function Workshops() {
    return (
        <div className="bg-white min-h-screen text-black selection:bg-brand-red selection:text-white">
            <section className="py-40 bg-white/30 relative overflow-hidden text-center backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-brand-red font-phudu font-black uppercase tracking-[0.6em] text-[10px] mb-10 block"
                    >
                        Community Engagement
                    </motion.span>
                    <h1 className="font-phudu text-7xl md:text-[10rem] font-black text-black mb-12 tracking-tighter leading-[0.85] uppercase italic">
                        Workshops & <br />
                        <span className="text-brand-red underline decoration-brand-blue decoration-8 underline-offset-[12px]">Awareness<span className="text-black">.</span></span>
                    </h1>
                    <p className="text-xl text-black/60 font-medium max-w-2xl mx-auto leading-relaxed border-l-4 border-r-4 border-brand-red/10 px-12 italic font-sans">
                        High-impact sessions designed to inspire, educate, and equip our community
                        with the knowledge to navigate the future of education.
                    </p>
                </div>
            </section>

            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {workshops.map((ws, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white/50 backdrop-blur-md p-12 text-center border-2 border-transparent transition-all duration-700 hover:border-brand-red/20 group relative overflow-hidden rounded-[2.5rem] shadow-xl"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-blue/10 rounded-full -mr-8 -mt-8" />
                            <div className="text-6xl mb-10 group-hover:scale-110 transition-transform duration-500">{ws.icon}</div>
                            <h3 className="font-phudu font-black text-3xl text-black mb-4 tracking-tight uppercase italic leading-none">{ws.title}</h3>
                            <p className="text-[10px] text-brand-red font-black uppercase tracking-[0.3em] font-phudu">{ws.target}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-40 bg-gray-50/30 border-t border-black/5">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="border-2 border-brand-red/10 bg-white/40 backdrop-blur-md p-20 flex flex-col md:flex-row items-center gap-16 relative group rounded-[4rem] shadow-2xl transition-all duration-1000 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="flex-1 space-y-8 relative z-10 text-center md:text-left">
                            <h2 className="font-phudu text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">Host a <span className="text-brand-red">Curated</span> <br /> Workshop.</h2>
                            <p className="text-black/60 text-lg font-medium leading-relaxed font-sans">
                                Our sessions are adaptable for schools, global community groups, and leading
                                institutions. Experience educator-led transformation.
                            </p>
                            <Link href="/contact" className="inline-block px-12 py-5 bg-black text-white font-phudu font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-red transition-all shadow-2xl rounded-full">
                                Continue to Inquire
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
