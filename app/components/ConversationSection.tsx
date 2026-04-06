"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const conversation = [
    {
        character: "STUDENT:",
        text: "I feel like I'm just memorizing facts at school. Does Tuli's Academy change that?",
        color: "bg-gray-50",
        align: "left",
        delay: 0,
        rotation: -2,
        y: 0,
        x: { desktop: -20, mobile: 0 }
    },
    {
        character: "TULI TEAM:",
        text: "Facts are just tools. We teach you how to build with them. Here, you're not a student; you're an apprentice to your own curiosity.",
        color: "bg-black",
        textColor: "text-white",
        align: "right",
        delay: 0.1,
        rotation: 3,
        y: 120,
        x: { desktop: 20, mobile: 0 }
    },
    {
        character: "STUDENT:",
        text: "Can a teenager truly make a 'global impact'?",
        color: "bg-brand-red",
        align: "left",
        delay: 0.2,
        rotation: 1,
        y: 280,
        x: { desktop: -15, mobile: 0 }
    },
    {
        character: "TULI TEAM:",
        text: "Age is a number; impact is a mindset. From research papers to social ventures, we provide the platform for your voice to reach global ears.",
        color: "bg-gray-50",
        align: "right",
        delay: 0.3,
        rotation: -1,
        y: 440,
        x: { desktop: 15, mobile: 0 }
    },
    {
        character: "PARENT:",
        text: "How do we balance rigorous academic pursuit with the development of true character?",
        color: "bg-black",
        textColor: "text-white",
        align: "left",
        delay: 0.4,
        rotation: 2,
        y: 600,
        x: { desktop: -25, mobile: 0 }
    },
    {
        character: "TULI TEAM:",
        text: "Excellence is not an act, but a habit. We cultivate values of empathy and integrity as the bedrock of intellectual achievement.",
        color: "bg-brand-red",
        align: "right",
        delay: 0.5,
        rotation: -2,
        y: 760,
        x: { desktop: 20, mobile: 0 }
    },
    {
        character: "STUDENT:",
        text: "What if I don't know my 'passion' yet?",
        color: "bg-gray-50",
        align: "left",
        delay: 0.6,
        rotation: 1,
        y: 920,
        x: { desktop: -10, mobile: 0 }
    },
    {
        character: "TULI TEAM:",
        text: "Passion is often built, not found. Through diverse, multi-disciplinary projects, you'll architect a future that resonates with your soul.",
        color: "bg-black",
        textColor: "text-white",
        align: "right",
        delay: 0.7,
        rotation: 2,
        y: 1080,
        x: { desktop: 15, mobile: 0 }
    },
    {
        character: "PARENT:",
        text: "In an AI-driven world, what skill is most vital for my child's legacy?",
        color: "bg-brand-red",
        align: "left",
        delay: 0.8,
        rotation: -1,
        y: 1240,
        x: { desktop: -15, mobile: 0 }
    },
    {
        character: "TULI TEAM:",
        text: "The ability to ask the right questions. We focus on critical inquiry and the moral imagination that no algorithm can replicate.",
        color: "bg-gray-50",
        align: "right",
        delay: 0.9,
        rotation: 3,
        y: 1400,
        x: { desktop: 20, mobile: 0 }
    },
    {
        character: "STUDENT:",
        text: "What's the hardest part about joining?",
        color: "bg-black",
        textColor: "text-white",
        align: "left",
        delay: 1.0,
        rotation: 1,
        y: 1560,
        x: { desktop: -10, mobile: 0 }
    },
    {
        character: "TULI TEAM:",
        text: "Unlearning the fear of risk. In our ecosystem, every challenge is a prototype for brilliance, and every failure is a masterclass.",
        color: "bg-brand-red",
        align: "right",
        delay: 1.1,
        rotation: 2,
        y: 1720,
        x: { desktop: 15, mobile: 0 }
    },
    {
        character: "PARENT:",
        text: "Can the Tuli Team help bridge the gap between traditional success and visionary leadership?",
        color: "bg-gray-50",
        align: "left",
        delay: 1.2,
        rotation: -2,
        y: 1880,
        x: { desktop: -20, mobile: 0 }
    },
    {
        character: "TULI TEAM:",
        text: "We don't bridge gaps; we build new horizons. Our mentorship transforms potential into a legacy that the world will remember.",
        color: "bg-black",
        textColor: "text-white",
        align: "right",
        delay: 1.3,
        rotation: 1,
        y: 2040,
        x: { desktop: 25, mobile: 0 }
    }
];

const PuzzlePiece = ({ children, color, textColor = "text-black", rotation, className }: any) => {
    return (
        <div className={`relative ${className}`} style={{ transform: `rotate(${rotation}deg)` }}>
            <div className={`relative z-10 p-6 md:p-12 ${color} shadow-2xl overflow-hidden`}
                style={{
                    clipPath: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                    borderRadius: "1rem"
                }}>
                <div className={textColor}>
                    {children}
                </div>
                {/* Subtle sheen effect for luxury feel */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            </div>
            {/* Subtle shadow adjustment */}
            <div className="absolute inset-0 bg-black/10 blur-2xl -z-10 translate-y-6 translate-x-6 rounded-[2rem] opacity-40" />
        </div>
    );
};

export default function ConversationSection() {
    return (
        <section className="relative py-32 md:py-48 bg-black overflow-hidden">
            {/* Background elements - Deep Charcoal Luxury */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-brand-red/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vw] bg-brand-gold/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 md:mb-32"
                >
                    <span className="text-brand-red font-phudu font-black uppercase tracking-[0.6em] text-[10px] mb-4 block">Interactive Dialogue</span>
                    <h2 className="font-phudu text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.85]">
                        Chitter Chatter <br />
                        <span className="text-brand-red">with parentsG<span className="text-white">.</span></span>
                    </h2>
                </motion.div>

                <div className="space-y-16 md:space-y-24 relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden md:block" />

                    {conversation.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className={`flex w-full ${item.align === "left" ? "justify-start" : "justify-end"}`}
                        >
                            <div className={`w-full max-w-[320px] md:max-w-lg relative ${item.align === "left" ? "md:mr-auto" : "md:ml-auto"
                                }`}>
                                <PuzzlePiece color={item.color} textColor={item.textColor} rotation={item.rotation}>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-black/10 flex items-center justify-center text-sm md:text-xl shrink-0 backdrop-blur-sm">
                                                {item.character.includes("STUDENT") ? "💡" : item.character.includes("PARENT") ? "👨‍👩‍👧" : "🏛️"}
                                            </div>
                                            <span className="font-phudu font-black text-[10px] md:text-xs tracking-widest opacity-70 uppercase tracking-[0.2em]">{item.character}</span>
                                        </div>
                                        <p className="font-serif text-lg md:text-2xl font-medium leading-tight opacity-95">
                                            "{item.text}"
                                        </p>
                                    </div>
                                </PuzzlePiece>

                                {/* Aesthetic indicator for alignment */}
                                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-white/10 hidden md:block ${item.align === "left" ? "-right-12" : "-left-12"
                                    }`}>
                                    <div className="absolute inset-1 rounded-full bg-brand-red/20" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Formal Ending Signature */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-48 text-center"
                >
                    <div className="inline-block relative">
                        <div className="w-16 h-16 mx-auto mb-8 relative">
                            <div className="absolute inset-0 bg-brand-red/20 rounded-full animate-pulse" />
                            <div className="absolute inset-4 bg-brand-red rounded-full shadow-[0_0_30px_rgba(45,160,89,0.5)]" />
                        </div>
                        <h3 className="font-phudu text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">
                            The dialogue evolves into <span className="text-brand-red">Action</span>.
                        </h3>
                        <p className="font-phudu text-xs uppercase tracking-[0.6em] text-white/40 mb-12">Building Legacies Since 2012</p>

                        <div className="relative pt-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-white/10" />
                            <span className="font-phudu text-sm italic text-white/40 block mb-2">Signed,</span>
                            <span className="font-phudu text-3xl md:text-4xl font-black text-brand-red tracking-[0.2em] uppercase">The Tuli Team</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
