"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

const skills = [
    "Full-Stack",
    "PHP / Laravel",
    "Python",
    "React",
    "AI / LLMs",
    "Docker",
    "AWS",
];

export default function MainPixelHero() {
    const [active, setActive] = useState("Full-Stack");

    return (
        <main className="relative isolate min-h-[88vh] overflow-hidden bg-transparent text-neutral-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1400px_600px_at_10%_10%,rgba(124,58,237,0.25),transparent_55%),radial-gradient(1200px_620px_at_90%_20%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(1000px_700px_at_40%_80%,rgba(16,185,129,0.16),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/70" />

            <section id="hero" className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center md:gap-16">
                {/* Left block */}
                <div className="flex-1 space-y-6">
                    <motion.div
                        initial={{ y: 18, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120, damping: 14 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-blue-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                    >
                        <Sparkles className="h-4 w-4" />
                        Full Stack • AI • DevOps
                    </motion.div>

                    <motion.h1
                        initial={{ y: 18, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                        className="text-balance text-4xl font-black leading-tight tracking-tight md:text-5xl"
                    >
                        Muaiad Hadad -
                        <span className="block text-blue-300">Building reliable, elegant software</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="max-w-2xl text-lg text-neutral-300"
                    >
                        I craft modern web experiences, secure APIs, and pragmatic AI features. Clean delivery, thoughtful UX, and dependable infrastructure from idea to production.
                    </motion.p>

                    {/* Foto do Muaiad com filtros */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative mx-auto md:hidden w-64 h-64 mb-6"
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-blue-400/30 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                            <Image
                                src="/muaiad.jpg"
                                alt="Muaiad Hadad"
                                fill
                                className="object-cover object-[50%_30%]"
                                style={{
                                    filter: 'contrast(1.1) brightness(0.95) saturate(1.2) hue-rotate(-10deg)',
                                }}
                                priority
                            />
                            {/* Overlay azul sutil */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/15 mix-blend-overlay pointer-events-none" />
                            {/* Borda interna com brilho */}
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/20 px-5 py-2.5 text-sm font-semibold text-blue-100 shadow-lg transition hover:translate-y-[1px] hover:bg-blue-500/25"
                        >
                            Ver projetos
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/8 px-5 py-2.5 text-sm font-semibold text-white/90 shadow-lg transition hover:bg-white/12"
                        >
                            Fale comigo
                        </a>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <button
                                key={skill}
                                type="button"
                                onMouseEnter={() => setActive(skill)}
                                onFocus={() => setActive(skill)}
                                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition backdrop-blur ${
                                    active === skill
                                        ? "border-blue-400/50 bg-blue-500/20 text-blue-100"
                                        : "border-white/10 bg-white/5 text-white/80 hover:border-white/20"
                                }`}
                            >
                                {skill}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 160, damping: 16 }}
                    className="flex-1 space-y-6"
                >
                    {/* Foto do Muaiad - Desktop */}
                    <div className="relative hidden md:block w-full max-w-md mx-auto mb-6">
                        <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-blue-400/40 shadow-[0_0_50px_rgba(59,130,246,0.5),0_20px_60px_rgba(0,0,0,0.6)]">
                            <Image
                                src="/muaiad.jpg"
                                alt="Muaiad Hadad"
                                fill
                                className="object-cover object-[50%_30%] transition-transform duration-500 hover:scale-105"
                                style={{
                                    filter: 'contrast(1.15) brightness(0.92) saturate(1.25) hue-rotate(-12deg)',
                                }}
                                priority
                            />
                            {/* Overlay azul com gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/25 via-transparent to-cyan-500/20 mix-blend-overlay pointer-events-none" />
                            {/* Brilho nos cantos */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 via-transparent to-transparent pointer-events-none" />
                            {/* Borda interna brilhante */}
                            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />
                            {/* Glow effect animado */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl opacity-30 blur-xl animate-pulse pointer-events-none" />
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/8 p-6 shadow-xl backdrop-blur">
                        <div className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Stack atual</div>
                        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/90 sm:grid-cols-3">
                            {[
                                "Next.js",
                                "Node",
                                "Laravel",
                                "Python",
                                "Docker",
                                "PostgreSQL",
                                "AWS",
                                "CI/CD",
                                "OpenAI",
                            ].map((item) => (
                                <span key={item} className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-center shadow-inner">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="mt-6 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm text-blue-50 shadow-[0_10px_40px_rgba(59,130,246,0.35)]">
                            Atualmente focado em IA aplicada, integrações LLM e serviços escaláveis.
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
