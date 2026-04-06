"use client";

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollySectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollySection({
    children,
    className = "",
    delay = 0,
    direction = "up"
}: ScrollySectionProps) {
    const ref = useRef(null);

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
            scale: direction === "none" ? 0.95 : 1
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Custom ease for "luxury" feel
                delay: delay
            }
        }
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={variants}
            className={`relative ${className}`}
        >
            {children}
        </motion.section>
    );
}
