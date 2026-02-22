"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ZodiacMandala from "./ZodiacMandala";

export default function Footer() {
    return (
        <footer className="py-12 px-4 border-t border-gold-border mt-8">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Left: Zodiac Mandala + Celestik */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <ZodiacMandala size={80} />
                            <span
                                className="font-logo text-base uppercase text-gold"
                                style={{ letterSpacing: "0.14em", textShadow: "0 0 4px rgba(230,211,163,0.15)" }}
                            >
                                Celestik
                            </span>
                        </div>
                    </motion.div>

                    {/* Center: Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <p
                            className="font-logo uppercase text-gold text-lg md:text-xl mb-1"
                            style={{ letterSpacing: "0.1em", textShadow: "0 0 4px rgba(230,211,163,0.15)" }}
                        >
                            Celestik
                        </p>
                        <p className="font-body text-gold-muted text-xs uppercase mb-3" style={{ letterSpacing: "0.04em" }}>
                            Not magic. Just stardust and algorithms.
                        </p>
                        <p className="font-body text-gold-muted/70 text-[11px] mb-4" style={{ lineHeight: 1.6 }}>
                            Journey through the cosmos hidden in your palm. Ancient intuition, reborn for the digital age.
                        </p>
                        <p className="font-body text-gold/60 text-[11px] italic mb-3">
                            &ldquo;The stars have always spoken. I&apos;ve just gave them a landing page.&rdquo;
                        </p>
                        <p className="font-body text-gold-muted/40 text-[10px] uppercase" style={{ letterSpacing: "0.05em" }}>
                            &copy; 2026 Celestik. All rights aligned with the universe.
                        </p>
                    </motion.div>

                    {/* Right: Nav links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center md:items-end gap-2"
                    >
                        {["Palmistry", "Astrology", "How It Works", "Contact Us"].map((item, i) => (
                            <Link
                                key={i}
                                href={
                                    item === "Palmistry" ? "/upload" :
                                        item === "Astrology" ? "#astrology" :
                                            item === "How It Works" ? "#how-it-works" :
                                                "#contact"
                                }
                                className="nav-pill text-center w-full md:w-auto"
                            >
                                {item}
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
