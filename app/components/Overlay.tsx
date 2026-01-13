"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Section 1: "My Name. Creative Developer." (0% - 20% visible)
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2: "I build digital experiences." (30% - 50% visible)
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

    // Section 3: "Bridging design and engineering." (60% - 80% visible)
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-10 flex flex-col justify-center items-center">
            {/* Section 1 - Center */}
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute text-center">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-white">
                    Dr. Rouble Tuli
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light">
                    Education Specialist
                </p>
            </motion.div>

            {/* Section 2 - Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute left-[10%] md:left-[20%] text-left max-w-lg"
            >
                <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                    I don't just create scholars. <br />
                    <span className="text-gray-500">I craft elites.</span>
                </h2>
            </motion.div>

            {/* Section 3 - Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute right-[10%] md:right-[20%] text-right max-w-lg"
            >
                <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                    Bridging Moderation <br />
                    <span className="text-gray-500">with extremity.</span>
                </h2>
            </motion.div>
        </div>
    );
}
