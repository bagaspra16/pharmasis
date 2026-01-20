"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Clear & Accurate",
        description:
            "We provide clear, accurate, and trustworthy information about medicines. Our content is evidence-based and easy to understand.",
    },
    {
        icon: Eye,
        title: "Reliable & Trusted",
        description:
            "We deliver reliable, evidence-based medicine information you can trust. Our goal is to make complex drug details simple and accessible.",
    },
    {
        icon: Heart,
        title: "Patient-Focused",
        description:
            "We believe everyone deserves accurate and easy-to-understand medicine information. Our content is medically reviewed and up to date.",
    },
    {
        icon: Lightbulb,
        title: "Better Outcomes",
        description:
            "We focus on clarity, accuracy, and trust in every medicine detail we share. Better understanding leads to better outcomes.",
    },
];

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-[var(--accent)]/15 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-[var(--primary)]/10 to-transparent blur-3xl" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/60 backdrop-blur-md border border-[var(--primary)]/20 text-[var(--primary-dark)] font-semibold text-xs sm:text-sm mb-3 sm:mb-4 shadow-lg shadow-[var(--primary)]/10">
                        About Us
                    </span>
                    <h2 className="heading-lg text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
                        Your Trusted Partner in
                        <br />
                        <span className="text-gradient">Medication Safety</span>
                    </h2>
                    <div className="flex justify-center mt-3 sm:mt-4">
                        <div className="decoration-line" />
                    </div>
                </motion.div>

                {/* Vision & Mission - Glowing Glass Cards */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl sm:rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                        <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/50 shadow-xl shadow-[var(--primary)]/10 hover:shadow-2xl hover:shadow-[var(--primary)]/20 transition-all duration-500">
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-[var(--primary)]/40">
                                    <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                To become a digital health platform that helps people understand medication
                                safety in a gradual and responsible manner, and to serve as an easy-to-understand
                                source of drug interaction information that continues to be developed.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative group"
                    >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-2xl sm:rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                        <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-white/50 shadow-xl shadow-[var(--primary)]/10 hover:shadow-2xl hover:shadow-[var(--primary)]/20 transition-all duration-500">
                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-[var(--primary)]/40">
                                    <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                To make reliable medicine information accessible to everyone in one place.
                                We provide a centralized platform for reliable, up-to-date medicine information,
                                helping users access accurate drug details quickly and confidently.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h3 className="heading-md text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">Our Core Values</h3>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                        These principles guide everything we do to ensure you receive the best
                        medication information experience.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-full">
                                {/* Subtle glow on hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                                <div className="relative bg-white/80 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full border border-white/50 shadow-lg group-hover:shadow-xl group-hover:shadow-[var(--primary)]/20 transition-all duration-300">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[var(--accent)]/50 to-[var(--primary)]/20 backdrop-blur-sm flex items-center justify-center mb-3 sm:mb-4 group-hover:from-[var(--primary)] group-hover:to-[var(--primary-dark)] transition-all duration-300 shadow-inner">
                                        <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary-dark)] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                                        {value.title}
                                    </h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
