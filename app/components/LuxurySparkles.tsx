"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Sparkle = ({ style }: { style: React.CSSProperties }) => (
    <motion.div
        style={style}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
    />
);

export default function LuxurySparkles() {
    const [sparkles, setSparkles] = useState<{ id: number; style: React.CSSProperties }[]>([]);

    useEffect(() => {
        const count = 150;
        const newSparkles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            style: {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                backgroundColor: Math.random() > 0.5 ? "#D4AF37" : "#FFFFFF", // Gold or White
                boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.4)",
            },
        }));
        setSparkles(newSparkles);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {sparkles.map((sparkle) => (
                <Sparkle key={sparkle.id} style={sparkle.style} />
            ))}
        </div>
    );
}
