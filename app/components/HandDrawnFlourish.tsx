"use client";

import { motion } from "framer-motion";

export default function HandDrawnFlourish({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 200 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} pointer-events-none`}
            preserveAspectRatio="none"
        >
            <motion.path
                d="M2 15C20 10 50 12 80 14C110 16 160 18 198 5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.path
                d="M10 18C40 15 80 16 120 17C160 18 185 14 195 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.7 }}
            />
        </svg>
    );
}
