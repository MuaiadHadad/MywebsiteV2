"use client";

import { motion } from "framer-motion";
import { Code2, Github, Cpu, Sparkles } from "lucide-react";

/* ============ Component ============ */
export default function AboutMe() {
    return (
        <section id="about" className="relative isolate overflow-hidden bg-transparent text-neutral-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_0%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(1000px_520px_at_85%_10%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.55))]" />

            <div className="relative mx-auto max-w-6xl px-6 py-20">
                {/* title */}
                <motion.h2
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="text-balance text-4xl font-black tracking-tight md:text-5xl"
                >
                    About <span className="text-emerald-300">Muaiad</span>
                </motion.h2>

                {/* narrative */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-300"
                >
                    I’m a pragmatic full-stack developer who turns rough ideas into working software — fast. I move between PHP/Laravel, Python, and modern front-ends to ship reliable features with clean APIs and solid DevOps.
                </motion.p>

                {/* GitHub + repo highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 }}
                    className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur"
                >
                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="https://github.com/MuaiadHadad"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-black/40"
                        >
                            <Github className="h-4 w-4" /> github.com/MuaiadHadad
                        </a>
                        <span className="text-xs text-neutral-400">Highlights from my repos →</span>
                    </div>

                    <div className="mt-4 grid gap-3 lg:grid-cols-2">
                        {["Accommodation Manager — Laravel/Blade app for housing flows.", "Job-Listing-API — end-to-end demo (API + UI).", "NewSwissAI — Vue-powered site prototype.", "MineDefender — Python prototype with a security angle.", "BioVision — DeepVision site polish & UI.", "Surveillance System — Python pipeline experiments."].map((text) => (
                            <span key={text} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200">
                                <Sparkles className="mt-0.5 h-4 w-4 text-emerald-300" />
                                {text}
                            </span>
                        ))}
                    </div>

                    <p className="mt-4 text-sm text-neutral-400">
                        I like layered services, readable components, tidy CSS, and pragmatic Python when performance matters.
                    </p>
                </motion.div>

                {/* values */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { icon: <Code2 className="h-5 w-5" />, title: "Clean Code", text: "Small modules, clear names, ruthless deletion of dead weight." },
                        { icon: <Cpu className="h-5 w-5" />, title: "Solid DX", text: "Dev environments that boot fast and CI that shouts early." },
                        { icon: <Sparkles className="h-5 w-5" />, title: "Data & AI", text: "APIs and pipelines that make LLMs useful, not just flashy." },
                    ].map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * i, type: "spring", stiffness: 160, damping: 16 }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
                        >
                            <div className="mb-2 flex items-center gap-2 text-neutral-300">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/8 text-emerald-200 ring-1 ring-white/10">
                                    {c.icon}
                                </span>
                                <span className="text-sm font-semibold uppercase tracking-widest text-neutral-300/80">
                                    {c.title}
                                </span>
                            </div>
                            <p className="text-neutral-300/90">{c.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
