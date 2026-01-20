import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/data";

export const metadata: Metadata = {
    title: "Our Services | Pharmasis",
    description: "Explore our comprehensive range of pharmaceutical and health information services.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-gray-50 relative overflow-hidden pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--primary)] transition-colors mb-6 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <h1 className="heading-xl text-gray-900 mb-6">Our Services</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive tools and resources to help you make informed decisions about your medications and health.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {servicesData && Object.keys(servicesData).length > 0 ? (
                        Object.entries(servicesData).map(([slug, service]) => (
                        <Link
                            key={slug}
                            href={`/services/${slug}`}
                            className="group block"
                        >
                            <div className="bg-white rounded-3xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl hover:border-[var(--primary)]/20 transition-all duration-300">
                                <div className="mb-6">
                                    <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center`}>
                                        <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--primary)] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-[var(--primary)] font-medium">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500">No services available at the moment.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
