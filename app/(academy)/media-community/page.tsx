"use client";

import { motion } from "framer-motion";

const socials = [
    {
        name: "YouTube",
        href: "https://youtube.com/@tulistheacademy9523",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122-2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        color: "group-hover:text-[#FF0000]"
    },
    {
        name: "Spotify",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.306a.75.75 0 0 1-1.03.25c-2.85-1.742-6.44-2.135-10.666-1.17a.75.75 0 0 1-.334-1.46c4.622-1.055 8.583-.6 11.78 1.348a.75.75 0 0 1 .25 1.032zm1.465-3.263a.938.938 0 0 1-1.288.31c-3.263-2.004-8.24-2.585-12.1-1.414a.936.936 0 1 1-.55-1.787c4.41-1.338 9.9-.678 13.628 1.61a.938.938 0 0 1 .31 1.281zm.126-3.414C14.717 8.086 7.55 7.85 3.398 9.11a1.125 1.125 0 1 1-.659-2.155c4.773-1.45 12.724-1.18 17.752 1.803a1.125 1.125 0 0 1-1.164 1.928z" />
            </svg>
        ),
        color: "group-hover:text-[#1DB954]"
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/roubletulishikhaduttofficial/?igsh=MTducTdoNGVmMDQ5Yg%3D%3D#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.083 4.41-3.083h8.318zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
        color: "group-hover:text-[#E4405F]"
    },
    {
        name: "Amazon",
        href: "https://www.amazon.in/MBA-Children-Animal-Tales-Business/dp/B0CQTLKWPL/ref=sr_1_1?crid=12RW2OT03UVQ0&dib=eyJ2IjoiMSJ9.n3FkV24nqSBqqUf8wS8JaPpWN5AzQKrBgjfqsQviNXelNwGKU03P3aJKGUFDPWJ1ss4NBjrw7RJc-9VZbLjvs7xnyUlOl8SgqYaXaKoib1bUEU5e2o-mX_akOjDNxIWTPxKwfCySxVhWvyNKBCuxMpC8f3YgLog-VFt72T0oO5li3OnpB9UQHaruQO2AWL7bdZlAlNN6uGi3qLDSKZi3eP36iGNnhB_qIPn1__kqzOo.HLDqJoOrxMpZjStj1rcKzURyRsXWWnQdoqdi1acYUfk&dib_tag=se&keywords=mba+for+children&qid=1770763837&sprefix=mba+for+%2Caps%2C450&sr=8-1",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path d="M15.012 13.405c-.524-1.213-2.484-1.605-4.512-1.605-2.029 0-3.048.817-3.048 1.765 0 .915.654 1.57 1.995 1.57 1.994 0 3.146-.882 5.565-1.73zm1.145-2.256c.163.556.327 1.635-.294 2.812-.85 1.603-2.616 2.518-4.545 2.518-1.897 0-3.367-.982-3.367-2.715 0-1.602.85-2.78 3.367-2.78 1.44 0 3.205.163 4.839.165zm7.34 7.324c-1.308 1.045-4.088 1.83-7.588 1.83-4.545 0-8.204-1.438-10.793-3.694-1.046.785-1.503.753-2.518-.033-1.045-.817-.654-.915.132-1.732.556-.556 1.112-.66 1.766-.327 1.438 1.046 3.106 1.766 4.904 1.766 1.7 0 3.499-.589 3.499-.589 0 0-3.367-.458-3.367-1.144 0-.131.065-.262.13-.393-.13-.196-.196-.457-.196-.784 0-.916 1.046-1.57 2.224-1.57 1.307 0 2.256.49 2.256 1.34s-.524 1.373-1.635 1.6c1.373.131 2.224.262 2.224.262 0 0 .589 1.144 2.846.523.523-.131 1.7-.588 3.597-2.125.785-.62.883-.523.948-.425.065.099.065.197.032.295-.065.163-.163.295-.36.425a52.54 52.54 0 0 1-5.886 4.94zm2.485-6.115l-1.438 1.635c-.164.2-.393.2-.556.033l-1.341-1.34c-.163-.164-.131-.426.098-.589l4.513-3.074c.23-.163.458-.065.49.23l.556 5.395c.033.3-.196.393-.458.2l-1.864-2.49zm-8.307-2.614z" />
            </svg>
        ),
        color: "group-hover:text-[#FF9900]"
    },
];

export default function MediaCommunity() {
    return (
        <div className="bg-white min-h-screen text-black selection:bg-brand-gold selection:text-white">
            <section className="py-40 bg-white/30 flex items-center justify-center text-center relative overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent" />
                <div className="max-w-4xl px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="font-phudu text-7xl md:text-9xl font-black text-black mb-10 tracking-tighter uppercase italic leading-none"
                    >
                        Connected<span className="text-brand-red">.</span>
                    </motion.h1>
                    <p className="text-brand-red text-xs tracking-[0.6em] uppercase font-black border-t-2 border-b-2 border-brand-red/20 py-8 inline-block">
                        Education is a conversation that never ends
                    </p>
                </div>
            </section>

            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {socials.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`flex flex-col items-center justify-center p-12 md:p-16 border-2 border-transparent group transition-all duration-700 bg-white/50 backdrop-blur-md hover:bg-white hover:border-brand-red/30 rounded-[2rem] shadow-xl ${social.color}`}
                        >
                            <span className="w-16 h-16 group-hover:scale-110 transition-transform duration-500 mb-8 grayscale group-hover:grayscale-0 flex items-center justify-center">
                                {social.icon}
                            </span>
                            <span className="font-phudu font-black uppercase tracking-[0.3em] text-[10px] text-black/40 group-hover:text-brand-red transition-colors">
                                {social.name}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </section>

            <section className="py-40 bg-gray-50/50 border-t border-black/5">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="font-phudu text-5xl md:text-7xl font-black text-black mb-16 tracking-tighter uppercase italic">Premier Content Hub</h2>
                    <div className="aspect-video bg-white/40 backdrop-blur-md flex flex-col items-center justify-center border-2 border-dashed border-black/10 relative group overflow-hidden rounded-[3rem] shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                        {/* YouTube Icon for the Hub */}
                        <div className="text-black/10 group-hover:text-brand-red transition-colors duration-700 mb-8">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </div>

                        <span className="text-black/60 font-phudu font-bold italic text-xl uppercase tracking-tighter">Coming Soon: Education Insights Series</span>
                        <div className="mt-8 w-24 h-1 bg-brand-red/20" />
                    </div>
                </div>
            </section>
        </div>
    );
}
