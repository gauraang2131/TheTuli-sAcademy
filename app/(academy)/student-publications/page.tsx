"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import AcademyLayout from "../../components/AcademyLayout";

// Mock Data for Student Publications
const books = [
    {
        id: 1,
        title: "The Whispering Willow",
        author: "Aarav Sharma",
        mentoredBy: "Rouble Tuli",
        cover: "/book-cover-1.jpg", // Placeholder - would need real assets
        color: "#5D4037", // Warm wood/leather tone
        description: "A tender exploration of nature and childhood curiosity, written by one of our youngest scholars.",
        link: "https://amazon.in"
    },
    {
        id: 2,
        title: "Chronicles of Tomorrow",
        author: "Meera Patel",
        mentoredBy: "Academy Faculty",
        cover: "/book-cover-2.jpg",
        color: "#3E2723",
        description: "A collection of short stories imagining the future of humanity through the eyes of the youth.",
        link: "https://amazon.in"
    },
    {
        id: 3,
        title: "Echoes of History",
        author: "Rohan Gupta",
        mentoredBy: "Rouble Tuli",
        cover: "/book-cover-3.jpg",
        color: "#4E342E",
        description: "Historical fiction that brings the forgotten tales of medieval India to vibrant life.",
        link: "https://amazon.in"
    },
    {
        id: 4,
        title: "Science for Dreamers",
        author: "Ishaan Kumar",
        mentoredBy: "Science Dept.",
        cover: "/book-cover-4.jpg",
        color: "#37474F",
        description: "Complex scientific concepts broken down into varied, imaginative narratives.",
        link: "https://amazon.in"
    },
    {
        id: 5,
        title: "Verse & Void",
        author: "Ananya Singh",
        mentoredBy: "Literary Arts",
        cover: "/book-cover-5.jpg",
        color: "#263238",
        description: "A profound anthology of poetry questioning existence, space, and time.",
        link: "https://amazon.in"
    }
];

export default function StudentPublications() {
    const [activeIndex, setActiveIndex] = useState(2); // Start in middle
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <AcademyLayout>
            <div className="min-h-screen bg-white text-black font-sans selection:bg-brand-gold selection:text-white overflow-hidden flex flex-col items-center justify-center relative">

                {/* Background Atmosphere - "Creative Library" */}
                {/* Refined Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-white to-white/20" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none" />

                {/* Organic Doodles Background */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none pointer-events-none">
                    <svg width="100%" height="100%" className="text-brand-red">
                        <pattern id="doodles" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="1" fill="currentColor" />
                            <path d="M150 150 Q160 140 170 150" stroke="currentColor" fill="none" />
                            <circle cx="100" cy="100" r="0.5" fill="currentColor" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#doodles)" />
                    </svg>
                </div>


                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10 text-center mb-16 md:mb-24 mt-32 px-4"
                >
                    <p className="text-brand-red font-phudu font-black text-[10px] uppercase tracking-[0.4em] mb-4">The Academy Press</p>
                    <h1 className="text-5xl md:text-8xl font-phudu font-black text-black tracking-tighter uppercase italic leading-none">
                        Student <span className="text-brand-red normal-case font-hand tracking-normal">Publications</span>
                    </h1>
                    <div className="h-[2px] w-24 bg-brand-blue mx-auto mt-8" />
                </motion.div>


                {/* Interactive Bookshelf */}
                <div className="relative z-10 w-full max-w-[1400px] h-[400px] md:h-[500px] flex items-end justify-center perspective-[1000px] px-4 md:px-12 mb-12">
                    {/* Shelf Base */}
                    <div className="absolute bottom-0 left-12 right-12 h-4 bg-gradient-to-r from-black/10 via-black/20 to-black/10 rounded-full shadow-lg opacity-40 blur-sm" />

                    <div className="flex items-end justify-center gap-4 md:gap-12 w-full h-full pb-6 overflow-x-auto md:overflow-visible scrollbar-hide snap-x">
                        {books.map((book, index) => {
                            const isActive = index === activeIndex;
                            const distance = Math.abs(index - activeIndex);
                            // Scale based on distance from center
                            const scale = isActive ? 1.15 : Math.max(0.85 - distance * 0.1, 0.6);
                            const opacity = isActive ? 1 : Math.max(0.6 - distance * 0.2, 0.2);
                            const zIndex = 50 - distance;

                            return (
                                <motion.div
                                    key={book.id}
                                    layout
                                    onClick={() => setActiveIndex(index)}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{
                                        scale,
                                        opacity,
                                        y: isActive ? -20 : 0,
                                        zIndex
                                    }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative cursor-pointer shrink-0 snap-center transition-all duration-500 ease-out`}
                                    style={{
                                        width: isActive ? "240px" : "180px", // Reduced width for mobile
                                        height: isActive ? "360px" : "280px",
                                    }}
                                >
                                    {/* Book Spine/Cover */}
                                    <div
                                        className="w-full h-full rounded-r-2xl shadow-2xl relative overflow-hidden transform-style-3d group stamp-shape"
                                        style={{ backgroundColor: isActive ? book.color : '#e5e5e5' }}
                                    >
                                        {/* Spine Texture */}
                                        <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/10" />
                                        <div className="absolute left-1 top-0 bottom-0 w-[1px] bg-white/20" />

                                        {/* Title (for placeholder since current covers are fake URLs) */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                            <h3 className={`font-phudu font-black text-white ${isActive ? "text-2xl" : "text-sm"} leading-tight mb-2 uppercase tracking-tighter italic`}>
                                                {book.title}
                                            </h3>
                                            <p className={`font-phudu font-black text-white/80 ${isActive ? "text-[10px]" : "text-[6px]"} uppercase tracking-[0.2em]`}>
                                                {book.author}
                                            </p>
                                        </div>

                                        {/* Sheen/Lighting Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 pointer-events-none" />

                                        {/* Gold Foil Effect for active book */}
                                        {isActive && (
                                            <div className="absolute inset-0 ring-4 ring-brand-blue/30 group-hover:ring-brand-blue/50 transition-all duration-500" />
                                        )}
                                    </div>

                                    {/* Reflection */}
                                    <div className="absolute top-[100%] left-0 right-0 h-20 bg-gradient-to-b from-black/5 to-transparent transform scale-y-[-1] opacity-20 blur-sm pointer-events-none" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Info Panel - Updates smoothy */}
                <div className="relative z-10 h-[250px] w-full max-w-2xl mx-auto text-center px-6 mt-12 pb-32">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-brand-red/10 rounded-full border border-brand-red/20">
                                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                                <span className="text-[10px] font-phudu font-black uppercase tracking-widest text-brand-red">Mentored Project</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-phudu font-black text-black mb-2 uppercase tracking-tighter italic">
                                {books[activeIndex].title}
                            </h2>
                            <p className="text-black font-medium text-lg mb-8 opacity-60">
                                by {books[activeIndex].author} <span className="mx-3 text-brand-blue">•</span> Mentored by {books[activeIndex].mentoredBy}
                            </p>

                            <p className="text-black font-medium text-xl max-w-lg leading-relaxed mb-10 opacity-70">
                                {books[activeIndex].description}
                            </p>

                            <a
                                href={books[activeIndex].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-12 py-5 bg-black text-white font-phudu font-black uppercase tracking-[0.2em] text-xs rounded-full hover:bg-brand-red hover:scale-105 transition-all duration-300 shadow-xl group"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Purchase on Amazon
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </a>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </AcademyLayout>
    );
}
