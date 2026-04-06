"use client";

import Link from "next/link";
import StickyHeader from "../components/StickyHeader";
import ScrollySection from "../components/ScrollySection";
import RunningBanners from "../components/RunningBanners";
import BulletinSection from "../components/BulletinSection";

export default function BulletinPage() {
    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-brand-gold selection:text-white">
            <StickyHeader />
            <BulletinSection />
        </main>
    );
}
