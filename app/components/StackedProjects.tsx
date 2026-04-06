"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ScrollySection from "./ScrollySection";

// Project Data
const projects = [
    {
        id: 1,
        title: "Expanding Horizons",
        subtitle: "Swaying The Youth",
        description: "A digital sanctuary where ideas breathe and inspiration takes flight. We didn't just build a platform; we cultivated a movement.",
        image: "/expanding-horizons.jpg",
        link: "https://www.instagram.com/roubletulishikhaduttofficial",
        color: "#fbfbfb", // Tapas Cream
        textColor: "#1a1a1a", // Tapas Charcoal
    },
    {
        id: 2,
        title: "TEDxBasant Nagar",
        subtitle: "Voices That Matter",
        description: "Orchestrating a symphony of ideas. A stage where silence speaks and words ignite revolutions.",
        image: "/tedx-basant-nagar.jpg",
        link: "https://www.instagram.com/tedxbasant_nagar",
        color: "#1a1a1a", // Tapas Charcoal
        textColor: "#fbfbfb", // Tapas Cream
    },
    {
        id: 3,
        title: "Tuli's The Academy",
        subtitle: "Excellence Defined",
        description: "More than an institution, detailed craftsmanship of intellect. Where curiosity meets curriculum.",
        image: "/tulis-academy.png",
        link: "https://www.instagram.com/tulistheacademy",
        color: "#e8e6e1", // Slightly darker cream/beige
        textColor: "#1a1a1a",
    },
    {
        id: 4,
        title: "Tuli's The Kindergarten",
        subtitle: "Foundations of Wonder",
        description: "Planting seeds of brilliance in the fertile soil of play. A universe for the smallest dreamers.",
        image: "/tulis-kindergarten.png",
        link: "https://www.instagram.com/tulisthekindergarten",
        color: "#2c2c2c", // Dark Gray
        textColor: "#fbfbfb",
    }
];

// Individual Project Card Component
function ProjectCard({ project, index, targetScale, range, progress }: {
    project: typeof projects[0],
    index: number,
    targetScale: number,
    range: number[],
    progress: MotionValue<number>
}) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className="relative flex flex-col w-[90vw] md:w-[70vw] h-[60vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl origin-top"
            >
                <div
                    className="flex-1 grid md:grid-cols-2 h-full"
                    style={{ backgroundColor: project.color, color: project.textColor }}
                >
                    {/* Image Section */}
                    <div className="relative w-full h-full min-h-[40vh] md:min-h-full overflow-hidden">
                        <motion.div
                            className="w-full h-full"
                            style={{ scale: useTransform(scrollYProgress, [0, 1], [1.3, 1]) }}
                        >
                            <Image
                                fill
                                src={project.image}
                                alt={project.title}
                                className="object-cover"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Text Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-center h-full relative">
                        <span className="font-phudu font-black uppercase text-[10px] tracking-widest opacity-60 mb-4">{project.subtitle}</span>
                        <h2 className="font-phudu font-black text-4xl md:text-5xl lg:text-7xl mb-6 leading-[0.9] uppercase tracking-tighter italic">
                            {project.title}
                        </h2>
                        <p className="text-lg font-medium opacity-80 leading-relaxed mb-8 max-w-md">
                            {project.description}
                        </p>

                        <Link
                            href={project.link}
                            target="_blank"
                            className="inline-block border-b-2 border-current pb-1 text-xs font-phudu font-black uppercase tracking-widest hover:opacity-50 transition-opacity self-start"
                        >
                            Explore Project
                        </Link>

                        <div className="absolute bottom-8 right-8 text-[12rem] font-phudu font-black opacity-5 select-none pointer-events-none italic">
                            0{project.id}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function StackedProjects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section className="bg-white relative z-10">
            <div className="text-center px-6 pt-24 pb-12 sticky top-0 bg-white text-black z-0">
                <ScrollySection>
                    <h2 className="font-phudu font-black text-6xl md:text-8xl mb-6 uppercase tracking-tighter italic">Selected Works</h2>
                    <p className="text-xl font-medium opacity-60 max-w-2xl mx-auto">
                        A curation of digital craftsmanship and educational endeavors.
                    </p>
                </ScrollySection>
            </div>

            <div ref={container} className="relative pb-24">
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return (
                        <ProjectCard
                            key={i}
                            index={i}
                            project={project}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </section>
    );
}
