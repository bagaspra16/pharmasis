import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Pharmasis | Know Your Medicine",
    template: "%s | Pharmasis"
  },
  description:
    "Accurate, easy-to-understand medicine information—when you need it. Check drug interactions and access reliable medication safety information.",
  keywords: [
    "medicine information",
    "drug interactions",
    "medication safety",
    "pharmaceutical",
    "health platform",
    "pharmasis",
    "apotek digital"
  ],
  authors: [{ name: "Pharmasis Team" }],
  creator: "Pharmasis",
  publisher: "Pharmasis Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/pharmasis-logo.png",
    apple: "/pharmasis-logo.png",
  },
  openGraph: {
    title: "Pharmasis | Know Your Medicine",
    description:
      "Accurate, easy-to-understand medicine information—when you need it. Check drug interactions and access reliable medication safety information.",
    url: "https://pharmasis.id",
    siteName: "Pharmasis",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pharmasis - Know Your Medicine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmasis | Know Your Medicine",
    description: "Check drug interactions and access reliable medication safety information.",
    creator: "@pharmasis_id",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
