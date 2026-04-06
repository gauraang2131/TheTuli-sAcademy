import { motion } from "framer-motion";
import ScrollySection from "./ScrollySection";
import ParallaxImage from "./ParallaxImage";
import HandDrawnFlourish from "./HandDrawnFlourish";

const steps = [
    {
        id: "01",
        title: "Inquiry",
        desc: "We begin with questions, not answers. Curiosity is the engine of our curriculum. It is the bridge between what is known and what is yet to be discovered.",
        img: "/academy-hero.png"
    },
    {
        id: "02",
        title: "Dialogue",
        desc: "Learning happens in the space between minds. We foster debate, discussion, and discourse. Every conversation is an opportunity for collective growth.",
        img: "/landing-scroll.jpg"
    },
    {
        id: "03",
        title: "Creation",
        desc: "Knowledge must be applied. Every module culminates in a tangible project or artifact. Building creates the neural pathways of mastery.",
        img: "/expanding-horizons.jpg"
    },
    {
        id: "04",
        title: "Reflection",
        desc: "Growth requires pause. We dedicate time to synthesize, critique, and integrate learning. The 'How' is just as important as the 'What'.",
        img: "/landing-collage.jpg"
    }
];

export default function MethodologySection() {
    return (
        <section className="bg-white py-40 overflow-hidden">
            <div className="px-6 relative mb-32">
                <ScrollySection className="text-center z-10 max-w-5xl mx-auto">
                    <span className="text-brand-red font-phudu text-sm font-bold uppercase tracking-[0.5em] mb-8 block">Methodology</span>
                    <h2 className="font-phudu font-black text-6xl md:text-[10rem] text-black mb-4 uppercase leading-none tracking-tighter">
                        How We <span className="font-hand normal-case text-brand-red tracking-normal relative inline-block">Learn
                            <HandDrawnFlourish className="absolute -bottom-12 left-0 w-full h-12 text-brand-blue" />
                        </span>
                    </h2>
                    <p className="text-2xl font-phudu font-bold text-black/60 mt-20 max-w-3xl mx-auto leading-relaxed">
                        AN ARCHITECTURE OF INTELLECT DESIGNED FOR THE CURIOUS MIND.
                    </p>
                </ScrollySection>
            </div>

            <div className="px-6 max-w-7xl mx-auto space-y-64">
                {steps.map((step, i) => (
                    <ScrollySection key={i} className={`flex flex-col md:flex-row items-center gap-24 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex-1 w-full text-center md:text-left relative">
                            <motion.span
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 0.1, x: 0 }}
                                className="text-[150px] md:text-[200px] leading-none font-phudu font-black text-black absolute -top-32 -left-12 select-none z-0"
                            >
                                {step.id}
                            </motion.span>

                            <div className="relative z-10">
                                <h3 className="text-5xl md:text-8xl font-phudu font-black text-black mb-8 uppercase tracking-tighter">{step.title}</h3>
                                <div className="p-8 md:p-12 bg-white/50 backdrop-blur-sm rounded-3xl border border-white shadow-2xl relative overflow-hidden group hover:bg-brand-blue/10 transition-colors duration-500">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
                                    <p className="text-xl md:text-2xl font-medium text-black/80 leading-relaxed font-sans">
                                        {step.desc.split('. ').map((sentence, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                                transition={{ duration: 0.8, delay: idx * 0.3 }}
                                                className="block mb-4 last:mb-0"
                                            >
                                                {sentence}.
                                            </motion.span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 w-full relative">
                            <motion.div
                                whileHover={{ scale: 0.98, rotate: i % 2 === 0 ? 1 : -1 }}
                                className="w-full aspect-[4/5] relative stamp-shape overflow-hidden bg-gray-50 shadow-[-20px_20px_60px_rgba(0,0,0,0.1)] transition-all duration-700"
                            >
                                <ParallaxImage src={step.img} alt={step.title} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                            </motion.div>

                            {/* Decorative element */}
                            <div className={`absolute -bottom-8 ${i % 2 === 0 ? '-right-8' : '-left-8'} w-32 h-32 bg-brand-red/30 rounded-full blur-3xl -z-10`} />
                        </div>
                    </ScrollySection>
                ))}
            </div>

            <ScrollySection className="mt-48 text-center pb-20">
                <div className="relative inline-block group">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="absolute -inset-10 bg-brand-blue/20 rounded-full blur-3xl group-hover:bg-brand-red/20 transition-all duration-700 -z-10"
                    />
                    <a
                        href="/academy"
                        className="inline-block relative px-16 py-8 bg-black text-white font-phudu font-black text-2xl uppercase tracking-[0.2em] rounded-full hover:bg-brand-red hover:scale-105 transition-all duration-500 shadow-2xl overflow-hidden group"
                    >
                        <span className="relative z-10">Enroll Now</span>
                        <motion.div
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white/10 z-0"
                        />
                    </a>

                    {/* Decorative Doodle below button */}
                    <div className="mt-8 opacity-40">
                        <svg width="200" height="40" viewBox="0 0 200 40" className="mx-auto text-brand-red">
                            <path d="M10,20 Q100,0 190,20" stroke="currentColor" strokeWidth="3" fill="none" />
                            <path d="M30,30 Q100,10 170,30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                        </svg>
                    </div>
                </div>
            </ScrollySection>
        </section>
    );
}
