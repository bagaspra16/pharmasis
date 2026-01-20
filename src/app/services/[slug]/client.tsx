"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { useParams } from "next/navigation";
import { servicesData } from "@/lib/data";

export default function ServiceDetailClient() {
    const params = useParams();
    const slug = params.slug as string;
    const service = servicesData[slug];

    if (!service) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                    <Link href="/#services" className="text-[var(--primary)] hover:underline">
                        Return to Services
                    </Link>
                </div>
            </main>
        );
    }

    const Icon = service.icon;

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link
                        href="/#services"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-[var(--primary)] transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Services</span>
                    </Link>
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-10 h-10">
                            <Image src="/pharmasis-logo.png" alt="Pharmasis" fill className="object-contain" />
                        </div>
                        <span className="font-bold text-gradient hidden sm:block">Pharmasis</span>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 to-transparent" />
                <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[var(--primary)]/10 to-transparent blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}>
                            <Icon className={`w-8 h-8 ${service.iconColor}`} />
                        </div>
                        <h1 className="heading-xl text-gray-900 mb-4">{service.title}</h1>
                        <p className="text-xl text-gray-600 mb-8">{service.tagline}</p>
                        <Link href="/get-started">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary"
                            >
                                Try It Now
                                <ArrowRight className="w-5 h-5 ml-2 inline" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Description */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h2 className="heading-md text-gray-900 mb-6">About This Service</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading-md text-gray-900 mb-12 text-center">Key Features</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[var(--accent)]/30 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-[var(--primary-dark)]" />
                                        </div>
                                        <p className="text-gray-700 font-medium">{feature}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading-md text-gray-900 mb-12 text-center">How It Works</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {service.howItWorks.map((step) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: step.step * 0.15 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 rounded-full gradient-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--primary)]/30">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 bg-gradient-to-b from-[var(--accent)]/10 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="heading-md text-gray-900 mb-12">Benefits</h2>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {service.benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-white shadow-lg"
                                >
                                    <CheckCircle className="w-6 h-6 text-[var(--primary)] mb-3" />
                                    <p className="text-gray-700 font-medium">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading-md text-gray-900 mb-6">Ready to Get Started?</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                            Join thousands of users who trust Pharmasis for their medication information needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/get-started">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-primary"
                                >
                                    Get Started Free
                                </motion.button>
                            </Link>
                            <Link href="/#contact">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3.5 rounded-full font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Pharmasis. Know your medicine.</p>
                </div>
            </footer>
        </main>
    );
}
