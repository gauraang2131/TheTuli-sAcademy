"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    { title: "Teacher Training", desc: "Empowering educators with modern pedagogical tools and classroom management strategies." },
    { title: "Curriculum Design", desc: "Bespoke curriculum development aligned with global standards and local needs." },
    { title: "Syllabus & Book Selection", desc: "Expert curation of resource materials to enhance learning outcomes." },
    { title: "Leadership Vision", desc: "Alignment sessions for institutional leaders to define and achieve their vision." },
];

export default function SchoolsInstitutions() {
    return (
        <div className="bg-white min-h-screen text-black selection:bg-brand-red selection:text-white">
            <section className="py-40 bg-white/30 relative px-6 overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="text-center"
                    >
                        <span className="text-brand-red font-phudu font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Institutional Vision</span>
                        <h1 className="font-phudu text-7xl md:text-9xl font-black text-black mb-10 tracking-tighter leading-[0.85] uppercase italic">
                            Elevating <br />
                            <span className="text-brand-red underline decoration-brand-blue decoration-8 underline-offset-[12px]">Institutions<span className="text-black">.</span></span>
                        </h1>
                        <p className="text-xl text-black/60 font-medium leading-relaxed max-w-2xl mx-auto border-t-2 border-b-2 border-brand-red/10 py-10 font-sans">
                            We partner with leading schools to redefine their curriculum, train their educators,
                            and align their vision with global excellence standards.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <div key={index} className="group p-12 border-2 border-transparent bg-white/50 backdrop-blur-md hover:bg-white hover:border-brand-red/20 transition-all duration-700 relative overflow-hidden rounded-[2rem] shadow-xl">
                            <span className="text-brand-red/20 text-5xl font-phudu font-black italic mb-8 block group-hover:text-brand-red transition-colors">0{index + 1}</span>
                            <h3 className="font-phudu text-3xl font-black text-black mb-6 tracking-tight leading-tight uppercase italic">{service.title}</h3>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
                <div className="mt-40 text-center">
                    <Link href="/collaboration" className="inline-flex px-16 py-6 bg-black text-white font-phudu font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-red transition-all duration-700 shadow-2xl rounded-full">
                        Continue to Collaborate
                    </Link>
                </div>
            </section>
        </div>
    );
}
