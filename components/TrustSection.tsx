"use client";

import { motion } from "framer-motion";
import { Shield, Lock, EyeOff } from "lucide-react";

const items = [
    {
        icon: Shield,
        title: "Secure Payment",
        desc: "Your \u20b91 verification payment is guarded by industry-standard 256-bit SSL encryption.",
    },
    {
        icon: Lock,
        title: "Private Data",
        desc: "Your palm images and personal details are never stored, shared, or sold to any third party.",
    },
    {
        icon: EyeOff,
        title: "No Predictions",
        desc: "We provide personality insights and self-reflection tools, not fortune telling or future predictions.",
    },
];

export default function TrustSection() {
    return (
        <section className="pt-[120px] pb-16 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2
                        className="font-heading uppercase text-gold text-2xl md:text-3xl mb-4"
                        style={{ letterSpacing: "0.08em", lineHeight: 1.2 }}
                    >
                        Your Privacy, Our Promise
                    </h2>
                    <div className="gold-divider" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-5 mt-10">
                    {items.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            viewport={{ once: true }}
                            className="glass p-7 text-center"
                        >
                            <div className="w-12 h-12 mx-auto mb-5 rounded-card border border-gold-border flex items-center justify-center">
                                <t.icon className="w-5 h-5 text-gold" />
                            </div>
                            <h3 className="font-body text-lg text-gold mb-2 font-medium">
                                {t.title}
                            </h3>
                            <p className="font-body text-gold-muted text-sm" style={{ lineHeight: 1.85 }}>
                                {t.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
