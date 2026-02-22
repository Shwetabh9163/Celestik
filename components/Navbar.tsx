"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ZodiacMandala from "./ZodiacMandala";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-3 left-3 right-3 z-50 border border-gold-border rounded"
      style={{ background: "rgba(10,10,46,0.85)", backdropFilter: "blur(6px)" }}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-14">
        {/* Logo with zodiac mandala */}
        <Link href="/" className="flex items-center gap-2">
          <ZodiacMandala size={30} />
          <span
            className="font-logo text-lg uppercase text-gold"
            style={{ letterSpacing: "0.14em", textShadow: "0 0 6px rgba(230,211,163,0.2)" }}
          >
            Celestik
          </span>
        </Link>

        {/* Pill nav links */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <Link href="/upload" className="nav-pill hidden md:block">
            Palmistry
          </Link>
          <Link href="/#astrology" className="nav-pill hidden md:block">
            Astrology
          </Link>
          <Link href="/#how-it-works" className="nav-pill hidden md:block">
            How It Works
          </Link>
          <Link href="/#contact" className="nav-pill text-[10px] sm:text-xs">
            Contact Us
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
