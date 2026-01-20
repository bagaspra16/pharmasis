"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
    AlertTriangle,
    Shield,
    BookOpen,
    Stethoscope,
    Search,
    FileText,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: AlertTriangle,
        title: "Drug Interaction Checker",
        description:
            "Quickly check potential interactions between multiple medications before taking them together.",
        slug: "drug-interaction-checker",
        iconBg: "bg-orange-50",
        iconColor: "text-orange-500",
    },
    {
        icon: Shield,
        title: "Medication Safety Guide",
        description:
            "Access comprehensive safety information including dosage, side effects, and precautions.",
        slug: "medication-safety-guide",
        iconBg: "bg-[var(--accent)]/30",
        iconColor: "text-[var(--primary-dark)]",
    },
    {
        icon: BookOpen,
        title: "Educational Resources",
        description:
            "Learn about medications, their uses, and best practices for safe consumption.",
        slug: "educational-resources",
        iconBg: "bg-purple-50",
        iconColor: "text-purple-500",
    },
    {
        icon: Stethoscope,
        title: "Healthcare Pro Tools",
        description:
            "Specialized tools designed for healthcare professionals to access detailed drug information.",
        slug: "healthcare-pro-tools",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-500",
    },
    {
        icon: Search,
        title: "Medicine Search",
        description:
            "Search our extensive database of medications from around the world with detailed profiles.",
        slug: "medicine-search",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500",
    },
    {
        icon: FileText,
        title: "Drug Information Sheets",
        description:
            "Download printable information sheets for medications with clear instructions.",
        slug: "drug-information-sheets",
        iconBg: "bg-pink-50",
        iconColor: "text-pink-500",
    },
];

export default function ServicesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white">
            {/* Background */}
            <div className="absolute inset-0 bg-pattern opacity-50" />
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[var(--primary)]/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full bg-gradient-to-l from-[var(--accent)]/10 to-transparent blur-3xl" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[var(--primary)]/20 text-[var(--primary-dark)] font-semibold text-sm mb-4 shadow-lg shadow-[var(--primary)]/10">
                        Our Services
                    </span>
                    <h2 className="heading-lg text-gray-900 mb-4">
                        For Your <span className="text-gradient">Health</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Comprehensive tools and resources to help you make informed decisions
                        about your medications and health.
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="decoration-line" />
                    </div>
                </motion.div>

                {/* Services Grid - Clean Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl hover:border-[var(--primary)]/20 transition-all duration-300">
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center`}>
                                        <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Learn More Link */}
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="inline-flex items-center text-[var(--primary)] font-medium hover:text-[var(--primary-dark)] transition-colors group/link"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <Link href="/get-started">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-primary shadow-xl shadow-[var(--primary)]/30"
                        >
                            Explore All Services
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
