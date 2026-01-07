"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Github, ExternalLink, Filter } from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

/* ===== Featured (do CV) ===== */
type Project = {
    title: string;
    blurb: string;
    tech?: string[];
    href?: string;
    repo?: string;
    period?: string;
    category?: string; // Nova propriedade para filtros
};

const FEATURED: Project[] = [
    {
        title: "PharmaRobot — Urgent Medication Delivery",
        period: "Mar 2025 — Present",
        blurb: "Autonomous robot software: route planning, realtime monitor, hospital systems integration.",
        tech: ["Python", "ROS", "LLMs", "Docker"],
        category: "AI",
    },
    {
        title: "GlobAI — Website + Chatbot",
        period: "Feb 2025",
        blurb: "Full-stack site with LLM chatbot for real-time support; avatar-chatbot pipeline in prod.",
        tech: ["Next.js", "Node", "LLMs", "OpenAI"],
        href: "https://globai.ch",
        category: "AI",
    },
    {
        title: "3D Conversational Avatar",
        period: "Apr 2025 — Present",
        blurb: "UE5 avatar with voice dialog combining local LLM and OpenAI API.",
        tech: ["UE5", "TTS/STT", "LLMs"],
        category: "AI",
    },
    {
        title: "Academic Housing Management Platform",
        period: "Mar 2024 — May 2024",
        blurb: "Students search, booking and messaging with owners; simple admin flows.",
        tech: ["HTML", "JS", "PHP", "MySQL"],
        category: "Web",
    },
];

/* ===== "More on GitHub" (lista enviada) ===== */
type RepoLite = {
    name: string;
    blurb: string;
    tech?: string[];
    private?: boolean;
    license?: string;
    category?: string; // Nova propriedade
};

const GH_USER = "MuaiadHadad";
const GH = (repo: string) => `https://github.com/${GH_USER}/${repo}`;

const MORE: RepoLite[] = [
    { name: "MyWebsite", blurb: "Personal site / portfolio (this project).", tech: ["TypeScript", "Next.js"], license: "MIT", category: "Web" },
    { name: "Wis4TechnicalChallenge", blurb: "Technical Challenge.", tech: ["PHP"], category: "Backend" },
    { name: "semple_api_Weather", blurb: "Practical challenge — IPMA Weather API.", tech: ["HTML"], category: "Web" },
    { name: "frontend_weather_api_ipma_V2", blurb: "Weather API IPMA — full frontend.", tech: ["TypeScript"], category: "Web" },
    { name: "weather_api_ipma", blurb: "Weather API (IPMA) backend utilities.", tech: ["Python"], category: "Backend" },
    { name: "Project_Accommodation_Manager", blurb: "Accommodation manager (Blade).", tech: ["Blade", "Laravel", "PHP"], category: "Web" },
    { name: "Avarynx-React", blurb: "Avarynx — React version.", tech: ["React", "CSS"], category: "Web" },
    { name: "Avatar-Avarynx", blurb: "Avarynx avatar UI.", tech: ["CSS"], license: "MIT", private: true, category: "Web" },
    { name: "Avarynx-Frontend", blurb: "Avarynx web frontend.", tech: ["JavaScript"], category: "Web" },
    { name: "BioVision", blurb: "DeepVision site.", tech: ["CSS"], category: "Web" },
    { name: "Sistema-de-Vigil-ncia", blurb: "Surveillance system experiments.", tech: ["Python"], category: "AI" },
    { name: "My-Profile", blurb: "Profile page styling.", tech: ["CSS"], private: true, category: "Web" },
    { name: "MineDefender", blurb: "'Defender' with a security angle.", tech: ["Python"], category: "Backend" },
    { name: "NewSwissAI", blurb: "Vue-powered site prototype.", tech: ["Vue"], category: "Web" },
    { name: "Job-Listing-API", blurb: "Backend + frontend demo.", tech: ["CSS", "API"], category: "Web" },
];

// Categorias disponíveis para filtros
const CATEGORIES = ["All", "AI", "Web", "Backend"] as const;

export default function ProjectsPixelGrid() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    // Filtrar projetos
    const filteredFeatured = useMemo(() => {
        return FEATURED.filter(project => {
            const categoryMatch = selectedCategory === "All" || project.category === selectedCategory;
            const techMatch = !selectedTech || project.tech?.includes(selectedTech);
            return categoryMatch && techMatch;
        });
    }, [selectedCategory, selectedTech]);

    const filteredMore = useMemo(() => {
        return MORE.filter(repo => {
            const categoryMatch = selectedCategory === "All" || repo.category === selectedCategory;
            const techMatch = !selectedTech || repo.tech?.includes(selectedTech);
            return categoryMatch && techMatch;
        });
    }, [selectedCategory, selectedTech]);

    // Extrair todas as tecnologias únicas
    const allTechs = useMemo(() => {
        const techs = new Set<string>();
        [...FEATURED, ...MORE].forEach(item => {
            item.tech?.forEach(t => techs.add(t));
        });
        return Array.from(techs).sort();
    }, []);

    const totalFiltered = filteredFeatured.length + filteredMore.length;
    const totalProjects = FEATURED.length + MORE.length;

    return (
        <section id="projects" className="section-projects relative isolate overflow-hidden bg-transparent text-neutral-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_0%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(1000px_520px_at_85%_10%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.55))]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24">
                {/* Título */}
                <header className="mb-10 flex items-center justify-between gap-4">
                    {/* heading */}
                    <motion.h2
                        initial={{ y: 16, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ type: "spring", stiffness: 120, damping: 14 }}
                        className="text-balance text-4xl font-black tracking-tight md:text-5xl">
                        Projects
                    </motion.h2>
                    <Link
                        href={`https://github.com/${GH_USER}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-3 py-2 text-xs font-bold text-emerald-200 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:translate-y-[1px] hover:bg-emerald-500/25"
                    >
                        <Github className="h-4 w-4" />
                        VIEW GITHUB
                    </Link>
                </header>

                {/* Filtros */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 space-y-4"
                >
                    {/* Header dos filtros com contador */}
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Filter className="h-5 w-5 text-blue-400" />
                            <span className="text-sm font-semibold text-neutral-300">
                                Filters
                            </span>
                            <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-bold text-blue-300">
                                {totalFiltered} / {totalProjects}
                            </span>
                        </div>

                        {/* Botão de reset */}
                        {(selectedCategory !== "All" || selectedTech) && (
                            <button
                                onClick={() => {
                                    setSelectedCategory("All");
                                    setSelectedTech(null);
                                }}
                                className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors underline"
                            >
                                Clear filters
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        {/* Filtros de categoria */}
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((category) => (
                                <motion.button
                                    key={category}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all shadow-lg
                                    ${selectedCategory === category 
                                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
                                        : "bg-white/10 text-neutral-200 hover:bg-white/20 border border-white/10"}
                                    `}
                                >
                                    {category}
                                    {category !== "All" && (
                                        <span className="ml-1.5 text-xs opacity-70">
                                            ({selectedCategory === category
                                                ? totalFiltered
                                                : [...FEATURED, ...MORE].filter(p => p.category === category).length})
                                        </span>
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Filtro de tecnologia */}
                        <div className="relative flex-1 min-w-[200px]">
                            <select
                                value={selectedTech ?? ""}
                                onChange={(e) => setSelectedTech(e.target.value || null)}
                                className="block w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur px-4 py-2 pr-8 text-sm text-neutral-200 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all cursor-pointer hover:bg-white/15"
                            >
                                <option value="" className="bg-gray-900">🔧 All Technologies</option>
                                {allTechs.map((tech) => (
                                    <option key={tech} value={tech} className="bg-gray-900">
                                        {tech}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Featured */}
                {filteredFeatured.length > 0 && (
                    <>
                        <h3 className="mb-4 text-xs font-semibold tracking-widest text-neutral-300/80">
                            FEATURED ({filteredFeatured.length})
                        </h3>
                        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <AnimatePresence mode="popLayout">
                                {filteredFeatured.map((p) => (
                                    <motion.li
                                        key={p.title}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/8 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur hover:border-blue-400/30 transition-all">
                                            <span aria-hidden className="pointer-events-none absolute -top-1/2 left-0 z-0 h-[220%] w-1/3 rotate-12 bg-gradient-to-b from-white/12 via-white/5 to-transparent opacity-0 transition-opacity duration-500" />
                                            <div className="relative z-10">
                                                <div className="flex items-baseline justify-between gap-3">
                                                    <h4 className="text-[13px] font-extrabold leading-tight text-emerald-200 uppercase tracking-widest">
                                                        {p.title}
                                                    </h4>
                                                    <span className="rounded-[6px] border border-emerald-300/30 px-2 py-1 text-[10px] text-emerald-200/90">
                                                        {p.period ?? "—"}
                                                    </span>
                                                </div>
                                                {p.category && (
                                                    <span className="mt-2 inline-block rounded-full bg-blue-500/20 px-2 py-0.5 text-[9px] font-bold text-blue-300 border border-blue-400/30">
                                                        {p.category}
                                                    </span>
                                                )}
                                                <p className="mt-3 text-sm text-neutral-200/90">{p.blurb}</p>
                                                {p.tech && (
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {p.tech.map((t) => (
                                                            <span
                                                                key={t}
                                                                className={`rounded-[6px] border px-2 py-1 text-[10px] tracking-wide cursor-pointer transition-all
                                                                ${selectedTech === t 
                                                                    ? "border-blue-400 bg-blue-500/30 text-blue-200" 
                                                                    : "border-white/10 bg-white/5 text-neutral-200 hover:border-white/30"}`}
                                                                onClick={() => setSelectedTech(selectedTech === t ? null : t)}
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                                {(p.href || p.repo) && (
                                                    <div className="mt-5 flex items-center gap-3 text-xs font-semibold">
                                                        {p.href && (
                                                            <a href={p.href} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-emerald-300 hover:underline">
                                                                LIVE <ExternalLink className="h-3.5 w-3.5" />
                                                            </a>
                                                        )}
                                                        {p.repo && (
                                                            <a href={p.repo} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-white hover:underline">
                                                                REPO <Github className="h-3.5 w-3.5" />
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </article>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                    </>
                )}

                {/* More on GitHub */}
                {filteredMore.length > 0 && (
                    <>
                        <h3 className="mt-12 mb-4 text-xs font-semibold tracking-widest text-neutral-300/80">
                            MORE ON GITHUB ({filteredMore.length})
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <AnimatePresence mode="popLayout">
                                {filteredMore.map((r) => (
                                    <motion.li
                                        key={r.name}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <a
                                            href={GH(r.name)}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="group block rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-neutral-200 shadow-[0_12px_35px_rgba(0,0,0,0.38)] backdrop-blur transition hover:border-blue-400/30 h-full"
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="font-semibold text-white">{r.name}</span>
                                                <Github className="h-4 w-4 opacity-80 group-hover:opacity-100" />
                                            </div>
                                            {r.category && (
                                                <span className="mt-1 inline-block rounded-full bg-blue-500/20 px-2 py-0.5 text-[9px] font-bold text-blue-300 border border-blue-400/30">
                                                    {r.category}
                                                </span>
                                            )}
                                            <p className="mt-1 text-neutral-300/90">{r.blurb}</p>
                                            {r.tech?.length ? (
                                                <div className="mt-2 flex flex-wrap gap-1.5">
                                                    {r.tech.map((t) => (
                                                        <span
                                                            key={t}
                                                            className={`rounded-[6px] border px-2 py-0.5 text-[10px]
                                                            ${selectedTech === t 
                                                                ? "border-blue-400 bg-blue-500/30 text-blue-200" 
                                                                : "border-white/10 bg-white/5"}`}
                                                        >
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : null}
                                            <div className="mt-2 text-[10px] text-neutral-400">
                                                {r.private ? "Private repo" : "Public repo"} {r.license ? `• ${r.license}` : ""}
                                            </div>
                                        </a>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>
                    </>
                )}

                {/* Mensagem quando não há resultados */}
                {totalFiltered === 0 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <div className="rounded-full bg-blue-500/10 p-6 mb-4">
                            <Filter className="h-12 w-12 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-200 mb-2">No projects found</h3>
                        <p className="text-neutral-400 mb-6">Try adjusting your filters to see more results</p>
                        <button
                            onClick={() => {
                                setSelectedCategory("All");
                                setSelectedTech(null);
                            }}
                            className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                        >
                            Clear all filters
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
