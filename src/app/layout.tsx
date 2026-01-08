// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Muaiad Hadad | Portfolio",
    description: "Portfolio de Muaiad Hadad — Full Stack Developer.",
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/logo-mh.svg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            <title>Muaiad — Portfolio</title>
        </head>

        <body className="bg-neutral-950 text-neutral-100 antialiased">
        {/* Background layers trimmed for performance */}
        <div className="fixed inset-0 pointer-events-none z-10 bg-grid-a" />
        <div className="fixed inset-0 pointer-events-none z-20 bg-grid-b" />
        <div className="fixed inset-0 pointer-events-none z-60 bg-twinkle" />
        <div className="fixed inset-0 pointer-events-none z-70 bg-scanlines" />
        <div className="fixed inset-0 pointer-events-none z-80 bg-vignette-strong" />

        <div className="relative z-90">{children}</div>
        </body>


        </html>
    );
}
