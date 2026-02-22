"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function AstrologySection() {
    const [joined, setJoined] = useState(false);

    return (
        <section className="pt-20 md:pt-32 pb-16 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="glass p-8 md:p-12 text-center relative overflow-hidden"
                >
                    {/* Zodiac hint */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='80' fill='none' stroke='%23E6D3A3' stroke-width='.4'/%3E%3Ccircle cx='100' cy='100' r='55' fill='none' stroke='%23E6D3A3' stroke-width='.3'/%3E%3C/svg%3E")`,
                            backgroundSize: "280px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            filter: "blur(2px)",
                        }}
                    />

                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="inline-block mb-5"
                    >
                        <Sparkles className="w-8 h-8 text-gold" />
                    </motion.div>

                    <h2
                        className="font-heading uppercase text-gold text-xl md:text-3xl mb-3"
                        style={{ letterSpacing: "0.08em" }}
                    >
                        Astrology Coming Soon
                    </h2>
                    <div className="gold-divider mb-5" />
                    <p className="font-body text-gold-muted text-sm max-w-md mx-auto mb-7" style={{ lineHeight: 1.85 }}>
                        Full birth chart analysis, planetary influences, and celestial guidance.
                        Your cosmic blueprint, charted by the stars.
                    </p>

                    {!joined ? (
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setJoined(true)}
                            className="btn-outline px-7 py-2.5 text-[12px]"
                        >
                            Join Waitlist
                        </motion.button>
                    ) : (
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-gold text-sm font-body"
                        >
                            ✦ Thank you! You&apos;re on the list.
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
