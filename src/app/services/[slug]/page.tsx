import { Metadata } from "next";
import { servicesData } from "@/lib/data";
import ServiceDetailClient from "./client";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug;
    const service = servicesData[slug];

    if (!service) {
        return {
            title: "Layanan Tidak Ditemukan",
        };
    }

    return {
        title: service.title,
        description: service.description,
        openGraph: {
            title: `${service.title} | Pharmasis`,
            description: service.description,
        }
    };
}

export default function ServiceDetailPage() {
    return <ServiceDetailClient />;
}
