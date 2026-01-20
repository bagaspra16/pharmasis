import { Metadata } from "next";
import GetStartedContent from "./client";

export const metadata: Metadata = {
    title: "Coming Soon - Segera Hadir",
    description: "Fitur lengkap Pharmasis akan segera hadir. Berlangganan untuk mendapatkan notifikasi peluncuran.",
};

export default function GetStartedPage() {
    return <GetStartedContent />;
}
