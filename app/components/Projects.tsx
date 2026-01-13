"use client";

import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Expanding Horizons",
        category: "Swaying The Youth",
        description: "Ideas, inspiration, and experiences worth following. 📸 @roubletulishikhaduttofficial",
        image: "/expanding-horizons.jpg"
    },
    {
        id: 2,
        title: "TEDxBasant Nagar",
        category: "Organiser",
        description: "Ideas That Inspire. Voices That Matter.",
        image: "/tedx-basant-nagar.jpg"
    },
    {
        id: 3,
        title: "Tuli's The Academy",
        category: "Owner",
        description: "Celebrating years of fostering curiosity, creativity, and meaningful education.",
        image: "/tulis-academy.png",
        imageFit: "object-contain p-8"
    },
    {
        id: 4,
        title: "Proud Owner",
        category: "Tuli's The Kindergarten",
        description: "Learn, Laugh, Dance",
        image: "/tulis-kindergarten.png",
        imageFit: "object-contain p-8"
    }
];

export default function Projects() {
    return (
        <section className="relative z-20 w-full min-h-screen bg-[#121212] py-24 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 h-64 mb-6 rounded-xl bg-gradient-to-br from-gray-800 to-black overflow-hidden flex items-center justify-center">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full ${project.imageFit || 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                                    />
                                ) : (
                                    <span className="text-gray-600 font-mono text-sm">Project Image</span>
                                )}
                            </div>

                            <div className="relative z-10">
                                <p className="text-sm font-medium text-emerald-400 mb-2 uppercase tracking-wide">
                                    {project.category}
                                </p>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
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
