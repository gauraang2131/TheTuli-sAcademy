"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import LuxuryAesthetic from "./LuxuryAesthetic";

export default function Contact() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [inquiryType, setInquiryType] = useState("Partnership Enquiries");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const inquiryOptions = [
        "Partnership Enquiries",
        "Strategic Consultation",
        "Academy Enrolment",
        "Other Enquiries"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!phoneNumber) {
            setErrorMessage("Please enter your phone number.");
            setStatus("error");
            return;
        }

        setStatus("loading");
        setErrorMessage("");

        try {
            await addDoc(collection(db, "contacts"), {
                phoneNumber,
                inquiryType,
                message: inquiryType === "Other Enquiries" ? message : "N/A",
                submittedAt: serverTimestamp(),
            });
            setStatus("success");
            setPhoneNumber("");
            setMessage("");
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="relative z-30 w-full bg-[#F8F9FA] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16 relative z-10">

                {/* Heading Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <span className="inline-block bg-[#E5F0FF] text-[#006BFF] font-semibold uppercase tracking-wider text-xs px-4 py-1.5 rounded-full mb-6">Get in Touch</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        The <span className="text-[#006BFF]">Gateway</span>
                    </h2>
                    <p className="text-gray-600 max-w-sm text-lg mb-12">
                        Available for select collaborations, enrolments, and strategic engagements.
                    </p>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</h3>
                            <a href="mailto:rouble4tuli@gmail.com" className="text-lg text-gray-900 font-medium hover:text-[#006BFF] transition-colors">
                                rouble4tuli@gmail.com
                            </a>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Location</h3>
                            <p className="text-lg text-gray-900 font-medium">
                                Amritsar, Punjab
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone</h3>
                            <p className="text-lg text-gray-900 font-medium">
                                +91 99150 38804
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Socials</h3>
                            <div className="flex gap-4">
                                <a href="https://www.instagram.com/roubletulishikhaduttofficial?igsh=MTducTdoNGVmMDQ5Yg==" target="_blank" rel="noopener noreferrer" className="text-[#006BFF] hover:text-[#005BE6] transition-colors text-sm font-medium">Instagram</a>
                                <a href="https://www.linkedin.com/in/rouble-tuli/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-[#006BFF] hover:text-[#005BE6] transition-colors text-sm font-medium">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Collaboration Input */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 w-full"
                >
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Begin Dialogue</h3>
                        <p className="text-gray-500 font-light mb-8 text-sm">
                            Select your intent and provide contact details.
                        </p>

                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

                            {/* Inquiry Type Dropdown */}
                            <div className="relative w-full">
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">I am interested in</label>
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full text-left bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base flex justify-between items-center"
                                >
                                    {inquiryType}
                                    <span className={`text-xs transition-transform duration-300 text-gray-500 ${isDropdownOpen ? "rotate-180" : ""}`}>▼</span>
                                </button>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -5 }}
                                            className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg z-50 mt-1 shadow-xl overflow-hidden"
                                        >
                                            {inquiryOptions.map((option) => (
                                                <button
                                                    key={option}
                                                    type="button"
                                                    onClick={() => {
                                                        setInquiryType(option);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className="w-full text-left px-4 py-3 text-gray-700 hover:text-[#006BFF] hover:bg-[#E5F0FF] transition-colors text-base border-b border-gray-100 last:border-0"
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Phone Input */}
                            <div className="relative w-full">
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">Phone Number *</label>
                                <input
                                    type="tel"
                                    placeholder="+91 ..."
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base disabled:opacity-50"
                                />
                            </div>

                            {/* Conditional Message Input */}
                            <AnimatePresence>
                                {inquiryType === "Other Enquiries" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <label className="text-sm font-semibold text-gray-700 mb-2 block mt-2">Message</label>
                                        <textarea
                                            placeholder="To receive a message..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            rows={3}
                                            className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#006BFF] focus:ring-1 focus:ring-[#006BFF] outline-none transition-shadow text-base resize-none"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Submit Button & Status */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === "loading" || status === "success"}
                                    className="w-full py-3.5 bg-[#006BFF] text-white font-semibold rounded-full hover:bg-[#005BE6] transition-colors shadow-sm text-lg disabled:opacity-50"
                                >
                                    {status === "loading" ? "Processing..." : "Submit Enquiry"}
                                </button>

                                {status === "success" && (
                                    <p className="mt-4 text-sm text-[#006BFF] font-medium text-center">Thank you. We will be in touch shortly.</p>
                                )}
                                {status === "error" && (
                                    <p className="mt-4 text-sm text-red-500 text-center">{errorMessage}</p>
                                )}
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Copyright / Footer Note */}
            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-medium">
                <p>&copy; {new Date().getFullYear()} Rouble Tuli. All rights reserved.</p>
                <p>Designed with precision.</p>
            </div>
        </section>
    );
}
