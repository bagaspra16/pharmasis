import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[var(--accent)]/10 blur-[120px]" />

            <div className="relative z-10 text-center px-4">
                <h1 className="text-9xl font-bold text-[var(--primary)]/20 mb-4 select-none">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
                </p>
                <Link href="/">
                    <button className="btn-primary inline-flex items-center gap-2 shadow-xl shadow-[var(--primary)]/20">
                        <Home className="w-5 h-5" />
                        Back to Home
                    </button>
                </Link>
            </div>
        </main>
    );
}
