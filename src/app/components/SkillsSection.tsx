"use client";

import { motion } from "framer-motion";
import { Code2, Globe2, Boxes, Database, Server, GitBranch, Network, Brain, Languages } from "lucide-react";

/* ================= Data (no icon fields now) ================= */
const SECTIONS = [
    {
        title: "Programming Languages",
        icon: <Code2 className="h-5 w-5" />,
        items: ["C", "C++", "C#", "Java", "Kotlin", "PHP", "Python", "JavaScript", "SQL", "MS SQL Server"],
    },
    {
        title: "Web & Frontend",
        icon: <Globe2 className="h-5 w-5" />,
        items: ["HTML5", "CSS3", "SCSS", "RWD", "XML", "Beginner JavaScript for Web Development", "PHP (Laravel)"],
    },
    {
        title: "Frameworks",
        icon: <Boxes className="h-5 w-5" />,
        items: ["Django", "Django REST Framework (DRF)", "Flask", "Laravel"],
    },
    {
        title: "Databases & Design",
        icon: <Database className="h-5 w-5" />,
        items: ["Database Design & Programming", "SQL", "MS SQL Server"],
    },
    {
        title: "Linux & DevOps",
        icon: <Server className="h-5 w-5" />,
        items: [
            "Linux (main OS)",
            "Linux Basics",
            "Linux (Server)",
            "Linux (Command line, Bash/Shell)",
            "Linux (user level & OS knowledge)",
            "QNX Basics",
        ],
    },
    {
        title: "Version Control & Tools",
        icon: <GitBranch className="h-5 w-5" />,
        items: ["Git", "GitHub", "SVN", "Microsoft Office"],
    },
    {
        title: "Networking",
        icon: <Network className="h-5 w-5" />,
        items: [
            "Network Maintenance & Troubleshooting",
            "Networking concepts (NAT, DNS, DHCP, Firewall rules)",
            "Network services & protocols (DHCP, DNS, HTTP, TCP, UDP, IMAP3)",
            "Cisco Packet Tracer",
            "Cisco Networking IT Essentials",
            "Cisco CCNA1 (in progress)",
            "Completed IT Essentials (Cisco Networking Academy)",
        ],
    },
    {
        title: "AI & LLMs",
        icon: <Brain className="h-5 w-5" />,
        items: ["OpenAI", "LLM"],
    },
    {
        title: "Spoken Languages",
        icon: <Languages className="h-5 w-5" />,
        items: ["Arabic", "Portuguese", "Understand spoken English"],
    },
] as const;

function Tag({ children }: { children: React.ReactNode }) {
    return (
        <motion.span
            initial={{ y: 6, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="inline-flex items-center rounded-xl border border-white/12 bg-white/6 px-2.5 py-1 text-xs text-neutral-100 shadow-[0_2px_0_0_#000,0_4px_0_0_#111]"
        >
            {children}
        </motion.span>
    );
}

export default function SkillsSection() {
    return (
        <section id="skills" className="section-skills relative isolate overflow-hidden bg-transparent text-neutral-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(1000px_520px_at_80%_10%,rgba(124,58,237,0.16),transparent_55%),radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.55))]" />

            <div className="relative mx-auto max-w-6xl px-6 py-20">
                <motion.h2
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="text-balance text-4xl font-black tracking-tight md:text-5xl"
                >
                    Skills
                </motion.h2>

                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                    {SECTIONS.map((section, idx) => (
                        <motion.article
                            key={section.title}
                            initial={{ y: 12, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: 0.02 * idx, type: "spring", stiffness: 180, damping: 16 }}
                            className="rounded-2xl border border-white/10 bg-white/6 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur"
                        >
                            <div className="flex items-center gap-3 text-neutral-200">
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-blue-300 ring-1 ring-white/10">
                                    {section.icon}
                                </span>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-100/80">{section.title}</h3>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {section.items.map((item) => (
                                    <Tag key={item}>{item}</Tag>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
