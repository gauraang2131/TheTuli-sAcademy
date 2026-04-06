"use client";

import { motion } from "framer-motion";

export default function LuxuryAesthetic() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)] z-10" />

            {/* Deep Ambient Orbs - Static / Stillness */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-brand-gold/5 rounded-full blur-[180px] z-0 opacity-30"
            />

            <div
                className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-black/10 rounded-full blur-[200px] z-0 opacity-20"
            />

            {/* Subtle Texture Noise handled globally */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/80 z-10" />
        </div>
    );
}
