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
        <main className="min-h-screen bg-gray-50 relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-[var(--primary)] transition-colors mb-4 sm:mb-6 group text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <h1 className="heading-xl text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">Our Services</h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0">
                        Comprehensive tools and resources to help you make informed decisions about your medications and health.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {servicesData && Object.keys(servicesData).length > 0 ? (
                        Object.entries(servicesData).map(([slug, service]) => (
                        <Link
                            key={slug}
                            href={`/services/${slug}`}
                            className="group block"
                        >
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 h-full border border-gray-100 shadow-lg hover:shadow-xl hover:border-[var(--primary)]/20 transition-all duration-300">
                                <div className="mb-4 sm:mb-6">
                                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${service.iconBg} flex items-center justify-center`}>
                                        <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.iconColor}`} />
                                    </div>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[var(--primary)] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-[var(--primary)] font-medium text-sm sm:text-base">
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
