"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";

const PHARMASIS_APP_URL = "https://pharmasis.biz.id/";

export default function GetStartedContent() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-[var(--accent)]/5 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[var(--primary)]/20 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[var(--accent)]/15 to-transparent blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[var(--primary)]/5 via-[var(--accent)]/10 to-[var(--primary)]/5 blur-3xl" />

            {/* Header */}
            <header className="relative z-10 p-4 sm:p-6">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-[var(--primary)] transition-colors group text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </div>
            </header>

            {/* Main Content - Centered app link */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-100px)] px-4 py-8 sm:py-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto w-full"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8"
                    >
                        <Image
                            src="/pharmasis-logo.png"
                            alt="Pharmasis Logo"
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6"
                    >
                        Try the Pharmasis app
                    </motion.p>

                    {/* Centered URL display & CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl mb-6 sm:mb-8"
                    >
                        <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                            App URL
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-mono font-semibold text-gray-900 mb-4 sm:mb-6 break-all px-2">
                            {PHARMASIS_APP_URL}
                        </p>
                        <a
                            href={PHARMASIS_APP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5"
                        >
                            <span>Open Pharmasis App</span>
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto"
                    >
                        You will be redirected to the Pharmasis application in a new tab.
                    </motion.p>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 py-4 sm:py-6 text-center text-gray-500 text-xs sm:text-sm">
                <p>© {new Date().getFullYear()} Pharmasis. Know your medicine.</p>
            </footer>
        </main>
    );
}
