"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, Star } from "lucide-react";
import Navbar from "../../components/Navbar";

interface Data { fullName: string; gender: string; age: string; imagePreview: string; }

export default function PaymentPage() {
    const router = useRouter();
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        const raw = localStorage.getItem("celestik-data");
        if (raw) setData(JSON.parse(raw)); else router.push("/upload");
    }, [router]);

    if (!data) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="font-heading uppercase text-gold text-lg" style={{ letterSpacing: "0.08em" }}>Loading…</p>
        </div>
    );

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="pt-20 pb-12 px-4">
                <div className="max-w-md mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div className="text-center mb-8">
                            <h1 className="font-heading uppercase text-gold text-2xl md:text-3xl mb-3" style={{ letterSpacing: "0.08em" }}>
                                Payment Summary
                            </h1>
                            <div className="gold-divider" />
                        </div>

                        <div className="glass p-7 md:p-9">
                            {/* Palm thumbnail */}
                            <div className="flex justify-center mb-5">
                                <div className="w-20 h-20 rounded-full overflow-hidden border border-gold-border shadow-[0_0_15px_rgba(230,211,163,.15)]">
                                    {data.imagePreview && (
                                        <Image src={data.imagePreview} alt="Palm" width={80} height={80} className="w-full h-full object-cover" />
                                    )}
                                </div>
                            </div>

                            <div className="text-center mb-5">
                                <p className="font-heading uppercase text-gold text-xl" style={{ letterSpacing: "0.08em" }}>{data.fullName}</p>
                                <p className="font-body text-gold-muted text-xs uppercase mt-1" style={{ letterSpacing: "0.1em" }}>
                                    Age {data.age} &bull; {data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}
                                </p>
                            </div>

                            <div className="border-t border-gold-border pt-4 mb-5">
                                <p className="font-heading uppercase text-gold text-xs mb-3" style={{ letterSpacing: "0.1em" }}>Your Report Includes</p>
                                <ul className="space-y-2.5">
                                    {["Personality Insights", "Emotional Archetypes", "Life Path Themes"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2.5 font-body text-gold-muted text-sm">
                                            <Star className="w-3 h-3 text-gold flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => router.push("/processing")}
                                className="w-full btn-gold py-3.5 text-sm mb-3">
                                Pay ₹1 &amp; Generate Report
                            </motion.button>

                            <div className="flex items-center justify-center gap-1.5 text-gold-muted/50 text-[10px] uppercase font-body" style={{ letterSpacing: "0.05em" }}>
                                <Lock className="w-3 h-3" />
                                <span>Secure 256-bit SSL Encryption</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
