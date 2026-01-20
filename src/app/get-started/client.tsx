"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Clock, Bell } from "lucide-react";
import { useState } from "react";

export default function GetStartedContent() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail("");
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-[var(--accent)]/5 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[var(--primary)]/20 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[var(--accent)]/15 to-transparent blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[var(--primary)]/5 via-[var(--accent)]/10 to-[var(--primary)]/5 blur-3xl" />

            {/* Header */}
            <header className="relative z-10 p-6">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--primary)] transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative w-24 h-24 mx-auto mb-8"
                    >
                        <Image
                            src="/pharmasis-logo.png"
                            alt="Pharmasis Logo"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[var(--primary)]/20 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--primary-dark)]">Coming Soon</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="heading-xl text-gray-900 mb-6"
                    >
                        Something{" "}
                        <span className="text-gradient">Amazing</span>
                        <br />
                        is Coming
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-gray-600 mb-12 max-w-xl mx-auto"
                    >
                        We&apos;re working hard to bring you the most comprehensive drug interaction
                        checker and medication safety platform. Be the first to know when we launch.
                    </motion.p>

                    {/* Subscribe Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="max-w-md mx-auto"
                    >
                        {isSubscribed ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-green-200 shadow-lg"
                            >
                                <div className="flex items-center justify-center gap-3 text-green-600">
                                    <Bell className="w-6 h-6" />
                                    <span className="font-semibold">You&apos;re on the list!</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">
                                    We&apos;ll notify you as soon as we launch.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="relative">
                                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 border border-gray-100 shadow-xl flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                        className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="btn-primary whitespace-nowrap"
                                    >
                                        Notify Me
                                    </motion.button>
                                </div>
                            </form>
                        )}
                    </motion.div>

                    {/* Timer/Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mt-16 flex flex-wrap justify-center gap-8"
                    >
                        {[
                            { icon: Clock, label: "Expected Launch", value: "Q1 2026" },
                            { icon: Sparkles, label: "Features", value: "10+" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center gap-4 px-6 py-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/30 flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-[var(--primary-dark)]" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-gray-500">{item.label}</p>
                                    <p className="text-xl font-bold text-gray-900">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 py-6 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Pharmasis. Know your medicine.</p>
            </footer>
        </main>
    );
}
