"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const banners = [
    { text: "ADMISSIONS OPEN 2026", color: "bg-brand-red", separator: "🧩", link: "/academy" },
    { text: "RESEARCH PORTFOLIO", color: "bg-brand-red text-white", separator: "🧩", link: "/projects" },
    { text: "INNOVATION HUB", color: "bg-brand-blue", separator: "🧩", link: "/schools-institutions" },
];

const Row = ({ items, speed = 20, direction = 1 }: { items: typeof banners, speed?: number, direction?: 1 | -1 }) => {
    // Duplicate items to ensure smooth loop
    const doubledItems = [...items, ...items, ...items, ...items];

    return (
        <div className="flex overflow-hidden py-4 -mx-4 md:-mx-20">
            <motion.div
                className="flex gap-4"
                initial={{ x: direction === 1 ? 0 : "-50%" }}
                animate={{ x: direction === 1 ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {doubledItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <Link
                            href={item.link}
                            className={`${item.color} text-black px-10 py-4 font-phudu font-bold text-lg md:text-2xl uppercase tracking-tight flex items-center gap-3 shadow-[4px_4px_0px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300 transform`}
                        >
                            {item.text}
                        </Link>
                        <span className="text-4xl text-black/20 select-none">{item.separator}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function RunningBanners() {
    return (
        <div className="relative w-full py-24 overflow-hidden bg-white">
            {/* Background "BULLETIN" text style */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
                <h2 className="text-[25vw] font-phudu font-black uppercase leading-none">News</h2>
            </div>

            <div className="flex flex-col gap-8 rotate-[-2deg] scale-110 md:scale-105">
                <Row items={banners} speed={35} direction={1} />
                <Row items={[...banners].reverse()} speed={45} direction={-1} />
                <Row items={banners} speed={40} direction={1} />
            </div>
        </div>
    );
}
