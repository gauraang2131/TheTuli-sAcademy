import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import Projects from "./components/Projects";

import Publications from "./components/Publications";
import Contact from "./components/Contact";

export default function Home() {
    return (
        <main className="bg-[#121212] min-h-screen">
            <ScrollyCanvas />
            <Overlay />
            <Projects />
            <Publications />
            <Contact />
        </main>
    );
}
