"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string; // For container sizing
    speed?: number; // 0 to 1 (0 is static, 1 is fixed position-ish)
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.2 }: ParallaxImageProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Map scroll progress (0 to 1) to a Y offset
    // If speed is positive, image moves upwards slower than scroll (parallax effect)
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div
                style={{ y }}
                className="relative w-full h-[120%] -top-[10%]" // Extra height for parallax movement
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            </motion.div>
        </div>
    );
}
