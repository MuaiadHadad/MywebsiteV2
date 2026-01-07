// components/ContactSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Github, Linkedin, Globe2 } from "lucide-react";

/* ============ contactos do teu CV ============ */
const CONTACTS = {
    email: "muaiad@muaiadhadad.me",
    phone: "+351 938 929 505",
    github: "https://github.com/MuaiadHadad",
    linkedin: "https://www.linkedin.com/in/muaiad-hadad/",
    website: "https://muaiadhadad.me",
};
const BRAND = { name: "Muaiad Hadad", logo: { src: "/Logo_muaiad1.png", alt: "Muaiad logo" } };

export default function ContactSection({ brand = BRAND }: { brand?: typeof BRAND }) {
    const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Anti-spam: prevent multiple submissions within 30 seconds
        const now = Date.now();
        const timeSinceLastSubmit = now - lastSubmitTime;
        if (timeSinceLastSubmit < 30000 && lastSubmitTime !== 0) {
            setState("error");
            setMessage("Please wait 30 seconds before sending another message.");
            setTimeout(() => {
                setState("idle");
                setMessage("");
            }, 3000);
            return;
        }

        setState("loading");
        setMessage("");
        const form = e.currentTarget as HTMLFormElement;
        const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

        // honeypot
        if (data._hp) {
            setState("success");
            setMessage("Message sent successfully!");
            form.reset();
            setTimeout(() => {
                setState("idle");
                setMessage("");
            }, 3000);
            return;
        }

        if (!data.name || !data.email || !data.message) {
            setState("error");
            setMessage("Please fill in name, email and message.");
            setTimeout(() => {
                setState("idle");
                setMessage("");
            }, 3000);
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Failed to send message");
            }

            setState("success");
            setMessage("Message sent! I'll get back to you soon.");
            setLastSubmitTime(now);
            form.reset();

            // Reset to idle after 5 seconds
            setTimeout(() => {
                setState("idle");
                setMessage("");
            }, 5000);
        } catch (error) {
            setState("error");
            setMessage("Something went wrong. Please try again or email me directly.");

            // Reset to idle after 4 seconds
            setTimeout(() => {
                setState("idle");
                setMessage("");
            }, 4000);
        }
    }

    return (
        <section id="contact" className="relative isolate overflow-hidden bg-transparent text-neutral-100">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.14),transparent_32%),radial-gradient(1200px_600px_at_20%_80%,rgba(16,185,129,0.10),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/6 via-transparent to-black/60 mix-blend-screen" />

            <div className="relative mx-auto max-w-7xl px-6 py-20">
                <motion.h2
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="text-balance text-4xl font-black tracking-tight md:text-5xl"
                >
                    Contact <span className="text-emerald-300">Me</span>
                </motion.h2>

                <div className="mt-10 grid items-stretch gap-8 md:grid-cols-12">
                    <motion.aside
                        initial={{ x: -18, opacity: 0, rotate: -1 }}
                        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", stiffness: 160, damping: 16 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.48)] backdrop-blur-2xl md:col-span-4 h-full"
                    >
                        <motion.span
                            aria-hidden
                            initial={{ x: "-120%" }}
                            whileInView={{ x: "120%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.2 }}
                            className="pointer-events-none absolute -top-1/2 left-0 h-[220%] w-1/3 rotate-12 bg-gradient-to-b from-white/15 via-white/5 to-transparent"
                        />

                        <div className="flex items-center gap-3 text-neutral-200">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/30">
                                <Mail className="h-5 w-5" />
                            </div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-200/80">
                                Reach out
                            </h3>
                        </div>
                        <ul className="mt-4 space-y-3 text-neutral-100/90">
                            <ContactRow icon={<Mail className="h-4 w-4" />} label={CONTACTS.email} href={`mailto:${CONTACTS.email}`} />
                            <ContactRow icon={<Phone className="h-4 w-4" />} label={CONTACTS.phone} href={`tel:${CONTACTS.phone.replace(/\s+/g,"")}`} />
                            <ContactRow icon={<Github className="h-4 w-4" />} label="github.com/MuaiadHadad" href={CONTACTS.github} external />
                            <ContactRow icon={<Linkedin className="h-4 w-4" />} label="/in/muaiad-hadad" href={CONTACTS.linkedin} external />
                            <ContactRow icon={<Globe2 className="h-4 w-4" />} label={CONTACTS.website.replace(/^https?:\/\//, "")} href={CONTACTS.website} external />
                        </ul>

                        <span className="pointer-events-none absolute -right-12 -bottom-12 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
                    </motion.aside>

                    <motion.form
                        onSubmit={onSubmit}
                        initial={{ x: 18, opacity: 0, rotate: 1 }}
                        whileInView={{ x: 0, opacity: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ type: "spring", stiffness: 160, damping: 16 }}
                        className="md:col-span-8 relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.08] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.48)] backdrop-blur-2xl h-full"
                    >
                        <div className="relative mb-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/15 bg-white/5">
                                <Image src={brand.logo.src} alt={brand.logo.alt} fill className="object-contain p-1" sizes="40px" />
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-[0.25em] text-white/60">Say hello to</div>
                                <div className="text-lg font-semibold text-white">{brand.name}</div>
                            </div>
                        </div>

                        <div className="relative grid gap-4 sm:grid-cols-2">
                            <Field label="Name" name="name" placeholder="Your name" autoComplete="name" />
                            <Field label="Email" name="email" type="email" placeholder="you@email.com" autoComplete="email" />
                        </div>

                        <div className="relative mt-4">
                            <Field label="Subject" name="subject" placeholder="How can I help?" />
                        </div>

                        <div className="relative mt-4">
                            <Field
                                label="Message"
                                name="message"
                                as="textarea"
                                rows={6}
                                placeholder="Tell me about your project…"
                            />
                        </div>

                        {/* honeypot */}
                        <input aria-hidden tabIndex={-1} autoComplete="off" className="hidden" name="_hp" />

                        <div className="relative mt-6 flex flex-wrap items-center gap-3">
                            <button
                                type="submit"
                                disabled={state === "loading"}
                                className="rounded-xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/30 via-emerald-400/25 to-cyan-400/25 px-6 py-2.5 font-semibold text-emerald-100 shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_24px_rgba(16,185,129,0.35)] transition hover:translate-y-[1px] hover:from-emerald-400/35 hover:to-cyan-300/30 disabled:opacity-60"
                            >
                                {state === "loading" ? "Sending…" : "Send message"}
                            </button>

                            <a
                                href={`mailto:${CONTACTS.email}`}
                                className="rounded-xl border border-white/15 bg-white/5 px-6 py-2.5 font-semibold text-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition hover:bg-white/10"
                            >
                                Email me directly
                            </a>
                        </div>

                        {/* toast */}
                        <AnimatePresence>
                            {(state === "success" || state === "error") && (
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 20, opacity: 0 }}
                                    className={`pointer-events-none absolute bottom-4 right-4 rounded-xl border px-3 py-2 text-sm backdrop-blur ${
                                        state === "success"
                                            ? "border-emerald-400/30 bg-emerald-600/15 text-emerald-200"
                                            : "border-rose-400/30 bg-rose-600/15 text-rose-200"
                                    }`}
                                >
                                    {state === "success"
                                        ? "Message sent. I’ll get back to you soon!"
                                        : "Something went wrong — try again."}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

function ContactRow({ icon, label, href, external }: { icon: React.ReactNode; label: string; href: string; external?: boolean }) {
    const props = external ? { target: "_blank", rel: "noreferrer" } : {};
    return (
        <li className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/8 text-emerald-200 ring-1 ring-white/10">
                {icon}
            </span>
            <a className="text-sm font-medium text-white/90 underline decoration-emerald-400/60 decoration-2 underline-offset-4 hover:text-emerald-200" href={href} {...props}>
                {label}
            </a>
        </li>
    );
}

/* ============ inputs (pixel/CRT look) ============ */
function Field({
                   label,
                   name,
                   as,
                   rows,
                   type = "text",
                   placeholder,
                   autoComplete,
               }: {
    label: string;
    name: string;
    as?: "textarea";
    rows?: number;
    type?: string;
    placeholder?: string;
    autoComplete?: string;
}) {
    const Tag: any = as === "textarea" ? "textarea" : "input";
    return (
        <label className="block">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-neutral-300/80">
        {label}
      </span>
            <Tag
                name={name}
                rows={rows}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                required={name === "name" || name === "email" || name === "message"}
                className="w-full rounded-xl border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] outline-none transition placeholder:text-neutral-500 focus:border-emerald-400/40 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.12),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
            />
        </label>
    );
}
