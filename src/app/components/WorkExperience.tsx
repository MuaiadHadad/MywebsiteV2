"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Code2 } from "lucide-react";

const jobs = [
    {
        role: "AI Software Engineer",
        company: "Med Robots",
        location: "Coimbra, PT",
        period: "Mar 2025 — Present",
        summary:
            "I design and ship LLM-powered features and computer-vision pipelines, glueing services with clean APIs and reliable DevOps.",
        bullets: [
            "LLM integrations (prompting, tools, retrieval) with OpenAI",
            "Python services (FastAPI), containerized with Docker",
            "Vision & generative model experiments wired into web backends",
        ],
        stack: ["Python", "FastAPI", "Docker", "OpenAI", "REST"],
    },
    {
        role: "Backend Developer Intern",
        company: "CHECK24 Vergleichsportal GmbH",
        location: "Munich, DE",
        period: "Sep 2024 — Feb 2025",
        summary:
            "Built secure REST endpoints and internal tooling. Helped standardize validation and auth flows while keeping things fast.",
        bullets: [
            "Laravel REST APIs and data validation",
            "MySQL tuning and query hygiene",
            "Containerized dev env + Git workflows",
        ],
        stack: ["PHP", "Laravel", "MySQL", "Docker", "Git"],
    },
    {
        role: "Intern",
        company: "Webmania",
        location: "Coimbra, PT",
        period: "Apr 2020 — Jun 2020",
        summary:
            "Full-stack support for small-business websites and admin panels.",
        bullets: ["PHP/Laravel, JavaScript, HTML/CSS", "MySQL", "Linux server basics"],
        stack: ["PHP", "Laravel", "JS", "CSS/HTML", "MySQL", "Linux"],
    },
    {
        role: "Intern",
        company: "Webmania",
        location: "Coimbra, PT",
        period: "May 2019 — Jun 2019",
        summary: "Web/desktop app maintenance and small feature work.",
        bullets: ["Java & PHP tasks", "JS/HTML/CSS", "SQL"],
        stack: ["Java", "PHP", "JS", "HTML/CSS", "SQL"],
    },
];

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 text-[11px] font-semibold text-neutral-100">
      {children}
    </span>
    );
}

export default function WorkExperience() {
    return (
        <section id="experience" className="relative isolate overflow-hidden bg-transparent text-neutral-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(1000px_520px_at_80%_10%,rgba(124,58,237,0.16),transparent_55%),radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.55))]" />

            <div className="relative mx-auto max-w-6xl px-6 py-20">
                <motion.h2
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="text-balance text-4xl font-black tracking-tight md:text-5xl"
                >
                    Experience
                </motion.h2>

                <div className="relative mt-12">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-emerald-300/10 to-transparent md:left-1/2" />
                    <ol className="space-y-10">
                        {jobs.map((job, i) => {
                            const left = i % 2 === 0;
                            return (
                                <li key={job.role} className={`md:flex md:items-stretch ${left ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                    <div className="md:w-1/2 md:px-6">
                                        <motion.article
                                            initial={{ y: 20, opacity: 0, scale: 0.98 }}
                                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.35 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                            className="relative rounded-2xl border border-white/10 bg-white/8 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.48)] backdrop-blur"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">{job.company}</p>
                                                    <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                                                </div>
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-300/40">
                                                    <Briefcase className="h-5 w-5" />
                                                </span>
                                            </div>

                                            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
                                                <span className="inline-flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" /> {job.period}
                                                </span>
                                                <span className="inline-flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" /> {job.location}
                                                </span>
                                            </div>

                                            <p className="mt-4 text-sm text-neutral-200">{job.summary}</p>

                                            <ul className="mt-4 space-y-2 text-sm text-neutral-200/90">
                                                {job.bullets.map((b) => (
                                                    <li key={b} className="flex gap-2">
                                                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {job.stack.map((s) => (
                                                    <Tag key={s}>{s}</Tag>
                                                ))}
                                            </div>

                                            <span className="pointer-events-none absolute -left-3 top-6 hidden h-6 w-6 rounded-full bg-emerald-400/40 blur-lg md:block" />
                                        </motion.article>
                                    </div>
                                    <div className="hidden w-1/2 px-6 md:block" aria-hidden>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ delay: 0.05, type: "spring", stiffness: 200, damping: 18 }}
                                            className="rounded-2xl border border-white/8 bg-white/4 p-4 text-sm text-neutral-200 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur"
                                        >
                                            <div className="flex items-center gap-2 text-emerald-200">
                                                <Code2 className="h-4 w-4" />
                                                Destaques
                                            </div>
                                            <p className="mt-2 text-neutral-200/90">
                                                {job.summary}
                                            </p>
                                        </motion.div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
