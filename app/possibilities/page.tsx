"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import StickyHeader from "../components/StickyHeader";
import ScrollySection from "../components/ScrollySection";
import ParallaxImage from "../components/ParallaxImage";

const routes = [
    { name: "Global Home", href: "/home", description: "Where architectural vision meets academic legacy.", icon: "🏛️", img: "/landing-image.jpg" },
    { name: "Advanced Academy", href: "/academy", description: "The pinnacle of intellectual character and growth.", icon: "🕍", img: "/academy-hero.png" },
    { name: "Literary Arts", href: "/writing-publishing-research", description: "Etching your legacy through the written word.", icon: "✒️", img: "/landing-scroll.jpg" },
    { name: "Institutional Partnerships", href: "/schools-institutions", description: "Collaborative excellence on a global scale.", icon: "🤝", img: "/tedx-basant-nagar.jpg" },
    { name: "Leadership Platforms", href: "/events-leadership", description: "Where voices define the future.", icon: "🏆", img: "/expanding-horizons.jpg" },
    { name: "Curated Knowledge", href: "/books-thought-leadership", description: "Insightful narratives for the next generation.", icon: "📖", img: "/landing-collage.jpg" },
    { name: "Infinite Ecosystem", href: "/media-community", description: "A digital landscape of shared insights.", icon: "🌐", img: "/mba-for-children.jpg" },
    { name: "Strategic Advisory", href: "/book-a-consultation", description: "Personalised roadmaps to excellence.", icon: "⏳", img: "/tulis-academy.png" },
    { name: "Global Immersion Trips", href: "/student-immersion-trips", description: "Exclusive expeditions to top UK boarding schools & Oxford.", icon: "✈️", img: "/expanding-horizons.jpg" },
];

export default function Possibilities() {
    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <main className="relative w-full min-h-screen bg-white text-black font-sans selection:bg-brand-gold selection:text-white">
            <StickyHeader />

            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="block text-xs font-bold uppercase tracking-[0.4em] text-brand-gold mb-6"
                    >
                        The Ecosystem
                    </motion.span>
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl leading-tight mb-8 text-black"
                    >
                        Infinite <br />
                        <span className="text-brand-gold italic">Possibilities</span>
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Explore the Network</span>
                    <div className="w-[1px] h-12 bg-gray-500/30" />
                </motion.div>
            </section>

            {/* Introduction */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollySection>
                        <p className="text-xl md:text-2xl leading-relaxed font-light text-black/80">
                            We have curated a diverse ecosystem of opportunities, designed to nurture every facet of growth.
                            From academic rigour to creative expression, discover the pathways we have built for you.
                        </p>
                    </ScrollySection>
                </div>
            </section>

            {/* Credentials Section */}
            <section className="py-24 bg-gray-50 border-y border-black/5">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollySection className="mb-16 text-center">
                        <h2 className="font-serif text-4xl md:text-5xl text-black mb-6">Our Credentials</h2>
                        <div className="w-24 h-[1px] bg-brand-gold mx-auto" />
                    </ScrollySection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Placeholder Credentials - User can edit these */}
                        {[
                            { title: "Global Recognition", desc: "Awarded for excellence in educational innovation and design thinking." },
                            { title: "Cambridge Aligned", desc: "Fully accredited curriculum meeting international standards of assessment." },
                            { title: "Industry Leaders", desc: "Partnerships with top-tier universities and creative institutions worldwide." }
                        ].map((cred, i) => (
                            <ScrollySection key={i} delay={i * 0.1} className="text-center p-8 bg-white border border-black/5 hover:border-brand-gold/30 transition-colors duration-500">
                                <span className="block text-4xl mb-4 text-brand-gold">✦</span>
                                <h3 className="font-serif text-2xl mb-3 text-black">{cred.title}</h3>
                                <p className="text-sm text-black/60 leading-relaxed">{cred.desc}</p>
                            </ScrollySection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scrollytelling Routes */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto space-y-32">
                    {routes.map((route, index) => (
                        <ScrollySection key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full relative h-[400px] md:h-[500px] overflow-hidden rounded-sm bg-black/5 group">
                                <Link href={route.href} className="block w-full h-full relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    {/* Using ParallaxImage with specific assets or fallbacks */}
                                    <ParallaxImage src={route.img} alt={route.name} className="w-full h-full" />
                                </Link>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <span className="text-4xl mb-4 block">{route.icon}</span>
                                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-black">{route.name}</h2>
                                <p className="text-lg text-black/60 leading-relaxed mb-8 max-w-md">
                                    {route.description}
                                </p>
                                <Link href={route.href} className="inline-block text-sm uppercase tracking-widest border-b border-black pb-1 hover:text-brand-gold hover:border-brand-gold transition-all duration-300">
                                    Discover More
                                </Link>
                            </div>
                        </ScrollySection>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-24 px-6 mt-24">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="font-serif text-4xl mb-8">Ready to define your future?</h2>
                    <Link href="/possibilities/enroll" className="inline-block px-12 py-5 bg-brand-gold text-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                        Enroll Now
                    </Link>
                    <p className="mt-12 text-xs text-white/20 uppercase tracking-widest">
                        © {new Date().getFullYear()} Tuli's Academy
                    </p>
                </div>
            </footer>
        </main>
    );
}
