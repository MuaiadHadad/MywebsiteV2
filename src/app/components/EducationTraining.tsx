"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

/** ============ Downloads (presign) ============ */
async function presignUrl(key: string) {
    const res = await fetch(`/api/presign?key=${encodeURIComponent(key)}`, { cache: "no-store" });
    if (!res.ok) throw new Error("presign_failed");
    const { url } = await res.json();
    return url as string;
}

type DownloadItem = { label: string; file: string };

const downloadsByTraining: Record<string, DownloadItem[]> = {
    "OpenEDG|English for IT I & II": [
        { label: "English for IT I", file: "English_for_IT_1_Badge20241011-7-m7jzx1.pdf" },
        { label: "English for IT II", file: "English_for_IT_2_Badge20241011-7-63htws.pdf" },
    ],
    "Python Institute|Python Essentials I": [
        { label: "Certificate", file: "Python_Essentials_1_Badge20241011-7-rfvgsn.pdf" },
    ],
    "Cisco|PCAP — Programming Essentials in Python": [
        { label: "PCAP", file: "Partner PCAP - Programming.pdf" },
    ],
    "Cisco|CCNAv7: Introduction to Networks": [
        { label: "CCNAv7 Intro", file: "CCNAv7 Introduction to Networks.pdf" },
    ],
    "Cisco|CCNAv7: Switching, Routing & Wireless Essentials": [
        { label: "CCNAv7 SRWE", file: "CCNAv7 Switching, Routing, and.pdf" },
    ],
    "Cisco|NDG Linux Essentials": [
        { label: "Linux Essentials", file: "Partner NDG Linux Essentials.pdf" },
    ],
    "Cisco|JavaScript Essentials I": [
        { label: "JSE 1", file: "Partner JavaScript Essentials 1 (JSE).pdf" },
    ],
};

/** ============ Data ============ */
const education = [
    {
        title: "B.Eng. in Computer Engineering",
        school: "Instituto Politécnico de Coimbra",
        location: "Coimbra, Portugal",
        period: "Sep 2020 — Jul 2024",
        meta: "EQF Level 6",
        highlights: [
            "Software Engineering, Algorithms & Data Structures",
            "Networks & Systems Administration",
            "Databases and Web Development",
        ],
        diplomaFile: "diploma degree.pdf",
    },
    {
        title: "High School (Technological Path)",
        school: "Etpsico",
        location: "Coimbra, Portugal",
        period: "Sep 2018 — Jun 2020",
        meta: "EQF Level 5",
        highlights: ["Intro to Programming", "IT Fundamentals", "Applied Projects"],
    },
];

const trainings = [
    { provider: "OpenEDG", name: "English for IT I & II" },
    { provider: "Python Institute", name: "Python Essentials I" },
    { provider: "Cisco", name: "PCAP — Programming Essentials in Python" },
    { provider: "Cisco", name: "CCNAv7: Introduction to Networks" },
    { provider: "Cisco", name: "CCNAv7: Switching, Routing & Wireless Essentials" },
    { provider: "Cisco", name: "NDG Linux Essentials" },
    { provider: "Cisco", name: "JavaScript Essentials I" },
];

/** ============ Small UI ============ */
function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-white/12 bg-white/8 px-2.5 py-1 text-[11px] font-semibold text-neutral-100">
      {children}
    </span>
    );
}

function DownloadButton({ file, children }: { file: string; children: React.ReactNode }) {
    const [busy, setBusy] = React.useState(false);

    return (
        <button
            onClick={async () => {
                try {
                    setBusy(true);
                    const url = await presignUrl(file);
                    window.open(url, "_blank", "noopener,noreferrer");
                } catch {
                    alert("Não foi possível gerar o link de download. Tenta novamente.");
                } finally {
                    setBusy(false);
                }
            }}
            disabled={busy}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-[12px] font-semibold text-emerald-100 transition hover:bg-emerald-400/15 active:translate-y-px disabled:opacity-50"
            title={busy ? "A gerar link..." : "Download"}
        >
            <Download className="h-4 w-4" />
            {busy ? "A gerar..." : children}
        </button>
    );
}

/** ============ Component ============ */
export default function EducationTraining() {
    return (
        <section id="education" className="section-education relative isolate overflow-hidden bg-transparent text-neutral-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(1000px_520px_at_80%_10%,rgba(124,58,237,0.16),transparent_55%),radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.55))]" />

            <div className="relative mx-auto max-w-6xl px-6 py-20">
                {/* heading */}
                <motion.h2
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="text-balance text-4xl font-black tracking-tight md:text-5xl"
                >
                    Education <span className="text-emerald-300">& Training</span>
                </motion.h2>

                {/* Education timeline */}
                <div className="relative mt-12">
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-emerald-300/10 to-transparent md:left-1/2" />
                    <ol className="space-y-10">
                        {education.map((ed, i) => {
                            const left = i % 2 === 0;
                            return (
                                <li key={ed.title} className={`md:flex md:items-stretch ${left ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                    <div className="md:w-1/2 md:px-6">
                                        <motion.article
                                            initial={{ y: 18, opacity: 0, scale: 0.98 }}
                                            whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.35 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                            className="relative rounded-2xl border border-white/10 bg-white/8 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.48)] backdrop-blur"
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">{ed.school}</p>
                                                    <h3 className="text-lg font-semibold text-white">{ed.title}</h3>
                                                    <p className="text-xs text-neutral-400">{ed.meta}</p>
                                                </div>
                                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-300/40">
                                                    <GraduationCap className="h-5 w-5" />
                                                </span>
                                            </div>

                                            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
                                                <span className="inline-flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" /> {ed.period}
                                                </span>
                                                <span className="inline-flex items-center gap-1">
                                                    <MapPin className="h-4 w-4" /> {ed.location}
                                                </span>
                                            </div>

                                            <ul className="mt-4 space-y-2 text-sm text-neutral-200/90">
                                                {ed.highlights.map((h) => (
                                                    <li key={h} className="flex gap-2">
                                                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>

                                            {ed.diplomaFile ? (
                                                <div className="mt-4">
                                                    <DownloadButton file={ed.diplomaFile}>Diploma</DownloadButton>
                                                </div>
                                            ) : null}

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
                                                <Award className="h-4 w-4" />
                                                Certificados
                                            </div>
                                            <p className="mt-2 text-neutral-200/90">Resultados e projetos chave durante o curso.</p>
                                        </motion.div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>

                {/* Training badges */}
                <div className="mt-16 grid gap-4 lg:grid-cols-3">
                    {trainings.map((t, idx) => (
                        <motion.article
                            key={`${t.provider}-${t.name}`}
                            initial={{ y: 16, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.03 * idx, type: "spring", stiffness: 200, damping: 18 }}
                            className="rounded-2xl border border-white/10 bg-white/8 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">{t.provider}</p>
                                    <h3 className="text-sm font-semibold text-white">{t.name}</h3>
                                </div>
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-300/40">
                                    <BookOpen className="h-5 w-5" />
                                </span>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                                <Badge>{t.provider}</Badge>
                                <Badge>Cert.</Badge>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {(downloadsByTraining[`${t.provider}|${t.name}`] ?? []).map((d) => (
                                    <DownloadButton key={d.file} file={d.file}>{d.label}</DownloadButton>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
