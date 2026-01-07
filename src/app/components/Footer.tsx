"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp, Code2 } from "lucide-react";

/** Ajusta estes URLs conforme preciso */
const GITHUB = "https://github.com/MuaiadHadad";
const LINKEDIN = "https://www.linkedin.com/in/"; // <-- coloca o teu handle
const EMAIL = "mailto:muaiad@muaiadhadad.me";

const LINKS = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const FOOTER_BRAND = { name: "Muaiad Hadad", role: "Full Stack", logo: { src: "/Logo_muaiad1.png", alt: "Muaiad" } };

export default function Footer() {
    const [showTop, setShowTop] = useState(false);
    const ref = useRef<HTMLElement | null>(null);
    const year = new Date().getFullYear();

    // Mostrar/esconder "Back to Top"
    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 240);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToHash = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.startsWith("#")) return;
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        // compensa header sticky (~ 72–80px)
        const headerH = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - (headerH + 12);
        window.scrollTo({ top, behavior: "smooth" });
        history.replaceState(null, "", `#${id}`);
    };

    return (
        <footer
            ref={ref}
            className="relative isolate overflow-hidden bg-transparent text-neutral-100"
        >
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(1000px_520px_at_80%_100%,rgba(124,58,237,0.16),transparent_55%),radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.55))]" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/6 via-transparent to-black/70" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/15 bg-white/5">
                                <Image src={FOOTER_BRAND.logo.src} alt={FOOTER_BRAND.logo.alt} fill className="object-contain p-1" sizes="40px" />
                            </div>
                            <div className="leading-tight">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">{FOOTER_BRAND.role}</div>
                                <div className="text-sm font-bold text-white">{FOOTER_BRAND.name}</div>
                            </div>
                        </div>
                        <p className="max-w-xs text-sm text-neutral-300/90">
                            Pixel-free glass UI, reliable backends, and pragmatic AI features.
                        </p>
                    </div>

                    <nav aria-label="Footer" className="sm:col-span-2">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Navigation</h3>
                        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                            {LINKS.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-neutral-300 hover:text-emerald-300 transition-colors"
                                        onClick={(e) => scrollToHash(e, l.href)}
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href={GITHUB}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-600/15 px-3 py-2 text-xs font-bold text-emerald-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:translate-y-[1px] hover:bg-emerald-600/25"
                            >
                                <Github className="h-4 w-4" />
                                GITHUB
                            </a>

                            <a
                                href={LINKEDIN}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/8 px-3 py-2 text-xs font-bold text-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:translate-y-[1px] hover:bg-white/12"
                            >
                                <Linkedin className="h-4 w-4" />
                                LINKEDIN
                            </a>

                            <a
                                href={EMAIL}
                                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/8 px-3 py-2 text-xs font-bold text-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:translate-y-[1px] hover:bg-white/12"
                            >
                                <Mail className="h-4 w-4" />
                                EMAIL
                            </a>
                        </div>
                    </nav>
                </div>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                <div className="flex flex-col items-start justify-between gap-3 text-xs text-neutral-400 sm:flex-row">
                    <p>© {year} Muaiad Hadad — All rights reserved.</p>
                </div>
            </div>

            <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className={`fixed bottom-24 right-5 z-[130] inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-600/20 text-emerald-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur transition
          ${showTop ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"}`}
            >
                <ArrowUp className="h-5 w-5" />
            </button>
        </footer>
    );
}
