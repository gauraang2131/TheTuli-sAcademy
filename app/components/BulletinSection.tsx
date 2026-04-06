"use client";

import Link from "next/link";
import ScrollySection from "./ScrollySection";
import RunningBanners from "./RunningBanners";

const newsItems = [
    {
        date: "February 15, 2026",
        category: "Announcement",
        title: "Tuli's Academy Admissions 2026-27",
        excerpt: "Applications are now open for our flagship experiential learning program. Join a community where curiosity takes flight.",
        link: "/academy"
    },
    {
        date: "January 20, 2026",
        category: "Project",
        title: "New Research: The Future of Digital Pedagogy",
        excerpt: "Our latest students' showcase exploring the intersection of AI and childhood development is now live in the portfolio.",
        link: "/projects"
    },
    {
        date: "December 10, 2025",
        category: "Event",
        title: "Winter Innovation Summit Highlights",
        excerpt: "Relive the best moments from our student-led leadership conference held at the main campus.",
        link: "#"
    }
];

export default function BulletinSection() {
    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <ScrollySection className="mb-20 text-center">
                    <span className="text-brand-red font-phudu text-sm font-bold uppercase tracking-[0.4em] mb-6 block">Updates</span>
                    <h1 className="font-phudu font-black text-6xl md:text-9xl text-black mb-12 uppercase tracking-tighter">Events Rush</h1>
                    <div className="w-24 h-[6px] bg-brand-blue mx-auto mb-12" />
                </ScrollySection>

                <ScrollySection className="mb-32 overflow-hidden -mx-6">
                    <RunningBanners />
                </ScrollySection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {newsItems.map((item, i) => (
                        <ScrollySection
                            key={i}
                            delay={i * 0.15}
                            className={`group relative p-10 aspect-square flex flex-col justify-between transition-all duration-500 shadow-2xl hover:scale-105 hover:z-20 ${i % 3 === 0 ? 'bg-gray-50 rotate-[-2deg] mt-8' :
                                i % 3 === 1 ? 'bg-white rotate-[3deg] -mt-12' :
                                    'bg-brand-blue/30 rotate-[-1deg] md:mt-16'
                                }`}
                        >
                            {/* Decorative Tape Element */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-white/30 backdrop-blur-sm rotate-[2deg] z-10 pointer-events-none" />

                            <div className="relative z-0">
                                <div className="font-phudu text-xs mb-4 flex justify-between items-center">
                                    <span className="opacity-60">{item.date}</span>
                                    <span className="px-2 py-1 rounded-sm font-black uppercase text-[9px] tracking-thinnest bg-black text-white">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="font-phudu font-black text-2xl md:text-3xl leading-none uppercase tracking-tighter mb-6 group-hover:underline decoration-4 underline-offset-4 decoration-brand-red">
                                    <Link href={item.link}>{item.title}</Link>
                                </h3>
                                <p className="text-sm md:text-base leading-relaxed opacity-80 font-medium line-clamp-4 text-black/80">
                                    {item.excerpt}
                                </p>
                            </div>

                            <div className="mt-8">
                                <Link
                                    href={item.link}
                                    className="inline-block font-phudu font-black text-xs uppercase tracking-widest border-b-2 pb-1 border-black hover:text-brand-red hover:border-brand-red transition-all"
                                >
                                    Explorer
                                </Link>
                            </div>

                            {/* Decorative Doodle (SVG Flourish) */}
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-20 pointer-events-none">
                                <svg viewBox="0 0 100 100" fill="currentColor">
                                    <path d="M10,50 Q25,25 50,50 T90,50" stroke="currentColor" strokeWidth="5" fill="none" />
                                </svg>
                            </div>
                        </ScrollySection>
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <Link href="/bulletin" className="inline-block font-phudu font-black text-sm uppercase tracking-[0.2em] bg-black text-white px-12 py-6 rounded-full hover:bg-brand-red hover:scale-105 transition-all duration-300 shadow-xl">
                        View All Updates
                    </Link>
                </div>
            </div>
        </section>
    );
}
