"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
];

export default function Footer() {
    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-5">
                            <Link href="#home" className="inline-flex items-center gap-3 mb-6 group">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative w-14 h-14"
                                >
                                    <Image
                                        src="/pharmasis-logo.png"
                                        alt="Pharmasis Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                                <div>
                                    <span className="text-2xl font-bold text-gradient block">Pharmasis</span>
                                    <span className="text-sm text-gray-500">Know your medicine.</span>
                                </div>
                            </Link>
                            <p className="text-gray-600 leading-relaxed max-w-md mb-8">
                                Accurate, easy-to-understand medicine information—when you need it.
                                Making reliable drug information accessible to everyone.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3">
                                <a href="mailto:halo@pharmasis.id" className="flex items-center gap-3 text-gray-600 hover:text-[var(--primary)] transition-colors group">
                                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                                        <Mail className="w-4 h-4 text-[var(--primary-dark)] group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-sm">halo@pharmasis.id</span>
                                </a>
                                <a href="tel:+6281232999290" className="flex items-center gap-3 text-gray-600 hover:text-[var(--primary)] transition-colors group">
                                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                                        <Phone className="w-4 h-4 text-[var(--primary-dark)] group-hover:text-white transition-colors" />
                                    </div>
                                    <span className="text-sm">+62 812-3299-9290</span>
                                </a>
                                <div className="flex items-center gap-3 text-gray-600">
                                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/20 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-[var(--primary-dark)]" />
                                    </div>
                                    <span className="text-sm">Jababeka Health Centre, Jababeka, Cikarang</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="lg:col-span-3">
                            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                                Quick Links
                            </h4>
                            <ul className="space-y-4">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-600 hover:text-[var(--primary)] transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/30 group-hover:bg-[var(--primary)] transition-colors" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="lg:col-span-4">
                            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                                Stay Updated
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Subscribe to our newsletter for the latest drug safety updates and health tips.
                            </p>
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all text-sm"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="px-6 py-3 rounded-xl gradient-primary text-white font-medium text-sm whitespace-nowrap"
                                >
                                    Subscribe
                                </motion.button>
                            </form>

                            {/* Trust Badge */}
                            <div className="mt-8 p-4 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/20">
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    <span className="font-semibold text-[var(--primary-dark)]">Disclaimer:</span> This platform is for informational purposes only. Always consult with healthcare professionals for medical advice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright - Left */}
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Pharmasis. All rights reserved.
                        </p>

                        {/* Legal Links & Scroll Top - Right */}
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-6">
                                <Link
                                    href="/privacy-policy"
                                    className="text-gray-500 hover:text-[var(--primary)] text-sm transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/terms-of-service"
                                    className="text-gray-500 hover:text-[var(--primary)] text-sm transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </div>

                            {/* Scroll to Top */}
                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                                aria-label="Scroll to top"
                            >
                                <ArrowUp className="w-4 h-4 text-white" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
