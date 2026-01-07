"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-emerald-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
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
                        Muaiad Hadad —
                        <span className="block text-emerald-200">Building reliable, elegant software</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="max-w-2xl text-lg text-neutral-300"
                    >
                        I craft modern web experiences, secure APIs, and pragmatic AI features. Clean delivery, thoughtful UX, and dependable infrastructure from idea to production.
                    </motion.p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-5 py-2.5 text-sm font-semibold text-emerald-100 shadow-lg transition hover:translate-y-[1px] hover:bg-emerald-500/25"
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
                                        ? "border-emerald-400/50 bg-emerald-500/20 text-emerald-100"
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
                    className="flex-1"
                >
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
                        <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-50 shadow-[0_10px_40px_rgba(16,185,129,0.25)]">
                            Atualmente focado em IA aplicada, integrações LLM e serviços escaláveis.
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
