"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "glass shadow-lg py-2"
                : "bg-transparent py-3 sm:py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-2 sm:gap-3 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
                        >
                            <Image
                                src="/pharmasis-logo.png"
                                alt="Pharmasis Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold text-gradient hidden sm:block">Pharmasis</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4 lg:gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-gray-700 font-medium hover:text-[var(--primary)] transition-colors duration-300 group text-sm lg:text-base"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                        <Link href="/get-started">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-xs sm:text-sm px-4 py-2 lg:px-6 lg:py-2.5"
                            >
                                Get Started
                            </motion.button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

                    {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass mt-2 mx-2 sm:mx-4 rounded-2xl overflow-hidden"
                    >
                        <nav className="flex flex-col p-3 sm:p-4 gap-1.5 sm:gap-2">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-gray-700 font-medium hover:bg-[var(--accent)]/20 hover:text-[var(--primary)] transition-all duration-300 text-sm sm:text-base"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <Link href="/get-started" className="w-full">
                                <motion.button
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                    className="btn-primary mt-2 w-full text-center text-sm sm:text-base py-2.5 sm:py-3"
                                >
                                    Get Started
                                </motion.button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
