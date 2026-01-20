"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Book, AlertTriangle, Scale, CheckCircle, FileText } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
    const terms = [
        {
            icon: AlertTriangle,
            title: "Medical Disclaimer",
            content: "Pharmasis is an information platform only. The content provided is for educational purposes and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition."
        },
        {
            icon: Book,
            title: "Use of Content",
            content: "All content provided on Pharmasis, including drug interaction data and health articles, is protected by copyright. You may access and use the materials for personal, non-commercial use only. Any redistribution or reproduction of part or all of the contents in any form is prohibited other than for your personal use."
        },
        {
            icon: Scale,
            title: "Limitation of Liability",
            content: "In no event shall Pharmasis, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website. Pharmasis shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website."
        },
        {
            icon: CheckCircle,
            title: "User Conduct",
            content: "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Harassment in any manner or form on the site, including via e-mail or chat, is strictly forbidden."
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--accent)]/10 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--primary)] transition-colors mb-8 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] mb-6">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="heading-xl text-gray-900 mb-6">Terms of Service</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Please read these terms carefully before using our service. By accessing Pharmasis, you agree to be bound by these terms.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {terms.map((term, index) => (
                        <motion.div
                            key={term.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-gray-100 border border-white/60 hover:border-[var(--primary)]/20 transition-all duration-300"
                        >
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center text-[var(--primary-dark)]">
                                        <term.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {term.content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="mt-12 text-center text-sm text-gray-500">
                        <p>
                            Pharmasis reserves the right to change these conditions from time to time as it sees fit and your continued use of the site will signify your acceptance of any adjustment to these terms.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
