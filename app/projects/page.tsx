"use client";

import Link from "next/link";
import StickyHeader from "../components/StickyHeader";
import StackedProjects from "../components/StackedProjects";

export default function ProjectsPage() {
    return (
        <main className="bg-[#0f0f0f]">
            <StickyHeader />

            <StackedProjects />

            {/* Footer / Contact Preview */}
            <section className="h-screen bg-[#fbfbfb] text-[#1a1a1a] relative z-10 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="font-serif text-5xl md:text-6xl mb-8">Ready to start your journey?</h2>
                    <Link
                        href="/book-a-consultation"
                        className="inline-block px-12 py-4 bg-[#1a1a1a] text-[#fbfbfb] text-sm uppercase tracking-widest hover:bg-[#d4af37] transition-colors rounded-sm"
                    >
                        Book a Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
