"use client";

import { motion } from "framer-motion";

const steps = [
    {
        title: "Step 1: Upload Your Palm",
        desc: "Take a clear photo of your palm (either hand works!). Our system is designed to detect intricate line patterns that have fascinated astrologers and mystics for centuries.",
    },
    {
        title: "Step 2: Let the Patterns Speak",
        desc: "We translate your palm\u2019s geometry into key personality traits, emotional archetypes, and life paths \u2013 all inspired by timeless palmistry traditions. We don\u2019t predict the future, we help you understand yourself.",
    },
    {
        title: "Step 3: Receive Your Stardust Report",
        desc: "Within seconds, get a beautifully designed, personalized cosmic profile \u2013 modern insights backed by ancient methods, all created just for you.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-4"
                >
                    <h2
                        className="font-heading uppercase text-gold text-2xl md:text-4xl mb-2"
                        style={{ letterSpacing: "0.08em" }}
                    >
                        How Celestik Works
                    </h2>
                    <p className="font-body text-gold-muted text-xs uppercase" style={{ letterSpacing: "0.06em" }}>
                        From your palm to the cosmos. No fluff, just truth.
                    </p>
                </motion.div>

                <div className="gold-divider mb-8" />

                {/* Stacked vertical cards */}
                <div className="space-y-4">
                    {steps.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="step-card"
                        >
                            <h3 className="font-heading uppercase text-gold text-sm md:text-base mb-1.5" style={{ letterSpacing: "0.06em" }}>
                                {s.title}
                            </h3>
                            <p className="font-body text-gold-muted text-sm" style={{ lineHeight: 1.75 }}>
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
