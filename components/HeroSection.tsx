"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ZodiacMandala from "./ZodiacMandala";

/* ── Mouse parallax orbs ── */
function Orbs() {
  const [m, setM] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e: MouseEvent) =>
      setM({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  const spring = { type: "spring" as const, damping: 30, stiffness: 80 };
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <motion.div animate={{ x: -m.x, y: -m.y }} transition={spring}
        className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full will-change-transform"
        style={{ background: "radial-gradient(circle,rgba(230,211,163,.2) 0%,transparent 70%)", filter: "blur(40px)" }} />
      <motion.div animate={{ x: m.x * 0.7, y: m.y * 0.7 }} transition={spring}
        className="absolute top-[50%] right-[5%] w-72 h-72 rounded-full will-change-transform"
        style={{ background: "radial-gradient(circle,rgba(180,160,120,.15) 0%,transparent 70%)", filter: "blur(50px)" }} />
    </div>
  );
}

/* ── Zodiac background pattern ── */
function ZodiacBg() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
      <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
        <circle cx="400" cy="400" r="350" stroke="#E6D3A3" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="280" stroke="#E6D3A3" strokeWidth="0.3" />
        <circle cx="400" cy="400" r="200" stroke="#E6D3A3" strokeWidth="0.3" />
        {[0, 30, 60, 90, 120, 150].map((a) => (
          <line key={a} x1={400 + 350 * Math.cos((a * Math.PI) / 180)} y1={400 + 350 * Math.sin((a * Math.PI) / 180)}
            x2={400 - 350 * Math.cos((a * Math.PI) / 180)} y2={400 - 350 * Math.sin((a * Math.PI) / 180)}
            stroke="#E6D3A3" strokeWidth="0.2" />
        ))}
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-28 pb-20">
      <Orbs />
      <ZodiacBg />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Script tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-script text-2xl md:text-3xl lg:text-4xl text-gold mb-6 md:mb-8 px-4"
          style={{ letterSpacing: "0.03em", textShadow: "0 0 8px rgba(230,211,163,0.15)" }}
        >
          Not magic. Just stardust and algorithms.
        </motion.p>

        {/* CELE [ZodiacMandala] STIK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 mb-8 sm:mb-12"
        >
          <span
            className="font-logo uppercase text-gold leading-none"
            style={{
              fontSize: "clamp(3rem, 18vw, 10rem)",
              letterSpacing: "0.08em",
              textShadow: "0 0 6px rgba(230,211,163,0.2)",
            }}
          >
            Cele
          </span>

          {/* The zodiac mandala between CELE and STIK */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="mx-2 md:mx-4 flex-shrink-0"
            style={{
              width: "clamp(120px, 20vw + 40px, 200px)",
              height: "clamp(120px, 20vw + 40px, 200px)",
            }}
          >
            <ZodiacMandala size={undefined as any} />
          </motion.div>

          <span
            className="font-logo uppercase text-gold leading-none"
            style={{
              fontSize: "clamp(3rem, 18vw, 10rem)",
              letterSpacing: "0.08em",
              textShadow: "0 0 6px rgba(230,211,163,0.2)",
            }}
          >
            stik
          </span>
        </motion.div>

        {/* Subtitles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="space-y-1 mb-10"
        >
          <p className="font-heading uppercase text-gold text-base md:text-lg" style={{ letterSpacing: "0.06em" }}>
            Unlock the Secrets of Your Stars &amp; Palm
          </p>
          <p className="font-body text-gold-muted text-sm md:text-base" style={{ letterSpacing: "0.04em" }}>
            Discover What the Universe Whispers Through Your Palm
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/upload")}
            className="btn-outline px-10 py-3 text-sm"
          >
            Upload Palm Photo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
