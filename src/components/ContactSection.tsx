"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    CheckCircle,
} from "lucide-react";

// Localized Contact Info (Indonesian Context)
const contactInfo = [
    {
        icon: Mail,
        label: "Email Address",
        value: "halo@pharmasis.id",
        href: "mailto:halo@pharmasis.id",
    },
    {
        icon: Phone,
        label: "Phone / WhatsApp",
        value: "+62 812-3299-9290",
        href: "tel:+6281232999290",
    },
    {
        icon: MapPin,
        label: "Office Address",
        value: "Jababeka Health Centre, Jababeka, Cikarang",
        href: "#",
    },
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
];

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="section-padding bg-pattern relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[var(--primary)]/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[var(--accent)]/15 to-transparent blur-3xl" />

            <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[var(--accent)]/20 text-[var(--primary-dark)] font-semibold text-sm mb-4">
                        Get In Touch
                    </span>
                    <h2 className="heading-lg text-gray-900 mb-4">
                        Contact <span className="text-gradient">Us</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions about medication safety or need assistance?
                        We are here to help you make informed decisions.
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="decoration-line" />
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Contact Form - Column 1 (Span 3) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3 h-full"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Send us a Message
                            </h3>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 h-full"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                                        Message Sent!
                                    </h4>
                                    <p className="text-gray-600 text-center">
                                        Thank you for reaching out. We will get back to you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all duration-300"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all duration-300"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all duration-300 resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full btn-primary flex items-center justify-center gap-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </motion.button>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Contact Info - Column 2 (Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 h-full"
                    >
                        {/* CHANGED: Match styling with 'bg-white', 'shadow-xl', 'border-gray-100' */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={info.label}
                                            href={info.href}
                                            whileHover={{ x: 5 }}
                                            className="flex items-start gap-4 group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/30 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors duration-300 flex-shrink-0">
                                                <info.icon className="w-6 h-6 text-[var(--primary-dark)] group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                                                <p className="font-semibold text-gray-900">{info.value}</p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social) => (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-11 h-11 rounded-xl bg-[var(--accent)]/30 flex items-center justify-center hover:bg-[var(--primary)] transition-all duration-300 group"
                                                aria-label={social.label}
                                            >
                                                <social.icon className="w-5 h-5 text-[var(--primary-dark)] group-hover:text-white transition-colors duration-300" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                <div className="gradient-primary rounded-2xl p-6 text-white">
                                    <h4 className="font-bold text-lg mb-2">Need Urgent Help?</h4>
                                    <p className="text-white/90 text-sm mb-3">
                                        For emergencies, call immediately.
                                    </p>
                                    <div className="text-sm font-bold flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        112 / 118 / 119
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
