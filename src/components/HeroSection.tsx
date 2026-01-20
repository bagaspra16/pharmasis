"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Play, Users, Shield, BookOpen, Clock, Database } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Counter Component
const CountUp = ({ value, label }: { value: string, label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState(0);

    // If value contains non-numeric characters like "/" (24/7), display directly
    // This fixes the "247" issue
    const isSpecialValue = value.includes("/");

    // Extract number from string (e.g. "50K+" -> 50)
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    // Extract suffix (e.g. "50K+" -> "K+")
    const suffix = value.replace(/[0-9]/g, '');

    useEffect(() => {
        if (isInView && !isSpecialValue) {
            let start = 0;
            const end = numericValue;
            // Handle NaN
            if (isNaN(end)) return;

            const duration = 2000;
            const incrementTime = duration / end;

            // For large numbers, jump steps
            const step = end > 100 ? Math.ceil(end / 100) : 1;

            const timer = setInterval(() => {
                start += step;
                if (start >= end) {
                    setDisplayValue(end);
                    clearInterval(timer);
                } else {
                    setDisplayValue(start);
                }
            }, incrementTime * step);

            return () => clearInterval(timer);
        }
    }, [isInView, numericValue, isSpecialValue]);

    return (
        <div ref={ref} className="text-center group">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient min-w-[60px] sm:min-w-[80px]">
                {isSpecialValue ? value : `${displayValue}${suffix}`}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{label}</p>
        </div>
    );
};

const stats = [
    { icon: Database, value: "5M+", label: "Verified Data" },
    { icon: Shield, value: "10K+", label: "Drug Interactions" },
    { icon: BookOpen, value: "500+", label: "Resources" },
    { icon: Clock, value: "24/7", label: "Available" },
];

export default function HeroSection() {
    const { scrollY } = useScroll();

    // Smooth out the scroll value
    const smoothScrollY = useSpring(scrollY, {
        stiffness: 40,
        damping: 30,
        mass: 1,
        restDelta: 0.001
    });

    const y1 = useTransform(smoothScrollY, [0, 500], [0, -100]); // Visual Column (Mid speed)
    const y2 = useTransform(smoothScrollY, [0, 500], [0, -150]); // Floating Element 1 (Fastest)
    const yText = useTransform(smoothScrollY, [0, 500], [0, -40]); // Text Column (Slower)
    const yStats = useTransform(smoothScrollY, [0, 500], [0, -60]); // Stats Bar (Mid-slow)

    return (
        <AuroraBackground className="pt-16 sm:pt-20">
            <section
                id="home"
                className="relative w-full flex items-center"
            >
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                        {/* Content */}
                        <motion.div
                            style={{ y: yText }} // Applied Parallax to Text
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/60 backdrop-blur-md border border-[var(--primary)]/20 text-[var(--primary-dark)] font-semibold text-xs sm:text-sm mb-4 sm:mb-6 shadow-lg shadow-[var(--primary)]/10"
                            >
                                Your Trusted Medicine Information Platform
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="heading-xl text-gray-900 mb-4 sm:mb-6"
                            >
                                <span className="text-gradient">Know Your</span>
                                <br />
                                Medicine.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0"
                            >
                                Accurate, easy-to-understand medicine information—when you need it.
                                Check drug interactions and access reliable information before taking
                                your medications.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0"
                            >
                                <Link href="/get-started" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="btn-primary flex items-center justify-center gap-2 shadow-xl shadow-[var(--primary)]/30 w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3.5"
                                    >
                                        Check Interactions
                                    </motion.button>
                                </Link>
                                <Link href="/services/drug-interaction-checker" className="w-full sm:w-auto">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full font-semibold bg-white/70 backdrop-blur-md border border-gray-200 text-gray-700 hover:bg-white hover:border-[var(--primary)]/30 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto text-sm sm:text-base"
                                    >
                                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" />
                                        <span className="hidden xs:inline">See How It Works</span>
                                        <span className="xs:hidden">How It Works</span>
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Hero Visual */}
                        <motion.div
                            style={{ y: y1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="relative">
                                {/* Floating Elements - Rendered AFTER main card to be on top if z-index is higher? 
                                    Actually DOM order matters less if Z-index is explicit. 
                                    User requested: "buat agar posisi floating elementnya didepan floating main card"
                                    Current Main Card: z-10
                                    Floating Elements: Need z-20
                                */}

                                {/* Floating Element 1 (Top Right) */}
                                <motion.div
                                    style={{ y: y2 }}
                                    animate={{
                                        y: [0, 15, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 z-20 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl shadow-green-500/20 border border-white/60"
                                >
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100/80 backdrop-blur-sm flex items-center justify-center shadow-inner">
                                            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                        </div>
                                        <div className="hidden sm:block">
                                            <p className="font-bold text-green-600 text-sm">Safe</p>
                                            <p className="text-xs text-gray-500">No Issues Found</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Main Card - Glowing Glass Effect */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 bg-white/40 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-[var(--primary)]/20 border border-white/50 overflow-hidden"
                                >
                                    {/* Glow effect */}
                                    <div className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-20 h-20 sm:w-40 sm:h-40 bg-[var(--primary)]/30 rounded-full blur-3xl" />
                                    <div className="absolute -bottom-5 -left-5 sm:-bottom-10 sm:-left-10 w-16 h-16 sm:w-32 sm:h-32 bg-[var(--accent)]/30 rounded-full blur-2xl" />

                                    <div className="relative flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-[var(--primary)]/40">
                                            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                                                Drug Interaction Check
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-500">Quick & Reliable Results</p>
                                        </div>
                                    </div>

                                    <div className="relative space-y-3 sm:space-y-4">
                                        <div className="h-10 sm:h-12 rounded-lg sm:rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 flex items-center px-3 sm:px-4 shadow-inner">
                                            <span className="text-gray-400 text-xs sm:text-sm">Enter first medication...</span>
                                        </div>
                                        <div className="h-10 sm:h-12 rounded-lg sm:rounded-xl bg-white/70 backdrop-blur-sm border border-gray-100 flex items-center px-3 sm:px-4 shadow-inner">
                                            <span className="text-gray-400 text-xs sm:text-sm">Enter second medication...</span>
                                        </div>
                                        <button className="w-full py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl gradient-primary text-white font-semibold shadow-lg shadow-[var(--primary)]/40 hover:shadow-xl hover:shadow-[var(--primary)]/50 transition-shadow text-sm sm:text-base">
                                            Check Interaction
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Floating Element 2 (Bottom Left) */}
                                <motion.div
                                    animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 z-20 bg-white/80 backdrop-blur-xl rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl shadow-[var(--primary)]/20 border border-white/60"
                                >
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--accent)]/50 backdrop-blur-sm flex items-center justify-center shadow-inner">
                                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary-dark)]" />
                                        </div>
                                        <div className="hidden sm:block">
                                            <p className="font-bold text-gray-900 text-sm">5M+</p>
                                            <p className="text-xs text-gray-500">Trusted Data</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Bar - Glowing Glass Style */}
                    <motion.div
                        style={{ y: yStats }} // Applied Parallax to Stats
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="mt-8 sm:mt-12 lg:mt-24"
                    >
                        <div className="relative">
                            {/* Glow behind stats */}
                            <div className="absolute inset-0 gradient-primary rounded-2xl sm:rounded-3xl blur-xl opacity-30" />

                            <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-1 border border-white/50 shadow-2xl shadow-[var(--primary)]/20">
                                <div className="bg-white/70 backdrop-blur-sm rounded-[18px] sm:rounded-[22px] p-4 sm:p-6 lg:p-8">
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                        {stats.map((stat, index) => (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.8 + index * 0.1 }}
                                                className="flex flex-col items-center justify-center"
                                            >
                                                <div className="mb-2 sm:mb-3">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[var(--accent)]/50 to-[var(--primary)]/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-[var(--primary)]/30 transition-all duration-300">
                                                        <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary-dark)]" />
                                                    </div>
                                                </div>
                                                {/* CountUp Animation Component */}
                                                <CountUp value={stat.value} label={stat.label} />
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </AuroraBackground>
    );
}
