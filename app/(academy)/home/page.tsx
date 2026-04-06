"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const featuredPrograms = [
    { title: "Early Years", description: "First words to foundational learning (Ages 2–6).", href: "/early-years", color: "bg-academy-sage" },
    { title: "Academy", description: "Academic excellence & career counseling (Grade 6+).", href: "/academy", color: "bg-black" },
    { title: "Global Trips", description: "10-day immersion programs in the UK.", href: "/student-immersion-trips", color: "bg-brand-gold" },
    { title: "Corporate / Schools", description: "Curriculum design & leadership vision.", href: "/schools-institutions", color: "bg-[#4A4A4A]" },
];

import LuxuryAesthetic from "../../components/LuxuryAesthetic";

export default function AcademyHome() {
    return (
        <div className="flex flex-col bg-white text-black relative selection:bg-brand-red selection:text-white">
            <LuxuryAesthetic />
            {/* Hero Section */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/academy-hero.png"
                        alt="Academy Hero"
                        className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-brand-red text-xs font-phudu font-black uppercase tracking-[0.5em] mb-6 block"
                        >
                            The Pinnacle of Education
                        </motion.span>
                        <h1 className="font-phudu text-6xl md:text-9xl font-black text-black leading-[0.85] mb-8 tracking-tighter uppercase italic">
                            Designing <br />
                            <span className="text-brand-red underline decoration-brand-blue decoration-8 underline-offset-8">Global Futures<span className="text-black">.</span></span>
                        </h1>
                        <p className="text-lg md:text-2xl text-black/70 font-medium leading-relaxed mb-12 max-w-xl border-l-4 border-brand-red/30 pl-8 font-sans">
                            From first words to global classrooms—holistic, educator-designed services
                            that nurture curiosity and lead to excellence.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Link
                                href="/book-a-consultation"
                                className="px-10 py-5 bg-black text-white font-phudu font-black rounded-full hover:bg-brand-red transition-all duration-500 uppercase tracking-[0.2em] text-[10px] shadow-2xl"
                            >
                                Book Consultation
                            </Link>
                            <Link
                                href="/academy"
                                className="px-10 py-5 border-2 border-black/20 text-black font-phudu font-black rounded-full hover:bg-black hover:text-white transition-all duration-500 uppercase tracking-[0.2em] text-[10px]"
                            >
                                Explore Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Accent */}
                <div className="absolute right-12 bottom-0 w-[2px] h-32 bg-gradient-to-t from-brand-red to-transparent hidden lg:block" />
            </section>

            {/* Admissions Billboard Section */}
            <section className="relative py-32 bg-white/30 backdrop-blur-sm overflow-hidden border-y border-black/5">
                <div className="absolute top-0 right-0 p-12 opacity-10 blur-3xl pointer-events-none">
                    <div className="w-96 h-96 bg-brand-blue rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-12 md:p-24 border-2 border-brand-red/20 bg-white/50 backdrop-blur-md rounded-[4rem] shadow-2xl"
                    >
                        <h2 className="text-brand-red text-xs font-phudu font-black uppercase tracking-[0.6em] mb-12">Current Status: Open</h2>
                        <h3 className="font-phudu text-5xl md:text-[8rem] font-black text-black mb-10 tracking-tighter uppercase italic leading-[0.8]">
                            Admissions <br /> are <span className="text-brand-red underline decoration-brand-blue decoration-8 underline-offset-[12px]">Now Open<span className="text-black">.</span></span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-left mb-20">
                            <div className="p-10 border-l-[6px] border-brand-red/30 bg-white shadow-xl hover:bg-brand-blue/5 transition-colors duration-500 rounded-r-[2rem]">
                                <h4 className="text-black font-phudu text-3xl font-black mb-4 flex items-center gap-4 uppercase tracking-tighter italic">
                                    <span className="text-xl">🎓</span> Academic Excellence
                                </h4>
                                <p className="text-black/70 font-medium leading-relaxed font-sans">
                                    Professional tuition for <span className="text-black font-black">Grades 6th to 10th</span>. Bridge the gap between potential and performance with personalized academic roadmaps.
                                </p>
                            </div>
                            <div className="p-10 border-l-[6px] border-brand-red/30 bg-white shadow-xl hover:bg-brand-blue/5 transition-colors duration-500 rounded-r-[2rem]">
                                <h4 className="text-black font-phudu text-3xl font-black mb-4 flex items-center gap-4 uppercase tracking-tighter italic">
                                    <span className="text-xl">💬</span> The Language Gym
                                </h4>
                                <p className="text-black/70 font-medium leading-relaxed font-sans">
                                    Our specialized immersion for <span className="text-black font-black">younger learners</span>. Strengthening foundational communication through interactive, kinetic learning.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center px-16 py-8 bg-black text-white font-phudu font-black uppercase tracking-[0.3em] text-xs overflow-hidden transition-all duration-500 rounded-full shadow-2xl"
                        >
                            <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">Apply Now</span>
                            <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>

                        <p className="mt-8 text-neutral-400 text-[10px] font-phudu font-black uppercase tracking-[0.4em]">Limited slots available for the current session.</p>
                    </motion.div>
                </div>
            </section>

            {/* Snapshot Tiles Section */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredPrograms.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={program.href}
                                    className="group block relative aspect-[4/6] overflow-hidden border-2 border-black/5 rounded-[3rem] shadow-xl bg-white hover:border-brand-red/20 transition-all duration-700"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-10" />
                                    <div className={`absolute inset-0 ${program.color} opacity-10 mix-blend-overlay group-hover:scale-110 transition-transform duration-1000`} />
                                    <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                                        <span className="text-brand-red text-[10px] font-phudu font-black uppercase tracking-[0.3em] mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">Program</span>
                                        <h3 className="font-phudu text-4xl font-black mb-4 tracking-tighter group-hover:text-brand-red transition-colors uppercase italic leading-none">{program.title}</h3>
                                        <p className="text-black/60 text-xs leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 font-sans font-medium">
                                            {program.description}
                                        </p>
                                        <div className="w-0 h-1 bg-brand-red group-hover:w-full transition-all duration-700 rounded-full" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Trust Us Section */}
            <section className="py-40 bg-gray-50/30 relative overflow-hidden border-t border-black/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="font-phudu text-6xl md:text-[8rem] font-black text-black mb-6 tracking-tighter uppercase italic leading-none">
                            The Tuli's <br /><span className="text-brand-red underline decoration-brand-blue decoration-8 underline-offset-[12px]">Difference<span className="text-black">.</span></span>
                        </h2>
                        <div className="w-32 h-1 bg-brand-red/20 mx-auto mt-20" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        {[
                            { title: "Educator-Led", desc: "Every program is designed and curated personally by experienced educators. A hands-on legacy." },
                            { title: "Holistic Approach", desc: "We focus on the child, the student, and the institution as a complete ecosystem of growth." },
                            { title: "Global Vision", desc: "Bridging local excellence with international standards and opportunities for world-class readiness." },
                        ].map((item, index) => (
                            <div key={index} className="space-y-8 group p-10 bg-white/50 backdrop-blur-md rounded-[3rem] border border-transparent hover:border-brand-red/20 transition-all duration-700 shadow-xl hover:shadow-2xl">
                                <span className="text-brand-red text-6xl font-phudu font-black italic opacity-20 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                                <h3 className="font-phudu text-3xl font-black text-black tracking-tighter uppercase italic">{item.title}</h3>
                                <p className="text-black/70 leading-relaxed font-sans font-medium text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

