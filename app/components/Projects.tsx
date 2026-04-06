"use client";

import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Expanding Horizons",
        category: "Swaying The Youth",
        description: "Ideas, inspiration, and experiences worth following. 📸 @roubletulishikhaduttofficial",
        image: "/expanding-horizons.jpg",
        link: "https://www.instagram.com/roubletulishikhaduttofficial?igsh=MTducTdoNGVmMDQ5Yg=="
    },
    {
        id: 2,
        title: "TEDxBasant Nagar",
        category: "Organiser",
        description: "Ideas That Inspire. Voices That Matter.",
        image: "/tedx-basant-nagar.jpg",
        link: "https://www.instagram.com/tedxbasant_nagar?igsh=MTNoZW9zOTIxbHg4dg=="
    },
    {
        id: 3,
        title: "Tuli's The Academy",
        category: "Owner",
        description: "Celebrating years of fostering curiosity, creativity, and meaningful education.",
        image: "/tulis-academy.png",
        imageFit: "object-contain p-8",
        link: "https://www.instagram.com/tulistheacademy?igsh=ejB4enM3eDIwcmJv"
    },
    {
        id: 4,
        title: "Proud Owner",
        category: "Tuli's The Kindergarten",
        description: "Learn, Laugh, Dance",
        image: "/tulis-kindergarten.png",
        imageFit: "object-contain p-8",
        link: "https://www.instagram.com/tulisthekindergarten?igsh=MXF2YTZyanZiOTNxaw=="
    }
];

import LuxuryAesthetic from "./LuxuryAesthetic";

export default function Projects() {
    return (
        <section className="relative z-20 w-full min-h-screen bg-[#0a0a0a] py-32 px-4 md:px-12 border-t border-white/5">
            <LuxuryAesthetic />
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="text-brand-gold/60 text-[10px] uppercase tracking-[0.4em] mb-4 block">Portfolio</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-white tracking-tight">
                        Selected <span className="text-brand-gold/80 italic">Works</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative p-8 rounded-sm border border-white/5 bg-[#080808] hover:bg-[#0f0f0f] transition-all duration-700 overflow-hidden cursor-pointer"
                        >
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-20"
                            />

                            {/* Subtle Gold Hover Border */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-gold/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                            <div className="relative z-10 h-72 mb-8 rounded-sm bg-[#050505] overflow-hidden flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full ${project.imageFit || 'object-cover'} transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100`}
                                    />
                                ) : (
                                    <span className="text-gray-600 font-mono text-sm">Project Image</span>
                                )}
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            </div>

                            <div className="relative z-10 flex flex-col items-start">
                                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gold/70 mb-3 bg-brand-gold/5 px-2 py-1 rounded-sm">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-brand-gold transition-colors duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500/50 leading-relaxed font-light text-sm max-w-sm">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
