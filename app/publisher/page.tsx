"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { submitForm } from "../../lib/firebase-utils";

export default function PublisherPage() {
    const [formData, setFormData] = useState({
        studentName: "",
        studentAge: "",
        email: "",
        idea: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        const result = await submitForm("manuscripts", formData);
        if (result.success) {
            setStatus("success");
            setFormData({ studentName: "", studentAge: "", email: "", idea: "" });
        } else {
            setStatus("error");
        }
    };

    return (
        <div className="bg-[#F8F9FA] min-h-screen text-gray-900 font-sans selection:bg-[#006BFF] selection:text-white">
            <Navbar />
            <section className="py-32 max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-[#E5F0FF] text-[#006BFF] font-semibold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full mb-6">Student Publications</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Become a Publisher</h1>
                    <p className="text-gray-600 text-lg max-w-xl mx-auto">
                        Your words have the power to shape the future. Submit your manuscript proposal today.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative"
                >
                    {status === "success" ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className="w-20 h-20 bg-[#E5F0FF] text-[#006BFF] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Proposal Submitted</h3>
                            <p className="text-gray-600 mb-8">We will review your idea and get back to you soon.</p>
                            <button onClick={() => setStatus("idle")} className="text-[#006BFF] font-medium hover:text-[#005BE6] transition-colors bg-[#E5F0FF] px-6 py-2.5 rounded-full">Submit another</button>
                        </motion.div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Student Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.studentName}
                                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Student Age *</label>
                                    <input
                                        type="number"
                                        required
                                        value={formData.studentAge}
                                        onChange={(e) => setFormData({ ...formData, studentAge: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Your Idea / Concept *</label>
                                <textarea
                                    rows={5}
                                    required
                                    value={formData.idea}
                                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base resize-none"
                                    placeholder="Describe your book, article, or research idea..."
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    disabled={status === "submitting"}
                                    className="w-full py-4 bg-[#006BFF] text-white font-semibold rounded-full hover:bg-[#005BE6] transition-colors shadow-sm text-lg disabled:opacity-50"
                                >
                                    {status === "submitting" ? "Submitting..." : "Submit Proposal"}
                                </button>
                                {status === "error" && <p className="text-red-500 text-sm text-center mt-4">Error submitting proposal. Please try again.</p>}
                            </div>
                        </form>
                    )}
                </motion.div>
            </section>
        </div>
    );
}
