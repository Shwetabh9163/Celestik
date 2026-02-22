"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const texts = [
    "Analyzing palm lines\u2026",
    "Mapping lifeline trajectories\u2026",
    "Detecting personality archetypes\u2026",
    "Isolating emotional archetypes\u2026",
    "Reading stardust patterns\u2026",
    "Generating cosmic profile\u2026",
];

export default function ProcessingPage() {
    const router = useRouter();
    const [idx, setIdx] = useState(0);
    const [progress, setProgress] = useState(0);
    const [palm, setPalm] = useState<string | null>(null);

    useEffect(() => {
        const raw = localStorage.getItem("celestik-data");
        if (raw) setPalm(JSON.parse(raw).imagePreview);
    }, []);

    useEffect(() => {
        const total = texts.length * 2000;
        const ti = setInterval(() => {
            setIdx((p) => { if (p >= texts.length - 1) { clearInterval(ti); return p; } return p + 1; });
        }, 2000);
        const pi = setInterval(() => {
            setProgress((p) => { if (p >= 100) { clearInterval(pi); return 100; } return p + 100 / (total / 50); });
        }, 50);
        const nav = setTimeout(() => router.push("/report"), total + 800);
        return () => { clearInterval(ti); clearInterval(pi); clearTimeout(nav); };
    }, [router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative"
            style={{ background: "linear-gradient(180deg,#0a0a2e 0%,#0d0d35 50%,#111140 100%)" }}>

            {/* IM Fell heading */}
            <motion.h1 initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }}
                className="font-heading uppercase text-gold text-xl md:text-2xl mb-8" style={{ letterSpacing: "0.08em" }}>
                Reading Your Palm
            </motion.h1>

            {/* Palm + laser */}
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
                className="relative w-52 h-64 md:w-60 md:h-76 mb-10 rounded-card overflow-hidden border border-gold-border">
                {palm ? (
                    <Image src={palm} alt="Palm" fill className="object-cover opacity-55" style={{ filter: "contrast(1.2) saturate(0.5) sepia(0.1)" }} />
                ) : (
                    <div className="w-full h-full bg-bg-deep flex items-center justify-center">
                        <span className="text-gold-muted text-sm font-body">Scanning\u2026</span>
                    </div>
                )}
                {/* Gold laser */}
                <motion.div animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-0 right-0 h-[2px] z-10"
                    style={{ background: "linear-gradient(90deg,transparent,#E6D3A3,transparent)", boxShadow: "0 0 12px rgba(230,211,163,.5),0 0 25px rgba(230,211,163,.2)" }} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-base/80" />
            </motion.div>

            {/* Cycling text — Cormorant Garamond */}
            <div className="h-7 mb-6 flex items-center">
                <AnimatePresence mode="wait">
                    <motion.p key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}
                        className="font-body text-base md:text-lg text-gold-muted font-medium">
                        {texts[idx]}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="fixed bottom-0 left-0 right-0 h-[2px] bg-bg-base">
                <motion.div className="h-full"
                    style={{ background: "linear-gradient(90deg,transparent,#E6D3A3 50%,transparent)" }}
                    animate={{ width: `${Math.min(progress, 100)}%` }} transition={{ duration: 0.1, ease: "linear" }} />
            </div>

            {/* Particles */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div key={i} className="absolute w-[1.5px] h-[1.5px] bg-gold/15 rounded-full"
                        style={{ left: `${(i * 6 + 4) % 100}%`, top: `${(i * 8 + 9) % 100}%` }}
                        animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0] }}
                        transition={{ duration: 3.5 + (i % 3), repeat: Infinity, delay: (i * 0.35) % 2.5 }} />
                ))}
            </div>
        </div>
    );
}
