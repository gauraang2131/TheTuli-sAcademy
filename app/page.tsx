"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import StickyHeader from "./components/StickyHeader";
import ScrollySection from "./components/ScrollySection";
import ParallaxImage from "./components/ParallaxImage";

import WondersSection from "./components/WondersSection";
import StackedProjects from "./components/StackedProjects";
import BulletinSection from "./components/BulletinSection";
import MethodologySection from "./components/MethodologySection";
import ConversationSection from "./components/ConversationSection";

function PortfolioScrollyCard() {
    const ref = useRef<HTMLAnchorElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const FRAME_COUNT = 75;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const frameIndex = useTransform(scrollYProgress, [0.2, 0.8], [0, FRAME_COUNT - 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    // Preload images for the card
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new window.Image();
            const indexStr = i.toString().padStart(2, "0");
            img.src = `/sequence/frame_${indexStr}.webp`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    // Render canvas logic
    useEffect(() => {
        const render = (rawIndex: number) => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (!canvas || !ctx || images.length === 0) return;

            const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(rawIndex)));
            const img = images[index];
            if (!img || !img.complete) return;

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            const wRatio = canvas.width / img.width;
            const hRatio = canvas.height / img.height;
            const ratio = Math.max(wRatio, hRatio);

            const centerShiftX = (canvas.width - img.width * ratio) / 2;
            const centerShiftY = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, img.width, img.height, centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);
        };

        const unsubscribe = frameIndex.on("change", render);
        if (isLoaded) render(frameIndex.get());
        return () => unsubscribe();
    }, [frameIndex, isLoaded, images]);

    return (
        <ScrollySection delay={0.1}>
            <Link
                ref={ref}
                href="/portfolio"
                className="group block relative h-[500px] overflow-hidden bg-black rounded-sm"
            >
                <div className="absolute inset-0">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full block"
                        style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s' }}
                    />
                    {!isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
                        </div>
                    )}
                </div>

                {/* Branding Overlay - Premium Scrollytelling Style */}
                <motion.div
                    className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-8 bg-black/60 group-hover:bg-black/40 transition-colors duration-1000"
                    style={{ opacity }}
                >
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="text-brand-gold font-phudu font-black uppercase tracking-[0.8em] text-[8px] mb-6 block">Elite Presence</span>
                        <h3 className="font-phudu text-4xl md:text-6xl lg:text-7xl text-white font-black tracking-tighter mb-4 italic leading-[0.9]">
                            Dr. Rouble Tuli<span className="text-brand-gold">.</span>
                        </h3>
                        <div className="w-12 h-[1px] bg-brand-gold/40 mx-auto mb-6" />
                        <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-white/50 font-light max-w-xs leading-relaxed">
                            Curating the Future of <br /> Bespoke Education
                        </p>
                    </motion.div>
                </motion.div>

                <div className="absolute bottom-0 left-0 p-10 w-full pointer-events-none z-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                    <div className="relative flex justify-between items-end">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-[1px] bg-brand-gold/50" />
                                <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-black">Archive</p>
                            </div>
                            <h4 className="font-phudu text-2xl text-white font-black italic tracking-tighter uppercase whitespace-nowrap">The Scrollytelling<br />Project</h4>
                        </div>
                        <div className="text-brand-gold p-4 rounded-full border border-brand-gold/20 bg-black/20 backdrop-blur-md group-hover:bg-brand-gold group-hover:text-black transition-all duration-500 scale-90 group-hover:scale-100 mb-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="absolute top-6 right-6 z-30"
                    style={{ opacity }}
                >
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                        <span className="text-[8px] uppercase tracking-[0.4em] text-white font-black">Interactive</span>
                    </div>
                </motion.div>
            </Link>
        </ScrollySection>
    );
}

export default function Home() {
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
                    {/* Placeholder for a high-quality hero background or video if available. Using a subtle gradient for now matching Tapas style. */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50" />

                    {/* Optional: Add a subtle texture or pattern here if desired */}
                </motion.div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="font-serif text-6xl md:text-8xl lg:text-9xl leading-tight mb-6"
                    >
                        Rouble Tuli<span className="text-brand-gold">.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="text-lg md:text-xl font-light tracking-wide text-gray-500 max-w-2xl mx-auto"
                    >
                        Education Activist
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gray-500/30" />
                </motion.div>
            </section>

            {/* About / Philosophy Section - Scrollytelling Text */}
            <section id="about" className="py-24 md:py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <ScrollySection className="mb-16">
                        <span className="block text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">The Philosophy</span>
                        <h2 className="font-serif text-4xl md:text-6xl leading-tight text-black">
                            Education is not just about learning. <br />
                            It’s about <span className="italic text-gray-500">becoming</span>.
                        </h2>
                    </ScrollySection>

                    <ScrollySection delay={0.2} className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-50 p-8 rounded-sm">
                            <p className="text-lg leading-relaxed text-black/80 mb-6">
                                We believe in a curriculum that breathes, adapts, and evolves with the learner.
                                In a world of constant change, our approach remains grounded in the timeless pursuit of curiosity.
                            </p>
                            <Link href="/book-a-consultation" className="inline-block border-b border-brand-gold pb-1 text-sm uppercase tracking-widest hover:text-brand-gold transition-colors">
                                Book a Consultation
                            </Link>
                        </div>
                        <div className="relative h-[400px] w-full overflow-hidden rounded-sm bg-black/5">
                            <ParallaxImage src="/expanding-horizons.jpg" alt="Philosophy" className="h-full w-full" />
                        </div>
                    </ScrollySection>
                </div>
            </section>

            {/* Wonders of Academy - Horizontal Scroll */}
            <WondersSection />

            {/* Possibilities / Features Section */}
            <section id="possibilities" className="py-24 bg-black text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

                <div className="max-w-7xl mx-auto px-6">
                    <ScrollySection className="mb-20 text-center">
                        <h2 className="font-serif text-5xl md:text-7xl mb-6">Possibilities</h2>
                        <p className="text-white/60 max-w-xl mx-auto">Discover the ecosystem we have built for the future of learning.</p>
                    </ScrollySection>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Specialized Portfolio Card with Scrollytelling Animation */}
                        <ScrollySection delay={0}>
                            <Link href="/academy" className="group block relative h-[500px] overflow-hidden bg-white/5 rounded-sm">
                                <div className="absolute inset-0">
                                    <Image src="/academy-hero.png" alt="The Academy" fill className="object-cover transition-opacity" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 w-full pointer-events-none">
                                    <h3 className="font-serif text-3xl mb-2">The Academy</h3>
                                    <p className="text-white/60 text-sm tracking-wide">Excellence defined.</p>
                                    <div className="mt-6 w-full h-[1px] bg-white/20 group-hover:bg-brand-gold transition-colors duration-500" />
                                </div>
                            </Link>
                        </ScrollySection>

                        <PortfolioScrollyCard />

                        <ScrollySection delay={0.2}>
                            <Link href="/schools-institutions" className="group block relative h-[500px] overflow-hidden bg-white/5 rounded-sm">
                                <div className="absolute inset-0">
                                    <Image src="/tedx-basant-nagar.jpg" alt="Partners" fill className="object-cover transition-opacity" />
                                </div>
                                <div className="absolute bottom-0 left-0 p-8 w-full pointer-events-none">
                                    <h3 className="font-serif text-3xl mb-2">Partners</h3>
                                    <p className="text-white/60 text-sm tracking-wide">Collaborating with visionaries.</p>
                                    <div className="mt-6 w-full h-[1px] bg-white/20 group-hover:bg-brand-gold transition-colors duration-500" />
                                </div>
                            </Link>
                        </ScrollySection>
                    </div>
                </div>
            </section>

            {/* Stacked Projects Section */}
            <StackedProjects />

            {/* Bulletin Section */}
            <BulletinSection />

            {/* Methodology Section */}
            <MethodologySection />

            {/* Tete-a-tete Section */}
            <ConversationSection />

            {/* Footer / Contact */}
            <footer id="contact" className="bg-black text-white py-24 px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                    <div className="md:w-1/3">
                        <Link href="/" className="font-serif text-4xl font-bold">Rouble.</Link>
                        <p className="mt-4 text-white/40 text-sm max-w-xs leading-relaxed">
                            Redefining education through design and innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:w-2/3">
                        {/* Contact Information */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-6 font-phudu">Contact</h4>
                            <ul className="space-y-4 text-sm text-white/80">
                                <li>
                                    <span className="block text-xs text-white/40 mb-1">Phone</span>
                                    <a href="tel:+919915038804" className="hover:text-brand-gold transition-colors font-serif text-lg">+91 99150 38804</a>
                                </li>
                                <li>
                                    <span className="block text-xs text-white/40 mb-1">Email</span>
                                    <a href="mailto:rouble4tuli@gmail.com" className="hover:text-brand-gold transition-colors font-serif text-lg">rouble4tuli@gmail.com</a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-xs text-white/40 mb-6 font-phudu">Social</h4>
                            <ul className="space-y-4 text-sm text-white/80">
                                <li>
                                    <a href="https://www.instagram.com/roubletulishikhaduttofficial?igsh=MTducTdoNGVmMDQ5Yg%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                                        <span className="uppercase tracking-widest text-xs">Instagram</span>
                                        <span className="text-brand-gold text-lg">↗</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/rouble-tuli/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center gap-2">
                                        <span className="uppercase tracking-widest text-xs">LinkedIn</span>
                                        <span className="text-brand-gold text-lg">↗</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 uppercase tracking-widest gap-4">
                    <p>© {new Date().getFullYear()} Rouble Tuli. All rights reserved.</p>
                    <p>Designed with precision.</p>
                </div>
            </footer>
        </main>
    );
}
