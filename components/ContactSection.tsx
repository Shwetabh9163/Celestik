"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const submit = (ev: React.FormEvent) => {
        ev.preventDefault();
        setSent(true);
    };

    return (
        <section id="contact" className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-4"
                >
                    <h2
                        className="font-heading uppercase text-gold text-2xl md:text-3xl mb-2"
                        style={{ letterSpacing: "0.08em" }}
                    >
                        Contact Us
                    </h2>
                    <p className="font-body text-gold-muted text-xs uppercase" style={{ letterSpacing: "0.05em" }}>
                        Got questions written in your stars? Let&apos;s talk.
                    </p>
                </motion.div>

                <div className="gold-divider mb-8" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="ornate-frame relative"
                >
                    <div className="corner-tl" />
                    <div className="corner-tr" />
                    <div className="corner-bl" />
                    <div className="corner-br" />

                    {!sent ? (
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text" name="name" value={form.name} onChange={set}
                                    placeholder="Full Name" required className="form-input"
                                />
                                <input
                                    type="tel" name="mobile" value={form.mobile} onChange={set}
                                    placeholder="Mobile Number" className="form-input"
                                />
                            </div>
                            <input
                                type="email" name="email" value={form.email} onChange={set}
                                placeholder="Email" required className="form-input mb-4"
                            />
                            <textarea
                                name="message" value={form.message} onChange={set} rows={4}
                                placeholder="Whisper your wonder. Type your question below and let the stars (and our team) guide you."
                                className="form-input mb-4 resize-none"
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                className="btn-gold w-full md:w-auto md:mx-auto md:block px-12 py-2.5 text-sm"
                            >
                                Submit Now
                            </motion.button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                        >
                            <p className="font-heading uppercase text-gold text-lg mb-2" style={{ letterSpacing: "0.06em" }}>
                                Message Received
                            </p>
                            <p className="font-body text-gold-muted text-sm">
                                The stars have noted your question. We&apos;ll reach out soon.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
