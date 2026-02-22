"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";



export default function UnlockStory() {
    const router = useRouter();

    return (
        <section className="px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="ornate-frame relative"
                >
                    {/* Corner flourishes */}
                    <div className="corner-tl" />
                    <div className="corner-tr" />
                    <div className="corner-bl" />
                    <div className="corner-br" />

                    {/* Heading */}
                    <div className="text-center mb-6">
                        <h2
                            className="font-heading uppercase text-gold text-2xl md:text-4xl mb-3"
                            style={{ letterSpacing: "0.08em" }}
                        >
                            Unlock the Story in Your Palm
                        </h2>
                        {/* Decorative divider with stars */}
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-px w-16 bg-gold/30" />
                            <span className="text-gold/50 text-xs">✦</span>
                            <p className="font-body text-gold-muted text-xs uppercase" style={{ letterSpacing: "0.08em" }}>
                                Not magic. Just stardust and algorithms.
                            </p>
                            <span className="text-gold/50 text-xs">✦</span>
                            <div className="h-px w-16 bg-gold/30" />
                        </div>
                    </div>

                    {/* Split content: text left, hand right */}
                    <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                        <div>
                            <p className="font-body text-gold-muted text-sm md:text-base mb-8" style={{ lineHeight: 1.85 }}>
                                For centuries, your palm has whispered secrets about your purpose, potential, and personality.
                                We&apos;ve simply reimagined the ancient art of palmistry for the modern world.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => router.push("/upload")}
                                className="btn-outline w-full py-3 text-sm mb-6"
                            >
                                Upload Palm Photo
                            </motion.button>

                            <p className="font-body text-gold-muted text-xs" style={{ lineHeight: 1.8 }}>
                                Upload your palm. Let the stars speak — beautifully, digitally, and just for you.
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative w-full max-w-[280px]">
                                <img
                                    src="/images/palm_hand.jpg"
                                    alt="Vintage Palmistry Hand"
                                    className="w-full h-auto rounded-sm"
                                    style={{
                                        opacity: 0.75,
                                        mixBlendMode: "screen",
                                        filter: "grayscale(100%) contrast(1.2)",
                                    }}
                                    onError={(e) => {
                                        // Fallback: hide broken image
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const next = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                                        if (next) next.style.display = "flex";
                                    }}
                                />
                                {/* Fallback SVG hand if image fails */}
                                <div className="hidden w-full h-[320px] items-center justify-center text-gold/30 border border-gold-border rounded text-sm font-body">
                                    Palm image not found.<br />Run: <code>node setup-assets.js</code>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
