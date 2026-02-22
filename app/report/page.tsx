"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Share2, Sparkles } from "lucide-react";
import Navbar from "../../components/Navbar";

interface UserData { fullName: string; gender: string; age: string; imagePreview: string; }

const report = {
    sections: [
        { title: "The Intuitive Visionary", body: "Your palm reveals a deeply intuitive nature with strong visionary capabilities. You possess the rare ability to see beyond the surface and understand life\u2019s deeper meanings.", tags: ["Highly Intuitive", "Creative Thinker", "Empathetic"] },
        { title: "Emotional Harmony Seeker", body: "Your heart line indicates a person who seeks emotional balance and meaningful connections. You value deep relationships and understand others\u2019 feelings naturally.", tags: ["The Healer", "The Counselor", "The Peacemaker"] },
        { title: "Path of Wisdom & Growth", body: "Your life line suggests a journey of continuous learning and personal development. You\u2019re destined to share wisdom and make a positive impact on the world.", tags: ["Personal Growth", "Creative Expression", "Spiritual Development"] },
        { title: "Cosmic Career Insights", body: "Your unique palm signature resonates with creative and leadership energy. Careers in arts, counseling, teaching, and visionary roles align with your cosmic fingerprint.", tags: ["Creative Leadership", "Mentoring", "Visionary Thinking"] },
    ],
};

function Explosion({ onDone }: { onDone: () => void }) {
    useEffect(() => { const t = setTimeout(onDone, 1600); return () => clearTimeout(t); }, [onDone]);
    return (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1.3, delay: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            {Array.from({ length: 25 }).map((_, i) => {
                const a = (i / 25) * Math.PI * 2;
                const d = 80 + Math.random() * 160;
                return (
                    <motion.div key={i} className="absolute w-1 h-1 bg-gold rounded-full"
                        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                        animate={{ x: Math.cos(a) * d, y: Math.sin(a) * d, opacity: 0, scale: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: Math.random() * 0.25 }}
                        style={{ boxShadow: "0 0 4px rgba(230,211,163,.7)" }} />
                );
            })}
            <motion.div initial={{ scale: 0, opacity: 1 }} animate={{ scale: 2.5, opacity: 0 }} transition={{ duration: 0.7 }}
                className="w-12 h-12 rounded-full" style={{ background: "radial-gradient(circle,#E6D3A3 0%,transparent 70%)" }} />
        </motion.div>
    );
}

export default function ReportPage() {
    const [user, setUser] = useState<UserData | null>(null);
    const [boom, setBoom] = useState(true);
    const [show, setShow] = useState(false);
    const [waitlisted, setWaitlisted] = useState(false);

    useEffect(() => { const raw = localStorage.getItem("celestik-data"); if (raw) setUser(JSON.parse(raw)); }, []);
    const boomDone = useCallback(() => { setBoom(false); setShow(true); }, []);

    const download = () => {
        const blob = new Blob([JSON.stringify({ ...report, user }, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url;
        a.download = `celestik-report-${user?.fullName.replace(/\s+/g, "-").toLowerCase()}.json`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
    };

    const share = () => {
        if (navigator.share) navigator.share({ title: "My Celestik Report", text: "Discover your cosmic personality!", url: window.location.href });
        else { navigator.clipboard.writeText(window.location.href); alert("Link copied!"); }
    };

    if (!user) return <div className="min-h-screen flex items-center justify-center">
        <p className="font-heading uppercase text-gold text-lg" style={{ letterSpacing: "0.08em" }}>Loading…</p>
    </div>;

    return (
        <div className="min-h-screen">
            {boom && <Explosion onDone={boomDone} />}
            <Navbar />
            <AnimatePresence>
                {show && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="pt-20 pb-12 px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-10">
                                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                                    className="text-gold-muted text-xs uppercase font-body mb-2" style={{ letterSpacing: "0.1em" }}>✦ Report Ready</motion.p>
                                <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                                    className="font-heading uppercase text-gold text-3xl md:text-4xl mb-3" style={{ letterSpacing: "0.08em" }}>
                                    Your Stardust Report
                                </motion.h1>
                                <div className="gold-divider" />
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                                    className="font-body text-gold-muted text-sm mt-3">Personalized for {user.fullName}</motion.p>
                            </div>

                            {/* Certificate */}
                            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
                                className="rounded-card p-7 md:p-10 mb-7"
                                style={{ background: "linear-gradient(135deg,#0a0a2e 0%,#0d0d35 50%,#111140 100%)", border: "1px solid rgba(230,211,163,.2)", boxShadow: "0 0 30px rgba(230,211,163,.02)" }}>
                                <div className="text-center mb-7 pb-5 border-b border-gold-border">
                                    <p className="font-heading text-[10px] uppercase text-gold" style={{ letterSpacing: "0.3em" }}>Celestik Stardust Certificate</p>
                                    <div className="w-12 h-px bg-gold/25 mx-auto mt-2" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {report.sections.map((s, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.12 }}
                                            className="p-4 rounded-card" style={{ background: "rgba(230,211,163,.02)", border: "1px solid rgba(230,211,163,.1)" }}>
                                            <h3 className="font-body text-base text-gold mb-1.5 font-semibold">{s.title}</h3>
                                            <p className="font-body text-gold-muted text-sm" style={{ lineHeight: 1.85 }}>{s.body}</p>
                                            <div className="flex flex-wrap gap-1 mt-2.5">
                                                {s.tags.map((t, j) => (
                                                    <span key={j} className="text-[9px] px-2 py-0.5 border border-gold-border text-gold font-body rounded-card">{t}</span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Buttons */}
                            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
                                className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={download}
                                    className="btn-gold px-7 py-3 text-[12px] flex items-center justify-center gap-2">
                                    <Download className="w-4 h-4" /> Download Report
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={share}
                                    className="btn-outline px-7 py-3 text-[12px] flex items-center justify-center gap-2">
                                    <Share2 className="w-4 h-4" /> Share
                                </motion.button>
                            </motion.div>

                            {/* Astrology banner */}
                            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.7 }}
                                className="glass p-7 text-center relative overflow-hidden">
                                <Sparkles className="w-7 h-7 text-gold mx-auto mb-3" />
                                <h3 className="font-heading uppercase text-gold text-xl mb-2" style={{ letterSpacing: "0.08em" }}>Astrology Coming Soon</h3>
                                <div className="gold-divider mb-4" />
                                <p className="font-body text-gold-muted text-sm max-w-md mx-auto mb-5" style={{ lineHeight: 1.85 }}>
                                    Birth chart analysis, planetary influences, and your complete celestial blueprint.
                                </p>
                                {!waitlisted ? (
                                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => setWaitlisted(true)}
                                        className="btn-outline px-6 py-2 text-[12px]">Join Waitlist</motion.button>
                                ) : (
                                    <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-gold text-sm font-body">
                                        ✦ Thank you! You&apos;re on the list.
                                    </motion.p>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
