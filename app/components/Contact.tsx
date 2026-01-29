"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        setErrorMessage("");

        try {
            await addDoc(collection(db, "collaborations"), {
                email: email,
                timestamp: serverTimestamp(),
            });
            setStatus("success");
            setEmail("");
            // Reset success message after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error: any) {
            console.error("Error adding document: ", error);
            setStatus("error");
            setErrorMessage(error.message || "Something went wrong.");
            setTimeout(() => {
                setStatus("idle");
                setErrorMessage("");
            }, 5000);
        }
    };

    return (
        <section className="relative z-30 w-full bg-[#050505] py-24 px-4 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                {/* Heading Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Get in <span className="text-amber-400/80 italic">Touch</span>
                    </h2>
                    <p className="text-neutral-500 max-w-sm font-light">
                        Available for select collaborations and speaking engagements.
                    </p>
                </motion.div>

                {/* Contact Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8"
                >
                    <div className="group">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500/60 mb-3">Email</h3>
                        <a href="mailto:rouble4tuli@gmail.com" className="text-lg text-neutral-300 group-hover:text-white transition-colors font-serif">
                            rouble4tuli@gmail.com
                        </a>
                    </div>

                    <div className="group">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500/60 mb-3">Location</h3>
                        <p className="text-lg text-neutral-300 group-hover:text-white transition-colors font-serif">
                            Amritsar, Punjab
                        </p>
                    </div>

                    <div className="group">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500/60 mb-3">Phone</h3>
                        <p className="text-lg text-neutral-300 group-hover:text-white transition-colors font-serif">
                            +91 99150 38804
                        </p>
                    </div>

                    <div className="group">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500/60 mb-3">Socials</h3>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/roubletulishikhaduttofficial?igsh=MTducTdoNGVmMDQ5Yg==" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm">Instagram</a>
                            <a href="https://www.linkedin.com/in/rouble-tuli/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors text-sm">LinkedIn</a>
                        </div>
                    </div>

                    {/* Collaboration Input */}
                    <div className="col-span-1 md:col-span-2 mt-8 pt-8 border-t border-white/5">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-amber-500/60 mb-4">Collaborations</h3>
                        <p className="text-neutral-400 font-light mb-6 text-sm">
                            Enter your email; our team will reach out to you.
                        </p>
                        <form className="flex flex-col md:flex-row gap-4 max-w-md" onSubmit={handleSubmit}>
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === "loading" || status === "success"}
                                    className="bg-transparent border-b border-white/10 py-2 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/50 transition-colors w-full font-serif disabled:opacity-50"
                                />
                                {status === "success" && (
                                    <span className="absolute -bottom-6 left-0 text-xs text-amber-400">Thank you! We'll be in touch.</span>
                                )}
                                {status === "error" && (
                                    <span className="absolute -bottom-8 left-0 text-xs text-red-500 w-full break-words">
                                        {errorMessage}
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-amber-400 transition-colors text-left md:text-center mt-2 md:mt-0 disabled:opacity-50"
                            >
                                {status === "loading" ? "Sending..." : "Submit →"}
                            </button>
                        </form>
                    </div>

                </motion.div>
            </div>

            {/* Copyright / Footer Note */}
            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-neutral-600">
                <p>&copy; {new Date().getFullYear()} Rouble Tuli. All rights reserved.</p>
                <p>Designed with precision.</p>
            </div>
        </section>
    );
}
