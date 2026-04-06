"use client";

import StickyHeader from "../components/StickyHeader";
import ScrollySection from "../components/ScrollySection";
import ParallaxImage from "../components/ParallaxImage";
import MethodologySection from "../components/MethodologySection";

export default function HowWeLearnPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-brand-gold selection:text-white">
            <StickyHeader />
            <MethodologySection />
        </main>
    );
}
