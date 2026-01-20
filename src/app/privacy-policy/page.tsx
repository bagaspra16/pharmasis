"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, Eye, FileText, Server } from "lucide-react";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function PrivacyPolicyPage() {
    const sections = [
        {
            icon: Shield,
            title: "Information We Collect",
            content: "We collect minimal information necessary to provide our services. This includes usage data to improve drug interaction accuracy and voluntary information you provide when contacting support or subscribing to our newsletter. We do NOT collect personal health records without explicit consent."
        },
        {
            icon: Lock,
            title: "How We Use Your Data",
            content: "Your data is used solely to specificy: correcting drug interaction algorithms, improving website performance, and communicating important safety updates. We strictly assume a non-commercial stance on your personal health data."
        },
        {
            icon: Eye,
            title: "Data Sharing & Disclosure",
            content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential."
        },
        {
            icon: Server,
            title: "Data Security",
            content: "We implement a variety of security measures to maintain the safety of your personal information. All sensitive data is transmitted via Secure Socket Layer (SSL) technology and encrypted in our database to be only accessed by those authorized with special access rights."
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--accent)]/10 blur-[120px]" />
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
                        <Lock className="w-8 h-8" />
                    </div>
                    <h1 className="heading-xl text-gray-900 mb-6">Privacy Policy</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Your privacy is critically important to us. At Pharmasis, we have a few fundamental principles regarding your data.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-gray-100 border border-white/60 hover:border-[var(--primary)]/20 transition-all duration-300"
                        >
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center text-[var(--primary-dark)]">
                                        <section.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[var(--primary-dark)] rounded-3xl p-8 text-white shadow-xl mt-12 text-center"
                    >
                        <h3 className="text-xl font-bold mb-4">Questions about our Privacy Policy?</h3>
                        <p className="text-white/80 mb-6">
                            If you have questions about deleting or correcting your personal data please contact our support team.
                        </p>
                        <Link href="/#contact">
                            <button className="px-6 py-3 bg-white text-[var(--primary-dark)] font-bold rounded-xl hover:bg-gray-100 transition-colors">
                                Contact Support
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
