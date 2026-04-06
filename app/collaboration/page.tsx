"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { submitForm } from "../../lib/firebase-utils";

export default function CollaborationPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "I am a School Leader",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        const result = await submitForm("collaborations", formData);
        if (result.success) {
            setStatus("success");
            setFormData({ name: "", email: "", category: "I am a School Leader", message: "" });
        } else {
            setStatus("error");
        }
    };

    return (
        <div className="bg-[#F8F9FA] min-h-screen text-gray-900 font-sans selection:bg-[#006BFF] selection:text-white">
            <Navbar />
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <span className="inline-block bg-[#E5F0FF] text-[#006BFF] font-semibold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full mb-6">Partnerships</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">Let's Talk <br /> <span className="text-[#006BFF]">Future.</span></h1>
                            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                                Whether you're a school looking to transform or an institution seeking alliance,
                                we're here to start the conversation of a lifetime.
                            </p>
                        </motion.div>

                        <div className="space-y-8 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                            <div>
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Concierge</h4>
                                <p className="text-gray-900 text-xl font-medium">rouble4tuli@gmail.com</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Contact Number</h4>
                                <p className="text-gray-900 text-xl font-medium">+91 99150 38804</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Collaboration Enquiry</h2>

                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="w-20 h-20 bg-[#E5F0FF] text-[#006BFF] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">✓</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Received</h3>
                                <p className="text-gray-600 mb-8">Our concierge will contact you shortly.</p>
                                <button onClick={() => setStatus("idle")} className="text-[#006BFF] font-medium hover:text-[#005BE6] transition-colors bg-[#E5F0FF] px-6 py-2.5 rounded-full">Send another message</button>
                            </motion.div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Your Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base"
                                        />
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
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Category *</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base appearance-none"
                                    >
                                        <option>I am a School Leader</option>
                                        <option>I am an Institution</option>
                                        <option>Brand Partnership</option>
                                        <option>Other Collaboration</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Proposal Details *</label>
                                    <textarea
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base resize-none"
                                    />
                                </div>
                                <div className="pt-4">
                                    <button
                                        disabled={status === "submitting"}
                                        className="w-full py-4 bg-[#006BFF] text-white font-semibold rounded-full hover:bg-[#005BE6] transition-colors shadow-sm text-lg disabled:opacity-50"
                                    >
                                        {status === "submitting" ? "Initiating..." : "Initiate Collaboration"}
                                    </button>
                                    {status === "error" && <p className="text-red-500 text-sm text-center mt-4">Error sending message. Please try again.</p>}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
