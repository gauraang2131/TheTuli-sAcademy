"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollySection from "./ScrollySection";

const wonders = [
    {
        id: 1,
        title: "Limitless Curiosity",
        description: "Where questions are more valued than answers. We nurture the innate desire to know, to explore, and to understand the world.",
        image: "/expanding-horizons.jpg",
    },
    {
        id: 2,
        title: "Creative Expression",
        description: "Art, drama, and public speaking are not just subjects, but core languages of our academy. Every student finds their voice.",
        image: "/tedx-basant-nagar.jpg",
    },
    {
        id: 3,
        title: "Community Leadership",
        description: "Fostering empathy and the courage to lead. We build a community where every individual is empowered to make a difference.",
        image: "/academy-hero.png",
    },
];

export default function WondersSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <ScrollySection className="absolute left-10 top-20 z-10 max-w-sm">
                    <h2 className="font-phudu font-black text-6xl md:text-8xl mb-6 text-black leading-none uppercase tracking-tighter">
                        Wonders<br />of The<br /><span className="text-brand-red italic">Academy</span>
                    </h2>
                    <p className="text-black font-medium text-lg opacity-60">
                        A journey through the pillars of our educational philosophy.
                    </p>
                </ScrollySection>

                <motion.div style={{ x }} className="flex gap-10 pl-[500px]">
                    {wonders.map((wonder) => (
                        <div key={wonder.id} className="relative h-[60vh] w-[400px] md:w-[600px] flex-shrink-0 rounded-sm overflow-hidden bg-black/5 group">
                            <Image
                                src={wonder.image}
                                alt={wonder.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h3 className="font-serif text-3xl mb-2">{wonder.title}</h3>
                                <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    {wonder.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
