"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollySection from "../../components/ScrollySection";
import EarlyBirdSection from "../../components/EarlyBirdSection";

const services = [
    { title: "Career Counseling", desc: "Professional psychometric testing and roadmap planning for future careers." },
    { title: "Academic Tuition", desc: "Personalised online and offline support for all core subjects (Grade 6 onwards)." },
    { title: "Language Gym", desc: "Mastering English and communication skills for a global stage." },
    { title: "Test Support", desc: "Expert guidance for IELTS and TOEFL examinations." },
];

export default function AcademyPage() {
    return (
        <div className="bg-white min-h-screen text-black selection:bg-brand-gold selection:text-white">
            <section className="py-40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-gold/5 to-transparent skew-x-12 translate-x-32" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <span className="text-brand-gold font-bold uppercase tracking-[0.6em] text-[10px] mb-8 block">The Academy</span>
                        <h1 className="font-serif text-7xl md:text-9xl font-bold mt-4 mb-10 tracking-tighter leading-[0.9] text-black">
                            Excellence <br />
                            <span className="text-brand-gold">Defined.</span>
                        </h1>
                        <p className="text-xl text-black/60 font-light leading-relaxed mb-12 border-l border-brand-gold/40 pl-10 max-w-xl">
                            From early childhood foundations to advanced academic strategy, we empower students to navigate their future with absolute clarity.
                        </p>
                        <Link href="/possibilities/enroll" className="inline-block px-12 py-5 bg-black text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-gold transition-all shadow-lg hover:shadow-xl">
                            Enroll Now
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Grade 6 Onwards Section */}
            <section className="py-32 max-w-7xl mx-auto px-6 bg-white">
                <div className="mb-20">
                    <h2 className="text-brand-gold font-bold uppercase tracking-[0.4em] text-xs mb-4">Middle & High School</h2>
                    <h3 className="font-serif text-4xl md:text-5xl font-bold text-black tracking-tight">Grade 6 Onwards</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ScrollySection
                            key={index}
                            delay={index * 0.1}
                            className="bg-white p-16 border border-black/5 hover:border-brand-gold/30 transition-all duration-700 group relative overflow-hidden shadow-sm hover:shadow-md"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-brand-gold group-hover:h-full transition-all duration-700" />
                            <h3 className="font-serif text-4xl font-bold text-black mb-6 tracking-tight group-hover:text-brand-gold transition-colors">{service.title}</h3>
                            <p className="text-black/60 text-lg leading-relaxed font-light">{service.desc}</p>
                            <div className="mt-12 text-brand-gold text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">Selective Services</div>
                        </ScrollySection>
                    ))}
                </div>
            </section>

            {/* Early Years Section (Merged) */}
            <section className="py-32 bg-gray-50 border-t border-black/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-center mb-20">
                        <div className="flex-1 space-y-10">
                            <span className="text-brand-gold font-bold uppercase tracking-[0.5em] text-[10px]">
                                Ages 2 – 6
                            </span>
                            <h2 className="font-serif text-5xl md:text-7xl font-bold text-black leading-[0.9] tracking-tighter">
                                The Formative <br />
                                <span className="italic text-brand-gold/80">Years.</span>
                            </h2>
                            <p className="text-xl text-black/60 font-light leading-relaxed max-w-lg border-l border-brand-gold/30 pl-8">
                                We believe that the first steps in education define the entire journey.
                                Our program is a masterpiece of early childhood pedagogy.
                            </p>
                        </div>
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 border border-black/5 shadow-sm">
                                <h3 className="font-serif text-2xl font-bold text-black mb-4">Kindergarten</h3>
                                <p className="text-black/60 font-light text-sm">Curiosity, social development, and foundational literacy.</p>
                            </div>
                            <div className="bg-white p-8 border border-black/5 shadow-sm">
                                <h3 className="font-serif text-2xl font-bold text-black mb-4">Kids’ Club</h3>
                                <p className="text-black/60 font-light text-sm">Creative afternoon sessions including art, music, and physical play.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-40 bg-white border-t border-black/5 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="font-serif text-5xl font-bold text-black mb-10 tracking-tighter">Strategic Excellence Starts Here.</h2>
                    <p className="text-black/60 text-lg font-light mb-16 max-w-xl mx-auto">
                        Whether it's career counseling, academic performance, or early years foundation, we have the personalized roadmap for your child's success.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link href="/possibilities/enroll" className="inline-block px-16 py-6 bg-black text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-brand-gold transition-all shadow-lg hover:shadow-xl">
                            Enroll Now
                        </Link>
                        <Link href="/book-a-consultation" className="inline-block px-16 py-6 bg-transparent border border-black text-black font-black uppercase tracking-[0.4em] text-[10px] hover:bg-black hover:text-white transition-all">
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </section>

            <EarlyBirdSection />
        </div>
    );
}
