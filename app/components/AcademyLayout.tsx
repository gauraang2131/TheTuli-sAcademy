"use client";

import Navbar from "./Navbar";
import Link from "next/link";

export default function AcademyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-white text-black selection:bg-brand-gold selection:text-white font-sans">
            <Navbar />
            <div className="pt-20">
                {children}
            </div>
            <footer className="bg-black border-t border-white/5 py-20 px-6 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div className="space-y-6 col-span-1 md:col-span-1">
                        <h3 className="font-serif text-3xl font-bold tracking-tighter">
                            Tuli's <span className="text-brand-gold">Academy</span>
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light">
                            Educators designing futures — from first words to global classrooms. A legacy of excellence.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-brand-gold">Programs</h4>
                        <ul className="space-y-4 text-white/60 text-[10px] font-bold uppercase tracking-[0.15em]">
                            <li><Link href="/early-years" className="hover:text-brand-gold transition-colors">Early Years</Link></li>
                            <li><Link href="/academy" className="hover:text-brand-gold transition-colors">The Academy</Link></li>
                            <li><Link href="/writing-publishing-research" className="hover:text-brand-gold transition-colors">Writing & Research</Link></li>
                            <li><Link href="/student-immersion-trips" className="hover:text-brand-gold transition-colors">Global Trips</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-brand-gold">Partners</h4>
                        <ul className="space-y-4 text-white/60 text-[10px] font-bold uppercase tracking-[0.15em]">
                            <li><Link href="/schools-institutions" className="hover:text-brand-gold transition-colors">Schools & Partners</Link></li>
                            <li><Link href="/workshops-awareness" className="hover:text-brand-gold transition-colors">Workshops</Link></li>
                            <li><Link href="/events-leadership" className="hover:text-brand-gold transition-colors">Events</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-brand-gold">Contact</h4>
                        <ul className="space-y-4 text-white/60 text-[10px] font-bold uppercase tracking-[0.15em]">
                            <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Enquiry Concierge</Link></li>
                            <li><Link href="/book-a-consultation" className="hover:text-brand-gold transition-colors">Private Booking</Link></li>
                            <li><Link href="/media-community" className="hover:text-brand-gold transition-colors">Media & Community</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
                    <p className="text-brand-gold/30 text-[10px] font-bold uppercase tracking-[0.4em]">
                        &copy; {new Date().getFullYear()} Tuli's Academy. Excellence Defined.
                    </p>
                </div>
            </footer>
        </div>
    );
}
