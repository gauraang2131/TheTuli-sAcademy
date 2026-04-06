"use client";

import ScrollyCanvas from "../components/ScrollyCanvas";
import Overlay from "../components/Overlay";
import Projects from "../components/Projects";
import TulisAcademy from "../components/TulisAcademy";
import Publications from "../components/Publications";
import Contact from "../components/Contact";

export default function Portfolio() {
    return (
        <main className="bg-[#121212] min-h-screen">
            <ScrollyCanvas />
            <Overlay />
            <TulisAcademy />
            {/* AcademyExplore removed */}
            <Projects />
            <Publications />
            <Contact />
        </main>
    );
}
